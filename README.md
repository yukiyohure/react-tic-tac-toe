# Tic Tac Toe by React.js
## このサイトについて
私がVanilla JSで書いた[◯×ゲーム](https://github.com/yukiyohure/ws-0300-js-tic-tac-toe)と同じものをReact.jsで実装してみました。
[リンク](https://yukiyohure.github.io/react-tic-tac-toe/)  
![ezgif com-gif-maker](https://user-images.githubusercontent.com/35441214/102362158-66da8100-3ff7-11eb-8d58-64918ff97b00.gif)

## 学んだこと
- Reactでのstate管理の基礎
- class component と functional componentの使い分け
  - class componentで基本的にはstateを扱い、子コンポーネントとなるfunctional componentにはpropsをバケツリレーのように渡してあげるだけ(hooks APIを使うのが最近だと一般的のようだが学習のステップとしてここでは用いないこととする)。
  - 子コンポーネントのfunctional componentでstateを書き換えたいときは、class componentで用意したstateを書き換える関数を子コンポーネントに渡してあげる。
  - lifecycle methodを使うことでコンポーネントの生成から死までの間で任意のタイミングで処理を行うことができる
  - setState()は非同期的にstateの更新を行うので、もしstateの更新直後に更新後の値としてstateを参照したいならsetState()の第二引数にコールバックを渡してあげるか、setStateの引数をコールバック関数にする([公式ドキュメント](https://ja.reactjs.org/docs/state-and-lifecycle.html#state-updates-may-be-asynchronous))。
- styled-componentsの基礎
  - グローバルなスタイル(SMACSSでいうところのbaseみたいなスタイル)は`GlobalStyle.jsx`みたいなコンポーネントを作成してプロジェクトの最上位で使用してあげる。
  - 基本的にclass componentやfunctionl componentの外側で定義する。
