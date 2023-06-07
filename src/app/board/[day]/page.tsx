export const runtime = "nodejs";

import { getBoard } from "@/util/getBoard";
import { getConfig } from "@/util/getConfig";
import { Board } from "@/interfaces/Board";
import { makeBoard } from "./Board";
import Link from "next/link";
import {
	CogIcon,
	PencilSquareIcon,
	UserGroupIcon,
} from "@heroicons/react/20/solid";
import moment from "moment";

export default async function Board({ params }: { params?: { day: string } }) {
	const roomData = getBoard(params?.day!);
	const day = moment(params?.day);
	const weekday = day.day();

	const config = getConfig();

	return (
		<>
			<div className="absolute top-8 right-8 flex gap-4">
				<Link href={"/board/" + day.format("YYYY-MM-DD") + "/editing"}>
					<PencilSquareIcon
						className={`h-10 w-10 ${weekday === 5 ? "text-white" : undefined}`}
					/>
				</Link>
				<Link href={"/settings"}>
					<CogIcon
						className={`h-10 w-10 ${weekday === 5 ? "text-white" : undefined}`}
					/>
				</Link>
				<Link href={"/people"}>
					<UserGroupIcon
						className={`h-10 w-10 ${weekday === 5 ? "text-white" : undefined}`}
					/>
				</Link>
			</div>

			<div className="absolute bottom-0 left-0 p-4   w-full flex justify-between">
				{roomData ? (
					<div>
						{roomData.comment ? roomData.comment : config.defaultComment}
					</div>
				) : (
					<div />
				)}
				<div>Securitas: {config.securitasNumber}</div>
			</div>
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
