"use client";

export default function InputField({
	date,
	defaultValue,
	roomCode,
	endpoint,
	label,
}: {
	date?: string;
	defaultValue: string | undefined;
	roomCode?: string;
	endpoint: string;
	label?: string;
}) {
	return (
		<div>
			{label ? (
				<label
					htmlFor="comment"
					className="block text-sm font-medium leading-6 text-gray-900"
				>
					{label}
				</label>
			) : undefined}
			<div className="relative mt-2 rounded-md shadow-sm">
				<input
					type="text"
					name="price"
					id="price"
					className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
					placeholder="Kommentar"
					defaultValue={defaultValue}
					onChange={(e) =>
						fetch(
							`/api/${endpoint}?roomCode=${roomCode}&date=${date}&person=${e.target.value}`
						)
					}
				/>
			</div>
		</div>
	);
}
