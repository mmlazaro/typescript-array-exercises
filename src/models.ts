export interface Candidate {
	id: string;
	name: string;
	email: string;
	skills: string[];
	experience: number;

	// Add other properties of your candidate object here
}

export interface OpenPosition {
	company: string;
	position: string;
	location: string;
	skills: string[];
	experience: number;
}
