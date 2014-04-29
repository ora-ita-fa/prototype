define(["ojs/ojcore","jquery","ojs/ojcomponentcore","ojs/ojcollapsible"],function(b,e){(function(){b.ta("oj.ojAccordion",e.oj.baseComponent,{version:"1.0.0",widgetEventPrefix:"oj",options:{multiple:!1,beforeExpand:null,afterExpand:null,beforeCollapse:null,afterCollapse:null},Ic:function(){this._super();this.element.addClass("oj-accordion oj-component").attr("role","group");this.Nb()},ag:function(a,b){a.show(b,{launcher:this.element.find(".oj-collapsible-header-icon").first(),focus:"menu"})},_destroy:function(){this.element.removeClass("oj-accordion oj-component").removeAttr("role");
this.element.children().removeClass("oj-accordion-collapsible");this.element.children(".oj-accordion-created").removeClass("oj-accordion-created").ojCollapsible("destroy")},_setOption:function(a,b){"multiple"===a&&!1==b&&!0==this.options.multiple&&this.Oj.not(".oj-collapsible-collapsed").first().siblings(".oj-collapsible").trigger("ojcollapse");this._super(a,b);"disabled"===a&&((b=!!b)&&this.Oj.each(function(){null==e(this).ojCollapsible("option",a)&&e(this).ojCollapsible("option",a,b)}),this.element.toggleClass("oj-disabled",
b))},refresh:function(){this._super();this.Nb()},Nb:function(){this.xL();this._setOption("disabled",this.options.disabled);this.mi()},xL:function(){this.element.children(":oj-collapsible").each(function(){e(this).ojCollapsible("option","clickable","header")});this.Oj=this.element.children().not(":oj-ojCollapsible").ojCollapsible({UR:"header"}).addClass("oj-accordion-created").end().addClass("oj-accordion-collapsible")},mi:function(){var a={keydown:this.bi,ojbeforeexpand:this.iH,ojafterexpand:this.BI,
ojbeforecollapse:this.hH,ojaftercollapse:this.HH};this._off(this.Oj);this._on(this.Oj,a)},bi:function(a){if(!a.altKey&&!a.ctrlKey&&(e(a.target).hasClass("oj-collapsible-header")||e(a.target).hasClass("oj-collapsible-header-icon"))){var b=e.ui.keyCode,c=this.Oj.not(".oj-disabled"),f=c.length,h=e(a.target).closest(".oj-collapsible"),g=c.index(h),k=!1;if(0<=g)switch(a.keyCode){case b.RIGHT:case b.DOWN:k=c[(g+1)%f];break;case b.LEFT:case b.UP:k=c[(g-1+f)%f];break;case b.HOME:k=c[0];break;case b.END:k=
c[f-1]}k&&(h&&e(h).trigger("ojfocusout"),e(k).trigger("ojfocus"),a.preventDefault())}},oy:function(a){return!this.options.multiple&&(a=e(a.target).closest(".oj-collapsible"),a.parent().is(":oj-ojAccordion"))?a.siblings(".oj-collapsible:not(.oj-collapsible-collapsed)").map(function(){return e(this).data("oj-ojCollapsible")}):e()},iH:function(a){var b,c=this,e;this.oy(a).each(function(){e=c.$h(a,this.element);return b=this._trigger("beforeCollapse",a,{newCollapsible:e.oldCollapsible,oldCollapsible:e.newCollapsible})});
e||(e=c.$h(a,null));this._trigger("beforeExpand",a,e);return b},BI:function(a,b){var c,e=this;this.oy(a).each(function(){this.collapse(!1,a,b);c=e.$h(a,this.element)});c||(c=e.$h(a,null));this._trigger("afterExpand",a,c)},hH:function(a,b){var c;c=b.newCollapsible?b:this.$h(a,null);return this._trigger("beforeCollapse",a,c)},HH:function(a,b){var c;if(b.newCollapsible)c=b;else{if(a.originalEvent&&a.originalEvent.target){var f=e(a.originalEvent.target);f.hasClass("oj-collapsible")&&(c=this.$h(a,f))}c||
(c=this.$h(a,null))}this._trigger("afterCollapse",a,c)},$h:function(a,b){return{oldCollapsible:b,newCollapsible:e(a.target)}},getNodeBySubId:function(a){if(null==a)return this.element?this.element[0]:null;var b=a.subId;a=this.Oj[a.index];switch(b){case "oj-accordion-content":b="oj-collapsible-content";break;case "oj-accordion-header":b="oj-collapsible-header";break;case "oj-accordion-header-icon":b="oj-collapsible-header-icon";break;case "oj-accordion-collapsible":return a;default:return null}return e(a).ojCollapsible("getNodeBySubId",
{BS:b})}})})()});
//# sourceMappingURL=oj-modular.map