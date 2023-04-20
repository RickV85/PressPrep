export default class StringUtil {
  static capFirstLetter(word: string) {
    const firstLetter = word[0].toUpperCase();
    const restOfWord = word.slice(1);
    const capWord = `${firstLetter}${restOfWord}`;
    return capWord;
  }
}
