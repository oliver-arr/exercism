export const translate = (rna) => {
  let match = [];

  if (!rna) return match;

  const proteinTranslation = {
    Methionine: ["AUG"],
    Phenylalanine: ["UUU", "UUC"],
    Leucine: ["UUA", "UUG"],
    Serine: ["UCU", "UCC", "UCA", "UCG"],
    Tyrosine: ["UAU", "UAC"],
    Cysteine: ["UGU", "UGC"],
    Tryptophan: ["UGG"],
    STOP: ["UAA", "UAG", "UGA"],
  };

  let codons = [];
  // Convert rna in to codons of 3
  for (let i = 0; i < rna.length; i += 3) {
    codons.push(rna.substring(i, i + 3));
  }

  // Check for STOP codon - STILL NEEDS WORK
  console.log(codons[0].includes(proteinTranslation.STOP[0]));

  // Translate codons to protein
  codons.forEach((codon) => {
    for (let prop in proteinTranslation) {
      if (proteinTranslation[prop].includes(codon)) {
        match.push(prop);
      }
    }
  });
  return match;
};
