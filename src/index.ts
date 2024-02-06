#!/usr/bin/env node

import { Command } from "commander";
import init from "./commands/init.command.js";
import make from "./commands/make.command.js";
import newApi from "./commands/new.command.js";

const program = new Command();

program
    .name("artesano")
    .description("A project manager for express apis")
    .version("1.0.0");

init(program);// Make a new project
make(program);// Make a new module (Router, Controller etc)
newApi(program);// Make a new API
// new -> artesano <api_name> new get
// delete -> artesano <api_name> delete get <get_name>
// TODO: comando update
// TODO: comando list -> routes / apis / models 

program.parse();
