let consecutiveYesCount = 0;

function askADHDQuestions() {
  const questions = [
    "左目の下に大きなあざはありますか？",
    "一回ウン万円もするネットワークの授業中に永遠とお天気情報やgoogle earthを見ていますか？",
    "32歳にもなって研修先の企業で教官から叱られたことはありますか？",
  ];

  let result = "";

  for (let i = 0; i < questions.length; i++) {
    const answer = confirm(questions[i]);

    if (answer) {
      consecutiveYesCount++;
    }
  }

  if (consecutiveYesCount === 3) {
    result = "おっと、あなたはADHDのようだ。部屋から出るなよ！";
  } else if (consecutiveYesCount === 2) {
    result = "2回だけYESですね。あなたからはP免とヘヤモクの香りがします！";
  } else if (consecutiveYesCount === 1) {
    result = "1回だけYESです。つまらない話を大きな声で話すのはやめましょう。";
  } else {
    result = "ADHDの兆候は見られませんでした。";
  }

  alert(result);

  consecutiveYesCount = 0; // Reset the count
}
