(function(t){function r(r){for(var n,i,s=r[0],c=r[1],u=r[2],l=0,p=[];l<s.length;l++)i=s[l],o[i]&&p.push(o[i][0]),o[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);d&&d(r);while(p.length)p.shift()();return a.push.apply(a,u||[]),e()}function e(){for(var t,r=0;r<a.length;r++){for(var e=a[r],n=!0,s=1;s<e.length;s++){var c=e[s];0!==o[c]&&(n=!1)}n&&(a.splice(r--,1),t=i(i.s=e[0]))}return t}var n={},o={app:0},a=[];function i(r){if(n[r])return n[r].exports;var e=n[r]={i:r,l:!1,exports:{}};return t[r].call(e.exports,e,e.exports,i),e.l=!0,e.exports}i.m=t,i.c=n,i.d=function(t,r,e){i.o(t,r)||Object.defineProperty(t,r,{enumerable:!0,get:e})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,r){if(1&r&&(t=i(t)),8&r)return t;if(4&r&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(i.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&r&&"string"!=typeof t)for(var n in t)i.d(e,n,function(r){return t[r]}.bind(null,n));return e},i.n=function(t){var r=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(r,"a",r),r},i.o=function(t,r){return Object.prototype.hasOwnProperty.call(t,r)},i.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=r,s=s.slice();for(var u=0;u<s.length;u++)r(s[u]);var d=c;a.push([0,"chunk-vendors"]),e()})({0:function(t,r,e){t.exports=e("56d7")},"0ee9":function(t,r,e){"use strict";var n=e("c125"),o=e.n(n);o.a},1:function(t,r){},2850:function(t,r,e){},"43d3":function(t,r,e){},"4f7e":function(t,r,e){"use strict";var n=e("d4a4"),o=e.n(n);o.a},"56d7":function(t,r,e){"use strict";e.r(r);e("cadf"),e("551c"),e("f751"),e("097d");var n=e("2b0e"),o=function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{attrs:{id:"app"}},[e("main",[e("nav",[e("ul",[e("li",[e("router-link",{attrs:{to:{name:"Product"},"active-class":"nav-link-active"}},[t._v("Продукти")])],1),e("li",[e("router-link",{attrs:{to:"/cart","active-class":"nav-link-active"}},[t._v("Кошик")])],1),e("li",[e("router-link",{attrs:{to:"/checkout","active-class":"nav-link-active"}},[t._v("Список покупок")])],1)])]),e("div",{staticClass:"container"},[e("transition",{attrs:{name:"main-pages",mode:"out-in","enter-active-class":"animated bounceInLeft","leave-active-class":"animated bounceOutRight"}},[e("router-view")],1)],1),e("AsyncPosts")],1)])},a=[],i=function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",[e("h3",{attrs:{"posts-main-title":""}},[t._v("Блок, де асинхронно загрузим пости:")]),e("transition-group",{staticClass:"post-list",attrs:{tag:"ul",name:"post-list"}},t._l(t.postList,function(r){return e("li",{key:r.id,staticClass:"post-item"},[e("h4",[t._v(t._s(r.title))]),e("p",[t._v(t._s(r.body))])])}),0),0===t.postsDownloaded?e("button",{staticClass:"download-btn",attrs:{type:"button"},on:{click:t.downloadPost}},[t._v("Загрузити 5 постів")]):e("button",{staticClass:"download-btn",attrs:{type:"button"},on:{click:t.downloadPost}},[t._v("Загрузити ще 5 постів")])],1)},s=[],c={name:"AsyncPosts",data:function(){return{postsDownloadStep:5,postsDownloaded:0}},computed:{postList:function(){return this.$store.getters["asyncPosts/postsList"]}},methods:{downloadPost:function(){this.$store.dispatch("asyncPosts/getPosts",{limit:this.postsDownloadStep+this.postsDownloaded,donloadedBefore:this.postsDownloaded}),this.postsDownloaded+=this.postsDownloadStep}}},u=c,d=(e("5b67"),e("2877")),l=Object(d["a"])(u,i,s,!1,null,"72e82a9e",null),p=l.exports,f={name:"App",components:{AsyncPosts:p},data:function(){return{users:null}},created:function(){var t=this;this.$http.get("users/").then(function(r){return t.someDataVlast=r.body})}},m=f,v=(e("7725"),Object(d["a"])(m,o,a,!1,null,"3df334f8",null)),h=v.exports,_=e("2f62"),y=(e("20d6"),e("7514"),{namespaced:!0,state:{list:[{id_product:"a1",title:"Iphone 5",price:2e3,quantityInStock:3},{id_product:"a2",title:"Iphone 6",price:2500,quantityInStock:3},{id_product:"a3",title:"Iphone 7",price:3e3,quantityInStock:3},{id_product:"a4",title:"Iphone 8",price:3500,quantityInStock:3},{id_product:"a5",title:"Iphone 10",price:4e3,quantityInStock:3}]},mutations:{removeProductFromStock:function(t,r){var e=t.list.find(function(t){return t.id_product===r});e.quantityInStock-=1},addProductFromStock:function(t,r){var e=t.list.find(function(t){return t.id_product===r});e.quantityInStock+=1},returnProductToStock:function(t,r){var e=t.list.findIndex(function(t){return t.id_product===r.id});t.list[e].quantityInStock+=r.productQuantity}},getters:{productList:function(t){return t.list}}}),b=(e("8e6e"),e("ac6a"),e("456d"),e("bd86"));function P(t,r){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);r&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),e.push.apply(e,n)}return e}function g(t){for(var r=1;r<arguments.length;r++){var e=null!=arguments[r]?arguments[r]:{};r%2?P(e,!0).forEach(function(r){Object(b["a"])(t,r,e[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):P(e).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(e,r))})}return t}var S={namespaced:!0,state:{cartProducts:[]},mutations:{addProduct:function(t,r){r=g({},r,{quantity:1}),delete r.quantityInStock,t.cartProducts.push(r)},removeProductFromCart:function(t,r){var e=t.cartProducts.findIndex(function(t){return t.id_product===r});t.cartProducts.splice(e,1)},increaseProductQuantity:function(t,r){var e=t.cartProducts.findIndex(function(t){return t.id_product===r});t.cartProducts[e].quantity+=1},reduceProductQuantity:function(t,r){var e=t.cartProducts.findIndex(function(t){return t.id_product===r});1!==t.cartProducts[e].quantity?t.cartProducts[e].quantity-=1:t.cartProducts.splice(e,1)}},getters:{cartProductList:function(t){return t.cartProducts}}},L=e("75fc"),k=e("bc3a"),w=e.n(k),$={namespaced:!0,state:{posts:[],apiUrl:"https://jsonplaceholder.typicode.com/posts"},getters:{postsList:function(t){return t.posts}},mutations:{updatePosts:function(t,r){t.posts=[].concat(Object(L["a"])(t.posts),Object(L["a"])(r))}},actions:{getPosts:function(t,r){var e=t.state,n=t.commit;w.a.get("".concat(e.apiUrl,"?_limit=").concat(r.limit)).then(function(t){return t.data}).then(function(t){var e=0===r.donloadedBefore?0:r.donloadedBefore-1,o=e+5,a=t.slice(e,o);n("updatePosts",a)})}}},O={namespaced:!0,state:{info:[{name:"Ім’я",value:"",pattern:/^[a-zA-Z ]{2,30}$/,isValid:!1},{name:"Мобільний",value:"",pattern:/^[0-9]{7,14}$/,isValid:!1},{name:"Email",value:"",pattern:/.+/,isValid:!1},{name:"Some Field 1",value:"",pattern:/.+/,isValid:!1},{name:"Some Field 2",value:"",pattern:/.+/,isValid:!1}],showSubmitInfo:!1,asyncDataLoading:!1},getters:{progressBar:function(t){var r=t.info.length,e=100/r,n=0;return t.info.forEach(function(t){t.isValid&&(n+=e)}),n}},mutations:{changeValidStatus:function(t,r){var e=r.index,n=r.status;t.info[e].isValid=n},updateMessage:function(t,r){var e=r.index,n=r.value;t.info[e].value=n},changeStatePropertyValue:function(t,r){t[r.property]=r.value},toggleStateProperty:function(t,r){t[r]=!t[r]}},actions:{asyncShowResults:function(t){t.state;var r=t.commit;r("changeStatePropertyValue",{property:"asyncDataLoading",value:!0}),setTimeout(function(){r("changeStatePropertyValue",{property:"asyncDataLoading",value:!1}),r("toggleStateProperty","showSubmitInfo")},3e3)}}};n["a"].use(_["a"]);var C=new _["a"].Store({modules:{productList:y,cart:S,asyncPosts:$,formStore:O}}),I=e("8c4f"),j=function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",[e("p",[t._v("Список товарів корзини:")]),0!==t.cartProductList.length?e("ul",t._l(t.cartProductList,function(r,n){return e("li",{key:n},[e("h4",[t._v(t._s(r.title))]),e("p",[t._v("Ціна: "+t._s(r.price))]),e("p",[t._v("кількість: "+t._s(r.quantity))]),e("div",{staticClass:"quantity-actions-wrapper"},[e("button",{staticClass:"quantity-btn quantity-btn-plus",attrs:{type:"button"},on:{click:function(e){return t.productQuantityActions(r.id_product,"minus")}}},[t._v("-1")]),e("button",{staticClass:"quantity-btn quantity-btn-plus",attrs:{type:"button"},on:{click:function(e){return t.productQuantityActions(r.id_product,"plus")}}},[t._v("+1")])]),e("button",{staticClass:"remove-btn amounts-btn-minus",attrs:{type:"button"},on:{click:function(e){return t.removeProductFromCart(r.id_product)}}},[t._v("Remove from Cart")])])}),0):e("p",{staticClass:"empty-cart-message"},[t._v("Ваш кошик порожній")]),t.cartProductList.length>0?e("button",{staticClass:"to-cart-btn",attrs:{type:"button"},on:{click:function(r){return t.$router.push("/checkout")}}},[t._v("Перейти до списку покупок")]):t._e()])},q=[],x={name:"Cart",computed:{productList:function(){return this.$store.getters["productList/productList"]},cartProductList:function(){return this.$store.getters["cart/cartProductList"]}},methods:{removeProductFromCart:function(t){this.$store.commit("productList/addProductFromStock",t),this.$store.commit("cart/removeProductFromCart",t)},productQuantityActions:function(t,r){if("plus"===r){var e=this.productList.find(function(r){return r.id_product===t});if(0===e.quantityInStock)return;this.$store.commit("productList/removeProductFromStock",t),this.$store.commit("cart/increaseProductQuantity",t)}"minus"===r&&(this.$store.commit("productList/addProductFromStock",t),this.$store.commit("cart/reduceProductQuantity",t))}}},F=x,D=(e("4f7e"),Object(d["a"])(F,j,q,!1,null,"2f4484f8",null)),V=D.exports,E=function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",[e("ProductList")],1)},B=[],A=function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("ul",t._l(t.productList,function(r,n){return e("li",{key:n},[e("h4",[t._v(t._s(r.title))]),e("p",[t._v("Ціна: "+t._s(r.price))]),t.isProductInCart(r.id_product)?t._e():e("button",{staticClass:"add-btn",attrs:{type:"button"},on:{click:function(e){return t.addProductToCart(r.id_product)}}},[t._v("Add to Cart")]),t.isProductInCart(r.id_product)?e("button",{staticClass:"remove-btn",attrs:{type:"button"},on:{click:function(e){return t.removeProductFromCart(r.id_product)}}},[t._v("Remove from Cart")]):t._e()])}),0)},M=[],Q={name:"ProductList",computed:{productList:function(){return this.$store.getters["productList/productList"]},cartProductList:function(){return this.$store.getters["cart/cartProductList"]}},methods:{addProductToCart:function(t){var r=this.productList.find(function(r){return r.id_product===t});if(void 0!==r&&0!==r.quantityInStock){var e=this.isProductInCart(t);e||(this.$store.commit("productList/removeProductFromStock",t),this.$store.commit("cart/addProduct",r))}},removeProductFromCart:function(t){var r=this.cartProductList.find(function(r){return r.id_product===t}),e=r.quantity;this.$store.commit("cart/removeProductFromCart",t),this.$store.commit("productList/returnProductToStock",{id:t,productQuantity:e})},isProductInCart:function(t){return this.cartProductList.some(function(r){return r.id_product===t})}}},T=Q,R=(e("fbe2"),Object(d["a"])(T,A,M,!1,null,"bf77c004",null)),z=R.exports,J={name:"Product",components:{ProductList:z}},U=J,Z=Object(d["a"])(U,E,B,!1,null,null,null),G=Z.exports,H=function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("p",[t._v("ОШИБКА 404")])},K=[],N={name:"Error404"},W=N,X=Object(d["a"])(W,H,K,!1,null,null,null),Y=X.exports,tt=function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",[0!==t.cartProductList.length?e("div",[e("table",[t._m(0),t._l(t.cartProductList,function(r,n){return e("tr",{key:n},[e("th",[t._v(t._s(r.title))]),e("td",[t._v(t._s(r.price))]),e("td",[t._v(t._s(r.quantity))]),e("td",[t._v(t._s(r.price*r.quantity))])])})],2),e("p",{staticClass:"total"},[t._v("\n      В сумі до сплати:\n      "),e("span",{staticClass:"total-price"},[t._v(t._s(t.totalPrice))])])]):t._e(),0===t.cartProductList.length?e("p",{staticClass:"empty-cart-message"},[t._v("Ваш кошик порожній")]):t._e(),0!==t.cartProductList.length?e("Form"):t._e()],1)},rt=[function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("tr",[e("td",[t._v("Назва товару")]),e("td",[t._v("Ціна")]),e("td",[t._v("Кількість")]),e("td",[t._v("Сума")])])}],et=function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",[e("transition",{attrs:{name:"formResults",mode:"out-in"}},[t.showSubmitInfo?t._e():e("form",{on:{submit:function(r){return r.preventDefault(),t.changeshowSubmitInfo(r)}}},[e("h3",[t._v("Заповніть форму англійською")]),e("FormProgressBar"),e("FormList"),e("button",{attrs:{disabled:t.isActiveSendButton,type:"submit"}},[t._v("Send Data")])],1),t.showSubmitInfo?e("p",[t._v("Замовлення успішно оформленно")]):t._e()]),e("transition",{attrs:{name:"loadingMessage"}},[t.asyncDataLoading?e("p",[t._v("Відправка данних. Зачекайте")]):t._e()])],1)},nt=[],ot=function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("ul",t._l(t.info,function(r,n,o){return e("li",{key:o},[e("label",[t._v(t._s(r.name))]),e("i",{staticClass:"animated",class:{"valid heartBeat":r.isValid,"unvalid zoomIn ":!r.isValid&&r.value}}),e("input",{attrs:{type:"text"},on:{input:function(r){t.updateMessage(n,r),t.isValidValue(n)}}})])}),0)},at=[],it={name:"FormList",computed:{info:function(){return this.$store.state.formStore.info}},methods:{updateMessage:function(t,r){var e={index:t,value:r.target.value};this.$store.commit("formStore/updateMessage",e)},isValidValue:function(t){var r=this.$store.state.formStore.info,e=r[t].pattern,n=r[t].value,o=e.test(n),a={index:t,status:o};this.$store.commit("formStore/changeValidStatus",a)}}},st=it,ct=(e("a4c4"),Object(d["a"])(st,ot,at,!1,null,"63520c63",null)),ut=ct.exports,dt=function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("transition",{attrs:{name:"progress-bar"}},[e("div",{staticClass:"progress"},[e("div",{staticClass:"progress-bar",style:{width:t.progressbar+"%"}})])])},lt=[],pt={name:"FormProgressBar",computed:{progressbar:function(){return this.$store.getters["formStore/progressBar"]}}},ft=pt,mt=(e("0ee9"),Object(d["a"])(ft,dt,lt,!1,null,"452ff5ed",null)),vt=mt.exports,ht={name:"Form",components:{FormList:ut,FormProgressBar:vt},methods:{changeshowSubmitInfo:function(){this.$store.dispatch("formStore/asyncShowResults")}},computed:{showSubmitInfo:function(){return this.$store.state.formStore.showSubmitInfo},progressBar:function(){return this.$store.getters["formStore/progressBar"]},asyncDataLoading:function(){return this.$store.state.formStore.asyncDataLoading},isActiveSendButton:function(){return 100!==this.progressBar||this.asyncDataLoading}}},_t=ht,yt=(e("d8b8"),Object(d["a"])(_t,et,nt,!1,null,"08a67048",null)),bt=yt.exports,Pt={name:"Checkout",components:{Form:bt},computed:{cartProductList:function(){return this.$store.getters["cart/cartProductList"]},totalPrice:function(){return this.cartProductList.reduce(function(t,r){return t+r.price*r.quantity},0)}}},gt=Pt,St=(e("9f3d"),Object(d["a"])(gt,tt,rt,!1,null,"5243b638",null)),Lt=St.exports;n["a"].use(I["a"]);var kt=[{path:"",redirect:{name:"Product"}},{path:"/product",component:G,name:"Product"},{path:"/cart",component:V},{path:"/checkout",component:Lt},{path:"/error404",component:Y}],wt=new I["a"]({routes:kt,mode:"history"}),$t=e("28dd");n["a"].use($t["a"]),n["a"].http.options.root="https://jsonplaceholder.typicode.com",n["a"].config.productionTip=!1,new n["a"]({store:C,router:wt,render:function(t){return t(h)}}).$mount("#app")},"5b67":function(t,r,e){"use strict";var n=e("7ebd"),o=e.n(n);o.a},7725:function(t,r,e){"use strict";var n=e("a0f7"),o=e.n(n);o.a},"7ebd":function(t,r,e){},"9f3d":function(t,r,e){"use strict";var n=e("2850"),o=e.n(n);o.a},a0f7:function(t,r,e){},a4c4:function(t,r,e){"use strict";var n=e("43d3"),o=e.n(n);o.a},c125:function(t,r,e){},d4a4:function(t,r,e){},d8b8:function(t,r,e){"use strict";var n=e("f373"),o=e.n(n);o.a},df4f:function(t,r,e){},f373:function(t,r,e){},fbe2:function(t,r,e){"use strict";var n=e("df4f"),o=e.n(n);o.a}});
//# sourceMappingURL=app.507cd71c.js.map