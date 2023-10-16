function anagram(string1, string2) {
  const aCharMap = buildCharMap(string1);
  const bCharMap = buildCharMap(string2);

  if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
    return false;
  }

  for (let char in aCharMap) {
    if (aCharMap[char] !== bCharMap[char]) {
      return false;
    }
  }

  return true;
}

function buildCharMap(string) {
  const charMap = {};

  for (let char of string.toLowerCase()) {
    charMap[char] = charMap[char] + 1 || 1;
  }

  return charMap;
}

module.exports = anagram;
