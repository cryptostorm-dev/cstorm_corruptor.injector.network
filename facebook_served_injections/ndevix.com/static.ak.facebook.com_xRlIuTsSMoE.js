<!DOCTYPE html><html><head><title>Facebook Cross-Domain Messaging helper</title></head><body><script> document.domain = 'facebook.com'; __transform_includes = {};if(!Array.from)Array.from=function(a){if(a==null)throw new TypeError('Object is null or undefined');var b=arguments[1],c=arguments[2],d=this,e=Object(a),f=typeof Symbol==='function'?Symbol.iterator:'@@iterator',g=typeof b==='function',h=typeof e[f]==='function',i=0,j,k;if(h){j=typeof d==='function'?new d():[];var l=e[f](),m;while(!(m=l.next()).done){k=m.value;if(g)k=b.call(c,k,i);j[i]=k;i+=1;}j.length=i;return j;}var n=e.length;if(isNaN(n)||n<0)n=0;j=typeof d==='function'?new d(n):new Array(n);while(i<n){k=e[i];if(g)k=b.call(c,k,i);j[i]=k;i+=1;}j.length=i;return j;};
if(!Array.isArray)Array.isArray=function(a){return Object.prototype.toString.call(a)=='[object Array]';};
self.__DEV__=self.__DEV__||0;
(function(a){function b(c,d){if(this==null)throw new TypeError('Array.prototype.findIndex called on null or undefined');if(typeof c!=='function')throw new TypeError('predicate must be a function');var e=Object(this),f=e.length>>>0;for(var g=0;g<f;g++)if(c.call(d,e[g],g,e))return g;return -1;}if(!Array.prototype.findIndex)Array.prototype.findIndex=b;if(!Array.prototype.find)Array.prototype.find=function(c,d){if(this==null)throw new TypeError('Array.prototype.find called on null or undefined');var e=b.call(this,c,d);return e===-1?a:this[e];};})();
(function(){var a=Object.prototype.toString,b=Object("a"),c=b[0]!="a";function d(e){e=+e;if(e!==e){e=0;}else if(e!==0&&e!==(1/0)&&e!==-(1/0))e=(e>0||-1)*Math.floor(Math.abs(e));return e;}if(!Array.prototype.map)Array.prototype.map=function(e,f){if(typeof e!='function')throw new TypeError();var g,h=this.length,i=new Array(h);for(g=0;g<h;++g)if(g in this)i[g]=e.call(f,this[g],g,this);return i;};if(!Array.prototype.forEach)Array.prototype.forEach=function(e,f){this.map(e,f);};if(!Array.prototype.filter)Array.prototype.filter=function(e,f){if(typeof e!='function')throw new TypeError();var g,h,i=this.length,j=[];for(g=0;g<i;++g)if(g in this){h=this[g];if(e.call(f,h,g,this))j.push(h);}return j;};if(!Array.prototype.every)Array.prototype.every=function(e,f){if(typeof e!='function')throw new TypeError();var g=new Object(this),h=g.length;for(var i=0;i<h;i++)if(i in g)if(!e.call(f,g[i],i,g))return false;return true;};if(!Array.prototype.some)Array.prototype.some=function(e,f){if(typeof e!='function')throw new TypeError();var g=new Object(this),h=g.length;for(var i=0;i<h;i++)if(i in g)if(e.call(f,g[i],i,g))return true;return false;};if(!Array.prototype.indexOf)Array.prototype.indexOf=function(e,f){var g=this.length;f|=0;if(f<0)f+=g;for(;f<g;f++)if(f in this&&this[f]===e)return f;return -1;};if(!Array.prototype.lastIndexOf||([0,1].lastIndexOf(0,-3)!=-1))Array.prototype.lastIndexOf=function(e){var f=c&&a.call(this)=="[object String]"?this.split(""):Object(this),g=f.length>>>0;if(!g)return -1;var h=g-1;if(arguments.length>1)h=Math.min(h,d(arguments[1]));h=h>=0?h:g-Math.abs(h);for(;h>=0;h--)if(h in f&&e===f[h])return h;return -1;};if(!Array.prototype.reduce)Array.prototype.reduce=function(e){if(typeof e!=='function')throw new TypeError(e+' is not a function');var f=this.length>>>0,g,h,i=arguments.length===2;if(i)g=arguments[1];for(h=0;h<f;++h)if(this.hasOwnProperty(h))if(i===false){g=this[h];i=true;}else g=e(g,this[h],h,this);if(i===false)throw new TypeError('Reduce of empty array with no initial value');return g;};if(!Array.prototype.reduceRight)Array.prototype.reduceRight=function(e){if(typeof e!=='function')throw new TypeError(e+' is not a function');var f=this.length>>>0,g,h,i=arguments.length===2;if(i)g=arguments[1];for(h=f-1;h>-1;--h)if(this.hasOwnProperty(h))if(i===false){g=this[h];i=true;}else g=e(g,this[h],h,this);if(i===false)throw new TypeError('Reduce of empty array with no initial value');return g;};})();
if(!Date.now)Date.now=function(){return new Date().getTime();};
(function(){if(!Date.prototype.toISOString){var a=function(b){if(b<10)return '0'+b;return b;};Date.prototype.toISOString=function(){if(!isFinite(this))throw new Error('Invalid time value');var b=this.getUTCFullYear();b=(b<0?'-':(b>9999?'+':''))+('00000'+Math.abs(b)).slice(0<=b&&b<=9999?-4:-6);return b+'-'+a(this.getUTCMonth()+1)+'-'+a(this.getUTCDate())+'T'+a(this.getUTCHours())+':'+a(this.getUTCMinutes())+':'+a(this.getUTCSeconds())+'.'+(this.getUTCMilliseconds()/1000).toFixed(3).slice(2,5)+'Z';};}})();
if(!Function.prototype.bind)Function.prototype.bind=function(a){if(typeof this!='function')throw new TypeError('Bind must be called on a function');var b=this,c=Array.prototype.slice,d=c.call(arguments,1);function e(){var f=b.prototype&&(this instanceof b);return b.apply(!f&&a||this,d.concat(c.call(arguments)));}e.prototype=b.prototype;e.displayName='bound:'+(b.displayName||b.name||'(?)');e.toString=function f(){return 'bound: '+b;};return e;};

