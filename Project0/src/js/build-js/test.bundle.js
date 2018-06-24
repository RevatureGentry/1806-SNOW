!function(e){var t={};function r(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(n,i,function(t){return e[t]}.bind(null,i));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=10)}([function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.typecheckString=function(e){if("string"!=typeof e)throw new Error("input is not a string")},t.typecheckNumber=function(e){if("number"!=typeof e)throw new Error("input is not a number")},t.typecheckBool=function(e){if("boolean"!=typeof e)throw new Error("input is not a boolean")}},function(e,t,r){"use strict";function n(e){if("string"!=typeof e)throw new Error("input is not a string")}Object.defineProperty(t,"__esModule",{value:!0}),t.preprocess=function(e){n(e);var t=e.trim();return""===t?[]:t.split(/[\s]+/)},t.verifyToken=function(e){return n(e),/^([A-G][1-9]?|(!)?~)$/.test(e)},t.typecheckString=n,t.typecheckNumber=function(e){if("number"!=typeof e)throw new Error("input is not a number")},t.verifyUnit=function(e){return n(e),/^(([1248])|16)$/.test(e)}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.verifyUnit=function(e){return n.typecheckNumber(e),1===e||2===e||4===e||8===e||16===e},t.translate=function(e,t,r){n.typecheckNumber(t),n.typecheckNumber(r);var o=0,u=0,a=[],s=[],c=[],l=[];for(;o<e.length;)"~"===e[o]?0===u?l.push([e[o],o]):u+=1:(s.push(e[o]),u>0&&c.push(i(u,t,r)),u=1),o++;return c.push(i(u,t,r)),a.push(s),a.push(c),a.push(l),a},t.convertCountToDuration=i;var n=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}(r(0));function i(e,t,r){n.typecheckNumber(e),n.typecheckNumber(t),n.typecheckNumber(r);var i=e/r;return Math.floor(60*i*1e3)/1e3}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),i=u(r(0)),o=u(r(2));function u(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}var a=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._unit=4,this._units_per_minute=4,this._translation=[],this._errors=[]}return n(e,[{key:"setBaseUnit",value:function(e){if(i.typecheckNumber(e),!o.verifyUnit(e))throw new Error("base unit was not a valid unit. Valid units are '1', '2', '4', '8', '16'");this._unit=e}},{key:"getBaseUnit",value:function(){return this._unit}},{key:"setUnitsPerMinute",value:function(e){if(i.typecheckNumber(e),e<1)throw new Error("units per minute should be at least 1");this._units_per_minute=e}},{key:"getUnitsPerMinute",value:function(){return this._units_per_minute}},{key:"hasErrors",value:function(){return this._errors.length>0}},{key:"getErrors",value:function(){return this._errors}},{key:"getErrorSummary",value:function(){for(var e="The translator found the following errors:\n\n",t=0;t<this._errors.length;t++)e=e+"Token '"+this._errors[t][0]+"' at position "+this._errors[t][1]+" could not be translated\n";return e}},{key:"getTranslation",value:function(){return this._translation}},{key:"translate",value:function(e){if(e.length<2)throw new Error("voices array does not contain any voices!");this._clearOldTranslation();for(var t=1;t<e.length;t++)this._doTranslate(e[t]);return this.getTranslation()}},{key:"_clearOldTranslation",value:function(){this._translation=[],this._errors=[]}},{key:"_doTranslate",value:function(e){var t=o.translate(e,this.getBaseUnit(),this.getUnitsPerMinute()),r=t[2];r.length>0&&this._addError(r),this._translation.push([t[0],t[1]])}},{key:"_addError",value:function(e){this._errors=this._errors.concat(e)}}]),e}();t.default=a},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),i=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}(r(1));var o=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._note_table=new Map([["A","A4"],["B","B4"],["C","C4"],["D","D4"],["E","E4"],["F","F4"],["G","G4"]]),this._attr_table=new Map([])}return n(e,[{key:"convert",value:function(e,t){if(i.typecheckString(e),"number"!=typeof t)throw new Error("tokenPosition is not a number");if(/^[A-G]$/.test(e))return this._getNote(e);if(/^[A-G][1-9]$/.test(e))return e;if(/^([!]?[~])$/.test(e))return e;throw new Error("Conversion failed! Unexpected token!")}},{key:"_getNote",value:function(e){return i.typecheckString(e),this._note_table.get(e)}}]),e}();t.default=o},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={NEW_VOICE:"NEW"}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),i=a(r(5)),o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}(r(1)),u=a(r(4));function a(e){return e&&e.__esModule?e:{default:e}}var s=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._num_voices=1,this._voices=[[],[]],this._token_stream=[],this._token_index=0,this._errors=[],this._unit_note="4"}return n(e,[{key:"setUnitNote",value:function(e){if(typecheckString(e),!o.verifyUnit(e))throw new Error("invalid unit note");this._unit_note=e}},{key:"getUnitNote",value:function(){return this._unit_note}},{key:"getVoice",value:function(e){if("number"!=typeof e)throw new Error("index not a number");if(e<1)throw new Error("not a valid index. Valid indexes are integers >= 1");return this._voices[e]}},{key:"getNumVoices",value:function(){return this._num_voices}},{key:"getAllVoices",value:function(){return this._voices}},{key:"getErrors",value:function(){return this._errors}},{key:"hasErrors",value:function(){return this._errors.length>0}},{key:"getErrorSummary",value:function(){for(var e="The following errors were found:\n\n",t=0;t<this._errors.length;t++)e=""+e+this._errors[t][0]+" at token position "+this._errors[t][1]+"\n";return e}},{key:"lex",value:function(e){return o.typecheckString(e),this._clearOldMusic(),this._doLexing(e),this.getAllVoices()}},{key:"_clearOldMusic",value:function(){this._token_stream=[],this._token_index=0,this._voices=[[],[]],this._num_voices=1,this._errors=[]}},{key:"_doLexing",value:function(e){o.typecheckString(e),this._preprocessMusic(e),this._process()}},{key:"_preprocessMusic",value:function(e){o.typecheckString(e),this._token_stream=o.preprocess(e)}},{key:"_process",value:function(){for(;this._hasMoreMusicTokens();){var e=this._nextMusicToken(),t=this._token_index-1;e===i.default.NEW_VOICE?this._addNewVoice():this._addToken(e,t)}}},{key:"_hasMoreMusicTokens",value:function(){return this._token_index<this._token_stream.length}},{key:"_nextMusicToken",value:function(){var e=this._token_stream[this._token_index];return this._token_index+=1,e}},{key:"_addNewVoice",value:function(){this._num_voices+=1,this._voices.push([])}},{key:"_addToken",value:function(e,t){o.typecheckString(e),o.typecheckNumber(t),this._tokenIsInLanguage(e)?this.addNote(this.convertTokenToNote(e,t)):this._addError(e)}},{key:"_tokenIsInLanguage",value:function(e){return o.typecheckString(e),o.verifyToken(e)}},{key:"convertTokenToNote",value:function(e,t){return o.typecheckString(e),o.typecheckNumber(t),(new u.default).convert(e,t)}},{key:"addNote",value:function(e){o.typecheckString(e),this._voices[this.getNumVoices()].push(e)}},{key:"_addError",value:function(e){o.typecheckString(e);var t=this._token_index-1;this._errors.push([e,t])}}]),e}();t.default=s},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.extractHeader=function(e){n.typecheckString(e);var t={},r=e.trim().split("\n");if(3!==r.length)throw new Error("header does not have 3 lines. Headers are expected to take the following form:\n<TITLE> \n<AUTHOR> \nunit <UNIT> upm <UPM> beat <BEAT>");t.title=r[0].trim(),t.author=r[1].trim();var i=r[2].trim().split(/[\s]+/);if(6!==i.length)throw new Error("header modifiers were not correctly written. Should be of form 'unit <UNIT> upm <UPM> beat <BEAT>");var o=0;for(;o<i.length;){if("unit"===i[o])t.unit=parseInt(i[o+1]);else if("upm"===i[o])t.upm=parseInt(i[o+1]);else{if("beat"!==i[o])throw new Error("header modifier token "+i[o]+" is invalid. Choose from 'unit', 'upm', and 'beat'");t.beat=parseInt(i[o+1])}o+=2}return t};var n=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}(r(0))},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),i=u(r(0)),o=u(r(7));function u(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}var a=function(){function e(t,r){if(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),!t)throw new Error("Must provide a lexer");if(!r)throw new Error("Must provide a translator");this._lexer=t,this._translator=r,this._author="",this._title="",this._beat=4,this._unit=4}return n(e,[{key:"hasLexerErrors",value:function(){return this._lexer.hasErrors()}},{key:"hasTranslatorErrors",value:function(){return this._translator.hasErrors()}},{key:"hasErrors",value:function(){return this.hasLexerErrors()||this.hasTranslatorErrors()}},{key:"getErrors",value:function(){return this._lexer.getErrors().concat(this._translator.getErrors())}},{key:"getErrorSummary",value:function(){return this._lexer.getErrorSummary()+this._translator.getErrorSummary()}},{key:"getGeneratedMusic",value:function(){return this._translator.getTranslation()}},{key:"getTitle",value:function(){return this._title}},{key:"getAuthor",value:function(){return this._author}},{key:"hasUnit",value:function(e){return e===this._unit}},{key:"hasBeat",value:function(e){return e===this._beat}},{key:"hasUnitsPerMinute",value:function(e){return e===this._translator.getUnitsPerMinute()}},{key:"getBpm",value:function(){return this._beat/this._unit*this._translator.getUnitsPerMinute()}},{key:"generate",value:function(e){return i.typecheckString(e),this._clearOldGeneratedMusic(),this._setHeaderValues(this._extractHeaderValues(e)),this._lex(this._extractScoreValues(e)),this._translate(),this.getGeneratedMusic()}},{key:"_clearOldGeneratedMusic",value:function(){}},{key:"_setHeaderValues",value:function(e){this._title=e.title?e.title:"Unknown",this._author=e.author?e.author:"Unknown",this._translator.setUnitsPerMinute(e.upm?e.upm:60),this._unit=e.unit?e.unit:4,this._beat=e.beat?e.beat:4}},{key:"_extractHeaderValues",value:function(e){if(i.typecheckString(e),!e.includes("-ScoreStart-"))throw new Error("music file requires a string '-ScoreStart-' to denote the end of the header");return o.extractHeader(e.split("-ScoreStart-")[0])}},{key:"_extractScoreValues",value:function(e){if(i.typecheckString(e),!e.includes("-ScoreStart-"))throw new Error("music file requires a string '-ScoreStart-' to denote the start of the score");return e.split("-ScoreStart-")[1]}},{key:"_lex",value:function(e){i.typecheckString(e),this._lexer.lex(e)}},{key:"_translate",value:function(){this._translator.translate(this._lexer.getAllVoices())}}]),e}();t.default=a},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),i=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}(r(0));var o=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._instruments=[]}return n(e,[{key:"schedule",value:function(e){for(var t=0;t<e.length;t++){if(e[t][0].length!==e[t][1].length)throw new Error("number of notes does not equal number of durations");this._instruments.push(new Tone.Synth({oscillator:{type:"amtriangle",harmonicity:.5,modulationType:"sine"},envelope:{attackCurve:"exponential",attack:.05,decay:.2,sustain:.2,release:1.5},portamento:.05}).toMaster());for(var r=0,n=e[t][0],i=e[t][1],o=0;o<n.length;o++)Tone.Transport.schedule(this._scheduleNote(n[o],i[o]),r),r+=i[o]}}},{key:"_scheduleNote",value:function(e,t){i.typecheckString(e),i.typecheckNumber(t);var r=this._instruments[this._instruments.length-1];return function(n){r.triggerAttackRelease(e,t,n)}}},{key:"play",value:function(){Tone.Transport.start("+0.1")}},{key:"stop",value:function(){Tone.Transport.stop()}}]),e}();t.default=o},function(e,t,r){"use strict";var n=a(r(9)),i=a(r(8)),o=a(r(6)),u=a(r(3));function a(e){return e&&e.__esModule?e:{default:e}}window.onload=function(e){console.log("I am running");var t=new i.default(new o.default,new u.default);if(t.generate("Twinkle Twinkle Little Star\nUnknown\nunit 4 upm 80 beat 4\n\n-ScoreStart- C C G G A A G ~ F F E E D D C ~ NEW \nC5 C5 G5 G5 A5 A5 G5 ~ F5 F5 E5 E5 D5 D5 C5 ~ NEW\nE E B B C5 C5 B ~ A A G G F F E ~"),console.log(t.getGeneratedMusic()),t.hasErrors())console.log("UNEXPECTED ERROR");else{var r=new n.default;r.schedule(t.getGeneratedMusic());var a=document.getElementById("play"),s=document.getElementById("stop");a.addEventListener("click",function(e){r.play(),a.disabled=!0,s.disabled=!1}),s.addEventListener("click",function(e){r.stop(),a.disabled=!1,s.disabled=!0})}}}]);
//# sourceMappingURL=test.bundle.js.map