(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-common"],{0:function(t,e,i){t.exports=i("56d7")},"034f":function(t,e,i){"use strict";var n=i("64a9"),s=i.n(n);s.a},"0672":function(t,e,i){"use strict";var n=i("b98f"),s=i.n(n);s.a},"49b7":function(t,e,i){},"53a2":function(t,e,i){"use strict";var n=i("a6e4"),s=i.n(n);s.a},"552f":function(t,e,i){},"56d7":function(t,e,i){"use strict";i.r(e);i("cadf"),i("551c"),i("f751"),i("097d");var n=i("2b0e"),s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("Bar"),i("div",{staticClass:"menu position-relative"},[i("div",{staticClass:"menu-item menu-item-recent",class:{"menu-item-selected":t.isRecentSelected},on:{click:function(e){return t.recent()}}},[t._v("\n      "+t._s(t.$t("menu.recent"))+"\n    ")]),i("div",{staticClass:"menu-item menu-item-random",class:{"menu-item-selected":t.isRandomSelected},on:{click:function(e){return t.random()}}},[t._v("\n      "+t._s(t.$t("menu.random"))+"\n    ")]),i("div",{staticClass:"menu-item menu-item-favorited",class:{"menu-item-selected":t.isFavoriteSelected},on:{click:function(e){return t.fav()}}},[t._v("\n      "+t._s(t.$t("menu.favorite"))+"\n    ")]),i("div",{staticClass:"menu-item menu-item-help",class:{"menu-item-selected":t.isHelpSelected},on:{click:function(e){return t.help()}}},[t._v("\n      "+t._s(t.$t("menu.help"))+"\n    ")])]),i("section",{staticClass:"lgtmoon-section center recent-section position-relative image-section"},[i("Images",{directives:[{name:"show",rawName:"v-show",value:t.isRecentSelected,expression:"isRecentSelected"}],attrs:{items:t.recentItems},on:{"update:items":function(e){t.recentItems=e},select:t.showDetail}}),i("Images",{directives:[{name:"show",rawName:"v-show",value:t.isRandomSelected,expression:"isRandomSelected"}],attrs:{items:t.randomItems},on:{"update:items":function(e){t.randomItems=e},select:t.showDetail}}),i("Images",{directives:[{name:"show",rawName:"v-show",value:t.isFavoriteSelected,expression:"isFavoriteSelected"}],attrs:{items:t.favoritedItems},on:{"update:items":function(e){t.favoritedItems=e},select:t.showDetail}}),i("FavoriteHelp",{directives:[{name:"show",rawName:"v-show",value:t.showFavoriteHelp,expression:"showFavoriteHelp"}]}),i("Help",{directives:[{name:"show",rawName:"v-show",value:t.isHelpSelected,expression:"isHelpSelected"}]}),t.isShowingDetail?i("ImageDetail",{attrs:{url:t.image.url},on:{close:t.closeDetail}}):t._e(),t.isLoading?i("Loading"):t._e()],1)],1)},a=[],o=(i("ac6a"),i("ac4d"),i("8a81"),i("5df3"),i("1c4c"),i("7f7f"),i("6b54"),i("d225")),r=i("b0b4"),l=i("bc3a"),c=i.n(l);function u(t){if("undefined"===typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(t=m(t))){var e=0,i=function(){};return{s:i,n:function(){return e>=t.length?{done:!0}:{done:!1,value:t[e++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var n,s,a=!0,o=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return a=t.done,t},e:function(t){o=!0,s=t},f:function(){try{a||null==n.return||n.return()}finally{if(o)throw s}}}}function m(t,e){if(t){if("string"===typeof t)return d(t,e);var i=Object.prototype.toString.call(t).slice(8,-1);return"Object"===i&&t.constructor&&(i=t.constructor.name),"Map"===i||"Set"===i?Array.from(i):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?d(t,e):void 0}}function d(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}var h=function(){function t(){Object(o["a"])(this,t)}return Object(r["a"])(t,[{key:"recent",value:function(){return c.a.get("/api/images/recent")}},{key:"random",value:function(){return c.a.get("/api/images/random")}},{key:"search",value:function(t){return c.a.get("/api/search",{params:{keyword:t}})}},{key:"generateByUrl",value:function(t){return c.a.post("/api/images/url",{url:t})}},{key:"generateByFile",value:function(t){var e=new FormData;return e.append("file",t),c.a.post("/api/images/binary",e)}},{key:"unfavorite",value:function(t){var e=this.favorited();e=e.filter((function(e){return e.url!==t.url})),localStorage.setItem("favorites",JSON.stringify(e))}},{key:"favorite",value:function(t){var e=this.favorited();e.unshift(t),localStorage.setItem("favorites",JSON.stringify(e))}},{key:"favorited",value:function(){var t=null;try{t=JSON.parse(localStorage.getItem("favorites"))}catch(e){return[]}return null===t?[]:t}},{key:"isFavorited",value:function(t){var e,i=this.favorited(),n=u(i);try{for(n.s();!(e=n.n()).done;){var s=e.value;if(s.url==t.url)return!0}}catch(a){n.e(a)}finally{n.f()}return!1}}]),t}(),p=new h,f=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"form-block"},[i("form",{staticClass:"form",attrs:{id:"lgtmform"}},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.keyword,expression:"keyword"}],staticClass:"form-input-text",attrs:{type:"text",name:"keyword",placeholder:t.$t("form.placeholder"),disabled:t.isInputDisabled},domProps:{value:t.keyword},on:{input:function(e){e.target.composing||(t.keyword=e.target.value)}}}),i("label",{staticClass:"form-button form-submit"},[i("span",{domProps:{textContent:t._s(t.$t(t.submitButtonLabel))}}),i("input",{staticClass:"hidden",attrs:{type:"submit",value:"Search",disabled:t.isInputDisabled},on:{click:function(e){return e.preventDefault(),t.submit(e)}}})]),i("label",{staticClass:"form-button form-upload"},[i("span",[t._v(t._s(t.$t("form.upload")))]),i("input",{staticClass:"hidden",attrs:{type:"file",name:"file"},on:{change:t.uploadBinary}})]),i("span",{staticClass:"form-message",attrs:{id:"message"},domProps:{textContent:t._s(t.$t(t.message))}})])]),0!=t.images.length?i("div",{staticClass:"search-result-block"},[i("h2",[t._v(t._s(t.$t("form.result.title")))]),i("div",[t._v("\n      "+t._s(t.$t("form.result.description"))+"\n    ")]),i("div",{staticClass:"close",on:{click:t.close}},[t._v("x Close")]),i("Images",{attrs:{items:t.images},on:{"update:items":function(e){t.images=e},select:t.select}}),t.isInputDisabled?i("Loading"):t._e()],1):t._e()])},v=[],g=(i("4917"),i("386d"),function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"images-block"},t._l(t.items,(function(e){return i("LgtmImage",{attrs:{item:e},on:{select:t.select}})})),1)}),_=[],b=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"image-block",on:{mouseenter:function(e){return t.mouseenter()},mouseleave:function(e){return t.mouseleave()}}},[t.isShowButton?i("img",{staticClass:"hover-button star-button",attrs:{src:t.starIcon,title:"Star this image"},on:{mousedown:function(e){return t.toggleStar()}}}):t._e(),i("CopyButton",{directives:[{name:"show",rawName:"v-show",value:t.isShowButton,expression:"isShowButton"}],staticClass:"hover-button copy-button",attrs:{text:t.githubMarkdown}}),i("img",{staticClass:"image",attrs:{src:t.item.url},on:{click:function(e){return t.select()}}})],1)},w=[],y=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("img",{staticClass:"copy-image",class:[t.id],attrs:{"data-clipboard-text":t.text,src:t.icon,title:"Copy GitHub Markdown"}}),t.isCopied?i("div",{staticClass:"copied-text"},[t._v("Copied!")]):t._e()])},k=[],C=i("b311"),I=i.n(C),$={name:"CopyButton",props:["text"],data:function(){return{isCopied:!1,id:null}},mounted:function(){var t=this;this.id="copy-"+this._uid;var e=new I.a("."+this.id);e.on("success",(function(e){t.copied()}))},computed:{icon:function(){return"/assets/copy.png"}},methods:{copied:function(){var t=this;this.isCopied=!0,setTimeout((function(){t.isCopied=!1}),2e3)}}},G=$,S=(i("9c90"),i("2877")),L=Object(S["a"])(G,y,k,!1,null,"9dacc8c4",null),M=L.exports,T={name:"LgtmImage",data:function(){return{isMouseOn:!1,isFavorited:p.isFavorited(this.item)}},components:{CopyButton:M},props:["item"],computed:{starIcon:function(){return this.isFavorited?"/assets/star-on.png":"/assets/star-off.png"},isShowButton:function(){return!!this.item.isConverted&&this.isMouseOn},githubMarkdown:function(){return"![LGTM]("+this.item.url+")"}},methods:{select:function(){this.$emit("select",this.item)},mouseenter:function(){this.isMouseOn=!0,this.isFavorited=p.isFavorited(this.item)},mouseleave:function(){this.isMouseOn=!1},toggleStar:function(){this.isFavorited?(p.unfavorite(this.item),this.isFavorited=!1):(p.favorite(this.item),this.isFavorited=!0)}}},x=T,D=(i("e454"),Object(S["a"])(x,b,w,!1,null,"d851e50e",null)),F=D.exports,H={name:"Images",props:["items"],components:{LgtmImage:F},methods:{select:function(t){this.$emit("select",t)}}},U=H,B=(i("8a49"),Object(S["a"])(U,g,_,!1,null,"3ddfff5e",null)),O=B.exports,R=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},E=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"overlay"},[i("div",{staticClass:"loader"},[i("img",{attrs:{src:"/assets/loader.gif"}})])])}],j=(i("53a2"),{}),P=Object(S["a"])(j,R,E,!1,null,null,null),A=P.exports,N={name:"Bar",components:{Images:O,Loading:A},data:function(){return{keyword:"",message:"",images:[],isInputDisabled:!1}},computed:{isInputUrl:function(){return this.isUrl(this.keyword)},submitButtonLabel:function(){return this.isInputUrl?"form.submit.generate":"form.submit.search"}},methods:{submit:function(){this.isUrl(this.keyword)?this.generate(this.keyword):this.search(this.keyword)},search:function(t){var e=this;this.isInputDisabled=!0,p.search(t).then((function(t){e.images=t.data.images,e.enableInputInSec(5)})).catch((function(t){e.message="form.message.error.search",e.enableInputInSec(5)}))},generate:function(t){var e=this;this.isInputDisabled=!0,p.generateByUrl(t).then((function(t){e.message="form.message.generating",e.enableInputInSec(5)})).catch((function(t){e.message="form.message.error.generating",e.enableInputInSec(5)}))},uploadBinary:function(t){var e=this,i=t.target.files[0];p.generateByFile(i).then((function(t){e.message="form.message.generating",e.enableInputInSec(5)})).catch((function(t){e.message="form.message.error.generating",e.enableInputInSec(5)}))},enableInputInSec:function(t){var e=this;setTimeout((function(){e.isInputDisabled=!1}),1e3*t)},isUrl:function(t){return!(null===t.match(/^https?:\/\//))},select:function(t){this.generate(t.url)},close:function(){this.images=[]}}},J=N,q=(i("f524"),Object(S["a"])(J,f,v,!1,null,"30b3dbf0",null)),W=q.exports,z=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"image-detail-full-overlay",on:{click:t.close}}),i("div",{staticClass:"image-detail"},[i("a",{attrs:{href:t.url}},[i("img",{staticClass:"image-detail-image",attrs:{src:t.url}})]),i("h3",{staticClass:"image-detail-headding"},[t._v("Image URL")]),i("div",{staticClass:"image-detail-text-box"},[i("input",{staticClass:"image-detail-text",attrs:{type:"text"},domProps:{value:t.getImageUrl()}})]),i("h3",{staticClass:"image-detail-headding"},[t._v("GitHub Markdown")]),i("div",[i("input",{staticClass:"image-detail-text",attrs:{type:"text",id:"image-markdown"},domProps:{value:t.getGithubMarkdown()}})])])])},Y=[],K={props:["url"],components:{CopyButton:M},methods:{close:function(){this.$emit("close")},getImageUrl:function(){return this.url},getGithubMarkdown:function(){return"![LGTM]("+this.url+")"}}},X=K,Q=(i("0672"),Object(S["a"])(X,z,Y,!1,null,null,null)),V=Q.exports,Z=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("section",{staticClass:"lgtmoon-section center"},[i("h2",{staticClass:"help-section-title"},[t._v(t._s(t.$t("help.about.title")))]),t._v("\n    "+t._s(t.$t("help.about.description"))+"\n    "+t._s(t.$t("help.about.gif"))+"\n  ")]),i("section",{staticClass:"lgtmoon-section center"},[i("h2",{staticClass:"help-section-title"},[t._v(t._s(t.$t("help.howtouse.title")))]),t._v("\n\n    "+t._s(t.$t("help.howtouse.description"))+"\n\n    "),i("h3",{staticClass:"help-section-title"},[t._v(t._s(t.$t("help.howtouse.keyword.title")))]),i("ol",[i("li",[t._v(t._s(t.$t("help.howtouse.keyword.step1")))]),i("li",[t._v(t._s(t.$t("help.howtouse.keyword.step2")))])]),i("h3",[t._v(t._s(t.$t("help.howtouse.url.title")))]),i("ol",[i("li",[t._v(t._s(t.$t("help.howtouse.url.step1")))])]),i("h3",[t._v(t._s(t.$t("help.howtouse.upload.title")))]),i("ol",[i("li",[t._v(t._s(t.$t("help.howtouse.upload.step1")))]),i("li",[t._v(t._s(t.$t("help.howtouse.upload.step2")))]),i("li",[t._v(t._s(t.$t("help.howtouse.upload.step3")))])])]),i("section",{staticClass:"lgtmoon-section center"},[i("h2",{staticClass:"help-section-title"},[t._v(t._s(t.$t("help.notice.title")))]),i("ul",[i("li",[t._v(t._s(t.$t("help.notice.notice1")))]),i("li",[t._v(t._s(t.$t("help.notice.notice2")))]),i("li",[t._v(t._s(t.$t("help.notice.notice3")))]),i("li",[t._v(t._s(t.$t("help.notice.notice4")))]),i("li",[t._v(t._s(t.$t("help.notice.notice5")))])]),i("h3",[t._v(t._s(t.$t("help.privacypolicy.title")))]),i("ul",[i("li",[t._v(t._s(t.$t("help.privacypolicy.description")))]),i("li",[i("a",{attrs:{href:"https://www.google.com/settings/ads",target:"_blank",rel:"noopener"}},[t._v("\n          "+t._s(t.$t("help.privacypolicy.googlelink"))+"\n        ")])]),i("li",[i("a",{attrs:{href:"https://www.aboutads.info/",target:"_blank",rel:"noopener"}},[t._v("\n          "+t._s(t.$t("help.privacypolicy.thirdpartylink"))+"\n        ")])])])]),i("FavoriteHelp"),t._m(0),i("section",{staticClass:"lgtmoon-section center"},[i("h2",{staticClass:"help-section-title"},[t._v(t._s(t.$t("help.contact.title")))]),t._v("\n    "+t._s(t.$t("help.contact.description"))+"\n    "),i("ul",[i("li",[t._v("\n        "+t._s(t.$t("help.contact.twitter"))+"\n        "),i("a",{attrs:{href:"https://twitter.com/yoshiki_utakata",target:"_blank"}},[t._v("\n          yoshiki_utakata\n        ")])]),t._m(1),i("li",[t._v("\n        "+t._s(t.$t("help.contact.blog"))+"\n        "),i("a",{attrs:{href:"https://www.utakata.work/",target:"_blank"}},[t._v("https://www.utakata.work/")])]),i("li",[t._v(t._s(t.$t("help.contact.article"))+"\n        "),t._m(2)])])]),t._m(3)],1)},tt=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{staticClass:"lgtmoon-section center"},[i("h2",{staticClass:"help-section-title"},[t._v("LGTMとは")]),t._v("\n    GitHubなどでプルリクエストをレビューした時、「Looks Good To Me」という言葉を略して「LGTM」と書くことがあります。\n    （「よさそうです」くらいの意味で使われます。）\n    このLGTMをちょっと楽しい画像にすることで、レビューすることやプルリクを出すことがちょっと楽しくなります。"),i("br"),i("img",{staticClass:"center",attrs:{src:"https://qiita-image-store.s3.amazonaws.com/0/29024/373aad85-d1aa-96d7-026c-66b3587ae536.png"}})])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("li",[t._v("\n        GitHub\n        "),i("a",{attrs:{href:"https://github.com/yoshikyoto/lgtmoon",target:"_blank"}},[t._v("\n          yoshikyoto/lgtmoon\n        ")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ul",[i("li",[i("a",{attrs:{href:"http://qiita.com/yoshikyoto/items/4910b1a4bcefe7f5ab8c",target:"_blank"}},[t._v("\n              LGTM画像を驚くほど簡単に作れるWebサービス with Scala\n            ")])]),i("li",[i("a",{attrs:{href:"https://www.utakata.work/archive/category/LGTMoon",target:"_blank"}},[t._v("\n              ブログのLGTMoon関連記事\n            ")])])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{staticClass:"lgtmoon-section center"},[i("h2",{staticClass:"help-section-title"},[t._v("Donation")]),i("div",[i("ul",[i("li",[i("a",{attrs:{href:"http://amzn.asia/0UX34TT",target:"_blank"}},[t._v("\n            Amazon欲しい物リスト\n          ")])])])])])}],et=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{staticClass:"lgtmoon-section center"},[i("h2",{staticClass:"help-section-title"},[t._v(t._s(t.$t("star.title")))]),i("p",[t._v("\n    "+t._s(t.$t("star.hover"))+"\n  ")]),i("img",{staticClass:"favorite-help-cat",attrs:{src:"/assets/help/favorite.png"}}),i("p",[t._v("\n    "+t._s(t.$t("star.star"))+"\n    "+t._s(t.$t("star.unstar"))+"\n  ")]),i("p",[t._v("\n    "+t._s(t.$t("star.limit"))),i("br"),t._v("\n    "+t._s(t.$t("star.save"))+"\n  ")])])},it=[],nt=(i("a3f1"),{}),st=Object(S["a"])(nt,et,it,!1,null,"0b297775",null),at=st.exports,ot={name:"Help",components:{FavoriteHelp:at}},rt=ot,lt=Object(S["a"])(rt,Z,tt,!1,null,null,null),ct=lt.exports,ut={name:"app",data:function(){return{selected:0,isShowingDetail:!1,isLoading:!1,recentItems:[],randomItems:[],favoritedItems:[],image:null}},components:{Bar:W,Help:ct,Images:O,ImageDetail:V,Loading:A,FavoriteHelp:at},mounted:function(){var t=this;p.recent().then((function(e){t.recentItems=e.data.images}));var e=30;setInterval((function(){p.recent().then((function(e){t.recentItems=e.data.images}))}),1e3*e)},computed:{isRecentSelected:function(){return 0==this.selected},isRandomSelected:function(){return 1==this.selected},isFavoriteSelected:function(){return 2==this.selected},isHelpSelected:function(){return 3==this.selected},showFavoriteHelp:function(){var t=this.favoritedItems.length>0;return this.isFavoriteSelected&&!t}},methods:{recent:function(){this.selected=0},random:function(){var t=this;this.isLoading||(this.selected=1,this.isLoading=!0,p.random().then((function(e){t.randomItems=e.data.images,t.isLoading=!1})))},fav:function(){this.selected=2,this.favoritedItems=p.favorited()},help:function(){this.selected=3},showDetail:function(t){this.isShowingDetail=!0,this.image=t},closeDetail:function(){this.isShowingDetail=!1}}},mt=ut,dt=(i("034f"),Object(S["a"])(mt,s,a,!1,null,null,null)),ht=dt.exports,pt=i("a925"),ft={ja:{form:{placeholder:"キーワードで画僧検索 or URLを直接入力",upload:"画像アップロード",submit:{search:"検索/生成",generate:"LGTM画像生成"},result:{title:"画像検索結果からLGTMを作成",description:"画像を選択するとその画像を元にLGTM画像を作成します"},message:{generating:"生成完了までお待ちください",error:{search:"画像検索でエラーが発生しました",generating:"画像生成中にエラーが発生しました"}}},menu:{recent:"最近の画像",random:"ランダム",favorite:"お気に入り",help:"使い方"},star:{title:"お気に入り機能の使い方",hover:"画像の上にマウスを移動させると右上に☆が出て来ます。",star:"☆をクリックするとお気に入り登録されます。",unstar:"もう一度クリックするとお気に入りから外れます。",limit:"お気に入りの上限はありません。",save:"お気に入りはお使いのPCブラウザに保存されますので、PCを変えたりブラウザを変えたりしますとお気に入りは消えてしまいます。ご了承ください。"},help:{about:{title:"LGTMoonとは",description:"LGTMoonはLGTM画像をカンタンに生成・作成できるWebサイト、「LGTM画像ジェネレーター」です。",gif:"GIFアニメーションにも対応しています。"},howtouse:{title:"使い方",description:"LGTM画像の作成方法はいくつかあります。",keyword:{title:"キーワード検索からLGTM画像生成をする方法",step1:"検索欄にキーワードを入力すると画像検索結果一覧が表示されます。",step2:"検索結果一覧から画像をクリックすると、その画像を元にLGTM画像が生成されます。"},url:{title:"画像URLからLGTM画像を生成する方法",step1:"画像URLを検索欄に入力すると、その画像をもとにLGTM画像が生成されます。"},upload:{title:"画像をアップロードする方法",step1:"アップロードボタンをクリックします",step2:"ファイルを選択して画像をアップロードします",step3:"アップロードした画像からLGTM画像が生成されます。"}},notice:{title:"注意",notice1:"画像生成には数秒〜数分かかります。連打しないでください。",notice2:"生成に成功すると「最近の画像」に表示されます。",notice3:"画像生成に失敗する可能性もあります。しばらくたっても生成されない場合は、もう一度お試しいただくか、別の画像でお試しください。",notice4:"LGTM画像生成の際は、元画像の著作権などに注意してください。",notice5:"公序良俗に反する画像や違法な画像を作成しないでください。これらの画像が見つかった場合は予告なく画像を削除することがあります。"},privacypolicy:{title:"プライバシーポリシー",description:"このサイトでは、Googleや第三者配信事業者がCookieを使用して、当サイトや他のサイトへの過去のアクセス情報に基づいて広告を配信します。",googlelink:"Googleのパーソナライズド広告を無効にしたい",thirdpartylink:"サードパーティのパーソナライズド広告のCookieの利用許可設定を変更したい"},contact:{title:"Contact",description:"何か要望・ご連絡がございましたら下記にご連絡くださるか、GitHubにプルリクエストを出してください。",twitter:"twitter",blog:"ブログ",article:"関連記事"},donation:{title:"応援する"}}},en:{form:{placeholder:"Keyword to search / URL to generate",upload:"Upload",submit:{search:"Search and Generate",generate:"Generate"},result:{title:"Generate by search result",description:"Click to select source image."},message:{generating:"Generating, please wait.",error:{search:"Error on searching.",generating:"Error on generating."}}},menu:{recent:"Recent",random:"Random",favorite:"Stars",help:"Help"},star:{title:'How to use "Star"',hover:"Hover mouse on image and click star.",star:"Click star to add to your Star (bookmark).",unstar:"Click star again to remove from your star.",limit:"You can use it without cout limit.",save:"Star save on your browser. When you change PC or browser, your star is away."},help:{about:{title:"What is LGTMoon",description:"LGTMoon is LGTM image generator to generat LGTM image easily.",gif:"LGTMoon also support GIF image."},howtouse:{title:"Hot to user",description:"You can generate LGTM image in several ways.",keyword:{title:"Generate with image search.",step1:"Input keyword in textarea and search images.",step2:"Click an image in search result, create LGTM image from the selected image.。"},url:{title:"Generate with URL of source image",step1:"Input image URL and click Generate button to Generate from the image."},upload:{title:"Upload source image",step1:'Click "Upload" button.',step2:"Select image file and upload.",step3:"Generate LGTM image from uploaded file."}},notice:{title:"Notice",notice1:"It takes few seconds or minutes to generate. Please don't click button repeatedly.",notice2:'LGTM image appears in "Recent" section when generation is succeeded.',notice3:"It might fail to generate image. Please try again or use another image when it seems to be failed.",notice4:"Please avoid violation of copyright.",notice5:"We might delete images that violate the law, public order or morality."},privacypolicy:{title:"Privacy policy",description:"Google and thirdparty use Cookie that contains access history of sites to provide ADs.",googlelink:"Disable Google Personalized ADs.",thirdpartylink:"Manage Cookie settings for thirdparty ADs."},contact:{title:"Contact",description:"If you find bugs, wrong english, question or feature request, contact me or create pull request on GitHub.",twitter:"twitter (mainly Japanese)",blog:"Blog (Japanese only)",article:"Related Articles (Japanese only)"},donation:{title:"Donate"}}}};n["a"].use(pt["a"]),console.log(locale);var vt=new pt["a"]({locale:locale,messages:ft});new n["a"]({render:function(t){return t(ht)},i18n:vt}).$mount("#app")},"64a9":function(t,e,i){},"7b05":function(t,e,i){},"8a49":function(t,e,i){"use strict";var n=i("552f"),s=i.n(n);s.a},"9c90":function(t,e,i){"use strict";var n=i("49b7"),s=i.n(n);s.a},a3f1:function(t,e,i){"use strict";var n=i("7b05"),s=i.n(n);s.a},a6e4:function(t,e,i){},adff:function(t,e,i){},b98f:function(t,e,i){},bcde:function(t,e,i){},e454:function(t,e,i){"use strict";var n=i("adff"),s=i.n(n);s.a},f524:function(t,e,i){"use strict";var n=i("bcde"),s=i.n(n);s.a}}]);
//# sourceMappingURL=chunk-common.js.map