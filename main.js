// // aboutmeのフェードイン

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

// // 国を管理

const aboutMeAnswerCountriesContainer = document.getElementById(
  "aboutme__answer__countries"
);

// 国情報
let countryinfo = [
  { image: "singapore.png", text: "singapore" },
  { image: "thailand.png", text: "thailand" },
  { image: "india.png", text: "india" },
  { image: "vietnam.png", text: "vietnam" },
  { image: "malaysia.png", text: "malaysia" },
  { image: "cambodia.png", text: "cambodia" },
  { image: "philippines.png", text: "philippines" },
];

// 一つの国要素を返す関数
const createCountry = function (order) {
  const aboutmeAnswerCountry = document.createElement("div");
  aboutmeAnswerCountry.className = "aboutme__answer__country";

  const aboutmeAnswerCountryImg = document.createElement("img");
  aboutmeAnswerCountryImg.className = "aboutme__answer__country-img";
  aboutmeAnswerCountryImg.src = `./images/${countryinfo[order].image}`;
  aboutmeAnswerCountryImg.alt = countryinfo[order].text;
  aboutmeAnswerCountry.append(aboutmeAnswerCountryImg);

  const aboutmeAnswerCountryName = document.createElement("p");
  aboutmeAnswerCountryName.className = "aboutme__answer__country__name";
  aboutmeAnswerCountryName.textContent = countryinfo[order].text;
  aboutmeAnswerCountry.append(aboutmeAnswerCountryName);

  return aboutmeAnswerCountry;
};

// 国配列の個数分だけ作って追加する
for (let i = 0; i < countryinfo.length; i++) {
  const countryResult = createCountry(i);
  aboutMeAnswerCountriesContainer.append(countryResult);
}

// // 国の開け閉め

const aboutMeAnswerTrip = document.getElementById("aboutme__answer__trip");
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

// // galleryのスライドショー

const galleryScreen = document.getElementById("gallery__slide");
const galleryArrowRight = document.getElementById(
  "gallery__slide__arrow-right"
);
const galleryArrowLeft = document.getElementById("gallery__slide__arrow-left");
const galleryDiscription = document.getElementById(
  "gallery__slide__discription"
);

// 写真の情報
let slideInfo = [
  { image: "cambodia1.jpg", text: "カンボジア・プレアビヒア寺院" },
  { image: "india1.jpg", text: "インド・スラム街ジャキーラの子供達" },
  { image: "malaysia1.jpg", text: "マレーシア・ペトロナスツインタワー" },
  { image: "philippines1.jpg", text: "フィリピン・パングラオ島" },
  { image: "singapore1.png", text: "シンガポール・ガーデンズバイザベイ" },
  { image: "thailand1.png", text: "タイ・タラートロットファイラチャダー" },
  { image: "vietnam1.jpg", text: "ベトナム・ホイアン" },
];

// 初期値
let i = 0;
galleryDiscription.textContent = slideInfo[0].text;
galleryScreen.src = `./images/${slideInfo[0].image}`;

// 次の写真に変える関数
const changeImage = function () {
  if (i === Number(slideInfo.length) - 1) {
    i = 0;
  } else {
    i++;
  }
  galleryDiscription.textContent = slideInfo[i].text;
  galleryScreen.src = `./images/${slideInfo[i].image}`;
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
    i = Number(slideInfo.length) - 1;
  } else {
    i -= 1;
  }
  galleryDiscription.textContent = slideInfo[i].text;
  galleryScreen.src = `./images/${slideInfo[i].image}`;
};

// タブレット以下用メニュー

const smallMenu = document.getElementById("small-menu");
const headerNavListsContainer = document.getElementById(
  "header__nav-container__lists"
);
const bar1 = document.getElementById("bar1");
const bar2 = document.getElementById("bar2");
const bar3 = document.getElementById("bar3");
const navListsItems = document.querySelectorAll(
  ".header__nav-container__lists-item"
);

smallMenu.onclick = function () {
  headerNavListsContainer.classList.toggle("open");
  bar1.classList.toggle("open");
  bar2.classList.toggle("open");
  bar3.classList.toggle("open");
};

for (let i = 0; i < navListsItems.length; i++) {
  navListsItems[i].onclick = function () {
    if (headerNavListsContainer.classList.contains("open")) {
      headerNavListsContainer.classList.remove("open");
      bar1.classList.remove("open");
      bar2.classList.remove("open");
      bar3.classList.remove("open");
    }
  };
}

// // スムーズにスクロール

// const navLinks = document.querySelectorAll(".nav-link");
// // 情報を得る関数
// const getInfo = function (num) {
//   const triggerHref = navLinks[num].getAttribute("href"); // link自身のhrefを保存
//   const targetHref = document.getElementById(triggerHref.replace("#", "")); // linkの#を除いたidを持つ要素を保存 nodeの情報で位置が分かる

//   const positionFromPageTopToBrawerTop = pageYOffset; // ページのトップからブラウザのトップまで
//   const targetPositionFromBrawer = targetHref.getBoundingClientRect().top; // ブラウザのトップから目的地までの距離
//   targetPositon =
//     positionFromPageTopToBrawerTop + targetPositionFromBrawer - 64; // 合計 - headerの高さ

//   return targetPositon; // 結果を返す
// };
// // クリックイベントを登録する関数
// const clickLink = function (num) {
//   navLinks[num].onclick = function (e) {
//     e.preventDefault(); // 標準のスクロールを停止する
//     getInfo(num); // targetPositionの取得
//     // 組み込みメソッドscrollで位置, 動作指定する
//     window.scroll({
//       top: targetPositon,
//       behavior: "smooth",
//     });
//   };
// };
// // linkがある個数分だけイベントを作る
// for (let i = 0; i < navLinks.length; i++) {
//   clickLink(i);
// }
