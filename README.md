# stopwatch-note
https://to-maru.github.io/stopwatch-note/

## 前提
[Docker](https://www.docker.com/)

## 初回環境構築手順（パッケージ更新時も同様）
1. docker-compose.ymlがある階層に移動する
2. `docker-compose run --rm node sh -c 'yarn install'` を実行する
3. Doneというメッセージが出たら完了

## 起動方法
1. docker-compose.ymlがある階層に移動する
2. `docker compose up -d` を実行する
3. 数分の内に、[localhost:3000](localhost:3000)からアプリが確認出来る

## 終了方法
1. docker-compose.ymlがある階層に移動する
2. `docker compose down` を実行する

## デプロイ方法
`git checkout main`
`docker-compose run --rm node sh -c 'yarn build'`
`git subtree push --prefix build/ origin gh-pages`
