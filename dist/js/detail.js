"use strict";var oBuy=document.getElementById("buy"),car_div=document.getElementById("car-div"),car_p=document.getElementById("car-p"),spinner_val=document.querySelector(".spinner-val"),decrease=document.querySelector(".decrease"),increase=document.querySelector(".increase");decrease.onclick=function(){spinner_val.value=parseInt(spinner_val.value)-1,spinner_val.value<0&&(spinner_val.value=0)},increase.onclick=function(){spinner_val.value=parseInt(spinner_val.value)+1},initCart();var oAddCart=document.querySelector(".addcart");function initCart(){var t=window.localStorage,e=t.ygsx_cart?t.ygsx_cart:"",n=convertJsonStrToJsonObj(e),i=0;for(var l in n)i+=n[l].num;for(var r in oBuy.textContent=i,console.log(i),n){var a=n[r],c='<ul data-good-id="'.concat(a.id,'">\n\t\t\t\t\t\t\t\t<li style="width:95px;float:left;text-align:center;height:50px;line-height:50px;"><img src="').concat(a.src,'"></li>\n\t\t\t\t\t\t\t\t<li style="width:115px;float:left;text-align:center;height:50px;line-height:50px;">').concat(a.name,'</li>\n\t\t\t\t\t\t\t\t<li style="width:95px;float:left;text-align:center;height:50px;line-height:50px;">').concat(a.price,'</li>\n\t\t\t\t\t\t\t\t<li style="width:95px;float:left;text-align:center;height:50px;line-height:50px;">').concat(a.num,"</li>\n\t\t\t\t\t\t\t</ul>");e?(car_p.style.display="none",car_div.innerHTML+=c):car_p.style.display="block"}}function convertJsonStrToJsonObj(t){return t?JSON.parse(t):{}}oBuy.onclick=function(){location.href="http://127.0.0.1:5500/product/src/html/ygsx-cart.html"};