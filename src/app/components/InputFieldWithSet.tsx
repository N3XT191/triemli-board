"use client";

export default function InputFieldWithSet({
	date,
	defaultValue,
	roomCode,
	endpoint,
	label,
	setting,
}: {
	date?: string;
	defaultValue: string | undefined;
	roomCode?: string;
	endpoint: string;
	label?: string;
	setting?: string;
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
					className="block w-full rounded-md border-0 py-1.5 px-4  text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
					placeholder="Kommentar"
					defaultValue={defaultValue}
					onChange={(e) =>
						fetch(
							`/api/${endpoint}?roomCode=${roomCode}&date=${date}&person=${e.target.value}&setting=${setting}&value=${e.target.value}`
						)
					}
				/>
			</div>
		</div>
	);
}
