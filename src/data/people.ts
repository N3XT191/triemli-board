import { Person } from "../interfaces/Person";

const nonDoctorsArray: Person[] = [
	{ name: "Safete Sejdiu", title: "MPA", phone: 0, id: "safete" },
	{ name: "Dea Shehu", title: "MPA", phone: 0, id: "dea" },
	{ name: "Dorotea Gaeta", title: "MPA", phone: 0, id: "dorotea" },
	{ name: "Tamara Gertsch", title: "MPA", phone: 0, id: "tamara" },
	{ name: "Maja Bürgi", title: "MPA", phone: 0, id: "maja" },

	{ name: "Susanne Ulrich", title: "", phone: 0, id: "susanne" },
	{ name: "Yasmine Huber", title: "", phone: 0, id: "yasmine" },
	{ name: "Vildane Rrudhani", title: "", phone: 0, id: "vildane" },

	{ name: "Stefanie Chiesura ", title: "64728", phone: 64728, id: "stefanie" },
	{ name: "Nicole Schmidlin ", title: "", phone: 64728, id: "nicole" },
	{ name: "Gabriela Martini", title: "", phone: 67263, id: "gabriela" },
];

const doctorsArray: Person[] = [
	{ name: "David Goerdeler", title: "AA", phone: 64134, id: "goerdeler" },
	{ name: "Dr. Abo Youssef", title: "OA", phone: 64727, id: "abo_youssef" },
	{ name: "Prof. Dr. Platz", title: "CA", phone: 64700, id: "platz" },
	{ name: "Dr. L. Lance", title: "AA", phone: 64132, id: "lance" },
	{ name: "Dr. Leimbacher", title: "OA", phone: 73133, id: "leimbacher" },
	{ name: "O. Klee", title: "AA", phone: 64145, id: "klee" },
	{ name: "PD Dr. Dietrich", title: "CA?", phone: 0, id: "dietrich" },
	{ name: "Dr. Kilgus", title: "LA", phone: 64706, id: "kilgus" },
	{ name: "Dr. Johannson", title: "OA", phone: 64734, id: "johannson" },
	{ name: "P. Iliev", title: "AA", phone: 64135, id: "iliev" },
	{ name: "Dr. Rosenkranz", title: "LA", phone: 64704, id: "rosenkranz" },
	{ name: "Dr. Spagna", title: "OA", phone: 64731, id: "spagna" },
	{ name: "Dr. Müller", title: "LA", phone: 64710, id: "müller" },
	{ name: "Dr. Löwe", title: "OA", phone: 64724, id: "löwe" },
	{ name: "Jana Siegfried", title: "AA", phone: 64105, id: "siegfried" },
	{ name: "Dr. Aloji", title: "OA", phone: 64732, id: "aloji" },
	{ name: "Julia Leipner", title: "AA", phone: 64101, id: "leipner" },
	{ name: "Dr. Bauchspiess", title: "LA", phone: 64719, id: "bauchspiess" },
	{ name: "Berfin Caliskan", title: "AA", phone: 64118, id: "caliskan" },
	{ name: "Dr. Sproedt", title: "AA", phone: 72960, id: "sproedt" },
];

export const doctors = Object.fromEntries(
	doctorsArray.map((k) => [k.id, k])
) as {
	[key: string]: Person;
};

export const nonDoctors = Object.fromEntries(
	nonDoctorsArray.map((k) => [k.id, k])
) as {
	[key: string]: Person;
};
