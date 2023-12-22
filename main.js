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
      console.log(modifiedBase);
      
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
      let originalMock = mockUpStrand();
      let modifiedMock = organism.mutate();
      let identicalBases = [];

      for(let i = 0; i < originalMock.length; i++) {
        if(originalMock[i] === modifiedMock[i]) {
          identicalBases.push(originalMock[i]);
        }
      };
      console.log(originalMock);
      console.log(modifiedMock);
      console.log(originalMock[0]);
      console.log(modifiedMock[0]);
      console.log(originalMock.length);
      console.log(modifiedMock.length);
      console.log(identicalBases.length);
      console.log(identicalBases);
      let percentageOfSimilarity = (identicalBases.length / originalMock.length) * 100;
      return `The strand #1 and the strand #2 have ${percentageOfSimilarity}% DNA in common.`;
    } 
  }
};
const organism = pAequorFactory(1, mockUpStrand);
console.log(organism.mutate());
console.log(organism.compareDNA());






