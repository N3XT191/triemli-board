import { CheckCircleIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import moment from "moment";
import SelectPerson from "./SelectPerson";
import { Person } from "@/interfaces/Person";
import { getBoard } from "@/util/getBoard";
import InputFieldWithSet from "../../../components/InputFieldWithSet";
import { getPeople } from "@/util/getPeople";

const emptyPerson = {
	name: "- leer -",
	title: "",
	phone: 0,
	id: undefined,
};

export default function EditingBoard({ params }: { params?: { day: string } }) {
	const roomData = getBoard(params?.day!);

	const day = moment(params?.day);
	const dateString = day.format("YYYY-MM-DD");

	const makeSelector = (
		doctor: boolean,
		person: Person | undefined,
		label: string,
		roomCode: string
	) => {
		const { doctors, nonDoctors } = getPeople();

		const people = [
			emptyPerson,
			...(doctor ? Object.values(doctors) : Object.values(nonDoctors)),
		];
		return (
			<div className="flex items-center justify-between pb-2">
				<div className="w-[80px] font-bold">{label}</div>
				<div className="w-[250px]">
					<SelectPerson
						people={people}
						person={person}
						roomCode={roomCode}
						date={dateString}
					/>
				</div>
			</div>
		);
	};

	return (
		<>
			<Link href={"/board/" + dateString} className="top-8 right-8 absolute">
				<CheckCircleIcon className="h-10 w-10 " />
			</Link>
			<div className="row-start-2  col-start-1  flex flex-col divide-y-2 divide-gray-300 divide">
				{makeSelector(true, roomData?.[8]?.person, "8/9", "8")}
				{makeSelector(false, roomData?.["pf2"]?.person, "MPA", "pf2")}
				{makeSelector(true, roomData?.[7]?.person, "7", "7")}
			</div>
			<div className="row-start-2  col-start-2  flex flex-col divide-y-2 divide-gray-300">
				{makeSelector(true, roomData?.[1]?.person, "1/2", "1")}
				{makeSelector(false, roomData?.["pf1"]?.person, "MPA", "pf1")}
				{makeSelector(true, roomData?.[3]?.person, "3", "3")}
				{makeSelector(true, roomData?.[4]?.person, "4", "4")}
				{makeSelector(true, roomData?.[5]?.person, "5", "5")}
				{makeSelector(true, roomData?.[6]?.person, "6", "6")}
			</div>
			<div className="row-start-3  col-start-1  flex flex-col divide-y-2 divide-gray-300">
				{makeSelector(true, roomData?.["tag"], "Tagesarzt", "tag")}
				{makeSelector(true, roomData?.["hc"], "HC", "hc")}
				{makeSelector(false, roomData?.["gz"]?.[0], "GZ", "gz")}
			</div>
			<div className="row-start-3  col-start-2  flex flex-col divide-y-2 divide-gray-300">
				{makeSelector(false, roomData?.["e"][0], "Empfang", "e")}
				{makeSelector(false, roomData?.["m"][0], "Mail", "m")}
				{makeSelector(false, roomData?.["tel"][0], "Telefon", "tel")}
				{makeSelector(false, roomData?.["sp"][0], "Sprechstunde", "sp")}
			</div>
			<InputFieldWithSet
				roomCode="comment"
				endpoint="setPerson"
				date={dateString}
				defaultValue={roomData?.["comment"]}
				label={"Kommentar"}
			/>
		</>
	);
}
