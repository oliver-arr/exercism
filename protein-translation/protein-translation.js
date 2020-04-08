export const translate = rna => {
  let match = [];

  const proteinTranslation = {
    Methionine: ["AUG"],
    Phenylalanine: ["UUU", "UUC"],
    Leucine: ["UUA", "UUG"],
    Serine: ["UCU", "UCC", "UCA", "UCG"],
    Tyrosine: ["UAU", "UAC"],
    Cysteine: ["UGU", "UGC"],
    Tryptophan: ["UGG"],
    STOP: ["UAA", "UAG", "UGA"]
  };

  Object.keys(proteinTranslation).forEach(protein => {
    if (proteinTranslation[protein].includes(rna)) {
      match.push(protein);
    }
  });
  return match;
};
