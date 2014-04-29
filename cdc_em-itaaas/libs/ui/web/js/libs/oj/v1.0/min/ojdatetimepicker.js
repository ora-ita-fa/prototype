define(["ojs/ojcore","jquery","ojs/ojeditablevalue","ojs/ojinputtext","ojs/ojvalidation"],function(b,e){function a(a){return a.delegate(".oj-datepicker-prev-icon, .oj-datepicker-prev-icon .oj-clickable-icon.oj-component-icon, .oj-datepicker-next-icon, .oj-datepicker-next-icon .oj-clickable-icon.oj-component-icon, .oj-datepicker-calendar td a","mouseout",function(){e(this).removeClass("oj-hover")}).delegate(".oj-datepicker-prev-icon, .oj-datepicker-prev-icon .oj-clickable-icon.oj-component-icon, .oj-datepicker-next-icon, .oj-datepicker-next-icon .oj-clickable-icon.oj-component-icon, .oj-datepicker-calendar td a",
"mouseover",function(){e(this).addClass("oj-hover")}).delegate(".oj-datepicker-prev-icon, .oj-datepicker-prev-icon .oj-clickable-icon.oj-component-icon, .oj-datepicker-next-icon, .oj-datepicker-next-icon .oj-clickable-icon.oj-component-icon, .oj-datepicker-calendar td a","focus",function(){e(this).addClass("oj-focus")}).delegate(".oj-datepicker-prev-icon, .oj-datepicker-prev-icon .oj-clickable-icon.oj-component-icon, .oj-datepicker-next-icon, .oj-datepicker-next-icon .oj-clickable-icon.oj-component-icon, .oj-datepicker-calendar td a",
"blur",function(){e(this).removeClass("oj-focus")})}var d=b.R.bh(b.gf.CONVERTER_TYPE_DATETIME).createConverter({year:"numeric"});b.ta("oj.ojInputDate",e.oj.inputBase,{version:"1.0.0",widgetEventPrefix:"oj",_CLASS_NAMES:"oj-inputdatetime-input",_WIDGET_CLASS_NAMES:"oj-inputdatetime-date-only oj-component oj-inputdatetime",Li:"inputHelp",_ATTR_CHECK:[{attr:"type",setMandatory:"text"}],yk:"oj-inputdatetime-input-trigger",FG:"oj-inputdatetime-calendar-icon",ov:"oj-datepicker-current-day",gq:"oj-datepicker-days-cell-over",
qw:"oj-datepicker-unselectable",qv:"oj-datepicker-desc",iq:"oj-datepicker-grid",Mv:"oj-datepicker-div",rF:"oj-datepicker-inline",tF:" oj-inputdatetime-input-container",options:{dayMetaData:null,showOn:"image",changeMonth:"select",changeYear:"select",yearRange:"c-10:c+10",daysOutsideMonth:"hidden",weekDisplay:"none",calculateWeek:function(a){var b=new Date(a.getTime());b.setDate(b.getDate()+4-(b.getDay()||7));a=b.getTime();b.setMonth(0);b.setDate(1);return Math.floor(Math.round((a-b)/864E5)/7)+1},
min:null,max:null,numberOfMonths:1,currentMonthPos:0,stepMonths:"block",stepBigMonths:12,buttonPanel:"none",converter:b.R.bh(b.gf.CONVERTER_TYPE_DATETIME).createConverter({day:"2-digit",month:"2-digit",year:"2-digit"})},hw:function(a){this._super(a);a.firstDayOfWeek=function(){return b.pa.aD()};a.dayWide=function(){return b.pa.Lt("wide")};a.dayNarrow=function(){return b.pa.Lt("narrow")};a.monthWide=function(){return b.pa.Rt("wide")};a.monthAbbreviated=function(){return b.pa.Rt("abbreviated")}},Mf:function(){this._super();
this.options.value||(this.options.value="")},gn:function(){this.Fd=!1;this.Wc=this.Ve=null;this.pl=4;this.Fg=this.oe=this.Tf=this.le=this.Oe=0;this.bp=this.Mg=null;this.Lk={};var b=this.element[0].nodeName.toLowerCase();this.Wc="div"===b||"span"===b;e(document).on("mousedown",e.proxy(this.Qq,this));this.jb=a(e("\x3cdiv id\x3d'"+this.pf(this.Mv)+"' role\x3d'region' aria-labelledby\x3d'"+this.pf(this.qv)+"' class\x3d'oj-datepicker-content'\x3e\x3c/div\x3e"));e("body").append(this.jb);this.Wc?this._CLASS_NAMES=
"":this._WIDGET_CLASS_NAMES+=this.tF},Ic:function(){this.gn();var a=this._super();this.Xs(this.cj());this.Wc?(this.element.append(this.jb),this.element.addClass(this.rF),this.Fd=!0,this.Ne(this.cj(),null,{Mu:this.Nf.Um}),this.jb.css("display","block")):(this.Cq(),this.Mg=e.proxy(this.Wn,this),this.element.on("keydown",this.Mg));return a},xh:function(){var a=this._superApply(arguments);this.lr(this.options.disabled);return a},_setOption:function(a,d){var e=null,g={},g={};if("value"===a)return!d&&this.element.val()&&
(e=this.vo(),this.options.value&&this.Cx(this.options.value,e),d=e),e=this._super(a,d),this.Xs(d),e;e=this._superApply(arguments);"disabled"===a?this.lr(d):"max"===a||"min"===a?(g={min:this.options.min,max:this.options.max,converter:this.Bd()},this.Lk[b.Rb.VALIDATOR_TYPE_DATETIMERANGE]=b.R.rg(b.Rb.VALIDATOR_TYPE_DATETIMERANGE).createValidator(g),this.vk()):"dayMetaData"===a&&(g={dayMetaData:this.options.dayMetaData,converter:this.Bd()},this.Lk[b.Rb.VALIDATOR_TYPE_DATERESTRICTION]=b.R.rg(b.Rb.VALIDATOR_TYPE_DATERESTRICTION).createValidator(g),
this.vk());return e},_destroy:function(){var a=this._super();this.Mg&&this.element.off("keydown",this.Mg);this.bp&&this.element.off("focus",this.bp);this.Ve&&this.Ve.remove();this.jb.remove();return a},Cq:function(){var a=this.options.showOn,b=e(e("\x3cspan\x3e").addClass(this.yk));"focus"===a&&(this.bp=e.proxy(this.show,this),this.element.on("focus",this.bp));a=e(e("\x3cspan/\x3e").addClass(this.FG+" oj-clickable-icon oj-component-icon"));b.append(a);var d=this;a.on("click",function(){d.Fd?d.hide():
d.show();return!1}).on("mouseenter",function(){e(this).addClass("oj-hover")}).on("mousedown",function(){e(this).addClass("oj-active")}).on("mouseleave",function(){e(this).removeClass("oj-hover oj-active")});this.Ve=b;this.element.after(b)},Wn:function(a){var b=e.ui.keyCode,d=!1;if(this.Fd)switch(a.keyCode){case b.TAB:case b.ESCAPE:this.hide();break;case b.UP:case b.DOWN:this.jb.find(".oj-datepicker-calendar").focus(),d=!0}else switch(a.keyCode){case b.UP:case b.DOWN:this.show(),d=!0}if(d||a.keyCode===
b.ENTER)return a.preventDefault(),a.stopPropagation(),!1},xI:function(a){var b;b=!1;var d=e.ui.keyCode,g=this.hn();if(this.Fd)switch(a.keyCode){case 84:a.altKey&&a.ctrlKey&&this.jb.find(".oj-datepicker-current").focus();break;case 68:a.altKey&&a.ctrlKey&&this.jb.find(".oj-datepicker-close").focus();break;case d.TAB:this.hide();break;case d.ENTER:return b=e("td."+this.gq+":not(."+this.ov+")",this.jb),b[0]&&this.iB(this.le,this.oe,b[0]),a.preventDefault(),a.stopPropagation(),!1;case d.ESCAPE:this.hide();
this.element.focus();b=!0;break;case d.PAGE_UP:a.ctrlKey&&a.altKey?this.Uc(-this.options.stepBigMonths,"M",!0):a.altKey?this.Uc(-1,"Y",!0):this.Uc(-this.el(),"M",!0);b=!0;break;case d.PAGE_DOWN:a.ctrlKey&&a.altKey?this.Uc(+this.options.stepBigMonths,"M",!0):a.altKey?this.Uc(1,"Y",!0):this.Uc(+this.el(),"M",!0);b=!0;break;case d.END:this.Oe=this.ko(this.oe,this.le);this.oi(!0);b=!0;break;case d.HOME:this.Oe=1;this.oi(!0);b=!0;break;case d.LEFT:this.Uc(g?1:-1,"D",!0);a.originalEvent.altKey&&this.Uc(a.ctrlKey?
-this.options.stepBigMonths:-this.el(),"M",!0);b=!0;break;case d.UP:this.Uc(-7,"D",!0);b=!0;break;case d.RIGHT:this.Uc(g?-1:1,"D",!0);a.originalEvent.altKey&&this.Uc(a.ctrlKey?+this.options.stepBigMonths:+this.el(),"M",!0);b=!0;break;case d.DOWN:this.Uc(7,"D",!0),b=!0}else a.keyCode===d.HOME&&a.ctrlKey&&(this.show(),b=!0);b&&(a.preventDefault(),a.stopPropagation())},oi:function(a){this.pl=4;var b=this.RI();this.jb.empty().append(b.html);0<e("button",this.jb).length&&e.each(e("button",this.jb),function(a,
b){e(b).ojButton()});this.bH();this.jb.find("."+this.gq+" a").mouseover();b.IC&&this.jb.find(".oj-datepicker-calendar").attr("aria-activedescendant",b.IC);var b=this.Qr(),d=b[1];this.jb.removeClass("oj-datepicker-multi-2 oj-datepicker-multi-3 oj-datepicker-multi-4").width("");1<d&&this.jb.addClass("oj-datepicker-multi-"+d).css("width",17*d+"em");this.jb[(1!==b[0]||1!==b[1]?"add":"remove")+"Class"]("oj-datepicker-multi");this.Fd&&(this.element.is(":visible")&&!this.element.is(":disabled"))&&(a||this.Wc?
(a=this.jb.find(".oj-datepicker-calendar"),a[0]!==document.activeElement&&a.focus()):this.element[0]!==document.activeElement&&this.element.focus())},Uc:function(a,b,d){this.options.disabled||(this.Dw(a+("M"===b?this.options.currentMonthPos:0),b),this.oi(d))},RJ:function(){var a=new Date;this.Oe=a.getDate();this.Tf=this.le=a.getMonth();this.Fg=this.oe=a.getFullYear();this.Uc()},jB:function(a,b){var h=parseInt(a.options[a.selectedIndex].value,10);"M"===b?this.le=this.Tf=h:this.oe=this.Fg=h;e("#"+this.pf(this.iq)).html(this.options.monthWide[this.Tf]+
" "+d.eb(new Date(this.Fg,this.Tf,1)));this.Uc()},iB:function(a,b,d){e(d).hasClass(this.qw)||this.options.disabled||(this.Oe=e("a",d).html(),this.le=a,this.oe=b,(a=this.options.value)?(b=new Date(this.oe,this.le,this.Oe),this.Cx(a,b),a=b):a=new Date(this.oe,this.le,this.Oe),this.Ch(this.Bd().format(a)),this.Ne(a,null,{Mu:this.Nf.Um}),this.hide())},kr:function(a,b){var d;null==a||""===a?d=b:"number"===typeof a?isNaN(a)?d=b:(d=this.vo(),d.setDate(d.getDate()+a)):d=new Date(a.getTime());return d=d||
b},Xs:function(a){a=this.kr(a,this.vo());this.Oe=a.getDate();this.Tf=this.le=a.getMonth();this.Fg=this.oe=a.getFullYear();this.Dw()},eR:function(){return this.oe&&""!==this.element.val()?new Date(this.oe,this.le,this.Oe):null},el:function(){var a=this.options.stepMonths;return e.isNumeric(a)?a:this.options.numberOfMonths},bH:function(){var a=this.el(),b=this;this.jb.find("[data-handler]").map(function(){e(this).bind(this.getAttribute("data-event"),{prev:function(){b.Uc(-a,"M",!0)},next:function(){b.Uc(+a,
"M",!0)},hide:function(a){if("keyup"===a.type&&13===a.keyCode||"click"===a.type)b.hide(),a.preventDefault(),a.stopPropagation()},today:function(a){if("keyup"===a.type&&13===a.keyCode||"click"===a.type)b.RJ(),a.preventDefault(),a.stopPropagation()},selectDay:function(){b.iB(+this.getAttribute("data-month"),+this.getAttribute("data-year"),this);return!1},selectMonth:function(){b.jB(this,"M");return!1},selectYear:function(){b.jB(this,"Y");return!1},calendarKey:function(a){b.xI(a)}}[this.getAttribute("data-handler")])})},
RI:function(){var a,b,d,e,k,l=this.options.dayWide,m=this.options.dayNarrow,n=this.options.monthWide,q=this.options.monthAbbreviated,r=this.options.firstDayOfWeek,p,s,v,u,y,w,z,x,B="",t,C,A,M,E,I,G,K,H=new Date,H=new Date(H.getFullYear(),H.getMonth(),H.getDate()),N=this.hn();k=this.options.buttonPanel;var O=this.Qr(),D=this.options.currentMonthPos,Z=this.options.dayMetaData;K=null;var U=1!==O[0]||1!==O[1],V=this.ej("min"),R=this.ej("max"),D=this.Tf-D,P=this.Fg,W=new Date(this.oe,this.le,this.Oe),
S=this.cj(),Q=S.getDate(),ba=S.getMonth(),ca=S.getFullYear(),T=this.options.disabled;S.setHours(0);S.setMinutes(0);S.setSeconds(0);S.setMilliseconds(0);0>D&&(D+=12,P--);if(R)for(a=new Date(R.getFullYear(),R.getMonth()-O[0]*O[1]+1,R.getDate()),a=V&&a<V?V:a;new Date(P,D,1)>a;)D--,0>D&&(D=11,P--);this.Tf=D;this.Fg=P;a=this.q("prevText");a=this.gx(-1,P,D)&&!T?"\x3ca class\x3d'oj-datepicker-prev-icon oj-enabled oj-component-icon oj-clickable-icon' data-handler\x3d'prev' data-event\x3d'click' title\x3d'"+
a+"'\x3e\x3c/a\x3e":"\x3ca class\x3d'oj-datepicker-prev-icon oj-disabled oj-component-icon oj-clickable-icon' title\x3d'"+a+"'\x3e\x3c/a\x3e";b=this.q("nextText");b=this.gx(1,P,D)&&!T?"\x3ca class\x3d'oj-datepicker-next-icon oj-enabled oj-component-icon oj-clickable-icon' data-handler\x3d'next' data-event\x3d'click' title\x3d'"+b+"'\x3e\x3c/a\x3e":"\x3ca class\x3d'oj-datepicker-next-icon oj-disabled oj-component-icon oj-clickable-icon' title\x3d'"+b+"'\x3e\x3c/a\x3e";d=this.q("currentText");e=this.Wc?
"":"\x3cbutton type\x3d'button' class\x3d'oj-datepicker-close oj-enabled oj-priority-primary' data-handler\x3d'hide' data-event\x3d'click keyup'\x3e"+this.q("closeText")+"\x3c/button\x3e";k="default"===k?"\x3cdiv class\x3d'oj-datepicker-buttonpane'\x3e"+(N?e:"")+(this.Cz(H)?"\x3cbutton type\x3d'button' class\x3d'oj-datepicker-current oj-enabled oj-priority-secondary' data-handler\x3d'today' data-event\x3d'click keyup'\x3e"+d+"\x3c/button\x3e":"")+(N?"":e)+"\x3c/div\x3e":"";d=this.options.weekDisplay;
e=this.options.daysOutsideMonth;p="";s="all";for(v=0;v<O[0];v++){u="";this.pl=4;for(y=0;y<O[1];y++){s="all";t="";if(U){t+="\x3cdiv class\x3d'oj-datepicker-group";if(1<O[1])switch(y){case 0:t+=" oj-datepicker-group-first";s=N?"right":"left";break;case O[1]-1:t+=" oj-datepicker-group-last";s=N?"left":"right";break;default:t+=" oj-datepicker-group-middle",s=""}t+="'\x3e"}t+="\x3cdiv class\x3d'oj-datepicker-header"+(T?" oj-disabled ":" oj-enabled ")+"'\x3e"+(/all|left/.test(s)&&0===v?N?b:a:"")+(/all|right/.test(s)&&
0===v?N?a:b:"")+this.SI(D,P,V,R,0<v||0<y,n,q)+"\x3c/div\x3e\x3ctable class\x3d'oj-datepicker-calendar"+(T?" oj-disabled ":" oj-enabled ")+"' tabindex\x3d-1 data-handler\x3d'calendarKey' data-event\x3d'keydown' aria-readonly\x3d'true' role\x3d'grid' aria-labelledby\x3d'"+this.pf(this.iq)+"'\x3e\x3cthead role\x3d'presentation'\x3e\x3ctr role\x3d'row'\x3e";C="number"===d?"\x3cth class\x3d'oj-datepicker-week-col'\x3e"+this.q("weekHeader")+"\x3c/th\x3e":"";for(s=0;7>s;s++)w=(s+parseInt(r,10))%7,C+="\x3cth role\x3d'columnheader' aria-label\x3d'"+
l[w]+"'"+(5<=(s+r+6)%7?" class\x3d'oj-datepicker-week-end'":"")+"\x3e\x3cspan title\x3d'"+l[w]+"'\x3e"+m[w]+"\x3c/span\x3e\x3c/th\x3e";t+=C+"\x3c/tr\x3e\x3c/thead\x3e\x3ctbody role\x3d'presentation'\x3e";C=this.ko(P,D);P===ca&&D===ba&&(Q=Math.min(Q,C));s=(this.eJ(P,D)-r+7)%7;C=Math.ceil((s+C)/7);this.pl=C=U?this.pl>C?this.pl:C:C;A=new Date(P,D,1-s);for(M=0;M<C;M++){t+="\x3ctr role\x3d'row'\x3e";E="none"===d?"":"\x3ctd class\x3d'oj-datepicker-week-col'\x3e"+this.options.calculateWeek(A)+"\x3c/td\x3e";
for(s=0;7>s;s++){G=A.getMonth()!==D;w=A.getTime()===S.getTime();z="oj-dp-"+M+"-"+s;(x=A.getTime()===W.getTime()&&D===this.le)&&(B=z);I=[!0,""];K=A.getFullYear();var Y=A.getMonth(),da=A.getDate(),ea=function aa(a,b,c){if(!a||b===c.length)return a;var d=b+1;return aa(a[c[b]],d,c)||aa(a["*"],d,c)};Z&&(K=ea(Z,0,[K,Y+1,da]))&&(I=[!K.disabled,K.className||""],K.tooltip&&I.push(K.tooltip));K=G&&"selectable"!==e||!I[0]||V&&A<V||R&&A>R;E+="\x3ctd role\x3d'gridcell' aria-disabled\x3d'"+!!K+"' aria-selected\x3d'"+
w+"' id\x3d'"+z+"' class\x3d'"+(5<=(s+r+6)%7?" oj-datepicker-week-end":"")+(G?" oj-datepicker-other-month":"")+(x?" "+this.gq:"")+(K||T?" "+this.qw+" oj-disabled":" oj-enabled")+(G&&"hidden"===e?"":" "+I[1]+(w?" "+this.ov:"")+(A.getTime()===H.getTime()?" oj-datepicker-today":""))+"'"+(G&&"hidden"===e||!I[2]?"":" title\x3d'"+I[2].replace(/'/g,"\x26#39;")+"'")+(K?"":" data-handler\x3d'selectDay' data-event\x3d'click' data-month\x3d'"+A.getMonth()+"' data-year\x3d'"+A.getFullYear()+"'")+"\x3e"+(G&&"hidden"===
e?"\x26#xa0;":K||T?"\x3cspan class\x3d'oj-disabled'\x3e"+A.getDate()+"\x3c/span\x3e":"\x3ca class\x3d'oj-enabled"+(A.getTime()===S.getTime()?" oj-selected":"")+(G?" oj-priority-secondary":"")+"' href\x3d'#'\x3e"+A.getDate()+"\x3c/a\x3e")+"\x3c/td\x3e";A.setDate(A.getDate()+1)}t+=E+"\x3c/tr\x3e"}D++;11<D&&(D=0,P++);t+="\x3c/tbody\x3e\x3c/table\x3e"+(U?"\x3c/div\x3e"+(0<O[0]&&y===O[1]-1?"\x3cdiv class\x3d'oj-datepicker-row-break'\x3e\x3c/div\x3e":""):"");u+=t}p+=u}return{html:p+k,IC:B}},SI:function(a,
f,e,g,k,l,m){var n,q,r,p,s=this.options.changeMonth,v=this.options.changeYear,u=b.pa.DD()?"before":"after",y="\x3cdiv class\x3d'oj-datepicker-title' role\x3d'header'\x3e",w="",z=this.options.disabled;if(k||"none"===s)w+="\x3cspan class\x3d'oj-datepicker-month'\x3e"+l[a]+"\x3c/span\x3e";else{n=e&&e.getFullYear()===f;q=g&&g.getFullYear()===f;w+="\x3cselect tabindex\x3d'-1' class\x3d'oj-datepicker-month "+(z?"oj-disabled' disabled":"oj-enabled'")+" data-handler\x3d'selectMonth' data-event\x3d'change' role\x3d'listbox'\x3e";
for(r=0;12>r;r++)(!n||r>=e.getMonth())&&(!q||r<=g.getMonth())&&(w+="\x3coption role\x3d'option' value\x3d'"+r+"' aria-selected\x3d'"+(r===a?"true' selected\x3d'selected'":"false'")+"\x3e"+m[r]+"\x3c/option\x3e");w+="\x3c/select\x3e"}"before"===u&&(y+=w+(k||"select"!==s||"select"!==v?"\x26#xa0;":""));if(!this.sg)if(this.sg="",k||"none"===v)y+="\x3cspan class\x3d'oj-datepicker-year'\x3e"+d.eb(new Date(f,a,1))+"\x3c/span\x3e";else{n=this.options.yearRange.split(":");p=(new Date).getFullYear();q=function(a){a=
a.match(/c[+\-].*/)?f+parseInt(a.substring(1),10):a.match(/[+\-].*/)?p+parseInt(a,10):parseInt(a,10);return isNaN(a)?p:a};m=q(n[0]);n=Math.max(m,q(n[1]||""));m=e?Math.max(m,e.getFullYear()):m;n=g?Math.min(n,g.getFullYear()):n;for(this.sg+="\x3cselect tabindex\x3d'-1' class\x3d'oj-datepicker-year "+(z?"oj-disabled' disabled":"oj-enabled'")+" data-handler\x3d'selectYear' data-event\x3d'change' role\x3d'listbox'\x3e";m<=n;m++)this.sg+="\x3coption role\x3d'option' value\x3d'"+m+"' aria-selected\x3d'"+
(m===f?"true' selected\x3d'selected'":"false'")+"\x3e"+d.eb(new Date(m,a,1))+"\x3c/option\x3e";this.sg+="\x3c/select\x3e";y+=this.sg;this.sg=null}"after"===u&&(y+=(k||"select"!==s||"select"!==v?"\x26#xa0;":"")+w);y+="\x3cspan class\x3d'oj-helper-hidden-accessible' id\x3d'"+this.pf(this.iq)+"'\x3e"+l[a]+" "+d.eb(new Date(f,a,1))+"\x3c/span\x3e";y+="\x3cspan class\x3d'oj-helper-hidden-accessible' id\x3d'"+this.pf(this.qv)+"'\x3e"+this.q("datePicker")+"\x3c/span\x3e";return y+"\x3c/div\x3e"},Dw:function(a,
b){var d=this.Fg+("Y"===b?a:0),e=this.Tf+("M"===b?a:0),k=Math.min(this.Oe,this.ko(d,e))+("D"===b?a:0),d=new Date(d,e,k);this.Oe=d.getDate();this.Tf=this.le=d.getMonth();this.Fg=this.oe=d.getFullYear()},Qr:function(){var a=this.options.numberOfMonths,a="string"===typeof a?parseInt(a,10):a;return null==a?[1,1]:"number"===typeof a?[1,a]:a},ej:function(a){var b=this.kr(this.options[a],null);if(b)return b;b=null;if(this.element.attr(a))try{b=Date.parse(this.element.attr(a));if(isNaN(b))return;b=new Date(b)}catch(d){}return this.options[a]=
b},ko:function(a,b){return 32-(new Date(a,b,32)).getDate()},eJ:function(a,b){return(new Date(a,b,1)).getDay()},gx:function(a,b,d){var e=this.Qr();b=new Date(b,d+(0>a?a:e[0]*e[1]),1);0>a&&b.setDate(this.ko(b.getFullYear(),b.getMonth()));return this.Cz(b)},Cz:function(a){var b,d,e=this.ej("min"),k=this.ej("max"),l=null,m=null;if(b=this.options.yearRange)b=b.split(":"),d=(new Date).getFullYear(),l=parseInt(b[0],10),m=parseInt(b[1],10),b[0].match(/[+\-].*/)&&(l+=d),b[1].match(/[+\-].*/)&&(m+=d);return(!e||
a.getTime()>=e.getTime())&&(!k||a.getTime()<=k.getTime())&&(!l||a.getFullYear()>=l)&&(!m||a.getFullYear()<=m)},bR:function(a){function b(a){return{GS:1,qS:2,FS:3}[a]||a}return[parseFloat(b(a.css("border-left-width"))),parseFloat(b(a.css("border-top-width")))]},Qq:function(a){a=e(a.target);a[0]!==this.jb[0]&&(0===a.parents("#"+this.pf(this.Mv)).length&&!a.closest("."+this.yk).length&&this.Fd)&&this.hide()},lr:function(a){if(!this.Wc&&this.Ve){var b=this.Ve.children().filter("span");a?b.addClass("oj-disabled").removeClass("oj-enabled"):
b.removeClass("oj-disabled").addClass("oj-enabled")}this.Fd&&this.oi()},aq:function(){this.Wc||this._superApply(arguments)},Gs:function(a){this.Wc||(this._superApply(arguments),this.Fd&&this.jb.find(".oj-datepicker-calendar").focus())},Ch:function(a){this._superApply(arguments);this.Fd&&this.oi()},Ne:function(a,b,d){var e=this._superApply(arguments);e&&this.Xs(this.cj());return e},Ji:function(){return this.options.value||""},_GetDefaultStyleClass:o_d("oj-inputdate"),bn:function(){var a=this._superApply(arguments),
d=this.ej("min"),h=this.ej("max"),g={},g={};if(null!=d||null!=h)g={min:this.options.min,max:this.options.max,converter:this.Bd()},this.Lk[b.Rb.VALIDATOR_TYPE_DATETIMERANGE]=b.R.rg(b.Rb.VALIDATOR_TYPE_DATETIMERANGE).createValidator(g);null!=this.options.dayMetaData&&(g={dayMetaData:this.options.dayMetaData,converter:this.Bd()},this.Lk[b.Rb.VALIDATOR_TYPE_DATERESTRICTION]=b.R.rg(b.Rb.VALIDATOR_TYPE_DATERESTRICTION).createValidator(g));return e.extend(this.Lk,a)},Cx:function(a,b){b.setHours(a.getHours());
b.setMinutes(a.getMinutes());b.setSeconds(a.getSeconds());b.setMilliseconds(a.getMilliseconds())},vo:function(){var a=new Date;a.setHours(0);a.setMinutes(0);a.setSeconds(0);a.setMilliseconds(0);return a},cj:function(){return this.kr(this.options.value,this.vo())},FR:o_c("Wc"),getNodeBySubId:function(a){var b=this._superApply(arguments);if(b)return b;var b=a.subId,d=this.jb;if(b)switch(b){case "oj-datepicker-content":return d;case "oj-inputdatetime-calendar-icon":return e(".oj-inputdatetime-calendar-icon",
this.Ve);case "oj-datepicker-prev-icon":return e(".oj-datepicker-prev-icon",d);case "oj-datepicker-next-icon":return e(".oj-datepicker-next-icon",d);case "oj-datepicker-month":return e(".oj-datepicker-month",d);case "oj-datepicker-year":return e(".oj-datepicker-year",d);case "oj-datepicker-current":return e(".oj-datepicker-current",d);case "oj-datepicker-close":return e(".oj-datepicker-close",d)}return null},hide:function(){this.Fd&&!this.Wc&&(this.jb.hide(),this.Fd=!1);return this},refresh:function(){this._superApply(arguments);
this.oi();return this},show:function(){if(!this.Fd&&!this.options.disabled){var a=this.hn();this.jb.empty();this.oi();this.jb.css({top:"",left:"",position:"absolute"});this.jb.position({my:a?"right top":"left top",at:a?"right bottom":"left bottom",of:this.element,collision:"fit"});this.Fd=!0;this.jb.show();this.jb.find(".oj-datepicker-calendar").focus();return this}},calendarDisplay:o_c("jb")});b.ta("oj.ojInputTime",e.oj.inputBase,{version:"1.0.0",widgetEventPrefix:"oj",_CLASS_NAMES:"oj-inputdatetime-input",
_WIDGET_CLASS_NAMES:"oj-inputdatetime-time-only oj-component oj-inputdatetime oj-inputdatetime-input-container",Li:"inputHelp",_ATTR_CHECK:[{attr:"type",setMandatory:"text"}],pw:"ojInputTime",yk:"oj-inputdatetime-input-trigger",GG:"oj-inputdatetime-time-icon",options:{converter:b.R.bh(b.gf.CONVERTER_TYPE_DATETIME).createConverter({hour:"2-digit",hour12:!0,minute:"2-digit"}),timeIncrement:"T00:30:00:00",datePicker:null},Mf:function(){this._super();this.options.value||(this.options.value="")},gn:function(){this.it=
null;this.Xg=!1;this.Wi=this.options.datePicker;this.Ob=e("\x3cdiv id\x3d'"+this.pf(this.pw)+"' class\x3d'oj-listbox-drop oj-listbox-display-none'\x3e\x3c/div\x3e");e("body").append(this.Ob);e(document).on("mousedown",e.proxy(this.Qq,this))},Ic:function(){this.gn();var a=this._superApply(arguments);this.nj()&&!this.zz()&&(this._CLASS_NAMES="");this.Cq();this.pj()&&(this.Mg=e.proxy(this.Wn,this),this.element.on("keydown",this.Mg));return a},xh:function(){var a=this._superApply(arguments);this._setOption("disabled",
this.options.disabled);return a},_setOption:function(a,b){var d=null;if("value"===a)return!b&&this.element.val()&&(b=new Date),d=this._super(a,b);d=this._superApply(arguments);if("disabled"===a){var e=this.Ve.children().filter("span");b?e.addClass("oj-disabled").removeClass("oj-enabled"):e.removeClass("oj-disabled").addClass("oj-enabled")}else"timeIncrement"===a&&this.eo();return d},_destroy:function(){var a=this._super();this.Ve&&this.Ve.remove();this.Mg&&this.element.off("keydown",this.Mg);this.Ob.remove();
return a},aq:function(){this.pj()&&this._superApply(arguments)},Gs:function(a){this.pj()&&(this._superApply(arguments),this.Xg&&e("ul",this.Ob).focus())},Cq:function(){var a=this.pj(),b=a?e(e("\x3cspan\x3e").addClass(this.yk)):e("+ span",this.element),d=e(e("\x3cspan/\x3e").addClass(this.GG+" oj-clickable-icon oj-component-icon"));b.append(d);var g=this;d.on("click",function(){g.Xg?g.hide():g.show()}).on("mouseenter",function(){e(this).addClass("oj-hover")}).on("mousedown",function(){e(this).addClass("oj-active")}).on("mouseleave",
function(){e(this).removeClass("oj-hover oj-active")});this.Ve=b;a&&this.element.after(b)},Wn:function(a){var b=e.ui.keyCode,d=!1;if(this.Xg)switch(a.keyCode){case b.TAB:this.hide();break;case b.ESCAPE:this.hide();d=!0;break;case b.UP:case b.DOWN:e("ul",this.Ob).focus(),d=!0}else switch(a.keyCode){case b.UP:case b.DOWN:this.show(),d=!0}if(d||a.keyCode===b.ENTER)return a.preventDefault(),a.stopPropagation(),!1},eo:function(){var a=this.KJ(),b=e("\x3cul class\x3d'oj-listbox-results' tabindex\x3d'-1' role\x3d'listbox'\x3e\x3c/ul\x3e"),
d=this.fJ(),g=[],k;a.setHours(0);a.setMinutes(0);a.setSeconds(0);a.setMilliseconds(0);g=this.NJ(a);d=d||g[0].value;this.Ob.empty();a=0;for(k=g.length;a<k;a++){var l=g[a].value,m=e("\x3cli class\x3d'oj-listbox-result' role\x3d'presentation'\x3e"),n=e("\x3cdiv class\x3d'oj-listbox-result-label' data-value\x3d'"+l+"' role\x3d'option' id\x3d'"+this.uuid+"_sel"+a+"'\x3e"+g[a].label+"\x3c/li\x3e");d===l&&(n.attr("aria-selected","true"),m.addClass("oj-listbox-highlighted"));m.append(n);b.append(m)}this.Ob.append(b);
e(".oj-listbox-result",b).on("mousemove",function(){e(".oj-listbox-highlighted",b).removeClass("oj-listbox-highlighted");var a=e(this);a.addClass("oj-listbox-highlighted");b.attr("aria-activedescendant",a.first()[0].id)});var q=this;b.on("click",function(a){q.hide();q.qA(a)}).on("keydown",function(a){q.MN(a)})},NJ:function(a){var b=[],d=this.cz();if(a){var e=this.options.timeIncrement;if(4===e.split(":").length){if(e=this.MJ(e)){var k=new Date(a),l="";do l=d.eb(k),b.push({label:l,value:l}),k.setHours(k.getHours()+
e.uP),k.setMinutes(k.getMinutes()+e.QP),k.setSeconds(k.getSeconds()+e.mQ),k.setMilliseconds(k.getMilliseconds()+e.PP);while(k.getDate()===a.getDate())}}else throw Error("timeIncrement value should be in the format of Thh:mm:ss:SS");}return b},MJ:function(a){var b=null;a=a.split(":");4===a.length&&(b={uP:parseInt(a[0].substring(1),10),QP:parseInt(a[1],10),mQ:parseInt(a[2],10),PP:parseInt(a[3],10)});return b},MN:function(a){if(this.Xg){var b=e.ui.keyCode,d=!1;switch(a.keyCode){case b.TAB:this.hide();
break;case b.ESCAPE:this.hide();this.element.focus();d=!0;break;case b.UP:this.mA(a,"prev");d=!0;break;case b.DOWN:this.mA(a,"next");d=!0;break;case b.ENTER:this.qA(a),d=!0}if(d)return a.preventDefault(),a.stopPropagation(),!1}},mA:function(a,b){var d=e(".oj-listbox-highlighted",this.Ob),g=e("ul",this.Ob);if(1===d.length){var k=e(d)[b]();1===k.length&&(d.removeClass("oj-listbox-highlighted"),k.addClass("oj-listbox-highlighted"),g.attr("aria-activedescendant",k.first()[0].id),this.kx(k))}},qA:function(){var a=
this.Ob,b=e("[aria-selected]",a),d=e("ul",a),a=e(".oj-listbox-highlighted div",a);1===a.length&&(1===b.length&&(b.removeAttr("aria-selected"),b.parent().removeClass("oj-listbox-highlighted")),a.attr("aria-selected","true"),a.parent().addClass("oj-listbox-highlighted"),this.Ch(a.attr("data-value")),this.Ne(a.attr("data-value")),d.attr("aria-activedescendant",a[0].id),this.hide(),this.element.focus(),this.nj()&&this.Wi.widget.hide())},show:function(){if(!this.options.disabled){this.nj()&&this.Wi.widget.hide();
0===this.Ob.children().length&&this.eo();this.Ob.css({top:"",left:""});this.Ob.width(this.element.parent().width());var a=this.hn();this.Ob.position({my:a?"right top":"left top",at:a?"right bottom":"left bottom",of:this.element,collision:"fit"});this.Xg=!0;this.Ob.show();a=e("[aria-selected]",this.Ob);1===a.length&&this.kx(e(a));e("ul",this.Ob).focus()}},hide:function(){this.Xg&&(this.Ob.hide(),this.Xg=!1)},refresh:function(){this._superApply(arguments);this.eo();return this},Ch:function(a){this.pj()&&
this._superApply(arguments);this.eo()},tk:function(){return this.pj()},pj:function(){return!this.nj()||this.zz()},_GetDefaultStyleClass:o_d("oj-inputtime"),Ji:function(){return this.options.value||""},KJ:function(){return new Date(1950,0,1)},kx:function(a){a=a.position().top;var b=this.Ob.height(),d=e(".oj-listbox-results",this.Ob),g=d.scrollTop();(b+g<a||a<g)&&d.scrollTop(a)},cz:function(){return this.nj()?this.Wi.converter:this.Bd()},fJ:function(){var a=this.cz(),b=this.options.value;return b?a.eb(b):
""},nj:function(){return null!==this.Wi},zz:function(){return this.Wi.inline},Qq:function(a){a=e(a.target);a[0]!==this.Ob[0]&&0===a.parents("#"+this.pf(this.pw)).length&&(!a.closest("."+this.yk).length&&this.Xg)&&this.hide()},getNodeBySubId:function(a){var b=this._superApply(arguments);if(b)return b;b=a.subId;return"oj-listbox-drop"===b?this.Ob:"oj-inputdatetime-time-icon"===b?e(".oj-inputdatetime-time-icon",this.Ve):null},timeDisplay:o_c("Ob"),widget:function(){return this.nj()?this.Wi.widget.widget():
this._super()}});b.ta("oj.ojInputDateTime",e.oj.ojInputDate,{version:"1.0.0",widgetEventPrefix:"oj",_WIDGET_CLASS_NAMES:"oj-inputdatetime-date-time oj-component oj-inputdatetime",Li:"inputHelpBoth",options:{timeIncrement:"T00:30:00:00",converter:b.R.bh(b.gf.CONVERTER_TYPE_DATETIME).createConverter({day:"2-digit",month:"2-digit",year:"2-digit",hour:"2-digit",hour12:!0,minute:"2-digit"})},gn:function(){this._super();this.Jl=this.element;this.it=this.SB=this.qe=null},Ic:function(){var a=this._super(),
b=this.Zr(this.Bd());if(null===b)throw Error("Plase use ojInputDate if you do not have time portion");if(this.Wc){var d=e("\x3cinput type\x3d'text'\x3e");d.insertAfter(this.element);this.Jl=d}this.SB=e.proxy(this.NN,this);this.qe=this.Jl.ojInputTime({converter:null,optionChange:this.SB,timeIncrement:this.options.timeIncrement,placeholder:b.sb(),datePicker:{widget:this,converter:b,inline:this.Wc}});return a},xh:function(){var a=this._superApply(arguments),b=this.Zr(this.Bd());this.qe.ojInputTime("option",
"disabled",this.options.disabled);this.Wc&&this.Jl.val(b.eb(this.cj()));return a},_setOption:function(a,b){this.qe&&("timeIncrement"===a||"disabled"===a?this.qe.ojInputTime("option",a,b):"converter"===a&&this.qe.ojInputTime("option",a,this.Zr(b)));return this._superApply(arguments)},_destroy:function(){var a=this._super();this.qe.ojInputTime("destroy");this.Wc&&this.Jl.remove();return a},Zr:function(a){a=a.Xb();var d={},h="hour hour12 minute second millisecond timeFormat".split(" "),g,k;g=0;for(k=
h.length;g<k;g++)h[g]in a&&("timeFormat"===h[g]&&(d.formatType="time"),d[h[g]]=a[h[g]]);return e.isEmptyObject(d)?null:this.it=a=b.R.bh(b.gf.CONVERTER_TYPE_DATETIME).createConverter(d)},NN:function(a,b){if("value"===b.option){var d=new Date(this.cj()),e=this.it.parse(b.value);d.setHours(e.getHours());d.setMinutes(e.getMinutes());d.setSeconds(e.getSeconds());d.setMilliseconds(e.getMilliseconds());this.option("value",d)}},Wn:function(a){var b=e.ui.keyCode,d=!1;if(!this.Fd)switch(a.keyCode){case b.UP:case b.DOWN:a.altKey&&
(this.qe.ojInputTime("show"),d=!0)}return d?(a.preventDefault(),a.stopPropagation(),!1):this._superApply(arguments)},lr:function(a){var b=this._superApply(arguments);this.Wc&&this.qe&&this.qe.ojInputTime("option","disabled",a);return b},show:function(){this.qe.ojInputTime("hide");return this._super()},refresh:function(){this._superApply(arguments);this.qe.ojInputTime("refresh");return this},getNodeBySubId:function(a){var b=this._superApply(arguments);if(b)return b;b=a.subId;return"oj-datepicker-time"===
b||"oj-datepicker-time-icon"===b?this.qe.ojInputTime("getNodeBySubId",a):null},_GetMessagingLauncherElement:function(){return this.Wc?this.Jl:this._super()},_GetDefaultStyleClass:o_d("oj-inputdatetime"),uv:o_d("oj-ojInputDate")})});
//# sourceMappingURL=oj-modular.map