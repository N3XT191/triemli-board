import { join } from "path";
import fs from "fs";
import { NextApiRequest, NextApiResponse } from "next";
import { getPeople } from "@/util/getPeople";

export default function removePerson(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const { id } = req.body;

	if (!id) {
		res.status(400).json({ message: "Error - missing id in body" });
		return;
	}

	const path = join(process.cwd(), "src", "data", "people.json");

	const { doctors, nonDoctors } = getPeople();

	const newPeople = {
		doctors: { ...doctors, [id]: undefined },
		nonDoctors: { ...nonDoctors, [id]: undefined },
	};

	fs.writeFileSync(path, JSON.stringify(newPeople, null, 4));

	res.status(200).json({ success: "true" });
}
