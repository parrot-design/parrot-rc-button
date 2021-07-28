!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t(require("react"),require("@parrotjs/react-ripple"),require("@parrotjs/classnames"),require("@parrotjs/react-loading")):"function"==typeof define&&define.amd?define(["react","@parrotjs/react-ripple","@parrotjs/classnames","@parrotjs/react-loading"],t):(e="undefined"!=typeof globalThis?globalThis:e||self).ParrotRcButton=t(e.React,e.ParrotRcRipple,e.ParrotClassname,e.ParrotRcLoading)}(this,(function(e,t,r,o){"use strict";function a(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var n=a(e),l=a(t),i=a(r),c=a(o);const s=n.default.forwardRef(((e,t)=>{const{prefixCls:r="parrot",componentName:o="button",children:a,className:s,size:p="default",color:u="default",type:f="contained",shape:d="round",outline:m,loading:y,style:b,onClick:g}=e,j=
/*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
function(e,t){var r={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(r[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(o=Object.getOwnPropertySymbols(e);a<o.length;a++)t.indexOf(o[a])<0&&Object.prototype.propertyIsEnumerable.call(e,o[a])&&(r[o[a]]=e[o[a]])}return r}(e,["prefixCls","componentName","children","className","size","color","type","shape","outline","loading","style","onClick"]),$=r+"-"+o;return n.default.createElement(l.default,Object.assign({className:i.default($,s,{[`${$}-${p}`]:p,[`${$}-color-${f}-${u}`]:u&&!m,[`${$}-type-${f}`]:f&&!m,[`${$}-${d}`]:d,[`${$}-outline-${u}`]:u&&m,[`${$}-loading`]:y}),style:b,disableTouchRipple:y,ref:t,component:"button",onClick:g},j),y&&n.default.createElement(c.default,{size:18,style:{marginRight:6},color:u}),a)}));return n.default.memo(s)}));
