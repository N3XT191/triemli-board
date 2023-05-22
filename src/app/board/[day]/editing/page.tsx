import { CheckCircleIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import moment from "moment";
import Select from "./Select";
import { Person } from "@/app/interfaces/Person";
import { getRoom } from "@/app/util/getRoom";

export default function EditingBoard({ params }: { params?: { day: string } }) {
	const roomData = getRoom(params?.day!);

	const day = moment(params?.day);
	const weekday = day.day();

	const makeSelector = (
		doctor: boolean,
		person: Person | undefined,
		label: string,
		roomCode: string
	) => {
		return (
			<div className="flex items-center justify-between pb-2">
				<div className="w-[80px] font-bold">{label}</div>
				<div className="w-[250px]">
					<Select
						doctor={doctor}
						person={person}
						roomCode={roomCode}
						date={day.format("YYYY-MM-DD")}
					/>
				</div>
			</div>
		);
	};

	return (
		<>
			<Link
				href={"/board/" + day.format("YYYY-MM-DD")}
				className="top-10 right-10 absolute"
			>
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
			</div>
			<div className="row-start-3  col-start-2  flex flex-col divide-y-2 divide-gray-300">
				{makeSelector(false, roomData?.["e"][0], "Empfang", "e")}
				{makeSelector(false, roomData?.["m"][0], "Mail", "m")}
				{makeSelector(false, roomData?.["tel"][0], "Telefon", "tel")}
				{makeSelector(false, roomData?.["sp"][0], "Sprechstunde", "sp")}
			</div>
		</>
	);
}
