import { type Command } from "commander";

function newApi(program: Command) {
    program
        .command("new")
        .argument("<api name>", "The new api name")
        .action((str, _options) => {
            console.log(str);
        });
}

// TODO: cuando se crea una nueva api se añade directamente a index.ts
export default newApi;
