import { join } from "path";
import fs from "fs";
import { NextApiRequest, NextApiResponse } from "next";
import { getPeople } from "@/util/getPeople";
import { Person } from "@/interfaces/Person";

export default function addPerson(req: NextApiRequest, res: NextApiResponse) {
	const { name, phone, doctor, title } = req.body;

	if (!name || !phone) {
		res.status(400).json({ message: "Error - missing name or phone in body" });
		return;
	}

	const path = join(process.cwd(), "src", "data", "people.json");

	const { doctors, nonDoctors } = getPeople();

	const id = (name as string).toLowerCase().replace(" ", "_");
	const newPerson: Person = { name, phone, title, id };
	let newPeople = {};

	if (doctor) {
		newPeople = { doctors: { ...doctors, [id]: newPerson }, nonDoctors };
	} else {
		newPeople = { doctors, nonDoctors: { ...nonDoctors, [id]: newPerson } };
	}

	fs.writeFileSync(path, JSON.stringify(newPeople, null, 4));

	res.status(200).json({ success: "true" });
}
