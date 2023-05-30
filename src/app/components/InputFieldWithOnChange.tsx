"use client";

export default function InputFieldWithOnChange({
	placeholder,
	label,
	onChange,
	value,
}: {
	placeholder: string | undefined;
	label?: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	value: string;
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
					value={value}
					className="block w-full rounded-md border-0 py-1.5 px-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
					placeholder={placeholder}
					onChange={onChange}
				/>
			</div>
		</div>
	);
}
