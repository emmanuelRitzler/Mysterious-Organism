// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};
//console.log(returnRandBase());

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
      const modifiedStrand = MockUpStrand()
      return modifiedStrand;
    },
    compareDNA() {
      console.log(originalStrand)
      console.log(modifiedStrand = organism.mutate());
      let identicalBases = [];

      for(let i = 0; i < originalStrand.length; i++) {
        if(originalStrand[i] === modifiedStrand[i]) {
          identicalBases.push(originalStrand[i]);
        }
      };
      //console.log(modifiedStrand);

      //console.log(identicalBases);
      let percentageOfSimilarity = (identicalBases.length / originalStrand.length) * 100;
      return `The strand #1 and the strand #2 have ${percentageOfSimilarity}% DNA in common.`;
    },
    willLikelySurvive() {
      let surviveG = modifiedStrand.filter(base => base === 'G');
      let numberOfG = surviveG.length;
      //console.log(numberOfG);
      let surviveC = modifiedStrand.filter(base => base === 'C');
      let numberOfC = surviveC.length;
      //console.log(numberOfC);

      if((numberOfG / modifiedStrand.length) * 100 >= 60 || (numberOfC / modifiedStrand.length) * 100 >= 60) {
        return true;
      }
      else {
        return false;
      } 
    }
  }
};
const organism = pAequorFactory(1, mockUpStrand);
//console.log(organism.compareDNA());
//console.log(organism.willLikelySurvive());

const survivalInstances = [];
const unqualifiedInstances  = [];
let i = 0;
while (i < 100) {
  if (survivalInstances.length === 30) {
    break;
  }

  if (organism.willLikelySurvive() === true) {
    survivalInstances.push(organism.mutate());
  }
  else if (organism.willLikelySurvive() === false) {
    unqualifiedInstances.push(organism.mutate());
  }
  else {
    console.log('There is an error, somewhere.')
  }
  i++;
}
console.log(survivalInstances);
//console.log(unqualifiedInstances);
