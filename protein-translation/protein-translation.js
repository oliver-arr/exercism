export const translate = rna => {
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
    STOP: ["UAA", "UAG", "UGA"]
  };

  let str;
  let rnaLength = rna.length;

  let start = 0;
  let end = 3;

  const codonTranslator = str => {
    Object.keys(proteinTranslation).forEach(protein => {
      if (proteinTranslation[protein].includes(str)) {
        match.push(protein);
      }
    });
  };

  do {
    str = rna.substring(start, end);
    codonTranslator(str);
    start = end;
    end += 3;
  } while ((rnaLength -= 3));

  return match;
};
