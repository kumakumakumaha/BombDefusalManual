//重複しない1～maxNumの整数乱数を生成する関数
/**
 * @param {number} maxNum - 取りうる最大値
 * @param {number} generateArrayLength - 生成する配列の長さ
 * @return {number[]}
 */
function generateRandomNumArray(maxNum, generateArrayLength) {
  let generateArray = []; //ランダム格納用配列
  let numberArray = []; //ランダム生成用配列

  //ランダム生成用配列を作成
  for (let i = 0; i < maxNum; i++) {
    numberArray[i] = i + 1;
  }

  //ランダム格納用配列にランダム整数を格納
  for (let j = 0, len = numberArray.length; j < generateArrayLength; j++, len--) {
    let rndNum = Math.floor(Math.random() * len);
    generateArray.push(numberArray[rndNum]);
    numberArray[rndNum] = numberArray[len - 1];
  }

  return generateArray;
}//end function

