let consecutiveYesCount = 0;

function askADHDQuestions() {
  const questions = [
    "？",
    "？",
    "？",
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
