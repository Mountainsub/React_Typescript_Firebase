<img src = "https://user-images.githubusercontent.com/70077254/124348138-34a31080-dc23-11eb-87a7-552ebd48dcb7.PNG" style = "text-align:center">
<img src = "https://user-images.githubusercontent.com/70077254/124348554-864c9a80-dc25-11eb-9257-9a8a7e949e70.PNG" style = "text-align:center">
<img src = "https://user-images.githubusercontent.com/70077254/122793080-bfb40a80-d2f5-11eb-980f-0607c005ad06.PNG" style = "text-align:center">
<img src = "https://user-images.githubusercontent.com/70077254/124348135-32d94d00-dc23-11eb-8fb2-a516beeec0b5.PNG" style = "text-align:center">
<img src = "https://user-images.githubusercontent.com/70077254/124348136-340a7a00-dc23-11eb-9aac-652df8ba5f82.PNG" style = "text-align:center">
<img src = "https://user-images.githubusercontent.com/70077254/124348137-340a7a00-dc23-11eb-8144-cdf576a87ddf.PNG" style = "text-align:center">


# React_Typescript_Firebase

開発環境：言語 Typescript ライブラリ React, @material-ui, etc. データベース Firebase サーバー Google Cloud Platform<br>
内容：ログイン認証、Todo管理アプリ<br>
企画背景：Reactとデータベース(Firestore)との連動を学習するため、実装しました。

# URL
https://digital-river-306210.web.app/
# create-react-app　…　--typescriptを打ち込んだ後
<ul>
  コマンド<br>
npx npm install @typescript-eslint/parser@4.1.0　(versionは4.2.0未満であること)<br>
npx yarn add -D @types/react <br>
npx yarn add eslint-config-react-app
</ul>
# firebase と連携する
<ul>
  コマンド<br>
npx yarn add firebase <br>
</ul>
#　インポート一覧
<ul>
  コマンド<br>
npx yarn add @material-ui/core <br>
npx yarn add @material-ui/icons <br>
npx yarn add @material-ui/styles<br>
npx yarn add react-router-dom <br>
</ul> 
# デプロイ
今回はGoogle Cloud Platformも使ってデプロイ。
```
? What do you want to use as your public directory? build
? Configure as a single-page app (rewrite all urls to /index.html)? Yes
? Set up automatic builds and deploys with GitHub? No
? File build/index.html already exists. Overwrite? No
i  Skipping write of build/index.html

i  Writing configuration info to firebase.json...
i  Writing project information to .firebaserc...
```

<ul>
  コマンド<br>
  npx yarn add firebase-tools<br>
  firebase login<br>
  firebase init<br>
  　・「Add Firebase to an existing Google Cloud Platform project」を選択。</br>
  firebase deploy<br>
 <br>
</ul>
完成！
