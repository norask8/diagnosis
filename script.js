let consecutiveYesCount = 0;

function askADHDQuestions() {
  const questions = [
    "光るものに簡単に気をとられることがありますか？",
    "長いミーティングを途中で夢中にならずにいられますか？",
    "あなたの注意力は金魚よりも短いですか？",
  ];

  let result = "";

  for (let i = 0; i < questions.length; i++) {
    const answer = confirm(questions[i]);

    if (answer) {
      consecutiveYesCount++;
    }
  }

  if (consecutiveYesCount === 3) {
    result = "おっと、仮想のADHDが検出されました！";
  } else if (consecutiveYesCount === 2) {
    result = "2回だけYESですね。特別な何かが起きそうです！";
  } else if (consecutiveYesCount === 1) {
    result = "1回だけYESです。興味深いですね。";
  } else {
    result = "ADHDの兆候は見られませんでした。";
  }

  alert(result);

  consecutiveYesCount = 0; // Reset the count
}
