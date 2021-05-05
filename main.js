const getElemId = function (arg) {
  return document.getElementById(arg);
};

// aboutmeのフェードイン
const aboutMeQuestions = document.querySelectorAll(".aboutme__question");

// questionに接しているanswerを出現させる関数
const drawAnswer = function (order) {
  aboutMeQuestions[order].onmouseover = function () {
    const aboutMeAnswer = aboutMeQuestions[order].nextElementSibling; // HTMLで見て次の要素を取ってくる
    aboutMeAnswer.classList.add("seen"); // 見えるようにする
  };
};

// questionがある個数分だけイベントを作る
for (let i = 0; i < aboutMeQuestions.length; i++) {
  drawAnswer(i);
}

// 国の開け閉め
const aboutMeAnswerTrip = getElemId("aboutme__answer__trip");
const aboutMeAnswerCountriesContainer = getElemId("aboutme__answer__countries");
const aboutMeAnswerCountries = document.querySelectorAll(
  ".aboutme__answer__country"
);

// クリックする
aboutMeAnswerTrip.onclick = function () {
  // 両方にopenクラスをつける
  aboutMeAnswerTrip.classList.toggle("open");
  aboutMeAnswerCountriesContainer.classList.toggle("open");
  for (let i = 0; i < aboutMeAnswerCountries.length; i++) {
    aboutMeAnswerCountries[i].classList.toggle("open");
  }
};

// galleryのスライドショー
const galleryScreen = getElemId("gallery__slide");
const galleryArrowRight = getElemId("gallery__slide__arrow-right");
const galleryArrowLeft = getElemId("gallery__slide__arrow-left");

// 写真の情報
let slideImages = [
  "cambodia1.jpg",
  "india1.jpg",
  "malaysia1.jpg",
  "philippines1.jpg",
  "singapore1.png",
  "thailand1.png",
  "vietnam1.jpg",
];

// 初期値
let i = 0;

// 次の写真に変える関数
const changeImage = function () {
  if (i === Number(slideImages.length) - 1) {
    i = 0;
  } else {
    i++;
  }
  galleryScreen.src = `./images/${slideImages[i]}`;
};

// 自動でスライド
setInterval(changeImage, 5000); // 写真を返る動作を5秒に1回する

// 右を押したら次の写真
galleryArrowRight.onclick = function () {
  changeImage();
};

// 左を押したら前の写真
galleryArrowLeft.onclick = function () {
  if (i === 0) {
    i = Number(slideImages.length) - 1;
  } else {
    i -= 1;
  }
  galleryScreen.src = `./images/${slideImages[i]}`;
};