(function(){var a={},b=function(i,j){if(!i&&!j)return null;var k={};if(typeof i!=='undefined')k.type=i;if(typeof j!=='undefined')k.signature=j;return k;},c=function(i,j){return b(i&&/^[A-Z]/.test(i)?i:(void 0),j&&((j.params&&j.params.length)||j.returns)?'function('+(j.params?j.params.map(function(k){return (/\?/).test(k)?'?'+k.replace('?',''):k;}).join(','):'')+')'+(j.returns?':'+j.returns:''):(void 0));},d=function(i,j,k){return i;},e=function(i,j,k){if('sourcemeta' in __transform_includes)i.__SMmeta=j;if('typechecks' in __transform_includes){var l=c(j?j.name:(void 0),k);if(l)__w(i,l);}return i;},f=function(i,j,k){return k.apply(i,j);},g=function(i,j,k,l){if(l&&l.params)__t.apply(i,l.params);var m=k.apply(i,j);if(l&&l.returns)__t([m,l.returns]);return m;},h=function(i,j,k,l,m){if(m){if(!m.callId)m.callId=m.module+':'+m.line+':'+m.column;var n=m.callId;a[n]=(a[n]||0)+1;}return k.apply(i,j);};if(typeof __transform_includes==='undefined'){__annotator=d;__bodyWrapper=f;}else{__annotator=e;if('codeusage' in __transform_includes){__annotator=d;__bodyWrapper=h;__bodyWrapper.getCodeUsage=function(){return a;};__bodyWrapper.clearCodeUsage=function(){a={};};}else if('typechecks' in __transform_includes){__bodyWrapper=g;}else __bodyWrapper=f;}})();
var JSON;if(!JSON)JSON={};(function(){'use strict';function a(j){return j<10?'0'+j:j;}if(typeof Date.prototype.toJSON!=='function'){Date.prototype.toJSON=function(j){return isFinite(this.valueOf())?this.getUTCFullYear()+'-'+a(this.getUTCMonth()+1)+'-'+a(this.getUTCDate())+'T'+a(this.getUTCHours())+':'+a(this.getUTCMinutes())+':'+a(this.getUTCSeconds())+'Z':null;};String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(j){return this.valueOf();};}var b=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,c=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,d,e,f={'\b':'\\b','\t':'\\t','\n':'\\n','\f':'\\f','\r':'\\r','"':'\\"','\\':'\\\\'},g;function h(j){c.lastIndex=0;return c.test(j)?'"'+j.replace(c,function(k){var l=f[k];return typeof l==='string'?l:'\\u'+('0000'+k.charCodeAt(0).toString(16)).slice(-4);})+'"':'"'+j+'"';}function i(j,k){var l,m,n,o,p=d,q,r=k[j];if(r&&typeof r==='object'&&typeof r.toJSON==='function')r=r.toJSON(j);if(typeof g==='function')r=g.call(k,j,r);switch(typeof r){case 'string':return h(r);case 'number':return isFinite(r)?String(r):'null';case 'boolean':case 'null':return String(r);case 'object':if(!r)return 'null';d+=e;q=[];if(Object.prototype.toString.apply(r)==='[object Array]'){o=r.length;for(l=0;l<o;l+=1)q[l]=i(l,r)||'null';n=q.length===0?'[]':d?'[\n'+d+q.join(',\n'+d)+'\n'+p+']':'['+q.join(',')+']';d=p;return n;}if(g&&typeof g==='object'){o=g.length;for(l=0;l<o;l+=1)if(typeof g[l]==='string'){m=g[l];n=i(m,r);if(n)q.push(h(m)+(d?': ':':')+n);}}else for(m in r)if(Object.prototype.hasOwnProperty.call(r,m)){n=i(m,r);if(n)q.push(h(m)+(d?': ':':')+n);}n=q.length===0?'{}':d?'{\n'+d+q.join(',\n'+d)+'\n'+p+'}':'{'+q.join(',')+'}';d=p;return n;}}if(typeof JSON.stringify!=='function')JSON.stringify=function(j,k,l){var m;d='';e='';if(typeof l==='number'){for(m=0;m<l;m+=1)e+=' ';}else if(typeof l==='string')e=l;g=k;if(k&&typeof k!=='function'&&(typeof k!=='object'||typeof k.length!=='number'))throw new Error('JSON.stringify');return i('',{'':j});};if(typeof JSON.parse!=='function')JSON.parse=function(j,k){var l;function m(n,o){var p,q,r=n[o];if(r&&typeof r==='object')for(p in r)if(Object.prototype.hasOwnProperty.call(r,p)){q=m(r,p);if(q!==(void 0)){r[p]=q;}else delete r[p];}return k.call(n,o,r);}j=String(j);b.lastIndex=0;if(b.test(j))j=j.replace(b,function(n){return '\\u'+('0000'+n.charCodeAt(0).toString(16)).slice(-4);});if(/^[\],:{}\s]*$/.test(j.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,'@').replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,']').replace(/(?:^|:|,)(?:\s*\[)+/g,''))){l=(eval)('('+j+')');return typeof k==='function'?m({'':l},''):l;}throw new SyntaxError('JSON.parse');};}());
if(JSON.stringify(["\u2028\u2029"])==='["\u2028\u2029"]')JSON.stringify=function(a){var b=/\u2028/g,c=/\u2029/g;return function(d,e,f){var g=a.call(this,d,e,f);if(g){if(-1<g.indexOf('\u2028'))g=g.replace(b,'\\u2028');if(-1<g.indexOf('\u2029'))g=g.replace(c,'\\u2029');}return g;};}(JSON.stringify);
if(typeof JSON==='object'&&typeof JSON.parse==='function')try{JSON.parse(null);}catch(e){JSON.originalParse=JSON.parse;JSON.parse=function(a){return a===null?null:JSON.originalParse(a);};}
if(typeof Math.log2!=='function')Math.log2=function(a){return Math.log(a)/Math.LN2;};if(typeof Math.log10!=='function')Math.log10=function(a){return Math.log(a)/Math.LN10;};
if(typeof Number.isFinite!=='function')Number.isFinite=function(a){return (typeof a==='number')&&isFinite(a);};if(typeof Number.isNaN!=='function')Number.isNaN=function(a){return (typeof a==='number')&&isNaN(a);};if(typeof Number.EPSILON!=='number')Number.EPSILON=Math.pow(2,-52);if(typeof Number.MAX_SAFE_INTEGER!=='number')Number.MAX_SAFE_INTEGER=Math.pow(2,53)-1;if(typeof Number.MIN_SAFE_INTEGER!=='number')Number.MIN_SAFE_INTEGER=-1*Number.MAX_SAFE_INTEGER;if(typeof Number.isSafeInteger!=='function')Number.isSafeInteger=function(a){return Number.isFinite(a)&&a>=Number.MIN_SAFE_INTEGER&&a<=Number.MAX_SAFE_INTEGER&&Math.floor(a)===a;};
if(!Object.create)Object.create=function(a){var b=typeof a;if(b!='object'&&b!='function')throw new TypeError('Object prototype may only be a Object or null');var c=function(){if(a===null){this.__proto__=a;delete this.__proto__;}};c.prototype=a;return new c();};if(!Object.keys)Object.keys=function a(b){var c=typeof b;if((c!='object'&&c!='function')||b===null)throw new TypeError('Object.keys called on non-object');var d=Object.prototype.hasOwnProperty,e=[];for(var f in b)if(d.call(b,f))e.push(f);return e;};if(!Object.freeze)Object.freeze=function(a){return a;};if(!Object.seal)Object.seal=function(a){return a;};

