(this["webpackJsonpreact_phone-catalog"]=this["webpackJsonpreact_phone-catalog"]||[]).push([[0],[,,,,,,,,,,,,,,,,,function(t){t.exports=JSON.parse('[{"title":"Mobile phones","image":"img/categories/phones.jpg","type":"phones","itemType":"phone","url":"/phones"},{"title":"Tablets","image":"img/categories/tablets.jpg","type":"tablets","itemType":"tablet","url":"/tablets"},{"title":"Accessories","image":"img/categories/accessories.jpg","type":"accessories","itemType":"accessory","url":"/accessories"}]')},,,,,,,,,,,function(t){t.exports=JSON.parse('[{"title":"Github","path":"https://github.com/NikaNika12"},{"title":"Contacts","path":"https://github.com/NikaNika12"},{"title":"Rights","path":"https://github.com/NikaNika12"}]')},function(t){t.exports=JSON.parse('[{"title":"Home","path":"/"},{"title":"Phones","path":"/phones"},{"title":"Tablets","path":"/tablets"},{"title":"Accessories","path":"/accessories"}]')},,,,,,function(t,e,c){},,,function(t,e,c){},function(t,e,c){},function(t,e,c){},,,function(t,e,c){},function(t,e,c){},function(t,e,c){},function(t,e,c){},function(t,e,c){},function(t,e,c){},function(t,e,c){},function(t,e,c){},function(t,e,c){},function(t,e,c){},function(t,e,c){},function(t,e,c){},function(t,e,c){},function(t,e,c){},function(t,e,c){},function(t,e,c){},function(t,e,c){},function(t,e,c){},function(t,e,c){},function(t,e,c){},function(t,e,c){},function(t,e,c){"use strict";c.r(e);var n=c(27),a=c.n(n),s=c(6),r=c(3),i=(c(35),c(0)),o=function(){return Object(i.jsx)(s.b,{to:"/",className:"logo",children:Object(i.jsx)("img",{src:"./img/Logo.svg",alt:"logo"})})},l=c(28),u=(c(38),function(){var t=Object(r.n)();return Object(i.jsx)("footer",{className:"footer",children:Object(i.jsxs)("div",{className:"footer__container",children:[Object(i.jsx)(o,{}),Object(i.jsx)("div",{className:"footer__nav",children:l.map((function(t){return Object(i.jsx)("a",{href:t.path,className:"footer__link",children:t.title},t.title)}))}),Object(i.jsxs)(s.b,{className:"button-top",to:"".concat(t.pathname),onClick:function(){window.scrollTo({top:0,left:0,behavior:"smooth"})},children:[Object(i.jsx)("p",{className:"button-top__text",children:"Back to top"}),Object(i.jsx)("span",{className:"button-top__icon"})]})]})})}),d=c(29),j=c(8),b=c.n(j),p=(c(39),function(t){var e=t.name,c=t.to;return Object(i.jsx)(s.c,{type:"button",to:{pathname:c},className:function(t){var e=t.isActive;return b()("nav__link",{"nav__link--active":e})},children:e})}),O=(c(40),function(){return Object(i.jsx)("div",{className:"navbar",children:d.map((function(t){return Object(i.jsx)(p,{to:t.path,name:t.title},t.title)}))})}),_=c(4),m=c(30),h=c(1),f=c.n(h);function x(t,e){var c=new URLSearchParams(t.toString());return Object.entries(e).forEach((function(t){var e=Object(_.a)(t,2),n=e[0],a=e[1];null===a?c.delete(n):Array.isArray(a)?(c.delete(n),a.forEach((function(t){c.append(n,t)}))):c.set(n,a)})),c.toString()}c(43);var v,g=function(){var t=Object(s.d)(),e=Object(_.a)(t,2),c=e[0],n=e[1],a=c.get("query")||"",o=Object(h.useState)(a),l=Object(_.a)(o,2),u=l[0],d=l[1],j=Object(r.n)().pathname.slice(1);Object(h.useMemo)((function(){d(a)}),[a]);var b=Object(m.debounce)((function(t){n(x(c,{query:t.target.value.trim()||null}))}),1e3),p=function(){d(""),n(x(c,{query:null}))};return Object(i.jsxs)("div",{className:"searchbar",children:[Object(i.jsx)("input",{className:"searchbar__input",type:"text",value:u,onChange:function(t){d(t.target.value),b(t)},placeholder:"Search in ".concat(j,"...")}),!u&&Object(i.jsx)("span",{className:"searchbar__icon searchbar__icon--search"}),u.length>0&&Object(i.jsx)("div",{"data-cy":"searchDelete",role:"button",tabIndex:0,onKeyDown:function(){return p()},onClick:function(){return p()},children:Object(i.jsx)("span",{className:"searchbar__icon searchbar__icon--close"})})]})},N=c(7),y=c(5),k=c.n(y);!function(t){t.GET_PRODUCTS="Unable to get the products",t.GET_PRODUCT_DETAILS="Unable to get the product's details"}(v||(v={}));var C="https://mate-academy.github.io/react_phone-catalog/api";function w(t){return new Promise((function(e){setTimeout(e,t)}))}function S(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",c=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,n={method:e};return c&&(n.body=JSON.stringify(c),n.headers={"Content-Type":"application/json; charset=UTF-8"}),w(300).then((function(){return fetch(C+t,n)})).then((function(t){if(!t.ok)throw new Error;return t.json()}))}var P=function(t){return S(t)},T=function(){return P("/products.json")},E=function(t){return P("/products/".concat(t,".json"))},I=function(t,e){var c=localStorage.getItem(t)||"[]",n=Object(h.useState)(c?JSON.parse(c):e),a=Object(_.a)(n,2);return[a[0],a[1]]},L=c(11),A=c(10),D=function(t,e,c){return function(n){var a,s=Object(A.a)(e),r=e.find((function(t){return t.id===n.id})),i=r?e.indexOf(r):-1,o=(null===r||void 0===r?void 0:r.quantity)!==n.quantity&&(null===n||void 0===n?void 0:n.quantity);if(o&&i>=0&&(s[i].quantity=n.quantity),r)a=s.filter((function(t){return!!o||t.id!==n.id}));else{var l="cart"===t?Object(L.a)(Object(L.a)({},n),{},{quantity:1}):Object(L.a)({},n);a=[].concat(Object(A.a)(e),[l])}c(a),localStorage.setItem(t,JSON.stringify(a))}},F=f.a.createContext({products:[],selectedProduct:JSON.parse("".concat(localStorage.getItem("selectedProduct"))),cart:[],favorite:[],isError:null,isLoading:!1,setProducts:function(){},setSelectedProduct:function(){},setCart:function(){},setFavorite:function(){},setIsError:function(){},setIsLoading:function(){},changeCart:function(){},changeFavorite:function(){}}),R=function(t){var e=t.children,c=JSON.parse("".concat(localStorage.getItem("selectedProduct"))),n=Object(h.useState)([]),a=Object(_.a)(n,2),s=a[0],r=a[1],o=Object(h.useState)(c),l=Object(_.a)(o,2),u=l[0],d=l[1],j=I("cart",[]),b=Object(_.a)(j,2),p=b[0],O=b[1],m=I("favorite",[]),f=Object(_.a)(m,2),x=f[0],g=f[1],y=Object(h.useState)(null),C=Object(_.a)(y,2),w=C[0],S=C[1],P=Object(h.useState)(!1),E=Object(_.a)(P,2),L=E[0],A=E[1],R=D("cart",p,O),q=D("favorite",x,g),U={products:s,selectedProduct:u,cart:p,favorite:x,isError:w,isLoading:L,setProducts:r,setSelectedProduct:d,setCart:O,setFavorite:g,setIsError:S,setIsLoading:A,changeCart:R,changeFavorite:q};return Object(h.useEffect)((function(){var t=function(){var t=Object(N.a)(k.a.mark((function t(){var e;return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,A(!0),t.next=4,T();case 4:e=t.sent,r(e),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),S(v.GET_PRODUCTS);case 11:return t.prev=11,A(!1),t.finish(11);case 14:case"end":return t.stop()}}),t,null,[[0,8,11,14]])})));return function(){return t.apply(this,arguments)}}();t()}),[]),Object(i.jsx)(F.Provider,{value:U,children:e})},q=(c(44),function(t){var e=t.type,c=Object(h.useContext)(F),n=c.cart,a=c.favorite,r="cart"===e?n.length:a.length;return Object(i.jsx)("div",{className:b()("top-item"),children:Object(i.jsxs)(s.b,{to:"/".concat(e),className:"top-item__link",children:["favorite"===e&&Object(i.jsx)("span",{className:"top-item__icon top-item__icon--favorite"}),"cart"===e&&Object(i.jsx)("span",{className:"top-item__icon top-item__icon--cart"}),r>0&&Object(i.jsx)("span",{className:"top-item-count",children:r})]})})}),U=c(17),B=(c(45),function(){var t=Object(r.n)(),e=Object(r.r)().productId,c=void 0===e?"":e,n=t.pathname.includes("cart"),a=t.pathname.includes("favorite"),s=U.map((function(t){return t.type})).some((function(e){return t.pathname.includes(e)}))&&!c;return Object(i.jsx)("div",{className:"header",children:Object(i.jsxs)("div",{className:"header__container",children:[Object(i.jsxs)("div",{className:"header__left",children:[Object(i.jsx)("div",{className:"header__logo",children:Object(i.jsx)(o,{})}),!n&&Object(i.jsx)(O,{})]}),Object(i.jsxs)("div",{className:"header__right",children:[(a||s)&&Object(i.jsx)(g,{}),!n&&Object(i.jsx)(q,{type:"favorite"}),Object(i.jsx)(q,{type:"cart"})]})]})})}),G=function(){return Object(i.jsxs)("div",{className:"App",children:[Object(i.jsx)(B,{}),Object(i.jsx)("main",{children:Object(i.jsx)("div",{className:"container",children:Object(i.jsx)(r.b,{})})}),Object(i.jsx)(u,{})]})},M=(c(46),function(){var t=Object(r.p)();return Object(i.jsx)("button",{"data-cy":"backButton",className:"backButton",type:"button",onClick:function(){t(-1)},children:Object(i.jsx)("span",{className:"backButton__icon",children:"back"})})}),J=(c(47),function(){return Object(i.jsxs)("div",{className:"not-found",children:[Object(i.jsx)(M,{}),Object(i.jsx)("h1",{className:"not-found__title",children:"Page not found!"})]})}),$=(c(48),["img/Banner1.jpg","img/Banner2.jpg","img/Banner3.jpg"]),z=function(){var t=Object(h.useState)(0),e=Object(_.a)(t,2),c=e[0],n=e[1];return Object(h.useEffect)((function(){var t=setInterval((function(){return n((function(t){return t+1}))}),5e3);return function(){return clearInterval(t)}}),[c]),Object(i.jsxs)("div",{className:"banner",children:[Object(i.jsxs)("div",{className:"banner__container",children:[Object(i.jsx)("button",{type:"button",onClick:function(){return n((function(t){return t-1}))},className:"banner__button banner__button--prev",children:Object(i.jsx)("img",{src:"./img/ArrowLeft.svg",alt:"arrowLeft"})}),Object(i.jsx)("div",{className:"banner__images",children:$.map((function(t,e){return c>$.length-1&&n(0),c<0&&n($.length-1),Object(i.jsx)("img",{src:t,alt:t,className:b()("banner__image",{"banner__image--active":e===c})},t)}))}),Object(i.jsx)("button",{type:"button",onClick:function(){return n((function(t){return t+1}))},className:"banner__button banner__button--next",children:Object(i.jsx)("img",{src:"./img/ArrowRight.svg",alt:"arrowRigth"})})]}),Object(i.jsx)("div",{className:"banner__pagination rectangle",children:$.map((function(t,e){return Object(i.jsx)("button",{"aria-label":"banner__pagination",type:"button",className:b()("rectangle__button",{"rectangle__button--active":e===c}),onClick:function(){return n(e)}},"rectangle-".concat(e*$.length))}))})]})},K=(c(49),function(t){var e=t.product,c=Object(h.useContext)(F),n=c.products,a=c.setSelectedProduct,r=c.setIsError,o=c.setIsLoading,l=c.cart,u=c.changeCart,d=c.favorite,j=c.changeFavorite,p=e.id,O=e.type,m=e.imageUrl,f=e.name,x=e.price,g=e.discount,y=e.screen,C=e.capacity,w=e.ram,S=l.length>0&&l.find((function(t){return t.id===p})),P=d.length>0&&d.find((function(t){return t.id===p})),T=n.find((function(t){return t.id===p})),I=x-x/100*g,L=function(){var t=Object(N.a)(k.a.mark((function t(e){var c;return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r(null),o(!0),t.prev=2,t.next=5,E(e);case 5:c=t.sent,a(c),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(2),r(v.GET_PRODUCT_DETAILS);case 12:return t.prev=12,o(!1),t.finish(12);case 15:case"end":return t.stop()}}),t,null,[[2,9,12,15]])})));return function(e){return t.apply(this,arguments)}}(),A={screen:y,capacity:C,ram:w},D=Object.entries(A);return Object(i.jsx)("div",{className:"product-card",children:Object(i.jsxs)("div",{className:"product-card__container","data-cy":"cardsContainer",children:[Object(i.jsxs)(s.b,{to:"/".concat(e.type,"s/").concat(e.id),className:"product-card__link",onClick:function(){return T&&L(T.id)},children:[Object(i.jsx)("img",{src:"".concat(m),alt:"".concat(O),className:"product-card__image"}),Object(i.jsx)("p",{className:"product-card__title",children:f})]}),Object(i.jsxs)("div",{className:"product-card__prices",children:[Object(i.jsx)("span",{className:"product-card__price",children:"$".concat(x)}),g>0&&Object(i.jsx)("span",{className:"product-card__discount",children:"$".concat(I)})]}),Object(i.jsxs)("div",{className:"product-card__features",children:[Object(i.jsx)("ul",{className:"product-card__list",children:D.map((function(t){var e=Object(_.a)(t,1)[0];return Object(i.jsx)("li",{className:"product-card__key",children:e},e)}))}),Object(i.jsx)("ul",{className:"product-card__list",children:D.map((function(t){var e=Object(_.a)(t,2),c=e[0],n=e[1];return Object(i.jsx)("li",{className:"product-card__value",children:n},c)}))})]}),Object(i.jsxs)("div",{className:"product-card__buttons",children:[Object(i.jsx)("button",{type:"button",className:b()("product-card__buttons__to-cart",{"product-card__buttons__to-cart--selected":S}),onClick:function(){u(e)},children:"".concat(S?"Added":"Add"," to cart")}),Object(i.jsx)("button",{"data-cy":"addToFavorite",type:"button",className:b()("product-card__buttons__to-favs"),onClick:function(){j(e)},children:P?Object(i.jsx)("span",{className:"product-card__buttons__to-favs--icon--selected"}):Object(i.jsx)("span",{className:"product-card__buttons__to-favs--icon"})})]})]})})}),H=(c(50),Object(h.memo)((function(t){var e=t.title,c=t.products,n=Object(h.useState)(0),a=Object(_.a)(n,2),s=a[0],r=a[1];return Object(i.jsxs)("div",{className:"products-slider",children:[Object(i.jsxs)("div",{className:"products-slider__container",children:[Object(i.jsx)("h2",{className:"products-slider__header",children:e}),Object(i.jsxs)("div",{className:"products-slider__buttons",children:[Object(i.jsx)("button",{"aria-label":"products-slider__buttons",type:"button",className:b()("products-slider__button",{"products-slider__button--disabled":s<=0}),onClick:function(){return r((function(t){return t-1}))},children:Object(i.jsx)("span",{className:"products-slider__icon products-slider__icon--left"})}),Object(i.jsx)("button",{"aria-label":"products-slider__buttons",type:"button",className:b()("products-slider__button",{"products-slider__button--disabled":s+4>c.length-1}),onClick:function(){return r((function(t){return t+1}))},children:Object(i.jsx)("span",{className:"products-slider__icon products-slider__icon--right"})})]})]}),Object(i.jsx)("div",{className:"products-slider__products",children:c.slice(s,s+4).map((function(t){return Object(i.jsx)(K,{product:t},t.id)}))})]})}))),V=(c(51),function(){var t=Object(h.useContext)(F).products,e=Object(h.useMemo)((function(){return t.filter((function(t){return"phone"===t.type}))}),[t]),c=Object(h.useMemo)((function(){return t.filter((function(t){return"tablet"===t.type}))}),[t]),n=Object(h.useMemo)((function(){return t.filter((function(t){return"accessory"===t.type}))}),[t]),a=function(t){switch(t){case"phones":return e.length;case"tablets":return c.length;case"accessory":return n.length;default:return 0}};return Object(i.jsxs)("div",{className:"categories",children:[Object(i.jsx)("h2",{className:"categories__title",children:"Shop by category"}),Object(i.jsx)("div",{className:"categories__container",children:U.map((function(t){return Object(i.jsx)("div",{className:"categories__item-container",children:Object(i.jsxs)(s.b,{to:t.url,className:"categories__item","data-cy":"categoryLinksContainer",children:[Object(i.jsx)("img",{className:"categories__image",src:t.image,alt:t.title}),Object(i.jsx)("h3",{className:"categories__name",children:t.title}),Object(i.jsx)("h4",{className:"categories__count",children:"".concat(a(t.type)," models")})]},t.type)},t.type)}))})]})}),Y=function(){var t,e=Object(h.useContext)(F).products;return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(z,{}),Object(i.jsx)(H,{title:"Hot prices",products:(t=e,t.filter((function(t){return t.discount>0})).sort((function(t,e){return e.price*((100-e.discount)/100)-t.price*((100-t.discount)/100)})))}),Object(i.jsx)(V,{}),Object(i.jsx)(H,{title:"Brand new",products:function(t){return t.filter((function(t){return 0===t.discount})).sort((function(t,e){return e.price-t.price}))}(e)})]})},W=(c(52),function(){return Object(i.jsx)("div",{className:"loader",children:Object(i.jsx)("div",{className:"loader__content"})})}),Q=(c(53),function(){var t=Object(h.useContext)(F),e=t.selectedProduct,c=t.setSelectedProduct,n=Object(r.n)(),a=Object(r.r)().productId,o=void 0===a?"":a,l=Object(h.useState)(!1),u=Object(_.a)(l,2),d=u[0],j=u[1],b=n.pathname.split("/").slice(1)[0],p=b.charAt(0).toUpperCase()+b.slice(1),O=Object(h.useMemo)((function(){return!e&&o&&E(o).then((function(t){c(t)})),null===e||void 0===e?void 0:e.name}),[e,o]);return Object(h.useEffect)((function(){o.length>0?j(!0):j(!1)}),[]),Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)("div",{className:"productsNav",children:[Object(i.jsx)(s.b,{to:"/",className:"productsNav__home"}),d?Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(s.b,{to:"/".concat(b),className:"productsNav__link",children:p}),Object(i.jsx)("p",{className:"productsNav__link productsNav__link--title",children:O})]}):Object(i.jsx)(s.b,{to:"/".concat(b),className:"productsNav__link productsNav__link--disabled",children:p})]})})}),X=(c(54),function(){var t=Object(r.p)();return Object(i.jsxs)("div",{className:"noresults",children:[Object(i.jsx)("div",{className:"noresults__title",children:"Products can not be found"}),Object(i.jsx)("button",{className:"noresults__button",type:"button",onClick:function(){return t("/")},children:"Go Home"})]})}),Z=c(9),tt=(c(55),function(t){var e=t.dropdownList,c=t.defaultValue,n=t.label,a=t.searchParamsKey,r=Object(h.useState)(!1),o=Object(_.a)(r,2),l=o[0],u=o[1],d=Object(s.d)(),j=Object(_.a)(d,1)[0],p=Object(h.useState)(c),O=Object(_.a)(p,2),m=O[0],f=O[1],v=Object(h.useRef)(null);return document.addEventListener("click",(function(t){t.target!==v.current&&u(!1)})),document.addEventListener("keyup",(function(t){"Tab"!==t.key&&"Escape"!==t.key||u(!1)})),Object(i.jsxs)("div",{className:"dropdown",children:[Object(i.jsx)("p",{className:"dropdown__label",children:n}),Object(i.jsxs)("button",{ref:v,type:"button",className:b()("dropdown__select",{"dropdown__select--active":l}),onClick:function(){return u(!l)},children:[m,Object(i.jsx)("img",{src:"./img/ArrowDown.svg",alt:"ArrowDown",className:b()("dropdown__arrow",{"dropdown__arrow--open":l})})]}),l&&Object(i.jsx)("ul",{className:"dropdown__options",children:e.map((function(t){return Object(i.jsx)("li",{"aria-hidden":"true",className:"dropdown__option",onClick:function(){f(t),u(!1)},children:Object(i.jsx)(s.b,{to:{search:(e=t,x(j,"perPage"===a?Object(Z.a)({page:"1"},a,e):Object(Z.a)({},a,e)))},children:t})},t);var e}))})]})}),et=(c(56),function(t){var e=t.productsAmount,c=t.perPage,n=t.currentPage,a=Object(s.d)(""),r=Object(_.a)(a,1)[0],o=function(){return c?Math.ceil(e/c):0},l=o()>1?Array.from({length:o()},(function(t,e){return e+1})):[1];return Object(i.jsxs)("div",{className:"pagination","data-cy":"pagination",children:[Object(i.jsx)(s.b,{"data-cy":"paginationLeft",to:{search:x(r,{page:(n-1).toString()})},className:b()("pagination__item",{"pagination__item--disabled":n===l[0]}),children:Object(i.jsx)("img",{src:"./img/ArrowLeft.svg",alt:"arrowLeft"})}),Object(i.jsx)("ul",{className:"pagination__list",children:l.map((function(t){var e=t.toString();return Object(i.jsx)("li",{className:"pagination__item",children:Object(i.jsx)(s.b,{to:{search:x(r,{page:e})},className:b()("pagination__link",{"pagination__link--active":n===t}),children:e})},e)}))}),Object(i.jsx)(s.b,{"data-cy":"paginationRight",to:{search:x(r,{page:(n+1).toString()})},className:b()("pagination__item",{"pagination__item--disabled":n===l[l.length-1]}),children:Object(i.jsx)("img",{src:"./img/ArrowRight.svg",alt:"arrowRigth"})})]})}),ct=(c(57),["newest","alphabetically","price","all"]),nt=["4","8","16","all"],at=function(t){var e=t.title,c=t.products,n=Object(s.d)(),a=Object(_.a)(n,1)[0],r=c.length,o=Number(a.get("page"))||1,l=a.get("sort")||"",u=Number(a.get("perPage"))||r,d=a.get("query")||"",j=Math.ceil(r/+u),b=o*u-u,p=o*u<=r?o*u:r,O=function(t){var e=Object(A.a)(t);if("newest"===l&&(e=e.sort((function(t,e){return t.age-e.age}))),"alphabetically"===l&&(e=e.sort((function(t,e){return t.name.localeCompare(e.name)}))),"price"===l&&(e=e.sort((function(t,e){return t.price-e.price}))),d){e=e.filter((function(t){return(e=t.name)?e.toLowerCase().includes(d.toLowerCase()):null;var e}))}return e||null}(c).slice(b,p);return Object(i.jsx)("div",{className:"product-list",children:Object(i.jsxs)("div",{className:"product-list__container",children:[Object(i.jsx)("h1",{className:"product-list__title",children:e}),Object(i.jsx)("p",{className:"product-list__count",children:"".concat(r," models")}),0===r?Object(i.jsx)(X,{}):Object(i.jsxs)(i.Fragment,{children:[Object(i.jsxs)("div",{className:"product-list__dropdowns",children:[Object(i.jsx)(tt,{dropdownList:ct,defaultValue:"Choose an option",label:"Sort by",searchParamsKey:"sort"}),Object(i.jsx)(tt,{dropdownList:nt,defaultValue:"All",label:"Items on page",searchParamsKey:"perPage"})]}),Object(i.jsx)("div",{className:"product-list__products",children:O.map((function(t){return Object(i.jsx)(K,{product:t},t.id)}))})]}),Object(i.jsx)("div",{className:"product-list__pagination",children:u!==r&&j>1&&Object(i.jsx)(et,{productsAmount:r,perPage:u,currentPage:o})})]})})},st=function(){var t=Object(h.useState)([]),e=Object(_.a)(t,2),c=e[0],n=e[1],a=Object(h.useContext)(F),s=a.isLoading,r=a.setIsLoading,o=a.setIsError,l=function(t,e){var c=t.filter((function(t){return t.type===e}));n(c)};return Object(h.useEffect)((function(){var t=function(){var t=Object(N.a)(k.a.mark((function t(){var e;return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r(!0),t.next=4,T();case 4:e=t.sent,l(e,"phone"),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),o(v.GET_PRODUCTS);case 11:return t.prev=11,r(!1),t.finish(11);case 14:case"end":return t.stop()}}),t,null,[[0,8,11,14]])})));return function(){return t.apply(this,arguments)}}();t()}),[]),Object(i.jsx)("div",{children:s?Object(i.jsx)(W,{}):Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(Q,{}),Object(i.jsx)(at,{title:"Mobile phones",products:c})]})})},rt=(c(58),function(t){var e=t.product,c=t.size,n=Object(h.useContext)(F),a=n.changeCart,s=n.cart,r=s.length>0&&s.find((function(t){return t.id===(null===e||void 0===e?void 0:e.id)}));return Object(i.jsx)("button",{type:"button",className:b()("button","button--".concat(c),{"button--selected":r}),onClick:function(){return a(e)},children:"".concat(r?"Added to cart":"Add to cart")})}),it=(c(59),function(t){var e=t.product,c=t.size,n=Object(h.useContext)(F),a=n.changeFavorite,s=n.favorite,r=s.length>0&&s.find((function(t){return t.id===(null===e||void 0===e?void 0:e.id)}));return Object(i.jsx)("button",{"aria-label":"like",type:"button",className:b()("button-like","button-like--icon","button-like--".concat(c),{"button-like--icon--selected":r}),onClick:function(){return a(e)}})}),ot=(c(60),["pink","grey","black","white"]),lt=[16,256,512],ut=function(){var t,e,c,n=Object(h.useContext)(F),a=n.isLoading,s=n.products,o=n.setIsError,l=n.setIsLoading,u=n.selectedProduct,d=n.setSelectedProduct,j=Object(r.r)().productId,p=void 0===j?"":j,O=Object(r.n)(),m=Object(h.useState)(null===u||void 0===u?void 0:u.images[0]),f=Object(_.a)(m,2),x=f[0],g=f[1],y=Object(h.useState)(ot[0]),C=Object(_.a)(y,2),w=C[0],S=C[1],P=Object(h.useState)(lt[0]),T=Object(_.a)(P,2),I=T[0],L=T[1],A=s.find((function(t){return t.id===(null===u||void 0===u?void 0:u.id)})),D=A?function(t){return t.price-t.discount*t.price/100}(A):0,R={keys:["screen","resolution","processor","RAM","built in memory","android","bluetooth","battery"],values:["".concat(null===u||void 0===u?void 0:u.display.screenSize),"".concat(null===u||void 0===u?void 0:u.display.screenResolution),"".concat(null===u||void 0===u?void 0:u.hardware.cpu),"".concat(null===u||void 0===u?void 0:u.storage.ram),"".concat(null===u||void 0===u?void 0:u.storage.flash),"".concat(null===u||void 0===u?void 0:u.android.os),"".concat(null===u||void 0===u?void 0:u.connectivity.bluetooth),"".concat(null===u||void 0===u?void 0:u.battery.standbyTime)]},q=O.pathname.split("/").slice(1)[0],B=Object(h.useMemo)((function(){return U.filter((function(t){return t.type===q}))[0].itemType}),[O]),G=function(){var t=Object(N.a)(k.a.mark((function t(e){var c;return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o(null),t.prev=1,t.next=4,E(e);case 4:c=t.sent,d(c),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),o(v.GET_PRODUCT_DETAILS);case 11:return t.prev=11,l(!1),t.finish(11);case 14:case"end":return t.stop()}}),t,null,[[1,8,11,14]])})));return function(e){return t.apply(this,arguments)}}();return Object(h.useEffect)((function(){!u&&p.length>0&&G(p)}),[p]),Object(i.jsx)("div",{children:a?Object(i.jsx)(W,{}):Object(i.jsxs)("div",{className:"product-details",children:[Object(i.jsx)(Q,{"data-cy":"breadCrumbs"}),Object(i.jsx)(M,{"data-cy":"backButton"}),Object(i.jsx)("div",{className:"product-details__title",children:null===u||void 0===u?void 0:u.name}),Object(i.jsxs)("div",{className:"product-details__content",children:[Object(i.jsxs)("div",{className:"product-details__top",children:[Object(i.jsxs)("div",{className:"product-details__slider slider",children:[Object(i.jsx)("div",{className:"slider__col",children:null===u||void 0===u?void 0:u.images.map((function(t){return Object(i.jsx)("button",{"aria-label":"image",type:"button",className:b()("slider__button",{"slider__button--active":x===t}),style:{backgroundImage:"url(".concat(t,")")},onClick:function(){return g(t)}},t)}))}),Object(i.jsx)("div",{className:"slider__main",style:{backgroundImage:"url(".concat(x,")")}})]}),Object(i.jsxs)("div",{className:"product-details__action",children:[Object(i.jsxs)("div",{className:"product-details__select",children:[Object(i.jsx)("p",{className:"product-details__small-text",children:"Available colors"}),Object(i.jsx)("ul",{className:"product-details__select-buttons colors",children:ot.map((function(t,e){return Object(i.jsx)("div",{role:"button",className:b()("colors__item-circle",{"colors__item-circle--is-active":w===t}),tabIndex:e,onClick:function(){return S(t)},onKeyDown:function(){return S(t)},children:Object(i.jsx)("li",{className:b()("colors__item","colors__item--".concat(t))})},t)}))})]}),Object(i.jsxs)("div",{className:"product-details__select",children:[Object(i.jsx)("p",{className:"product-details__small-text",children:"Select capacity"}),Object(i.jsx)("div",{className:"product-details__select-buttons capacity",children:lt.map((function(t){return Object(i.jsx)("button",{type:"button",className:b()("capacity__item",{"capacity__item--is-active":I===t}),onClick:function(){return L(t)},children:"".concat(t," GB")},t)}))})]}),Object(i.jsxs)("div",{className:"product-details__prices",children:[Object(i.jsx)("span",{className:"product-card__price",children:"$".concat(null===A||void 0===A?void 0:A.price)}),0!==(null===A||void 0===A?void 0:A.discount)&&Object(i.jsx)("span",{className:"product-card__discount",children:"$".concat(D)})]}),A&&Object(i.jsxs)("div",{className:"product-details__actions-button",children:[Object(i.jsx)(rt,{product:A,size:"big"}),Object(i.jsx)(it,{product:A,size:"big"})]}),Object(i.jsxs)("div",{className:"product-details__features",children:[Object(i.jsx)("ul",{className:"product-details__list",children:R.keys.slice(0,4).map((function(t){return Object(i.jsx)("li",{className:"product-details__key",children:t},t)}))}),Object(i.jsx)("ul",{className:"product-details__list",children:R.values.slice(0,4).map((function(t){return Object(i.jsx)("li",{className:"product-details__value",children:t},t)}))})]})]})]}),Object(i.jsxs)("div",{className:"product-details__botom",children:[u&&Object(i.jsxs)("div",{className:"product-details__description","data-cy":"productDescription",children:[Object(i.jsx)("h2",{className:"product-details__subtitle",children:"About"}),Object(i.jsx)("div",{className:"product-details__text",children:u.description})]}),Object(i.jsxs)("div",{className:"product-details__tech-specs",children:[Object(i.jsx)("h2",{className:"product-details__subtitle",children:"Tech specs"}),Object(i.jsxs)("div",{className:"product-details__features",children:[Object(i.jsx)("ul",{className:"product-details__list",children:R.keys.map((function(t){return Object(i.jsx)("li",{className:"product-details__key",children:t},t)}))}),Object(i.jsx)("ul",{className:"product-details__list",children:R.values.map((function(t){return Object(i.jsx)("li",{className:"product-details__value",children:t},t)}))})]})]})]})]}),Object(i.jsx)(H,{title:"You may also like",products:(t=s,e=B,c=p,t.filter((function(t){return t.type===e&&c!==t.id})).sort((function(t,e){return e.price-t.price})))})]})})},dt=function(){var t=Object(h.useState)([]),e=Object(_.a)(t,2),c=e[0],n=e[1],a=Object(h.useContext)(F),s=a.isLoading,r=a.setIsLoading,o=a.setIsError,l=function(t,e){var c=t.filter((function(t){return t.type===e}));n(c)};return Object(h.useEffect)((function(){var t=function(){var t=Object(N.a)(k.a.mark((function t(){var e;return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r(!0),t.next=4,T();case 4:e=t.sent,l(e,"tablet"),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),o(v.GET_PRODUCTS);case 11:return t.prev=11,r(!1),t.finish(11);case 14:case"end":return t.stop()}}),t,null,[[0,8,11,14]])})));return function(){return t.apply(this,arguments)}}();t()}),[]),Object(i.jsx)("div",{children:s?Object(i.jsx)(W,{}):Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(Q,{}),Object(i.jsx)(at,{title:"Tablets",products:c})]})})},jt=function(){var t=Object(h.useState)([]),e=Object(_.a)(t,2),c=e[0],n=e[1],a=Object(h.useContext)(F),s=a.isLoading,r=a.setIsLoading,o=a.setIsError,l=function(t,e){var c=t.filter((function(t){return t.type===e}));n(c)};return Object(h.useEffect)((function(){var t=function(){var t=Object(N.a)(k.a.mark((function t(){var e;return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r(!0),t.next=4,T();case 4:e=t.sent,l(e,"accessory"),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),o(v.GET_PRODUCTS);case 11:return t.prev=11,r(!1),t.finish(11);case 14:case"end":return t.stop()}}),t,null,[[0,8,11,14]])})));return function(){return t.apply(this,arguments)}}();t()}),[]),Object(i.jsx)("div",{children:s?Object(i.jsx)(W,{}):Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(Q,{}),Object(i.jsx)(at,{title:"Accessories",products:c})]})})},bt=(c(61),function(){var t=Object(h.useContext)(F).favorite,e=t.length;return Object(i.jsxs)("div",{className:"favourites",children:[Object(i.jsx)("div",{className:"favourites__top",children:Object(i.jsx)(Q,{})}),Object(i.jsx)("h1",{className:"favourites__title title",children:"Favourites"}),Object(i.jsx)("p",{className:"favourites__count",children:"".concat(e," items")}),0===e?Object(i.jsx)("h2",{className:"favourites__empty-title",children:"There no favorite products found"}):Object(i.jsx)("div",{className:"favourites__list",children:t.map((function(t){return Object(i.jsx)(K,{product:t},t.id)}))})]})}),pt=(c(62),c(63),function(t){var e=t.imageUrl,c=t.name,n=t.price,a=t.quantity,s=t.discount,r=t.ram,o=n*((100-s)/100),l=Object(h.useContext)(F).changeCart;return Object(i.jsxs)("li",{className:"cart__item",children:[Object(i.jsx)("button",{"data-cy":"cartDeleteButton",className:"cart__item__icon",type:"button",onClick:function(){return l(t)},children:Object(i.jsx)("span",{className:"cart__item__icon--close"})}),Object(i.jsx)("div",{className:"cart__image--container",children:Object(i.jsx)("img",{src:e,alt:"product",className:"cart__image"})}),Object(i.jsxs)("div",{className:"cart__item-title",children:[c," ",r]}),Object(i.jsxs)("div",{className:"cart__buttons",children:[Object(i.jsx)("button",{className:"cart__buttons__icon",type:"button",onClick:function(){l(Object(L.a)(Object(L.a)({},t),{},{quantity:a&&a-1}))},disabled:!a||a<=1,children:Object(i.jsx)("span",{className:"cart__buttons__icon--substract"})}),Object(i.jsx)("div",{className:"cart__quantity",children:a}),Object(i.jsx)("button",{className:"cart__buttons__icon",type:"button",onClick:function(){l(Object(L.a)(Object(L.a)({},t),{},{quantity:a&&a+1}))},children:Object(i.jsx)("span",{className:"cart__buttons__icon--add"})})]}),Object(i.jsx)("div",{className:"cart__price",children:"$".concat(o*(a||1))})]})}),Ot=function(){var t=Object(h.useContext)(F),e=t.isLoading,c=t.cart,n=Object(h.useState)(!1),a=Object(_.a)(n,2),s=a[0],r=a[1],o=0===c.length?0:c.map((function(t){return t.price*((100-t.discount)/100)*(t.quantity||1)})).reduce((function(t,e){return t+e}),0),l=0;return c.forEach((function(t){var e=t.quantity||1;l+=e})),Object(i.jsx)(i.Fragment,{children:e?Object(i.jsx)(W,{}):Object(i.jsxs)("div",{className:"cart",children:[Object(i.jsx)("div",{className:"cart__navigate",children:Object(i.jsx)(M,{})}),Object(i.jsx)("h2",{className:"cart__title",children:"Cart"}),0===c.length?Object(i.jsx)("h2",{className:"cart__empty",children:"Your cart is empty"}):Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)("div",{className:"cart__content",children:[Object(i.jsx)("div",{className:"cart__products",children:c.map((function(t){return Object(i.jsx)(pt,Object(L.a)({},t),t.id)}))}),Object(i.jsxs)("div",{className:"cart__total-box",children:[Object(i.jsxs)("div",{className:"cart__info",children:[Object(i.jsx)("h2",{className:"cart__total-price",children:"$".concat(o)}),Object(i.jsx)("p",{className:"cart__total-count",children:"Total for ".concat(l," items")})]}),Object(i.jsx)("button",{type:"button",className:"cart__button button",onClick:function(){return r(!0)},children:"Checkout"}),s&&Object(i.jsx)("div",{className:"cart__modal modal",children:Object(i.jsxs)("div",{className:"modal__content",children:[Object(i.jsxs)("p",{className:"modal__title",children:[Object(i.jsx)("span",{children:"We are sorry,"}),Object(i.jsx)("span",{children:"but this feature is not implemented yet"})]}),Object(i.jsx)("button",{type:"button",className:"modal__button button",onClick:function(){r(!1)},children:"Close"})]})})]})]})})]})})};a.a.render(Object(i.jsx)(s.a,{children:Object(i.jsx)(R,{children:Object(i.jsx)(r.e,{children:Object(i.jsxs)(r.c,{path:"/",element:Object(i.jsx)(G,{}),children:[Object(i.jsx)(r.c,{path:"*",element:Object(i.jsx)(J,{})}),Object(i.jsx)(r.c,{path:"/",element:Object(i.jsx)(Y,{})}),Object(i.jsx)(r.c,{path:"home",element:Object(i.jsx)(r.a,{to:"/",replace:!0})}),Object(i.jsxs)(r.c,{path:"phones",children:[Object(i.jsx)(r.c,{index:!0,element:Object(i.jsx)(st,{})}),Object(i.jsx)(r.c,{path:":productId",element:Object(i.jsx)(ut,{})})]}),Object(i.jsxs)(r.c,{path:"tablets",children:[Object(i.jsx)(r.c,{index:!0,element:Object(i.jsx)(dt,{})}),Object(i.jsx)(r.c,{path:":productId",element:Object(i.jsx)(ut,{})})]}),Object(i.jsxs)(r.c,{path:"accessories",children:[Object(i.jsx)(r.c,{index:!0,element:Object(i.jsx)(jt,{})}),Object(i.jsx)(r.c,{path:":productId",element:Object(i.jsx)(ut,{})})]}),Object(i.jsx)(r.c,{path:"favorite",element:Object(i.jsx)(bt,{})}),Object(i.jsx)(r.c,{path:"cart",element:Object(i.jsx)(Ot,{})})]})})})}),document.getElementById("root"))}],[[64,1,2]]]);
//# sourceMappingURL=main.a6995d91.chunk.js.map