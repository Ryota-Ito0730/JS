'use strict';
{

  function left() {
    // 左ボタンを連続で何回押しているかのチェック
    left_click_count++;
    // 一度以上右側が押された上で左側を押す場合
    prev--;
    if (right_click_count >= 1 && !(common_left == "")) {
      prev = common_left;
      // 右側クリックカウントを初期化しておく
      console.log("prev_in_if → " + prev);
      right_click_count = 0;
    }

    console.log("prev_a → " + prev);
    if (prev < 0) {
      nabBtn[prev].classList.toggle('current');
      nabBtn[0].classList.toggle('current');
      prev = count - 1;
      console.log("prev初期化されたよ")
    } else {
      console.log('prev_hoge', prev);
      nabBtn[prev].classList.toggle('current');
      nabBtn[prev + 1].classList.toggle('current');
      console.log("next罪挙がってるよ " + prev)
    }

    console.log("prev_b → " + prev);
    common_right = prev;
    console.log("common_right_under → " + common_right);
  }

}// ブロックエンド