import { Meteor } from "meteor/meteor";
import { Mongo } from "meteor/mongo";
import { check } from "meteor/check";

export const Tasks = new Mongo.Collection("tasks");
//comprobamos que estemos en el servidor
if (Meteor.isServer) {
  // Esto solo corre en el servidor, por eso lo exportamos alli.
  Meteor.publish("tasks", function tasksPublication() { //publica en el cliente la tarea
    return Tasks.find(); 
  });
}

Meteor.methods({
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
  //se encarga de volver privadas o no las tareas
  "tasks.setPrivate"(taskId, setToPrivate) {
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
