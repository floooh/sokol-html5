
var f;f||(f=typeof Module !== 'undefined' ? Module : {});var h={},l;for(l in f)f.hasOwnProperty(l)&&(h[l]=f[l]);var r=[],aa="./this.program";function t(a,b){throw b;}var ba=!1,u=!1,ca=!1,da=!1;ba="object"===typeof window;u="function"===typeof importScripts;ca="object"===typeof process&&"object"===typeof process.versions&&"string"===typeof process.versions.node;da=!ba&&!ca&&!u;var v="",ea,fa,w,ha,ia;
if(ca)v=u?require("path").dirname(v)+"/":__dirname+"/",ea=function(a,b){ha||(ha=require("fs"));ia||(ia=require("path"));a=ia.normalize(a);return ha.readFileSync(a,b?null:"utf8")},w=function(a){a=ea(a,!0);a.buffer||(a=new Uint8Array(a));assert(a.buffer);return a},1<process.argv.length&&(aa=process.argv[1].replace(/\\/g,"/")),r=process.argv.slice(2),"undefined"!==typeof module&&(module.exports=f),process.on("uncaughtException",function(a){if(!(a instanceof ja))throw a;}),process.on("unhandledRejection",
x),t=function(a){process.exit(a)},f.inspect=function(){return"[Emscripten Module object]"};else if(da)"undefined"!=typeof read&&(ea=function(a){return read(a)}),w=function(a){if("function"===typeof readbuffer)return new Uint8Array(readbuffer(a));a=read(a,"binary");assert("object"===typeof a);return a},"undefined"!=typeof scriptArgs?r=scriptArgs:"undefined"!=typeof arguments&&(r=arguments),"function"===typeof quit&&(t=function(a){quit(a)}),"undefined"!==typeof print&&("undefined"===typeof console&&
(console={}),console.log=print,console.warn=console.error="undefined"!==typeof printErr?printErr:print);else if(ba||u)u?v=self.location.href:"undefined"!==typeof document&&document.currentScript&&(v=document.currentScript.src),v=0!==v.indexOf("blob:")?v.substr(0,v.lastIndexOf("/")+1):"",ea=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.send(null);return b.responseText},u&&(w=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.responseType="arraybuffer";b.send(null);return new Uint8Array(b.response)}),
fa=function(a,b,c){var d=new XMLHttpRequest;d.open("GET",a,!0);d.responseType="arraybuffer";d.onload=function(){200==d.status||0==d.status&&d.response?b(d.response):c()};d.onerror=c;d.send(null)};var ka=f.print||console.log.bind(console),y=f.printErr||console.warn.bind(console);for(l in h)h.hasOwnProperty(l)&&(f[l]=h[l]);h=null;f.arguments&&(r=f.arguments);f.thisProgram&&(aa=f.thisProgram);f.quit&&(t=f.quit);var z;f.wasmBinary&&(z=f.wasmBinary);var noExitRuntime=f.noExitRuntime||!0;
"object"!==typeof WebAssembly&&x("no native wasm support detected");var la,ma=!1;function assert(a,b){a||x("Assertion failed: "+b)}function na(a){var b=f["_"+a];assert(b,"Cannot call unknown function "+a+", make sure it is exported");return b}
function oa(a,b,c){var d={string:function(n){var p=0;if(null!==n&&void 0!==n&&0!==n){var q=(n.length<<2)+1;p=A(q);C(n,D,p,q)}return p},array:function(n){var p=A(n.length);pa.set(n,p);return p}};a=na(a);var e=[],k=0;if(c)for(var g=0;g<c.length;g++){var m=d[b[g]];m?(0===k&&(k=qa()),e[g]=m(c[g])):e[g]=c[g]}a.apply(null,e);0!==k&&ra(k)}var sa="undefined"!==typeof TextDecoder?new TextDecoder("utf8"):void 0;
function ta(a,b,c){var d=b+c;for(c=b;a[c]&&!(c>=d);)++c;if(16<c-b&&a.subarray&&sa)return sa.decode(a.subarray(b,c));for(d="";b<c;){var e=a[b++];if(e&128){var k=a[b++]&63;if(192==(e&224))d+=String.fromCharCode((e&31)<<6|k);else{var g=a[b++]&63;e=224==(e&240)?(e&15)<<12|k<<6|g:(e&7)<<18|k<<12|g<<6|a[b++]&63;65536>e?d+=String.fromCharCode(e):(e-=65536,d+=String.fromCharCode(55296|e>>10,56320|e&1023))}}else d+=String.fromCharCode(e)}return d}function E(a,b){return a?ta(D,a,b):""}
function C(a,b,c,d){if(!(0<d))return 0;var e=c;d=c+d-1;for(var k=0;k<a.length;++k){var g=a.charCodeAt(k);if(55296<=g&&57343>=g){var m=a.charCodeAt(++k);g=65536+((g&1023)<<10)|m&1023}if(127>=g){if(c>=d)break;b[c++]=g}else{if(2047>=g){if(c+1>=d)break;b[c++]=192|g>>6}else{if(65535>=g){if(c+2>=d)break;b[c++]=224|g>>12}else{if(c+3>=d)break;b[c++]=240|g>>18;b[c++]=128|g>>12&63}b[c++]=128|g>>6&63}b[c++]=128|g&63}}b[c]=0;return c-e}
function ua(a){for(var b=0,c=0;c<a.length;++c){var d=a.charCodeAt(c);55296<=d&&57343>=d&&(d=65536+((d&1023)<<10)|a.charCodeAt(++c)&1023);127>=d?++b:b=2047>=d?b+2:65535>=d?b+3:b+4}return b}function va(a){var b=ua(a)+1,c=A(b);C(a,pa,c,b);return c}var wa,pa,D,xa,ya,F,za,G,H;
function Aa(){var a=la.buffer;wa=a;f.HEAP8=pa=new Int8Array(a);f.HEAP16=xa=new Int16Array(a);f.HEAP32=F=new Int32Array(a);f.HEAPU8=D=new Uint8Array(a);f.HEAPU16=ya=new Uint16Array(a);f.HEAPU32=za=new Uint32Array(a);f.HEAPF32=G=new Float32Array(a);f.HEAPF64=H=new Float64Array(a)}var I,Ba=[],Ca=[],Da=[],Ea=[],Fa=[];Ca.push({xc:function(){Ga()}});function Ha(){var a=f.preRun.shift();Ba.unshift(a)}var J=0,Ia=null,K=null;f.preloadedImages={};f.preloadedAudios={};
function x(a){if(f.onAbort)f.onAbort(a);y(a);ma=!0;throw new WebAssembly.RuntimeError("abort("+a+"). Build with -s ASSERTIONS=1 for more info.");}function Ja(a){var b=L;return String.prototype.startsWith?b.startsWith(a):0===b.indexOf(a)}function Ka(){return Ja("data:application/octet-stream;base64,")}var L="shadows-sapp-ui.wasm";if(!Ka()){var La=L;L=f.locateFile?f.locateFile(La,v):v+La}
function Ma(){var a=L;try{if(a==L&&z)return new Uint8Array(z);if(w)return w(a);throw"both async and sync fetching of the wasm failed";}catch(b){x(b)}}
function Na(){if(!z&&(ba||u)){if("function"===typeof fetch&&!Ja("file://"))return fetch(L,{credentials:"same-origin"}).then(function(a){if(!a.ok)throw"failed to load wasm binary file at '"+L+"'";return a.arrayBuffer()}).catch(function(){return Ma()});if(fa)return new Promise(function(a,b){fa(L,function(c){a(new Uint8Array(c))},b)})}return Promise.resolve().then(function(){return Ma()})}
function Oa(a){for(;0<a.length;){var b=a.shift();if("function"==typeof b)b(f);else{var c=b.xc;"number"===typeof c?void 0===b.fc?I.get(c)():I.get(c)(b.fc):c(void 0===b.fc?null:b.fc)}}}var Pa=[null,[],[]],Qa={},Ra=0;function Sa(){for(var a=M.length-1;0<=a;--a)Ta(a);M=[];Ua=[]}var Ua=[];function Va(){if(Ra&&Wa.dc)for(var a=0;a<Ua.length;++a){var b=Ua[a];Ua.splice(a,1);--a;b.Qc.apply(null,b.Cc)}}var M=[];function Ta(a){var b=M[a];b.target.removeEventListener(b.Wb,b.vc,b.Xb);M.splice(a,1)}
function N(a){function b(d){++Ra;Wa=a;Va();a.Zb(d);Va();--Ra}if(a.Yb)a.vc=b,a.target.addEventListener(a.Wb,b,a.Xb),M.push(a),Xa||(Ea.push(Sa),Xa=!0);else for(var c=0;c<M.length;++c)M[c].target==a.target&&M[c].Wb==a.Wb&&Ta(c--)}var Xa,Wa,Ya,Za,$a,ab,bb,cb,db=[0,"undefined"!==typeof document?document:0,"undefined"!==typeof window?window:0];function O(a){a=2<a?E(a):a;return db[a]||("undefined"!==typeof document?document.querySelector(a):void 0)}
function eb(a){return 0>db.indexOf(a)?a.getBoundingClientRect():{left:0,top:0}}function fb(a,b,c,d,e,k){Ya||(Ya=P(164));a={target:O(a),dc:!0,Wb:k,Yb:d,Zb:function(g){var m=Ya,n=m>>2;F[n]=g.location;F[n+1]=g.ctrlKey;F[n+2]=g.shiftKey;F[n+3]=g.altKey;F[n+4]=g.metaKey;F[n+5]=g.repeat;F[n+6]=g.charCode;F[n+7]=g.keyCode;F[n+8]=g.which;C(g.key||"",D,m+36,32);C(g.code||"",D,m+68,32);C(g.char||"",D,m+100,32);C(g.locale||"",D,m+132,32);I.get(d)(e,m,b)&&g.preventDefault()},Xb:c};N(a)}
function gb(a,b,c){a>>=2;F[a]=b.screenX;F[a+1]=b.screenY;F[a+2]=b.clientX;F[a+3]=b.clientY;F[a+4]=b.ctrlKey;F[a+5]=b.shiftKey;F[a+6]=b.altKey;F[a+7]=b.metaKey;xa[2*a+16]=b.button;xa[2*a+17]=b.buttons;F[a+9]=b.movementX;F[a+10]=b.movementY;c=eb(c);F[a+11]=b.clientX-c.left;F[a+12]=b.clientY-c.top}function hb(a,b,c,d,e,k){Za||(Za=P(64));a=O(a);N({target:a,dc:"mousemove"!=k&&"mouseenter"!=k&&"mouseleave"!=k,Wb:k,Yb:d,Zb:function(g){g=g||event;gb(Za,g,a);I.get(d)(e,Za,b)&&g.preventDefault()},Xb:c})}
function ib(a,b,c,d,e){$a||($a=P(260));N({target:a,Wb:e,Yb:d,Zb:function(k){k=k||event;var g=$a,m=document.pointerLockElement||document.ic||document.kc||document.jc;F[g>>2]=!!m;var n=m&&m.id?m.id:"";C(m?m==window?"#window":m==screen?"#screen":m&&m.nodeName?m.nodeName:"":"",D,g+4,128);C(n,D,g+132,128);I.get(d)(20,g,b)&&k.preventDefault()},Xb:c})}function jb(a,b,c,d,e){N({target:a,Wb:e,Yb:d,Zb:function(k){k=k||event;I.get(d)(38,0,b)&&k.preventDefault()},Xb:c})}
function kb(a,b,c,d){ab||(ab=P(36));a=O(a);N({target:a,Wb:"resize",Yb:d,Zb:function(e){e=e||event;if(e.target==a){var k=document.body;if(k){var g=ab;F[g>>2]=e.detail;F[g+4>>2]=k.clientWidth;F[g+8>>2]=k.clientHeight;F[g+12>>2]=innerWidth;F[g+16>>2]=innerHeight;F[g+20>>2]=outerWidth;F[g+24>>2]=outerHeight;F[g+28>>2]=pageXOffset;F[g+32>>2]=pageYOffset;I.get(d)(10,g,b)&&e.preventDefault()}}},Xb:c})}
function lb(a,b,c,d,e,k){bb||(bb=P(1684));a=O(a);N({target:a,dc:"touchstart"==k||"touchend"==k,Wb:k,Yb:d,Zb:function(g){for(var m={},n=g.touches,p=0;p<n.length;++p){var q=n[p];m[q.identifier]=q}n=g.changedTouches;for(p=0;p<n.length;++p)q=n[p],q.zc=1,m[q.identifier]=q;n=g.targetTouches;for(p=0;p<n.length;++p)m[n[p].identifier].Ac=1;n=bb;q=n>>2;F[q+1]=g.ctrlKey;F[q+2]=g.shiftKey;F[q+3]=g.altKey;F[q+4]=g.metaKey;q+=5;var pb=eb(a),qb=0;for(p in m){var B=m[p];F[q]=B.identifier;F[q+1]=B.screenX;F[q+2]=
B.screenY;F[q+3]=B.clientX;F[q+4]=B.clientY;F[q+5]=B.pageX;F[q+6]=B.pageY;F[q+7]=B.zc;F[q+8]=B.Ac;F[q+9]=B.clientX-pb.left;F[q+10]=B.clientY-pb.top;q+=13;if(31<++qb)break}F[n>>2]=qb;I.get(d)(e,n,b)&&g.preventDefault()},Xb:c})}function mb(a,b,c,d,e,k){a={target:O(a),Wb:k,Yb:d,Zb:function(g){g=g||event;I.get(d)(e,0,b)&&g.preventDefault()},Xb:c};N(a)}
function nb(a,b,c,d){cb||(cb=P(96));N({target:a,dc:!0,Wb:"wheel",Yb:d,Zb:function(e){e=e||event;var k=cb;gb(k,e,a);H[k+64>>3]=e.deltaX;H[k+72>>3]=e.deltaY;H[k+80>>3]=e.deltaZ;F[k+88>>2]=e.deltaMode;I.get(d)(9,k,b)&&e.preventDefault()},Xb:c})}
function ob(a){var b=a.getExtension("ANGLE_instanced_arrays");b&&(a.vertexAttribDivisor=function(c,d){b.vertexAttribDivisorANGLE(c,d)},a.drawArraysInstanced=function(c,d,e,k){b.drawArraysInstancedANGLE(c,d,e,k)},a.drawElementsInstanced=function(c,d,e,k,g){b.drawElementsInstancedANGLE(c,d,e,k,g)})}
function rb(a){var b=a.getExtension("OES_vertex_array_object");b&&(a.createVertexArray=function(){return b.createVertexArrayOES()},a.deleteVertexArray=function(c){b.deleteVertexArrayOES(c)},a.bindVertexArray=function(c){b.bindVertexArrayOES(c)},a.isVertexArray=function(c){return b.isVertexArrayOES(c)})}function sb(a){var b=a.getExtension("WEBGL_draw_buffers");b&&(a.drawBuffers=function(c,d){b.drawBuffersWEBGL(c,d)})}
function tb(a){a.Ec=a.getExtension("WEBGL_draw_instanced_base_vertex_base_instance")}function ub(a){a.Jc=a.getExtension("WEBGL_multi_draw_instanced_base_vertex_base_instance")}function vb(a){a.Lc=a.getExtension("WEBGL_multi_draw")}var wb=1,xb=[],Q=[],yb=[],zb=[],R=[],S=[],T=[],Ab=[],Bb=[],Cb={},Db={},Eb={};function U(a){Fb||(Fb=a)}function V(a){for(var b=wb++,c=a.length;c<b;c++)a[c]=null;return b}
function Gb(a){a||(a=W);if(!a.yc){a.yc=!0;var b=a.ec;ob(b);rb(b);sb(b);tb(b);ub(b);b.Fc=b.getExtension("EXT_disjoint_timer_query");vb(b);(b.getSupportedExtensions()||[]).forEach(function(c){0>c.indexOf("lose_context")&&0>c.indexOf("debug")&&b.getExtension(c)})}}var Fb,W,Hb=["default","low-power","high-performance"],Ib=[];function Jb(a,b,c,d){for(var e=0;e<a;e++){var k=X[c](),g=k&&V(d);k?(k.name=g,d[g]=k):U(1282);F[b+4*e>>2]=g}}
function Kb(a,b){if(b){var c=void 0;switch(a){case 36346:c=1;break;case 36344:return;case 34814:case 36345:c=0;break;case 34466:var d=X.getParameter(34467);c=d?d.length:0;break;case 33309:if(2>W.version){U(1282);return}c=2*(X.getSupportedExtensions()||[]).length;break;case 33307:case 33308:if(2>W.version){U(1280);return}c=33307==a?3:0}if(void 0===c)switch(d=X.getParameter(a),typeof d){case "number":c=d;break;case "boolean":c=d?1:0;break;case "string":U(1280);return;case "object":if(null===d)switch(a){case 34964:case 35725:case 34965:case 36006:case 36007:case 32873:case 34229:case 36662:case 36663:case 35053:case 35055:case 36010:case 35097:case 35869:case 32874:case 36389:case 35983:case 35368:case 34068:c=
0;break;default:U(1280);return}else{if(d instanceof Float32Array||d instanceof Uint32Array||d instanceof Int32Array||d instanceof Array){for(a=0;a<d.length;++a)F[b+4*a>>2]=d[a];return}try{c=d.name|0}catch(e){U(1280);y("GL_INVALID_ENUM in glGet0v: Unknown object returned from WebGL getParameter("+a+")! (error: "+e+")");return}}break;default:U(1280);y("GL_INVALID_ENUM in glGet0v: Native code calling glGet0v("+a+") and it returns "+d+" of type "+typeof d+"!");return}F[b>>2]=c}else U(1281)}
function Lb(a){var b=ua(a)+1,c=P(b);C(a,D,c,b);return c}function Mb(a){a-=5120;return 0==a?pa:1==a?D:2==a?xa:4==a?F:6==a?G:5==a||28922==a||28520==a||30779==a||30782==a?za:ya}function Nb(a,b,c,d,e){a=Mb(a);var k=31-Math.clz32(a.BYTES_PER_ELEMENT);return a.subarray(e>>k,e+d*(c*({5:3,6:4,8:2,29502:3,29504:4,26917:2,26918:2,29846:3,29847:4}[b-6402]||1)*(1<<k)+4-1&-4)>>k)}for(var Y=[],X,Z=0;32>Z;++Z)Ib.push(Array(Z));var Ob=new Float32Array(288);for(Z=0;288>Z;++Z)Y[Z]=Ob.subarray(0,Z+1);
var Tb={na:function(){return 0},ib:function(){return 0},kb:function(){},$:function(){return"number"===typeof devicePixelRatio&&devicePixelRatio||1},xa:function(a,b,c){a=O(a);if(!a)return-4;a=eb(a);H[b>>3]=a.width;H[c>>3]=a.height;return 0},fb:function(a,b,c){D.copyWithin(a,b,b+c)},Ta:function(a,b){function c(d){I.get(a)(d,b)&&requestAnimationFrame(c)}return requestAnimationFrame(c)},gb:function(a){var b=D.length;if(2147483648<a)return!1;for(var c=1;4>=c;c*=2){var d=b*(1+.2/c);d=Math.min(d,a+100663296);
d=Math.max(a,d);0<d%65536&&(d+=65536-d%65536);a:{try{la.grow(Math.min(2147483648,d)-wa.byteLength+65535>>>16);Aa();var e=1;break a}catch(k){}e=void 0}if(e)return!0}return!1},_:function(a,b,c){a=O(a);if(!a)return-4;a.width=b;a.height=c;return 0},ka:function(a,b,c,d){fb(a,b,c,d,2,"keydown");return 0},ia:function(a,b,c,d){fb(a,b,c,d,1,"keypress");return 0},ja:function(a,b,c,d){fb(a,b,c,d,3,"keyup");return 0},wa:function(a,b,c,d){hb(a,b,c,d,5,"mousedown");return 0},oa:function(a,b,c,d){hb(a,b,c,d,33,
"mouseenter");return 0},ma:function(a,b,c,d){hb(a,b,c,d,34,"mouseleave");return 0},ra:function(a,b,c,d){hb(a,b,c,d,8,"mousemove");return 0},ua:function(a,b,c,d){hb(a,b,c,d,6,"mouseup");return 0},da:function(a,b,c,d){if(!document||!document.body||!(document.body.requestPointerLock||document.body.ic||document.body.kc||document.body.jc))return-1;a=O(a);if(!a)return-4;ib(a,b,c,d,"pointerlockchange");ib(a,b,c,d,"mozpointerlockchange");ib(a,b,c,d,"webkitpointerlockchange");ib(a,b,c,d,"mspointerlockchange");
return 0},ca:function(a,b,c,d){if(!document||!(document.body.requestPointerLock||document.body.ic||document.body.kc||document.body.jc))return-1;a=O(a);if(!a)return-4;jb(a,b,c,d,"pointerlockerror");jb(a,b,c,d,"mozpointerlockerror");jb(a,b,c,d,"webkitpointerlockerror");jb(a,b,c,d,"mspointerlockerror");return 0},db:function(a,b,c,d){kb(a,b,c,d);return 0},ea:function(a,b,c,d){lb(a,b,c,d,25,"touchcancel");return 0},fa:function(a,b,c,d){lb(a,b,c,d,23,"touchend");return 0},ga:function(a,b,c,d){lb(a,b,c,
d,24,"touchmove");return 0},ha:function(a,b,c,d){lb(a,b,c,d,22,"touchstart");return 0},ba:function(a,b,c,d){mb(a,b,c,d,31,"webglcontextlost");return 0},aa:function(a,b,c,d){mb(a,b,c,d,32,"webglcontextrestored");return 0},la:function(a,b,c,d){a=O(a);return"undefined"!==typeof a.onwheel?(nb(a,b,c,d),0):-1},O:function(a,b){b>>=2;b={alpha:!!F[b],depth:!!F[b+1],stencil:!!F[b+2],antialias:!!F[b+3],premultipliedAlpha:!!F[b+4],preserveDrawingBuffer:!!F[b+5],powerPreference:Hb[F[b+6]],failIfMajorPerformanceCaveat:!!F[b+
7],nc:F[b+8],Kc:F[b+9],mc:F[b+10],wc:F[b+11],Mc:F[b+12],Nc:F[b+13]};a=O(a);if(!a||b.wc)b=0;else if(a=1<b.nc?a.getContext("webgl2",b):a.getContext("webgl",b)){var c=V(Bb),d={Ic:c,attributes:b,version:b.nc,ec:a};a.canvas&&(a.canvas.Bc=d);Bb[c]=d;("undefined"===typeof b.mc||b.mc)&&Gb(d);b=c}else b=0;return b},Da:function(a,b){a=Bb[a];b=E(b);0==b.indexOf("GL_")&&(b=b.substr(3));"ANGLE_instanced_arrays"==b&&ob(X);"OES_vertex_array_object"==b&&rb(X);"WEBGL_draw_buffers"==b&&sb(X);"WEBGL_draw_instanced_base_vertex_base_instance"==
b&&tb(X);"WEBGL_multi_draw_instanced_base_vertex_base_instance"==b&&ub(X);"WEBGL_multi_draw"==b&&vb(X);return!!a.ec.getExtension(b)},Oa:function(a){a>>=2;for(var b=0;14>b;++b)F[a+b]=0;F[a]=F[a+1]=F[a+3]=F[a+4]=F[a+8]=F[a+10]=1},Ja:function(a){W=Bb[a];f.Dc=X=W&&W.ec;return!a||X?0:-5},pa:function(){return 0},hb:function(a,b,c,d){a=Qa.Hc(a);b=Qa.Gc(a,b,c);F[d>>2]=b;return 0},eb:function(){},jb:function(a,b,c,d){for(var e=0,k=0;k<c;k++){for(var g=F[b+8*k>>2],m=F[b+(8*k+4)>>2],n=0;n<m;n++){var p=D[g+n],
q=Pa[a];0===p||10===p?((1===a?ka:y)(ta(q,0)),q.length=0):q.push(p)}e+=m}F[d>>2]=e;return 0},b:function(a){X.activeTexture(a)},J:function(a,b){X.attachShader(Q[a],T[b])},d:function(a,b){35051==a?X.lc=b:35052==a&&(X.$b=b);X.bindBuffer(a,xb[b])},e:function(a,b){X.bindFramebuffer(a,yb[b])},M:function(a,b){X.bindRenderbuffer(a,zb[b])},a:function(a,b){X.bindTexture(a,R[b])},Y:function(a){X.bindVertexArray(Ab[a])},U:function(a,b,c,d){X.blendColor(a,b,c,d)},V:function(a,b){X.blendEquationSeparate(a,b)},W:function(a,
b,c,d){X.blendFuncSeparate(a,b,c,d)},v:function(a,b,c,d,e,k,g,m,n,p){X.blitFramebuffer(a,b,c,d,e,k,g,m,n,p)},P:function(a,b,c,d){2<=W.version?c?X.bufferData(a,D,d,c,b):X.bufferData(a,b,d):X.bufferData(a,c?D.subarray(c,c+b):b,d)},A:function(a,b,c,d){2<=W.version?X.bufferSubData(a,b,D,d,c):X.bufferSubData(a,b,D.subarray(d,d+c))},q:function(a){return X.checkFramebufferStatus(a)},xb:function(a){X.clear(a)},wb:function(a,b,c,d){X.clearBufferfi(a,b,c,d)},va:function(a,b,c){X.clearBufferfv(a,b,G,c>>2)},
vb:function(a,b,c){X.clearBufferiv(a,b,F,c>>2)},Ab:function(a,b,c,d){X.clearColor(a,b,c,d)},zb:function(a){X.clearDepth(a)},yb:function(a){X.clearStencil(a)},n:function(a,b,c,d){X.colorMask(!!a,!!b,!!c,!!d)},Aa:function(a){X.compileShader(T[a])},La:function(a,b,c,d,e,k,g,m){2<=W.version?X.$b?X.compressedTexImage2D(a,b,c,d,e,k,g,m):X.compressedTexImage2D(a,b,c,d,e,k,D,m,g):X.compressedTexImage2D(a,b,c,d,e,k,m?D.subarray(m,m+g):null)},Ia:function(a,b,c,d,e,k,g,m,n){X.$b?X.compressedTexImage3D(a,b,c,
d,e,k,g,m,n):X.compressedTexImage3D(a,b,c,d,e,k,g,D,n,m)},Ga:function(){var a=V(Q),b=X.createProgram();b.name=a;Q[a]=b;return a},Ca:function(a){var b=V(T);T[b]=X.createShader(a);return b},R:function(a){X.cullFace(a)},Va:function(a,b){for(var c=0;c<a;c++){var d=F[b+4*c>>2],e=xb[d];e&&(X.deleteBuffer(e),e.name=0,xb[d]=null,d==X.lc&&(X.lc=0),d==X.$b&&(X.$b=0))}},l:function(a,b){for(var c=0;c<a;++c){var d=F[b+4*c>>2],e=yb[d];e&&(X.deleteFramebuffer(e),e.name=0,yb[d]=null)}},E:function(a){if(a){var b=
Q[a];b?(X.deleteProgram(b),b.name=0,Q[a]=null,Cb[a]=null):U(1281)}},Z:function(a,b){for(var c=0;c<a;c++){var d=F[b+4*c>>2],e=zb[d];e&&(X.deleteRenderbuffer(e),e.name=0,zb[d]=null)}},z:function(a){if(a){var b=T[a];b?(X.deleteShader(b),T[a]=null):U(1281)}},Ua:function(a,b){for(var c=0;c<a;c++){var d=F[b+4*c>>2],e=R[d];e&&(X.deleteTexture(e),e.name=0,R[d]=null)}},Sa:function(a,b){for(var c=0;c<a;c++){var d=F[b+4*c>>2];X.deleteVertexArray(Ab[d]);Ab[d]=null}},D:function(a){X.depthFunc(a)},C:function(a){X.depthMask(!!a)},
g:function(a){X.disable(a)},X:function(a){X.disableVertexAttribArray(a)},lb:function(a,b,c){X.drawArrays(a,b,c)},p:function(a,b){for(var c=Ib[a],d=0;d<a;d++)c[d]=F[b+4*d>>2];X.drawBuffers(c)},mb:function(a,b,c,d){X.drawElements(a,b,c,d)},i:function(a){X.enable(a)},sb:function(a){X.enableVertexAttribArray(a)},k:function(a,b,c,d){X.framebufferRenderbuffer(a,b,c,zb[d])},c:function(a,b,c,d,e){X.framebufferTexture2D(a,b,c,R[d],e)},j:function(a,b,c,d,e){X.framebufferTextureLayer(a,b,R[c],d,e)},S:function(a){X.frontFace(a)},
Q:function(a,b){Jb(a,b,"createBuffer",xb)},m:function(a,b){Jb(a,b,"createFramebuffer",yb)},N:function(a,b){Jb(a,b,"createRenderbuffer",zb)},Ma:function(a,b){Jb(a,b,"createTexture",R)},Ra:function(a,b){Jb(a,b,"createVertexArray",Ab)},ya:function(a,b){return X.getAttribLocation(Q[a],E(b))},f:function(a,b){Kb(a,b)},Ea:function(a,b,c,d){a=X.getProgramInfoLog(Q[a]);null===a&&(a="(unknown error)");b=0<b&&d?C(a,D,d,b):0;c&&(F[c>>2]=b)},I:function(a,b,c){if(c)if(a>=wb)U(1281);else{var d=Cb[a];if(d)if(35716==
b)a=X.getProgramInfoLog(Q[a]),null===a&&(a="(unknown error)"),F[c>>2]=a.length+1;else if(35719==b)F[c>>2]=d.hc;else if(35722==b){if(-1==d.ac){a=Q[a];var e=X.getProgramParameter(a,35721);for(b=d.ac=0;b<e;++b)d.ac=Math.max(d.ac,X.getActiveAttrib(a,b).name.length+1)}F[c>>2]=d.ac}else if(35381==b){if(-1==d.bc)for(a=Q[a],e=X.getProgramParameter(a,35382),b=d.bc=0;b<e;++b)d.bc=Math.max(d.bc,X.getActiveUniformBlockName(a,b).length+1);F[c>>2]=d.bc}else F[c>>2]=X.getProgramParameter(Q[a],b);else U(1282)}else U(1281)},
za:function(a,b,c,d){a=X.getShaderInfoLog(T[a]);null===a&&(a="(unknown error)");b=0<b&&d?C(a,D,d,b):0;c&&(F[c>>2]=b)},G:function(a,b,c){c?35716==b?(a=X.getShaderInfoLog(T[a]),null===a&&(a="(unknown error)"),F[c>>2]=a?a.length+1:0):35720==b?(a=X.getShaderSource(T[a]),F[c>>2]=a?a.length+1:0):F[c>>2]=X.getShaderParameter(T[a],b):U(1281)},Xa:function(a){if(Db[a])return Db[a];switch(a){case 7939:var b=X.getSupportedExtensions()||[];b=b.concat(b.map(function(d){return"GL_"+d}));b=Lb(b.join(" "));break;
case 7936:case 7937:case 37445:case 37446:(b=X.getParameter(a))||U(1280);b=Lb(b);break;case 7938:b=X.getParameter(7938);b=2<=W.version?"OpenGL ES 3.0 ("+b+")":"OpenGL ES 2.0 ("+b+")";b=Lb(b);break;case 35724:b=X.getParameter(35724);var c=b.match(/^WebGL GLSL ES ([0-9]\.[0-9][0-9]?)(?:$| .*)/);null!==c&&(3==c[1].length&&(c[1]+="0"),b="OpenGL ES GLSL ES "+c[1]+" ("+b+")");b=Lb(b);break;default:return U(1280),0}return Db[a]=b},Wa:function(a,b){if(2>W.version)return U(1282),0;var c=Eb[a];if(c)return 0>
b||b>=c.length?(U(1281),0):c[b];switch(a){case 7939:return c=X.getSupportedExtensions()||[],c=c.concat(c.map(function(d){return"GL_"+d})),c=c.map(function(d){return Lb(d)}),c=Eb[a]=c,0>b||b>=c.length?(U(1281),0):c[b];default:return U(1280),0}},r:function(a,b){b=E(b);var c=0;if("]"==b[b.length-1]){var d=b.lastIndexOf("[");c="]"!=b[d+1]?parseInt(b.slice(d+1)):0;b=b.slice(0,d)}return(a=Cb[a]&&Cb[a].uc[b])&&0<=c&&c<a[0]?a[1]+c:-1},Fa:function(a){X.linkProgram(Q[a]);var b=Q[a];a=Cb[a]={uc:{},hc:0,ac:-1,
bc:-1};for(var c=a.uc,d=X.getProgramParameter(b,35718),e=0;e<d;++e){var k=X.getActiveUniform(b,e),g=k.name;a.hc=Math.max(a.hc,g.length+1);"]"==g.slice(-1)&&(g=g.slice(0,g.lastIndexOf("[")));var m=X.getUniformLocation(b,g);if(m){var n=V(S);c[g]=[k.size,n];S[n]=m;for(var p=1;p<k.size;++p)m=X.getUniformLocation(b,g+"["+p+"]"),n=V(S),S[n]=m}}},T:function(a,b){X.polygonOffset(a,b)},w:function(a){X.readBuffer(a)},Na:function(a,b,c,d){X.renderbufferStorage(a,b,c,d)},L:function(a,b,c,d,e){X.renderbufferStorageMultisample(a,
b,c,d,e)},x:function(a,b,c,d){X.scissor(a,b,c,d)},Ba:function(a,b,c,d){for(var e="",k=0;k<b;++k){var g=d?F[d+4*k>>2]:-1;e+=E(F[c+4*k>>2],0>g?void 0:g)}X.shaderSource(T[a],e)},Qa:function(a,b,c){X.stencilFunc(a,b,c)},ta:function(a,b,c,d){X.stencilFuncSeparate(a,b,c,d)},B:function(a){X.stencilMask(a)},Pa:function(a,b,c){X.stencilOp(a,b,c)},sa:function(a,b,c,d){X.stencilOpSeparate(a,b,c,d)},Ka:function(a,b,c,d,e,k,g,m,n){if(2<=W.version)if(X.$b)X.texImage2D(a,b,c,d,e,k,g,m,n);else if(n){var p=Mb(m);
X.texImage2D(a,b,c,d,e,k,g,m,p,n>>31-Math.clz32(p.BYTES_PER_ELEMENT))}else X.texImage2D(a,b,c,d,e,k,g,m,null);else X.texImage2D(a,b,c,d,e,k,g,m,n?Nb(m,g,d,e,n):null)},Ha:function(a,b,c,d,e,k,g,m,n,p){if(X.$b)X.texImage3D(a,b,c,d,e,k,g,m,n,p);else if(p){var q=Mb(n);X.texImage3D(a,b,c,d,e,k,g,m,n,q,p>>31-Math.clz32(q.BYTES_PER_ELEMENT))}else X.texImage3D(a,b,c,d,e,k,g,m,n,null)},K:function(a,b,c){X.texParameterf(a,b,c)},h:function(a,b,c){X.texParameteri(a,b,c)},rb:function(a,b,c){if(2<=W.version)X.uniform1fv(S[a],
G,c>>2,b);else{if(288>=b)for(var d=Y[b-1],e=0;e<b;++e)d[e]=G[c+4*e>>2];else d=G.subarray(c>>2,c+4*b>>2);X.uniform1fv(S[a],d)}},H:function(a,b){X.uniform1i(S[a],b)},qb:function(a,b,c){if(2<=W.version)X.uniform2fv(S[a],G,c>>2,2*b);else{if(144>=b)for(var d=Y[2*b-1],e=0;e<2*b;e+=2)d[e]=G[c+4*e>>2],d[e+1]=G[c+(4*e+4)>>2];else d=G.subarray(c>>2,c+8*b>>2);X.uniform2fv(S[a],d)}},pb:function(a,b,c){if(2<=W.version)X.uniform3fv(S[a],G,c>>2,3*b);else{if(96>=b)for(var d=Y[3*b-1],e=0;e<3*b;e+=3)d[e]=G[c+4*e>>
2],d[e+1]=G[c+(4*e+4)>>2],d[e+2]=G[c+(4*e+8)>>2];else d=G.subarray(c>>2,c+12*b>>2);X.uniform3fv(S[a],d)}},ob:function(a,b,c){if(2<=W.version)X.uniform4fv(S[a],G,c>>2,4*b);else{if(72>=b){var d=Y[4*b-1],e=G;c>>=2;for(var k=0;k<4*b;k+=4){var g=c+k;d[k]=e[g];d[k+1]=e[g+1];d[k+2]=e[g+2];d[k+3]=e[g+3]}}else d=G.subarray(c>>2,c+16*b>>2);X.uniform4fv(S[a],d)}},nb:function(a,b,c,d){if(2<=W.version)X.uniformMatrix4fv(S[a],!!c,G,d>>2,16*b);else{if(18>=b){var e=Y[16*b-1],k=G;d>>=2;for(var g=0;g<16*b;g+=16){var m=
d+g;e[g]=k[m];e[g+1]=k[m+1];e[g+2]=k[m+2];e[g+3]=k[m+3];e[g+4]=k[m+4];e[g+5]=k[m+5];e[g+6]=k[m+6];e[g+7]=k[m+7];e[g+8]=k[m+8];e[g+9]=k[m+9];e[g+10]=k[m+10];e[g+11]=k[m+11];e[g+12]=k[m+12];e[g+13]=k[m+13];e[g+14]=k[m+14];e[g+15]=k[m+15]}}else e=G.subarray(d>>2,d+64*b>>2);X.uniformMatrix4fv(S[a],!!c,e)}},o:function(a){X.useProgram(Q[a])},tb:function(a,b){X.vertexAttribDivisor(a,b)},ub:function(a,b,c,d,e,k){X.vertexAttribPointer(a,b,c,!!d,e,k)},y:function(a,b,c,d){X.viewport(a,b,c,d)},cb:function(){f.oc=
function(a){0!=Pb()&&(a.preventDefault(),a.returnValue=" ")};window.addEventListener("beforeunload",f.oc)},bb:function(){f.tc=function(a){a=a.clipboardData.getData("text");oa("_sapp_emsc_onpaste",["string"],[a])};window.addEventListener("paste",f.tc)},ab:function(a){f.Oc=[];a=E(a);a=document.getElementById(a);f.pc=function(b){b.stopPropagation();b.preventDefault()};f.qc=function(b){b.stopPropagation();b.preventDefault()};f.rc=function(b){b.stopPropagation();b.preventDefault()};f.sc=function(b){b.stopPropagation();
b.preventDefault();var c=b.dataTransfer.files;f.Pc=c;Qb(c.length);var d;for(d=0;d<c.length;d++)oa("_sapp_emsc_drop",["number","string"],[d,c[d].name]);Rb(b.clientX,b.clientY)};a.addEventListener("dragenter",f.pc,!1);a.addEventListener("dragleave",f.qc,!1);a.addEventListener("dragover",f.rc,!1);a.addEventListener("drop",f.sc,!1)},u:function(){var a=document.createElement("input");a.type="text";a.id="_sokol_app_input_element";a.autocapitalize="none";a.addEventListener("focusout",function(){Sb()});document.body.append(a)},
t:function(){document.getElementById("_sokol_app_input_element").focus()},Bb:function(a){a=E(a);f.cc=document.getElementById(a);f.cc||console.log("sokol_app.h: invalid target:"+a);f.cc.requestPointerLock||console.log("sokol_app.h: target doesn't support requestPointerLock:"+a)},$a:function(){window.removeEventListener("beforeunload",f.oc)},_a:function(){window.removeEventListener("paste",f.tc)},Za:function(a){a=E(a);a=document.getElementById(a);a.removeEventListener("dragenter",f.pc);a.removeEventListener("dragleave",
f.qc);a.removeEventListener("dragover",f.rc);a.removeEventListener("drop",f.sc)},F:function(){f.cc&&f.cc.requestPointerLock&&f.cc.requestPointerLock()},s:function(){document.getElementById("_sokol_app_input_element").blur()},Ya:function(a){a=E(a);var b=document.createElement("textarea");b.setAttribute("autocomplete","off");b.setAttribute("autocorrect","off");b.setAttribute("autocapitalize","off");b.setAttribute("spellcheck","false");b.style.left="-100px";b.style.top="-100px";b.style.height=1;b.style.width=
1;b.value=a;document.body.appendChild(b);b.select();document.execCommand("copy");document.body.removeChild(b)},qa:function(){return navigator.userAgent.includes("Macintosh")?1:0}};
(function(){function a(e){f.asm=e.exports;la=f.asm.Cb;Aa();I=f.asm.Vb;J--;f.monitorRunDependencies&&f.monitorRunDependencies(J);0==J&&(null!==Ia&&(clearInterval(Ia),Ia=null),K&&(e=K,K=null,e()))}function b(e){a(e.instance)}function c(e){return Na().then(function(k){return WebAssembly.instantiate(k,d)}).then(e,function(k){y("failed to asynchronously prepare wasm: "+k);x(k)})}var d={a:Tb};J++;f.monitorRunDependencies&&f.monitorRunDependencies(J);if(f.instantiateWasm)try{return f.instantiateWasm(d,a)}catch(e){return y("Module.instantiateWasm callback failed with error: "+
e),!1}(function(){return z||"function"!==typeof WebAssembly.instantiateStreaming||Ka()||Ja("file://")||"function"!==typeof fetch?c(b):fetch(L,{credentials:"same-origin"}).then(function(e){return WebAssembly.instantiateStreaming(e,d).then(b,function(k){y("wasm streaming compile failed: "+k);y("falling back to ArrayBuffer instantiation");return c(b)})})})();return{}})();
var Ga=f.___wasm_call_ctors=function(){return(Ga=f.___wasm_call_ctors=f.asm.Db).apply(null,arguments)},Sb=f.__sapp_emsc_notify_keyboard_hidden=function(){return(Sb=f.__sapp_emsc_notify_keyboard_hidden=f.asm.Eb).apply(null,arguments)};f.__sapp_emsc_onpaste=function(){return(f.__sapp_emsc_onpaste=f.asm.Fb).apply(null,arguments)};
var Pb=f.__sapp_html5_get_ask_leave_site=function(){return(Pb=f.__sapp_html5_get_ask_leave_site=f.asm.Gb).apply(null,arguments)},Qb=f.__sapp_emsc_begin_drop=function(){return(Qb=f.__sapp_emsc_begin_drop=f.asm.Hb).apply(null,arguments)};f.__sapp_emsc_drop=function(){return(f.__sapp_emsc_drop=f.asm.Ib).apply(null,arguments)};var Rb=f.__sapp_emsc_end_drop=function(){return(Rb=f.__sapp_emsc_end_drop=f.asm.Jb).apply(null,arguments)};
f.__sapp_emsc_invoke_fetch_cb=function(){return(f.__sapp_emsc_invoke_fetch_cb=f.asm.Kb).apply(null,arguments)};f._main=function(){return(f._main=f.asm.Lb).apply(null,arguments)};f.__saudio_emsc_pull=function(){return(f.__saudio_emsc_pull=f.asm.Mb).apply(null,arguments)};f.__sfetch_emsc_head_response=function(){return(f.__sfetch_emsc_head_response=f.asm.Nb).apply(null,arguments)};f.__sfetch_emsc_get_response=function(){return(f.__sfetch_emsc_get_response=f.asm.Ob).apply(null,arguments)};
f.__sfetch_emsc_failed_http_status=function(){return(f.__sfetch_emsc_failed_http_status=f.asm.Pb).apply(null,arguments)};f.__sfetch_emsc_failed_buffer_too_small=function(){return(f.__sfetch_emsc_failed_buffer_too_small=f.asm.Qb).apply(null,arguments)};
var P=f._malloc=function(){return(P=f._malloc=f.asm.Rb).apply(null,arguments)},qa=f.stackSave=function(){return(qa=f.stackSave=f.asm.Sb).apply(null,arguments)},ra=f.stackRestore=function(){return(ra=f.stackRestore=f.asm.Tb).apply(null,arguments)},A=f.stackAlloc=function(){return(A=f.stackAlloc=f.asm.Ub).apply(null,arguments)},Ub;function ja(a){this.name="ExitStatus";this.message="Program terminated with exit("+a+")";this.status=a}K=function Vb(){Ub||Wb();Ub||(K=Vb)};
function Wb(a){function b(){if(!Ub&&(Ub=!0,f.calledRun=!0,!ma)){Oa(Ca);Oa(Da);if(f.onRuntimeInitialized)f.onRuntimeInitialized();if(Xb){var c=a,d=f._main;c=c||[];var e=c.length+1,k=A(4*(e+1));F[k>>2]=va(aa);for(var g=1;g<e;g++)F[(k>>2)+g]=va(c[g-1]);F[(k>>2)+e]=0;try{var m=d(e,k);if(!noExitRuntime||0!==m){if(!noExitRuntime){if(f.onExit)f.onExit(m);ma=!0}t(m,new ja(m))}}catch(n){n instanceof ja||("unwind"==n?noExitRuntime=!0:((c=n)&&"object"===typeof n&&n.stack&&(c=[n,n.stack]),y("exception thrown: "+
c),t(1,n)))}finally{}}if(f.postRun)for("function"==typeof f.postRun&&(f.postRun=[f.postRun]);f.postRun.length;)c=f.postRun.shift(),Fa.unshift(c);Oa(Fa)}}a=a||r;if(!(0<J)){if(f.preRun)for("function"==typeof f.preRun&&(f.preRun=[f.preRun]);f.preRun.length;)Ha();Oa(Ba);0<J||(f.setStatus?(f.setStatus("Running..."),setTimeout(function(){setTimeout(function(){f.setStatus("")},1);b()},1)):b())}}f.run=Wb;if(f.preInit)for("function"==typeof f.preInit&&(f.preInit=[f.preInit]);0<f.preInit.length;)f.preInit.pop()();
var Xb=!0;f.noInitialRun&&(Xb=!1);Wb();