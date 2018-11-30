import { Meteor } from "meteor/meteor"; //importamos meteor
import { Mongo } from "meteor/mongo"; //importamos Mongo
import { check } from "meteor/check"; //importamos la funcion check

//exportamos una colleccion de mongo llamada tasks
export const Tasks = new Mongo.Collection("tasks");
//comprobamos que estemos en el servidor
if (Meteor.isServer) {
  // Esto solo corre en el servidor, por eso lo exportamos alli.
  Meteor.publish("tasks", function tasksPublication() {
    //publica en el cliente la tarea

    return Tasks.find({
      //busca los documentos de esa coleccion y los retorna
      $or: [{ private: { $ne: true } }, { owner: this.userId }] //comprueba si las tareas estan privadas
    });
  });
}

Meteor.methods({
  //con esto definimos funciones que pueden ser invocadas por el cliente
  "tasks.insert"(text) {
    check(text, String);

    // Se asegura que el usuario esta logueado para poder ingresar una nota
    if (!this.userId) {
      throw new Meteor.Error("not-authorized");
    }
    //estandar para guardar la tarea en la collecion tasks
    Tasks.insert({
      text,
      createdAt: new Date(),
      owner: this.userId,
      username: Meteor.users.findOne(this.userId).username
    });
  },
  //Estandar para borrar la tarea
  "tasks.remove"(taskId) {
    check(taskId, String);

    Tasks.remove(taskId);
  },
  //Verifica si una tarea esta chekeada
  "tasks.setChecked"(taskId, setChecked) {
    check(taskId, String);
    check(setChecked, Boolean);

    //hace un update al estado de las tareas
    Tasks.update(taskId, { $set: { checked: setChecked } });
  },
  "tasks.setPrivate"(taskId, setToPrivate) {
    //se encarga de volver privadas o no las tareas
    check(taskId, String);
    check(setToPrivate, Boolean);

    const task = Tasks.findOne(taskId);

    // Se asegura que solo el usuario que escribio la tarea puede cambiar si es publica o privada
    if (task.owner !== this.userId) {
      throw new Meteor.Error("not-authorized");
    }
    //Se actualiza tasks
    Tasks.update(taskId, { $set: { private: setToPrivate } });
  }
});
