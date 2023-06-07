import moment from "moment-timezone";
import { useEffect, useState } from "react";

const useCountdown = () => {
	const now = moment().tz("Europe/Zurich");
	const time = now.hour() + now.minute() / 60 + now.second() / 3600;
	const shiftProgres = ((time - 7.75) / 8.75) * 100;

	const [progress, setProgress] = useState(shiftProgres);

	useEffect(() => {
		const interval = setInterval(() => {
			const now = moment().tz("Europe/Zurich");
			const time = now.hour() + now.minute() / 60 + now.second() / 3600;
			const shiftProgres = ((time - 7.75) / 8.75) * 100;

			setProgress(shiftProgres);
		}, 1000);

		return () => clearInterval(interval);
	}, []);

	return progress;
};

export { useCountdown };
