import fs from "fs";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const newProjectFiles = path.join(__dirname, "../../files/newproject");

export function initProject(title: string) {
    const dest = path.join(process.cwd(), title);
    fs.cpSync(newProjectFiles, dest,{ recursive: true, });
    // TODO: entrar en el directorio del proyecto (dest) i activar npm install automaticamente
}

export function installOptionalLibraries() {

}

export function modifyTitles(_newTitle: string) {
    // TODO: acceder al readme, directorio y packagejson y cambiar el titulo por newTItle
}
