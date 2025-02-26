var QAdata = [        // 問題データ
  ['問題１　答えは　love lv test', 'love', 'lv', 'test'],
  ['飛行機 夢', '飛行機', '夢'],
  ['夢', '夢'],
  ['猿', '猿'],
  ['休日', '休日'],
  ['学校', '学校']
]


let arrayQtxt = [];
for (let i = 1; i < QAdata.length + 1; i++) {
  arrayQtxt.push(document.getElementById("Qtxt" + [i]))
}

for (let i = 0; i < QAdata.length; i++) {
  arrayQtxt[i].textContent = QAdata[i][0]
}

let arrayA = []
let arrayQ = []
let arrayInfo = []
let arrayKR = []

for (let i = 1; i < 3; i++) {
  arrayA.push('A' + i)
  arrayQ.push('Q' + i)
  arrayInfo.push('info' + i)
  arrayKR.push('KR' + i)
}

console.log(arrayA)

// function answer() {
//   for (let i = 0; i < QAdata[0].length; i++) {
//     for (let j = 1; j < QAdata[0].length; j++) {
//       if (arayA[0].value == QAdata[0][j]) {
//         arayInfo[0].style.display = 'inline';
//         arayQ[0].style.display = 'none';
//       } else {
//         arayKR[0].innerHTML = '× 違います'
//       }
//     }
//   }
// }


function answer() {
  for (let i = 0; i < QAdata[0].length+1; i++) {
    if (QAdata[i].includes(document.getElementById(arrayA[i]).value)) {
      document.getElementById(arrayInfo[i]).style.display = 'inline';
      document.getElementById(arrayQ[i]).style.display = 'none';
    } else {
      document.getElementById(arrayKR[i]).innerHTML = "× 違います"
    }
  }
}