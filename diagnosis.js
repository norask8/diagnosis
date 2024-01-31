function askADHDQuestions() {
  const questions = [
    "光るものに簡単に気をとられることがありますか？",
    "長いミーティングを途中で夢中にならずにいられますか？",
    "あなたの注意力は金魚よりも短いですか？",
    "混乱してもマルチタスクを楽しむことがありますか？",
    "会話の途中で何を話していたか忘れたことがありますか？",
  ];

  const randomQuestion = questions[Math.floor(Math.random() * questions.length)];

  const answer = confirm(randomQuestion);

  const result = answer ? "おっと、仮想のADHDが検出されました！" : "ふう、仮想のADHDはありませんでしたね！";

  alert(result);
}
