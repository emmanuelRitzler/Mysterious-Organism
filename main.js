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
//console.log(originalStrand = mockUpStrand());

const pAequorFactory = (specimenNum, dna) => {
  let modifiedStrand = [];
  const dnaBases = ['A', 'T', 'C', 'G'];
  return {
    specimenNum: specimenNum,
    dna: dna,
    // Transforming the provided dna strand into a new one by modifying the base
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
    // Comparing the original strand and the new one
    compareDNA() {
      console.log(originalStrand)
      console.log(modifiedStrand = organism.mutate());
      let identicalBases = [];

      for(let i = 0; i < originalStrand.length; i++) {
        if(originalStrand[i] === modifiedStrand[i]) {
          identicalBases.push(originalStrand[i]);
        }
      };
      console.log(modifiedStrand);

      //console.log(identicalBases);
      let percentageOfSimilarity = (identicalBases.length / originalStrand.length) * 100;
      return `The strand #1 and the strand #2 have ${percentageOfSimilarity}% DNA in common.`;
    },
    // Evaluating the chance of surviving by checking if the strand has more than 60% of G or C bases in the strand
    willLikelySurvive() {
      let surviveG = organism.mutate().filter(base => base === 'G');
      let numberOfG = surviveG.length;
      //console.log(numberOfG);
      let surviveC = organism.mutate().filter(base => base === 'C');
      let numberOfC = surviveC.length;
      //console.log(numberOfC);

      let percentageOfG = (numberOfG / organism.mutate().length) * 100;
      let percentageOfC = (numberOfC / organism.mutate().length) * 100;

      //console.log('Percentage of G:', percentageOfG);
      //console.log('Percentage of C:', percentageOfC);

      if(percentageOfG >= 60 || percentageOfC >= 60) {
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

// Creating an array of 30 instances that passed the check of the .willLikelySurvive() method
const survivalInstances = [];
let i = 0;

while (survivalInstances.length < 30 && i < 10000) {
  const newOrganism = pAequorFactory(i + 1, mockUpStrand());

  //console.log(newOrganism.dna);
  //console.log(newOrganism.willLikelySurvive());
  
  if (newOrganism.willLikelySurvive()) {
    survivalInstances.push(newOrganism);
  }

  i++;
}

console.log(survivalInstances);


