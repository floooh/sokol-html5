var g;g||=typeof Module != 'undefined' ? Module : {};var aa="object"==typeof window,ba="function"==typeof importScripts,ca="object"==typeof process&&"object"==typeof process.versions&&"string"==typeof process.versions.node,da=Object.assign({},g),ea=[],fa="./this.program",ha=(a,b)=>{throw b;},h="",ia,ja;
if(ca){var fs=require("fs"),ka=require("path");h=__dirname+"/";ja=a=>{a=la(a)?new URL(a):ka.normalize(a);return fs.readFileSync(a)};ia=a=>{a=la(a)?new URL(a):ka.normalize(a);return new Promise((b,c)=>{fs.readFile(a,void 0,(d,e)=>{d?c(d):b(e.buffer)})})};!g.thisProgram&&1<process.argv.length&&(fa=process.argv[1].replace(/\\/g,"/"));ea=process.argv.slice(2);"undefined"!=typeof module&&(module.exports=g);process.on("uncaughtException",a=>{if(!("unwind"===a||a instanceof ma||a.context instanceof ma))throw a;
});ha=(a,b)=>{process.exitCode=a;throw b;}}else if(aa||ba)ba?h=self.location.href:"undefined"!=typeof document&&document.currentScript&&(h=document.currentScript.src),h=h.startsWith("blob:")?"":h.substr(0,h.replace(/[?#].*/,"").lastIndexOf("/")+1),ba&&(ja=a=>{var b=new XMLHttpRequest;b.open("GET",a,!1);b.responseType="arraybuffer";b.send(null);return new Uint8Array(b.response)}),ia=a=>la(a)?new Promise((b,c)=>{var d=new XMLHttpRequest;d.open("GET",a,!0);d.responseType="arraybuffer";d.onload=()=>{(200==
d.status||0==d.status&&d.response)&&c(d.response);b(d.status)};d.onerror=b;d.send(null)}):fetch(a,{credentials:"same-origin"}).then(b=>b.ok?b.arrayBuffer():Promise.reject(Error(b.status+" : "+b.url)));g.print||console.log.bind(console);var m=g.printErr||console.error.bind(console);Object.assign(g,da);da=null;g.arguments&&(ea=g.arguments);g.thisProgram&&(fa=g.thisProgram);g.quit&&(ha=g.quit);var q;g.wasmBinary&&(q=g.wasmBinary);var na,r=!1,t,u,v,oa,pa,w,x,y,z;
function qa(){var a=na.buffer;g.HEAP8=u=new Int8Array(a);g.HEAP16=oa=new Int16Array(a);g.HEAPU8=v=new Uint8Array(a);g.HEAPU16=pa=new Uint16Array(a);g.HEAP32=w=new Int32Array(a);g.HEAPU32=x=new Uint32Array(a);g.HEAPF32=y=new Float32Array(a);g.HEAPF64=z=new Float64Array(a)}var ra=[],sa=[],ta=[],ua=[];function va(){var a=g.preRun.shift();ra.unshift(a)}var A=0,wa=null,B=null;
function xa(a){g.onAbort?.(a);a="Aborted("+a+")";m(a);r=!0;t=1;throw new WebAssembly.RuntimeError(a+". Build with -sASSERTIONS for more info.");}var ya=a=>a.startsWith("data:application/octet-stream;base64,"),la=a=>a.startsWith("file://"),Aa;function Ba(a){if(a==Aa&&q)return new Uint8Array(q);if(ja)return ja(a);throw"both async and sync fetching of the wasm failed";}function Ca(a){return q?Promise.resolve().then(()=>Ba(a)):ia(a).then(b=>new Uint8Array(b),()=>Ba(a))}
function Da(a,b,c){return Ca(a).then(d=>WebAssembly.instantiate(d,b)).then(c,d=>{m(`failed to asynchronously prepare wasm: ${d}`);xa(d)})}function Ea(a,b){var c=Aa;q||"function"!=typeof WebAssembly.instantiateStreaming||ya(c)||la(c)||ca||"function"!=typeof fetch?Da(c,a,b):fetch(c,{credentials:"same-origin"}).then(d=>WebAssembly.instantiateStreaming(d,a).then(b,function(e){m(`wasm streaming compile failed: ${e}`);m("falling back to ArrayBuffer instantiation");return Da(c,a,b)}))}
function ma(a){this.name="ExitStatus";this.message=`Program terminated with exit(${a})`;this.status=a}
var Fa=a=>{for(;0<a.length;)a.shift()(g)},Ga=g.noExitRuntime||!0,Oa=(a,b)=>{Ha=a;Ia=b;if(C)if(Ja||=!0,0==a)F=function(){var d=Math.max(0,Ka+b-La())|0;setTimeout(G,d)};else if(1==a)F=function(){Ma(G)};else if(2==a){if("undefined"==typeof Na)if("undefined"==typeof setImmediate){var c=[];addEventListener("message",d=>{if("setimmediate"===d.data||"setimmediate"===d.data.target)d.stopPropagation(),c.shift()()},!0);Na=function(d){c.push(d);if(ba){let e;(e=g).setImmediates??(e.setImmediates=[]);g.setImmediates.push(d);
postMessage({target:"setimmediate"})}else postMessage("setimmediate","*")}}else Na=setImmediate;F=function(){Na(G)}}},La;La=()=>performance.now();
var Wa=(a,b,c,d,e)=>{C=a;Pa=d;var k=H;Ja=!1;G=function(){if(!r)if(0<Qa.length){var f=Qa.shift();f.Pc(f.Kc);if(Ra){var l=Ra,n=0==l%1?l-1:Math.floor(l);Ra=f.Mc?n:(8*l+(n+.5))/9}g.setStatus&&(f=g.statusMessage||"Please wait...",l=Ra,n=Sa.Oc,l?l<n?g.setStatus("{message} ({expected - remaining}/{expected})"):g.setStatus(f):g.setStatus(""));k<H||setTimeout(G,0)}else if(!(k<H))if(Ta=Ta+1|0,1==Ha&&1<Ia&&0!=Ta%Ia)F();else{0==Ha&&(Ka=La());if(!(r||g.preMainLoop&&!1===g.preMainLoop())){if(!r)try{if(a(),!Ga)try{t=
f=t,Ua(f)}catch(p){Va(p)}}catch(p){Va(p)}g.postMainLoop?.()}k<H||("object"==typeof SDL&&SDL.audio?.Tc?.(),F())}};e||(b&&0<b?Oa(0,1E3/b):Oa(1,1),F());if(c)throw"unwind";},Va=a=>{a instanceof ma||"unwind"==a||ha(1,a)},Ua=a=>{t=a;Ga||(g.onExit?.(a),r=!0);ha(a,new ma(a))},Xa=a=>{t=a;Ua(a)},Ja=!1,F=null,H=0,C=null,Pa=0,Ha=0,Ia=0,Ta=0,Qa=[];function Ya(){F=null;H++}var Sa={},Ka,G,Ra,Za=!1,$a=!1,ab=[];
function bb(){function a(){$a=document.pointerLockElement===g.canvas||document.mozPointerLockElement===g.canvas||document.webkitPointerLockElement===g.canvas||document.msPointerLockElement===g.canvas}if(!cb){cb=!0;var b=g.canvas;b&&(b.requestPointerLock=b.requestPointerLock||b.mozRequestPointerLock||b.webkitRequestPointerLock||b.msRequestPointerLock||(()=>{}),b.exitPointerLock=document.exitPointerLock||document.mozExitPointerLock||document.webkitExitPointerLock||document.msExitPointerLock||(()=>{}),
b.exitPointerLock=b.exitPointerLock.bind(document),document.addEventListener("pointerlockchange",a,!1),document.addEventListener("mozpointerlockchange",a,!1),document.addEventListener("webkitpointerlockchange",a,!1),document.addEventListener("mspointerlockchange",a,!1),g.elementPointerLock&&b.addEventListener("click",c=>{!$a&&g.canvas.requestPointerLock&&(g.canvas.requestPointerLock(),c.preventDefault())},!1))}}var db=!1,eb=void 0,I=void 0;
function fb(){if(!Za)return!1;(document.exitFullscreen||document.cancelFullScreen||document.mozCancelFullScreen||document.msExitFullscreen||document.webkitCancelFullScreen||(()=>{})).apply(document,[]);return!0}var gb=0;function Ma(a){if("function"==typeof requestAnimationFrame)requestAnimationFrame(a);else{var b=Date.now();if(0===gb)gb=b+1E3/60;else for(;b+2>=gb;)gb+=1E3/60;setTimeout(a,Math.max(gb-b,0))}}var hb=[];function ib(){var a=g.canvas;hb.forEach(b=>b(a.width,a.height))}
function jb(a,b,c){b&&c?(a.Ic=b,a.Fc=c):(b=a.Ic,c=a.Fc);var d=b,e=c;g.forcedAspectRatio&&0<g.forcedAspectRatio&&(d/e<g.forcedAspectRatio?d=Math.round(e*g.forcedAspectRatio):e=Math.round(d/g.forcedAspectRatio));if((document.fullscreenElement||document.mozFullScreenElement||document.msFullscreenElement||document.webkitFullscreenElement||document.webkitCurrentFullScreenElement)===a.parentNode&&"undefined"!=typeof screen){var k=Math.min(screen.width/d,screen.height/e);d=Math.round(d*k);e=Math.round(e*
k)}I?(a.width!=d&&(a.width=d),a.height!=e&&(a.height=e),"undefined"!=typeof a.style&&(a.style.removeProperty("width"),a.style.removeProperty("height"))):(a.width!=b&&(a.width=b),a.height!=c&&(a.height=c),"undefined"!=typeof a.style&&(d!=b||e!=c?(a.style.setProperty("width",d+"px","important"),a.style.setProperty("height",e+"px","important")):(a.style.removeProperty("width"),a.style.removeProperty("height"))))}var Na,cb,kb=0,lb=[];
function mb(){if(navigator.userActivation?navigator.userActivation.isActive:kb&&nb.jc){var a=lb;lb=[];for(var b of a)b.Xc(...b.Lc)}}var J=[];function ob(a){var b=J[a];b.target.removeEventListener(b.Xb,b.sc,b.Yb);J.splice(a,1)}function K(a){if(!a.target)return-4;if(a.Zb)a.sc=function(c){++kb;nb=a;mb();a.$b(c);mb();--kb},a.target.addEventListener(a.Xb,a.sc,a.Yb),J.push(a);else for(var b=0;b<J.length;++b)J[b].target==a.target&&J[b].Xb==a.Xb&&ob(b--);return 0}
function pb(a){return a?a==window?"#window":a==screen?"#screen":a?.nodeName||"":""}
var nb,qb,rb,sb,tb,ub,vb,wb,xb="undefined"!=typeof TextDecoder?new TextDecoder:void 0,L=(a,b)=>{var c=v,d=a+b;for(b=a;c[b]&&!(b>=d);)++b;if(16<b-a&&c.buffer&&xb)return xb.decode(c.subarray(a,b));for(d="";a<b;){var e=c[a++];if(e&128){var k=c[a++]&63;if(192==(e&224))d+=String.fromCharCode((e&31)<<6|k);else{var f=c[a++]&63;e=224==(e&240)?(e&15)<<12|k<<6|f:(e&7)<<18|k<<12|f<<6|c[a++]&63;65536>e?d+=String.fromCharCode(e):(e-=65536,d+=String.fromCharCode(55296|e>>10,56320|e&1023))}}else d+=String.fromCharCode(e)}return d},
yb=[0,"undefined"!=typeof document?document:0,"undefined"!=typeof window?window:0],M=a=>{a=2<a?a?L(a):"":a;return yb[a]||("undefined"!=typeof document?document.querySelector(a):void 0)},zb=a=>0>yb.indexOf(a)?a.getBoundingClientRect():{left:0,top:0},Ab=[],Bb,N=a=>{var b=Ab[a];b||(a>=Ab.length&&(Ab.length=a+1),Ab[a]=b=Bb.get(a));return b},O=(a,b,c)=>{var d=v;if(!(0<c))return 0;var e=b;c=b+c-1;for(var k=0;k<a.length;++k){var f=a.charCodeAt(k);if(55296<=f&&57343>=f){var l=a.charCodeAt(++k);f=65536+((f&
1023)<<10)|l&1023}if(127>=f){if(b>=c)break;d[b++]=f}else{if(2047>=f){if(b+1>=c)break;d[b++]=192|f>>6}else{if(65535>=f){if(b+2>=c)break;d[b++]=224|f>>12}else{if(b+3>=c)break;d[b++]=240|f>>18;d[b++]=128|f>>12&63}d[b++]=128|f>>6&63}d[b++]=128|f&63}}d[b]=0;return b-e},Cb=(a,b,c,d,e,k)=>{qb||=P(256);a={target:M(a),Xb:k,Zb:d,$b:(f=event)=>{var l=f.target.id?f.target.id:"",n=qb;O(pb(f.target),n+0,128);O(l,n+128,128);N(d)(e,n,b)&&f.preventDefault()},Yb:c};return K(a)},Db=(a,b,c,d,e,k)=>{rb||=P(160);a={target:M(a),
Xb:k,Zb:d,$b:f=>{var l=rb;z[l>>3]=f.timeStamp;var n=l>>2;w[n+2]=f.location;u[l+12]=f.ctrlKey;u[l+13]=f.shiftKey;u[l+14]=f.altKey;u[l+15]=f.metaKey;u[l+16]=f.repeat;w[n+5]=f.charCode;w[n+6]=f.keyCode;w[n+7]=f.which;O(f.key||"",l+32,32);O(f.code||"",l+64,32);O(f.char||"",l+96,32);O(f.locale||"",l+128,32);N(d)(e,l,b)&&f.preventDefault()},Yb:c};return K(a)},Eb=(a,b,c)=>{z[a>>3]=b.timeStamp;var d=a>>2;w[d+2]=b.screenX;w[d+3]=b.screenY;w[d+4]=b.clientX;w[d+5]=b.clientY;u[a+24]=b.ctrlKey;u[a+25]=b.shiftKey;
u[a+26]=b.altKey;u[a+27]=b.metaKey;oa[2*d+14]=b.button;oa[2*d+15]=b.buttons;w[d+8]=b.movementX;w[d+9]=b.movementY;a=zb(c);w[d+10]=b.clientX-(a.left|0);w[d+11]=b.clientY-(a.top|0)},Fb=(a,b,c,d,e,k)=>{sb||=P(64);a=M(a);return K({target:a,jc:"mousemove"!=k&&"mouseenter"!=k&&"mouseleave"!=k,Xb:k,Zb:d,$b:(f=event)=>{Eb(sb,f,a);N(d)(e,sb,b)&&f.preventDefault()},Yb:c})},Gb=(a,b,c,d,e)=>{tb||=P(257);return K({target:a,Xb:e,Zb:d,$b:(k=event)=>{var f=tb,l=document.pointerLockElement||document.bc||document.oc||
document.nc;u[f]=!!l;var n=l?.id||"";O(pb(l),f+1,128);O(n,f+129,128);N(d)(20,f,b)&&k.preventDefault()},Yb:c})},Hb=(a,b,c,d,e)=>K({target:a,Xb:e,Zb:d,$b:(k=event)=>{N(d)(38,0,b)&&k.preventDefault()},Yb:c}),Ib=(a,b,c,d)=>{ub||=P(36);a=M(a);return K({target:a,Xb:"resize",Zb:d,$b:(e=event)=>{if(e.target==a){var k=document.body;if(k){var f=ub;w[f>>2]=0;w[f+4>>2]=k.clientWidth;w[f+8>>2]=k.clientHeight;w[f+12>>2]=innerWidth;w[f+16>>2]=innerHeight;w[f+20>>2]=outerWidth;w[f+24>>2]=outerHeight;w[f+28>>2]=pageXOffset|
0;w[f+32>>2]=pageYOffset|0;N(d)(10,f,b)&&e.preventDefault()}}},Yb:c})},Jb=(a,b,c,d,e,k)=>{vb||=P(1552);a=M(a);return K({target:a,jc:"touchstart"==k||"touchend"==k,Xb:k,Zb:d,$b:f=>{var l={},n=f.touches;for(var p of n)p.tc=p.uc=0,l[p.identifier]=p;for(var D of f.changedTouches)D.tc=1,l[D.identifier]=D;for(var za of f.targetTouches)l[za.identifier].uc=1;n=vb;z[n>>3]=f.timeStamp;u[n+12]=f.ctrlKey;u[n+13]=f.shiftKey;u[n+14]=f.altKey;u[n+15]=f.metaKey;p=n+16;D=zb(a);za=0;for(let E of Object.values(l))if(l=
p>>2,w[l]=E.identifier,w[l+1]=E.screenX,w[l+2]=E.screenY,w[l+3]=E.clientX,w[l+4]=E.clientY,w[l+5]=E.pageX,w[l+6]=E.pageY,u[p+28]=E.tc,u[p+29]=E.uc,w[l+8]=E.clientX-(D.left|0),w[l+9]=E.clientY-(D.top|0),p+=48,31<++za)break;w[n+8>>2]=za;N(d)(e,n,b)&&f.preventDefault()},Yb:c})},Kb=a=>{var b=a.getExtension("ANGLE_instanced_arrays");b&&(a.vertexAttribDivisor=(c,d)=>b.vertexAttribDivisorANGLE(c,d),a.drawArraysInstanced=(c,d,e,k)=>b.drawArraysInstancedANGLE(c,d,e,k),a.drawElementsInstanced=(c,d,e,k,f)=>
b.drawElementsInstancedANGLE(c,d,e,k,f))},Lb=a=>{var b=a.getExtension("OES_vertex_array_object");b&&(a.createVertexArray=()=>b.createVertexArrayOES(),a.deleteVertexArray=c=>b.deleteVertexArrayOES(c),a.bindVertexArray=c=>b.bindVertexArrayOES(c),a.isVertexArray=c=>b.isVertexArrayOES(c))},Mb=a=>{var b=a.getExtension("WEBGL_draw_buffers");b&&(a.drawBuffers=(c,d)=>b.drawBuffersWEBGL(c,d))},Nb=a=>{a.Nc=a.getExtension("WEBGL_draw_instanced_base_vertex_base_instance")},Ob=a=>{a.Qc=a.getExtension("WEBGL_multi_draw_instanced_base_vertex_base_instance")},
Pb=a=>{var b="ANGLE_instanced_arrays EXT_blend_minmax EXT_disjoint_timer_query EXT_frag_depth EXT_shader_texture_lod EXT_sRGB OES_element_index_uint OES_fbo_render_mipmap OES_standard_derivatives OES_texture_float OES_texture_half_float OES_texture_half_float_linear OES_vertex_array_object WEBGL_color_buffer_float WEBGL_depth_texture WEBGL_draw_buffers EXT_color_buffer_float EXT_conservative_depth EXT_disjoint_timer_query_webgl2 EXT_texture_norm16 NV_shader_noperspective_interpolation WEBGL_clip_cull_distance EXT_color_buffer_half_float EXT_depth_clamp EXT_float_blend EXT_texture_compression_bptc EXT_texture_compression_rgtc EXT_texture_filter_anisotropic KHR_parallel_shader_compile OES_texture_float_linear WEBGL_blend_func_extended WEBGL_compressed_texture_astc WEBGL_compressed_texture_etc WEBGL_compressed_texture_etc1 WEBGL_compressed_texture_s3tc WEBGL_compressed_texture_s3tc_srgb WEBGL_debug_renderer_info WEBGL_debug_shaders WEBGL_lose_context WEBGL_multi_draw".split(" ");
return(a.getSupportedExtensions()||[]).filter(c=>b.includes(c))},Qb=1,Rb=[],Q=[],Sb=[],Tb=[],Ub=[],R=[],Vb=[],Wb=[],S=[],Xb={},Yb=4,Zb=0,$b=a=>{for(var b=Qb++,c=a.length;c<b;c++)a[c]=null;return b},ac=(a,b,c,d)=>{for(var e=0;e<a;e++){var k=T[c](),f=k&&$b(d);k?(k.name=f,d[f]=k):U||=1282;w[b+4*e>>2]=f}},cc=(a,b)=>{a.bc||(a.bc=a.getContext,a.getContext=function(d,e){e=a.bc(d,e);return"webgl"==d==e instanceof WebGLRenderingContext?e:null});var c=1<b.lc?a.getContext("webgl2",b):a.getContext("webgl",b);
return c?bc(c,b):0},bc=(a,b)=>{var c=$b(Wb),d={handle:c,attributes:b,version:b.lc,ec:a};a.canvas&&(a.canvas.Jc=d);Wb[c]=d;("undefined"==typeof b.rc||b.rc)&&dc(d);return c},ec=a=>{V=Wb[a];g.kc=T=V?.ec;return!(a&&!T)},dc=a=>{a||=V;if(!a.Gc){a.Gc=!0;var b=a.ec;Kb(b);Lb(b);Mb(b);Nb(b);Ob(b);2<=a.version&&(b.qc=b.getExtension("EXT_disjoint_timer_query_webgl2"));if(2>a.version||!b.qc)b.qc=b.getExtension("EXT_disjoint_timer_query");b.Hc=b.getExtension("WEBGL_multi_draw");Pb(b).forEach(c=>{c.includes("lose_context")||
c.includes("debug")||b.getExtension(c)})}},fc={},U,V,gc=(a,b,c,d,e,k)=>{a={target:M(a),Xb:k,Zb:d,$b:(f=event)=>{N(d)(e,0,b)&&f.preventDefault()},Yb:c};K(a)},hc=(a,b,c,d)=>{wb||=P(96);return K({target:a,jc:!0,Xb:"wheel",Zb:d,$b:(e=event)=>{var k=wb;Eb(k,e,a);z[k+64>>3]=e.deltaX;z[k+72>>3]=e.deltaY;z[k+80>>3]=e.deltaZ;w[k+88>>2]=e.deltaMode;N(d)(9,k,b)&&e.preventDefault()},Yb:c})},ic=["default","low-power","high-performance"];function jc(){var a=Pb(T);return a=a.concat(a.map(b=>"GL_"+b))}
var kc=(a,b)=>{if(b){var c=void 0;switch(a){case 36346:c=1;break;case 36344:return;case 34814:case 36345:c=0;break;case 34466:var d=T.getParameter(34467);c=d?d.length:0;break;case 33309:if(2>V.version){U||=1282;return}c=jc().length;break;case 33307:case 33308:if(2>V.version){U||=1280;return}c=33307==a?3:0}if(void 0===c)switch(d=T.getParameter(a),typeof d){case "number":c=d;break;case "boolean":c=d?1:0;break;case "string":U||=1280;return;case "object":if(null===d)switch(a){case 34964:case 35725:case 34965:case 36006:case 36007:case 32873:case 34229:case 36662:case 36663:case 35053:case 35055:case 36010:case 35097:case 35869:case 32874:case 36389:case 35983:case 35368:case 34068:c=
0;break;default:U||=1280;return}else{if(d instanceof Float32Array||d instanceof Uint32Array||d instanceof Int32Array||d instanceof Array){for(a=0;a<d.length;++a)w[b+4*a>>2]=d[a];return}try{c=d.name|0}catch(e){U||=1280;m(`GL_INVALID_ENUM in glGet${0}v: Unknown object returned from WebGL getParameter(${a})! (error: ${e})`);return}}break;default:U||=1280;m(`GL_INVALID_ENUM in glGet${0}v: Native code calling glGet${0}v(${a}) and it returns ${d} of type ${typeof d}!`);return}w[b>>2]=c}else U||=1281},lc=
a=>{for(var b=0,c=0;c<a.length;++c){var d=a.charCodeAt(c);127>=d?b++:2047>=d?b+=2:55296<=d&&57343>=d?(b+=4,++c):b+=3}return b},mc=a=>{var b=lc(a)+1,c=P(b);c&&O(a,c,b);return c},nc=a=>"]"==a.slice(-1)&&a.lastIndexOf("["),oc=[],pc=a=>{a-=5120;return 0==a?u:1==a?v:2==a?oa:4==a?w:6==a?y:5==a||28922==a||28520==a||30779==a||30782==a?x:pa},W=a=>{var b=T.Dc;if(b){var c=b.dc[a];"number"==typeof c&&(b.dc[a]=c=T.getUniformLocation(b,b.Bc[a]+(0<c?`[${c}]`:"")));return c}U||=1282},X=[],qc=[],sc=a=>{var b=lc(a)+
1,c=rc(b);O(a,c,b);return c},vc=a=>{var b=tc();a();uc(b)};
g.requestFullscreen=function(a,b){function c(){Za=!1;var k=d.parentNode;(document.fullscreenElement||document.mozFullScreenElement||document.msFullscreenElement||document.webkitFullscreenElement||document.webkitCurrentFullScreenElement)===k?(d.exitFullscreen=fb,eb&&d.requestPointerLock(),Za=!0,I?("undefined"!=typeof SDL&&(w[SDL.screen>>2]=x[SDL.screen>>2]|8388608),jb(g.canvas),ib()):jb(d)):(k.parentNode.insertBefore(d,k),k.parentNode.removeChild(k),I?("undefined"!=typeof SDL&&(w[SDL.screen>>2]=x[SDL.screen>>
2]&-8388609),jb(g.canvas),ib()):jb(d));g.onFullScreen?.(Za);g.onFullscreen?.(Za)}eb=a;I=b;"undefined"==typeof eb&&(eb=!0);"undefined"==typeof I&&(I=!1);var d=g.canvas;db||(db=!0,document.addEventListener("fullscreenchange",c,!1),document.addEventListener("mozfullscreenchange",c,!1),document.addEventListener("webkitfullscreenchange",c,!1),document.addEventListener("MSFullscreenChange",c,!1));var e=document.createElement("div");d.parentNode.insertBefore(e,d);e.appendChild(d);e.requestFullscreen=e.requestFullscreen||
e.mozRequestFullScreen||e.msRequestFullscreen||(e.webkitRequestFullscreen?()=>e.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT):null)||(e.webkitRequestFullScreen?()=>e.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT):null);e.requestFullscreen()};g.requestAnimationFrame=Ma;g.setCanvasSize=function(a,b,c){jb(g.canvas,a,b);c||ib()};g.pauseMainLoop=Ya;g.resumeMainLoop=function(){H++;var a=Ha,b=Ia,c=C;C=null;Wa(c,0,!1,Pa,!0);Oa(a,b);F()};
g.getUserMedia=function(a){let b;(b=window).getUserMedia||(b.getUserMedia=navigator.getUserMedia||navigator.mozGetUserMedia);window.getUserMedia(a)};g.createContext=function(a,b,c,d){if(b&&g.kc&&a==g.canvas)return g.kc;var e;if(b){var k={antialias:!1,alpha:!1,lc:"undefined"!=typeof WebGL2RenderingContext?2:1};if(d)for(var f in d)k[f]=d[f];if("undefined"!=typeof fc&&(e=cc(a,k)))var l=Wb[e].ec}else l=a.getContext("2d");if(!l)return null;c&&(g.kc=l,b&&ec(e),g.Yc=b,ab.forEach(n=>n()),bb());return l};
for(var T,Y=0;32>Y;++Y)oc.push(Array(Y));var wc=new Float32Array(288);for(Y=0;288>=Y;++Y)X[Y]=wc.subarray(0,Y);var xc=new Int32Array(288);for(Y=0;288>=Y;++Y)qc[Y]=xc.subarray(0,Y);
var Hc={_a:()=>{xa("")},Za:(a,b,c)=>v.copyWithin(a,b,b+c),Oa:()=>{Ya();C=null},ca:()=>"number"==typeof devicePixelRatio&&devicePixelRatio||1,ea:(a,b,c)=>{a=M(a);if(!a)return-4;a=zb(a);z[b>>3]=a.width;z[c>>3]=a.height;return 0},Pa:()=>performance.now(),Wa:(a,b)=>{function c(d){N(a)(d,b)&&requestAnimationFrame(c)}return requestAnimationFrame(c)},Ya:a=>{var b=v.length;a>>>=0;if(2147483648<a)return!1;for(var c=1;4>=c;c*=2){var d=b*(1+.2/c);d=Math.min(d,a+100663296);var e=Math;d=Math.max(a,d);a:{e=(e.min.call(e,
2147483648,d+(65536-d%65536)%65536)-na.buffer.byteLength+65535)/65536;try{na.grow(e);qa();var k=1;break a}catch(f){}k=void 0}if(k)return!0}return!1},M:(a,b,c,d)=>Cb(a,b,c,d,12,"blur"),ba:(a,b,c)=>{a=M(a);if(!a)return-4;a.width=b;a.height=c;return 0},N:(a,b,c,d)=>Cb(a,b,c,d,13,"focus"),W:(a,b,c,d)=>Db(a,b,c,d,2,"keydown"),U:(a,b,c,d)=>Db(a,b,c,d,1,"keypress"),V:(a,b,c,d)=>Db(a,b,c,d,3,"keyup"),Xa:(a,b,c)=>{a=N(a);Wa(a,b,c)},aa:(a,b,c,d)=>Fb(a,b,c,d,5,"mousedown"),Z:(a,b,c,d)=>Fb(a,b,c,d,33,"mouseenter"),
Y:(a,b,c,d)=>Fb(a,b,c,d,34,"mouseleave"),_:(a,b,c,d)=>Fb(a,b,c,d,8,"mousemove"),$:(a,b,c,d)=>Fb(a,b,c,d,6,"mouseup"),P:(a,b,c,d)=>{if(!document||!document.body||!(document.body.requestPointerLock||document.body.bc||document.body.oc||document.body.nc))return-1;a=M(a);if(!a)return-4;Gb(a,b,c,d,"mozpointerlockchange");Gb(a,b,c,d,"webkitpointerlockchange");Gb(a,b,c,d,"mspointerlockchange");return Gb(a,b,c,d,"pointerlockchange")},O:(a,b,c,d)=>{if(!document||!(document.body.requestPointerLock||document.body.bc||
document.body.oc||document.body.nc))return-1;a=M(a);if(!a)return-4;Hb(a,b,c,d,"mozpointerlockerror");Hb(a,b,c,d,"webkitpointerlockerror");Hb(a,b,c,d,"mspointerlockerror");return Hb(a,b,c,d,"pointerlockerror")},da:(a,b,c,d)=>Ib(a,b,c,d),Q:(a,b,c,d)=>Jb(a,b,c,d,25,"touchcancel"),R:(a,b,c,d)=>Jb(a,b,c,d,23,"touchend"),S:(a,b,c,d)=>Jb(a,b,c,d,24,"touchmove"),T:(a,b,c,d)=>Jb(a,b,c,d,22,"touchstart"),L:(a,b,c,d)=>{gc(a,b,c,d,31,"webglcontextlost");return 0},K:(a,b,c,d)=>{gc(a,b,c,d,32,"webglcontextrestored");
return 0},X:(a,b,c,d)=>(a=M(a))?"undefined"!=typeof a.onwheel?hc(a,b,c,d):-1:-4,Ua:(a,b)=>{var c=b>>2;b={alpha:!!u[b+0],depth:!!u[b+1],stencil:!!u[b+2],antialias:!!u[b+3],premultipliedAlpha:!!u[b+4],preserveDrawingBuffer:!!u[b+5],powerPreference:ic[w[c+2]],failIfMajorPerformanceCaveat:!!u[b+12],lc:w[c+4],Rc:w[c+5],rc:u[b+24],Ec:u[b+25],Sc:w[c+7],Uc:u[b+32]};a=M(a);return!a||b.Ec?0:cc(a,b)},Sa:(a,b)=>{a=Wb[a];b=b?L(b):"";b.startsWith("GL_")&&(b=b.substr(3));"ANGLE_instanced_arrays"==b&&Kb(T);"OES_vertex_array_object"==
b&&Lb(T);"WEBGL_draw_buffers"==b&&Mb(T);"WEBGL_draw_instanced_base_vertex_base_instance"==b&&Nb(T);"WEBGL_multi_draw_instanced_base_vertex_base_instance"==b&&Ob(T);"WEBGL_multi_draw"==b&&(T.Hc=T.getExtension("WEBGL_multi_draw"));return!!a.ec.getExtension(b)},Ta:a=>ec(a)?0:-5,i:a=>T.activeTexture(a),w:(a,b)=>{T.attachShader(Q[a],R[b])},b:(a,b)=>{35051==a?T.pc=b:35052==a&&(T.ac=b);T.bindBuffer(a,Rb[b])},a:(a,b,c)=>{T.bindBufferBase(a,b,Rb[c])},m:(a,b)=>{T.bindFramebuffer(a,Sb[b])},Aa:(a,b)=>{T.bindRenderbuffer(a,
Tb[b])},h:(a,b)=>{T.bindSampler(a,S[b])},c:(a,b)=>{T.bindTexture(a,Ub[b])},J:a=>{T.bindVertexArray(Vb[a])},F:(a,b,c,d)=>T.blendColor(a,b,c,d),G:(a,b)=>T.blendEquationSeparate(a,b),H:(a,b,c,d)=>T.blendFuncSeparate(a,b,c,d),ab:(a,b,c,d,e,k,f,l,n,p)=>T.blitFramebuffer(a,b,c,d,e,k,f,l,n,p),Da:(a,b,c,d)=>{2<=V.version?c&&b?T.bufferData(a,v,d,c,b):T.bufferData(a,b,d):T.bufferData(a,c?v.subarray(c,c+b):b,d)},y:(a,b,c,d)=>{2<=V.version?c&&T.bufferSubData(a,b,v,d,c):T.bufferSubData(a,b,v.subarray(d,d+c))},
tb:(a,b,c,d)=>T.clearBufferfi(a,b,c,d),ia:(a,b,c)=>{T.clearBufferfv(a,b,y,c>>2)},sb:(a,b,c)=>{T.clearBufferiv(a,b,w,c>>2)},l:(a,b,c,d)=>{T.colorMask(!!a,!!b,!!c,!!d)},yb:a=>{T.compileShader(R[a])},ua:(a,b,c,d,e,k,f,l)=>{2<=V.version?T.ac||!f?T.compressedTexImage2D(a,b,c,d,e,k,f,l):T.compressedTexImage2D(a,b,c,d,e,k,v,l,f):T.compressedTexImage2D(a,b,c,d,e,k,l?v.subarray(l,l+f):null)},sa:(a,b,c,d,e,k,f,l,n)=>{T.ac?T.compressedTexImage3D(a,b,c,d,e,k,f,l,n):T.compressedTexImage3D(a,b,c,d,e,k,f,v,n,l)},
oa:()=>{var a=$b(Q),b=T.createProgram();b.name=a;b.ic=b.fc=b.hc=0;b.mc=1;Q[a]=b;return a},Ab:a=>{var b=$b(R);R[b]=T.createShader(a);return b},C:a=>T.cullFace(a),Ga:(a,b)=>{for(var c=0;c<a;c++){var d=w[b+4*c>>2],e=Rb[d];e&&(T.deleteBuffer(e),e.name=0,Rb[d]=null,d==T.pc&&(T.pc=0),d==T.ac&&(T.ac=0))}},j:(a,b)=>{for(var c=0;c<a;++c){var d=w[b+4*c>>2],e=Sb[d];e&&(T.deleteFramebuffer(e),e.name=0,Sb[d]=null)}},p:a=>{if(a){var b=Q[a];b?(T.deleteProgram(b),b.name=0,Q[a]=null):U||=1281}},A:(a,b)=>{for(var c=
0;c<a;c++){var d=w[b+4*c>>2],e=Tb[d];e&&(T.deleteRenderbuffer(e),e.name=0,Tb[d]=null)}},z:(a,b)=>{for(var c=0;c<a;c++){var d=w[b+4*c>>2],e=S[d];e&&(T.deleteSampler(e),e.name=0,S[d]=null)}},o:a=>{if(a){var b=R[a];b?(T.deleteShader(b),R[a]=null):U||=1281}},B:(a,b)=>{for(var c=0;c<a;c++){var d=w[b+4*c>>2],e=Ub[d];e&&(T.deleteTexture(e),e.name=0,Ub[d]=null)}},Fa:(a,b)=>{for(var c=0;c<a;c++){var d=w[b+4*c>>2];T.deleteVertexArray(Vb[d]);Vb[d]=null}},t:a=>T.depthFunc(a),s:a=>{T.depthMask(!!a)},e:a=>T.disable(a),
I:a=>{T.disableVertexAttribArray(a)},cb:(a,b,c)=>{T.drawArrays(a,b,c)},db:(a,b,c,d)=>{T.drawArraysInstanced(a,b,c,d)},eb:(a,b,c,d)=>{T.drawElements(a,b,c,d)},fb:(a,b,c,d,e)=>{T.drawElementsInstanced(a,b,c,d,e)},g:a=>T.enable(a),pb:a=>{T.enableVertexAttribArray(a)},D:a=>T.frontFace(a),Ea:(a,b)=>{ac(a,b,"createBuffer",Rb)},Ba:(a,b)=>{ac(a,b,"createRenderbuffer",Tb)},pa:(a,b)=>{ac(a,b,"createSampler",S)},ya:(a,b)=>{ac(a,b,"createTexture",Ub)},Na:(a,b)=>{ac(a,b,"createVertexArray",Vb)},wb:(a,b)=>T.getAttribLocation(Q[a],
b?L(b):""),d:(a,b)=>kc(a,b),ma:(a,b,c,d)=>{a=T.getProgramInfoLog(Q[a]);null===a&&(a="(unknown error)");b=0<b&&d?O(a,d,b):0;c&&(w[c>>2]=b)},v:(a,b,c)=>{if(c)if(a>=Qb)U||=1281;else if(a=Q[a],35716==b)a=T.getProgramInfoLog(a),null===a&&(a="(unknown error)"),w[c>>2]=a.length+1;else if(35719==b){if(!a.ic)for(b=0;b<T.getProgramParameter(a,35718);++b)a.ic=Math.max(a.ic,T.getActiveUniform(a,b).name.length+1);w[c>>2]=a.ic}else if(35722==b){if(!a.fc)for(b=0;b<T.getProgramParameter(a,35721);++b)a.fc=Math.max(a.fc,
T.getActiveAttrib(a,b).name.length+1);w[c>>2]=a.fc}else if(35381==b){if(!a.hc)for(b=0;b<T.getProgramParameter(a,35382);++b)a.hc=Math.max(a.hc,T.getActiveUniformBlockName(a,b).length+1);w[c>>2]=a.hc}else w[c>>2]=T.getProgramParameter(a,b);else U||=1281},xb:(a,b,c,d)=>{a=T.getShaderInfoLog(R[a]);null===a&&(a="(unknown error)");b=0<b&&d?O(a,d,b):0;c&&(w[c>>2]=b)},ka:(a,b,c)=>{c?35716==b?(a=T.getShaderInfoLog(R[a]),null===a&&(a="(unknown error)"),w[c>>2]=a?a.length+1:0):35720==b?(a=T.getShaderSource(R[a]),
w[c>>2]=a?a.length+1:0):w[c>>2]=T.getShaderParameter(R[a],b):U||=1281},La:(a,b)=>{if(2>V.version)return U||=1282,0;var c=Xb[a];if(c)return 0>b||b>=c.length?(U||=1281,0):c[b];switch(a){case 7939:return c=jc().map(mc),c=Xb[a]=c,0>b||b>=c.length?(U||=1281,0):c[b];default:return U||=1280,0}},n:(a,b)=>{b=b?L(b):"";if(a=Q[a]){var c=a,d=c.dc,e=c.Cc,k;if(!d)for(c.dc=d={},c.Bc={},k=0;k<T.getProgramParameter(c,35718);++k){var f=T.getActiveUniform(c,k);var l=f.name;f=f.size;var n=nc(l);n=0<n?l.slice(0,n):l;
var p=c.mc;c.mc+=f;e[n]=[f,p];for(l=0;l<f;++l)d[p]=l,c.Bc[p++]=n}c=a.dc;d=0;e=b;k=nc(b);0<k&&(d=parseInt(b.slice(k+1))>>>0,e=b.slice(0,k));if((e=a.Cc[e])&&d<e[0]&&(d+=e[1],c[d]=c[d]||T.getUniformLocation(a,b)))return d}else U||=1281;return-1},$a:(a,b,c)=>{for(var d=oc[b],e=0;e<b;e++)d[e]=w[c+4*e>>2];T.invalidateFramebuffer(a,d)},na:a=>{a=Q[a];T.linkProgram(a);a.dc=0;a.Cc={}},Ma:(a,b)=>{3317==a?Yb=b:3314==a&&(Zb=b);T.pixelStorei(a,b)},E:(a,b)=>T.polygonOffset(a,b),bb:a=>T.readBuffer(a),za:(a,b,c,d,
e)=>T.renderbufferStorageMultisample(a,b,c,d,e),x:(a,b,c)=>{T.samplerParameterf(S[a],b,c)},f:(a,b,c)=>{T.samplerParameteri(S[a],b,c)},ub:(a,b,c,d)=>T.scissor(a,b,c,d),zb:(a,b,c,d)=>{for(var e="",k=0;k<b;++k){var f=(f=x[c+4*k>>2])?L(f,d?x[d+4*k>>2]:void 0):"";e+=f}T.shaderSource(R[a],e)},Ja:(a,b,c)=>T.stencilFunc(a,b,c),ha:(a,b,c,d)=>T.stencilFuncSeparate(a,b,c,d),r:a=>T.stencilMask(a),Ia:(a,b,c)=>T.stencilOp(a,b,c),ga:(a,b,c,d)=>T.stencilOpSeparate(a,b,c,d),ta:(a,b,c,d,e,k,f,l,n)=>{if(2<=V.version){if(T.ac){T.texImage2D(a,
b,c,d,e,k,f,l,n);return}if(n){var p=pc(l);n>>>=31-Math.clz32(p.BYTES_PER_ELEMENT);T.texImage2D(a,b,c,d,e,k,f,l,p,n);return}}if(n){p=pc(l);var D=e*((Zb||d)*({5:3,6:4,8:2,29502:3,29504:4,26917:2,26918:2,29846:3,29847:4}[f-6402]||1)*p.BYTES_PER_ELEMENT+Yb-1&-Yb);n=p.subarray(n>>>31-Math.clz32(p.BYTES_PER_ELEMENT),n+D>>>31-Math.clz32(p.BYTES_PER_ELEMENT))}else n=null;T.texImage2D(a,b,c,d,e,k,f,l,n)},qa:(a,b,c,d,e,k,f,l,n,p)=>{if(T.ac)T.texImage3D(a,b,c,d,e,k,f,l,n,p);else if(p){var D=pc(n);T.texImage3D(a,
b,c,d,e,k,f,l,n,D,p>>>31-Math.clz32(D.BYTES_PER_ELEMENT))}else T.texImage3D(a,b,c,d,e,k,f,l,n,null)},xa:(a,b,c)=>T.texParameteri(a,b,c),wa:(a,b,c,d,e)=>T.texStorage2D(a,b,c,d,e),va:(a,b,c,d,e,k)=>T.texStorage3D(a,b,c,d,e,k),ob:(a,b,c)=>{if(2<=V.version)b&&T.uniform1fv(W(a),y,c>>2,b);else{if(288>=b)for(var d=X[b],e=0;e<b;++e)d[e]=y[c+4*e>>2];else d=y.subarray(c>>2,c+4*b>>2);T.uniform1fv(W(a),d)}},la:(a,b)=>{T.uniform1i(W(a),b)},kb:(a,b,c)=>{if(2<=V.version)b&&T.uniform1iv(W(a),w,c>>2,b);else{if(288>=
b)for(var d=qc[b],e=0;e<b;++e)d[e]=w[c+4*e>>2];else d=w.subarray(c>>2,c+4*b>>2);T.uniform1iv(W(a),d)}},nb:(a,b,c)=>{if(2<=V.version)b&&T.uniform2fv(W(a),y,c>>2,2*b);else{if(144>=b)for(var d=X[2*b],e=0;e<2*b;e+=2)d[e]=y[c+4*e>>2],d[e+1]=y[c+(4*e+4)>>2];else d=y.subarray(c>>2,c+8*b>>2);T.uniform2fv(W(a),d)}},jb:(a,b,c)=>{if(2<=V.version)b&&T.uniform2iv(W(a),w,c>>2,2*b);else{if(144>=b)for(var d=qc[2*b],e=0;e<2*b;e+=2)d[e]=w[c+4*e>>2],d[e+1]=w[c+(4*e+4)>>2];else d=w.subarray(c>>2,c+8*b>>2);T.uniform2iv(W(a),
d)}},mb:(a,b,c)=>{if(2<=V.version)b&&T.uniform3fv(W(a),y,c>>2,3*b);else{if(96>=b)for(var d=X[3*b],e=0;e<3*b;e+=3)d[e]=y[c+4*e>>2],d[e+1]=y[c+(4*e+4)>>2],d[e+2]=y[c+(4*e+8)>>2];else d=y.subarray(c>>2,c+12*b>>2);T.uniform3fv(W(a),d)}},ib:(a,b,c)=>{if(2<=V.version)b&&T.uniform3iv(W(a),w,c>>2,3*b);else{if(96>=b)for(var d=qc[3*b],e=0;e<3*b;e+=3)d[e]=w[c+4*e>>2],d[e+1]=w[c+(4*e+4)>>2],d[e+2]=w[c+(4*e+8)>>2];else d=w.subarray(c>>2,c+12*b>>2);T.uniform3iv(W(a),d)}},lb:(a,b,c)=>{if(2<=V.version)b&&T.uniform4fv(W(a),
y,c>>2,4*b);else{if(72>=b){var d=X[4*b],e=y;c>>=2;for(var k=0;k<4*b;k+=4){var f=c+k;d[k]=e[f];d[k+1]=e[f+1];d[k+2]=e[f+2];d[k+3]=e[f+3]}}else d=y.subarray(c>>2,c+16*b>>2);T.uniform4fv(W(a),d)}},hb:(a,b,c)=>{if(2<=V.version)b&&T.uniform4iv(W(a),w,c>>2,4*b);else{if(72>=b)for(var d=qc[4*b],e=0;e<4*b;e+=4)d[e]=w[c+4*e>>2],d[e+1]=w[c+(4*e+4)>>2],d[e+2]=w[c+(4*e+8)>>2],d[e+3]=w[c+(4*e+12)>>2];else d=w.subarray(c>>2,c+16*b>>2);T.uniform4iv(W(a),d)}},gb:(a,b,c,d)=>{if(2<=V.version)b&&T.uniformMatrix4fv(W(a),
!!c,y,d>>2,16*b);else{if(18>=b){var e=X[16*b],k=y;d>>=2;for(var f=0;f<16*b;f+=16){var l=d+f;e[f]=k[l];e[f+1]=k[l+1];e[f+2]=k[l+2];e[f+3]=k[l+3];e[f+4]=k[l+4];e[f+5]=k[l+5];e[f+6]=k[l+6];e[f+7]=k[l+7];e[f+8]=k[l+8];e[f+9]=k[l+9];e[f+10]=k[l+10];e[f+11]=k[l+11];e[f+12]=k[l+12];e[f+13]=k[l+13];e[f+14]=k[l+14];e[f+15]=k[l+15]}}else e=y.subarray(d>>2,d+64*b>>2);T.uniformMatrix4fv(W(a),!!c,e)}},k:a=>{a=Q[a];T.useProgram(a);T.Dc=a},qb:(a,b)=>{T.vertexAttribDivisor(a,b)},rb:(a,b,c,d,e,k)=>{T.vertexAttribPointer(a,
b,c,!!d,e,k)},vb:(a,b,c,d)=>T.viewport(a,b,c,d),Db:function(){g.vc=a=>{0!=yc()&&(a.preventDefault(),a.returnValue=" ")};window.addEventListener("beforeunload",g.vc)},Va:function(){g.Ac=a=>{const b=a.clipboardData.getData("text");vc(()=>{const c=sc(b);zc(c)})};window.addEventListener("paste",g.Ac)},Qa:function(a){g.Vc=[];a=a?L(a):"";a=document.getElementById(a);g.wc=b=>{b.stopPropagation();b.preventDefault()};g.xc=b=>{b.stopPropagation();b.preventDefault()};g.yc=b=>{b.stopPropagation();b.preventDefault()};
g.zc=b=>{b.stopPropagation();b.preventDefault();const c=b.dataTransfer.files;g.Wc=c;Ac(c.length);for(let e=0;e<c.length;e++)vc(()=>{const k=sc(c[e].name);Bc(e,k)});let d=0;b.shiftKey&&(d|=1);b.ctrlKey&&(d|=2);b.altKey&&(d|=4);b.metaKey&&(d|=8);Cc(b.clientX,b.clientY,d)};a.addEventListener("dragenter",g.wc,!1);a.addEventListener("dragleave",g.xc,!1);a.addEventListener("dragover",g.yc,!1);a.addEventListener("drop",g.zc,!1)},ra:function(){const a=document.getElementById("sokol-app-favicon");a&&document.head.removeChild(a)},
Ca:function(){document.exitPointerLock&&document.exitPointerLock()},Ha:function(a){a=a?L(a):"";g.cc=document.getElementById(a);g.cc||console.log("sokol_app.h: invalid target:"+a);g.cc.requestPointerLock||console.log("sokol_app.h: target doesn't support requestPointerLock:"+a)},Cb:function(){window.removeEventListener("beforeunload",g.vc)},Ra:function(){window.removeEventListener("paste",g.Ac)},Ka:function(a){a=a?L(a):"";a=document.getElementById(a);a.removeEventListener("dragenter",g.wc);a.removeEventListener("dragleave",
g.xc);a.removeEventListener("dragover",g.yc);a.removeEventListener("drop",g.zc)},q:function(){g.cc&&g.cc.requestPointerLock&&g.cc.requestPointerLock()},Bb:function(a,b,c){const d=document.createElement("canvas");d.width=a;d.height=b;const e=d.getContext("2d"),k=e.createImageData(a,b);k.data.set(v.subarray(c,c+a*b*4));e.putImageData(k,0,0);a=document.createElement("link");a.id="sokol-app-favicon";a.rel="shortcut icon";a.href=d.toDataURL();document.head.appendChild(a)},u:function(a,b,c,d,e,k){b=b?L(b):
"";const f=new XMLHttpRequest;f.open("GET",b);f.responseType="arraybuffer";const l=0<d;l&&f.setRequestHeader("Range","bytes="+c+"-"+(c+d-1));f.onreadystatechange=function(){if(f.readyState==XMLHttpRequest.DONE)if(206==f.status||200==f.status&&!l){const n=new Uint8Array(f.response),p=n.length;p<=k?(v.set(n,e),Dc(a,d,p)):Ec(a)}else Fc(a,f.status)};f.send()},ja:function(a,b){b=b?L(b):"";const c=new XMLHttpRequest;c.open("HEAD",b);c.onreadystatechange=function(){if(c.readyState==XMLHttpRequest.DONE)if(200==
c.status){const d=c.getResponseHeader("Content-Length");Gc(a,d)}else Fc(a,c.status)};c.send()},fa:function(a,b){b=b?L(b):"";switch(a){case 0:console.error(b);break;case 1:console.error(b);break;case 2:console.warn(b);break;default:console.info(b)}}},Z=function(){function a(c){Z=c.exports;na=Z.Eb;qa();Bb=Z.Tb;sa.unshift(Z.Fb);A--;g.monitorRunDependencies?.(A);0==A&&(null!==wa&&(clearInterval(wa),wa=null),B&&(c=B,B=null,c()));return Z}var b={a:Hc};A++;g.monitorRunDependencies?.(A);if(g.instantiateWasm)try{return g.instantiateWasm(b,
a)}catch(c){return m(`Module.instantiateWasm callback failed with error: ${c}`),!1}Aa||=ya("cubemap-jpeg-sapp.wasm")?"cubemap-jpeg-sapp.wasm":g.locateFile?g.locateFile("cubemap-jpeg-sapp.wasm",h):h+"cubemap-jpeg-sapp.wasm";Ea(b,function(c){a(c.instance)});return{}}(),P=a=>(P=Z.Gb)(a),zc=g.__sapp_emsc_onpaste=a=>(zc=g.__sapp_emsc_onpaste=Z.Hb)(a),yc=g.__sapp_html5_get_ask_leave_site=()=>(yc=g.__sapp_html5_get_ask_leave_site=Z.Ib)(),Ac=g.__sapp_emsc_begin_drop=a=>(Ac=g.__sapp_emsc_begin_drop=Z.Jb)(a),
Bc=g.__sapp_emsc_drop=(a,b)=>(Bc=g.__sapp_emsc_drop=Z.Kb)(a,b),Cc=g.__sapp_emsc_end_drop=(a,b,c)=>(Cc=g.__sapp_emsc_end_drop=Z.Lb)(a,b,c);g.__sapp_emsc_invoke_fetch_cb=(a,b,c,d,e,k,f,l)=>(g.__sapp_emsc_invoke_fetch_cb=Z.Mb)(a,b,c,d,e,k,f,l);var Ic=g._main=(a,b)=>(Ic=g._main=Z.Nb)(a,b);g.__saudio_emsc_pull=a=>(g.__saudio_emsc_pull=Z.Ob)(a);
var Gc=g.__sfetch_emsc_head_response=(a,b)=>(Gc=g.__sfetch_emsc_head_response=Z.Pb)(a,b),Dc=g.__sfetch_emsc_get_response=(a,b,c)=>(Dc=g.__sfetch_emsc_get_response=Z.Qb)(a,b,c),Fc=g.__sfetch_emsc_failed_http_status=(a,b)=>(Fc=g.__sfetch_emsc_failed_http_status=Z.Rb)(a,b),Ec=g.__sfetch_emsc_failed_buffer_too_small=a=>(Ec=g.__sfetch_emsc_failed_buffer_too_small=Z.Sb)(a),uc=a=>(uc=Z.Ub)(a),rc=a=>(rc=Z.Vb)(a),tc=()=>(tc=Z.Wb)(),Jc;B=function Kc(){Jc||Lc();Jc||(B=Kc)};
function Mc(a=[]){var b=Ic;a.unshift(fa);var c=a.length,d=rc(4*(c+1)),e=d;a.forEach(f=>{x[e>>2]=sc(f);e+=4});x[e>>2]=0;try{var k=b(c,d);Xa(k)}catch(f){Va(f)}}
function Lc(){var a=ea;function b(){if(!Jc&&(Jc=!0,g.calledRun=!0,!r)){Fa(sa);Fa(ta);g.onRuntimeInitialized?.();Nc&&Mc(a);if(g.postRun)for("function"==typeof g.postRun&&(g.postRun=[g.postRun]);g.postRun.length;){var c=g.postRun.shift();ua.unshift(c)}Fa(ua)}}if(!(0<A)){if(g.preRun)for("function"==typeof g.preRun&&(g.preRun=[g.preRun]);g.preRun.length;)va();Fa(ra);0<A||(g.setStatus?(g.setStatus("Running..."),setTimeout(function(){setTimeout(function(){g.setStatus("")},1);b()},1)):b())}}
if(g.preInit)for("function"==typeof g.preInit&&(g.preInit=[g.preInit]);0<g.preInit.length;)g.preInit.pop()();var Nc=!0;g.noInitialRun&&(Nc=!1);Lc();