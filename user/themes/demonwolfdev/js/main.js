!function(n){var e={};function o(a){if(e[a])return e[a].exports;var r=e[a]={i:a,l:!1,exports:{}};return n[a].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=n,o.c=e,o.d=function(n,e,a){o.o(n,e)||Object.defineProperty(n,e,{configurable:!1,enumerable:!0,get:a})},o.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return o.d(e,"a",e),e},o.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},o.p="",o(o.s=0)}([function(n,e,o){n.exports=o(1)},function(n,e){$(function(){$("#bs-example-navbar-collapse-1").on("shown.bs.collapse",function(){$("#navbar-hamburger").addClass("hidden"),$("#navbar-close").removeClass("hidden")}).on("hidden.bs.collapse",function(){$("#navbar-hamburger").removeClass("hidden"),$("#navbar-close").addClass("hidden")})}),$(document).on("click",".navbar-collapse.in",function(n){$(n.target).is("a")&&"dropdown-toggle"!=$(n.target).attr("class")&&$(this).collapse("hide")}),$(function(){$(document).click(function(n){$(".navbar-collapse").collapse("hide")})}),$(window).scroll(function(){$(document).scrollTop()>50?$("nav").addClass("shrink"):$("nav").removeClass("shrink")})}]);