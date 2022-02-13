'use strict';
// 画像5枚を1秒順に左方向にスクロールしていく

// const li = document.getElementById('ul');

// console.log(li);
// console.log(ul);
// 最初の子要素
// console.log(ul.firstElementChild);
// // 最後の子要素
// console.log(ul.lastElementChild)
const li = document.querySelectorAll('li');
const slider = () => {
  new Promise((resolve) => {
    // 画像スクロール
    console.log(1);
    let val = 'translate3d(' + 150 + 'px, ' + 0 + 'px, ' + 0 + ')';
    for (let i = 0; i < li.length; i++) {
      li[i].style.transition = '0.4s'
      li[i].style.transform = val;
    }
    resolve();
  }).then(() => {
    return new Promise((resolve) => {
      setTimeout(
        () => {
          console.log(2);
          let val = 'translate3d(' + 0 + 'px, ' + 0 + 'px, ' + 0 + ')';
          for (let i = 0; i < li.length; i++) {
            li[i].style.transition = 'none';
            li[i].style.transform = val;
          }
          ul.firstElementChild.before(ul.lastElementChild);
          resolve();
        }, 400);
    });
  });
  setTimeout(slider, 500);
}
// setTimeoutの時間はアニメーションの時間より100msは足しておくと人の目から見てスムーズに見える
// 課題として.thenで接続する処理をより細分化する必要はある(async/awaiteも導入する必要がありそうだ)
window.addEventListener('load', () => {
  slider();
});
