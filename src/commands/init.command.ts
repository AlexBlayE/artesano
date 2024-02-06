import { type Command } from "commander";
import { initProject, modifyTitles } from "../controllers/init.controller.js";

// EXAMPLE -> artesano init example-name-project 

function init(program: Command) {
    program
        .command("init")
        .argument("<name>", "The project name")
        .action(initAction);
}

const initAction = (str: string | undefined, _options: string[]) => {
    if (str === undefined || str === "") {// This conditional it's not necessary but 🤷‍♂️
        console.log("Invalid name argument");
        return;
    }

    initProject(str);
    modifyTitles(str);
};

export default init;
