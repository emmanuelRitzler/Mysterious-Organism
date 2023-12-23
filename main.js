// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};
console.log(originalStrand = mockUpStrand());

const pAequorFactory = (specimenNum, dna) => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return {
    specimenNum: specimenNum,
    dna: dna,
    mutate() {
      const dnaBases = ['A', 'T', 'C', 'G'];
      let slicedBase = dnaBases.slice(dnaBases[0], 4);
      
      let originalBase = returnRandBase();
      
      let indexToDelete = dnaBases.indexOf(originalBase);
      
      let modifiedBase = dnaBases.splice(indexToDelete, 1);
      
      modifiedBase = dnaBases[Math.floor(Math.random() * 3)];
      
      const MockUpStrand = () => {
        const newStrand = [];
        for (let i = 0; i < 15; i++) {
          newStrand.push(returnRandBase());
        }
        return newStrand;
      };
      const newStrand = MockUpStrand()
      return newStrand;
    },
    compareDNA() {
      console.log(originalStrand)
      let identicalBases = [];

      for(let i = 0; i < mockUpStrand().length; i++) {
        if(mockUpStrand()[i] === organism.mutate()[i]) {
          identicalBases.push(mockUpStrand()[i]);
        }
      };

      console.log(identicalBases);
      let percentageOfSimilarity = (identicalBases.length / mockUpStrand().length) * 100;
      return `The strand #1 and the strand #2 have ${percentageOfSimilarity}% DNA in common.`;
    } 
  }
};
const organism = pAequorFactory(1, mockUpStrand);
console.log(organism.compareDNA());






