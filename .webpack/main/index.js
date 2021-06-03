(()=>{var e={553:(e,t,r)=>{t.formatArgs=function(t){if(t[0]=(this.useColors?"%c":"")+this.namespace+(this.useColors?" %c":" ")+t[0]+(this.useColors?"%c ":" ")+"+"+e.exports.humanize(this.diff),!this.useColors)return;const r="color: "+this.color;t.splice(1,0,r,"color: inherit");let s=0,n=0;t[0].replace(/%[a-zA-Z%]/g,(e=>{"%%"!==e&&(s++,"%c"===e&&(n=s))})),t.splice(n,0,r)},t.save=function(e){try{e?t.storage.setItem("debug",e):t.storage.removeItem("debug")}catch(e){}},t.load=function(){let e;try{e=t.storage.getItem("debug")}catch(e){}return!e&&"undefined"!=typeof process&&"env"in process&&(e=process.env.DEBUG),e},t.useColors=function(){return!("undefined"==typeof window||!window.process||"renderer"!==window.process.type&&!window.process.__nwjs)||("undefined"==typeof navigator||!navigator.userAgent||!navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/))&&("undefined"!=typeof document&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||"undefined"!=typeof window&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/))},t.storage=function(){try{return localStorage}catch(e){}}(),t.destroy=(()=>{let e=!1;return()=>{e||(e=!0,console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."))}})(),t.colors=["#0000CC","#0000FF","#0033CC","#0033FF","#0066CC","#0066FF","#0099CC","#0099FF","#00CC00","#00CC33","#00CC66","#00CC99","#00CCCC","#00CCFF","#3300CC","#3300FF","#3333CC","#3333FF","#3366CC","#3366FF","#3399CC","#3399FF","#33CC00","#33CC33","#33CC66","#33CC99","#33CCCC","#33CCFF","#6600CC","#6600FF","#6633CC","#6633FF","#66CC00","#66CC33","#9900CC","#9900FF","#9933CC","#9933FF","#99CC00","#99CC33","#CC0000","#CC0033","#CC0066","#CC0099","#CC00CC","#CC00FF","#CC3300","#CC3333","#CC3366","#CC3399","#CC33CC","#CC33FF","#CC6600","#CC6633","#CC9900","#CC9933","#CCCC00","#CCCC33","#FF0000","#FF0033","#FF0066","#FF0099","#FF00CC","#FF00FF","#FF3300","#FF3333","#FF3366","#FF3399","#FF33CC","#FF33FF","#FF6600","#FF6633","#FF9900","#FF9933","#FFCC00","#FFCC33"],t.log=console.debug||console.log||(()=>{}),e.exports=r(917)(t);const{formatters:s}=e.exports;s.j=function(e){try{return JSON.stringify(e)}catch(e){return"[UnexpectedJSONParseError]: "+e.message}}},917:(e,t,r)=>{e.exports=function(e){function t(e){let r,n=null;function o(...e){if(!o.enabled)return;const s=o,n=Number(new Date),i=n-(r||n);s.diff=i,s.prev=r,s.curr=n,r=n,e[0]=t.coerce(e[0]),"string"!=typeof e[0]&&e.unshift("%O");let c=0;e[0]=e[0].replace(/%([a-zA-Z%])/g,((r,n)=>{if("%%"===r)return"%";c++;const o=t.formatters[n];if("function"==typeof o){const t=e[c];r=o.call(s,t),e.splice(c,1),c--}return r})),t.formatArgs.call(s,e),(s.log||t.log).apply(s,e)}return o.namespace=e,o.useColors=t.useColors(),o.color=t.selectColor(e),o.extend=s,o.destroy=t.destroy,Object.defineProperty(o,"enabled",{enumerable:!0,configurable:!1,get:()=>null===n?t.enabled(e):n,set:e=>{n=e}}),"function"==typeof t.init&&t.init(o),o}function s(e,r){const s=t(this.namespace+(void 0===r?":":r)+e);return s.log=this.log,s}function n(e){return e.toString().substring(2,e.toString().length-2).replace(/\.\*\?$/,"*")}return t.debug=t,t.default=t,t.coerce=function(e){return e instanceof Error?e.stack||e.message:e},t.disable=function(){const e=[...t.names.map(n),...t.skips.map(n).map((e=>"-"+e))].join(",");return t.enable(""),e},t.enable=function(e){let r;t.save(e),t.names=[],t.skips=[];const s=("string"==typeof e?e:"").split(/[\s,]+/),n=s.length;for(r=0;r<n;r++)s[r]&&("-"===(e=s[r].replace(/\*/g,".*?"))[0]?t.skips.push(new RegExp("^"+e.substr(1)+"$")):t.names.push(new RegExp("^"+e+"$")))},t.enabled=function(e){if("*"===e[e.length-1])return!0;let r,s;for(r=0,s=t.skips.length;r<s;r++)if(t.skips[r].test(e))return!1;for(r=0,s=t.names.length;r<s;r++)if(t.names[r].test(e))return!0;return!1},t.humanize=r(58),t.destroy=function(){console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.")},Object.keys(e).forEach((r=>{t[r]=e[r]})),t.names=[],t.skips=[],t.formatters={},t.selectColor=function(e){let r=0;for(let t=0;t<e.length;t++)r=(r<<5)-r+e.charCodeAt(t),r|=0;return t.colors[Math.abs(r)%t.colors.length]},t.enable(t.load()),t}},435:(e,t,r)=>{"undefined"==typeof process||"renderer"===process.type||!0===process.browser||process.__nwjs?e.exports=r(553):e.exports=r(200)},200:(e,t,r)=>{const s=r(867),n=r(669);t.init=function(e){e.inspectOpts={};const r=Object.keys(t.inspectOpts);for(let s=0;s<r.length;s++)e.inspectOpts[r[s]]=t.inspectOpts[r[s]]},t.log=function(...e){return process.stderr.write(n.format(...e)+"\n")},t.formatArgs=function(r){const{namespace:s,useColors:n}=this;if(n){const t=this.color,n="[3"+(t<8?t:"8;5;"+t),o=`  ${n};1m${s} [0m`;r[0]=o+r[0].split("\n").join("\n"+o),r.push(n+"m+"+e.exports.humanize(this.diff)+"[0m")}else r[0]=(t.inspectOpts.hideDate?"":(new Date).toISOString()+" ")+s+" "+r[0]},t.save=function(e){e?process.env.DEBUG=e:delete process.env.DEBUG},t.load=function(){return process.env.DEBUG},t.useColors=function(){return"colors"in t.inspectOpts?Boolean(t.inspectOpts.colors):s.isatty(process.stderr.fd)},t.destroy=n.deprecate((()=>{}),"Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."),t.colors=[6,2,3,4,5,1];try{const e=r(441);e&&(e.stderr||e).level>=2&&(t.colors=[20,21,26,27,32,33,38,39,40,41,42,43,44,45,56,57,62,63,68,69,74,75,76,77,78,79,80,81,92,93,98,99,112,113,128,129,134,135,148,149,160,161,162,163,164,165,166,167,168,169,170,171,172,173,178,179,184,185,196,197,198,199,200,201,202,203,204,205,206,207,208,209,214,215,220,221])}catch(e){}t.inspectOpts=Object.keys(process.env).filter((e=>/^debug_/i.test(e))).reduce(((e,t)=>{const r=t.substring(6).toLowerCase().replace(/_([a-z])/g,((e,t)=>t.toUpperCase()));let s=process.env[t];return s=!!/^(yes|on|true|enabled)$/i.test(s)||!/^(no|off|false|disabled)$/i.test(s)&&("null"===s?null:Number(s)),e[r]=s,e}),{}),e.exports=r(917)(t);const{formatters:o}=e.exports;o.o=function(e){return this.inspectOpts.colors=this.useColors,n.inspect(e,this.inspectOpts).split("\n").map((e=>e.trim())).join(" ")},o.O=function(e){return this.inspectOpts.colors=this.useColors,n.inspect(e,this.inspectOpts)}},327:(e,t,r)=>{var s=r(622),n=r(129).spawn,o=r(435)("electron-squirrel-startup"),i=r(933).app,c=function(e,t){var r=s.resolve(s.dirname(process.execPath),"..","Update.exe");o("Spawning `%s` with args `%s`",r,e),n(r,e,{detached:!0}).on("close",t)};e.exports=function(){if("win32"===process.platform){var e=process.argv[1];o("processing squirrel command `%s`",e);var t=s.basename(process.execPath);if("--squirrel-install"===e||"--squirrel-updated"===e)return c(["--createShortcut="+t],i.quit),!0;if("--squirrel-uninstall"===e)return c(["--removeShortcut="+t],i.quit),!0;if("--squirrel-obsolete"===e)return i.quit(),!0}return!1}()},419:e=>{"use strict";e.exports=(e,t=process.argv)=>{const r=e.startsWith("-")?"":1===e.length?"-":"--",s=t.indexOf(r+e),n=t.indexOf("--");return-1!==s&&(-1===n||s<n)}},58:e=>{var t=1e3,r=60*t,s=60*r,n=24*s;function o(e,t,r,s){var n=t>=1.5*r;return Math.round(e/r)+" "+s+(n?"s":"")}e.exports=function(e,i){i=i||{};var c,a,u=typeof e;if("string"===u&&e.length>0)return function(e){if(!((e=String(e)).length>100)){var o=/^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(e);if(o){var i=parseFloat(o[1]);switch((o[2]||"ms").toLowerCase()){case"years":case"year":case"yrs":case"yr":case"y":return 315576e5*i;case"weeks":case"week":case"w":return 6048e5*i;case"days":case"day":case"d":return i*n;case"hours":case"hour":case"hrs":case"hr":case"h":return i*s;case"minutes":case"minute":case"mins":case"min":case"m":return i*r;case"seconds":case"second":case"secs":case"sec":case"s":return i*t;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return i;default:return}}}}(e);if("number"===u&&isFinite(e))return i.long?(c=e,(a=Math.abs(c))>=n?o(c,a,n,"day"):a>=s?o(c,a,s,"hour"):a>=r?o(c,a,r,"minute"):a>=t?o(c,a,t,"second"):c+" ms"):function(e){var o=Math.abs(e);return o>=n?Math.round(e/n)+"d":o>=s?Math.round(e/s)+"h":o>=r?Math.round(e/r)+"m":o>=t?Math.round(e/t)+"s":e+"ms"}(e);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(e))}},441:(e,t,r)=>{"use strict";const s=r(87),n=r(867),o=r(419),{env:i}=process;let c;function a(e){return 0!==e&&{level:e,hasBasic:!0,has256:e>=2,has16m:e>=3}}function u(e,t){if(0===c)return 0;if(o("color=16m")||o("color=full")||o("color=truecolor"))return 3;if(o("color=256"))return 2;if(e&&!t&&void 0===c)return 0;const r=c||0;if("dumb"===i.TERM)return r;if("win32"===process.platform){const e=s.release().split(".");return Number(e[0])>=10&&Number(e[2])>=10586?Number(e[2])>=14931?3:2:1}if("CI"in i)return["TRAVIS","CIRCLECI","APPVEYOR","GITLAB_CI","GITHUB_ACTIONS","BUILDKITE"].some((e=>e in i))||"codeship"===i.CI_NAME?1:r;if("TEAMCITY_VERSION"in i)return/^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(i.TEAMCITY_VERSION)?1:0;if("truecolor"===i.COLORTERM)return 3;if("TERM_PROGRAM"in i){const e=parseInt((i.TERM_PROGRAM_VERSION||"").split(".")[0],10);switch(i.TERM_PROGRAM){case"iTerm.app":return e>=3?3:2;case"Apple_Terminal":return 2}}return/-256(color)?$/i.test(i.TERM)?2:/^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(i.TERM)||"COLORTERM"in i?1:r}o("no-color")||o("no-colors")||o("color=false")||o("color=never")?c=0:(o("color")||o("colors")||o("color=true")||o("color=always"))&&(c=1),"FORCE_COLOR"in i&&(c="true"===i.FORCE_COLOR?1:"false"===i.FORCE_COLOR?0:0===i.FORCE_COLOR.length?1:Math.min(parseInt(i.FORCE_COLOR,10),3)),e.exports={supportsColor:function(e){return a(u(e,e&&e.isTTY))},stdout:a(u(!0,n.isatty(1))),stderr:a(u(!0,n.isatty(2)))}},129:e=>{"use strict";e.exports=require("child_process")},933:e=>{"use strict";e.exports=require("electron")},87:e=>{"use strict";e.exports=require("os")},622:e=>{"use strict";e.exports=require("path")},765:e=>{"use strict";e.exports=require("process")},867:e=>{"use strict";e.exports=require("tty")},669:e=>{"use strict";e.exports=require("util")}},t={};function r(s){var n=t[s];if(void 0!==n)return n.exports;var o=t[s]={exports:{}};return e[s](o,o.exports,r),o.exports}(()=>{const{app:e,BrowserWindow:t}=r(933),s=(r(622),r(765));r(327)&&e.quit();const n=()=>{const e=new t({width:500,height:260,show:!1,backgroundColor:"#333",webPreferences:{enableRemoteModule:!0,nodeIntegration:!0,contextIsolation:!1},icon:s.resourcesPath+"/"+(__filename.includes(".asar")?"app.asar":"app")+"/.webpack/main/native_modules/favicon.png"});e.once("ready-to-show",(()=>{e.show()})),e.removeMenu(),void 0===`file://${require("path").resolve(__dirname,"..","renderer","main_window","index.html")}`?e.loadURL("http://localhost:3000/main_window"):e.loadURL(`file://${require("path").resolve(__dirname,"..","renderer","main_window","index.html")}`),e.webContents.openDevTools()};e.on("ready",n),e.on("window-all-closed",(()=>{"darwin"!==s.platform&&e.quit()})),e.on("activate",(()=>{0===t.getAllWindows().length&&n()}))})(),module.exports={}})();
//# sourceMappingURL=index.js.map