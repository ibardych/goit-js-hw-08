!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a={},n={},r=t.parcelRequire4c75;null==r&&((r=function(e){if(e in a)return a[e].exports;if(e in n){var t=n[e];delete n[e];var r={id:e,exports:{}};return a[e]=r,t.call(r.exports,r,r.exports),r.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){n[e]=t},t.parcelRequire4c75=r);var l=r("1WSnx"),o=document.querySelector(".feedback-form"),s=e(l).throttle((function(){var e=o.elements.email.value,t=o.elements.message.value;localStorage.setItem("feedback-form-state",JSON.stringify({email:e,message:t}))}),500);o.addEventListener("input",s);o.addEventListener("submit",(function(){localStorage.setItem("feedback-form-state",""),o.reset()}));var i=JSON.parse(localStorage.getItem("feedback-form-state")||"{}");o.elements.email.value=i.email||"",o.elements.message.value=i.message||""}();
//# sourceMappingURL=03-feedback.05c7ce54.js.map
