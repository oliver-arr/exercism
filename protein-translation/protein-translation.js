export const translate = (rna) => {
  let match = [];
  let codons = [];

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

  // Convert rna in to codons of 3
  for (let i = 0; i < rna.length; i += 3) {
    codons.push(rna.substring(i, i + 3));
  }

  // Check for STOP codon at start of rna
  if (proteinTranslation.STOP.includes(codons[0])) {
    return match;
  }

  // STOP codon middle of codons
  const index = codons.findIndex((codon) => {
    if (proteinTranslation.STOP.includes(codon)) {
      return codon;
    }
  });
  if (index !== -1) {
    codons = codons.slice(0, index);
  }

  // Translate codons to protein
  codons.forEach((codon) => {
    for (let protein in proteinTranslation) {
      if (proteinTranslation[protein].includes(codon)) {
        match.push(protein);
      }
    }
  });

  return match;
};
