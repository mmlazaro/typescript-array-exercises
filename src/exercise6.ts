import { openPositions } from './data';
import { OpenPosition } from './models';

function getCompaniesByLocation(
	openPositions: OpenPosition[],
	targetLocation: string
): string[] {
	// Write a function that will return companies from the specific location passed as a parameter to that function.
	// Implementation goes here
	return [];
}

const targetLocation: string = 'New York, NY';

const companiesInLocation = getCompaniesByLocation(
	openPositions,
	targetLocation
);
console.log(companiesInLocation);
