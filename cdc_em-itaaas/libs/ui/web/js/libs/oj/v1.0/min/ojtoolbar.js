define(["ojs/ojcore","jquery","ojs/ojcomponentcore"],function(b,e){(function(){function a(a,b){var f=a.name,h=a.form;f?(f=f.replace(/'/g,"\\'"),f=":radio[name\x3d'"+f+"']:oj-button",h=b?b.filter(f):h?e(h).find(f):e(f,a.ownerDocument).filter(function(){return!this.form})):h=(b?b.filter(a):e(a)).filter(":oj-button");return h}b.ta("oj.ojToolbar",e.oj.baseComponent,{version:"1.0.0",Fs:"button, input[type\x3dbutton], input[type\x3dsubmit], input[type\x3dreset], input[type\x3dcheckbox], input[type\x3dradio], a",
widgetEventPrefix:"oj",options:{},_create:function(){this.element.addClass("oj-toolbar oj-component").attr("role","toolbar");this.mb(!0);this._super()},eg:function(a,b){a.show(b,{launcher:this.element.find(":oj-button[tabindex\x3d0]"),focus:"menu"})},_setOption:function(a,b){"disabled"===a&&this.$b.ojButton("option",a,b);this._super(a,b)},refresh:function(){this._super();this.mb(!1)},mb:function(a){var b=this;this.Am="rtl"===this.xc();this.$b=this.element.find(this.Fs).unbind("keydown"+this.eventNamespace).bind("keydown"+
this.eventNamespace,function(a){b.os(a,e(this))}).unbind("click"+this.eventNamespace).bind("click"+this.eventNamespace,function(){e(this).ojButton("option","disabled")||b.si(e(this))}).unbind("focus"+this.eventNamespace).bind("focus"+this.eventNamespace,function(){b.si(e(this))});this.Hf=this.$b.filter(function(){return!e(this).ojButton("option","disabled")});this.us(a)},us:function(a){var b=e(this.ji);this.ji=void 0;this.$b.attr("tabindex","-1");a=a||!b.is(this.Hf)?this.Hf.first():b;this.si(a)},
Ks:function(b){var c=this.Hf;return b.map(function(b,d){if("radio"!=d.type||d.checked||""==d.name)return d;var e=a(d,c).filter(":checked");return e.length?e[0]:d})},si:function(a){a=this.Ks(a);var b=a[0],f=this.ji;b!==f&&(e(f).attr("tabindex","-1"),a.attr("tabindex","0"),this.ji=b)},os:function(a,b){switch(a.which){case e.ui.keyCode.LEFT:case e.ui.keyCode.RIGHT:a.preventDefault();var f=this.Hf,h=f.length;if(2>h)break;var g=f.index(b);f.eq((g+(a.which==e.ui.keyCode.RIGHT^this.Am?1:-1)+h)%h).focus();
break;case e.ui.keyCode.UP:case e.ui.keyCode.DOWN:"radio"==b.attr("type")&&a.preventDefault()}},_destroy:function(){this.element.removeClass("oj-toolbar oj-component").removeAttr("role");this.$b.attr("tabindex","0").map(function(){return e(this).ojButton("widget")[0]})}})})()});
//# sourceMappingURL=oj-modular.map