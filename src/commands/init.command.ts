import { type Command } from "commander";
import { initProject, modifyTitles } from "../controllers/init.controller.js";

// EXAMPLE -> artesano init example-name-project -ejs

function init(program: Command) {
    program
        .command("init")
        .argument("<name>", "The project name")
        .action(initAction);
}

const initAction = (str, _options) => {
    // Comprovar options
    initProject(str);
    modifyTitles(str);    
    // TODO: mirar si ha escrito algun argumento para instlar librerias externas
};

//TODO: crear opciones para que venga con ejs, con jest, cors, helmet, jwt, mongoose, sequelize, https, public (-a, --all es que venga con todo)
//TODO: crear opciones para que pueda quitar archivos y configuraciones por defecto iniciales como quitar eslint

export default init;
