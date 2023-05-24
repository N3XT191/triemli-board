import { join } from "path";
import fs from "fs";
import { NextApiRequest, NextApiResponse } from "next";

export default function setPerson(req: NextApiRequest, res: NextApiResponse) {
	const { date, person, roomCode } = req.query;
	console.log(date, person, roomCode);

	if (!date || !roomCode) {
		res
			.status(400)
			.json({ message: "Error - missing date or RoomCode in query" });
		return;
	}

	const postsDirectory = join(process.cwd(), "src", "data", "days");
	const fullPath = join(postsDirectory, `${date}.csv`);

	if (!fs.existsSync(fullPath)) {
		fs.writeFileSync(
			fullPath,
			"1,\npf1,\n3,\n4,\n5,\n6,\n8,\npf2,\n7,\nhc,\ntag,\ne,\nm,\nsp,\ntel,\ngz,\ncomment,\n"
		);
	}

	const fileContents = fs.readFileSync(fullPath, "utf8");
	const rows = fileContents.split("\n");
	const splitRows = rows.map((row) => row.split(","));
	splitRows.forEach((row) => {
		if (row[0] === roomCode) {
			row[1] = person !== "undefined" ? (person as string) : "";
		}
	});

	fs.writeFileSync(fullPath, splitRows.map((row) => row.join(",")).join("\n"));

	res.status(200).json({ success: "true" });
}
