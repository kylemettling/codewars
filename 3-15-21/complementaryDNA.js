function DNAStrand(dna){
    const flipIt = {
        'C': "G",
        "G": "C",
        "T": "A",
        "A": "T"
    }
    dna = dna.split('')
    dna.forEach((a, b) => dna[b] = flipIt[a])
    console.log(dna.join(''));
  }






DNAStrand("AAAA")
DNAStrand("ATTGC")
DNAStrand("GTAT")