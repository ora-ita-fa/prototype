define(["ojs/ojcore","jquery","ojs/ojcomponentcore","ojs/ojvalidation","ojs/ojpopup"],function(b,e){b.bb=function(a){this.Init(a)};b.Ka.Hu(b.Ka.ld.$m,b.bb);b.a.ga(b.bb,b.Ra,"oj.PopupMessagingStrategy");b.bb.Ek={ojRadioset:{position:"launcher",bk:{open:"focusin mouseover",close:"mouseout"}},ojCheckboxset:{position:"launcher",bk:{open:"focusin mouseover",close:"mouseout"}},"default":{bk:{open:"focusin"}}};b.bb.prototype.Init=function(a){b.bb.j.Init.call(this,a)};b.bb.prototype.dh=function(a,d,c){b.bb.j.dh.call(this,
a,d,c);this.iL();this.update(c)};b.bb.prototype.update=function(a){b.bb.j.update.call(this,a)};b.bb.prototype.ih=function(a){var d=b.bb.Ek[this.Ca.widgetName],d=d?d.bk:b.bb.Ek["default"].bk;d.open&&this.Xa.off(d.open,this.rA);d.close&&this.Xa.off(d.close,this.Jx);this.II();b.bb.j.ih.call(this,a)};b.bb.prototype.rA=function(a){a=a.data&&a.data.strategy;var b=a.BH();a.zs()&&b&&(a.Je.empty(),a.Je.append(b),a.Je.ojPopup("open",a.Xa))};b.bb.prototype.Jx=function(a){a=a.data&&a.data.strategy;a.Je.ojPopup("close",
a.Xa)};b.bb.prototype.iL=function(){if(!this.zs()){var a=this.Xa,d=this.RJ(),c=b.bb.Ek[this.Ca.widgetName],c=c?c.bk:b.bb.Ek["default"].bk;this.Je=e("\x3cdiv class\x3d'oj-messaging-popup-container'\x3e\x3c/div\x3e");e("body").append(this.Je);this.Je.ojPopup({initialFocus:"none",tail:"simple",autoDismiss:"focusLoss",position:{my:"start bottom",at:"end top",collision:"flipfit",of:d}});if(c.open)a.on(c.open,{strategy:this},this.rA);if(c.close)a.on(c.close,{strategy:this},this.Jx)}};b.bb.prototype.RJ=
function(){var a=b.bb.Ek[this.Ca.widgetName];return a&&a.position&&"launcher"===a.position?this.Xa:this.Ca.widget()};b.bb.prototype.II=function(){this.zs()&&this.Je&&(this.Je.ojPopup("destroy"),this.Je.remove())};b.bb.prototype.BH=function(){var a="",b=this.Ca.document[0],c=[],f=!1,h=this;this.iF()&&c.push(this.AH());(this.iq()||this.ov())&&c.push(this.zH(b));this.kF()&&c.push(this.EH(b));e.each(c,function(c,e){e&&(f?a=a.concat(h.YJ(b)):f=!0,a=a.concat(e))});return a};b.bb.prototype.AH=function(){var a,
d="",c,f,h,e,k;f=this.fv();var l,m={};a=[];if(this.iv()){a=this.gv();for(c=0;c<a.length;c++)k=a[c],k=k instanceof b.C?k:new b.C(k.summary,k.detail,k.severity),e=b.C.gk(k.severity),m[e]||(m[e]=[]),m[e].push(k);for(c=f;c>=b.C.Ja.CONFIRMATION;c--)for(a=m[c]||[],f=0;f<a.length;f++)k=a[f],b.f.$a(k,b.C),e=b.C.gk(k.severity),h=this.$J(e),l=k.summary||h,k=k.detail||"",d=d.concat("\x3cdiv class\x3d'oj-message'\x3e").concat("\x3cspan class\x3d'"+this.ZJ(e)+"' title\x3d'"+h+"' role\x3d'img'\x3e\x3c/span\x3e").concat("\x3cspan class\x3d'oj-message-content'\x3e").concat("\x3cdiv class\x3d'oj-message-summary'\x3e"+
l+"\x3c/div\x3e"),k&&(d=d.concat("\x3cdiv class\x3d'oj-message-detail'\x3e"+k+"\x3c/div\x3e")),d=d.concat("\x3c/div\x3e")}return d};b.bb.prototype.zH=function(a){var b=[],c,f;this.iq()&&(b=b.concat(this.ev()));this.ov()&&(b=b.concat(this.VE()));if(b&&0<b.length)for(c=e(a.createElement("div")),c.addClass("oj-form-control-hint"),f=0;f<b.length;f++)c.append(this.Uy(a,b[f]));return c?c.get(0).outerHTML:""};b.bb.prototype.EH=function(a){var b=this.UE(),c;b&&(c=e(a.createElement("div")),c.addClass("oj-form-control-title"),
c.append(this.Uy(a,b)));return c?c.get(0).outerHTML:""};b.bb.prototype.Uy=function(a,d){var c=null;b.xa.bQ(d)?c=b.xa.SO(d.substring(6,d.length-7)):(c=e(a.createElement("div")),c.text(d),c=c.get(0));return c};b.bb.prototype.YJ=function(a){return(a=e(a.createElement("hr")))?a.get(0).outerHTML:""};b.bb.prototype.$J=function(a){var d;switch(a){case b.C.Ja.FATAL:d=b.L.l("oj-message.fatal");break;case b.C.Ja.ERROR:d=b.L.l("oj-message.error");break;case b.C.Ja.WARNING:d=b.L.l("oj-message.warning");break;
case b.C.Ja.INFO:d=b.L.l("oj-message.info");break;case b.C.Ja.CONFIRMATION:d=b.L.l("oj-message.confirmation")}return d};b.bb.prototype.ZJ=function(a){var d;switch(a){case b.C.Ja.FATAL:d="oj-message-error-icon";break;case b.C.Ja.ERROR:d="oj-message-error-icon";break;case b.C.Ja.WARNING:d="oj-message-warning-icon";break;case b.C.Ja.INFO:d="oj-message-info-icon";break;case b.C.Ja.CONFIRMATION:d="oj-message-confirmation-icon"}return"oj-widget-icon "+d};b.bb.prototype.zs=function(){return this.Je?this.Je.is(":oj-popup"):
!1};b.yS=e.widget("oj.editableValue",e.oj.baseComponent,{widgetEventPrefix:"oj",options:{converter:void 0,disabled:void 0,help:{definition:null,source:null},messages:void 0,messagingDisplayOptions:void 0,required:void 0,title:void 0,placeholder:void 0,validators:void 0,value:void 0,optionChange:void 0},option:function(a,b){var c,f,h,g=!1,k,l=!1;c=!1;var m=!0,n=!1;if("string"===typeof a&&void 0!==b)switch(a){case "value":g=!0;f=this.options.value;break;case "messages":l=!0;h=this.options.messages||
[];break;case "messagingDisplayOptions":e.extend({},this.options.messagingDisplayOptions);break;case "placeholder":n=!0}else"object"===typeof a&&a&&(void 0!==a.value&&(g=!0,f=this.options.value,c=!0),void 0!==a.messages&&(l=!0,h=this.options.messages,c=!0),a.messagingDisplayOptions&&e.extend({},this.options.messagingDisplayOptions),a.placeholder&&(n=!0,m=a._oj_messaging_update?!1:!0,delete a._oj_messaging_update),c&&(k=a._oj_originalEvent,delete a._oj_originalEvent));c=this._superApply(arguments);
g&&(g=this.options.value,this.Cq(f,g)||this.Bq("value",f,k||null));l&&(this.VL(h,this.options.messages)||this.Bq("messages",h,k||null));n&&(m?(this.Bn=!0,this.Jo()):this.Bn=!1);return c},isValid:o_c("Mh"),refresh:function(){this._super();this.ky(!0)},validate:function(a){this.ly(this.options.value,void 0,a?this.Pf.mv:this.Pf.cn);return this.isValid()?!0:!1},Pf:{cv:1,cn:2,mv:3,NONE:4},Kc:function(){var a=this.element,b=this.mn(a);this._super();"boolean"===typeof this.options.disabled&&a.prop("disabled",
this.options.disabled);this.options.placeholder&&(this.Bn=!0);e.each(["required","title"],function(c,f){f in b&&a.removeAttr(f)})},Bk:function(){this._super();this.fI();this.ky(!1);this.Jo();this.Bq("messages",this.options.messages,null);this.widget().addClass("oj-form-control")},_destroy:function(){var a=this.widget();this.Fx(void 0,!0);this.Th().ih(this.Wh());e.each(this.qf,function(){a.removeClass(this.toString())});a.removeClass("oj-form-control");this.element.removeAttr("aria-required");this.yb&&
this.yb._ojLabel("destroy");return this._super()},_setOption:function(a,d){var c=this._superApply(arguments),f=!0,h;h=0;switch(a){case "converter":this.Eq=null;this.Th().update(this.Wh(this.Sd.av));break;case "validators":this.Hk();f=!1;break;case "messages":(h=d&&0!==d.length)?(this.Zi=0,h=this.HJ(),this.Mh=h>=b.C.Ja.ERROR?!1:!0):(this.Zi=0,this.Mh=!0);this.Th().update(this.Wh());break;case "messagingDisplayOptions":this.rR=null;this.Jo();break;case "placeholder":this._SetPlaceholder(d);f=!1;break;
case "title":this.Th().update(this.Wh(this.Sd.pv))}f&&(this.wq(a,d),this.LA(a,d),this.$s(a,d));return c},Nf:o_c("element"),CF:function(){var a=this.Fy(this.element);if(null!==a&&0!==a.length)return a;a=this.element.prop("id");if(void 0!==a&&(a=e("label[for\x3d'"+a+"']"),0!==a.length))return a;a=this.element.closest("[aria-labelledby]");return 0!==a.length&&(a=this.Fy(a),null!==a&&0!==a.length)?a:null},Si:function(){return this.element.val()},_GetMessagingLauncherElement:function(){return this.Nf()},
Ed:function(){this.Eq||(this.Eq=b.Gc.getConverterInstance(this.options.converter));return this.Eq||null},ln:function(){this.Gw||(this.Gw={});return this.Gw},Hh:function(){return this.Nf().val()},Fv:function(){if(!this.Lk){var a=[],d=this.options.validators,c,f=!0,h=this.ln(),g=[],k,l;for(l in h)h.hasOwnProperty(l)&&g.push(h[l]);a=a.concat(g);if(d){g=[];for(l=0;l<d.length;l++)c=d[l],"object"===typeof c?(c.validate&&"function"===typeof c.validate||(f=!1),f||(k=c.type)&&"string"===typeof k&&((h=b.R.vg(k))?
(c=e.extend({},c.options)||{},c.converter=c.converter||this.Ed(),c.label=c.label||this.Vr(),c=h.createValidator(c)):b.F.error("Unable to locate a validatorFactory for the requested type: "+k)),g.push(c)):b.F.error("Unable to parse the validator provided:"+c);a=a.concat(g)}this.Lk=a}return this.Lk||[]},Hk:function(){this.Lk&&(this.Lk.length=0);this.Lk=null;this.Th().update(this.Wh(this.Sd.qv))},Nv:function(){return"required"===this.options.required},pn:function(a){var b=this.Hh();this.Ne(b,a)},wq:function(a,
b,c){switch(a){case "converter":b=this.options.value;this.NA(b,!0);break;case "value":this.NA(b,c);break;case "required":this.yb&&this.yb._ojLabel("option","required",b);break;case "help":a=this.options.help.definition,b=this.options.help.source,c=this.$w(b),this.yb&&(this.yb._ojLabel("option","describedById",c),this.yb._ojLabel("option","help",{definition:a,source:b}))}},xq:function(a){var b=this.Nf();(a="required"==a?!0:!1)&&b?b.attr("aria-required",a):b.removeAttr("aria-required")},Jh:function(a){this.Nf().val(a)},
Ne:function(a,d,c){var f=this.options.value,h=!0;if(void 0===a)return b.F.warn("Attempt to set a value of undefined"),!1;if(this.Bv()){c=c&&c.Yu?c.Yu:this.Pf.cv;if(h=c!==this.Pf.NONE)if(a!==this.Iw){if(this.GB(a),this.Fx(d),a=this.ly(a,d,c),!this.isValid())return!1}else return b.F.Hp>b.F.Dh&&b.F.info("Validation was skipped because the display value "+a.toString?a.toString():a+" as the previous."),!1;this.Cq(f,a)?(this.nC(a,d),b.F.Hp>b.F.Dh&&b.F.info("The value was not set on the component as it's the same as the current value - "+
a.toString?a.toString():a)):this.vO(a,d)}return!0},Bv:function(){return this.options.disabled?!1:!0},_SetPlaceholder:function(a){this.Nf().attr("placeholder",a)},Bq:function(a,d,c){b.f.CC(a,"");d={option:a,previousValue:d,value:this.options[a],optionMetadata:{writeback:"shouldWrite"}};switch(a){case "messages":this._trigger("optionChange",c||null,d);this.Th().update(this.Wh());break;case "value":this._trigger("optionChange",c||null,d)}},Cq:function(a,d){return b.a.compareValues(a,d)},_GetDefaultStyleClass:o_d("oj-editablevalue"),
qf:{disabled:"oj-disabled",required:"oj-required"},Sd:{tk:1,rv:2,av:3,qv:4,pv:5},Fx:function(a,b){if(b)this.options.messages=[];else{var c={messages:[]};a&&(c._oj_originalEvent=a);this.option(c)}},Of:function(){var a=this.element,b=this.mn(a),c,f;this._super();void 0===this.options.disabled&&(this.options.disabled=void 0!==this.element.attr("disabled")?!!this.element.prop("disabled"):null);this.zt("disabled");void 0===this.options.placeholder&&(this.options.placeholder=this.element.prop("placeholder"));
this.options.placeholder&&(this.Bn=!0);void 0===this.options.required&&(c=this.element.attr("required"),f=this.element.prop("required"),this.options.required=void 0!==c&&(void 0!==f?f:c)?"required":"optional");this.zt("required");void 0===this.options.title&&(this.options.title=this.element.prop("title"));void 0===this.options.value&&(this.options.value=void 0!==this.element.attr("value")?this.element.val():null);this.options.messages||(this.options.messages=[]);e.each(["required","title"],function(c,
f){f in b&&a.removeAttr(f)})},ky:function(a){if(a=a||!1)this.yb&&this.yb._ojLabel("refresh"),this.uw(),this.Jo();this.wq("value",this.options.value,a);this.LA("required",this.options.required);this.$s("required",this.options.required);this.$s("disabled",this.options.disabled)},IR:o_c("Jw"),GR:o_c("Iw"),Fy:function(a){a=a.attr("aria-labelledby");return void 0!==a?e("label[id\x3d'"+a+"']"):null},fI:function(){if(this.yb=this.CF()){var a=this.options.help.definition,b=this.options.help.source,c=this.$w(b);
this.yb._ojLabel({rootAttributes:{"class":this._GetDefaultStyleClass()+"-label"},describedById:c,required:this.options.required,help:{definition:a,source:b}})}},$w:function(a){var b=this.element.prop("id")+"Icons";a&&this.Nf().each(function(){var a=e(this).attr("aria-describedby");a?e(this).attr("aria-describedby",a+" "+b):e(this).attr("aria-describedby",b)});return b},Vr:function(){if(this.yb)return this.yb.text()},HJ:function(){this.Zi||(this.Zi=b.C.hm(this.options.messages));return this.Zi},gK:function(){if(this.Gq){var a=
e.extend([],this.options.messages);this.Gq.update(this.Mh,a,this.Zi)}else"undefined"===typeof this.Mh&&(this.Mh=!0),this.Gq=new b.yg(this.Mh,this.options.messages,this.Zi);return this.Gq},Jo:function(){var a=this.Th(),b=this._GetMessagingLauncherElement(),c=this.Wh(this.Sd.tk);this.Bn||(this.options.placeholder="");a.dh(b,c)},HN:o_b("Jw"),GB:o_b("Iw"),tO:function(a,d){var c=this.options.messages.slice(),f={};b.f.$a(a,b.C);c.push(a);f.messages=c;d&&(f._oj_originalEvent=d);this.option(f)},vO:function(a,
b){var c={};c.value=a;b&&(c._oj_originalEvent=b);this.option(c)},zt:function(a){var b=this.options[a],c=!1;switch(a){case "required":b?(b=""+b,"required"!==b&&"optional"!==b&&(c=!0)):this.options[a]="optional";break;case "disabled":null!==b&&"boolean"!==typeof b&&(c=!0)}if(c)throw"Option '"+a+" 'has an invalid value set: "+b;},ly:function(a,b,c){var f=a;try{c===this.Pf.cv&&(f=this.vA(a)),this.zO(f,c===this.Pf.mv)}catch(h){this.EA(h,b)}return f},gJ:function(a){var d=a,c=this.Ed();c&&"object"===typeof c&&
(c.format&&"function"===typeof c.format?d=c.format(a):b.F.Hp>b.F.Dh&&b.F.info("converter does not support the format method."));return d},Th:function(){this.Ew||(this.Ew=new b.Ka(this));return this.Ew},Py:function(){var a;this.Fw={label:this.Vr()};return(a=b.R.vg(b.Sb.VALIDATOR_TYPE_REQUIRED))?a.createValidator(this.Fw):null},zJ:function(a){var b,c=[];b="";var f;this.Nv()&&(b=this.vz(a),b||(b=this.Py(),b.getHint&&"function"===typeof b.getHint&&(b=b.getHint())&&c.push(b)));for(f=0;f<a.length;f++)b=
a[f],"object"===typeof b&&b.getHint&&"function"===typeof b.getHint&&(b=b.getHint())&&c.push(b);return c},Wh:function(a){var b={},c=this.Ed(),f=[];a=a||this.Sd.rv;if(a===this.Sd.tk||a===this.Sd.rv)b.validityState=this.gK();(a===this.Sd.tk||a===this.Sd.av)&&(c&&"object"===typeof c&&c.getHint&&"function"===typeof c.getHint)&&(c=c.getHint()||"",b.converterHint=c);if(a===this.Sd.tk||a===this.Sd.qv)c=this.Fv(),f=this.zJ(c)||[],b.validatorHint=f;if(a===this.Sd.tk||a===this.Sd.pv)b.title=this.options.title||
"";return b},vz:function(a){var d=null,c,f=null;for(c=0;c<a.length;c++)if(d=a[c],d instanceof b.vc){f=d;break}return f},VL:function(a,d){var c=-1,f,h=!0,g=e.extend([],a),k=e.extend([],d);if(g===k)return!0;if(null==g||null==k||g.length!==k.length)return!1;e.each(g,function(a,d){f=d instanceof b.C?d:new b.C(d.summary,d.detail,d.severity);c=-1;e.each(k,function(a,b){f.ak(b)&&(c=a)});-1<c?k.splice(c,1):h=!1});return h},vA:function(a){var d=this.Ed(),c=a;d&&"object"===typeof d&&(d.parse&&"function"===
typeof d.parse?c=d.parse(a):b.F.Hp>b.F.Dh&&b.F.info("converter does not support the parse method."));return c},EA:function(a,d){var c,f,h,e={};a instanceof b.Uc||a instanceof b.Pd?(c=a.dk(),b.f.$a(c,b.C),h=c.severity,f=c.summary,c=c.detail):(h=b.C.Ja.ERROR,f=b.L.l("oj-message.error"),c=a.message||b.L.l("oj-converter.detail"));e.summary=f;e.severity=h;e.detail=c;this.tO(e,d)},LA:function(a,b){this.Nf();switch(a){case "required":this.xq(b)}},NA:function(a,b){var c=a||this.options.value,f;f=this.Jw;
(b||c!==f)&&this.nC(c)},uw:function(){this.Fw={};this.Hk()},$s:function(a,b){this.qf.hasOwnProperty(a)&&("required"!==a?this.widget().toggleClass(this.qf[a],!!b):this.widget().toggleClass(this.qf[a],"required"===b))},nC:function(a,b){var c;this.HN(a);c=a;try{c=this.gJ(a)}catch(f){this.EA(f,b)}this.Jh(c);this.GB(this.Hh())},lS:o_a(),zO:function(a,d){if(this.Mh){var c=this.Fv(),f,h,e=!1;this.Nv()&&((f=this.vz(c))||(f=this.Py()),f.validate(a),e=!0);if(!d)for(h=0;h<c.length;h++)f=c[h],"object"===typeof f&&
(f.validate&&"function"===typeof f.validate?f instanceof b.vc&&e||f.validate(a):b.F.Hp>b.F.Dh&&b.F.info("validator does not support the validate method."))}}});b.Components.rE({editableValue:{messagingDisplayOptions:b.Components.MC(function(){return{messages:["notewindow"],converterHint:["placeholder","notewindow"],validatorHint:["notewindow"],title:["notewindow"]}})}});b.ta("oj._ojLabel",e.oj.baseComponent,{version:"1.0.0",defaultElement:"\x3clabel\x3e",widgetEventPrefix:"oj",options:{describedById:null,
help:{definition:null,source:null},required:null,rootAttributes:void 0},Aa:{PG:"tooltipHelp",RG:"tooltipRequired"},widget:o_c("Ki"),refresh:function(){this._super();this.QA();this.OA()},_create:function(){this._super();this.Br()},Br:function(){this.Ki=this.element.wrap(this.nO()).closest(".oj-component");this.dM();if(this.options.help.definition||this.options.help.source)this.Hz(),this.Mw();"required"===this.options.required&&this.element.before(this.jB())},dM:function(){var a=this.element.attr("class");
this.Bu=[];if(a)for(var a=a.split(/\s+/),b=a.length,c=0;c<b;c++){var f=a[c];0<f.indexOf("-label")&&(this.Ki.addClass(f),this.element.removeClass(f),this.Bu.push(f))}},nO:function(){var a;this.options.rootAttributes&&(a=this.options.rootAttributes["class"]);return null!==a?"\x3cdiv class\x3d'oj-label oj-component "+a+"'\x3e\x3cdiv class\x3d'oj-label-group'\x3e\x3c/div\x3e\x3c/div\x3e":"\x3cdiv class\x3d'oj-label oj-component'\x3e\x3cdiv class\x3d'oj-label-group'\x3e\x3c/div\x3e\x3c/div\x3e"},jB:function(){return"\x3cspan class\x3d'oj-label-required-icon oj-component-icon' title\x3d'"+
this.l(this.Aa.RG)+"'\x3e\x3c/span\x3e"},$K:function(a,b,c){if(b){var f;f="\x3cspan id\x3d'"+c+"'\x3e"+("\x3ca href\x3d'"+b+"' target\x3d'_blank'\x3e\x3cspan class\x3d");f+="'oj-label-help-icon oj-component-icon oj-clickable-icon' title\x3d'";a||(a=this.l(this.Aa.PG));f+=a;f+="' role\x3d'img'\x3e\x3c/span\x3e";f+="\x3c/a\x3e\x3c/span\x3e"}return f},Mw:function(){var a=this.options.help.definition;if(a){this.element.addClass("oj-label-help-def");var b=this.element.attr("title");b?this.element.attr("title",
b+" "+a):this.element.attr("title",a)}},aB:function(){this.element.removeClass("oj-label-help-def");this.element.attr("title","")},Hz:function(){var a=this.options.help.source;if(a){var b=this.options.help.definition;this.Ki.find(".oj-label-group").prepend(this.$K(b,a,this.options.describedById))}},OA:function(){null!==this.options.describedById&&this.Ki.find("#"+this.options.describedById).remove();this.aB();this.Hz();this.Mw()},QA:function(){"required"===this.options.required?0===this.Ki.find(".oj-label-required-icon").length&&
this.element.before(this.jB()):this.Ki.find(".oj-label-required-icon").remove()},_setOption:function(a,b){this._super(a,b);"required"===a&&this.QA();"help"===a&&this.OA()},getNodeBySubId:function(a){if(null==a)return this.element?this.element[0]:null;a=a.subId;return"oj-label-help-icon"===a?this.widget().find(".oj-label-help-icon")[0]:"oj-label-help-icon-anchor"===a?this.widget().find(".oj-label-help-icon").parent()[0]:"oj-label-required-icon"===a?this.widget().find(".oj-label-required-icon")[0]:
null},_destroy:function(){this._super();for(var a=0;a<this.Bu.length;a++)this.element.addClass(this.Bu[a]);this.aB();this.Ki.replaceWith(this.element)}})});
//# sourceMappingURL=oj-modular.map