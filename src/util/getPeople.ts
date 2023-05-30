import { join } from "path";
import fs from "fs";
import { Person } from "@/interfaces/Person";

export const getPeople = () => {
	const peoplePath = join(process.cwd(), "src", "data", "people.json");

	const fileContents = fs.readFileSync(peoplePath, "utf8");

	return JSON.parse(fileContents) as {
		doctors: {
			[key: string]: Person;
		};
		nonDoctors: {
			[key: string]: Person;
		};
	};
};
