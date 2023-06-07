import { getBoard } from "@/util/getBoard";
import moment from "moment";
import "moment/locale/de";

import Link from "next/link";

export default function BoardLayout({
	children,
	params,
}: {
	children: React.ReactNode;
	params?: { day: string };
}) {
	const now = moment();
	const day = moment(params?.day);
	const weekday = day.day();
	const time = now.hour() + now.minute() / 60 + now.second() / 3600;
	const shiftProgres = ((time - 7.75) / 8.75) * 100;
	console.log(time, shiftProgres);
	const roomData = getBoard(params?.day!);
	return (
		<main className="flex min-h-screen flex-col items-center justify-between text-3xl relative h-full">
			<div className="inline-grid grid-rows-[auto_auto_auto_auto] grid-cols-2 gap-[10px] gap-x-[100px] min-w-[1200px] h-full px-6">
				<div className="col-span-2  col-start-1 row-start-1   flex justify-center items-center flex-col ">
					<div className="relative overflow-hidden w-screen flex justify-center border-b-[--triemli-blue] border-b-4  ">
						<h2 className="text-7xl font-extralight w-full flex justify-center items-center  text-white bg-[--triemli-blue] h-full  pt-1 pb-3">
							Ambi Chirurgie
						</h2>
						<h2
							className="text-7xl font-extralight w-full flex justify-center absolute left-0 top-0 right-0 bottom-0 items-center bg-white text-[--triemli-blue]  h-full  pt-1 pb-3"
							style={{
								clipPath: `inset(0 0 0 ${shiftProgres}%)`,
								transition: "clip-path 1s linear",
							}}
						>
							Ambi Chirurgie
						</h2>
					</div>
					<div className="flex justify-between mb-1 mt-3">
						<Link
							href={
								"/board/" +
								moment(params?.day)
									.subtract(weekday === 1 ? 3 : 1, "day")
									.format("YYYY-MM-DD")
							}
						>
							<svg
								fill="none"
								stroke="currentColor"
								strokeWidth={1.5}
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
								aria-hidden="true"
								height={48}
								className="pr-[80px]"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M15.75 19.5L8.25 12l7.5-7.5"
								/>
							</svg>
						</Link>
						<div className="font-bold text-5xl">
							{moment(params?.day).format("dd D. M. YYYY")}
						</div>
						<Link
							href={
								"/board/" +
								moment(params?.day)
									.add(weekday === 5 ? 3 : 1, "day")
									.format("YYYY-MM-DD")
							}
						>
							<svg
								fill="none"
								stroke="currentColor"
								strokeWidth={1.5}
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
								aria-hidden="true"
								height={48}
								className="pl-[80px]"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M8.25 4.5l7.5 7.5-7.5 7.5"
								/>
							</svg>
						</Link>
					</div>
				</div>
				{children}
			</div>
		</main>
	);
}
