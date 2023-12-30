import { Candidate } from './models';

function filterCandidatesBySkills(
	candidates: Candidate[],
	requiredSkills: string[]
): Candidate[] {
	// Write a function that will return an array of candidates’ emails

	// Implementation goes here
	return [];
}

// Example data
const candidates: Candidate[] = [
	{
		id: '1',
		name: 'John',
		skills: ['JavaScript', 'React', 'Node.js'],
		email: 'john@example.com',
		experience: 1
	},
	{
		id: '2',
		name: 'Jane',
		skills: ['Java', 'Spring', 'Hibernate'],
		email: 'jane@example.com',
		experience: 2
	}
	// Add more candidates as needed
];

const requiredSkills: string[] = ['JavaScript', 'React'];

const filteredCandidates = filterCandidatesBySkills(candidates, requiredSkills);
console.log(filteredCandidates);
