(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{353:function(t,e,s){t.exports=s.p+"assets/img/fork-repo.e0dbd328.jpg"},354:function(t,e,s){t.exports=s.p+"assets/img/drone_first_test.31192e41.png"},355:function(t,e,s){t.exports=s.p+"assets/img/drone_steps.6a94640c.png"},356:function(t,e,s){t.exports=s.p+"assets/img/drone_test_failed.3ffdd2f3.png"},357:function(t,e,s){t.exports=s.p+"assets/img/drone_pull_request_button.39571d74.png"},358:function(t,e,s){t.exports=s.p+"assets/img/drone_pull_request_result.6e4f0582.png"},359:function(t,e,s){t.exports=s.p+"assets/img/drone_branch_protection.6e9707f7.png"},360:function(t,e,s){t.exports=s.p+"assets/img/drone_reject_merge.260c0651.png"},361:function(t,e,s){t.exports=s.p+"assets/img/drone_textlint_error.9c7cad75.png"},425:function(t,e,s){"use strict";s.r(e);var a=s(42),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"droneでciテスト・デプロイを回す"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#droneでciテスト・デプロイを回す"}},[t._v("#")]),t._v(" droneでCIテスト・デプロイを回す")]),t._v(" "),a("h2",{attrs:{id:"_0-この講義について"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_0-この講義について"}},[t._v("#")]),t._v(" 0. この講義について")]),t._v(" "),a("h3",{attrs:{id:"_0-1-この講義の目的"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_0-1-この講義の目的"}},[t._v("#")]),t._v(" 0.1 この講義の目的")]),t._v(" "),a("p",[t._v("継続的インテグレーション(Continuous Integration)、継続的デリバリ(Continuous Delivery)について理解する。\ndroneを利用したCI/CDを体験し、自分のプロジェクトにCI/CDを自ら導入できるようにする。")]),t._v(" "),a("h3",{attrs:{id:"_0-2-ハンズオンの対象者"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_0-2-ハンズオンの対象者"}},[t._v("#")]),t._v(" 0.2 ハンズオンの対象者")]),t._v(" "),a("p",[t._v("これからプログラムを書く、またはテキストファイルによる設定ファイル、マニュアル、仕様書などを記述する可能性のある技術者を対象としています。")]),t._v(" "),a("p",[t._v("講義にあたって事前に以下の要件を満たすようにしてください。")]),t._v(" "),a("ul",[a("li",[t._v("Yamlの読み書きができること\n"),a("ul",[a("li",[t._v("知らない場合は"),a("a",{attrs:{href:"https://www.codeproject.com/Articles/1214409/Learn-YAML-in-five-minutes",target:"_blank",rel:"noopener noreferrer"}},[t._v("Learn YAML in five minutes!"),a("OutboundLink")],1),t._v("をご覧ください。")])])]),t._v(" "),a("li",[t._v("「gitの使い方＋GitHubを使った開発手法」を受講しておくこと")])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("チェックポイント1 🏁")]),t._v(" "),a("p",[t._v("Gitの使い方＋GitHubを使った開発手法を受講しましたか？")])]),t._v(" "),a("h3",{attrs:{id:"_0-3-事前準備"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_0-3-事前準備"}},[t._v("#")]),t._v(" 0.3 事前準備")]),t._v(" "),a("ul",[a("li",[t._v("gitを利用できる環境を準備してください。")]),t._v(" "),a("li",[t._v("お好みのテキストエディタを準備してください。\n"),a("ul",[a("li",[t._v("この講義では"),a("a",{attrs:{href:"https://azure.microsoft.com/ja-jp/products/visual-studio-code/",target:"_blank",rel:"noopener noreferrer"}},[t._v("VSCode"),a("OutboundLink")],1),t._v("を推奨します。\n"),a("a",{attrs:{href:"https://atom.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Atom"),a("OutboundLink")],1),t._v("や"),a("a",{attrs:{href:"https://www.sublimetext.com/3",target:"_blank",rel:"noopener noreferrer"}},[t._v("Sublime Text"),a("OutboundLink")],1),t._v("、"),a("a",{attrs:{href:"https://notepad-plus-plus.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Nodepad++"),a("OutboundLink")],1),t._v("を使ってもかまいません。Vimに慣れている人はVimを使ってもよいです。\nメモ帳、サクラエディタ、TeraPadは非推奨です。")])])])]),t._v(" "),a("h3",{attrs:{id:"_0-4-この資料のお約束"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_0-4-この資料のお約束"}},[t._v("#")]),t._v(" 0.4. この資料のお約束")]),t._v(" "),a("p",[t._v("💻 は自分で操作する箇所を示しています。")]),t._v(" "),a("p",[t._v("<ほげほげ> で囲まれている部分は自分の設定値で置き換えてください。たとえば")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("git clone <リモートリポジトリのアドレス>\n")])])]),a("p",[t._v("と記載されている箇所は")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("git clone git@github.com:iij/bootcamp.git\n")])])]),a("p",[t._v("というように置き換えてください。")]),t._v(" "),a("h2",{attrs:{id:"_1-継続的インテグレーション、継続的デリバリとは"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-継続的インテグレーション、継続的デリバリとは"}},[t._v("#")]),t._v(" 1. 継続的インテグレーション、継続的デリバリとは")]),t._v(" "),a("p",[t._v("継続的インテグレーション(Continuous Integration、以下CI)とは、\nアプリケーションのリリースサイクルにおいてビルドやテストなどを自動化し、\n継続的に実行することで品質改善や納期短縮を実現するための方法です。")]),t._v(" "),a("p",[t._v("もしかしたら自分のプロジェクトがそうかもれませんが、プログラミングは意外と手作業の多い分野でした。\nしかしながら手作業でビルド、テストをしていると不具合が含まれていても発覚するのが遅くなり、手戻りが大きくなってしまいます。\nそこでビルドやテストを自動化し、コードがpushされたらすぐに実行することで早期に不具合を見つけようというのがCIです。\nまた世の中にはビルドが難しいプロダクトというのも多数存在しますので、自動化されているということは開発メンバーを追加するのも楽になります。")]),t._v(" "),a("p",[t._v("継続的デリバリ(Continuous Delivery、以下CD)とはCIをさらに進めてユーザに製品を届けるまでのリリースプロセス全体を自動化し、\n"),a("strong",[t._v("継続的に顧客に価値を届ける")]),t._v("ことを目的とした手法です。")]),t._v(" "),a("p",[t._v("CI/CDを導入した場合、コードをコミットするとビルドが走り、ユニットテストを通して、コードがテスト環境にデプロイされます。その後結合テスト、\nシステムテストを行い、必要であれば承認後、本番環境にデプロイされます。")]),t._v(" "),a("h2",{attrs:{id:"_2-droneとは"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-droneとは"}},[t._v("#")]),t._v(" 2. droneとは")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://drone.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("drone"),a("OutboundLink")],1),t._v(" とはdockerをベースとしたCI/CDのためのプラットフォームです。\nIIJ社内ではdrone v1.0を提供しています。")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("社内のプライベートな環境で使えるdroneが用意されていることがあります。\n講師の指示がある場合はそちらの環境を利用しましょう。")])]),t._v(" "),a("ul",[a("li",[t._v("サイト: "),a("a",{attrs:{href:"https://cloud.drone.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://cloud.drone.io/"),a("OutboundLink")],1)]),t._v(" "),a("li",[t._v("ドキュメント: "),a("a",{attrs:{href:"https://docs.drone.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://docs.drone.io/"),a("OutboundLink")],1)])]),t._v(" "),a("p",[t._v("GitHubと連携して簡単に設定を行うことができ、設定もyamlに記載するシンプルなもので、dockerベースのため環境構築も簡単に行うことができます。")]),t._v(" "),a("h3",{attrs:{id:"_2-1-とりあえず初めてみる"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-とりあえず初めてみる"}},[t._v("#")]),t._v(" 2.1. とりあえず初めてみる")]),t._v(" "),a("h4",{attrs:{id:"_2-1-1-droneの設定を有効化する"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-1-droneの設定を有効化する"}},[t._v("#")]),t._v(" 2.1.1. droneの設定を有効化する")]),t._v(" "),a("p",[t._v("このハンズオンのためにCI/CDを行うためのサンプルリポジトリを "),a("a",{attrs:{href:"https://github.com/iij/drone-exercise",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/iij/drone-exercise"),a("OutboundLink")],1),t._v(" に用意しています。")]),t._v(" "),a("p",[t._v("💻 GitHub上でforkしてください。")]),t._v(" "),a("p",[a("img",{attrs:{src:s(353),alt:"droneで最初のテスト"}})]),t._v(" "),a("p",[t._v("上記リポジトリを開いて「Use this template」を押してください。リポジトリ名は「drone-exercise」にしましょう。")]),t._v(" "),a("p",[t._v("droneはGitHub上のコミットやpushといったイベントが発生するとそれに応じて自動的に処理が走るようになっています。\nこれはWebhookという仕組みを用いて実現されていますが、droneを使う前にこの設定が必要です。")]),t._v(" "),a("p",[t._v("💻 droneにリポジトリを登録する。")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://cloud.drone.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://cloud.drone.io/"),a("OutboundLink")],1),t._v(" にログインしてください。\nリストから「自分のアカウント名/drone-exercise」を探して詳細ページを開きましょう。\n見つからない場合は「SYNC」ボタンを押してから探してください。\n「SETTINGS」タブから「ACTIVATE REPOSITORY」をクリックすると自動で設定が行われ、設定画面が表示されます。")]),t._v(" "),a("p",[t._v("これでdroneを利用する準備が整いました。")]),t._v(" "),a("h4",{attrs:{id:"_2-1-2-droneでテストを実行する"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-2-droneでテストを実行する"}},[t._v("#")]),t._v(" 2.1.2. droneでテストを実行する")]),t._v(" "),a("p",[t._v("💻 forkしたgitリポジトリをローカルにgit cloneしてください。")]),t._v(" "),a("p",[t._v("このリポジトリにはすでにdroneの設定ファイルが置かれています。\n適当に"),a("code",[t._v("README.md")]),t._v("を編集してコミット、pushしてみましょう。")]),t._v(" "),a("p",[t._v("droneのページから「ACTIVITY FEED」を開くとテストの実行ログが表示されます。\n実行ログを読むとどのようにテストが実行されているかが分かります。")]),t._v(" "),a("p",[t._v("このリポジトリにはRubyで書かれたプログラムと、Ruby用のテストフレームワークである"),a("a",{attrs:{href:"https://rspec.info/",target:"_blank",rel:"noopener noreferrer"}},[t._v("RSpec"),a("OutboundLink")],1),t._v("で\n書かれたテストが置かれています。")]),t._v(" "),a("p",[a("img",{attrs:{src:s(354),alt:"droneで最初のテスト"}})]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("チェックポイント2 🏁")]),t._v(" "),a("p",[t._v("「test」ではどういうメッセージが出力されたでしょうか？")])]),t._v(" "),a("h2",{attrs:{id:"_3-droneの基本的な設定"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-droneの基本的な設定"}},[t._v("#")]),t._v(" 3. droneの基本的な設定")]),t._v(" "),a("p",[t._v("drone設定の基本は、どういった環境で、どのようなコマンドを実行するかということを記述することです。\n設定はKubernetesライクな書き方になっていますので、Kubernetesの知識があれば読みやすいです。")]),t._v(" "),a("p",[t._v("droneはバージョンによって設定ファイルの書き方が異なりますので、\n既存のプロジェクトを編集する時は気をつけてください。")]),t._v(" "),a("p",[t._v("droneの設定はデフォルトでリポジトリの一番上の階層に"),a("code",[t._v(".drone.yml")]),t._v("という名前で置きます。\n2.1.2 でcloneしたリポジトリの"),a("code",[t._v(".drone.yml")]),t._v("を見てみましょう。")]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("kind")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" pipeline\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" default\n\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("steps")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" test\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("image")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ruby\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("commands")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" bundle install\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" rspec\n")])])]),a("p",[t._v("各項目について解説していきます。")]),t._v(" "),a("h3",{attrs:{id:"_3-1-pipeline"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-pipeline"}},[t._v("#")]),t._v(" 3.1. Pipeline")]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("kind")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" pipeline\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" default\n")])])]),a("p",[t._v("一連のテスト実行の流れを"),a("code",[t._v("Pipeline")]),t._v("と呼びます。\nまずyamlの先頭で"),a("code",[t._v("kind: pipeline")]),t._v("と記載し、この下に書かれる設定値がPipelineのものであることを宣言します。\nただIIJの環境では"),a("code",[t._v("Pipeline")]),t._v("以外の設定は利用できませんのでこの"),a("code",[t._v("kind")]),t._v("と"),a("code",[t._v("name")]),t._v("は固定になります。")]),t._v(" "),a("p",[a("code",[t._v("Pipeline")]),t._v("は複数の"),a("code",[t._v("Step")]),t._v("で構成されます。")]),t._v(" "),a("h3",{attrs:{id:"_3-2-steps"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-steps"}},[t._v("#")]),t._v(" 3.2. Steps")]),t._v(" "),a("p",[t._v("ひとつのPipelineで複数のテスト("),a("code",[t._v("Step")]),t._v(")を実行できます。\n各"),a("code",[t._v("Step")]),t._v("は別々のdockerコンテナで実行され、各テストは独立した環境でテストできます。\nUI上では各"),a("code",[t._v("Step")]),t._v("ごとに結果が分けて表示され、"),a("code",[t._v("name")]),t._v("で名前を付けることができ、これはUI上に表示されます。")]),t._v(" "),a("p",[a("img",{attrs:{src:s(355),alt:"Stepの表示"}})]),t._v(" "),a("p",[a("code",[t._v("image")]),t._v(" はテストに利用するdockerイメージを指定します。")]),t._v(" "),a("p",[a("code",[t._v("image: ruby")]),t._v(" と指定した場合はDocker Hubの"),a("a",{attrs:{href:"https://hub.docker.com/_/ruby",target:"_blank",rel:"noopener noreferrer"}},[t._v("Ruby Official Image"),a("OutboundLink")],1),t._v("が利用されます。\n素性のわからないイメージを利用することはやめましょう。")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("プライベートなDockerイメージ置き場を自分で作成することもできます。")])]),t._v(" "),a("p",[a("code",[t._v("commands")]),t._v(" にはコンテナ内で実行するコマンドを記述します。\n"),a("code",[t._v("bundle install")]),t._v(" ではテスト実行に必要なライブラリをインストールしていて、"),a("code",[t._v("rspec")]),t._v("でテストを実行しています。")]),t._v(" "),a("p",[t._v("各テストが成功したかどうかは各コマンドのExit Codeを見ていて、Code 0以外ではテストは中断され失敗となります。\nテストが失敗すると以下のような表示になります。")]),t._v(" "),a("p",[a("img",{attrs:{src:s(356),alt:"テスト失敗時の表示"}})]),t._v(" "),a("h2",{attrs:{id:"_4-pull-requestと組み合わせる"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-pull-requestと組み合わせる"}},[t._v("#")]),t._v(" 4. Pull Requestと組み合わせる")]),t._v(" "),a("p",[t._v("droneを設定した状態でPull Requestを作成するとどうなるでしょうか。")]),t._v(" "),a("p",[t._v("💻 意図的にテストが失敗するようにコードを修正し、Pull Requestを作成してみましょう。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("git checkout -b feature/text-error\n")])])]),a("p",[t._v("実装である"),a("code",[t._v("hello_world.rb")]),t._v("を以下のように書き換えてみます。")]),t._v(" "),a("div",{staticClass:"language-diff extra-class"},[a("pre",{pre:!0,attrs:{class:"language-diff"}},[a("code",[a("span",{pre:!0,attrs:{class:"token unchanged"}},[t._v("  def world\n")]),a("span",{pre:!0,attrs:{class:"token deleted-sign deleted"}},[t._v("-    'Hello World'\n")]),a("span",{pre:!0,attrs:{class:"token inserted-sign inserted"}},[t._v("+    'Goodby World'\n")]),a("span",{pre:!0,attrs:{class:"token unchanged"}},[t._v("  end\n")])])])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('git add hello_world.rb\ngit commit -m "goodby"\ngit push origin feature/text-error\n')])])]),a("p",[t._v("💻 GitHub を開いてPull Requestを作成しましょう。")]),t._v(" "),a("p",[a("img",{attrs:{src:s(357),alt:"Pull Requestを作成しましょう"}})]),t._v(" "),a("p",[t._v("Pull Requestの中にdroneのテスト結果が表示されています。\nひと目でテストが失敗していることがわかるでしょう。")]),t._v(" "),a("p",[a("img",{attrs:{src:s(358),alt:"Pull Requestに表示されたdroneの結果"}})]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("チェックポイント3 🏁")]),t._v(" "),a("p",[t._v("テストが失敗しましたか？")])]),t._v(" "),a("h3",{attrs:{id:"_4-1-テストが失敗したらマージできないようにしたい"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-テストが失敗したらマージできないようにしたい"}},[t._v("#")]),t._v(" 4.1. テストが失敗したらマージできないようにしたい")]),t._v(" "),a("p",[t._v("デフォルトでは"),a("code",[t._v("pr")]),t._v("と"),a("code",[t._v("push")]),t._v("の2つが登録されています。")]),t._v(" "),a("p",[a("code",[t._v("pr")]),t._v("を指定すると、Pull Requestをオープンしたとき、または既存のPRへpushしたときにテストが実行されます。\n"),a("code",[t._v("push")]),t._v(" を指定すると、"),a("code",[t._v("git push")]),t._v(" したときにテストが実行されます。\nこれは設定ページから変更できます。")]),t._v(" "),a("p",[t._v("この状態でもMergeボタンを押すことは可能ですが、普通は押されたくないはずです。\nこの挙動はGitHubの設定画面から変更できます。")]),t._v(" "),a("p",[t._v("💻 テストが通ったときだけマージできるように設定する")]),t._v(" "),a("ul",[a("li",[t._v("「Settings」->「Branches」->「Branch protection rules」->「Add rule」を押し、")]),t._v(" "),a("li",[t._v("「Apply rule to」に「master」と記入し、")]),t._v(" "),a("li",[t._v("「Require status checks to pass before merging」にチェックを入れて")]),t._v(" "),a("li",[t._v("「Status checks found in the last week for this repository」に出ている\n「continuous-integration/drone/pr」と\n「continuous-integration/drone/push」にチェックを入れます。")]),t._v(" "),a("li",[t._v("「Include administrators」にもチェックを入れます。")]),t._v(" "),a("li",[t._v("「Create」します。")])]),t._v(" "),a("p",[a("img",{attrs:{src:s(359),alt:"Branch protection rules"}})]),t._v(" "),a("p",[t._v("元のPull Requestの状態に戻るとマージボタンが押せなくなっています。")]),t._v(" "),a("p",[a("img",{attrs:{src:s(360),alt:"マージできない状態"}})]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("チェックポイント4 🏁")]),t._v(" "),a("p",[t._v("マージボタンが押せなくなったのはなぜですか？")])]),t._v(" "),a("p",[t._v("複数人で開発するときには便利な機能です。")]),t._v(" "),a("p",[t._v("このあとmasterブランチを利用しますのでBranch protection rulesは削除しておきましょう。")]),t._v(" "),a("p",[t._v("💻 Branch protection rules の一覧ページで"),a("code",[t._v("master")]),t._v("と名前がついたルールの"),a("code",[t._v("delete")]),t._v("ボタンを押す")]),t._v(" "),a("p",[t._v("この後項目のためにmasterブランチに戻っておきましょう。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("$ git checkout master\n")])])]),a("h2",{attrs:{id:"_5-さまざまなプラグイン"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-さまざまなプラグイン"}},[t._v("#")]),t._v(" 5. さまざまなプラグイン")]),t._v(" "),a("p",[a("a",{attrs:{href:"http://plugins.drone.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("droneには様々なプラグインが用意されています。"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("主に外部と連携する機能が用意されており、自分で開発することもできます。")]),t._v(" "),a("h3",{attrs:{id:"_5-1-キャッシュプラグイン"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-1-キャッシュプラグイン"}},[t._v("#")]),t._v(" 5.1. キャッシュプラグイン")]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),a("p",[t._v("この項目はS3互換のオブジェクトストレージが必要です。\n講師は接続先を案内してください。")])]),t._v(" "),a("p",[t._v("これまでの例ではテストを実行するときに必要なライブラリを"),a("code",[t._v("bundle install")]),t._v("で事前にダウンロードしてから実行していました。\nしかし毎回ダウンロードしていたのではテスト実行に時間がかかりますし、ネットワークの無駄です。")]),t._v(" "),a("p",[a("a",{attrs:{href:"http://plugins.drone.io/drone-plugins/drone-s3-cache/",target:"_blank",rel:"noopener noreferrer"}},[t._v("s3-cache"),a("OutboundLink")],1),t._v("プラグインを使うと特定のディレクトリを\n"),a("a",{attrs:{href:"https://aws.amazon.com/jp/s3/",target:"_blank",rel:"noopener noreferrer"}},[t._v("S3"),a("OutboundLink")],1),t._v("に保存し、テストのたびに復元してくれる機能を提供します。")]),t._v(" "),a("h4",{attrs:{id:"_5-1-1-ライブラリの保存場所を変更する"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-1-1-ライブラリの保存場所を変更する"}},[t._v("#")]),t._v(" 5.1.1. ライブラリの保存場所を変更する")]),t._v(" "),a("p",[t._v("パッケージマネージャーによってはリポジトリの中ではなく、システムの特別な場所に配置するものがあります。\ns3-cacheプラグインはリポジトリ内にあるファイルしかキャッシュできません。")]),t._v(" "),a("p",[t._v("nodejsのパッケージマネージャーであるnpmはデフォルトでリポジトリ直下にライブラリを配置しますが、\nrubyのパッケージマネージャであるbundlerはシステム領域にライブラリを保存するため、\nそのままではキャッシュさせることができません。\nほとんどの場合、パッケージマネージャーのオプションで保存場所を変更することができますので、\nrubyを例に設定してみましょう。")]),t._v(" "),a("p",[t._v("rubyのパッケージマネージャであるbundlerは"),a("code",[t._v("--path")]),t._v("オプションで保存場所を指定できます。\n一般的によく使われる"),a("code",[t._v("vendor/bundle")]),t._v("に保存するように、以下のように変更してください。")]),t._v(" "),a("p",[t._v("💻 パッケージの保存先を変更する")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("  - name: test\n    image: ruby\n    commands:\n      - bundle install --path vendor/bundle\n      - bundle exec rspec\n")])])]),a("h4",{attrs:{id:"_5-1-2-ライブラリをキャッシュさせてみる"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-1-2-ライブラリをキャッシュさせてみる"}},[t._v("#")]),t._v(" 5.1.2. ライブラリをキャッシュさせてみる")]),t._v(" "),a("p",[t._v("さっそくキャッシュさせてみましょう。")]),t._v(" "),a("p",[t._v("このプラグインはキャッシュしたデータを戻す"),a("code",[t._v("restore")]),t._v("と、キャッシュを行う"),a("code",[t._v("rebuild")]),t._v("の機能があります。")]),t._v(" "),a("p",[a("code",[t._v(".drone.yml")]),t._v("を編集してキャッシュを組み込んでみましょう。\n"),a("code",[t._v("rebuild")]),t._v("ステップで"),a("code",[t._v("vendor/bundle")]),t._v("ディレクトリをキャッシュし、\n"),a("code",[t._v("restore")]),t._v("ステップでキャッシュされたものを戻します。")]),t._v(" "),a("p",[a("code",[t._v("test")]),t._v("Stepの前後に、"),a("code",[t._v("restore")]),t._v("と"),a("code",[t._v("rebuild")]),t._v("を追加します。")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("以下の設定は各環境で用意された接続先へ値を変更してください。")]),t._v(" "),a("p",[t._v("<変数名>で書かれた場所を適切な値で置き換えてください。")])]),t._v(" "),a("p",[t._v("💻 パッケージをキャッシュするように変更する")]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("steps")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" restore\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("image")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" plugins/s3"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("cache\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("settings")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("pull")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("endpoint")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" <ENDPOINT"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("access_key")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" <ACCESS_KEY"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("secret_key")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" <SECRET_KEY"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("restore")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" test\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("image")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ruby\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("commands")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" bundle install "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("path vendor/bundle\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" bundle exec rspec\n\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" rebuild\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("image")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" plugins/s3"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("cache\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("settings")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("pull")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("endpoint")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" <ENDPOINT"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("access_key")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" <ACCESS_KEY"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("secret_key")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" <SECRET_KEY"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("rebuild")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("mount")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" vendor/bundle\n")])])]),a("p",[t._v("💻 コミットして実行してみましょう。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('git add .drone.yml\ngit commit -m "Cache導入"\ngit push origin master\n')])])]),a("p",[t._v("droneのUI上で最新の実行ログを開いて見ましょう。\n"),a("code",[t._v("restore")]),t._v("と"),a("code",[t._v("rebuild")]),t._v("のステップが増えていることを確認してください。")]),t._v(" "),a("p",[t._v("1回目はキャッシュされてないので何も起きませんが、2回目からはキャッシュが使われるので実行が早くなります。\n1回目の実行時間を確認してから、以下のように2回目のテストを実行してみてください。")]),t._v(" "),a("p",[a("code",[t._v("--allow-empty")]),t._v(" はファイルを変更していなくてもコミットを作ることができるオプションです。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('git commit --allow-empty -m "Cacheの効果を確認する"\ngit push origin master\n')])])]),a("p",[t._v("💻 テスト実行が早くなっていることを確認しましょう。")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("チェックポイント5 🏁")]),t._v(" "),a("p",[t._v("テストが速くなったのはなぜですか？")])]),t._v(" "),a("h2",{attrs:{id:"_6-さまざまな応用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-さまざまな応用"}},[t._v("#")]),t._v(" 6. さまざまな応用")]),t._v(" "),a("h3",{attrs:{id:"_6-1-text-lintを使った日本語チェックの例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-1-text-lintを使った日本語チェックの例"}},[t._v("#")]),t._v(" 6.1. Text Lintを使った日本語チェックの例")]),t._v(" "),a("p",[t._v("droneはプログラムにしか使えないものでしょうか。そうではありません。\ndroneは何でも動かすことができますから、テストをすることだけが仕事ではありません。")]),t._v(" "),a("p",[t._v("ここでは自然言語のチェックを行う "),a("a",{attrs:{href:"https://textlint.github.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("textlint"),a("OutboundLink")],1),t._v(" を使った例を紹介します。")]),t._v(" "),a("p",[t._v("💻 stepsに以下の項目を追加してみましょう。")]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[t._v("  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" textlint\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("image")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" node\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("commands")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" npm install textlint\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" npm install textlint"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("rule"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("preset"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("ja"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("technical"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("writing\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" $(npm bin)/textlint "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("format pretty"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("error "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("preset ja"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("technical"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("writing README.md\n")])])]),a("p",[t._v("textlintはnodejsで動作しますので、イメージにnodeを指定します。\ntextlintはフレームワークのみでこれ単体で動かすことはできません。どういったものをチェックするかというルールは別に定義しなければいけません。\nここでは日本語の技術文書を書く上で必要ないくつかのルールをまとめた\n"),a("a",{attrs:{href:"https://github.com/textlint-ja/textlint-rule-preset-ja-technical-writing",target:"_blank",rel:"noopener noreferrer"}},[t._v("textlint-rule-preset-ja-technical-writing"),a("OutboundLink")],1),t._v("\nを利用します。試しに "),a("code",[t._v("README.md")]),t._v("をチェックしてみましょう。")]),t._v(" "),a("p",[t._v("💻 README.mdをTextlintでチェックする。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('git add .drone.yml\ngit commit -m "textlintによるチェック"\ngit push origin master\n')])])]),a("p",[a("img",{attrs:{src:s(361),alt:"textlintのエラー"}})]),t._v(" "),a("p",[t._v("このようにチェックする対象はプログラムに限りませんので、マニュアルなどのドキュメントのチェックなどにも活用できます。")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("チェックポイント6 🏁")]),t._v(" "),a("p",[t._v("droneが利用できる事例としてふさわしいものはどれですか？")])]),t._v(" "),a("h3",{attrs:{id:"_6-2-services"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-2-services"}},[t._v("#")]),t._v(" 6.2 Services")]),t._v(" "),a("p",[t._v("単純なスクリプトやライブラリのテストはこれだけでも十分にdroneでテストできます。")]),t._v(" "),a("p",[t._v("ではデータベース使ったテストはできるでしょうか。\nデータベースのテストをするならデータベースのプロセスが上がっている必要があります。\nでも1つのコンテナでアプリケーションと一緒にデータベースも一緒に立ち上げたくないですよね。")]),t._v(" "),a("p",[t._v("そのために"),a("code",[t._v("Service")]),t._v("という仕組みがあります。\n同時に複数のコンテナを立ち上げて待機させておき、テスト中利用できます。")]),t._v(" "),a("p",[t._v("サンプルとしてRuby on Rails＋MySQLで構成されたアプリケーションを用意しました。")]),t._v(" "),a("p",[t._v("💻 "),a("a",{attrs:{href:"https://github.com/iij/drone-exercise-rails",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/iij/drone-exercise-rails"),a("OutboundLink")],1),t._v(" をforkして、git cloneしてください。")]),t._v(" "),a("p",[t._v("Ruby on RailsはWebアプリケーションを作るためのRuby製フレームワークです。\nデータの保存にMySQLなどのデータベースを利用できます。")]),t._v(" "),a("p",[t._v("標準的なWebアプリケーションではデータベースなどの外部サービスにデータを保存し、それを読み取って加工して表示するという動作が多く、\nテストするときもデータベースが動いている必要があります。")]),t._v(" "),a("p",[t._v("上記リポジトリにはテストを行うだけの "),a("code",[t._v(".drone.yml")]),t._v(" が含まれています。")]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("kind")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" pipeline\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" default\n\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("steps")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" test\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("image")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ruby"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("2.6.2\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("environment")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("RAILS_ENV")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" test\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("commands")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" bundle "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 実行に必要なライブラリをインストールする")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" bundle exec rails db"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("reset "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# テスト用のデータベース、テーブルを作成する")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" bundle exec rails test "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# テストを実行する")]),t._v("\n")])])]),a("p",[t._v("💻 まずはこの状態でテストを実行し、結果を見てみましょう。")]),t._v(" "),a("p",[t._v("ちなみにテストは "),a("code",[t._v("test/models/user_test.rb")]),t._v(" に書いてあります。")]),t._v(" "),a("p",[t._v("この状態ではデータベースが動いていないのでテストが成功しません。\nテストしている間横でなにか動かしておきたいという場合には "),a("code",[t._v("Service")]),t._v(" を使います。\n今回はMySQLを使いますが、"),a("a",{attrs:{href:"https://hub.docker.com/_/mysql",target:"_blank",rel:"noopener noreferrer"}},[t._v("MySQLは公式でdockerイメージが提供されています"),a("OutboundLink")],1),t._v("のでこれを利用します。")]),t._v(" "),a("p",[t._v("💻 以下の項目を"),a("code",[t._v(".drone.yml")]),t._v("に追加してください。")]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("services")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" db\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("image")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" mysql"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("8.0.16\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("command")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"--default-authentication-plugin=mysql_native_password"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# MySQL8.0のデフォルト認証方式にRailsが対応していないため変更")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("environment")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("MYSQL_ALLOW_EMPTY_PASSWORD")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'yes'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# テスト用にパスワードなしで接続できるようにする")]),t._v("\n")])])]),a("p",[a("code",[t._v("name")]),t._v(" で名前をつけて "),a("code",[t._v("image")]),t._v(" で使用するdockerイメージを指定します。")]),t._v(" "),a("p",[t._v("Railsではデータベースの設定を"),a("code",[t._v("config/database.yml")]),t._v("から読み込みます。\ndroneで設定したデータベースへ接続するための設定値を見てみましょう。")]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("test")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("<<")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token important"}},[t._v("*default")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("host")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" db\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("port")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3306")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("socket")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token null important"}},[t._v("null")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("database")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" drone"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("exercise"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("rails_test\n")])])]),a("p",[t._v("このファイルで接続先MySQLサーバーのホストを指定しているのですが、\nここでは"),a("code",[t._v(".drone.yml")]),t._v("で指定した"),a("code",[t._v("db")]),t._v("がホスト名になっていて、この名前で接続できるようになります。")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("チェックポイント7 🏁")]),t._v(" "),a("p",[t._v("テスト実行中にデータベースはどこにいるでしょうか？")])]),t._v(" "),a("h2",{attrs:{id:"_8-参考情報"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_8-参考情報"}},[t._v("#")]),t._v(" 8. 参考情報")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://docs.drone.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("drone Documentation"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);e.default=n.exports}}]);