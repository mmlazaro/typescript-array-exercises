import { candidates } from './data';
import { Candidate } from './models';

interface Position {
	company: string;
	position: string;
	location: string;
	skills: string[];
	experience: number;
}

function findCandidateForPosition(
	candidates: Candidate[],
	position: Position
): Candidate | undefined {
	// Write a function that returns the first candidate that has at least 2 skills required for the position and required experience.
	// Implementation goes here
	return undefined;
}

const position: Position = {
	company: 'Acme Inc.',
	position: 'Software Engineer',
	location: 'New York, NY',
	skills: ['Java', 'Spring', 'Agile development'],
	experience: 3
};

const selectedCandidate = findCandidateForPosition(candidates, position);
console.log(selectedCandidate);
