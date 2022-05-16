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
    }
  };
}


const specimen1 = pAequorFactory(1, mockUpStrand());
console.log(specimen1.dna);
specimen1.mutate();
console.log(specimen1.dna);
specimen1.mutate();
console.log(specimen1.dna);



