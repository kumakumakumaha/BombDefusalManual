const maxNum = 13;

let arrayQtxt = [];
for (let i = 1; i < maxNum + 1; i++) {
  arrayQtxt.push(document.getElementById("Qtxt" + [i]))
}

for (let i = 0; i < maxNum; i++) {
  arrayQtxt[i].textContent = QAdata[i][0]
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
    if (QAdata[i].includes(document.getElementById(arrayA[i]).value)) {
      document.getElementById(arrayInfo[i]).style.display = 'inline';
      document.getElementById(arrayQ[i]).style.display = 'none';
    } else {
      document.getElementById(arrayKR[i]).innerHTML = "× 違います"
    }
  }
}