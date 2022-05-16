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

//Returns a pAequor object
function pAequorFactory(specimenNum, dnaSequence) {
  return {
    specimenNum: specimenNum,
    dna: dnaSequence,
    mutate() {
      //Choose one base and mutate to another base
      const strandIndex = Math.floor(Math.random() * 15);
      const dnaBases = ['A', 'T', 'C', 'G'];
      const originalBase = this.dna[strandIndex];
      
      //kick original base out and randomly mutate
      dnaBases.splice(dnaBases.indexOf(originalBase) ,1);
      const mutateBase = dnaBases[Math.floor(Math.random() * 3)];
      dnaSequence[strandIndex] = mutateBase;
    },
    compareDNA(pAequor) {
      //Return  nothing but log the percentage of DNA in common
      let dnaInCommonCount = 0;
      for (let i = 0; i < 15; i++){
        if (this.dna[i] === pAequor.dna[i]) {
          dnaInCommonCount++;
        }
      }
      const InCommonPercentage = Math.round((dnaInCommonCount / 15) * 100);
      console.log('The percentage of DNA in common is: ' + InCommonPercentage + '%' );
    },
    willLikelySurvive() {
      //Return true or false
      // Will survive if have at least 15*0.6 = 9 base is C or G
      let surviveBase = 0;
      for (base of this.dna){
        if (base === 'C' || base === 'G') {
          surviveBase++;
        } 
      }
      return surviveBase >= 9;
    },
  };
}


const specimen1 = pAequorFactory(1, mockUpStrand());
const specimen2 = pAequorFactory(2, mockUpStrand());
console.log(specimen1.dna);
console.log(specimen1.willLikelySurvive());
specimen1.mutate();
specimen1.compareDNA(specimen1);
specimen1.compareDNA(specimen2);

const batch = [];
for (let i = 1; i < 31; i ++){
  batch.push(pAequorFactory(i, mockUpStrand()).willLikelySurvive());
}
console.log(batch);


