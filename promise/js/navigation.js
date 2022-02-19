'use strict';
{
  // 要素数にあわせてナビゲーションボタン(白黒マーク)を作る
  // インデックス番号に応じて処理対象を決める
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
  let prev = count;
  let common = "";
  let common_left = "";
  let common_right = "";
  let right_click_count = 0;
  let left_click_count = 0;

  right_btn.addEventListener('click', () => {
    if (right_click_count >= 1) {
      common = next;
      console.log("right_click_count >= 1_のcommon", common);
    }
    // 一度以上左側が押された上で右側を押す場合
    if (right_click_count >= 1 && !(common === "")) {
      next = common_left;
      // 左側クリックカウントを初期化しておく
      left_click_count = 0;
    }
    right_click_count++;
    next++;
    if (next >= count) {
      nabBtn[next - 1].classList.toggle('current');
      next = 0;
      nabBtn[next].classList.toggle('current');
    } else {
      nabBtn[next].classList.toggle('current');
      nabBtn[next - 1].classList.toggle('current');
    }
    common = next;
    common_right = common;
  });

  left_btn.addEventListener('click', () => {
    if (left_click_count >= 1) {
      common = prev;
      console.log("left_click_count >= 1_のcommon", common);
    }
    // 一度以上右側が押された上で左側を押す場合
    if (left_click_count >= 1 && !(common === "")) {
      prev = common_right;
      // 右側クリックカウントを初期化しておく
      right_click_count = 0;
    }
    // 読み込み直後に右側を押す場合

    left_click_count++;
    prev--;

    if (prev == (count - 1)) {
      nabBtn[prev].classList.toggle('current');
      nabBtn[0].classList.toggle('current');
    } else {
      nabBtn[prev].classList.toggle('current');
      nabBtn[prev + 1].classList.toggle('current');
    }
    console.log("prev " + prev);
    if (prev == 0) {
      prev = 5;
    }
    common = prev;
    common_left = common;
  });




}