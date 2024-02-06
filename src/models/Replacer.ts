import fs from "fs";

class Replacer {
    private constructor() {
        
    }

    public static async replace(filePath: string, target: string | RegExp, replacement: string): Promise<void> {

        const data = fs.readFileSync(filePath, {
            encoding: "utf-8",
        });

        const newData = data.replace(target, replacement);

        fs.writeFileSync(filePath, newData, {
            encoding: "utf-8"
        });
    }
}

export default Replacer;
