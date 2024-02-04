import fs from "fs";

class Replacer {
    private constructor() {
        
    }

    public static async replace(filePath: string, target: string | RegExp, replacement: string): Promise<void> {
        fs.readFile(filePath, {
            encoding: "utf-8",
        }, (error, data) => {
            if (error) throw new Error("");

            const newContent = data.replace(target, replacement);

            fs.writeFile(filePath, newContent, {
                encoding: "utf-8",
            }, (error2) => {
                if (error2) throw new Error("");
            });
        });
    }
}

export default Replacer;
