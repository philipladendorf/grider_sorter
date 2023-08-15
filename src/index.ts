import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';

const numbersCollection = new NumbersCollection([4, 1, 4, 5, 6]);
const sorter = new Sorter(numbersCollection);
sorter.sort();
console.log(sorter.collection);
