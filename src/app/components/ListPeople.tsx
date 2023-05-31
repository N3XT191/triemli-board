"use client";

import { Person } from "@/interfaces/Person";
import { TrashIcon } from "@heroicons/react/20/solid";

export default function AddPerson({
	doctors,
	nonDoctors,
}: {
	doctors: Person[];
	nonDoctors: Person[];
}) {
	const makePerson = (person: Person) => (
		<div key={person.id} className="p-2 flex justify-between w-full">
			<div>{person.name}</div>
			<TrashIcon
				onClick={async () => {
					const response = await fetch("/api/removePerson", {
						body: JSON.stringify({ id: person.id }),
						headers: {
							"Content-Type": "application/json",
						},
						method: "POST",
					});
					const result = await response.json();
					if (result.success) {
						console.log(`removed ${person.name} successfully`);
					}
				}}
				className="w-6 h-6 cursor-pointer"
			/>
		</div>
	);

	return (
		<div className="inline-grid grid-cols-2 gap-[40px] w-full h-full">
			<div className="col-start-1">
				<h2 className="text-2xl font-bold">Ärzte</h2>
				<div className="divide-y-2 divide-gray-300 w-[300px]">
					{doctors
						.sort((a, b) => (a.name < b.name ? -1 : 1))
						.map((doctor) => makePerson(doctor))}
				</div>
			</div>
			<div className="col-start-2">
				<h2 className="text-2xl font-bold">Andere</h2>
				<div className="divide-y-2 divide-gray-300 w-[300px]">
					{nonDoctors
						.sort((a, b) => (a.name < b.name ? -1 : 1))
						.map((nonDoctor) => makePerson(nonDoctor))}
				</div>
			</div>
			{/*<button
				onClick={async () => {
					const response = await fetch("/api/addPerson", {
						body: JSON.stringify({}),
						headers: {
							"Content-Type": "application/json",
						},
						method: "POST",
					});
					const result = await response.json();
					if (result.success) {
						console.log("added person successfully");
					}
				}}
				className="mt-4 bg-blue-500 hover:bg-blue-700 text-white  py-2 px-4 text-sm rounded"
			>
				Hinzufügen
			</button>*/}
		</div>
	);
}
