import { exec } from "child_process";

const initRepoUrl = "";// TODO: crear y añadir repo

export function initProject() {
    exec(`git clone ${initRepoUrl}`, (error, _stdout, _stderr) => {
        if (error) console.log("Please install git");
        else {
            // TODO: cambiar de nombre el titulo del README.md, el del directorio y el del package.json
            console.log("🚀 Project created!!");
        }
    });
}

export function installOptionalLibraries() {

}

export function modifyTitles(_newTitle: string) {
    // TODO: acceder al readme, directorio y packagejson y cambiar el titulo por newTItle
}