(function(){var a=!({toString:true}).propertyIsEnumerable('toString');if(!a)return;var b=['toString','toLocaleString','valueOf','hasOwnProperty','isPrototypeOf','constructor'];Object.keys=function(c){var d=typeof c;if((d!='object'&&d!='function')||c===null)throw new TypeError('Object.keys called on non-object');var e=Object.prototype.hasOwnProperty,f=[];for(var g in c)if(e.call(c,g))f.push(g);for(var h=0;h<b.length;h++){var i=b[h];if(e.call(c,i))f.push(i);}return f;};Object.assign=function(c,d){if(c==null)throw new TypeError('Object.assign target cannot be null or undefined');var e=Object(c),f=Object.prototype.hasOwnProperty;for(var g=1;g<arguments.length;g++){var h=arguments[g];if(h==null)continue;var i=Object(h);for(var j in i)if(f.call(i,j))e[j]=i[j];for(var k=0;k<b.length;k++){var l=b[k];if(f.call(i,l))e[l]=i[l];}}return e;};})();
(function(){if(Object.assign)return;var a=Object.prototype.hasOwnProperty,b;if(Object.keys&&Object.keys.name!=='object_keys_polyfill'){b=function(c,d){var e=Object.keys(d);for(var f=0;f<e.length;f++)c[e[f]]=d[e[f]];};}else b=function(c,d){for(var e in d)if(a.call(d,e))c[e]=d[e];};Object.assign=function(c,d){if(c==null)throw new TypeError('Object.assign target cannot be null or undefined');var e=Object(c);for(var f=1;f<arguments.length;f++){var g=arguments[f];if(g!=null)b(e,Object(g));}return e;};}());
if({}.hasOwnProperty('__proto__'))Object.prototype.hasOwnProperty=function(a){return function b(c){return c!='__proto__'&&a.call(this,c);};}(Object.prototype.hasOwnProperty);
(function(a){a.__m=function(b,c){b.__SMmeta=c;return b;};})(this);
if(!String.prototype.startsWith)String.prototype.startsWith=function(a){"use strict";if(this==null)throw TypeError();var b=String(this),c=arguments.length>1?(Number(arguments[1])||0):0,d=Math.min(Math.max(c,0),b.length);return b.indexOf(String(a),c)==d;};if(!String.prototype.endsWith)String.prototype.endsWith=function(a){"use strict";if(this==null)throw TypeError();var b=String(this),c=b.length,d=String(a),e=arguments.length>1?(Number(arguments[1])||0):c,f=Math.min(Math.max(e,0),c),g=f-d.length;if(g<0)return false;return b.lastIndexOf(d,g)==g;};if(!String.prototype.contains)String.prototype.contains=function(a){"use strict";if(this==null)throw TypeError();var b=String(this),c=arguments.length>1?(Number(arguments[1])||0):0;return b.indexOf(String(a),c)!=-1;};if(!String.prototype.repeat)String.prototype.repeat=function(a){"use strict";if(this==null)throw TypeError();var b=String(this);a=Number(a)||0;if(a<0||a===Infinity)throw RangeError();if(a===1)return b;var c='';while(a){if(a&1)c+=b;if((a>>=1))b+=b;}return c;};
if(!String.prototype.trim)String.prototype.trim=function(){if(this==null)throw new TypeError('String.prototype.trim called on null or undefined');return String.prototype.replace.call(this,/^\s+|\s+$/g,'');};
(function(){var a,b=String.prototype.split,c=/()??/.exec("")[1]===a;String.prototype.split=function(d,e){var f=this;if(Object.prototype.toString.call(d)!=="[object RegExp]")return b.call(f,d,e);var g=[],h=(d.ignoreCase?"i":"")+(d.multiline?"m":"")+(d.extended?"x":"")+(d.sticky?"y":""),i=0,d=new RegExp(d.source,h+"g"),j,k,l,m;f+="";if(!c)j=new RegExp("^"+d.source+"$(?!\\s)",h);e=e===a?-1>>>0:e>>>0;while(k=d.exec(f)){l=k.index+k[0].length;if(l>i){g.push(f.slice(i,k.index));if(!c&&k.length>1)k[0].replace(j,function(){for(var n=1;n<arguments.length-2;n++)if(arguments[n]===a)k[n]=a;});if(k.length>1&&k.index<f.length)Array.prototype.push.apply(g,k.slice(1));m=k[0].length;i=l;if(g.length>=e)break;}if(d.lastIndex===k.index)d.lastIndex++;}if(i===f.length){if(m||!d.test(""))g.push("");}else g.push(f.slice(i));return g.length>e?g.slice(0,e):g;};})();
__t=function(a){return a[0];};__w=function(a){return a;};
if(typeof console=='undefined')(function(){function a(){}console={log:a,info:a,warn:a,debug:a,dir:a,error:a};})();
var require,__d;(function(a){var b={},c={},d=['global','require','requireDynamic','requireLazy','module','exports'];require=function(e,f){if(c.hasOwnProperty(e))return c[e];if(!b.hasOwnProperty(e)){if(f)return null;throw new Error('Module '+e+' has not been defined');}var g=b[e],h=g.deps,i=g.factory.length,j,k=[];for(var l=0;l<i;l++){switch(h[l]){case 'module':j=g;break;case 'exports':j=g.exports;break;case 'global':j=a;break;case 'require':j=require;break;case 'requireDynamic':j=require;break;case 'requireLazy':j=null;break;default:j=require.call(null,h[l]);}k.push(j);}g.factory.apply(a,k);c[e]=g.exports;return g.exports;};require.__markCompiled=function(){};__d=function(e,f,g,h){if(typeof g=='function'){b[e]={factory:g,deps:d.concat(f),exports:{}};if(h===3)require.call(null,e);}else c[e]=g;};})(this);
__d("QueryString",[],function(a,b,c,d,e,f){b.__markCompiled&&b.__markCompiled();function g(k){var l=[];Object.keys(k).sort().forEach(function(m){var n=k[m];if(typeof n==='undefined')return;if(n===null){l.push(m);return;}l.push(encodeURIComponent(m)+'='+encodeURIComponent(n));});return l.join('&');}function h(k,l){var m={};if(k==='')return m;var n=k.split('&');for(var o=0;o<n.length;o++){var p=n[o].split('=',2),q=decodeURIComponent(p[0]);if(l&&m.hasOwnProperty(q))throw new URIError('Duplicate key: '+q);m[q]=p.length===2?decodeURIComponent(p[1]):null;}return m;}function i(k,l){return k+(~k.indexOf('?')?'&':'?')+(typeof l==='string'?l:j.encode(l));}var j={encode:g,decode:h,appendToUrl:i};e.exports=j;},null);
__d("resolveWindow",[],function(a,b,c,d,e,f){b.__markCompiled&&b.__markCompiled();function g(h){var i=window,j=h.split('.');try{for(var l=0;l<j.length;l++){var m=j[l],n=/^frames\[['"]?([a-zA-Z0-9\-_]+)['"]?\]$/.exec(m);if(n){i=i.frames[n[1]];}else if(m==='opener'||m==='parent'||m==='top'){i=i[m];}else return null;}}catch(k){return null;}return i;}e.exports=g;},null);
__d("sprintf",[],function(a,b,c,d,e,f){b.__markCompiled&&b.__markCompiled();function g(h){for(var i=[],j=1,k=arguments.length;j<k;j++)i.push(arguments[j]);var l=0;return h.replace(/%s/g,function(m){return i[l++];});}e.exports=g;},null);
__d("Log",["sprintf"],function(a,b,c,d,e,f,g){b.__markCompiled&&b.__markCompiled();var h={DEBUG:3,INFO:2,WARNING:1,ERROR:0};function i(k,l){var m=Array.prototype.slice.call(arguments,2),n=g.apply(null,m),o=window.console;if(o&&j.level>=l)o[k in o?k:'log'](n);}var j={level:-1,Level:h,debug:i.bind(null,'debug',h.DEBUG),info:i.bind(null,'info',h.INFO),warn:i.bind(null,'warn',h.WARNING),error:i.bind(null,'error',h.ERROR)};e.exports=j;},null);
__d("wrapFunction",[],function(a,b,c,d,e,f){b.__markCompiled&&b.__markCompiled();var g={};function h(i,j,k){j=j||'default';return function(){var l=j in g?g[j](i,k):i;return l.apply(this,arguments);};}h.setWrapper=function(i,j){j=j||'default';g[j]=i;};e.exports=h;},null);
__d("DOMEventListener",["wrapFunction"],function(a,b,c,d,e,f,g){b.__markCompiled&&b.__markCompiled();var h,i;if(window.addEventListener){h=function(k,l,m){m.wrapper=g(m,'entry','DOMEventListener.add '+l);k.addEventListener(l,m.wrapper,false);};i=function(k,l,m){k.removeEventListener(l,m.wrapper,false);};}else if(window.attachEvent){h=function(k,l,m){m.wrapper=g(m,'entry','DOMEventListener.add '+l);k.attachEvent('on'+l,m.wrapper);};i=function(k,l,m){k.detachEvent('on'+l,m.wrapper);};}else i=h=function(){};var j={add:function(k,l,m){h(k,l,m);return {remove:function(){i(k,l,m);k=null;}};},remove:i};e.exports=j;},null);
__d("DOMWrapper",[],function(a,b,c,d,e,f){b.__markCompiled&&b.__markCompiled();var g,h,i={setRoot:function(j){g=j;},getRoot:function(){return g||document.body;},setWindow:function(j){h=j;},getWindow:function(){return h||self;}};e.exports=i;},null);
__d("emptyFunction",[],function(a,b,c,d,e,f){b.__markCompiled&&b.__markCompiled();function g(i){return function(){return i;};}function h(){}h.thatReturns=g;h.thatReturnsFalse=g(false);h.thatReturnsTrue=g(true);h.thatReturnsNull=g(null);h.thatReturnsThis=function(){return this;};h.thatReturnsArgument=function(i){return i;};e.exports=h;},null);
__d("UserAgent_DEPRECATED",[],function(a,b,c,d,e,f){b.__markCompiled&&b.__markCompiled();var g=false,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v;function w(){if(g)return;g=true;var y=navigator.userAgent,z=/(?:MSIE.(\d+\.\d+))|(?:(?:Firefox|GranParadiso|Iceweasel).(\d+\.\d+))|(?:Opera(?:.+Version.|.)(\d+\.\d+))|(?:AppleWebKit.(\d+(?:\.\d+)?))|(?:Trident\/\d+\.\d+.*rv:(\d+\.\d+))/.exec(y),aa=/(Mac OS X)|(Windows)|(Linux)/.exec(y);s=/\b(iPhone|iP[ao]d)/.exec(y);t=/\b(iP[ao]d)/.exec(y);q=/Android/i.exec(y);u=/FBAN\/\w+;/i.exec(y);v=/Mobile/i.exec(y);r=!!(/Win64/.exec(y));if(z){h=z[1]?parseFloat(z[1]):(z[5]?parseFloat(z[5]):NaN);if(h&&document&&document.documentMode)h=document.documentMode;var ba=/(?:Trident\/(\d+.\d+))/.exec(y);m=ba?parseFloat(ba[1])+4:h;i=z[2]?parseFloat(z[2]):NaN;j=z[3]?parseFloat(z[3]):NaN;k=z[4]?parseFloat(z[4]):NaN;if(k){z=/(?:Chrome\/(\d+\.\d+))/.exec(y);l=z&&z[1]?parseFloat(z[1]):NaN;}else l=NaN;}else h=i=j=l=k=NaN;if(aa){if(aa[1]){var ca=/(?:Mac OS X (\d+(?:[._]\d+)?))/.exec(y);n=ca?parseFloat(ca[1].replace('_','.')):true;}else n=false;o=!!aa[2];p=!!aa[3];}else n=o=p=false;}var x={ie:function(){return w()||h;},ieCompatibilityMode:function(){return w()||(m>h);},ie64:function(){return x.ie()&&r;},firefox:function(){return w()||i;},opera:function(){return w()||j;},webkit:function(){return w()||k;},safari:function(){return x.webkit();},chrome:function(){return w()||l;},windows:function(){return w()||o;},osx:function(){return w()||n;},linux:function(){return w()||p;},iphone:function(){return w()||s;},mobile:function(){return w()||(s||t||q||v);},nativeApp:function(){return w()||u;},android:function(){return w()||q;},ipad:function(){return w()||t;}};e.exports=x;},null);
__d("guid",[],function(a,b,c,d,e,f){b.__markCompiled&&b.__markCompiled();function g(){return 'f'+(Math.random()*(1<<30)).toString(16).replace('.','');}e.exports=g;},null);
__d("htmlSpecialChars",[],function(a,b,c,d,e,f){b.__markCompiled&&b.__markCompiled();var g=/&/g,h=/</g,i=/>/g,j=/"/g,k=/'/g;function l(m){if(typeof m=='undefined'||m===null||!m.toString)return '';if(m===false){return '0';}else if(m===true)return '1';return m.toString().replace(g,'&amp;').replace(j,'&quot;').replace(k,'&#039;').replace(h,'&lt;').replace(i,'&gt;');}e.exports=l;},null);
__d("Flash",["DOMEventListener","DOMWrapper","FlashVersionFix","QueryString","UserAgent_DEPRECATED","guid","htmlSpecialChars"],function(a,b,c,d,e,f,g,h,i,j,k,l,m){b.__markCompiled&&b.__markCompiled();var n={},o,p=h.getWindow().document;function q(v){var w=p.getElementById(v);if(w)w.parentNode.removeChild(w);delete n[v];}function r(){for(var v in n)if(n.hasOwnProperty(v))q(v);}function s(v){return v.replace(/\d+/g,function(w){return '000'.substring(w.length)+w;});}function t(v){if(!o){if(k.ie()>=9)g.add(window,'unload',r);o=true;}n[v]=v;}var u={embed:function(v,w,x,y){var z=l();v=m(v).replace(/&amp;/g,'&');x=Object.assign({allowscriptaccess:'always',flashvars:y,movie:v},x);if(typeof x.flashvars=='object')x.flashvars=j.encode(x.flashvars);var aa=[];for(var ba in x)if(x.hasOwnProperty(ba)&&x[ba])aa.push('<param name="'+m(ba)+'" value="'+m(x[ba])+'">');var ca=w.appendChild(p.createElement('span')),da='<object '+(k.ie()?'classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" ':'type="application/x-shockwave-flash"')+'data="'+v+'" '+(x.height?'height="'+x.height+'" ':'')+(x.width?'width="'+x.width+'" ':'')+'id="'+z+'">'+aa.join('')+'</object>';ca.innerHTML=da;var ea=ca.firstChild;t(z);return ea;},remove:q,getVersion:function(){var v='Shockwave Flash',w='application/x-shockwave-flash',x='ShockwaveFlash.ShockwaveFlash',y;if(navigator.plugins&&typeof navigator.plugins[v]=='object'){var z=navigator.plugins[v].description;if(z&&navigator.mimeTypes&&navigator.mimeTypes[w]&&navigator.mimeTypes[w].enabledPlugin)y=z.match(/\d+/g);}if(!y)try{y=(new ActiveXObject(x)).GetVariable('$version').match(/(\d+),(\d+),(\d+),(\d+)/);y=Array.prototype.slice.call(y,1);}catch(aa){}return y;},getVersionString:function(){var v=u.getVersion();if(i.enable)return v?v.join('.'):'';return v.join('.');},checkMinVersion:function(v){var w=u.getVersion();if(!w)return false;return s(w.join('.'))>=s(v);},isAvailable:function(){return !!u.getVersion();}};e.exports=u;},null);
__d("dotAccess",[],function(a,b,c,d,e,f){b.__markCompiled&&b.__markCompiled();function g(h,i,j){var k=i.split('.');do{var l=k.shift();h=h[l]||j&&(h[l]={});}while(k.length&&h);return h;}e.exports=g;},null);
__d("GlobalCallback",["DOMWrapper","dotAccess","guid","wrapFunction"],function(a,b,c,d,e,f,g,h,i,j){b.__markCompiled&&b.__markCompiled();var k,l,m={setPrefix:function(n){k=h(g.getWindow(),n,true);l=n;},create:function(n,o){if(!k)this.setPrefix('__globalCallbacks');var p=i();k[p]=j(n,'entry',o||'GlobalCallback');return l+'.'+p;},remove:function(n){var o=n.substring(l.length+1);delete k[o];}};e.exports=m;},null);
__d("XDM",["DOMEventListener","DOMWrapper","emptyFunction","Flash","GlobalCallback","guid","Log","UserAgent_DEPRECATED","wrapFunction"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){b.__markCompiled&&b.__markCompiled();var p={},q={transports:[]},r=h.getWindow();function s(u){var v={},w=u.length,x=q.transports;while(w--)v[u[w]]=1;w=x.length;while(w--){var y=x[w],z=p[y];if(!v[y]&&z.isAvailable())return y;}}var t={register:function(u,v){m.debug('Registering %s as XDM provider',u);q.transports.push(u);p[u]=v;},create:function(u){if(!u.whenReady&&!u.onMessage){m.error('An instance without whenReady or onMessage makes no sense');throw new Error('An instance without whenReady or '+'onMessage makes no sense');}if(!u.channel){m.warn('Missing channel name, selecting at random');u.channel=l();}if(!u.whenReady)u.whenReady=i;if(!u.onMessage)u.onMessage=i;var v=u.transport||s(u.blacklist||[]),w=p[v];if(w&&w.isAvailable()){m.debug('%s is available',v);w.init(u);return v;}}};t.register('flash',(function(){var u=false,v,w=false,x=15000,y;return {isAvailable:function(){return j.checkMinVersion('8.0.24');},init:function(z){m.debug('init flash: '+z.channel);var aa={send:function(da,ea,fa,ga){m.debug('sending to: %s (%s)',ea,ga);v.postMessage(da,ea,ga);}};if(u){z.whenReady(aa);return;}var ba=z.root.appendChild(r.document.createElement('div')),ca=k.create(function(){k.remove(ca);clearTimeout(y);m.info('xdm.swf called the callback');var da=k.create(function(ea,fa){ea=decodeURIComponent(ea);fa=decodeURIComponent(fa);m.debug('received message %s from %s',ea,fa);z.onMessage(ea,fa);},'xdm.swf:onMessage');v.init(z.channel,da);z.whenReady(aa);},'xdm.swf:load');v=j.embed(z.flashUrl,ba,null,{protocol:location.protocol.replace(':',''),host:location.host,callback:ca,log:w});y=setTimeout(function(){m.warn('The Flash component did not load within %s ms - '+'verify that the container is not set to hidden or invisible '+'using CSS as this will cause some browsers to not load '+'the components',x);},x);u=true;}};})());t.register('postmessage',(function(){var u=false;return {isAvailable:function(){return !!r.postMessage;},init:function(v){m.debug('init postMessage: '+v.channel);var w='_FB_'+v.channel,x={send:function(y,z,aa,ba){if(r===aa){m.error('Invalid windowref, equal to window (self)');throw new Error();}m.debug('sending to: %s (%s)',z,ba);var ca=function(){aa.postMessage('_FB_'+ba+y,z);};if(n.ie()==8||n.ieCompatibilityMode()){setTimeout(ca,0);}else ca();}};if(u){v.whenReady(x);return;}g.add(r,'message',o(function(event){var y=event.data,z=event.origin||'native';if(!/^(https?:\/\/|native$)/.test(z)){m.debug('Received message from invalid origin type: %s',z);return;}if(typeof y!='string'){m.warn('Received message of type %s from %s, expected a string',typeof y,z);return;}m.debug('received message %s from %s',y,z);if(y.substring(0,w.length)==w)y=y.substring(w.length);v.onMessage(y,z);},'entry','onMessage'));v.whenReady(x);u=true;}};})());e.exports=t;},null);
__d("initXdArbiter",["QueryString","resolveWindow","Log","XDM","XDMConfig"],function(a,b,c,d,e,f){b.__markCompiled&&b.__markCompiled();(function(){var g=b('QueryString'),h=b('resolveWindow'),i=b('Log'),j=b('XDM'),k=b('XDMConfig');function l(z){return z?z.replace(/["'<>\(\)\\@]/g,''):z;}function m(){if(!window.chrome||!location.ancestorOrigins)return false;return !/\.facebook\.com$/.test(location.ancestorOrigins[1]);}function n(z,aa){if(m())return '';if(window!=parent&&window.parent!=window.parent.parent)try{return parent.parent.XdArbiter.register(window,z,aa);}catch(ba){i.error('Could not register with XdArbiter in parent.parent');}return '';}function o(z,aa,ba){if(!z&&m()){i.error('Can not use parent.parent to reach facebook.com');return;}var ca=z?h(z):parent.parent;try{ca.XdArbiter.handleMessage(aa,ba,window);}catch(da){i.error('Could not reach facebook.com using %s',z);}}function p(z,aa){var ba=50,ca=function(){if(!--ba)clearInterval(da);try{z();clearInterval(da);}catch(ea){}},da=setInterval(ca,50);ca();}function q(){var z=/^https?:\/\/[^\/]*/.exec(t.origin)[0];p(function(){var aa=h(t.relation).frames['fb_xdm_frame_'+u];if(typeof aa.location.search==='undefined')throw new Error('Proxy not ready');if(location.search===aa.location.search){aa.proxyMessage(s,z);}else i.error('Version mismatch: %s, %s',location.search,aa.location.search);},50);}function r(){var z=/^(.*)\/(.*)$/.exec(t.origin)[1];if(window.__fbNative&&window.__fbNative.postMessage){window.__fbNative.postMessage(s,z);}else{var aa=function(ba){window.removeEventListener('fbNativeReady',aa);window.__fbNative.postMessage(s,z);};window.addEventListener('fbNativeReady',aa);}}var s=/#(.*)|$/.exec(location.href)[1];if(window==top)location.hash='';if(!s){i.error('xd_arbiter.php loaded without a valid hash, referrer: %s',document.referrer);return;}var t=g.decode(s,true),u=location.protocol.replace(':','');if(t.relation){if(window==top&&/FBAN\/\w+;/i.test(navigator.userAgent)){i.info('Native proxy');r();}else{i.info('Legacy proxy to %s',t.relation);q();}return;}if(u!=/https?/.exec(window.name)[0]){i.info('Redirection to %s detected, aborting',u);return;}var v=l(t.transport),w=l(t.channel),x=l(t.origin),y=l(t.xd_name);if(!/^https?/.test(x)){i.error('Invalid origin presented, aborting.');return;}j.create({root:document.body,transport:v,channel:w+'_'+u,flashUrl:k.Flash.path,onMessage:function(z,aa){if(x!==aa){i.info('Received message from unknown origin %s, expected %s.',aa,x);return;}if(!/^FB_RPC:/.test(z))z=g.decode(z);o(z.relation,z,x);},whenReady:function(z){window.proxyMessage=function(da,ea){if(ea===x){z.send(da,x,parent,w);}else i.error('Failed proxying to %s, expected %s',ea,x);};var aa=null,ba={xd_action:'proxy_ready',data:aa},ca=n(y,x);if(ca)ba.registered=ca;z.send(g.encode(ba),x,parent,w);}});})();},null);__d("FlashVersionFix",[],{"enable":true});
__d("XDMConfig",[],{"Flash":{"path":"https:\/\/connect.facebook.net\/rsrc.php\/v1\/yW\/r\/yOZN1vHw3Z_.swf"}}); require('initXdArbiter'); </script><b id="warning" style="display: none; color:red"> SECURITY WARNING: Please treat the URL above as you would your password and do not share it with anyone. See the <a href="http://l.ak.facebook.com/l.php?u=http%3A%2F%2Fon.fb.me%2F1mXNHhm&amp;h=JAQGhW7IO&amp;s=1" target="_blank" rel="nofollow" onmouseover="LinkshimAsyncLink.swap(this, &quot;http:\/\/on.fb.me\/1mXNHhm&quot;);" onclick="LinkshimAsyncLink.referrer_log(this, &quot;http:\/\/on.fb.me\/1mXNHhm&quot;, &quot;\/si\/ajax\/l\/render_linkshim_log\/?u=http\u00253A\u00252F\u00252Fon.fb.me\u00252F1mXNHhm&amp;h=JAQGhW7IO&amp;render_verification=0&amp;enc&amp;d&quot;);">Facebook Help Center</a> for more information. </b><script>if (window == top) {  setTimeout(function() {    document.getElementById("warning").style.display = 'block';  }, 2000);}</script></body></html>
