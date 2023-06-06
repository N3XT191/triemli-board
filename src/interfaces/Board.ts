import { Person } from "./Person";
import { Room } from "./Room";

export interface Board {
	1?: Room;
	3?: Room;
	4?: Room;
	5?: Room;
	6?: Room;
	7?: Room;
	8?: Room;
	pf1?: Room;
	pf2?: Room;
	hc?: Person;
	tag?: Person;
	gz?: Person;
	tel?: Person;
	tel2?: Person;
	e?: Person;
	e2?: Person;
	m?: Person;
	m2?: Person;
	sp?: Person;
	comment: string;
}
