(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{480:function(t,s,e){"use strict";e.r(s);var a=e(45),n=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"_5-リバースプロキシの導入-運用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-リバースプロキシの導入-運用"}},[t._v("#")]),t._v(" 5. リバースプロキシの導入/運用")]),t._v(" "),e("p",[t._v("それではいよいよ本格的に Ansible を活用してみます。\nさきほどのセクションで構築したデータベースとアプリケーションを流用し変更を加えてみます。")]),t._v(" "),e("p",[t._v("現在の状態は、ブラウザから直接アプリケーションに"),e("code",[t._v("HTTP")]),t._v("でアクセスしている状態です。\nnginx を導入し、"),e("code",[t._v("HTTPS")]),t._v("でアクセスしてみましょう。")]),t._v(" "),e("p",[t._v("今回、新たに Reverse proxy サーバを構築するにあたっては\n既存の"),e("code",[t._v("site.yml")]),t._v("への追記が必要となります。")]),t._v(" "),e("p",[t._v("前回までで記述ルールのいくつかはご説明致しましたが\n本格的に作業に取り組む前に一つ確認をしておきます。")]),t._v(" "),e("h3",{attrs:{id:"ansible-playbook-ディレクトリ構造"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ansible-playbook-ディレクトリ構造"}},[t._v("#")]),t._v(" Ansible playbook ディレクトリ構造")]),t._v(" "),e("p",[t._v("作業に取りかかる前にまず、ディレクトリ構造を確認してみましょう。\n下記は教材のディレクトリ構造から Ansible に関わるファイルやディレクトリのみを抜粋しています。")]),t._v(" "),e("p",[t._v("それぞれのファイル・ディレクトリに役割説明を記載しています。")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[t._v("├── ansible.cfg  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Ansibleの設定ファイル")]),t._v("\n├── inventories  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 管理対象サーバの情報を格納するディレクトリ")]),t._v("\n│   ├── group_vars  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# グループごとの変数ファイルを格納するファイル")]),t._v("\n│   │   └── all.yml  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# すべてのグループに適用される変数ファイル")]),t._v("\n│   └── hosts  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# サーバのIPやSSHのユーザやグループなどを記述するファイル")]),t._v("\n├── playbooks  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 実行用ファイルを格納するディレクトリ。各ファイルはsite.ymlからインポートします。")]),t._v("\n│   ├── acl.yml\n│   ├── app.yml\n│   ├── db.yml\n│   └── rp.yml\n├── roles  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ロールを格納するディレクトリ。Ansibleの実行はロールと呼ばれるまとまりで管理されます。")]),t._v("\n│   └── webapp\n│       ├── defaults\n│       │   └── main.yml  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ロール内で使用される変数のデフォルト値を定義するファイル")]),t._v("\n│       ├── files  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# サーバへ配布したいファイルを格納するディレクトリ")]),t._v("\n│       ├── handlers\n│       │   └── main.yml  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ハンドラタスクを定義するファイル")]),t._v("\n│       ├── tasks\n│       │   └── main.yml  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Ansibleの具体的な処理内容を記述するファイル")]),t._v("\n│       └── templates  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# サーバへ配布したいJinja2テンプレートを使ったファイルを格納するディレクトリ")]),t._v("\n├── site.yml  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# playbookファイル")]),t._v("\n└── vars\n    └── proxy.yml  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Proxy配下でハンズオンを実施するためのファイル")]),t._v("\n")])])]),e("p",[t._v("なぜ、このような構成にしているかと言うと、\nAnsible ではより多くの人たちが正しく仕えるように推奨の記述方式を定めています。")]),t._v(" "),e("p",[t._v("ディレクトリ構成もその一部であり、Inventory や Role 等は Ansible を実行する上で\nそれぞれのファイルを探すデフォルトパスになっていますので、よほどの理由が無い限り\nベストプラクティスに沿って作成する事が推奨されます。")]),t._v(" "),e("p",[t._v("詳しく知りたい人は Ansible の"),e("a",{attrs:{href:"https://docs.ansible.com/ansible/latest/user_guide/playbooks_best_practices.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("ベストプラクティス"),e("OutboundLink")],1),t._v("をご覧ください。")]),t._v(" "),e("h3",{attrs:{id:"ファイル編集"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ファイル編集"}},[t._v("#")]),t._v(" ファイル編集")]),t._v(" "),e("p",[t._v("それではファイルを作成してみましょう。\nTLS の証明書に加え、いくつかの設定ファイルはすでに用意してあります。\n皆さんには下記 4 つのファイルを編集してもらいます。")]),t._v(" "),e("h4",{attrs:{id:"roles-nginx-tasks-main-yml"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#roles-nginx-tasks-main-yml"}},[t._v("#")]),t._v(" roles/nginx/tasks/main.yml")]),t._v(" "),e("p",[t._v("nginx を構築するためのタスクファイルです。\n"),e("a",{attrs:{href:"http://nginx.org/en/linux_packages.html#RHEL-CentOS",target:"_blank",rel:"noopener noreferrer"}},[t._v("公式ドキュメント"),e("OutboundLink")],1),t._v("のインストール手順に加え、設定ファイルや証明書の配布を行っています。")]),t._v(" "),e("p",[t._v("Ansible はモジュールと呼ばれるものを使って、さまざまな処理を行います。\nAnsible に組込み済みのモジュールは"),e("a",{attrs:{href:"https://docs.ansible.com/ansible/latest/modules/list_of_all_modules.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("公式ドキュメント"),e("OutboundLink")],1),t._v("にリストアップされており、各モジュールごとの書き方が載っています。\nモジュールを自作して使うこともできますが、基本的には上記のサイトから行いたい処理に合ったモジュールを探し、タスクファイルを作ります。")]),t._v(" "),e("p",[t._v("下記の内容を教材の"),e("code",[t._v("roles/nginx/tasks/main.yml")]),t._v("にコピーしましょう。")]),t._v(" "),e("div",{staticClass:"language-yml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-yml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("---")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" install yum"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("utils\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("yum")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" yum"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("utils\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("state")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" present\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("environment")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"{{ proxy_env | default({}) }}"')]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" add Nginx repository\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("copy")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("src")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"etc/yum.repos.d/nginx.repo"')]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("dest")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/etc/yum.repos.d/nginx.repo"')]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("mode")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0644")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" install Nginx\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("yum")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"nginx"')]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("state")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" present\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("environment")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"{{ proxy_env | default({}) }}"')]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("ignore_errors")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"{{ ansible_check_mode }}"')]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" create ssl directory\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("file")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("state")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" directory\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("path")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" /etc/nginx/ssl\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("owner")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" root\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("group")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" root\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("mode")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0600")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" deploy ssl files\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("copy")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("src")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"etc/nginx/ssl/{{ item }}"')]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("dest")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/etc/nginx/ssl/{{ item }}"')]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("mode")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0400")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("with_items")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" server.crt\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" server.key\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" dhparam.pem\n\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" remove default config file\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("file")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("state")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" absent\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("path")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" /etc/nginx/conf.d/default.conf\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("notify")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" reload nginx\n\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" deploy config file\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("template")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("src")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" etc/nginx/conf.d/app.conf.j2\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("dest")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" /etc/nginx/conf.d/app.conf\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("owner")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" root\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("group")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" root\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("mode")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0644")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("notify")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" reload nginx\n\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" start nginx\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("systemd")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" nginx\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("state")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" started\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("enabled")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" yes\n")])])]),e("p",[t._v("nginx の構築に使用したモジュールの一覧は以下になります。")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("モジュール名")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("説明")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[e("a",{attrs:{href:"https://docs.ansible.com/ansible/latest/modules/yum_module.html#yum-module",target:"_blank",rel:"noopener noreferrer"}},[t._v("yum"),e("OutboundLink")],1)]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("yum コマンドを使って RPM パッケージを操作できるモジュールです。")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[e("a",{attrs:{href:"https://docs.ansible.com/ansible/latest/modules/file_module.html#file-module",target:"_blank",rel:"noopener noreferrer"}},[t._v("file"),e("OutboundLink")],1)]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("対象サーバのファイルシステムを操作できるモジュールです。"),e("br"),t._v("ディレクトリやファイルを作成/削除したり、ファイルのオーナーやパーミッションを変更できたりします。")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[e("a",{attrs:{href:"https://docs.ansible.com/ansible/latest/modules/copy_module.html#copy-module",target:"_blank",rel:"noopener noreferrer"}},[t._v("copy"),e("OutboundLink")],1)]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("対象サーバへファイルをコピーできるモジュールです。")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[e("a",{attrs:{href:"https://docs.ansible.com/ansible/latest/modules/template_module.html#template-module",target:"_blank",rel:"noopener noreferrer"}},[t._v("template"),e("OutboundLink")],1)]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("対象サーバへファイルをコピーできるモジュールです。"),e("code",[t._v("copy")]),t._v("との違いはファイル内に"),e("code",[t._v("Jinja2")]),t._v("テンプレートが使える点です。"),e("br"),t._v("ファイル内で変数を使いたい場合はこちらを使います。")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[e("a",{attrs:{href:"https://docs.ansible.com/ansible/latest/modules/systemd_module.html#systemd-module",target:"_blank",rel:"noopener noreferrer"}},[t._v("systemd"),e("OutboundLink")],1)]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[e("a",{attrs:{href:"https://wiki.archlinux.jp/index.php/Systemd",target:"_blank",rel:"noopener noreferrer"}},[t._v("systmed"),e("OutboundLink")],1),t._v("によって管理されるプロセスを操作できるモジュールです。"),e("br"),t._v("基本的には Linux 環境でプロセスを常駐させる場合はこれを使います。")])])])]),t._v(" "),e("h4",{attrs:{id:"roles-nginx-templates-etc-nginx-conf-d-app-conf-j2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#roles-nginx-templates-etc-nginx-conf-d-app-conf-j2"}},[t._v("#")]),t._v(" roles/nginx/templates/etc/nginx/conf.d/app.conf.j2")]),t._v(" "),e("p",[t._v("nginx の設定ファイルです。\nファイル内で変数を使用しているので"),e("code",[t._v("templates")]),t._v("下に配置しています。")]),t._v(" "),e("p",[t._v("分かりやすさのために、配置するディレクトリをコピー先のパスと同じにしています。\nAnsible やサーバの構築/運用に慣れないうちは、こうしておくことをお勧めします。")]),t._v(" "),e("p",[t._v("下記の内容を教材の"),e("code",[t._v("roles/nginx/templates/etc/nginx/conf.d/app.conf.j2")]),t._v("にコピーしましょう。")]),t._v(" "),e("div",{staticClass:"language-jinja extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("upstream app_backend {\n    {% for app in nginx_backends %}\n    server {{ app.host }}:{{ app.port }} max_fails=1 fail_timeout=3s;\n    {% endfor %}\n}\n\nserver {\n  listen {{ nginx_https_port }} ssl;\n\n  ssl_protocols TLSv1.2 TLSv1.3;\n  ssl_certificate /etc/nginx/ssl/server.crt;\n  ssl_certificate_key /etc/nginx/ssl/server.key;\n  ssl_dhparam /etc/nginx/ssl/dhparam.pem;\n\n  location / {\n    proxy_set_header  Host  $http_host;\n    proxy_set_header  X-Real-IP  $remote_addr;\n    proxy_set_header  X-Forwarded-Host  $server_name;\n    proxy_set_header  X-Forwarded-Server  $host;\n    proxy_set_header  X-Forwarded-Proto  $scheme;\n    proxy_set_header  X-Forwarded-Port {{ nginx_https_port }};\n    proxy_set_header  X-Forwarded-For  $proxy_add_x_forwarded_for;\n    proxy_pass  http://app_backend;\n  }\n\n  error_page 404 /404.html;\n\n  error_page 500 502 503 504 /50x.html;\n  location = /50x.html {\n    root  /usr/share/nginx/html;\n  }\n}\n")])])]),e("p",[t._v("nginx の設定について説明することは主題から外れるので、この講義では行いません。\n興味のある人は nginx の"),e("a",{attrs:{href:"http://nginx.org/en/docs/http/configuring_https_servers.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("公式ドキュメント"),e("OutboundLink")],1),t._v("をご覧ください。")]),t._v(" "),e("h4",{attrs:{id:"playbooks-rp-yml"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#playbooks-rp-yml"}},[t._v("#")]),t._v(" playbooks/rp.yml")]),t._v(" "),e("p",[t._v("nginx を構築するための実行ファイルです。\n対象サーバとロールを指定することで、指定したサーバに nginx を構築できます。")]),t._v(" "),e("p",[t._v("下記の内容を教材の"),e("code",[t._v("playbooks/rp.yml")]),t._v("にコピーしましょう。")]),t._v(" "),e("div",{staticClass:"language-yml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-yml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("---")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" set up the reverse proxy server\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("hosts")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" rp\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("become")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" no\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("gather_facts")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" no\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("vars_files")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" ../vars/proxy.yml\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("roles")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("role")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" roles/nginx\n      "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("tags")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" nginx\n")])])]),e("h4",{attrs:{id:"site-yml"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#site-yml"}},[t._v("#")]),t._v(" site.yml")]),t._v(" "),e("p",[t._v("最後に、さきほど作った"),e("code",[t._v("playbooks/rp.yml")]),t._v("をインポートする様に教材の"),e("code",[t._v("site.yml")]),t._v("に下記を追記します。")]),t._v(" "),e("div",{staticClass:"language-yml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-yml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("import_playbook")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" playbooks/rp.yml\n")])])]),e("h3",{attrs:{id:"実行"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#実行"}},[t._v("#")]),t._v(" 実行")]),t._v(" "),e("p",[t._v("さて、ファイルがすべて準備できたらいよいよ Ansible を実行します。")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[t._v("ansible-playbook -i inventories/hosts site.yml\n")])])]),e("p",[e("code",[t._v("failed=0")]),t._v("と表示されれば実行は成功です。")]),t._v(" "),e("p",[t._v("ブラウザで"),e("a",{attrs:{href:"https://localhost:8443",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://localhost:8443"),e("OutboundLink")],1),t._v("にアクセスして確認します。\n自己署名証明書を使っているためブラウザから注意文言が表示されますが、スキップしてください。\nすると、さきほどと同じ画面が表示されます。")]),t._v(" "),e("p",[t._v("ここで、もう一つ注目してほしい部分があります。\nAnsible の実行ログを眺めると、データベースや Java アプリケーションの構築用のタスクもステータスが"),e("code",[t._v("ok")]),t._v("の状態で、実行されているのが分かると思います。\nまたさきほど実行した"),e("code",[t._v("ansible-playbook site.yml")]),t._v("をもう一度実行すると、nginx の構築タスクも含め、すべてのタスクのステータスが"),e("code",[t._v("ok")]),t._v("になります。")]),t._v(" "),e("p",[t._v("ある操作を何回行っても等価であるとき、その操作を"),e("code",[t._v("冪等")]),t._v("であると言います。\n"),e("strong",[t._v("Ansible の良さの 1 つがこの"),e("code",[t._v("冪等")]),t._v("性です。")]),t._v("\n基本的に Ansible は同じタスクを何回実行しても、差分のないタスクは実行されません。\nすなわち、ファイルを変更しない限りホストに対して余計な変更が加わらず、安全です。")]),t._v(" "),e("p",[t._v("しかしこの"),e("code",[t._v("冪等")]),t._v("性は意識していないと壊れてしまう場合があります。\nAnsible を使うときは"),e("code",[t._v("冪等")]),t._v("性に注意を払いましょう。")]),t._v(" "),e("h2",{attrs:{id:"_3-ケース-2-バージョンアップ-スケーリング"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-ケース-2-バージョンアップ-スケーリング"}},[t._v("#")]),t._v(" 3. [ケース 2] バージョンアップ & スケーリング")]),t._v(" "),e("p",[t._v("さて、nginx を導入して初期構築タスクを自動化できました。\n次は変数やホスト情報を編集して、運用タスクを自動化してみましょう。")]),t._v(" "),e("h3",{attrs:{id:"バージョンアップ"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#バージョンアップ"}},[t._v("#")]),t._v(" バージョンアップ")]),t._v(" "),e("p",[t._v("まずは nginx のバージョンアップをしてみましょう。")]),t._v(" "),e("p",[t._v("さきほどインストールされた nginx のバージョンは少し古めの"),e("code",[t._v("1.18.0-1")]),t._v("です。\nこのバージョンは"),e("code",[t._v("roles/nginx/defaults/main.yml")]),t._v("に"),e("code",[t._v("nginx_version")]),t._v("という変数として定義されています。\nまた、下記のコマンドを実行することで、確認することもできます。")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[t._v("ansible rp1 -m "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("command")]),t._v(" -a "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'nginx -V'")]),t._v("\n")])])]),e("p",[t._v("これを"),e("code",[t._v("1.20.0-1")]),t._v("にアップデートしてみたいと思います。\n教材の"),e("code",[t._v("inventories/group_vars/all.yml")]),t._v("に下記を追記しましょう。")]),t._v(" "),e("div",{staticClass:"language-yml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-yml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("nginx_version")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1.20.0\n")])])]),e("p",[t._v("Ansible には変数の優先度が設定されており、同じ名前の変数は優先度の高いほうが有効になります。\nこれを利用することでロールの完全性を担保しつつ、タスクの内容を編集できます。")]),t._v(" "),e("p",[t._v("具体的な優先度は"),e("a",{attrs:{href:"https://docs.ansible.com/ansible/latest/user_guide/playbooks_variables.html#variable-precedence-where-should-i-put-a-variable",target:"_blank",rel:"noopener noreferrer"}},[t._v("公式ドキュメント"),e("OutboundLink")],1),t._v("をご覧ください。")]),t._v(" "),e("p",[t._v("ファイルの準備ができたら Ansible を実行します。")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[t._v("ansible-playbook -i inventories/hosts site.yml\n")])])]),e("p",[t._v("本実行が完了したら、さきほどの確認コマンドを実行してバージョンが上がったことを確認してみましょう。")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[t._v("ansible rp1 -m "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("command")]),t._v(" -a "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'nginx -V'")]),t._v("\n")])])]),e("h3",{attrs:{id:"スケールアップ"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#スケールアップ"}},[t._v("#")]),t._v(" スケールアップ")]),t._v(" "),e("p",[t._v("次はアプリケーションサーバをスケールアップ（増設）してみましょう。\nと言っても増設用のサーバはすでにコンテナとして起動してあるので、皆さんがすべきことは下記 2 つのファイルの編集です。")]),t._v(" "),e("h4",{attrs:{id:"inventories-hosts"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#inventories-hosts"}},[t._v("#")]),t._v(" inventories/hosts")]),t._v(" "),e("p",[t._v("まずは Ansible の管理対象にアプリケーション増設用のサーバ（app2）を追加します。\n教材の"),e("code",[t._v("inventories/hosts")]),t._v("を下記のように追記してください。")]),t._v(" "),e("div",{staticClass:"language-diff extra-class"},[e("pre",{pre:!0,attrs:{class:"language-diff"}},[e("code",[t._v("[app]\napp1\n"),e("span",{pre:!0,attrs:{class:"token inserted-sign inserted"}},[e("span",{pre:!0,attrs:{class:"token prefix inserted"}},[t._v("+")]),e("span",{pre:!0,attrs:{class:"token line"}},[t._v(" app2\n")])])])])]),e("p",[t._v("これで"),e("code",[t._v("app")]),t._v("グループの中に"),e("code",[t._v("app2")]),t._v("サーバを追加できました。")]),t._v(" "),e("p",[t._v("Ansible には管理対象のホストをグルーピングし、設定したグループ単位で Ansible を実行したり、変数を設定できたりします。\nこうすることで、柔軟かつ効率的にサーバを管理できます。\nこの講義ではそれぞれ 1 台しかありませんが、データベースサーバやリバースプロキシサーバもグループに分けられています。")]),t._v(" "),e("p",[t._v("Ansible のグループやホストについての詳細は"),e("RouterLink",{attrs:{to:"hhttps://docs.ansible.com/ansible/latest/user_guide/intro_inventory.html#inventory-basics-formats-hosts-and-groups"}},[t._v("公式ドキュメント")]),t._v("をご覧ください。")],1),t._v(" "),e("h4",{attrs:{id:"inventories-group-vars-all-yml"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#inventories-group-vars-all-yml"}},[t._v("#")]),t._v(" inventories/group_vars/all.yml")]),t._v(" "),e("p",[t._v("次に変数ファイルを編集します。\nさきほども編集した"),e("code",[t._v("inventories/group_vars/all.yml")]),t._v("に下記のように追記します。")]),t._v(" "),e("div",{staticClass:"language-diff extra-class"},[e("pre",{pre:!0,attrs:{class:"language-diff"}},[e("code",[t._v("nginx_backends:\n"),e("span",{pre:!0,attrs:{class:"token unchanged"}},[e("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[t._v(" ")]),e("span",{pre:!0,attrs:{class:"token line"}},[t._v(" - host: 192.0.2.12\n")]),e("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[t._v(" ")]),e("span",{pre:!0,attrs:{class:"token line"}},[t._v('   port: "{{ server_port }}"\n')])]),e("span",{pre:!0,attrs:{class:"token inserted-sign inserted"}},[e("span",{pre:!0,attrs:{class:"token prefix inserted"}},[t._v("+")]),e("span",{pre:!0,attrs:{class:"token line"}},[t._v(" - host: 192.0.2.13\n")]),e("span",{pre:!0,attrs:{class:"token prefix inserted"}},[t._v("+")]),e("span",{pre:!0,attrs:{class:"token line"}},[t._v('   port: "{{ server_port }}"\n')])])])])]),e("p",[t._v("これは nginx が通信を経由させるサーバのリストを格納している変数です。\nここに新しく"),e("code",[t._v("app2")]),t._v("サーバの情報を追記することで、nginx が"),e("code",[t._v("app2")]),t._v("サーバにも通信を流してくれます。")]),t._v(" "),e("p",[t._v("nginx はロードバランサ（負荷分散装置）としての機能も備えているので、\nこうすることで今まで"),e("code",[t._v("app1")]),t._v("サーバにしかいかなかった通信が"),e("code",[t._v("app2")]),t._v("にも行くようになり、負荷を分散できます。")]),t._v(" "),e("p",[t._v("nginx の機能について詳しく説明することは主題から外れてしまいますので、この講義では行いません。\nさらに詳しく知りたい人は nginx の"),e("a",{attrs:{href:"http://nginx.org/en/docs/http/load_balancing.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("公式ドキュメント"),e("OutboundLink")],1),t._v("をご覧ください。")]),t._v(" "),e("h4",{attrs:{id:"実行-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#実行-2"}},[t._v("#")]),t._v(" 実行")]),t._v(" "),e("p",[t._v("さて、ファイルの準備ができたら Ansible を実行します。\n今回は事前にチェックを行ってみましょう。")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[t._v("ansible-playbook -C site.yml\n")])])]),e("p",[e("code",[t._v("dryrun")]),t._v("で結果を確認すると、新たに"),e("code",[t._v("app2")]),t._v("サーバが増えていることが確認できます。\nまた、nginx の設定ファイルの差分も確認できるはずです。")]),t._v(" "),e("p",[e("code",[t._v("failed=0")]),t._v("と表示されていれば問題ありません。\n"),e("code",[t._v("-C（--check）")]),t._v("のオプションを外し、本実行を行いましょう。")]),t._v(" "),e("p",[t._v("コマンドが終了したら、ブラウザで"),e("a",{attrs:{href:"https://localhost:8443",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://localhost:8443"),e("OutboundLink")],1),t._v("にアクセスして確認してみましょう。")]),t._v(" "),e("p",[t._v("この Web アプリケーションは動作しているサーバのホスト名を画面に表示しています。\n新しくブラウザを開き"),e("a",{attrs:{href:"https://localhost:8443",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://localhost:8443"),e("OutboundLink")],1),t._v("にアクセスすると、ホスト名の表記が変わっているはずです。")]),t._v(" "),e("p",[t._v("これにより、nginx が正常に負荷を分散してくれていることが確認できます。")]),t._v(" "),e("p",[t._v("ここで、もう一つ注目していただきたいところがあります。\nAnsible の実行ログの中に、"),e("code",[t._v("RUNNING HANDLER")]),t._v("という表記が確認できると思います。\nさきほどと同じ様に"),e("code",[t._v("ansible-playbook site.yml")]),t._v("と実行した場合、この表記がなくなると思います。")]),t._v(" "),e("p",[t._v("これは Ansible のハンドラという機能になります。\nこれは、ハンドラを設定したタスクが"),e("code",[t._v("changed")]),t._v("のときにのみ実行されるタスクを設定できる機能です。\n実際に実行されるタスクは各ロールの"),e("code",[t._v("handlers/main.yml")]),t._v("に書かれています。")]),t._v(" "),e("p",[t._v("これにより設定ファイルが変更された場合のみ、アプリケーションやデータベースなどのプロセスを再起動できます。\n影響範囲を限定できるため、安全にホストに対して変更を加えることができます。")]),t._v(" "),e("p",[t._v("詳細は"),e("a",{attrs:{href:"https://docs.ansible.com/ansible/latest/user_guide/playbooks_intro.html#handlers-running-operations-on-change",target:"_blank",rel:"noopener noreferrer"}},[t._v("公式ドキュメント"),e("OutboundLink")],1),t._v("をご覧ください。")]),t._v(" "),e("h3",{attrs:{id:"解答例"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#解答例"}},[t._v("#")]),t._v(" 解答例")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://github.com/iij/ansible-exercise/tree/solution",target:"_blank",rel:"noopener noreferrer"}},[t._v("教材の solution ブランチ"),e("OutboundLink")],1),t._v("が解答例になっています。\nこの解答例以外にも多くの実現方法がありますが、参考にしてもらえればと思います。")]),t._v(" "),e("p",[t._v("他のファイルについても、この講義を受けた後の最終的なファイルの内容になっています。\nハンズオンを進める中でつまずくことがあれば、参考にしてもらえればと思います。")]),t._v(" "),e("h3",{attrs:{id:"コラム-特定の-playbook-のみ実行する"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#コラム-特定の-playbook-のみ実行する"}},[t._v("#")]),t._v(" コラム 特定の playbook のみ実行する")]),t._v(" "),e("p",[t._v("Ansible には冪等性を担保する為の仕組みが備わっているというのは記述したとおりです。\nしかしながら、実行する前から不要と分かっている作業まで読み込ませ、Ansible に実行判断を任せるというのは\n万が一を気にする運用の場では不安を感じたり、処理時間が惜しいと感じることもあるでしょう。")]),t._v(" "),e("p",[t._v("Ansible ではそのような際に、実行タスクを分けて実行する事も可能になっています。\n今回のケースでは以下のように実行する事で nginx のみのタスクだけ実行する、といった事が可能になります。")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[t._v("ansible-playbook -C site.yml -t nginx\n")])])]),e("p",[t._v("これはどのように実行しているのでしょうか。\n実は Ansible には"),e("code",[t._v("タグ")]),t._v("という機能があり、タスクやロールなどに任意の値（タグ）を付けることができます。\nこれを利用することで、Ansible 実行時に任意のタスクのみを実行する/しないことができます。\n実はさきほどの"),e("code",[t._v("playbooks/rp.yml")]),t._v("にタグが設定してありました。")]),t._v(" "),e("p",[t._v("タグは増やしすぎても管理がたいへんになるので、ある程度のまとまりやよく使うタスクにのみ付与するのが良いでしょう。\nタグの詳細については"),e("a",{attrs:{href:"https://docs.ansible.com/ansible/latest/user_guide/playbooks_tags.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("公式ドキュメント"),e("OutboundLink")],1),t._v("をご覧ください。")]),t._v(" "),e("credit-footer")],1)}),[],!1,null,null,null);s.default=n.exports}}]);