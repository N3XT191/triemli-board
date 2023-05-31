"use client";

import { useState } from "react";
import InputFieldWithOnChange from "./InputFieldWithOnChange";
import Select from "./Select";
import { useRouter } from "next/navigation";

export default function AddPerson({}: {}) {
	const [doctor, setDoctor] = useState(false);
	const [title, setTitle] = useState("");
	const [name, setName] = useState("");
	const [phone, setPhone] = useState("");

	const router = useRouter();

	return (
		<div>
			<h2 className="text-2xl font-bold mt-8">Person hinzufügen</h2>
			<div className="flex mb-4">
				<div className="w-[120px] mr-4">
					<Select
						options={["Ja", "Nein"]}
						onChange={(value) => setDoctor(value === "Ja")}
						label="Arzt"
						defaultValue="Nein"
					/>
				</div>
				<div className="w-[120px] mr-4">
					<InputFieldWithOnChange
						placeholder={"Titel"}
						label="Titel (AA/OA etc.)"
						onChange={(e) => setTitle(e.target.value)}
						value={title}
					/>
				</div>
				<div className=" w-[120px]">
					<InputFieldWithOnChange
						placeholder={"Telefon"}
						label="Telefon"
						onChange={(e) => setPhone(e.target.value)}
						value={phone}
					/>
				</div>
			</div>
			<InputFieldWithOnChange
				placeholder={"Name"}
				label="Name"
				onChange={(e) => setName(e.target.value)}
				value={name}
			/>
			<button
				onClick={async () => {
					const response = await fetch("/api/addPerson", {
						body: JSON.stringify({ name, title, doctor, phone }),
						headers: {
							"Content-Type": "application/json",
						},
						method: "POST",
					});
					const result = await response.json();
					if (result.success) {
						console.log("added person successfully");
						setTitle("");
						setName("");
						setPhone("");
					}
				}}
				className="mt-4 bg-blue-500 hover:bg-blue-700 text-white  py-2 px-4 text-sm rounded"
			>
				Hinzufügen
			</button>
		</div>
	);
}
