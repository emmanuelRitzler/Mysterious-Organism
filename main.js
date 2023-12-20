// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};
console.log(returnRandBase());

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};
console.log(mockUpStrand());

const pAequorFactory = (specimenNum, dna) => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  console.log(dnaBases);
  return {
    specimenNum: specimenNum,
    dna: dna,
    mutate() {
      let originalBase = returnRandBase();
      let indexToDelete = dnaBases.indexOf(i);
      // remove the output of returnRandBase from the dnaBases array. Then assign the Math.floor and .random method with * 3 to the new array
      console.log(modifiedBase);
    }
  }
};

console.log(pAequorFactory(1, mockUpStrand()));


const dnaBases = ['A', 'T', 'C', 'G'];
let slicedBase = dnaBases.slice(dnaBases[0], 4);
console.log(slicedBase);

let originalBase = returnRandBase();
console.log(originalBase);

let indexToDelete = dnaBases.indexOf(originalBase);
console.log(indexToDelete);

let modifiedBase = dnaBases.splice(indexToDelete, 1);
console.log(dnaBases);

modifiedBase = dnaBases[Math.floor(Math.random() * 3)];
console.log(modifiedBase);

const MockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};
console.log(MockUpStrand());


