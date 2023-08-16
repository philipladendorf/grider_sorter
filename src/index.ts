import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';

const numbersCollection = new NumbersCollection([4, 1, 4, 5, 6]);
let sorter = new Sorter(numbersCollection);
sorter.sort();
console.log(sorter.collection);

const charactersCollection = new CharactersCollection('bergduWA');

sorter = new Sorter(charactersCollection);
sorter.sort();
console.log(sorter.collection);
