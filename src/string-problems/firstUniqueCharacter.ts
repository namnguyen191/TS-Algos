const firstUniqueCharacter = (str: string): number => {
  const candidates: { [key: string]: number } = {};

  for (let i = 0; i < str.length; i++) {
    if (candidates[str[i]] === undefined) {
      candidates[str[i]] = i;
    } else {
      candidates[str[i]] = -1;
    }
  }

  for (const [key, value] of Object.entries(candidates)) {
    if (value !== -1) {
      return value;
    }
  }

  return -1;
};

export default firstUniqueCharacter;
