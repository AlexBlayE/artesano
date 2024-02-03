import { type Command } from "commander";

// EXAMPLE -> artesano api1 make controller 

function make(program: Command) {
    program
        .command("make")
        .argument("<module type>", "The project name")
        .action((str) => {
            console.log(str);
        });
}

// TODO: Añadir funcionalidad de Rutas, Controllers, Models, Types, Services, Schemas, Middlewares
export default make;
