import { Accounts } from "meteor/accounts-base"; //Importamos para el manejo de cuentas, gracias al paquete de meteor

Accounts.ui.config({
  passwordSignupFields: "USERNAME_ONLY"
});
