
var g;g||(g=typeof Module !== 'undefined' ? Module : {});var aa=Object.assign({},g),ba=[],ca="./this.program",h=(a,b)=>{throw b;},da="object"==typeof window,l="function"==typeof importScripts,ea="object"==typeof process&&"object"==typeof process.versions&&"string"==typeof process.versions.node,q="",fa,ha,ia;
if(ea){q=l?require("path").dirname(q)+"/":__dirname+"/";var fs,ja;"function"===typeof require&&(fs=require("fs"),ja=require("path"));fa=(a,b)=>{a=ja.normalize(a);return fs.readFileSync(a,b?void 0:"utf8")};ia=a=>{a=fa(a,!0);a.buffer||(a=new Uint8Array(a));return a};ha=(a,b,c)=>{a=ja.normalize(a);fs.readFile(a,function(d,e){d?c(d):b(e.buffer)})};1<process.argv.length&&(ca=process.argv[1].replace(/\\/g,"/"));ba=process.argv.slice(2);"undefined"!=typeof module&&(module.exports=g);process.on("uncaughtException",
function(a){if(!(a instanceof ka))throw a;});process.on("unhandledRejection",function(a){throw a;});h=(a,b)=>{if(noExitRuntime)throw process.exitCode=a,b;b instanceof ka||t("exiting due to exception: "+b);process.exit(a)};g.inspect=function(){return"[Emscripten Module object]"}}else if(da||l)l?q=self.location.href:"undefined"!=typeof document&&document.currentScript&&(q=document.currentScript.src),q=0!==q.indexOf("blob:")?q.substr(0,q.replace(/[?#].*/,"").lastIndexOf("/")+1):"",fa=a=>{var b=new XMLHttpRequest;
b.open("GET",a,!1);b.send(null);return b.responseText},l&&(ia=a=>{var b=new XMLHttpRequest;b.open("GET",a,!1);b.responseType="arraybuffer";b.send(null);return new Uint8Array(b.response)}),ha=(a,b,c)=>{var d=new XMLHttpRequest;d.open("GET",a,!0);d.responseType="arraybuffer";d.onload=()=>{200==d.status||0==d.status&&d.response?b(d.response):c()};d.onerror=c;d.send(null)};var la=g.print||console.log.bind(console),t=g.printErr||console.warn.bind(console);Object.assign(g,aa);aa=null;g.arguments&&(ba=g.arguments);
g.thisProgram&&(ca=g.thisProgram);g.quit&&(h=g.quit);var u;g.wasmBinary&&(u=g.wasmBinary);var noExitRuntime=g.noExitRuntime||!0;"object"!=typeof WebAssembly&&ma("no native wasm support detected");var na,oa=!1,pa="undefined"!=typeof TextDecoder?new TextDecoder("utf8"):void 0;
function qa(a,b,c){var d=b+c;for(c=b;a[c]&&!(c>=d);)++c;if(16<c-b&&a.buffer&&pa)return pa.decode(a.subarray(b,c));for(d="";b<c;){var e=a[b++];if(e&128){var k=a[b++]&63;if(192==(e&224))d+=String.fromCharCode((e&31)<<6|k);else{var f=a[b++]&63;e=224==(e&240)?(e&15)<<12|k<<6|f:(e&7)<<18|k<<12|f<<6|a[b++]&63;65536>e?d+=String.fromCharCode(e):(e-=65536,d+=String.fromCharCode(55296|e>>10,56320|e&1023))}}else d+=String.fromCharCode(e)}return d}function v(a,b){return a?qa(x,a,b):""}
function y(a,b,c,d){if(!(0<d))return 0;var e=c;d=c+d-1;for(var k=0;k<a.length;++k){var f=a.charCodeAt(k);if(55296<=f&&57343>=f){var m=a.charCodeAt(++k);f=65536+((f&1023)<<10)|m&1023}if(127>=f){if(c>=d)break;b[c++]=f}else{if(2047>=f){if(c+1>=d)break;b[c++]=192|f>>6}else{if(65535>=f){if(c+2>=d)break;b[c++]=224|f>>12}else{if(c+3>=d)break;b[c++]=240|f>>18;b[c++]=128|f>>12&63}b[c++]=128|f>>6&63}b[c++]=128|f&63}}b[c]=0;return c-e}
function ra(a){for(var b=0,c=0;c<a.length;++c){var d=a.charCodeAt(c);127>=d?b++:2047>=d?b+=2:55296<=d&&57343>=d?(b+=4,++c):b+=3}return b}var sa,ta,x,ua,va,z,A,B,C;function wa(){var a=na.buffer;sa=a;g.HEAP8=ta=new Int8Array(a);g.HEAP16=ua=new Int16Array(a);g.HEAP32=z=new Int32Array(a);g.HEAPU8=x=new Uint8Array(a);g.HEAPU16=va=new Uint16Array(a);g.HEAPU32=A=new Uint32Array(a);g.HEAPF32=B=new Float32Array(a);g.HEAPF64=C=new Float64Array(a)}var xa,ya=[],za=[],Aa=[],Ba=[],Ca=[];
function Da(){var a=g.preRun.shift();ya.unshift(a)}var D=0,Ea=null,E=null;function ma(a){if(g.onAbort)g.onAbort(a);a="Aborted("+a+")";t(a);oa=!0;throw new WebAssembly.RuntimeError(a+". Build with -sASSERTIONS for more info.");}function Fa(){return F.startsWith("data:application/octet-stream;base64,")}var F;F="spine-contexts-sapp-ui.wasm";if(!Fa()){var Ga=F;F=g.locateFile?g.locateFile(Ga,q):q+Ga}
function Ha(){var a=F;try{if(a==F&&u)return new Uint8Array(u);if(ia)return ia(a);throw"both async and sync fetching of the wasm failed";}catch(b){ma(b)}}
function Ia(){if(!u&&(da||l)){if("function"==typeof fetch&&!F.startsWith("file://"))return fetch(F,{credentials:"same-origin"}).then(function(a){if(!a.ok)throw"failed to load wasm binary file at '"+F+"'";return a.arrayBuffer()}).catch(function(){return Ha()});if(ha)return new Promise(function(a,b){ha(F,function(c){a(new Uint8Array(c))},b)})}return Promise.resolve().then(function(){return Ha()})}
function ka(a){this.name="ExitStatus";this.message="Program terminated with exit("+a+")";this.status=a}function Ja(a){for(;0<a.length;)a.shift()(g)}function Ka(a){var b=La();a();Ma(b)}var Na=0;function Oa(){for(var a=G.length-1;0<=a;--a)Pa(a);G=[];Qa=[]}var Qa=[];function Ra(){if(Na&&Sa.pc)for(var a=0;a<Qa.length;++a){var b=Qa[a];Qa.splice(a,1);--a;b.ad.apply(null,b.Qc)}}var G=[];function Pa(a){var b=G[a];b.target.removeEventListener(b.hc,b.Mc,b.ic);G.splice(a,1)}
function H(a){function b(d){++Na;Sa=a;Ra();a.kc(d);Ra();--Na}if(a.jc)a.Mc=b,a.target.addEventListener(a.hc,b,a.ic),G.push(a),Ta||(Ba.push(Oa),Ta=!0);else for(var c=0;c<G.length;++c)G[c].target==a.target&&G[c].hc==a.hc&&Pa(c--)}function Ua(a){return a?a==window?"#window":a==screen?"#screen":a&&a.nodeName?a.nodeName:"":""}var Ta,Sa,Va,Wa,Xa,Ya,Za,$a,ab,bb=[0,"undefined"!=typeof document?document:0,"undefined"!=typeof window?window:0];
function I(a){a=2<a?v(a):a;return bb[a]||("undefined"!=typeof document?document.querySelector(a):void 0)}function cb(a){return 0>bb.indexOf(a)?a.getBoundingClientRect():{left:0,top:0}}var db=[];function J(a){var b=db[a];b||(a>=db.length&&(db.length=a+1),db[a]=b=xa.get(a));return b}function eb(a,b,c,d,e,k){Va||(Va=K(256));a={target:I(a),hc:k,jc:d,kc:function(f){f=f||event;var m=f.target.id?f.target.id:"",n=Va;y(Ua(f.target),x,n+0,128);y(m,x,n+128,128);J(d)(e,n,b)&&f.preventDefault()},ic:c};H(a)}
function fb(a,b,c,d,e,k){Wa||(Wa=K(176));a={target:I(a),pc:!0,hc:k,jc:d,kc:function(f){var m=Wa;C[m>>3]=f.timeStamp;var n=m>>2;z[n+2]=f.location;z[n+3]=f.ctrlKey;z[n+4]=f.shiftKey;z[n+5]=f.altKey;z[n+6]=f.metaKey;z[n+7]=f.repeat;z[n+8]=f.charCode;z[n+9]=f.keyCode;z[n+10]=f.which;y(f.key||"",x,m+44,32);y(f.code||"",x,m+76,32);y(f.char||"",x,m+108,32);y(f.locale||"",x,m+140,32);J(d)(e,m,b)&&f.preventDefault()},ic:c};H(a)}
function gb(a,b,c){C[a>>3]=b.timeStamp;a>>=2;z[a+2]=b.screenX;z[a+3]=b.screenY;z[a+4]=b.clientX;z[a+5]=b.clientY;z[a+6]=b.ctrlKey;z[a+7]=b.shiftKey;z[a+8]=b.altKey;z[a+9]=b.metaKey;ua[2*a+20]=b.button;ua[2*a+21]=b.buttons;z[a+11]=b.movementX;z[a+12]=b.movementY;c=cb(c);z[a+13]=b.clientX-c.left;z[a+14]=b.clientY-c.top}
function L(a,b,c,d,e,k){Xa||(Xa=K(72));a=I(a);H({target:a,pc:"mousemove"!=k&&"mouseenter"!=k&&"mouseleave"!=k,hc:k,jc:d,kc:function(f){f=f||event;gb(Xa,f,a);J(d)(e,Xa,b)&&f.preventDefault()},ic:c})}function hb(a,b,c,d,e){Ya||(Ya=K(260));H({target:a,hc:e,jc:d,kc:function(k){k=k||event;var f=Ya,m=document.pointerLockElement||document.nc||document.Ac||document.yc;z[f>>2]=!!m;var n=m&&m.id?m.id:"";y(Ua(m),x,f+4,128);y(n,x,f+132,128);J(d)(20,f,b)&&k.preventDefault()},ic:c})}
function ib(a,b,c,d,e){H({target:a,hc:e,jc:d,kc:function(k){k=k||event;J(d)(38,0,b)&&k.preventDefault()},ic:c})}
function jb(a,b,c,d){Za||(Za=K(36));a=I(a);H({target:a,hc:"resize",jc:d,kc:function(e){e=e||event;if(e.target==a){var k=document.body;if(k){var f=Za;z[f>>2]=e.detail;z[f+4>>2]=k.clientWidth;z[f+8>>2]=k.clientHeight;z[f+12>>2]=innerWidth;z[f+16>>2]=innerHeight;z[f+20>>2]=outerWidth;z[f+24>>2]=outerHeight;z[f+28>>2]=pageXOffset;z[f+32>>2]=pageYOffset;J(d)(10,f,b)&&e.preventDefault()}}},ic:c})}
function kb(a,b,c,d,e,k){$a||($a=K(1696));a=I(a);H({target:a,pc:"touchstart"==k||"touchend"==k,hc:k,jc:d,kc:function(f){for(var m,n={},p=f.touches,r=0;r<p.length;++r)m=p[r],m.zc=m.Cc=0,n[m.identifier]=m;for(r=0;r<f.changedTouches.length;++r)m=f.changedTouches[r],m.zc=1,n[m.identifier]=m;for(r=0;r<f.targetTouches.length;++r)n[f.targetTouches[r].identifier].Cc=1;p=$a;C[p>>3]=f.timeStamp;var w=p>>2;z[w+3]=f.ctrlKey;z[w+4]=f.shiftKey;z[w+5]=f.altKey;z[w+6]=f.metaKey;w+=7;var N=cb(a),ob=0;for(r in n)if(m=
n[r],z[w]=m.identifier,z[w+1]=m.screenX,z[w+2]=m.screenY,z[w+3]=m.clientX,z[w+4]=m.clientY,z[w+5]=m.pageX,z[w+6]=m.pageY,z[w+7]=m.zc,z[w+8]=m.Cc,z[w+9]=m.clientX-N.left,z[w+10]=m.clientY-N.top,w+=13,31<++ob)break;z[p+8>>2]=ob;J(d)(e,p,b)&&f.preventDefault()},ic:c})}function lb(a,b,c,d,e,k){a={target:I(a),hc:k,jc:d,kc:function(f){f=f||event;J(d)(e,0,b)&&f.preventDefault()},ic:c};H(a)}
function mb(a,b,c,d){ab||(ab=K(104));H({target:a,pc:!0,hc:"wheel",jc:d,kc:function(e){e=e||event;var k=ab;gb(k,e,a);C[k+72>>3]=e.deltaX;C[k+80>>3]=e.deltaY;C[k+88>>3]=e.deltaZ;z[k+96>>2]=e.deltaMode;J(d)(9,k,b)&&e.preventDefault()},ic:c})}
function nb(a){var b=a.getExtension("ANGLE_instanced_arrays");b&&(a.vertexAttribDivisor=function(c,d){b.vertexAttribDivisorANGLE(c,d)},a.drawArraysInstanced=function(c,d,e,k){b.drawArraysInstancedANGLE(c,d,e,k)},a.drawElementsInstanced=function(c,d,e,k,f){b.drawElementsInstancedANGLE(c,d,e,k,f)})}
function pb(a){var b=a.getExtension("OES_vertex_array_object");b&&(a.createVertexArray=function(){return b.createVertexArrayOES()},a.deleteVertexArray=function(c){b.deleteVertexArrayOES(c)},a.bindVertexArray=function(c){b.bindVertexArrayOES(c)},a.isVertexArray=function(c){return b.isVertexArrayOES(c)})}function qb(a){var b=a.getExtension("WEBGL_draw_buffers");b&&(a.drawBuffers=function(c,d){b.drawBuffersWEBGL(c,d)})}
function rb(a){a.Sc=a.getExtension("WEBGL_draw_instanced_base_vertex_base_instance")}function sb(a){a.Uc=a.getExtension("WEBGL_multi_draw_instanced_base_vertex_base_instance")}function tb(a){a.Wc=a.getExtension("WEBGL_multi_draw")}var ub=1,vb=[],M=[],wb=[],O=[],P=[],Q=[],xb=[],yb=[],zb={},Ab={};function R(a){Bb||(Bb=a)}function Cb(a){for(var b=ub++,c=a.length;c<b;c++)a[c]=null;return b}
function Db(a,b){a.nc||(a.nc=a.getContext,a.getContext=function(d,e){e=a.nc(d,e);return"webgl"==d==e instanceof WebGLRenderingContext?e:null});var c=1<b.Bc?a.getContext("webgl2",b):a.getContext("webgl",b);return c?Eb(c,b):0}function Eb(a,b){var c=Cb(yb),d={Tc:c,attributes:b,version:b.Bc,tc:a};a.canvas&&(a.canvas.Pc=d);yb[c]=d;("undefined"==typeof b.xc||b.xc)&&Fb(d);return c}
function Fb(a){a||(a=S);if(!a.Oc){a.Oc=!0;var b=a.tc;nb(b);pb(b);qb(b);rb(b);sb(b);2<=a.version&&(b.wc=b.getExtension("EXT_disjoint_timer_query_webgl2"));if(2>a.version||!b.wc)b.wc=b.getExtension("EXT_disjoint_timer_query");tb(b);(b.getSupportedExtensions()||[]).forEach(function(c){c.includes("lose_context")||c.includes("debug")||b.getExtension(c)})}}var Bb,S,Gb=["default","low-power","high-performance"],Hb=[null,[],[]],Ib=[];
function T(a,b,c,d){for(var e=0;e<a;e++){var k=U[c](),f=k&&Cb(d);k?(k.name=f,d[f]=k):R(1282);z[b+4*e>>2]=f}}
function Jb(a,b){if(b){var c=void 0;switch(a){case 36346:c=1;break;case 36344:return;case 34814:case 36345:c=0;break;case 34466:var d=U.getParameter(34467);c=d?d.length:0;break;case 33309:if(2>S.version){R(1282);return}c=2*(U.getSupportedExtensions()||[]).length;break;case 33307:case 33308:if(2>S.version){R(1280);return}c=33307==a?3:0}if(void 0===c)switch(d=U.getParameter(a),typeof d){case "number":c=d;break;case "boolean":c=d?1:0;break;case "string":R(1280);return;case "object":if(null===d)switch(a){case 34964:case 35725:case 34965:case 36006:case 36007:case 32873:case 34229:case 36662:case 36663:case 35053:case 35055:case 36010:case 35097:case 35869:case 32874:case 36389:case 35983:case 35368:case 34068:c=
0;break;default:R(1280);return}else{if(d instanceof Float32Array||d instanceof Uint32Array||d instanceof Int32Array||d instanceof Array){for(a=0;a<d.length;++a)z[b+4*a>>2]=d[a];return}try{c=d.name|0}catch(e){R(1280);t("GL_INVALID_ENUM in glGet0v: Unknown object returned from WebGL getParameter("+a+")! (error: "+e+")");return}}break;default:R(1280);t("GL_INVALID_ENUM in glGet0v: Native code calling glGet0v("+a+") and it returns "+d+" of type "+typeof d+"!");return}z[b>>2]=c}else R(1281)}
function V(a){var b=ra(a)+1,c=K(b);y(a,x,c,b);return c}function Kb(a){return"]"==a.slice(-1)&&a.lastIndexOf("[")}function Lb(a){a-=5120;return 0==a?ta:1==a?x:2==a?ua:4==a?z:6==a?B:5==a||28922==a||28520==a||30779==a||30782==a?A:va}function W(a){var b=U.Lc;if(b){var c=b.oc[a];"number"==typeof c&&(b.oc[a]=c=U.getUniformLocation(b,b.Jc[a]+(0<c?"["+c+"]":"")));return c}R(1282)}var X=[],Y=[];function Mb(a){if(!noExitRuntime){if(g.onExit)g.onExit(a);oa=!0}h(a,new ka(a))}
function Nb(a){var b=ra(a)+1,c=Ob(b);y(a,ta,c,b);return c}for(var U,Z=0;32>Z;++Z)Ib.push(Array(Z));var Pb=new Float32Array(288);for(Z=0;288>Z;++Z)X[Z]=Pb.subarray(0,Z+1);var Qb=new Int32Array(288);for(Z=0;288>Z;++Z)Y[Z]=Qb.subarray(0,Z+1);
var ac={qa:function(){return 0},nb:function(){return 0},ob:function(){},_:function(){return"number"==typeof devicePixelRatio&&devicePixelRatio||1},ja:function(a,b,c){a=I(a);if(!a)return-4;a=cb(a);C[b>>3]=a.width;C[c>>3]=a.height;return 0},kb:function(a,b,c){x.copyWithin(a,b,b+c)},Sa:function(a,b){function c(d){J(a)(d,b)&&requestAnimationFrame(c)}return requestAnimationFrame(c)},jb:function(a){var b=x.length;a>>>=0;if(2147483648<a)return!1;for(var c=1;4>=c;c*=2){var d=b*(1+.2/c);d=Math.min(d,a+100663296);
var e=Math;d=Math.max(a,d);e=e.min.call(e,2147483648,d+(65536-d%65536)%65536);a:{try{na.grow(e-sa.byteLength+65535>>>16);wa();var k=1;break a}catch(f){}k=void 0}if(k)return!0}return!1},ba:function(a,b,c,d){eb(a,b,c,d,12,"blur");return 0},Z:function(a,b,c){a=I(a);if(!a)return-4;a.width=b;a.height=c;return 0},ca:function(a,b,c,d){eb(a,b,c,d,13,"focus");return 0},ma:function(a,b,c,d){fb(a,b,c,d,2,"keydown");return 0},ka:function(a,b,c,d){fb(a,b,c,d,1,"keypress");return 0},la:function(a,b,c,d){fb(a,b,
c,d,3,"keyup");return 0},za:function(a,b,c,d){L(a,b,c,d,5,"mousedown");return 0},ra:function(a,b,c,d){L(a,b,c,d,33,"mouseenter");return 0},oa:function(a,b,c,d){L(a,b,c,d,34,"mouseleave");return 0},ua:function(a,b,c,d){L(a,b,c,d,8,"mousemove");return 0},va:function(a,b,c,d){L(a,b,c,d,6,"mouseup");return 0},ea:function(a,b,c,d){if(!document||!document.body||!(document.body.requestPointerLock||document.body.nc||document.body.Ac||document.body.yc))return-1;a=I(a);if(!a)return-4;hb(a,b,c,d,"pointerlockchange");
hb(a,b,c,d,"mozpointerlockchange");hb(a,b,c,d,"webkitpointerlockchange");hb(a,b,c,d,"mspointerlockchange");return 0},da:function(a,b,c,d){if(!document||!(document.body.requestPointerLock||document.body.nc||document.body.Ac||document.body.yc))return-1;a=I(a);if(!a)return-4;ib(a,b,c,d,"pointerlockerror");ib(a,b,c,d,"mozpointerlockerror");ib(a,b,c,d,"webkitpointerlockerror");ib(a,b,c,d,"mspointerlockerror");return 0},fb:function(a,b,c,d){jb(a,b,c,d);return 0},fa:function(a,b,c,d){kb(a,b,c,d,25,"touchcancel");
return 0},ga:function(a,b,c,d){kb(a,b,c,d,23,"touchend");return 0},ha:function(a,b,c,d){kb(a,b,c,d,24,"touchmove");return 0},ia:function(a,b,c,d){kb(a,b,c,d,22,"touchstart");return 0},aa:function(a,b,c,d){lb(a,b,c,d,31,"webglcontextlost");return 0},$:function(a,b,c,d){lb(a,b,c,d,32,"webglcontextrestored");return 0},na:function(a,b,c,d){a=I(a);return"undefined"!=typeof a.onwheel?(mb(a,b,c,d),0):-1},M:function(a,b){b>>=2;b={alpha:!!z[b],depth:!!z[b+1],stencil:!!z[b+2],antialias:!!z[b+3],premultipliedAlpha:!!z[b+
4],preserveDrawingBuffer:!!z[b+5],powerPreference:Gb[z[b+6]],failIfMajorPerformanceCaveat:!!z[b+7],Bc:z[b+8],Vc:z[b+9],xc:z[b+10],Nc:z[b+11],Xc:z[b+12],Yc:z[b+13]};a=I(a);return!a||b.Nc?0:Db(a,b)},Nb:function(a,b){a=yb[a];b=v(b);b.startsWith("GL_")&&(b=b.substr(3));"ANGLE_instanced_arrays"==b&&nb(U);"OES_vertex_array_object"==b&&pb(U);"WEBGL_draw_buffers"==b&&qb(U);"WEBGL_draw_instanced_base_vertex_base_instance"==b&&rb(U);"WEBGL_multi_draw_instanced_base_vertex_base_instance"==b&&sb(U);"WEBGL_multi_draw"==
b&&tb(U);return!!a.tc.getExtension(b)},Pa:function(a){a>>=2;for(var b=0;14>b;++b)z[a+b]=0;z[a]=z[a+1]=z[a+3]=z[a+4]=z[a+8]=z[a+10]=1},Fa:function(a){S=yb[a];g.Rc=U=S&&S.tc;return!a||U?0:-5},pa:function(){return 52},mb:function(){return 52},ib:function(){return 70},lb:function(a,b,c,d){for(var e=0,k=0;k<c;k++){var f=A[b>>2],m=A[b+4>>2];b+=8;for(var n=0;n<m;n++){var p=x[f+n],r=Hb[a];0===p||10===p?((1===a?la:t)(qa(r,0)),r.length=0):r.push(p)}e+=m}A[d>>2]=e;return 0},b:function(a){U.activeTexture(a)},
K:function(a,b){U.attachShader(M[a],Q[b])},d:function(a,b){35051==a?U.vc=b:35052==a&&(U.mc=b);U.bindBuffer(a,vb[b])},f:function(a,b){U.bindFramebuffer(a,wb[b])},O:function(a,b){U.bindRenderbuffer(a,O[b])},a:function(a,b){U.bindTexture(a,P[b])},X:function(a){U.bindVertexArray(xb[a])},T:function(a,b,c,d){U.blendColor(a,b,c,d)},U:function(a,b){U.blendEquationSeparate(a,b)},V:function(a,b,c,d){U.blendFuncSeparate(a,b,c,d)},y:function(a,b,c,d,e,k,f,m,n,p){U.blitFramebuffer(a,b,c,d,e,k,f,m,n,p)},Na:function(a,
b,c,d){2<=S.version?c&&b?U.bufferData(a,x,d,c,b):U.bufferData(a,b,d):U.bufferData(a,c?x.subarray(c,c+b):b,d)},u:function(a,b,c,d){2<=S.version?c&&U.bufferSubData(a,b,x,d,c):U.bufferSubData(a,b,x.subarray(d,d+c))},r:function(a){return U.checkFramebufferStatus(a)},Hb:function(a){U.clear(a)},Gb:function(a,b,c,d){U.clearBufferfi(a,b,c,d)},ya:function(a,b,c){U.clearBufferfv(a,b,B,c>>2)},Fb:function(a,b,c){U.clearBufferiv(a,b,z,c>>2)},Kb:function(a,b,c,d){U.clearColor(a,b,c,d)},Jb:function(a){U.clearDepth(a)},
Ib:function(a){U.clearStencil(a)},m:function(a,b,c,d){U.colorMask(!!a,!!b,!!c,!!d)},Aa:function(a){U.compileShader(Q[a])},Ka:function(a,b,c,d,e,k,f,m){2<=S.version?U.mc||!f?U.compressedTexImage2D(a,b,c,d,e,k,f,m):U.compressedTexImage2D(a,b,c,d,e,k,x,m,f):U.compressedTexImage2D(a,b,c,d,e,k,m?x.subarray(m,m+f):null)},Ia:function(a,b,c,d,e,k,f,m,n){U.mc?U.compressedTexImage3D(a,b,c,d,e,k,f,m,n):U.compressedTexImage3D(a,b,c,d,e,k,f,x,n,m)},Ga:function(){var a=Cb(M),b=U.createProgram();b.name=a;b.sc=b.qc=
b.rc=0;b.uc=1;M[a]=b;return a},Ca:function(a){var b=Cb(Q);Q[b]=U.createShader(a);return b},Q:function(a){U.cullFace(a)},Wa:function(a,b){for(var c=0;c<a;c++){var d=z[b+4*c>>2],e=vb[d];e&&(U.deleteBuffer(e),e.name=0,vb[d]=null,d==U.vc&&(U.vc=0),d==U.mc&&(U.mc=0))}},k:function(a,b){for(var c=0;c<a;++c){var d=z[b+4*c>>2],e=wb[d];e&&(U.deleteFramebuffer(e),e.name=0,wb[d]=null)}},E:function(a){if(a){var b=M[a];b?(U.deleteProgram(b),b.name=0,M[a]=null):R(1281)}},Y:function(a,b){for(var c=0;c<a;c++){var d=
z[b+4*c>>2],e=O[d];e&&(U.deleteRenderbuffer(e),e.name=0,O[d]=null)}},A:function(a){if(a){var b=Q[a];b?(U.deleteShader(b),Q[a]=null):R(1281)}},Va:function(a,b){for(var c=0;c<a;c++){var d=z[b+4*c>>2],e=P[d];e&&(U.deleteTexture(e),e.name=0,P[d]=null)}},Ua:function(a,b){for(var c=0;c<a;c++){var d=z[b+4*c>>2];U.deleteVertexArray(xb[d]);xb[d]=null}},D:function(a){U.depthFunc(a)},C:function(a){U.depthMask(!!a)},g:function(a){U.disable(a)},W:function(a){U.disableVertexAttribArray(a)},pb:function(a,b,c){U.drawArrays(a,
b,c)},qb:function(a,b,c,d){U.drawArraysInstanced(a,b,c,d)},q:function(a,b){for(var c=Ib[a],d=0;d<a;d++)c[d]=z[b+4*d>>2];U.drawBuffers(c)},rb:function(a,b,c,d){U.drawElements(a,b,c,d)},sb:function(a,b,c,d,e){U.drawElementsInstanced(a,b,c,d,e)},i:function(a){U.enable(a)},Cb:function(a){U.enableVertexAttribArray(a)},l:function(a,b,c,d){U.framebufferRenderbuffer(a,b,c,O[d])},c:function(a,b,c,d,e){U.framebufferTexture2D(a,b,c,P[d],e)},j:function(a,b,c,d,e){U.framebufferTextureLayer(a,b,P[c],d,e)},R:function(a){U.frontFace(a)},
Oa:function(a,b){T(a,b,"createBuffer",vb)},s:function(a,b){T(a,b,"createFramebuffer",wb)},P:function(a,b){T(a,b,"createRenderbuffer",O)},La:function(a,b){T(a,b,"createTexture",P)},Ta:function(a,b){T(a,b,"createVertexArray",xb)},Lb:function(a,b){return U.getAttribLocation(M[a],v(b))},e:function(a,b){Jb(a,b)},Da:function(a,b,c,d){a=U.getProgramInfoLog(M[a]);null===a&&(a="(unknown error)");b=0<b&&d?y(a,x,d,b):0;c&&(z[c>>2]=b)},J:function(a,b,c){if(c)if(a>=ub)R(1281);else if(a=M[a],35716==b)a=U.getProgramInfoLog(a),
null===a&&(a="(unknown error)"),z[c>>2]=a.length+1;else if(35719==b){if(!a.sc)for(b=0;b<U.getProgramParameter(a,35718);++b)a.sc=Math.max(a.sc,U.getActiveUniform(a,b).name.length+1);z[c>>2]=a.sc}else if(35722==b){if(!a.qc)for(b=0;b<U.getProgramParameter(a,35721);++b)a.qc=Math.max(a.qc,U.getActiveAttrib(a,b).name.length+1);z[c>>2]=a.qc}else if(35381==b){if(!a.rc)for(b=0;b<U.getProgramParameter(a,35382);++b)a.rc=Math.max(a.rc,U.getActiveUniformBlockName(a,b).length+1);z[c>>2]=a.rc}else z[c>>2]=U.getProgramParameter(a,
b);else R(1281)},Mb:function(a,b,c,d){a=U.getShaderInfoLog(Q[a]);null===a&&(a="(unknown error)");b=0<b&&d?y(a,x,d,b):0;c&&(z[c>>2]=b)},H:function(a,b,c){c?35716==b?(a=U.getShaderInfoLog(Q[a]),null===a&&(a="(unknown error)"),z[c>>2]=a?a.length+1:0):35720==b?(a=U.getShaderSource(Q[a]),z[c>>2]=a?a.length+1:0):z[c>>2]=U.getShaderParameter(Q[a],b):R(1281)},Ya:function(a){var b=zb[a];if(!b){switch(a){case 7939:b=U.getSupportedExtensions()||[];b=b.concat(b.map(function(d){return"GL_"+d}));b=V(b.join(" "));
break;case 7936:case 7937:case 37445:case 37446:(b=U.getParameter(a))||R(1280);b=b&&V(b);break;case 7938:b=U.getParameter(7938);b=2<=S.version?"OpenGL ES 3.0 ("+b+")":"OpenGL ES 2.0 ("+b+")";b=V(b);break;case 35724:b=U.getParameter(35724);var c=b.match(/^WebGL GLSL ES ([0-9]\.[0-9][0-9]?)(?:$| .*)/);null!==c&&(3==c[1].length&&(c[1]+="0"),b="OpenGL ES GLSL ES "+c[1]+" ("+b+")");b=V(b);break;default:R(1280)}zb[a]=b}return b},Xa:function(a,b){if(2>S.version)return R(1282),0;var c=Ab[a];if(c)return 0>
b||b>=c.length?(R(1281),0):c[b];switch(a){case 7939:return c=U.getSupportedExtensions()||[],c=c.concat(c.map(function(d){return"GL_"+d})),c=c.map(function(d){return V(d)}),c=Ab[a]=c,0>b||b>=c.length?(R(1281),0):c[b];default:return R(1280),0}},t:function(a,b){b=v(b);if(a=M[a]){var c=a,d=c.oc,e=c.Kc,k;if(!d)for(c.oc=d={},c.Jc={},k=0;k<U.getProgramParameter(c,35718);++k){var f=U.getActiveUniform(c,k);var m=f.name;f=f.size;var n=Kb(m);n=0<n?m.slice(0,n):m;var p=c.uc;c.uc+=f;e[n]=[f,p];for(m=0;m<f;++m)d[p]=
m,c.Jc[p++]=n}c=a.oc;d=0;e=b;k=Kb(b);0<k&&(d=parseInt(b.slice(k+1))>>>0,e=b.slice(0,k));if((e=a.Kc[e])&&d<e[0]&&(d+=e[1],c[d]=c[d]||U.getUniformLocation(a,b)))return d}else R(1281);return-1},Ea:function(a){a=M[a];U.linkProgram(a);a.oc=0;a.Kc={}},S:function(a,b){U.polygonOffset(a,b)},z:function(a){U.readBuffer(a)},Ma:function(a,b,c,d){U.renderbufferStorage(a,b,c,d)},N:function(a,b,c,d,e){U.renderbufferStorageMultisample(a,b,c,d,e)},o:function(a,b,c,d){U.scissor(a,b,c,d)},Ba:function(a,b,c,d){for(var e=
"",k=0;k<b;++k){var f=d?z[d+4*k>>2]:-1;e+=v(z[c+4*k>>2],0>f?void 0:f)}U.shaderSource(Q[a],e)},Ra:function(a,b,c){U.stencilFunc(a,b,c)},xa:function(a,b,c,d){U.stencilFuncSeparate(a,b,c,d)},B:function(a){U.stencilMask(a)},Qa:function(a,b,c){U.stencilOp(a,b,c)},wa:function(a,b,c,d){U.stencilOpSeparate(a,b,c,d)},Ja:function(a,b,c,d,e,k,f,m,n){if(2<=S.version)if(U.mc)U.texImage2D(a,b,c,d,e,k,f,m,n);else if(n){var p=Lb(m);U.texImage2D(a,b,c,d,e,k,f,m,p,n>>31-Math.clz32(p.BYTES_PER_ELEMENT))}else U.texImage2D(a,
b,c,d,e,k,f,m,null);else{p=U;var r=p.texImage2D;if(n){var w=Lb(m),N=31-Math.clz32(w.BYTES_PER_ELEMENT);n=w.subarray(n>>N,n+e*(d*({5:3,6:4,8:2,29502:3,29504:4,26917:2,26918:2,29846:3,29847:4}[f-6402]||1)*(1<<N)+4-1&-4)>>N)}else n=null;r.call(p,a,b,c,d,e,k,f,m,n)}},Ha:function(a,b,c,d,e,k,f,m,n,p){if(U.mc)U.texImage3D(a,b,c,d,e,k,f,m,n,p);else if(p){var r=Lb(n);U.texImage3D(a,b,c,d,e,k,f,m,n,r,p>>31-Math.clz32(r.BYTES_PER_ELEMENT))}else U.texImage3D(a,b,c,d,e,k,f,m,n,null)},L:function(a,b,c){U.texParameterf(a,
b,c)},h:function(a,b,c){U.texParameteri(a,b,c)},Bb:function(a,b,c){if(2<=S.version)b&&U.uniform1fv(W(a),B,c>>2,b);else{if(288>=b)for(var d=X[b-1],e=0;e<b;++e)d[e]=B[c+4*e>>2];else d=B.subarray(c>>2,c+4*b>>2);U.uniform1fv(W(a),d)}},I:function(a,b){U.uniform1i(W(a),b)},xb:function(a,b,c){if(2<=S.version)b&&U.uniform1iv(W(a),z,c>>2,b);else{if(288>=b)for(var d=Y[b-1],e=0;e<b;++e)d[e]=z[c+4*e>>2];else d=z.subarray(c>>2,c+4*b>>2);U.uniform1iv(W(a),d)}},Ab:function(a,b,c){if(2<=S.version)b&&U.uniform2fv(W(a),
B,c>>2,2*b);else{if(144>=b)for(var d=X[2*b-1],e=0;e<2*b;e+=2)d[e]=B[c+4*e>>2],d[e+1]=B[c+(4*e+4)>>2];else d=B.subarray(c>>2,c+8*b>>2);U.uniform2fv(W(a),d)}},wb:function(a,b,c){if(2<=S.version)b&&U.uniform2iv(W(a),z,c>>2,2*b);else{if(144>=b)for(var d=Y[2*b-1],e=0;e<2*b;e+=2)d[e]=z[c+4*e>>2],d[e+1]=z[c+(4*e+4)>>2];else d=z.subarray(c>>2,c+8*b>>2);U.uniform2iv(W(a),d)}},zb:function(a,b,c){if(2<=S.version)b&&U.uniform3fv(W(a),B,c>>2,3*b);else{if(96>=b)for(var d=X[3*b-1],e=0;e<3*b;e+=3)d[e]=B[c+4*e>>2],
d[e+1]=B[c+(4*e+4)>>2],d[e+2]=B[c+(4*e+8)>>2];else d=B.subarray(c>>2,c+12*b>>2);U.uniform3fv(W(a),d)}},vb:function(a,b,c){if(2<=S.version)b&&U.uniform3iv(W(a),z,c>>2,3*b);else{if(96>=b)for(var d=Y[3*b-1],e=0;e<3*b;e+=3)d[e]=z[c+4*e>>2],d[e+1]=z[c+(4*e+4)>>2],d[e+2]=z[c+(4*e+8)>>2];else d=z.subarray(c>>2,c+12*b>>2);U.uniform3iv(W(a),d)}},yb:function(a,b,c){if(2<=S.version)b&&U.uniform4fv(W(a),B,c>>2,4*b);else{if(72>=b){var d=X[4*b-1],e=B;c>>=2;for(var k=0;k<4*b;k+=4){var f=c+k;d[k]=e[f];d[k+1]=e[f+
1];d[k+2]=e[f+2];d[k+3]=e[f+3]}}else d=B.subarray(c>>2,c+16*b>>2);U.uniform4fv(W(a),d)}},ub:function(a,b,c){if(2<=S.version)b&&U.uniform4iv(W(a),z,c>>2,4*b);else{if(72>=b)for(var d=Y[4*b-1],e=0;e<4*b;e+=4)d[e]=z[c+4*e>>2],d[e+1]=z[c+(4*e+4)>>2],d[e+2]=z[c+(4*e+8)>>2],d[e+3]=z[c+(4*e+12)>>2];else d=z.subarray(c>>2,c+16*b>>2);U.uniform4iv(W(a),d)}},tb:function(a,b,c,d){if(2<=S.version)b&&U.uniformMatrix4fv(W(a),!!c,B,d>>2,16*b);else{if(18>=b){var e=X[16*b-1],k=B;d>>=2;for(var f=0;f<16*b;f+=16){var m=
d+f;e[f]=k[m];e[f+1]=k[m+1];e[f+2]=k[m+2];e[f+3]=k[m+3];e[f+4]=k[m+4];e[f+5]=k[m+5];e[f+6]=k[m+6];e[f+7]=k[m+7];e[f+8]=k[m+8];e[f+9]=k[m+9];e[f+10]=k[m+10];e[f+11]=k[m+11];e[f+12]=k[m+12];e[f+13]=k[m+13];e[f+14]=k[m+14];e[f+15]=k[m+15]}}else e=B.subarray(d>>2,d+64*b>>2);U.uniformMatrix4fv(W(a),!!c,e)}},n:function(a){a=M[a];U.useProgram(a);U.Lc=a},Db:function(a,b){U.vertexAttribDivisor(a,b)},Eb:function(a,b,c,d,e,k){U.vertexAttribPointer(a,b,c,!!d,e,k)},p:function(a,b,c,d){U.viewport(a,b,c,d)},hb:function(){g.Dc=
a=>{0!=Rb()&&(a.preventDefault(),a.returnValue=" ")};window.addEventListener("beforeunload",g.Dc)},gb:function(){g.Ic=a=>{const b=a.clipboardData.getData("text");Ka(()=>{const c=Nb(b);Sb(c)})};window.addEventListener("paste",g.Ic)},eb:function(a){g.Zc=[];a=v(a);a=document.getElementById(a);g.Ec=b=>{b.stopPropagation();b.preventDefault()};g.Fc=b=>{b.stopPropagation();b.preventDefault()};g.Gc=b=>{b.stopPropagation();b.preventDefault()};g.Hc=b=>{b.stopPropagation();b.preventDefault();const c=b.dataTransfer.files;
g.$c=c;Tb(c.length);for(let d=0;d<c.length;d++)Ka(()=>{const e=Nb(c[d].name);Ub(d,e)});Vb(b.clientX,b.clientY)};a.addEventListener("dragenter",g.Ec,!1);a.addEventListener("dragleave",g.Fc,!1);a.addEventListener("dragover",g.Gc,!1);a.addEventListener("drop",g.Hc,!1)},_a:function(){const a=document.getElementById("sokol-app-favicon");a&&document.head.removeChild(a)},x:function(){const a=document.createElement("input");a.type="text";a.id="_sokol_app_input_element";a.autocapitalize="none";a.addEventListener("focusout",
function(){Wb()});document.body.append(a)},w:function(){document.getElementById("_sokol_app_input_element").focus()},Ob:function(a){a=v(a);g.lc=document.getElementById(a);g.lc||console.log("sokol_app.h: invalid target:"+a);g.lc.requestPointerLock||console.log("sokol_app.h: target doesn't support requestPointerLock:"+a)},db:function(){window.removeEventListener("beforeunload",g.Dc)},cb:function(){window.removeEventListener("paste",g.Ic)},bb:function(a){a=v(a);a=document.getElementById(a);a.removeEventListener("dragenter",
g.Ec);a.removeEventListener("dragleave",g.Fc);a.removeEventListener("dragover",g.Gc);a.removeEventListener("drop",g.Hc)},F:function(){g.lc&&g.lc.requestPointerLock&&g.lc.requestPointerLock()},ab:function(a,b){if(g.lc){if(0===b)a="none";else switch(a){case 0:a="auto";break;case 1:a="default";break;case 2:a="text";break;case 3:a="crosshair";break;case 4:a="pointer";break;case 5:a="ew-resize";break;case 6:a="ns-resize";break;case 7:a="nwse-resize";break;case 8:a="nesw-resize";break;case 9:a="all-scroll";
break;case 10:a="not-allowed";break;default:a="auto"}g.lc.style.cursor=a}},Za:function(a,b,c){const d=document.createElement("canvas");d.width=a;d.height=b;const e=d.getContext("2d"),k=e.createImageData(a,b);k.data.set(x.subarray(c,c+a*b*4));e.putImageData(k,0,0);a=document.createElement("link");a.id="sokol-app-favicon";a.rel="shortcut icon";a.href=d.toDataURL();document.head.appendChild(a)},v:function(){document.getElementById("_sokol_app_input_element").blur()},$a:function(a){a=v(a);const b=document.createElement("textarea");
b.setAttribute("autocomplete","off");b.setAttribute("autocorrect","off");b.setAttribute("autocapitalize","off");b.setAttribute("spellcheck","false");b.style.left="-100px";b.style.top="-100px";b.style.height=1;b.style.width=1;b.value=a;document.body.appendChild(b);b.select();document.execCommand("copy");document.body.removeChild(b)},G:function(a,b,c,d,e,k){b=v(b);const f=new XMLHttpRequest;f.open("GET",b);f.responseType="arraybuffer";const m=0<d;m&&f.setRequestHeader("Range","bytes="+c+"-"+(c+d-1));
f.onreadystatechange=function(){if(f.readyState==XMLHttpRequest.DONE)if(206==f.status||200==f.status&&!m){const n=new Uint8Array(f.response),p=n.length;p<=k?(x.set(n,e),Xb(a,d,p)):Yb(a)}else Zb(a,f.status)};f.send()},ta:function(a,b){b=v(b);const c=new XMLHttpRequest;c.open("HEAD",b);c.onreadystatechange=function(){if(c.readyState==XMLHttpRequest.DONE)if(200==c.status){const d=c.getResponseHeader("Content-Length");$b(a,d)}else Zb(a,c.status)};c.send()},sa:function(){return navigator.userAgent.includes("Macintosh")?
1:0}};
(function(){function a(e){g.asm=e.exports;na=g.asm.Pb;wa();xa=g.asm.dc;za.unshift(g.asm.Qb);D--;g.monitorRunDependencies&&g.monitorRunDependencies(D);0==D&&(null!==Ea&&(clearInterval(Ea),Ea=null),E&&(e=E,E=null,e()))}function b(e){a(e.instance)}function c(e){return Ia().then(function(k){return WebAssembly.instantiate(k,d)}).then(function(k){return k}).then(e,function(k){t("failed to asynchronously prepare wasm: "+k);ma(k)})}var d={a:ac};D++;g.monitorRunDependencies&&g.monitorRunDependencies(D);if(g.instantiateWasm)try{return g.instantiateWasm(d,
a)}catch(e){return t("Module.instantiateWasm callback failed with error: "+e),!1}(function(){return u||"function"!=typeof WebAssembly.instantiateStreaming||Fa()||F.startsWith("file://")||ea||"function"!=typeof fetch?c(b):fetch(F,{credentials:"same-origin"}).then(function(e){return WebAssembly.instantiateStreaming(e,d).then(b,function(k){t("wasm streaming compile failed: "+k);t("falling back to ArrayBuffer instantiation");return c(b)})})})();return{}})();
g.___wasm_call_ctors=function(){return(g.___wasm_call_ctors=g.asm.Qb).apply(null,arguments)};
var K=g._malloc=function(){return(K=g._malloc=g.asm.Rb).apply(null,arguments)},Wb=g.__sapp_emsc_notify_keyboard_hidden=function(){return(Wb=g.__sapp_emsc_notify_keyboard_hidden=g.asm.Sb).apply(null,arguments)},Sb=g.__sapp_emsc_onpaste=function(){return(Sb=g.__sapp_emsc_onpaste=g.asm.Tb).apply(null,arguments)},Rb=g.__sapp_html5_get_ask_leave_site=function(){return(Rb=g.__sapp_html5_get_ask_leave_site=g.asm.Ub).apply(null,arguments)},Tb=g.__sapp_emsc_begin_drop=function(){return(Tb=g.__sapp_emsc_begin_drop=
g.asm.Vb).apply(null,arguments)},Ub=g.__sapp_emsc_drop=function(){return(Ub=g.__sapp_emsc_drop=g.asm.Wb).apply(null,arguments)},Vb=g.__sapp_emsc_end_drop=function(){return(Vb=g.__sapp_emsc_end_drop=g.asm.Xb).apply(null,arguments)};g.__sapp_emsc_invoke_fetch_cb=function(){return(g.__sapp_emsc_invoke_fetch_cb=g.asm.Yb).apply(null,arguments)};g._main=function(){return(g._main=g.asm.Zb).apply(null,arguments)};g.__saudio_emsc_pull=function(){return(g.__saudio_emsc_pull=g.asm._b).apply(null,arguments)};
var $b=g.__sfetch_emsc_head_response=function(){return($b=g.__sfetch_emsc_head_response=g.asm.$b).apply(null,arguments)},Xb=g.__sfetch_emsc_get_response=function(){return(Xb=g.__sfetch_emsc_get_response=g.asm.ac).apply(null,arguments)},Zb=g.__sfetch_emsc_failed_http_status=function(){return(Zb=g.__sfetch_emsc_failed_http_status=g.asm.bc).apply(null,arguments)},Yb=g.__sfetch_emsc_failed_buffer_too_small=function(){return(Yb=g.__sfetch_emsc_failed_buffer_too_small=g.asm.cc).apply(null,arguments)},La=
g.stackSave=function(){return(La=g.stackSave=g.asm.ec).apply(null,arguments)},Ma=g.stackRestore=function(){return(Ma=g.stackRestore=g.asm.fc).apply(null,arguments)},Ob=g.stackAlloc=function(){return(Ob=g.stackAlloc=g.asm.gc).apply(null,arguments)};g.___start_em_js=48976;g.___stop_em_js=58357;var bc;E=function cc(){bc||dc();bc||(E=cc)};
function ec(a){var b=g._main;a=a||[];a.unshift(ca);var c=a.length,d=Ob(4*(c+1)),e=d>>2;a.forEach(f=>{z[e++]=Nb(f)});z[e]=0;try{var k=b(c,d);Mb(k)}catch(f){f instanceof ka||"unwind"==f||h(1,f)}}
function dc(){function a(){if(!bc&&(bc=!0,g.calledRun=!0,!oa)){Ja(za);Ja(Aa);if(g.onRuntimeInitialized)g.onRuntimeInitialized();fc&&ec(b);if(g.postRun)for("function"==typeof g.postRun&&(g.postRun=[g.postRun]);g.postRun.length;){var c=g.postRun.shift();Ca.unshift(c)}Ja(Ca)}}var b=b||ba;if(!(0<D)){if(g.preRun)for("function"==typeof g.preRun&&(g.preRun=[g.preRun]);g.preRun.length;)Da();Ja(ya);0<D||(g.setStatus?(g.setStatus("Running..."),setTimeout(function(){setTimeout(function(){g.setStatus("")},1);
a()},1)):a())}}if(g.preInit)for("function"==typeof g.preInit&&(g.preInit=[g.preInit]);0<g.preInit.length;)g.preInit.pop()();var fc=!0;g.noInitialRun&&(fc=!1);dc();