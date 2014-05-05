define(["ojs/ojcore","jquery","ojs/ojcomponentcore"],function(b,e){(function(){function a(a,b){var c=a.name,d=a.form;c?(c=c.replace(/'/g,"\\'"),c=":radio[name\x3d'"+c+"']:oj-button",d=b?b.filter(c):d?e(d).find(c):e(c,a.ownerDocument).filter(function(){return!this.form})):d=(b?b.filter(a):e(a)).filter(":oj-button");return d}b.ta("oj.ojButton",e.oj.baseComponent,{version:"1.0.0",defaultElement:"\x3cbutton\x3e",widgetEventPrefix:"oj",options:{disabled:null,display:"all",label:null,icons:{start:null,
end:"auto"},menu:null},_create:function(){this.element.closest("form").unbind("reset"+f).bind("reset"+f,function(){var a=e(this);setTimeout(function(){a.find(":oj-button").each(function(){e(this).data("oj-ojButton").In(!1)}).length||a.unbind("reset"+f)},1)});"boolean"!==typeof this.options.disabled&&(this.options.disabled=!!this.element.prop("disabled"));this.Fm=this.eventNamespace+"menu";this.aL();this.lu=!!this.xb.attr("title");var a=this,b=this.options,g="checkbox"===this.type||"radio"===this.type,
k=g?"":"oj-active";this.xb.addClass(h);this.hc.bind("mouseenter"+this.eventNamespace,function(){b.disabled||(this===d&&a.xb.addClass("oj-active"),a.xb.addClass("oj-hover").removeClass("oj-default"))}).bind("mouseleave"+this.eventNamespace,function(){a.xb.removeClass("oj-hover");b.disabled||(a.xb.removeClass(k),a.Tf())}).bind("click"+this.eventNamespace,function(a){b.disabled&&(a.preventDefault(),a.stopImmediatePropagation())});this.element.attr("role","button").bind("focus"+this.eventNamespace,function(){a.xb.addClass("oj-focus").removeClass("oj-default")}).bind("blur"+
this.eventNamespace,function(){a.xb.removeClass("oj-focus");a.Tf()});g&&(this.element.bind("change"+this.eventNamespace,function(b){a.In(!0);var c=e(this).closest(":oj-buttonset").data("oj-ojButtonset"),d=c&&c.po(c.$b);c&&void 0!==d&&(c.sA=b,c._setOption("checked",d))}),this.hc.bind("mousedown"+this.eventNamespace,function(){b.disabled||(c=this,a.document.one("mouseup",function(){c=null}))}).bind("mouseup"+this.eventNamespace,function(){b.disabled||this!==c||a.element.focus()}));"checkbox"===this.type?
(this.hc.bind("click"+this.eventNamespace,function(){if(b.disabled)return!1}),this.element.bind("keyup"+this.eventNamespace,function(c){c.keyCode===e.ui.keyCode.ENTER&&(b.disabled||a.element.click())})):"radio"===this.type?(this.hc.bind("click"+this.eventNamespace,function(){if(b.disabled)return!1}),this.element.bind("keyup"+this.eventNamespace,function(c){c.keyCode!==e.ui.keyCode.ENTER||(a.element[0].checked||b.disabled)||(a.element[0].checked=!0,a.element.change(),a.element.click())})):(this.hc.bind("mousedown"+
this.eventNamespace,function(c){if(b.disabled)return!1;1===c.which&&(e(this).addClass("oj-active").removeClass("oj-default"),d=this,a.document.one("mouseup",function(){d=null}))}).bind("mouseup"+this.eventNamespace,function(){if(b.disabled)return!1;e(this).removeClass("oj-active");a.Tf()}).bind("keydown"+this.eventNamespace,function(a){if(b.disabled)return!1;a.keyCode!==e.ui.keyCode.SPACE&&a.keyCode!==e.ui.keyCode.ENTER||e(this).addClass("oj-active").removeClass("oj-default")}).bind("keyup"+this.eventNamespace+
" blur"+this.eventNamespace,function(){e(this).removeClass("oj-active");a.Tf()}),this.hc.is("a")&&this.hc.bind("keyup"+this.eventNamespace,function(a){a.keyCode===e.ui.keyCode.SPACE&&e(this).click()}));this._setOption("disabled",b.disabled);this.KK();this.NB();this.Tf();this._super()},aL:function(){var a;if(this.element.is("input[type\x3dcheckbox]"))this.type="checkbox";else if(this.element.is("input[type\x3dradio]"))this.type="radio";else if(this.element.is("input[type\x3dbutton],input[type\x3dsubmit],input[type\x3dreset]"))this.type=
"input";else if(this.element.is("button,a"))this.type="button";else throw Error("JET Button not supported on this element type");"checkbox"===this.type||"radio"===this.type?(a="label[for\x3d'"+this.element.attr("id")+"']",this.hc=this.element.siblings().filter(a).addClass("oj-button-label"),this.element.addClass("oj-helper-hidden-accessible").add(this.hc).wrapAll("\x3cspan\x3e\x3c/span\x3e"),this.xb=this.element.parent(),(a=this.element[0].checked)&&this.xb.addClass("oj-selected").removeClass("oj-default"),
this.element.attr("aria-pressed",a)):this.xb=this.hc=this.element},widget:o_c("xb"),_destroy:function(){this.dB();this.element.removeClass("oj-helper-hidden-accessible").removeAttr("role").removeAttr("aria-pressed");var a="checkbox"===this.type||"radio"===this.type;a||this.xb.removeClass(h+" "+g+" "+k);this.hc.html(this.hc.find(".oj-button-text").html());a?(this.hc.removeClass("oj-button-label"),this.element.unwrap()):this.lu||this.xb.removeAttr("title");c===this.hc[0]&&(c=null)},_setOption:function(a,
b){this._super(a,b);switch(a){case "disabled":b=!!b;this.element.is("a")||(this.element.prop("disabled",b),this.widget().toggleClass("oj-enabled",!b),this.xb.removeAttr("aria-disabled"));b?(this.widget().removeClass("oj-active oj-default"),this.wr(null,null,!0)):this.Tf();break;case "label":this.FN();break;case "display":"input"!==this.type&&this.gp();break;case "icons":this.EB(!0);break;case "menu":"auto"===this.options.icons.end&&this.EB(!1),this.NB()}},refresh:function(){this._super()},In:function(b){"radio"===
this.type?(b?a(this.element[0]):this.element).each(function(){var a=e(this).data("oj-ojButton");this.checked?(a.xb.addClass("oj-selected").removeClass("oj-default"),a.element.attr("aria-pressed","true")):(a.xb.removeClass("oj-selected"),a.Tf(),a.element.attr("aria-pressed","false"))}):"checkbox"===this.type&&(this.element[0].checked?(this.xb.addClass("oj-selected").removeClass("oj-default"),this.element.attr("aria-pressed","true")):(this.xb.removeClass("oj-selected"),this.Tf(),this.element.attr("aria-pressed",
"false")))},KK:function(){var a=!1;null===this.options.label&&(a=!0,this.options.label="input"===this.type?this.hc.val():this.hc.html());if("input"===this.type)this.FB();else{var a=this.EN(a),b=this.hp(!0),c=this.hp(!1);this.gp(a,b,c)}},EN:function(a){var b=this.hc,c=e("\x3cspan class\x3d'oj-button-text'\x3e\x3c/span\x3e",this.document[0]);a?c.append(b.contents()):(b.empty(),c.text(this.options.label));b.append(c);return c},FN:function(){if("input"===this.type)this.FB();else{var a=this.hc.find(".oj-button-text");
a.text(this.options.label);this.gp(a)}},FB:function(){this.options.label&&this.element.val(this.options.label)},EB:function(a){if("input"!==this.type){var b;a&&(b=this.hp(!0));a=this.hp(!1);this.gp(void 0,b,a)}},hp:function(a){if(a){a="oj-button-icon-start";var b=this.options.icons.start,c="_lastStartIcon",d="prependTo"}else a="oj-button-icon-end",b=this.Qy(),c="_lastEndIcon",d="appendTo";var f=this.hc.find("."+a);b?(f.length?f.removeClass(this[c]):f=e("\x3cspan\x3e\x3c/span\x3e").addClass(a)[d](this.hc),
f.addClass(b)):f.remove();this[c]=b;return!!b},Qy:function(){var a=this.options.icons;return"auto"===a.end?this.uo()?"oj-component-icon oj-button-menu-dropdown-icon":null:a.end},gp:function(a,b,c){void 0===a&&(a=this.hc.find(".oj-button-text"));void 0===b&&(b=!!this.options.icons.start);void 0===c&&(c=!!this.Qy());var d=b&&c;c=b||c;var f="icons"===this.options.display;c&&f?(a.addClass("oj-helper-hidden-accessible"),this.lu||(a=a.text(),this.xb.attr("title",e.trim(a)))):(a.removeClass("oj-helper-hidden-accessible"),
this.lu||this.xb.removeAttr("title"));b=c?f?d?"oj-button-icons-only":"oj-button-icon-only":d?"oj-button-text-icons":b?"oj-button-text-icon-start":"oj-button-text-icon-end":"oj-button-text-only";this.xb.removeClass(k).addClass(b)},NB:function(){this.dB();var a=this.uo();if(a){var b=this;this.element.attr("aria-haspopup",!0).on("keydown"+this.Fm,function(c){return c.which===e.ui.keyCode.DOWN?(b.RB(c,"firstItem",a),!1):c.which===e.ui.keyCode.ESCAPE?(b.wr(c,a),!1):!0}).on("click"+this.Fm,function(c){a.Dn||
b.iO(c,a);return a.Dn=!1});a.widget().on("oj__dismiss"+this.Fm,function(a){b.eA(a)}).on("ojbeforeshow"+this.Fm,function(a){b.Tz||b.eA(a);b.Tz=!1})}},dB:function(){this.element.removeAttr("aria-haspopup").off(this.Fm)},uo:function(){var a=this.options.menu;a&&(a=e(a).data("oj-ojMenu"));return a&&this.element.not("input")?a:null},RB:function(a,b,c){this.options.disabled||(c||(c=this.uo()),c&&(this.xb.addClass("oj-selected").removeClass("oj-default"),this.Tz=!0,c.show(a,{launcher:this.element,focus:b}),
this.fA=!0))},wr:function(a,b,c){if(c||!this.options.disabled)b||(b=this.uo()),b&&b.Cn(a)},eA:function(){"button"===this.type&&(this.xb.removeClass("oj-selected"),this.Tf());this.fA=!1},iO:function(a,b){this.fA?this.wr(a,b):this.RB(a,"none",b)},Tf:function(){this.xb.is(".oj-active, .oj-disabled, .oj-selected, .oj-hover, .oj-focus")?this.xb.removeClass("oj-default"):this.xb.addClass("oj-default")}});b.ta("oj.ojButtonset",e.oj.baseComponent,{version:"1.0.0",Fs:"button, input[type\x3dbutton], input[type\x3dsubmit], input[type\x3dreset], input[type\x3dcheckbox], input[type\x3dradio], a",
widgetEventPrefix:"oj",options:{checked:void 0,focusManagement:"oneTabstop",optionChange:null},xB:function(a,b){var c=e.type(a);if("string"===c||"null"===c)return(c=((c=b[0].name)||1>=b.length)&&b.filter("input[type\x3dradio][name\x3d"+c+"]").length===b.length&&(null===a||b.filter("[value\x3d"+a+"]").length))&&b.each(function(){this.checked=this.value===a}),c;if("array"===c){var c=b.filter("input[type\x3dcheckbox]").length===b.length,d;(c=c&&a.concat().sort().every(function(a){var c=a!==d&&b.filter("[value\x3d"+
a+"]").length;d=a;return c}))&&b.each(function(){this.checked=-1<a.indexOf(this.value)});return c}return!1},po:function(a){var b=void 0,c=null,d=null;a.each(function(){if("input"!==this.tagName.toLowerCase())return b=void 0,!1;var a=this.type.toLowerCase(),f;if("radio"===a)a=!0,f=this.name.toLowerCase();else if("checkbox"===a)a=!1,f=null;else return b=void 0,!1;if(void 0!==b&&(a!==c||f!==d||c&&!d))return b=void 0,!1;void 0===b?(b=a?this.checked?this.value:null:this.checked?[this.value]:[],c=a,d=f):
this.checked&&(c?b=this.value:b.push(this.value))});return b},xx:function(a,b){return a===b?!0:"array"===e.type(a)&&"array"===e.type(b)&&!e(a).not(b).length&&!e(b).not(a).length},_create:function(){this.element.addClass("oj-buttonset oj-component").attr("role","group");this.mb(!0);this._super()},eg:function(a,b){a.show(b,{launcher:this.element.find(":oj-button[tabindex\x3d0]"),focus:"menu"})},_setOption:function(a,b){var c=!1,d=this.sA;this.sA=null;"disabled"===a&&this.$b.ojButton("option",a,b);"checked"!==
a||d||null===b&&void 0===this.po(this.$b)||(this.xB(b,this.$b)?this.$b.each(function(){e(this).data("oj-ojButton").In(!1)}):c=!0);c||(c=this.options[a],this._super(a,b),"checked"===a&&this.Qe(a,c,b,this.xx,d))},Qe:function(a,b,c,d,f){d.call(this,b,c)||this._trigger("optionChange",f,{option:a,previousValue:b,value:c,optionMetadata:{writeback:f?"shouldWrite":"shouldNotWrite"}})},refresh:function(){this._super();this.mb(!1)},mb:function(a){var b=this;this.Am="rtl"===this.xc();this.element.find(":not(iframe)").andSelf().contents().filter(function(){return 3===
this.nodeType&&""===this.nodeValue.trim()}).remove();this.$b=this.element.find(this.Fs);if(a){if(!this.xB(this.options.checked,this.$b)){var c=this.po(this.$b);this.options.checked=void 0===c?null:c}}else{var c=this.po(this.$b),c=void 0===c?null:c,d=this.options.checked;this.options.checked=c;var f=!0}this.$b.filter(":oj-button").ojButton("refresh").each(function(){e(this).data("oj-ojButton").In(!1)}).end().not(":oj-button").ojButton().end().map(function(){return e(this).ojButton("widget")[0]}).removeClass("oj-buttonset-corner-start oj-buttonset-corner-end").filter(":first").addClass("oj-buttonset-corner-start").end().filter(":last").addClass("oj-buttonset-corner-end").end().end();
a&&this.options.disabled&&this.$b.ojButton("option","disabled",!0);"oneTabstop"===this.options.focusManagement&&(this.$b.unbind("keydown"+this.eventNamespace).bind("keydown"+this.eventNamespace,function(a){b.os(a,e(this))}).unbind("click"+this.eventNamespace).bind("click"+this.eventNamespace,function(){e(this).ojButton("option","disabled")||b.si(e(this))}).unbind("focus"+this.eventNamespace).bind("focus"+this.eventNamespace,function(){b.si(e(this))}),this.Hf=this.$b.filter(function(){return!e(this).ojButton("option",
"disabled")}),this.us(a));f&&this.Qe("checked",d,c,this.xx,null)},us:function(a){var b=e(this.ji);this.ji=void 0;this.$b.attr("tabindex","-1");a=a||!b.is(this.Hf)?this.Hf.first():b;this.si(a)},Ks:function(b){var c=this.Hf;return b.map(function(b,d){if("radio"!=d.type||d.checked||""==d.name)return d;var f=a(d,c).filter(":checked");return f.length?f[0]:d})},si:function(a){a=this.Ks(a);var b=a[0],c=this.ji;b!==c&&(e(c).attr("tabindex","-1"),a.attr("tabindex","0"),this.ji=b)},os:function(a,b){switch(a.which){case e.ui.keyCode.LEFT:case e.ui.keyCode.RIGHT:a.preventDefault();
var c=this.Hf,d=c.length;if(2>d)break;var f=c.index(b);c.eq((f+(a.which==e.ui.keyCode.RIGHT^this.Am?1:-1)+d)%d).focus();break;case e.ui.keyCode.UP:case e.ui.keyCode.DOWN:"radio"==b.attr("type")&&a.preventDefault()}},_destroy:function(){this.element.removeClass("oj-buttonset oj-component").removeAttr("role");"oneTabstop"===this.options.focusManagement&&this.$b.attr("tabindex","0");this.$b.map(function(){return e(this).ojButton("widget")[0]}).removeClass("oj-buttonset-corner-start oj-buttonset-corner-end").end().ojButton("destroy")}});
var d,c,f=".ojButton",h="oj-button oj-component oj-enabled oj-default",g="oj-hover oj-active oj-selected",k="oj-button-icons-only oj-button-icon-only oj-button-text-icons oj-button-text-icon-start oj-button-text-icon-end oj-button-text-only"})()});
//# sourceMappingURL=oj-modular.map