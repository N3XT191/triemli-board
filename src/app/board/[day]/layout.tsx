import { PencilSquareIcon } from "@heroicons/react/20/solid";
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
	const day = moment(params?.day);
	const weekday = day.day();
	return (
		<main className="flex min-h-screen flex-col items-center justify-start p-6 text-3xl relative">
			<div className="inline-grid grid-rows-[auto_auto_auto] grid-cols-2 gap-[20px] gap-x-[70px] min-w-[1100px]">
				<div className="col-span-2  col-start-1 row-start-1   flex justify-center items-center flex-col ">
					<h2 className="text-7xl font-extralight mb-2">Ambi Chirurgie</h2>
					<div className="flex justify-between mb-4 mt-5">
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
