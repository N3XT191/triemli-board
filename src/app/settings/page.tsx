import Link from "next/link";
import InputField from "../components/InputField";
import config from "@/data/config.json";
import { CheckCircleIcon } from "@heroicons/react/20/solid";

export default function Settings() {
	return (
		<div className="w-[600px] p-20">
			<Link href={"/"} className="top-8 right-8 absolute">
				<CheckCircleIcon className="h-10 w-10 " />
			</Link>
			<div className=" grid gap-4">
				<h2 className="text-4xl pb-4">Einstellungen</h2>
				<InputField
					defaultValue={config.defaultComment}
					roomCode={undefined}
					endpoint={""}
					label="Kommentar"
				/>
				<InputField
					defaultValue={"" + config.securitasNumber}
					roomCode={undefined}
					endpoint={""}
					label="Securitas Nummer"
				/>
			</div>
		</div>
	);
}
