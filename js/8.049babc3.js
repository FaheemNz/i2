(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[8],{3363:function(e,t,i){"use strict";i.r(t);var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("q-drawer",{attrs:{side:"right",elevated:"",overlay:"",behavior:"mobile",width:270,breakpoint:500},model:{value:e.rightDrawerOpen,callback:function(t){e.rightDrawerOpen=t},expression:"rightDrawerOpen"}},[i("q-list",{attrs:{padding:""}},[i("q-item-label",{attrs:{header:""}},[e._v(e._s(e.$t("Settings.RightDrawer.key1")))]),i("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{tag:"label"}},[i("q-item-section",{attrs:{avatar:""}},[i("q-icon",{attrs:{name:"brightness_6"}})],1),i("q-item-section",[i("q-item-label",[e._v(e._s(e.$t("Settings.RightDrawer.key2")))])],1),i("q-item-section",{attrs:{side:""}},[i("q-toggle",{attrs:{color:"blue",val:"battery"},on:{input:e.toggleNightTheme},model:{value:e.isNightMode,callback:function(t){e.isNightMode=t},expression:"isNightMode"}})],1)],1),i("q-item-label",{attrs:{header:""}},[e._v(e._s(e.$t("Settings.RightDrawer.key3")))]),i("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{tag:"label"}},[i("q-item-section",{attrs:{avatar:""}},[i("q-icon",{attrs:{name:"fullscreen"}})],1),i("q-item-section",[i("q-item-label",[e._v(e._s(e.$t("Settings.RightDrawer.key4")))])],1),i("q-item-section",{attrs:{side:""}},[i("q-toggle",{attrs:{val:"battery",color:"green"},on:{input:e.toggleFullScreen},model:{value:e.isFullScreen,callback:function(t){e.isFullScreen=t},expression:"isFullScreen"}})],1)],1),i("q-item-label",{attrs:{header:""}},[e._v(e._s(e.$t("Settings.RightDrawer.key5")))]),i("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{tag:"label"}},[i("q-item-section",{attrs:{avatar:""}},[i("q-icon",{attrs:{name:"remove"},on:{click:e.decreaseFontSize}})],1),i("q-item-section",[i("q-item-label",[e._v(e._s(e.$t("Settings.RightDrawer.key6")))])],1),i("q-item-section",{attrs:{side:""}},[i("q-icon",{attrs:{name:"add"},on:{click:e.increaseFontSize}})],1)],1),i("q-item-label",{attrs:{header:""}},[e._v(e._s(e.$t("Settings.RightDrawer.key7")))]),i("q-item",{attrs:{tag:"label"}},[i("q-item-section",[i("q-btn-dropdown",{attrs:{"no-caps":"",icon:"language",stretch:"",flat:"",label:"Language"}},[i("q-list",e._l(e.langOptions,(function(t,a){return i("q-item",{directives:[{name:"close-popup",rawName:"v-close-popup"}],key:a,attrs:{clickable:"",tabindex:"0"},on:{click:function(i){return e.changeLanguage(t.value)}}},[i("q-item-section",[i("q-item-label",[e._v(e._s(t.label))])],1),"en-us"===t.value?i("q-item-section",{attrs:{avatar:""}},[i("q-icon",{attrs:{name:"done_all"}})],1):e._e()],1)})),1)],1)],1)],1)],1)],1)},r=[],n=i("2a19");function s(e,t={}){n["a"].create({message:e,color:"black",timeout:1500,type:t.type||"",textColor:t.textColor||"white",position:t.position||"bottom-right",actions:[{label:"Dismiss"}]})}var l={name:"SettingDrawer",data(){return{isActive:!1,isFullScreen:!1,isNightMode:!1,rightDrawerOpen:!1,fontSize:17,lineHeight:24,lang:this.$i18n.locale,langOptions:[{value:"en-us",label:"English"},{value:"ar",label:"Arabic"},{value:"ur",label:"Urdu"}]}},methods:{changeLanguage(e){"en-us"!==e&&s("Working on...",{type:"info",textColor:"primary"})},decreaseFontSize(){const e=document.getElementsByClassName("text-fluid")[0];e&&this.fontSize>15&&(this.fontSize--,e.style.fontSize=this.fontSize+"px")},increaseFontSize(){const e=document.getElementsByClassName("text-fluid")[0];e&&this.fontSize<19&&(this.fontSize++,e.style.fontSize=this.fontSize+"px")},toggleFullScreen(){this.$q.fullscreen.toggle(),this.rightDrawerOpen=!this.rightDrawerOpen},toggleNightTheme(){this.$q.dark.set(this.isNightMode),s("Theme Changed successfully!",{position:"bottom",type:"positive",textColor:"green"})},toggleDrawer(){this.rightDrawerOpen=!this.rightDrawerOpen}},watch:{"$q.fullscreen.isActive"(e){this.isFullScreen=e}}},o=l,c=i("2877"),g=i("9404"),m=i("1c1c"),h=i("0170"),p=i("66e5"),u=i("4074"),d=i("0016"),b=i("9564"),v=i("f20b"),q=i("714f"),w=i("7f67"),f=i("eebe"),S=i.n(f),_=Object(c["a"])(o,a,r,!1,null,null,null);t["default"]=_.exports;S()(_,"components",{QDrawer:g["a"],QList:m["a"],QItemLabel:h["a"],QItem:p["a"],QItemSection:u["a"],QIcon:d["a"],QToggle:b["a"],QBtnDropdown:v["a"]}),S()(_,"directives",{Ripple:q["a"],ClosePopup:w["a"]})}}]);