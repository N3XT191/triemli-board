"use client";

import { useCountdown } from "./useShiftProgress";

export default function AmbiProgress() {
	return (
		<div className="relative overflow-hidden w-screen flex justify-center border-b-[--triemli-blue] border-b-4  ">
			<h2 className="text-7xl font-extralight w-full flex justify-center items-center  text-white bg-[--triemli-blue] h-full  pt-1 pb-3">
				Ambi Chirurgie
			</h2>
			<h2
				className="text-7xl font-extralight w-full flex justify-center absolute left-0 top-0 right-0 bottom-0 items-center bg-white text-[--triemli-blue]  h-full  pt-1 pb-3"
				style={{
					clipPath: `inset(0 0 0 ${useCountdown()}%)`,
					transition: "clip-path 1s linear",
				}}
			>
				Ambi Chirurgie
			</h2>
		</div>
	);
}
