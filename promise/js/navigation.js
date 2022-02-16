'use strict';
{
  const ul = document.getElementById('ul');
  const nav = document.getElementById('nav');
  // li要素の合計数をカウントしその分のナビゲーションボタンをつくる
  const count = ul.childElementCount;
  let i = 1;
  while (i <= count) {
    nav.insertAdjacentHTML('beforeend', '<button class="nav_btn"></button>');
    i++;
  }
  // ナビゲーションボタンの要素を配列ライクな形で取得
  const nabBtn = nav.querySelectorAll('.nav_btn');
  // 読み込み直後のスタイルを設置
  nabBtn[0].classList.add('current');

  const right_btn = document.getElementById('right_btn');
  const left_btn = document.getElementById('left_btn');
  let next = 0;
  let prev = 0;
  let common = '';
  right_btn.addEventListener('click', () => {
    next++;
    if (next >= count) {
      nabBtn[next - 1].classList.toggle('current');
      next = 0;
      nabBtn[next].classList.toggle('current');
    } else {
      nabBtn[next].classList.toggle('current');
      nabBtn[next - 1].classList.toggle('current');
    }
    console.log(next);
  });
  left_btn.addEventListener('click', () => {
    prev--;
    if (next >= count) {
      nabBtn[prev - 1].classList.toggle('current');
      next = 0;
      nabBtn[prev].classList.toggle('current');
    } else {
      nabBtn[prev].classList.toggle('current');
      nabBtn[prev - 1].classList.toggle('current');
    }
    console.log(prev);
  });


}