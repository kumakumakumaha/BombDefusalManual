const maxNum = 13;

// クイズの問題文を書き込む行をIDで検索
let arrayQtxt = [];
for (let i = 1; i < maxNum + 1; i++) {
  arrayQtxt.push(document.getElementById("Qtxt" + [i]))
}

// QAdataの配列からランダムで13個抜き出す
const quizNum = generateRandomNumArray(QAdata.length-1, maxNum)
let quizArray = []

for (let i = 0; i < maxNum; i++) {
  quizArray.push(QAdata[quizNum[i]])
}

console.log(quizNum)

console.log(quizArray)


for (let i = 0; i < maxNum; i++) {
  arrayQtxt[i].innerHTML = quizArray[i][0]
}

let arrayA = []
let arrayQ = []
let arrayInfo = []
let arrayKR = []

for (let i = 1; i <= maxNum; i++) {
  arrayA.push('A' + i)
  arrayQ.push('Q' + i)
  arrayInfo.push('info' + i)
  arrayKR.push('KR' + i)
}

function answer() {
  for (let i = 0; i < maxNum; i++) {
    if (quizArray[i].includes(document.getElementById(arrayA[i]).value)) {
      document.getElementById(arrayInfo[i]).style.display = 'inline';
      document.getElementById(arrayQ[i]).style.display = 'none';
    } else {
      document.getElementById(arrayKR[i]).innerHTML = "× 違います"
    }
  }
}