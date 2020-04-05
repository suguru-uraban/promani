# 統合アニメ制作管理ツール「プロまに」

## 環境構築

### 1. Homebrew のインストール

下記の公式ページのスクリプトををターミナルに貼り付け実行する。

途中、Xcode Command Line Tools のインストールを促されるので、RETURN キーを押して続行。

[https://brew.sh/index_ja](https://brew.sh/index_ja)

終わったらバージョン確認でインストールされているか確認。

```command
% brew --version
```

### 2. nodebrew のインストール

Homebrew を使って nodebrew をインストールする。

```command
% brew install nodebrew
```

nodebrew のセットアップをする。

```command
% nodebrew setup
```

パスを通す。

最新の MacOS では bash ではなく zsh を使う。

```command
% echo 'export PATH=$HOME/.nodebrew/current/bin:$PATH' >> ~/.zshrc
```

zsh を反映させる。

```command
% source ~/.zshrc
```

終わったらバージョン確認でインストールされているか確認。

```command
% nodebrew -v
```

nodebrew を利用して node の最新版をインストール

```command
% nodebrew install-binary latest
```

> Warning が表示される場合は.nodebrew 配下に src ディレクトリを作る。
>
> ```command
> % mkdir -p ~/.nodebrew/src
> ```
>
> インストールした node のバージョンを確認。

```command
% nodebrew ls
```

確認したバージョンの node をセットする。

```command
% nodebrew use v13.8.0(←確認したnodeのバージョン)
```

node と npm のバージョンを確認する。

```command
% node -v
```

```command
% npm -v
```

### 3. PHP のバージョンアップ

現在インストールされている PHP のバージョンを確認する。

```command
% php -v
```

プロまにで使っている PHP のバージョンは 7.4 なので、それより前のバージョンが入っている場合は Homebrew でバージョンアップする。

```command
% brew install php@7.4
```

パスを通す。こちらも bash ではなく zsh に。

二つ出てくるので両方とも適用しておく。

```command
% echo 'export PATH="/usr/local/opt/php@7.4/bin:$PATH"' >> ~/.zshrc
```

```command
% echo 'export PATH="/usr/local/opt/php@7.4/sbin:$PATH"' >> ~/.zshrc
```

zsh を反映させる。

```command
% source ~/.zshrc
```

以下のコマンドを叩いて PHP を再起動。

```command
% brew services start php
```

ターミナル自体を再起動して、再び PHP のバージョンを確認する。

7.4 がインストールされていれば完了。

```command
% php -v
```

### 4. Composer のインストール

Homebrew で Composer をインストールする。

```command
% brew install composer
```

Composer のバージョンを確認してインストールされているか確認する。

```command
% composer -v
```

あとで laravel コマンドや valet コマンドが使えるように、zshrc にパスを通しておく。

```command
% echo 'export PATH="$PATH:$HOME/.composer/vendor/bin"' >> ~/.zshrc
```

zsh を反映させる。

```command
% source ~/.zshrc
```

### 5. MySQL のインストール

Homebrew で MySQL をインストールする。

```command
% brew install mysql
```

インストールされた内容を確認する。

```command
% brew info mysql
```

### ６. MySQL の起動とセットアップ

MySQL を起動する。

```command
% mysql.server start
```

MySQL のセキュリティ設定をする。

基本的には y（YES）で OK。

パスワードは弱から強まで選べて、強にして簡単なパスワードにするとエラーになる。

root のパスワードなど自分のローカル環境で使う設定にする。

```command
% mysql_secure_installation
```

MySQL を root で起動してみる。

以下のコマンドを叩くとパスワードを聞かれるので設定したパスワードを入力する。

```command
% mysql -u root -p
```

以下の表示になれば MySQL を操作できる。

```command
mysql>
```

promani データベースを作成する。

中身はあとで注入するので DB の作成だけで OK

```command
mysql> create database promani;
```

### 7. Laravel Valet のインストール

Laravel Valet はローカルで簡単に Laravel の開発環境を構築できるツール。

まず Composer で Laravel Valet のインストールをする。

```command
% composer global require laravel/valet
```

valet install コマンドを実行。

パスワードを聞かれたらマシンのパスワードを入力。

```command
% valet install
```

### 8. promani リポジトリのクローンと設定

このリポジトリをクローンする。

クローンしたら、promani 配下の admin に移動する。

admin は現在管理画面を開発しているディレクトリ。

```command
% cd promani/admin
```

composer install を叩く。

```command
% composer install
```

npm install を叩く。

```command
% npm install
```

valet park コマンドを実行。

パスワードを聞かれたらマシンのパスワードを入力。

```command
% valet park
```

データベースにテーブルを追加するための migration ファイルと、テーブルの中身のデータを注入する seeder ファイルはすでに用意してあるので、以下のコマンドで注入する。

```command
% php artisan migrate:refresh --seed
```

あとは以下の URL をブラウザに入れれば、現在のプロまに管理画面が見れる。

[http://admin.test](http://admin.test)

### 9. DBeaver のインストール

MySQL を利用する場合、DBeaver という DB の GUI ツールを使うと便利。

インストールと設定は下記を参照。

[https://dbeaver.io/](https://dbeaver.io/)

[https://dev.classmethod.jp/articles/dbeaver-is-free-universal-sql-client-tool/](https://dev.classmethod.jp/articles/dbeaver-is-free-universal-sql-client-tool/)
