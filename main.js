// フェードイン
// 取得
const aboutMeQuestions = document.querySelectorAll(".aboutme-question");
// console.log(aboutMeQuestions);

for (let i = 0; i < aboutMeQuestions.length; i++) {
  // マウスホバーさせる
  aboutMeQuestions[i].onmouseover = function () {
    const aboutMeAnswer = aboutMeQuestions[i].nextElementSibling; // HTMLで見て次の要素を取ってくる
    // console.log(aboutMeAnswer);
    aboutMeAnswer.classList.add("seen"); // 見えるようにする
  };
}

// 国を閉じたり閉まったりできる
// 取得
const aboutMeAnswerTrip = document.getElementById("aboutme__answer__trip");
const aboutMeAnswerCountries = document.getElementById(
  "aboutme__answer__countries"
);
const aboutMeAnswerCountry = document.querySelectorAll(
  ".aboutme__answer__country"
);
// console.log(aboutMeAnswerTrip);
// console.log(aboutMeAnswerCountries);

// クリックする
aboutMeAnswerTrip.onclick = function () {
  // 両方にopenクラスをつける
  aboutMeAnswerTrip.classList.toggle("open");
  aboutMeAnswerCountries.classList.toggle("open");
  for (let i = 0; i < aboutMeAnswerCountry.length; i++) {
    // console.log(aboutMeAnswerCountry[i]);
    aboutMeAnswerCountry[i].classList.toggle("open");
  }
};

// galleryのスライドショー
