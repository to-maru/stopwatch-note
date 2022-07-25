# stopwatch-note
## 開発環境構築（初回のみ）
1. [Docker](https://www.docker.com/)をインストールする（既にしている場合は不要）
2. Dockerfileがある階層に移動する
3. `docker-compose run --rm node sh -c 'cd react-app && yarn install'` を実行する
4. Doneというメッセージが出たら完了

## 起動方法
1. Dockerfileがある階層に移動する
2. `docker compose up -d` を実行する
3. 数分の内に、[localhost:3000](localhost:3000)からアプリが確認出来る

## 終了方法
1. Dockerfileがある階層に移動する
2. `docker compose down` を実行する