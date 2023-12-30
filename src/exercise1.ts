import { candidates } from './data';
import { Candidate } from './models';

interface CandidateRecord {
	[id: string]: Omit<Candidate, 'id'>;
}

//exercise 1
function createRecord(candidates: Candidate[]): CandidateRecord {
	// Write a function that takes as a param list of objects (e.g. candidates) and returns an object that is a record - for a key that is equal to id of a candidate,
	//the value will be the candidate (without id).

	// Implementation goes here
	return {};
}

const result = createRecord(candidates);
console.log(result);
