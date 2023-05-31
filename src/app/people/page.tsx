import Link from "next/link";
import { CheckCircleIcon } from "@heroicons/react/20/solid";

import AddPerson from "../components/AddPerson";
import { getPeople } from "@/util/getPeople";
import ListPeople from "../components/ListPeople";

export default async function People() {
	const { doctors, nonDoctors } = getPeople();
	return (
		<div className="w-screen p-20">
			<Link href={"/"} className="top-8 right-8 absolute">
				<CheckCircleIcon className="h-10 w-10 " />
			</Link>
			<div className=" grid gap-4">
				<h2 className="text-4xl pb-4">Personen</h2>
				<ListPeople
					doctors={Object.values(doctors)}
					nonDoctors={Object.values(nonDoctors)}
				/>
				<AddPerson />
			</div>
		</div>
	);
}
