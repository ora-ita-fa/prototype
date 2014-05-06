define(["ojs/ojcore","jquery","ojs/ojcomponentcore","ojs/ojconveyorbelt"],function(b,e){(function(){b.ta("oj.ojTabs",e.oj.baseComponent,{version:"1.0.0",widgetEventPrefix:"oj",delay:300,options:{selected:0,disabled:!1,truncation:"auto",selectOn:"click",orientation:"horizontal",removable:!1,removeCueText:"Removable",reorderable:!1,beforeSelect:null,afterSelect:null,beforeDeselect:null,afterDeselect:null,beforeRemove:null,afterRemove:null,optionChange:null},Kc:function(){var a=this,b=this.options;this._super();
this.Mu=!1;this.PB(b.orientation);this.CA();if(Array.isArray(b.disabled)){var c=this.Oa.filter(".oj-disabled");b.disabled=e.unique(b.disabled.concat(e.map(c,function(b){return a.Oa.index(b)}))).sort()}this.xj=b.selected;b.selected=-1;this.Ob()},eg:function(a,b){a.show(b,{launcher:this.element.children(".oj-tabs-nav").children("[tabindex\x3d0]"),focus:"menu"})},cO:function(a){var b=e(this.document[0].activeElement).closest("li"),c=this.Oa.index(b),f=!0;if(!this.uz(a)){switch(a.keyCode){case e.ui.keyCode.RIGHT:case e.ui.keyCode.DOWN:c++;
break;case e.ui.keyCode.UP:case e.ui.keyCode.LEFT:f=!1;c--;break;case e.ui.keyCode.END:c=this.Oa.length-1;break;case e.ui.keyCode.HOME:c=0;break;case 46:if(b=this.$.find(".oj-tabs-close-icon"))a.preventDefault(),this.iB({target:b,currentTarget:b,preventDefault:e.noop});return;default:return}a.preventDefault();clearTimeout(this.FO);c=this.Kr(c,f);a.ctrlKey||(b.attr("aria-selected","false"),this.Oa.eq(c).attr("aria-selected","true"),this.FO=this._delay(function(){this.option("selected",c)},this.delay))}},
oM:function(a){!this.uz(a)&&(a.ctrlKey&&a.keyCode===e.ui.keyCode.UP)&&(a.preventDefault(),this.$.focus())},uz:function(a){if(a.ctrlKey&&a.keyCode===e.ui.keyCode.PAGE_UP)return this.Eg(this.Kr(this.options.selected-1,!1)),!0;if(a.ctrlKey&&a.keyCode===e.ui.keyCode.PAGE_DOWN)return this.Eg(this.Kr(this.options.selected+1,!0)),!0},Es:function(a){return-1!=e.inArray(a,this.options.disabled)},eJ:function(a,b){function c(){a>e&&(a=0);0>a&&(a=e);return a}for(var e=this.Oa.length-1;this.Es(c());)a=b?a+1:a-
1;return a},Kr:function(a,b){a=this.eJ(a,b);this.Oa.eq(a).focus();return a},Mw:function(a){for(var b=this.Oa.length-1,c=a+1;c<=b;){if(!this.Es(c))return this.Eg(c),c-1;c++}for(c=a-1;0<=c;){if(!this.Es(c))return this.Eg(c),c;c--}return-1},_setOption:function(a,b){"selected"===a?("string"===typeof b&&(b=this.ap(b)),this.Eg(b)):"disabled"===a?this.jp(b):"removable"===a?this.ON(b):"reorderable"===a?b!==this.options.reorderable&&(this.options.reorderable=b,this.QB()):"orientation"===a?(this.PB(b),this.refresh()):
(this._super(a,b),"selectOn"===a&&(this.Tl(),this._super(a,b),this.ti()))},refresh:function(){this._super();this.II();this.CA();this.Ob()},Ob:function(){var a=this.options;this.$=this.Oa.length&&-1!=a.selected?this.Ay(a.selected):e();this.jp(a.disabled);this.cI();this.Tl();this.ti();this.Oa.not(this.$).attr({"aria-selected":"false",tabIndex:"-1"});this.Ld.not(this.Yh(this.$)).hide().attr({"aria-expanded":"false","aria-hidden":"true"});this.$.length?(this.$.addClass("oj-tabs-active").attr({"aria-selected":"true",
tabIndex:"0"}),this.Yh(this.$).show().attr({"aria-expanded":"true","aria-hidden":"false"})):this.Oa.eq(0).attr("tabIndex","0");if(void 0!==this.xj){var b=this.xj;a.selected=0!=b&&(0>b||b>this.Oa.length)?0:b;-1!==e.inArray(b,a.disabled)&&(a.selected=this.Mw(b));this.Eg(a.selected);this.xj=void 0}"horizontal"==a.orientation&&(this.oO(),this.bH());this.QB()},bH:function(){if("horizontal"==this.options.orientation){var a=this.Pm.uniqueId().attr("id"),b=this.mz().wrap("\x3cdiv\x3e").parent();b.uniqueId().attr("id");
b.addClass("oj-tabs-conveyorbelt");this.hh=b.ojConveyorBelt({orientation:"horizontal",contentParent:"#"+a})}},CA:function(){var a=this;this.gy();this.Pm=e("\x3cul\x3e").addClass("oj-tabs-nav oj-helper-clearfix").attr("role","tablist").prependTo(this.element);this.Oa=e();this.Ld=e();this.Qm=e();this.element.children(":not(.oj-tabs-nav)").each(function(b){var c=e(this).find("\x3e :first-child"),d=c.clone();d.addClass("oj-tabs-title").css({display:""}).attr({"aria-hidden":"false"});a.gB(d);a.Qm=a.Qm.add(d);
var f=c[0];f.id&&a.Ow(f);c.find("[id]").each(function(){a.Ow(this)});f=d.wrap("\x3cli\x3e\x3cdiv\x3e\x3ca href\x3d'#'\x3e\x3c/a\x3e\x3c/div\x3e\x3c/li\x3e").parent();f.addClass("oj-tabs-anchor").attr({role:"presentation",tabIndex:"-1"});d=f.parent().addClass("oj-tabs-tab-content").parent().addClass("oj-tabs-default").attr({role:"tab","aria-hidden":"false",tabIndex:"-1"});d.appendTo(a.Pm);a.Oa=a.Oa.add(d);c.hide().attr({"aria-hidden":"true"});var c=f.uniqueId().attr("id"),f=d.attr("aria-controls"),
m=e(this);m.hasClass("oj-disabled")&&a.disable(b);f&&d.data("oj-tabs-aria-controls",f);d.attr({"aria-controls":m.uniqueId().attr("id"),"aria-labelledby":c});a.Ld=a.Ld.add(m);m.attr("aria-labelledby",c)});if("vertical"==this.options.orientation){var b=0,c=0;this.Oa.addClass("oj-tabs-active").each(function(){var a=e(this);b=Math.max(b,a.width());c+=a.outerHeight(!0)}).removeClass("oj-tabs-active");this.options.removable&&(b+=28);this.Oa.css({width:b+"px"});var f=this.Pm.outerWidth(!0);"rtl"==this.xc()?
this.Ld.css({"margin-right":f-1+"px","min-height":c+"px"}):this.Ld.css({"margin-left":f-1+"px","min-height":c+"px"})}this.Ld.addClass("oj-tabs-panel").attr("role","tabpanel")},jp:function(a){Array.isArray(a)&&(a.length?a.length===this.Oa.length&&(a=!0):a=!1);this.Oa.each(function(b){!0===a||-1!==e.inArray(b,a)?e(this).addClass("oj-disabled").attr("aria-disabled","true"):e(this).removeClass("oj-disabled").removeAttr("aria-disabled")});this.options.disabled=a},ti:function(){this.element.on("mousedown"+
this.eventNamespace,".oj-tabs-nav \x3e li",function(a){e(this).is(".oj-disabled")&&a.preventDefault()});var a={keydown:this.cO},b=this.options.selectOn;if(b){var c=this;e.each(b.split(" "),function(b,d){a[d]=c.ty})}b=this.Oa.not(".oj-disabled");this._on(b,a);this._on(this.Ld,{keydown:this.oM});if(this.options.removable){var f={click:this.iB};this._on(b.find(".oj-tabs-close-icon"),f)}this._focusable(b);this._hoverable(b);this.Hq(b)},Tl:function(){var a=this.Oa.not(".oj-disabled");this._off(a);this._off(this.Ld);
this.element.off("mousedown"+this.eventNamespace)},ty:function(a){var b=this.options,c=this.$,f=e(a.currentTarget).closest("li"),h=f[0]===c[0],g=this.Yh(f),k=c.length?this.Yh(c):e(),c={oldHeader:c,oldContent:k,newHeader:f,newContent:g},l={oldHeader:c.newHeader,oldContent:c.newContent,newHeader:c.oldHeader,newContent:c.oldContent};a.preventDefault();f.hasClass("oj-disabled")||(this.Mu||h||!this.xj&&!1===this._trigger("beforeDeselect",a,l)||!1===this._trigger("beforeSelect",a,c))||(b.selected=this.Oa.index(f),
this.$=h?e():f,k.length||g.length||e.error("OJ Tabs: Mismatching fragment identifier."),this.jO(a,c))},jO:function(a,b){var c=this,f=b.newContent,h=b.oldContent;this.Mu=!0;b.oldHeader.closest("li").removeClass("oj-tabs-active");h.hide();b.newHeader.closest("li").addClass("oj-tabs-active");f.show();(function(){c.Mu=!1;this.xj||c._trigger("afterDeselect",a,b);c._trigger("afterSelect",a,b);var e=-1,f=-1;if(b){var h=b.oldHeader;h&&(e=c.Oa.index(h));(h=b.newHeader)&&(f=c.Oa.index(h))}c.Qe("selected",e,
f,a?!0:!1)})();h.attr({"aria-expanded":"false","aria-hidden":"true"});b.oldHeader.attr("aria-selected","false");f.length&&h.length?b.oldHeader.attr("tabIndex","-1"):f.length&&this.Oa.filter(function(){return"0"===e(this).attr("tabIndex")}).attr("tabIndex","-1");f.attr({"aria-expanded":"true","aria-hidden":"false"});b.newHeader.attr({"aria-selected":"true",tabIndex:"0"})},Eg:function(a){var b=this.Ay(a);b[0]!==this.$[0]&&(b.length||(b=this.$),this.options.selected=a,a=b.find(".oj-tabs-anchor")[0],
this.ty({target:a,currentTarget:a,preventDefault:e.noop}))},Ay:function(a){return this.Oa.eq(a)},cI:function(){if(this.options.removable){var a=this.options.removeCueText;this.Oa.not(".oj-disabled").each(function(b){var c=e(this).find("\x3e :first-child");b="ojtabs-id_rm_"+b;e(this).attr("aria-describedby",b);e("\x3ca href\x3d'#'\x3e").addClass("oj-tabs-icon oj-component-icon oj-clickable-icon oj-tabs-close-icon").attr({id:b,tabIndex:"-1","aria-label":a,role:"presentation"}).appendTo(c)})}},II:function(){this.Oa.find("oj-tabs-close-icon").remove()},
gy:function(){this.mp=!1;this.xz&&(b.xa.Lm(this.element[0],e.proxy(this.bi,this)),this.xz=!1,this.uA=void 0);this.hh?(this.hh.ojConveyorBelt("destroy"),this.hh.remove(),this.$=this.hh=null):this.element.children(".oj-tabs-nav").remove()},_destroy:function(){var a=this.options.orientation;"vertical"==a?this.element.removeClass("oj-tabs-vertical oj-component oj-helper-clearfix"):this.element.removeClass("oj-tabs oj-component ");this.gy();var b=this;this.Ld.each(function(){e(this).removeAttr("tabIndex").removeAttr("aria-expanded").removeAttr("aria-selected").removeAttr("aria-labelledby").removeAttr("aria-hidden").removeAttr("role").removeClass("oj-active oj-disabled oj-tabs-panel").css("display",
"");"vertical"==a&&e(this).css("margin-left","").css("min-height","");var c=e(this).find("\x3e :first-child");c.css("display","").removeAttr("aria-hidden");b.gB(c)})},enable:function(a){var b=this.options.disabled;!1!==b&&(b=void 0===a?!1:Array.isArray(b)?e.map(b,function(b){return b!==a?b:null}):e.map(this.Oa,function(b,d){return d!==a?d:null}),this.jp(b))},disable:function(a){var b=this.options.disabled;if(!0!==b){if(void 0===a)b=!0;else{if(-1!==e.inArray(a,b))return;b=Array.isArray(b)?e.merge([a],
b).sort():[a]}this.jp(b)}},ON:function(a){a!==this.options.removable&&(this.options.removable=a,this.refresh())},iB:function(a){var b=e(a.currentTarget).closest("li"),c=this.Yh(b),f={header:b,content:c};if(b&&!1!==this._trigger("beforeRemove",a,f)){var h=this.Oa.index(b);b.hasClass("oj-tabs-active")?this.options.selected=this.Mw(h):h<this.options.selected&&(this.options.selected=Math.max(0,this.options.selected-1));if(Array.isArray(this.options.disabled))for(var g=this.options.disabled,k=g.length-
1;0<=k;k--)h==g[k]?this.options.disabled=g=g.splice(k,1):h<g[k]&&(g[k]-=1);c.remove();b.remove();this.xj=this.options.selected;this.refresh();this.$.focus();this._trigger("afterRemove",a,f)}},addTab:function(a){this.element.append(a);a=this.options;if(-1==a.selected){a.selected=this.Oa.length;var b=this.Oa.filter(".oj-disabled"),c=this;a.disabled=e.map(b,function(a){return c.Oa.index(a)})}this.refresh()},QB:function(){var a=this.hh?this.hh.find(".oj-tabs-nav"):this.element.children(".oj-tabs-nav");
if(this.options.reorderable){var b=this;a.sortable({axis:"horizontal"==b.options.orientation?"x":"y",stop:function(c,f){var h=f.item,g=b.Yh(h),h=h.prev();h.length?b.Yh(h).after(g):0<b.Ld.length&&b.Ld.first().before(g);var k=[];a.children(".oj-disabled").each(function(){k.push(e(this).index())});b.options.disabled=k;b.options.selected=a.children(".oj-tabs-active").index()}})}else a.sortable({disabled:!0})},PB:function(a){a||(a=this.options.orientation);if("horizontal"==a)"vertical"==this.options.orientation&&
this.Ld&&this.Ld.each(function(){e(this).css("margin-left","").css("min-height","")}),this.element.addClass("oj-tabs oj-component");else if("vertical"==a)this.element.addClass("oj-tabs-vertical oj-component oj-helper-clearfix");else return;this.options.orientation=a},uN:function(a){return a?a.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g,"\\$\x26"):""},Yh:function(a){a=e(a).attr("aria-controls");return this.element.find(this.uN("#"+a))},Ow:function(a){0>a.id.indexOf("ojtabs-id_")&&e(a).attr("id",
"ojtabs-id_"+a.id)},fB:function(a){0==a.id.indexOf("ojtabs-id_")&&e(a).attr("id",a.id.substring(10))},gB:function(a){var b=this,c=a[0];c.id&&this.fB(c);a.find("[id]").each(function(){b.fB(this)})},getNodeBySubId:function(a){if(null==a)return this.element?this.element[0]:null;var b=a.subId;a=a.index;switch(b){case "oj-conveyorbelt":return this.hh?this.hh[0]:null;case "oj-tabs-panel":return this.Ld[a];case "oj-tabs-title":return this.Qm[a];case "oj-tabs-close-icon":return this.Oa.eq(a).find("."+b)[0]}return null},
nz:function(){return this.element[0].clientWidth},Qz:function(){return this.uA>this.nz()},dS:o_c("mp"),IB:o_b("mp"),fK:function(){var a=Math.floor(this.nz()/this.Oa.length);this.options.removable&&(a-=28);return a},Zw:function(){if(!this.mp){var a=this.fK();this.Qm.each(function(){e(this).css("max-width",""+a+"px").addClass("oj-tabs-title-overflow")});this.IB(!0)}},gN:function(){this.mp&&(this.Qm.each(function(){e(this).css("max-width","").removeClass("oj-tabs-title-overflow")}),this.IB(!1))},hS:o_a(),
bi:function(){this.Qz()?this.Zw():this.gN()},mz:function(){var a=this.Pm.parent();a.hasClass("oj-tabs-conveyor")||(a=this.Pm.wrap("\x3cdiv\x3e").parent().addClass("oj-tabs-conveyor"));return a},AL:function(){return"auto"==this.options.truncation||"progressive"==this.options.truncation},oO:function(){"horizontal"==this.options.orientation&&(0<this.Oa.length&&this.AL())&&(b.xa.eh(this.element[0],e.proxy(this.bi,this)),this.xz=!0,this.uA=this.mz()[0].scrollWidth,this.Qz()&&this.Zw())},Qe:function(a,
b,c,e){this._trigger("optionChange",e,{option:a,previousValue:b,value:c,optionMetadata:{writeback:e?"shouldWrite":"shouldNotWrite"}})}})})()});
//# sourceMappingURL=oj-modular.map