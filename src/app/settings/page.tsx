import Link from "next/link";
import InputFieldWithSet from "../components/InputFieldWithSet";
import { CheckCircleIcon } from "@heroicons/react/20/solid";

import { getConfig } from "@/util/getConfig";
import AddPerson from "../components/AddPerson";

export default async function Settings() {
	const config = getConfig();
	return (
		<div className="w-[600px] p-20">
			<Link href={"/"} className="top-8 right-8 absolute">
				<CheckCircleIcon className="h-10 w-10 " />
			</Link>
			<div className=" grid gap-4">
				<h2 className="text-4xl pb-4">Einstellungen</h2>
				<InputFieldWithSet
					defaultValue={config.defaultComment}
					roomCode={undefined}
					endpoint={"setSettings"}
					label="Kommentar"
					setting="defaultComment"
				/>
				<InputFieldWithSet
					defaultValue={"" + config.securitasNumber}
					roomCode={undefined}
					endpoint={"setSettings"}
					label="Securitas Nummer"
					setting="securitasNumber"
				/>
				<AddPerson />
			</div>
		</div>
	);
}
