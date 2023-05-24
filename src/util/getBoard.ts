import { join } from "path";
import fs from "fs";
import { Board } from "../interfaces/Board";
import { doctors, nonDoctors } from "../data/people";
import { Person } from "../interfaces/Person";

export const getBoard = (date: string): Board | undefined => {
	const postsDirectory = join(process.cwd(), "src", "data", "days");
	const fullPath = join(postsDirectory, `${date}.csv`);

	if (!fs.existsSync(fullPath)) {
		return;
	}

	const fileContents = fs.readFileSync(fullPath, "utf8");
	const rows = fileContents.split("\n");
	const splitRows = rows.map((row) => row.split(","));

	const board: Board = {
		tel: [] as Person[],
		e: [],
		sp: [],
		m: [],
		gz: [],
		comment: "",
	};
	splitRows.forEach((row) => {
		switch (row[0]) {
			case "1":
			case "3":
			case "4":
			case "5":
			case "6":
			case "7":
			case "8":
				board[row[0]] = {
					person: doctors[row[1]],
					roomLabel: row[0] === "8" ? "8/9" : row[0] === "1" ? "1/2" : row[0],
				};
				break;

			case "pf1":
			case "pf2":
				board[row[0]] = {
					person: nonDoctors[row[1]],
					roomLabel: row[0] === "pf1" ? "64771" : "64772",
				};

				break;
			case "hc":
			case "tag":
				board[row[0]] = doctors[row[1]];
				break;
			case "tel":
			case "e":
			case "m":
			case "gz":
			case "sp":
				if (nonDoctors[row[1]]) {
					board[row[0]]!.push(nonDoctors[row[1]]);
				}
				break;
			case "comment":
				board["comment"] = row[1];
		}
	});

	return board;
};
