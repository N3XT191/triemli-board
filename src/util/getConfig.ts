import { join } from "path";
import fs from "fs";

export const getConfig = (): any => {
	const configDirectory = join(process.cwd(), "src", "data", "config.json");

	if (!fs.existsSync(configDirectory)) {
		console.log("couldnt find config file");
		return;
	}

	const fileContents = fs.readFileSync(configDirectory, "utf8");

	console.log(fileContents);
	return JSON.parse(fileContents);
};
