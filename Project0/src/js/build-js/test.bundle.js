!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=2)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.typecheckString=function(e){if("string"!=typeof e)throw new Error("input is not a string")},t.typecheckNumber=function(e){if("number"!=typeof e)throw new Error("input is not a number")},t.typecheckBool=function(e){if("boolean"!=typeof e)throw new Error("input is not a boolean")}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(0));var u=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._instruments=[]}return r(e,[{key:"schedule",value:function(e){for(var t=0;t<e.length;t++){if(e[t][0].length!==e[t][1].length)throw new Error("number of notes does not equal number of durations");this._instruments.push(new Tone.Synth({oscillator:{type:"amtriangle",harmonicity:.5,modulationType:"sine"},envelope:{attackCurve:"exponential",attack:.05,decay:.2,sustain:.2,release:1.5},portamento:.05}).toMaster());for(var n=0,r=e[t][0],o=e[t][1],u=0;u<r.length;u++)Tone.Transport.schedule(this._scheduleNote(r[u],o[u]),n),n+=o[u]}}},{key:"_scheduleNote",value:function(e,t){o.typecheckString(e),o.typecheckNumber(t);var n=this._instruments[this._instruments.length-1];return function(r){n.triggerAttackRelease(e,t,r)}}},{key:"play",value:function(){Tone.Transport.start("+0.1")}},{key:"stop",value:function(){Tone.Transport.stop()}}]),e}();t.default=u},function(e,t,n){"use strict";var r=function(e){return e&&e.__esModule?e:{default:e}}(n(1));window.onload=function(e){console.log("I am running");var t=new r.default;t.schedule([[["C4","D4","E4","F4","G4","A4","B4","C5"],[.5,.5,.5,.5,.5,.5,.5,.5]]]);var n=document.getElementById("play"),o=document.getElementById("stop");n.addEventListener("click",function(e){t.play(),n.disabled=!0,o.disabled=!1}),o.addEventListener("click",function(e){t.stop(),n.disabled=!1,o.disabled=!0})}}]);
//# sourceMappingURL=test.bundle.js.map