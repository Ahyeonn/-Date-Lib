!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.lib=t():e.lib=t()}(this,(()=>(()=>{"use strict";var e={d:(t,n)=>{for(var o in n)e.o(n,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:n[o]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};function n(e){return e<10?"0".concat(e):e.toString()}function o(e){var t=e.toString();return"".concat(t,1===e||21===e||31===e?"st":2===e||22==e?"nd":3===e||23==e?"rd":"th")}e.r(t),e.d(t,{D:()=>y,datePadded:()=>n,dateSuffix:()=>o,days:()=>i,hoursPadded:()=>c,minutesPadded:()=>d,months:()=>r,secondsPadded:()=>s,shortDays:()=>u,shortMonths:()=>a});var r=["January","February","March","April","May","June","July","August","September","October","November","December"],a=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sept","Oct","Nov","Dec"],i=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],u=["Sun","Mon","Tues","Wed","Thur","Fri","Sat"];function c(e){return e<10?"0".concat(e):e.toString()}function d(e){return e<10?"0".concat(e):e.toString()}function s(e){return e<10?"0".concat(e):e.toString()}var y=function(){function e(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._date=new Date(e[0],e[1],e[2],e[3],e[4],e[5])}return Object.defineProperty(e.prototype,"year",{get:function(){return this._date.getFullYear()},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"yr",{get:function(){return this._date.getFullYear()%100},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"month",{get:function(){return r[this._date.getMonth()]},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"mon",{get:function(){return a[this._date.getMonth()]},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"day",{get:function(){return i[this._date.getDay()]},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"dy",{get:function(){return u[this._date.getDay()]},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"date",{get:function(){return this._date.getDate()},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"hours",{get:function(){return this._date.getHours()},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"mins",{get:function(){return this._date.getMinutes()},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"secs",{get:function(){return this._date.getSeconds()},enumerable:!1,configurable:!0}),e.prototype.format=function(e){if(void 0===e&&(e=""),""===e)return"".concat(this.year," ").concat(this.month," ").concat(this.date);for(var t={Y:this.year,y:this.yr,M:this.month,m:this.mon,D:n(this.date),d:this.date,"#":o(this.date),H:c(this.hours),h:this.hours,I:d(this.mins),i:this.mins,S:s(this.secs),s:this.secs},r="",a=0;a<e.length;a+=1){var i=e[a];r+=i in t?t[i]:i}return r},e.prototype.when=function(){var e=new Date,t=new Date(this._date),n=e.getFullYear(),o=e.getMonth(),r=e.getDate(),a=t.getFullYear(),i=t.getMonth(),u=t.getDate();return n===a?i>o?"The date is ".concat(i-o,i-o>1?" months from now on.":" month from now on."):o===i?r>u?"The date is ".concat(r-u,r-u>1?" days ago.":" day ago."):r===u?"Today":"The date is ".concat(u-r,u-r>1?" days from now on.":" day from now on."):"The date is ".concat(o-i,o-i>1?" months ago.":" month ago."):n<a?"The date is ".concat(a-n,a-n>1?" years from now on.":" year from now on."):n>a?o-i<11&&o!==i&&o>i?"The date was ".concat(n-a," years ").concat(o-i," months ago"):o-i<11&&o!==i&&i>o?"The date was ".concat(n-a," years ").concat(i-o," months ago"):"The date was ".concat(n-a," year ago"):void 0},e}();return new y(2017,0,2,3,4,5),t})()));