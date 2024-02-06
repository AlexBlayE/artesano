import fs from "fs";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
import Replacer from "../models/Replacer.js";
import { execSync } from "child_process";

const __dirname = dirname(fileURLToPath(import.meta.url));
const newProjectFiles = path.join(__dirname, "../../files/newproject");

/**
 * Init an artesano project
 * @param title The name of new project
 */
export function initProject(title: string) {
    const dest = path.join(process.cwd(), title);
    fs.cpSync(newProjectFiles, dest,{ recursive: true, });// Copy the project from files dir
    console.log("Please Wait: Installing dependencies");
    execSync(`npm install --prefix ${dest}`);// Install dependencies
    console.log("Ok");
}

/**
 * Modify the name of the package.json and delete the carets in the dependencies
 * @param title The name of new project
 */
export async function modifyTitles(title: string) {
    const projectDir = path.join(process.cwd(), title);
    const packageJsonDir = path.join(projectDir, "package.json");

    Replacer.replace(packageJsonDir, /\^/g, "");
    Replacer.replace(packageJsonDir, /newproject/, title);    
}
