# auto login to miraiseed
ミライシードに自動でログインできるブックマークレットです
# ブックマークレットの使い方など
JSのコードにログイン用URL、出席番号、パスワード、クラスIDを入力したものをブックマークレットに変換したあとにブックマークレットを登録・実行してください。
<br>
予めセットしたログインページではない場合、予めセットしたログインページへ移動して終わります。
<br>
このブックマークレットが原因でログイン情報が漏れても一切責任を負うことはできません。
<br>
なので、誤爆やブックマークレットの自動変換サイトを使うときは気をつけてください。
# クラスID、ログインURLがわからない
> ### クラスIDを取得する方法
> ミライシードのログイン画面で自分のクラスまで入力したあとに開発者ツールを開いてコンソール下のコードを実行した返り値がクラスIDです。
 ```
 document.getElementById('myClassId').value;
 ```
> ### ログインURLを取得する方法
> ミライシードのTOP画面の「スタート」を押したときに出るページのURLがそれなので、それをコピペしてください。
> <br>ログインURLは1行目をそのまま消せば使いませんが、腐ってもログイン情報なので誤爆したとき用に置いています(対策になってるかはわからないが、)

# コピペ用
わざわざJSのコードを変換するのが面倒な人のためにここにブックマークレットに変換したものを貼っておきます。
これにクラスID、出席番号、ログインURL、パスワードを指定の場所に入れて登録するとブックマークレットとして使えます。
```
javascript:window.location.href="URLエンコードしたミライシードのログイン用URL";const Password="パスワード";const StudentNumber="出席番号";const myClassId="自分のクラスのクラスID";document.getElementById("myClassId").value=myClassId;$("input.number").val(StudentNumber);$("input.pass").val(Password);document.getElementsByClassName("btn")[1].click();
```
