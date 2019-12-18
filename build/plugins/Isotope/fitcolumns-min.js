/*!
 * fitColumns layout mode for Isotope
 * v1.1.4
 * https://isotope.metafizzy.co/layout-modes/fitcolumns.html
 */
!function(t,e){"function"==typeof define&&define.amd?define(["isotope-layout/js/layout-mode"],e):"object"==typeof exports?module.exports=e(require("isotope-layout/js/layout-mode")):e(t.Isotope.LayoutMode)}(window,(function(t){"use strict";var e=t.create("fitColumns"),i=e.prototype;return i._resetLayout=function(){this.x=0,this.y=0,this.maxX=0},i._getItemLayoutPosition=function(t){t.getSize(),0!==this.y&&t.size.outerHeight+this.y>this.isotope.size.innerHeight&&(this.y=0,this.x=this.maxX);var e={x:this.x,y:this.y};return this.maxX=Math.max(this.maxX,this.x+t.size.outerWidth),this.y+=t.size.outerHeight,e},i._getContainerSize=function(){return{width:this.maxX}},i.needsResizeLayout=function(){return this.needsVerticalResizeLayout()},e}));