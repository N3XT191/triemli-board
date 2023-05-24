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
const makeOther = (label: string, people: Person[]) => {
	if (Array.isArray(people) && people.length > 0)
		return (
			<div className="flex w-full  p-2">
				<div className="min-w-[200px] pr-2  font-bold">{label}</div>
				<div className="">
					{people.map((p) => (
						<div key={p.id} className="flex justify-between w-full">
							<div key={p.name}>{p.name}</div>
							{p.phone ? (
								<div className="text-xl font-bold pl-[20px] pt-[2px]">
									{p.phone}
								</div>
							) : undefined}
						</div>
					))}
				</div>
			</div>
		);
};
export const makeBoard = (roomData: Board) => {
	return (
		<>
			<div className="row-start-2  col-start-1  flex flex-col divide-y-2 divide-gray-300 divide">
				{makeRoom(roomData[8])}
				{makeRoom(roomData["pf2"])}
				{makeRoom(roomData[7])}
			</div>
			<div className="row-start-2  col-start-2  flex flex-col divide-y-2 divide-gray-300">
				{makeRoom(roomData[1])}
				{makeRoom(roomData["pf1"])}
				{makeRoom(roomData[3])}
				{makeRoom(roomData[4])}
				{makeRoom(roomData[5])}
				{makeRoom(roomData[6])}
			</div>
			<div className="row-start-3  col-start-1  flex flex-col justify-between h-">
				<div className="flex flex-col divide-y-2 divide-gray-300">
					{roomData["tag"]
						? makeOther("Tagesarzt", [roomData["tag"]])
						: undefined}
					{roomData["hc"] ? makeOther("HC", [roomData["hc"]]) : undefined}
					{makeOther("GZ", roomData["gz"])}
				</div>
			</div>
			<div className="row-start-3  col-start-2  flex flex-col divide-y-2 divide-gray-300">
				{makeOther("Empfang", roomData["e"])}
				{makeOther("Mail", roomData["m"])}
				{makeOther("Telefon", roomData["tel"])}
				{makeOther("Sprechstunde", roomData["sp"])}
			</div>
		</>
	);
};
