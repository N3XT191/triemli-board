import moment from "moment-timezone";
import { redirect } from "next/navigation";

export default function Home() {
	const day = moment();
	const dateString = day.format("YYYY-MM-DD");
	redirect("/board/" + dateString);
}
