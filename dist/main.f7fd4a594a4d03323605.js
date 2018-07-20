webpackJsonp([0],[function(e,n,t){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}t(1);var i=t(3),a=r(i),u=(0,a["default"])(1e3).format("$0,0.00");console.log("I would "+u+" for this awesome course!")},function(e,n){},,function(e,n,t){var r,i;/*!
	 * numeral.js
	 * version : 1.5.3
	 * author : Adam Draper
	 * license : MIT
	 * http://adamwdraper.github.com/Numeral-js/
	 */
(function(){function t(e){this._value=e}function a(e,n,t,r){var i,a,u=Math.pow(10,n);return a=(t(e*u)/u).toFixed(n),r&&(i=new RegExp("0{1,"+r+"}$"),a=a.replace(i,"")),a}function u(e,n,t){var r;return r=n.indexOf("$")>-1?l(e,n,t):n.indexOf("%")>-1?c(e,n,t):n.indexOf(":")>-1?f(e,n):h(e._value,n,t)}function o(e,n){var t,r,i,a,u,o=n,l=["KB","MB","GB","TB","PB","EB","ZB","YB"],c=!1;if(n.indexOf(":")>-1)e._value=s(n);else if(n===g)e._value=0;else{for("."!==y[w].delimiters.decimal&&(n=n.replace(/\./g,"").replace(y[w].delimiters.decimal,".")),t=new RegExp("[^a-zA-Z]"+y[w].abbreviations.thousand+"(?:\\)|(\\"+y[w].currency.symbol+")?(?:\\))?)?$"),r=new RegExp("[^a-zA-Z]"+y[w].abbreviations.million+"(?:\\)|(\\"+y[w].currency.symbol+")?(?:\\))?)?$"),i=new RegExp("[^a-zA-Z]"+y[w].abbreviations.billion+"(?:\\)|(\\"+y[w].currency.symbol+")?(?:\\))?)?$"),a=new RegExp("[^a-zA-Z]"+y[w].abbreviations.trillion+"(?:\\)|(\\"+y[w].currency.symbol+")?(?:\\))?)?$"),u=0;u<=l.length&&!(c=n.indexOf(l[u])>-1&&Math.pow(1024,u+1));u++);e._value=(c?c:1)*(o.match(t)?Math.pow(10,3):1)*(o.match(r)?Math.pow(10,6):1)*(o.match(i)?Math.pow(10,9):1)*(o.match(a)?Math.pow(10,12):1)*(n.indexOf("%")>-1?.01:1)*((n.split("-").length+Math.min(n.split("(").length-1,n.split(")").length-1))%2?1:-1)*Number(n.replace(/[^0-9\.]+/g,"")),e._value=c?Math.ceil(e._value):e._value}return e._value}function l(e,n,t){var r,i,a=n.indexOf("$"),u=n.indexOf("("),o=n.indexOf("-"),l="";return n.indexOf(" $")>-1?(l=" ",n=n.replace(" $","")):n.indexOf("$ ")>-1?(l=" ",n=n.replace("$ ","")):n=n.replace("$",""),i=h(e._value,n,t),a<=1?i.indexOf("(")>-1||i.indexOf("-")>-1?(i=i.split(""),r=1,(a<u||a<o)&&(r=0),i.splice(r,0,y[w].currency.symbol+l),i=i.join("")):i=y[w].currency.symbol+l+i:i.indexOf(")")>-1?(i=i.split(""),i.splice(-1,0,l+y[w].currency.symbol),i=i.join("")):i=i+l+y[w].currency.symbol,i}function c(e,n,t){var r,i="",a=100*e._value;return n.indexOf(" %")>-1?(i=" ",n=n.replace(" %","")):n=n.replace("%",""),r=h(a,n,t),r.indexOf(")")>-1?(r=r.split(""),r.splice(-1,0,i+"%"),r=r.join("")):r=r+i+"%",r}function f(e){var n=Math.floor(e._value/60/60),t=Math.floor((e._value-60*n*60)/60),r=Math.round(e._value-60*n*60-60*t);return n+":"+(t<10?"0"+t:t)+":"+(r<10?"0"+r:r)}function s(e){var n=e.split(":"),t=0;return 3===n.length?(t+=60*Number(n[0])*60,t+=60*Number(n[1]),t+=Number(n[2])):2===n.length&&(t+=60*Number(n[0]),t+=Number(n[1])),Number(t)}function h(e,n,t){var r,i,u,o,l,c,f=!1,s=!1,h=!1,p="",d=!1,v=!1,b=!1,m=!1,x=!1,O="",M="",_=Math.abs(e),B=["B","KB","MB","GB","TB","PB","EB","ZB","YB"],$="",N=!1;if(0===e&&null!==g)return g;if(n.indexOf("(")>-1?(f=!0,n=n.slice(1,-1)):n.indexOf("+")>-1&&(s=!0,n=n.replace(/\+/g,"")),n.indexOf("a")>-1&&(d=n.indexOf("aK")>=0,v=n.indexOf("aM")>=0,b=n.indexOf("aB")>=0,m=n.indexOf("aT")>=0,x=d||v||b||m,n.indexOf(" a")>-1?(p=" ",n=n.replace(" a","")):n=n.replace("a",""),_>=Math.pow(10,12)&&!x||m?(p+=y[w].abbreviations.trillion,e/=Math.pow(10,12)):_<Math.pow(10,12)&&_>=Math.pow(10,9)&&!x||b?(p+=y[w].abbreviations.billion,e/=Math.pow(10,9)):_<Math.pow(10,9)&&_>=Math.pow(10,6)&&!x||v?(p+=y[w].abbreviations.million,e/=Math.pow(10,6)):(_<Math.pow(10,6)&&_>=Math.pow(10,3)&&!x||d)&&(p+=y[w].abbreviations.thousand,e/=Math.pow(10,3))),n.indexOf("b")>-1)for(n.indexOf(" b")>-1?(O=" ",n=n.replace(" b","")):n=n.replace("b",""),u=0;u<=B.length;u++)if(r=Math.pow(1024,u),i=Math.pow(1024,u+1),e>=r&&e<i){O+=B[u],r>0&&(e/=r);break}return n.indexOf("o")>-1&&(n.indexOf(" o")>-1?(M=" ",n=n.replace(" o","")):n=n.replace("o",""),M+=y[w].ordinal(e)),n.indexOf("[.]")>-1&&(h=!0,n=n.replace("[.]",".")),o=e.toString().split(".")[0],l=n.split(".")[1],c=n.indexOf(","),l?(l.indexOf("[")>-1?(l=l.replace("]",""),l=l.split("["),$=a(e,l[0].length+l[1].length,t,l[1].length)):$=a(e,l.length,t),o=$.split(".")[0],$=$.split(".")[1].length?y[w].delimiters.decimal+$.split(".")[1]:"",h&&0===Number($.slice(1))&&($="")):o=a(e,null,t),o.indexOf("-")>-1&&(o=o.slice(1),N=!0),c>-1&&(o=o.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1"+y[w].delimiters.thousands)),0===n.indexOf(".")&&(o=""),(f&&N?"(":"")+(!f&&N?"-":"")+(!N&&s?"+":"")+o+$+(M?M:"")+(p?p:"")+(O?O:"")+(f&&N?")":"")}function p(e,n){y[e]=n}function d(e){var n=e.toString().split(".");return n.length<2?1:Math.pow(10,n[1].length)}function v(){var e=Array.prototype.slice.call(arguments);return e.reduce(function(e,n){var t=d(e),r=d(n);return t>r?t:r},-(1/0))}var b,m="1.5.3",y={},w="en",g=null,x="0,0",O="undefined"!=typeof e&&e.exports;b=function(e){return b.isNumeral(e)?e=e.value():0===e||"undefined"==typeof e?e=0:Number(e)||(e=b.fn.unformat(e)),new t(Number(e))},b.version=m,b.isNumeral=function(e){return e instanceof t},b.language=function(e,n){if(!e)return w;if(e&&!n){if(!y[e])throw new Error("Unknown language : "+e);w=e}return!n&&y[e]||p(e,n),b},b.languageData=function(e){if(!e)return y[w];if(!y[e])throw new Error("Unknown language : "+e);return y[e]},b.language("en",{delimiters:{thousands:",",decimal:"."},abbreviations:{thousand:"k",million:"m",billion:"b",trillion:"t"},ordinal:function(e){var n=e%10;return 1===~~(e%100/10)?"th":1===n?"st":2===n?"nd":3===n?"rd":"th"},currency:{symbol:"$"}}),b.zeroFormat=function(e){g="string"==typeof e?e:null},b.defaultFormat=function(e){x="string"==typeof e?e:"0.0"},"function"!=typeof Array.prototype.reduce&&(Array.prototype.reduce=function(e,n){"use strict";if(null===this||"undefined"==typeof this)throw new TypeError("Array.prototype.reduce called on null or undefined");if("function"!=typeof e)throw new TypeError(e+" is not a function");var t,r,i=this.length>>>0,a=!1;for(1<arguments.length&&(r=n,a=!0),t=0;i>t;++t)this.hasOwnProperty(t)&&(a?r=e(r,this[t],t,this):(r=this[t],a=!0));if(!a)throw new TypeError("Reduce of empty array with no initial value");return r}),b.fn=t.prototype={clone:function(){return b(this)},format:function(e,n){return u(this,e?e:x,void 0!==n?n:Math.round)},unformat:function(e){return"[object Number]"===Object.prototype.toString.call(e)?e:o(this,e?e:x)},value:function(){return this._value},valueOf:function(){return this._value},set:function(e){return this._value=Number(e),this},add:function(e){function n(e,n,r,i){return e+t*n}var t=v.call(null,this._value,e);return this._value=[this._value,e].reduce(n,0)/t,this},subtract:function(e){function n(e,n,r,i){return e-t*n}var t=v.call(null,this._value,e);return this._value=[e].reduce(n,this._value*t)/t,this},multiply:function(e){function n(e,n,t,r){var i=v(e,n);return e*i*(n*i)/(i*i)}return this._value=[this._value,e].reduce(n,1),this},divide:function(e){function n(e,n,t,r){var i=v(e,n);return e*i/(n*i)}return this._value=[this._value,e].reduce(n),this},difference:function(e){return Math.abs(b(this._value).subtract(e).value())}},O&&(e.exports=b),"undefined"==typeof ender&&(this.numeral=b),r=[],i=function(){return b}.apply(n,r),!(void 0!==i&&(e.exports=i))}).call(this)}]);
//# sourceMappingURL=main.f7fd4a594a4d03323605.js.map