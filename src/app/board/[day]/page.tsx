export const runtime = "nodejs";

import { getRoom } from "@/app/util/getRoom";
import { Board } from "@/app/interfaces/Board";
import { makeBoard } from "./Board";
import Link from "next/link";
import { PencilSquareIcon } from "@heroicons/react/20/solid";
import moment from "moment";

export default function Board({ params }: { params?: { day: string } }) {
	const roomData = getRoom(params?.day!);
	const day = moment(params?.day);
	const weekday = day.day();
	return (
		<>
			<Link
				href={"/board/" + day.format("YYYY-MM-DD") + "/editing"}
				className="top-10 right-10 absolute"
			>
				<PencilSquareIcon className="  h-10 w-10 " />
			</Link>
			{roomData ? (
				makeBoard(roomData)
			) : (
				<div className="flex justify-center items-center row-start-2  col-span-2">
					Für diesen Tag haben wir keine Daten gefunden!
				</div>
			)}
		</>
	);
}
