# todoアプリ作成_react
* step1は下記サイトを参照して作成しました
    * 「モダンJavaScriptの基礎から始める挫折しないためのReact入門」
    * https://www.udemy.com/course/modern_javascipt_react_beginner/
    
## 実装した機能
* タスクの追加
* タスクの削除
* タスクの編集
* 絞り込み機能（ステータス絞り込み）


## 設計/工夫した点
* タスク登録/削除/完了に関して
    * 各タスク登録に関してはタイトル/期限/詳細/ステータスをプロパティとするtodocontentsというオブジェクト変数に持たせ、未完了タスク/完了タスク全体はそれぞれそのオブジェクトを要素として持つ配列として全体の処理を考えました
        * ``` task = {title : --- , date : ---, detail : ---, status: ---}```
        * ``` 
          incomplete/complete_tasks = [
            {
                title: ---,
                date: ---,
                detail: ---,
                status: ---,
            },
            {
                title: ---,
                date: ---,
                detail: ---,
                status: ---,
            }
            ...
            ]
            ```

    * 削除/完了/戻すイベントに関しては、同様の設計として作成しました<br>
         1.　対象タスクのindexを引数として受け取る<br>
         2.　既存の配列(タスク全体)からそのindexにあたる要素（タスク）を削除<br>
         3.　更新関数(set~)でタスク全体を更新<br>

* 編集機能に関して
    * 編集機能はタスク入力時のonChangeイベントを参考に、EditTodosという関数を作成しました<br>
         1.　引数として、編集対象となるタスクのindex、既存の配列（タスク全体）、更新関数、編集したいプロパティを受け取る<br>
         2.　既存の配列(タスク全体)からそのindexにあたる要素（タスク）を削除し、編集した値を持つタスクを置き換え<br>
         3.　更新関数(set~)でタスク全体を更新<br>

* フィルター機能に関して
    * 絞り込み機能として、ステータスによる絞り込み機能を実装しました<br>
         1.　all/waiting/doing/pendingをvalueにもつbuttonタグを用意<br>
         2.　クリックイベントでどれかのボタンがクリックされた際に、そのvalueの値をstatusプロパティとしてもつタスクを取得<br>
         3.　そのタスクは表示、それ以外のタスク非表示する<br>


## 苦労した点
#### **詳細や期日、ステータスをどのようにタスクに紐づけるか**
タスクに紐づく詳細等の情報をどのように持たせようかと少し考えました。<br>
最初はそれぞれタスク名と同様に新しく変数を用意し、それらをstate管理する方法も考えてみました。のですが、変数が増えていきそうなことと、編集機能を実装した時の他の情報との紐付けが難しくなる気がし、タスクを一つのオブジェクトとし付随する情報をプロパティとしてもたせる方向性にしました。
　
　
#### **編集機能をどのように実装するか**
編集機能をどう実装しようか悩みました。<br>
結局のところは「クリックして編集ができるようにしたいな...」と思いタスク入力時の仕様をもとに、useStateを使い、常にステート管理する形で編集を行えるようにしてみました。

また、未完了タスクのタスク名編集をおこおうとした際に、１文字編集するだけでカーソルが外れてしまい、１文字ずつしか編集できない状態に陥りました。
原因としてはkeyを「タスク名＋id」として設定していたため、タスク名を編集するとkeyが変わり、新たにコンポーネントが更新されてしまっていた...というのが原因のようでした。<br>
keyを「complete-{id}」みたいな形にすることで回避できましたが、state管理の動き方などをちょっと理解できたのでよかったです。<br>
　

#### **フィルタ機能をどのように実装するか**
最終的にはDOM操作で絞り込む形となりました。<br>
もっといいやり方があると思ったのですが、自力で考えられる範囲としてはこれが限界でした...<br>
次の課題としては、フィルタ機能、ソート機能をDOM操作を使わずにstate管理で実装したいなと思います。<br>
　
　
## 次にトライしたいこと
* フィルタ機能、ソート機能のstate管理を使った実装
* 編集機能の別方法での実装

## リンク
* https://todolist-react-step1.vercel.app/
