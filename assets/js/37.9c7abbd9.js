(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{494:function(e,a,t){"use strict";t.r(a);var l=t(45),r=Object(l.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"go-tutor"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#go-tutor"}},[e._v("#")]),e._v(" go-tutor")]),e._v(" "),t("ul",[t("li",[e._v("dockerfileの更新手順です\n"),t("ul",[t("li",[t("code",[e._v("bootcamp/src/server-app/go/go/src-tutor")]),e._v(" 上で作業することを想定しています")])])]),e._v(" "),t("li",[e._v("本手順は、講義"),t("RouterLink",{attrs:{to:"/server-app/go/"}},[e._v("GoでWebアプリケーションを作る")]),e._v(" で使用するdocker imageの更新手順です\n"),t("ul",[t("li",[e._v("基本的に受講者が行う必要はありません")])])],1)]),e._v(" "),t("h2",{attrs:{id:"_1-update-sample"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-update-sample"}},[e._v("#")]),e._v(" 1. update sample")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("./samples")]),e._v(" 配下を更新してください\n"),t("ul",[t("li",[e._v("docker containerの、"),t("code",[e._v("/go/src/samples")]),e._v(" に mountされます")])])]),e._v(" "),t("li",[t("code",[e._v("./go_tutorial")]),e._v(" 配下を更新してください\n"),t("ul",[t("li",[e._v("docker containerの、"),t("code",[e._v("/go/src/go_tutorial")]),e._v(" に mountされます")])])])]),e._v(" "),t("h2",{attrs:{id:"_2-update-dockerfile"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-update-dockerfile"}},[e._v("#")]),e._v(" 2. update dockerfile")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("./Dockerfile")]),e._v(" を編集してください\n"),t("ul",[t("li",[e._v("平時の更新対象は以下だけだと思います\n"),t("ul",[t("li",[t("code",[e._v('LABEL maintainer="<your email address>"')])]),e._v(" "),t("li",[t("code",[e._v("ENV GOVERSION <version of golang>")])])])])])])]),e._v(" "),t("h2",{attrs:{id:"_3-image更新やら試験"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-image更新やら試験"}},[e._v("#")]),e._v(" 3. image更新やら試験")]),e._v(" "),t("ol",[t("li",[e._v("build と 動作確認\n"),t("ul",[t("li",[t("code",[e._v("make")]),e._v(" "),t("ul",[t("li",[e._v("docker container の"),t("code",[e._v("/go/src/sampple")]),e._v(" に移動するので、もろもろ試す")]),e._v(" "),t("li",[e._v("試したあとは、exitで良い(--rm で起動しているので、containerの削除は自動)")])])])])]),e._v(" "),t("li",[t("code",[e._v("1. update sample")]),e._v(", "),t("code",[e._v("2. update dockerfile")]),e._v(", 本手順をくり返し、納得のいく構成に更新")])]),e._v(" "),t("h2",{attrs:{id:"_4-build-and-push"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-build-and-push"}},[e._v("#")]),e._v(" 4. build and push")]),e._v(" "),t("ol",[t("li",[e._v("builderの用意"),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("docker buildx create --name <buildername>\ndocker buildx use <buildername>\ndocker buildx inspect --bootstrap\n")])])])]),e._v(" "),t("li",[e._v("login\n"),t("ul",[t("li",[t("code",[e._v("docker login")])])])]),e._v(" "),t("li",[e._v("build and push"),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("docker buildx build --platform linux/arm64,linux/amd64,linux/386,linux/s390x,linux/arm/v7,linux/arm/v6 -t <username>/go-tutor:<version> --push .\n")])])])]),e._v(" "),t("li",[e._v("logout\n"),t("ul",[t("li",[t("code",[e._v("docker logout")])])])])]),e._v(" "),t("h2",{attrs:{id:"_5-ゴミ掃除"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-ゴミ掃除"}},[e._v("#")]),e._v(" 5. ゴミ掃除")]),e._v(" "),t("ol",[t("li",[e._v("tag付け対象削除\n"),t("ul",[t("li",[t("code",[e._v("docker rmi <username>/go-tutor:<version>")])])])]),e._v(" "),t("li",[e._v("その他 作業中のdockerimage\n"),t("ul",[t("li",[t("code",[e._v("make clean")])])])]),e._v(" "),t("li",[e._v("builderの削除"),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("docker buildx use default\ndocker buildx inspect --bootstrap\ndocker buildx stop <buildername>\ndocker buildx rm <buildername>\n")])])])])]),e._v(" "),t("h2",{attrs:{id:"_6-リンクの更新"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6-リンクの更新"}},[e._v("#")]),e._v(" 6. リンクの更新")]),e._v(" "),t("ul",[t("li",[e._v("講義"),t("RouterLink",{attrs:{to:"/server-app/go/"}},[e._v("GoでWebアプリケーションを作る")]),e._v(" で、参照しているpathを書き換えます")],1),e._v(" "),t("li",[e._v("本手順作成時点で確認しているpathは、以下です\n"),t("ul",[t("li",[t("RouterLink",{attrs:{to:"/server-app/go/var/md/init.html"}},[e._v("GoでWebアプリケーションを作る(下準備編)")]),e._v(" "),t("ul",[t("li",[e._v("docker pullしてくる対象のimage名")])])],1)])])])])}),[],!1,null,null,null);a.default=r.exports}}]);