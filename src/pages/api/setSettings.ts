import { join } from "path";
import fs from "fs";
import { NextApiRequest, NextApiResponse } from "next";
import config from "@/data/config.json";

export default function setPerson(req: NextApiRequest, res: NextApiResponse) {
	const { setting, value } = req.query;
	console.log("changing setting: ", setting, value);

	if (!setting || typeof value === "undefined") {
		res
			.status(400)
			.json({ message: "Error - missing setting or value in query" });
		return;
	}

	const settingsDirectory = join(process.cwd(), "src", "data");
	const fullPath = join(settingsDirectory, `config.json`);
	fs.writeFileSync(
		fullPath,
		JSON.stringify({ ...config, [setting as string]: value }, null, 4)
	);

	res.status(200).json({ success: "true" });
}
