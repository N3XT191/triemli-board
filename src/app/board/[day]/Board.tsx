import { Board } from "@/interfaces/Board";
import { Person } from "@/interfaces/Person";
import { Room } from "@/interfaces/Room";
const makeRoom = (room: Room | undefined) => {
	if (room && room.person)
		return (
			<div className="flex w-full justify-between p-4 ">
				<div className="flex items-center">
					<div className="w-[120px]">{room.person.title}</div>
					<div>{room.person.name}</div>
					{room.person.phone ? (
						<div className="text-xl font-bold pl-[20px] pt-[2px]">
							{room.person.phone}
						</div>
					) : undefined}
				</div>
				<div className="font-bold">{room.roomLabel}</div>
			</div>
		);
};
const makeOther = (label: string, person: Person | undefined) => {
	if (person)
		return (
			<div className="flex w-full  p-2">
				<div className="min-w-[210px] pr-2  font-bold">{label}</div>
				<div className="flex justify-between w-full">
					<div>{person.name}</div>
					{person.phone ? (
						<div className="text-xl font-bold pl-[20px] pt-[2px]">
							{person.phone}
						</div>
					) : undefined}
				</div>
			</div>
		);
};
const makeOtherDouble = (
	label: string,
	person1: Person | undefined,
	person2: Person | undefined
) => {
	if (person1 || person2)
		return (
			<div className="flex w-full  p-2">
				<div className="min-w-[210px] pr-2  font-bold">{label}</div>
				<div className="flex flex-col">
					{person1 ? (
						<div className="flex justify-between w-full">
							<div>{person1.name}</div>
							{person1.phone ? (
								<div className="text-xl font-bold pl-[20px] pt-[2px]">
									{person1.phone}
								</div>
							) : undefined}
						</div>
					) : undefined}
					{person2 ? (
						<div className="flex justify-between w-full">
							<div>{person2.name}</div>
							{person2.phone ? (
								<div className="text-xl font-bold pl-[20px] pt-[2px]">
									{person2.phone}
								</div>
							) : undefined}
						</div>
					) : undefined}
				</div>
			</div>
		);
};
export const makeBoard = (roomData: Board) => {
	return (
		<>
			<div className="row-start-2  col-start-1  flex flex-col divide-y-2 divide-[--triemli-blue] divide">
				{makeRoom(roomData[8])}
				{makeRoom(roomData["pf2"])}
				{makeRoom(roomData[7])}
			</div>
			<div className="row-start-2  col-start-2  flex flex-col divide-y-2 divide-[--triemli-blue]">
				{makeRoom(roomData[1])}
				{makeRoom(roomData["pf1"])}
				{makeRoom(roomData[3])}
				{makeRoom(roomData[4])}
				{makeRoom(roomData[5])}
				{makeRoom(roomData[6])}
			</div>
			<div className="row-start-3  col-start-1  flex flex-col justify-between h-">
				<div className="flex flex-col divide-y-2 divide-[--triemli-blue]">
					{roomData["tag"]
						? makeOther("Tagesarzt", { ...roomData["tag"], phone: 64903 })
						: undefined}
					{roomData["hc"] ? makeOther("HC", roomData["hc"]) : undefined}
					{makeOther("GZ", roomData["gz"])}
				</div>
			</div>
			<div className="row-start-3  col-start-2  flex flex-col divide-y-2 divide-[--triemli-blue]">
				{makeOtherDouble("Empfang", roomData["e"], roomData["e2"])}
				{makeOtherDouble("Mail", roomData["m"], roomData["m2"])}
				{makeOtherDouble("Telefon", roomData["tel"], roomData["tel2"])}
				{makeOther("Sprechstunde", roomData["sp"])}
			</div>
		</>
	);
};
