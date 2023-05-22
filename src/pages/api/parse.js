import { PdfReader } from "pdfreader";
import { join } from "path";

export default function parsePdf(req, res) {
	const postsDirectory = join(process.cwd(), "public", "pdfs");
	const fullPath = join(postsDirectory, "aerzte_w21.pdf");

	let rows = {}; // indexed by y-position
	const days = ["Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag"];

	function flushRows() {
		const sortedKeys = Object.keys(rows) // => array of y-positions (type: float)
			.sort((y1, y2) => parseFloat(y1) - parseFloat(y2)); // sort float positions

		if (sortedKeys.length === 0) {
			return;
		}

		const rowArray = sortedKeys
			.map((key) => rows[key])
			.map((row) => row.sort((a, b) => a.x - b.x));

		const flatArray = rowArray.flat(2);
		const dayIndexes = days.map((day) =>
			flatArray.findIndex((item) => item.text === day)
		);

		console.log(dayIndexes);
		const dayRows = dayIndexes.map((index, n) =>
			flatArray.slice(index, dayIndexes[n + 1])
		);

		dayRows[4] = dayRows[4].slice(
			0,
			dayRows[4].findIndex((item) => item.x < flatArray[dayIndexes[4]].x)
		);

		const dayRowsSorted = dayRows.map((row) => row.sort((a, b) => a.x - b.x));
		const dayRowsSortedCleaned = dayRowsSorted.map((row) => {
			const temp = [];
			row.forEach((item, index) => {
				if (index !== 0 && row[index]?.x - row[index - 1].x < 1) {
					return;
				}

				if (row[index + 1]?.x - row[index].x > 1 || index === row.length - 1) {
					temp.push(item);
				} else {
					temp.push({ ...item, text: item.text + row[index + 1]?.text });
				}
			});
			return temp;
		});

		console.log(dayRowsSortedCleaned.map((row) => row.map((i) => i.text)));
		console.log(dayRowsSortedCleaned.map((row) => row.length));

		rows = {}; // clear rows for next page
	}

	new PdfReader().parseFileItems(fullPath, (err, item) => {
		if (err) {
			console.error({ err });
		} else if (!item) {
			flushRows();
			console.log("END OF FILE");
		} else if (item.page) {
			flushRows(); // print the rows of the previous page
			console.log("PAGE:", item.page);
		} else if (item.text) {
			// accumulate text items into rows object, per line
			item.y = Math.floor(item.y * 10);
			(rows[item.y] = rows[item.y] || []).push(item);
		}
	});

	res.status(200).json({ success: "true" });
}
