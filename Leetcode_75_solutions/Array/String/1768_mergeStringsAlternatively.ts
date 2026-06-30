function mergeAlternately(word1: string, word2: string): string {
const totalLength = Math.max(word1.length, word2.length);
let newWord = '';

for (let i = 0; i < totalLength; i++){
if( i < word1.length) newWord += word1[i];
if( i < word2.length) newWord += word2[i];
}
return newWord;
};

console.log(mergeAlternately('abc','pdrs'));
//Output : apbdcrs
