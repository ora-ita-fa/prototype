define(["ojs/ojcore","jquery","ojs/ojcomponentcore","ojs/ojmodel","ojs/ojdatacollection-common"],function(a,e){(function(){a.ma("oj.ojPagingControl",e.oj.baseComponent,{version:"1.0.0",defaultElement:"\x3cdiv\x3e",widgetEventPrefix:"oj",options:{data:null,pageSize:25,pageOptions:{layout:["auto"],maxPageLinks:6},loadMoreOptions:{maxCount:500},mode:"page"},ga:{KD:"labelAccPaging",FD:"labelAccNavFirstPage",GD:"labelAccNavLastPage",HD:"labelAccNavNextPage",JD:"labelAccNavPreviousPage",ID:"labelAccNavPage",
LD:"labelLoadMore",MD:"labelNavInputPage",ND:"labelNavInputPageMax",OD:"labelNavInputPageSummary",su:"msgItemRange",YD:"msgItemRangeUnknown",yE:"tipNavInputPage",BE:"tipNavPageLink",AE:"tipNavNextPage",CE:"tipNavPreviousPage",xE:"tipNavFirstPage",zE:"tipNavLastPage",qD:"pageInvalid.summary",pD:"pageInvalid.detail",Zt:"dataInvalidType.summary",Yt:"dataInvalidType.detail",oD:"maxPageLinksInvalid.summary",nD:"maxPageLinksInvalid.detail"},C:{kp:"oj-widget",Xo:"oj-active",Pg:"oj-clickable-icon",Lb:"oj-disabled",
$c:"oj-enabled",te:"oj-focus",nm:"oj-hover",Mb:"oj-checked"},n:{aE:"oj-pagingcontrol",uu:"oj-pagingcontrol-acc-label",vu:"oj-pagingcontrol-content",wu:"oj-pagingcontrol-loadmore",xu:"oj-pagingcontrol-loadmore-link",yu:"oj-pagingcontrol-loadmore-range",Au:"oj-pagingcontrol-nav",zu:"oj-pagingcontrol-nav-arrow-section",lE:"oj-pagingcontrol-nav-page",kE:"oj-pagingcontrol-nav-page-acc-label",eE:"oj-pagingcontrol-nav-label",Du:"oj-pagingcontrol-nav-input-section",Cu:"oj-pagingcontrol-nav-input",dE:"oj-pagingcontrol-nav-input-max",
Eu:"oj-pagingcontrol-nav-input-summary",jE:"oj-pagingcontrol-nav-pages-section",Hu:"oj-pagingcontrol-nav-pages-links",Bu:"oj-pagingcontrol-nav-first",bE:"oj-pagingcontrol-nav-first-acc-label",Iu:"oj-pagingcontrol-nav-previous",mE:"oj-pagingcontrol-nav-previous-acc-label",Gu:"oj-pagingcontrol-nav-next",hE:"oj-pagingcontrol-nav-next-acc-label",Fu:"oj-pagingcontrol-nav-last",fE:"oj-pagingcontrol-nav-last-acc-label",cE:"oj-pagingcontrol-nav-first-icon",nE:"oj-pagingcontrol-nav-previous-icon",iE:"oj-pagingcontrol-nav-next-icon",
gE:"oj-pagingcontrol-nav-last-icon",Sg:"oj-widget-icon",Ej:"oj-helper-hidden-accessible"},WN:"data-oj-pagenum",ue:"enabled",dp:"disabled",ru:{qu:"loadMore",aO:"page"},Vd:{Og:"auto",AD:"input",oE:"rangeText",$D:"pages",tu:"nav"},firstPage:function(){var a=this.za();if(null!=a){try{a.fetch({startIndex:0}),this.K=0}catch(b){return!1}return!0}return!1},previousPage:function(){var a=this.za();if(null!=a){var b=this.zf();try{this.K=this.vn(b-1),a.fetch({startIndex:this.K})}catch(c){return!1}return!0}return!1},
nextPage:function(){var a=this.za();if(null!=a){var b=this.zf();try{this.K=this.vn(b+1),a.fetch({startIndex:this.K})}catch(c){return!1}return!0}return!1},lastPage:function(){var a=this.za();if(null!=a){try{this.K=this.vn(this.oh()),a.fetch({startIndex:this.K})}catch(b){return!1}return!0}return!1},page:function(a){try{this.K=this.vn(a),this.za().fetch({startIndex:this.K})}catch(b){return!1}return!0},loadNext:function(){if(null!=this.za()){try{this.za().next()}catch(a){return!1}return!0}return!1},refresh:function(){this._super();
this.zb()},_init:function(){this._super();this.K=0;this.Kk();this.zb()},_create:function(){this._super();this.Kk();this.Tj();this.Ar(this.fk());this._on(this.ze)},_destroy:o_a(),Tj:function(){var a=this.options;this.element.addClass(this.n.aE);this.element.addClass(this.C.kp);this.element.attr("tabindex","0");this.K=0;this.RF();this.XF();a.mode==this.ru.qu?(this.YF(),this.ZF(),this.Yv()):this.Zv();null!=this.za()&&0==this.za().size()&&(this.za().Re(a.pageSize),this.za().fetch({startIndex:this.K}))},
ze:{"click .oj-pagingcontrol-loadmore-link":function(a){this.loadNext();a.preventDefault()},"click .oj-pagingcontrol-nav-page":function(a){var b=e(a.target).attr("data-oj-pagenum");this.page(b);a.preventDefault()},"click .oj-pagingcontrol-nav-first":function(a){this.firstPage();a.preventDefault()},"click .oj-pagingcontrol-nav-previous":function(a){this.previousPage();a.preventDefault()},"click .oj-pagingcontrol-nav-next":function(a){this.nextPage();a.preventDefault()},"click .oj-pagingcontrol-nav-last":function(a){this.lastPage();
a.preventDefault()},"change .oj-pagingcontrol-nav-input":function(d){try{var b=parseInt(e(d.target).val(),10);this.page(b)}catch(c){throw d=this.k(this.ga.qD),b=this.k(this.ga.pD),new a.t(d,b,a.t.xa.ERROR);}}},zb:function(){if(this.options.mode==this.ru.qu){var a=this.za(),b=this.hk();null!=a&&a.size()==a.totalSize()?b.css("display","none"):(b.css("display",""),this.tK())}else this.uK()},_setOption:function(a,b){this._super(a,b);this.zb()},vF:function(){this.Ep=null},wF:function(){this.Hp=this.Gp=
this.Fp=null},zf:function(){return 0==this.K?1:Math.ceil((this.K+1)/this.options.pageSize)},za:function(){if(!this.c&&null!=this.options.data){var d=this.options.data;if(d instanceof a.fb||d instanceof a.Da)this.c=d;else{var d=this.k(this.ga.Zt),b=this.k(this.ga.Yt);throw new a.t(d,b,a.t.xa.ERROR);}this.c.Re(this.options.pageSize);this.hw=this.options.data}return this.c},ex:function(){var a=this.za(),b=this.k(this.ga.su,this.K,0,0);null!=a&&(b=-1!=a.totalSize()?this.k(this.ga.su,this.K+1,this.K+a.size(),
a.totalSize()):this.k(this.ga.YD,this.K+1,this.K+a.size()));return b},rH:function(){return this.options.pageOptions.maxPageLinks},vn:function(a){var b=(a-1)*this.options.pageSize,c=this.oh();if(0>b)throw"Value must be greater than 0";if(0<c&&a>c)throw"Value cannot be greater than the total number of pages";return b},oh:function(){var a=this.za(),b=0;null!=a&&(b=a.totalSize());return-1==b?-1:Math.ceil(b/this.options.pageSize)},Wq:function(){this.zb()},tK:function(){var a=this.yH();a[0].parentNode.removeChild(a[0]);
this.Yv();this.vF()},uK:function(){var a=this.options.pageOptions.layout;this.gk().empty();this.wF();this.Zv();this.vK();if(-1<e.inArray(this.Vd.Og,a)){var a=this.element.width(),b=this.mx(),c=this.zH(),f=this.BH(),h=this.AH(),c=b[0].offsetWidth+c[0].offsetWidth;c>a?c-f.width()<=a?f.css("display","none"):c-f.width()-h.width()<=a?(f.css("display","none"),h.css("display","none")):(f.css("display","none"),h.css("display","none"),b.css("display","none")):0<c&&(f.css("display",""),h.css("display",""),
b.css("display",""))}},vK:function(){var a=this.mx(),b=a.children("."+this.n.Bu);b&&0<b.length&&(b=e(b[0]),1==this.zf()?(b.addClass(this.C.Lb),b.removeClass(this.C.$c)):(b.addClass(this.C.$c),b.removeClass(this.C.Lb)));(b=a.children("."+this.n.Iu))&&0<b.length&&(b=e(b[0]),1==this.zf()?(b.addClass(this.C.Lb),b.removeClass(this.C.$c)):(b.addClass(this.C.$c),b.removeClass(this.C.Lb)));(b=a.children("."+this.n.Fu))&&0<b.length&&(b=e(b[0]),this.zf()==this.oh()?(b.addClass(this.C.Lb),b.removeClass(this.C.$c)):
(b.addClass(this.C.$c),b.removeClass(this.C.Lb)));(a=a.children("."+this.n.Gu))&&0<a.length&&(a=e(a[0]),this.zf()==this.oh()?(a.addClass(this.C.Lb),a.removeClass(this.C.$c)):(a.addClass(this.C.$c),a.removeClass(this.C.Lb)))},Kk:function(){var d=this.za();if(null!=d){this.Tb=[];this.Tb.push({eventType:a.fb.q.SYNC,eventHandler:this.Wq.bind(this)});var b;for(b=0;b<this.Tb.length;b++)d.on(this.Tb[b].eventType,this.Tb[b].eventHandler)}},Ar:function(d){if(!this.ir){var b=this;a.sa.Zk(d[0],function(){b.zb()});
this.ir=!0}},ii:function(a,b){var c=e(document.createElement("span"));c.addClass(b);c.addClass(this.n.Ej);c.append(a);return c},RF:function(){var a=this.fk(),b=this.k(this.ga.KD),b=this.ii(b,this.n.uu),c=this.element.attr("id")+"_oj_pgCtrl_acc_label";b.attr("id",c);a.append(b);return b},VF:function(){var a=this.k(this.ga.ID);return this.ii(a,this.n.kE)},SF:function(){var a=this.k(this.ga.FD);return this.ii(a,this.n.bE)},TF:function(){var a=this.k(this.ga.GD);return this.ii(a,this.n.fE)},UF:function(){var a=
this.k(this.ga.HD);return this.ii(a,this.n.hE)},WF:function(){var a=this.k(this.ga.JD);return this.ii(a,this.n.mE)},XF:function(){var a=this.fk(),b=e(document.createElement("div"));b.addClass(this.n.vu);var c=this.xH().attr("id");b.attr("role","navigation");b.attr("aria-labelledby",c);a.append(b);return b},YF:function(){var a=this.gk(),b=e(document.createElement("div"));b.addClass(this.n.wu);a.append(b);return b},ZF:function(){var a=this.hk(),b=e(document.createElement("a"));b.addClass(this.n.xu);
var c=this.k(this.ga.LD);b.append(c);b.attr("tabindex","0");b.attr("href","#");a.append(b);return b},Yv:function(){this.za();var a=this.hk(),b=e(document.createElement("span"));b.addClass(this.n.yu);var c=this.ex();b.append(c);a.append(b);return b},Zv:function(){var a=this.options.pageOptions.layout;null==a&&(a=[this.Vd.Og]);var b=this.gk(),c=e(document.createElement("div"));c.addClass(this.n.Au);b.append(c);if(-1!=e.inArray(this.Vd.Og,a)||-1!=e.inArray(this.Vd.AD,a)){b=e(document.createElement("div"));
b.addClass(this.n.Du);c.append(b);var f=e(document.createElement("label"));f.addClass(this.n.eE);var h=this.k(this.ga.MD);f.append(h);b.append(f);h=e(document.createElement("input"));h.addClass(this.n.Cu);var g=this.k(this.ga.yE);this._focusable(this.element);h.attr("title",g);h.attr("tabindex","0");h.val(this.zf());f.append(h);0<this.oh()&&(f=e(document.createElement("span")),f.addClass(this.n.dE),h=this.k(this.ga.ND,this.oh()),f.append(h),b.append(f));if(-1!=e.inArray(this.Vd.Og,a)||-1!=e.inArray(this.Vd.oE,
a))f=e(document.createElement("span")),f.addClass(this.n.Eu),h=this.ex(),h=this.k(this.ga.OD,h),f.append(h),b.append(f)}b=e(document.createElement("div"));b.addClass(this.n.zu);c.append(b);if(-1!=e.inArray(this.Vd.Og,a)||-1!=e.inArray(this.Vd.tu,a))f=e(document.createElement("a")),f.addClass(this.n.Bu),f.addClass(this.n.cE),f.addClass(this.n.Sg),f.addClass(this.C.Pg),f.addClass(this.C.Lb),h=this.k(this.ga.xE),this._hoverable(f),this._focusable(f),f.attr("title",h),f.attr("tabindex","0"),f.attr("href",
"#"),h=this.SF(),f.append(h),b.append(f),f=e(document.createElement("a")),f.addClass(this.n.Iu),f.addClass(this.n.nE),f.addClass(this.n.Sg),f.addClass(this.C.Pg),f.addClass(this.C.Lb),h=this.k(this.ga.CE),this._hoverable(f),this._focusable(f),f.attr("title",h),f.attr("tabindex","0"),f.attr("href","#"),h=this.WF(),f.append(h),b.append(f);if(-1!=e.inArray(this.Vd.Og,a)||-1!=e.inArray(this.Vd.$D,a))f=e(document.createElement("div")),f.addClass(this.n.jE),b.append(f),this.$F(f,this.rH());if(-1!=e.inArray(this.Vd.Og,
a)||-1!=e.inArray(this.Vd.tu,a))a=e(document.createElement("a")),a.addClass(this.n.Gu),a.addClass(this.n.iE),a.addClass(this.n.Sg),a.addClass(this.C.Pg),a.addClass(this.C.Lb),f=this.k(this.ga.AE),this._hoverable(a),this._focusable(a),a.attr("title",f),a.attr("tabindex","0"),a.attr("href","#"),f=this.UF(),a.append(f),b.append(a),a=e(document.createElement("a")),a.addClass(this.n.Fu),a.addClass(this.n.gE),a.addClass(this.n.Sg),a.addClass(this.C.Pg),a.addClass(this.C.Lb),f=this.k(this.ga.zE),this._hoverable(a),
this._focusable(a),a.attr("title",f),a.attr("tabindex","0"),a.attr("href","#"),f=this.TF(),a.append(f),b.append(a);return c},$F:function(d,b){if(5>b){var c=this.k(this.ga.oD),f=this.k(this.ga.nD);throw new a.t(c,f,a.t.xa.ERROR);}c=e(document.createElement("div"));c.addClass(this.n.Hu);d.append(c);var f=this.oh(),h=this.zf(),g=b,l=[];if(1<=h){if(-1!=f&&f<=g)for(g=l[0]=1;g<f;g++)l[g]=g+1;else{l.push(1);1!=h&&l.push(h);h!=f&&-1!=f&&l.push(f);var g=g-l.length,k=h-1,n=1;if(h==f||h==f-1)n=0;for(;g>n&&1<
k;)l.push(k),k--,g--;h+=1;for(-1==f&&(g=1);0<g&&(h<=f||-1==f);)l.push(h),h++,g--}l.sort(function(a,b){return a-b});for(g=0;g<l.length;g++)h=l[g],this.Vp(c,h),g!=l.length-1&&h!=l[g+1]-1&&this.Vp(c,-1);-1==f&&this.Vp(c,-1)}return c},Vp:function(a,b){var c=this.zf(),f=null;-1==b?(f=e(document.createElement("span")),f.append("...")):(c==b?(f=e(document.createElement("div")),f.addClass(this.C.Mb),f.addClass(this.C.Xo),f.addClass(this.C.Lb),f.removeClass(this.C.$c)):(f=e(document.createElement("a")),f.removeClass(this.C.Mb),
f.removeClass(this.C.Xo),f.removeClass(this.C.Lb),f.addClass(this.C.$c)),f.attr("data-oj-pagenum",b),f.addClass(this.n.lE),c=this.k(this.ga.BE,b.toString()),this._hoverable(f),this._focusable(f),f.attr("title",c),f.attr("tabindex","0"),f.attr("href","#"),c=this.VF(),f.append(c),f.append(b.toString()),this._hoverable(f));a.append(f);return f},xH:function(){var a=this.fk(),b=null;a&&(b=a.find("."+this.n.uu))&&0<b.length&&(b=e(b.get(0)));return b},fk:function(){return e(this.element)},gk:function(){if(!this.lv){var a=
this.fk(),b=null;a&&(b=a.find("."+this.n.vu))&&0<b.length&&(this.lv=e(b.get(0)))}return this.lv},hk:function(){if(!this.mv){var a=this.gk(),b=null;a&&(b=a.children("."+this.n.wu))&&0<b.length&&(this.mv=e(b.get(0)))}return this.mv},xO:function(){if(!this.nv){var a=this.hk(),b=null;a&&(b=a.children("."+this.n.xu))&&0<b.length&&(this.nv=e(b.get(0)))}return this.nv},yH:function(){if(!this.Ep){var a=this.hk(),b=null;a&&(b=a.children("."+this.n.yu))&&0<b.length&&(this.Ep=e(b.get(0)))}return this.Ep},ik:function(){if(!this.Fp){var a=
this.gk(),b=null;a&&(b=a.children("."+this.n.Au))&&0<b.length&&(this.Fp=e(b.get(0)))}return this.Fp},yO:function(){if(!this.Gp){var a=this.ik(),b=null;a&&(b=a.find("."+this.n.Cu))&&0<b.length&&(this.Gp=e(b.get(0)))}return this.Gp},AH:function(){if(!this.Hp){var a=this.ik(),b=null;a&&(b=a.find("."+this.n.Eu))&&0<b.length&&(this.Hp=e(b.get(0)))}return this.Hp},BH:function(){var a=this.ik(),b=null;a&&(b=a.find("."+this.n.Hu))&&0<b.length&&(b=e(b.get(0)));return b},mx:function(){var a=this.ik(),b=null;
a&&(b=a.find("."+this.n.zu))&&0<b.length&&(b=e(b.get(0)));return b},zH:function(){var a=this.ik(),b=null;a&&(b=a.find("."+this.n.Du))&&0<b.length&&(b=e(b.get(0)));return b}})})();a.fb=function(a){this.Fa=a;this.h()};o_("PagingDataSource",a.fb,a);a.a.aa(a.fb,a.Hc,"oj.PagingDataSource");a.fb.prototype.h=function(){a.fb.j.h.call(this)};a.a.b("PagingDataSource.prototype.Init",{h:a.fb.prototype.h});a.fb.prototype.fetch=function(){a.f.Q()};a.a.b("PagingDataSource.prototype.fetch",{fetch:a.fb.prototype.fetch});
a.fb.prototype.hasMore=function(){a.f.Q();return!1};a.a.b("PagingDataSource.prototype.hasMore",{hasMore:a.fb.prototype.hasMore});a.fb.prototype.next=function(){a.f.Q()};a.a.b("PagingDataSource.prototype.next",{next:a.fb.prototype.next});a.fb.prototype.previous=function(){a.f.Q()};a.a.b("PagingDataSource.prototype.previous",{previous:a.fb.prototype.previous});a.fb.prototype.Re=function(){a.f.Q()};a.fb.prototype.startIndex=function(){a.f.Q();return 0};a.a.b("PagingDataSource.prototype.startIndex",{startIndex:a.fb.prototype.startIndex});
a.fb.prototype.size=function(){a.f.Q();return 0};a.a.b("PagingDataSource.prototype.size",{size:a.fb.prototype.size});a.fb.prototype.totalSize=function(){a.f.Q();return 0};a.a.b("PagingDataSource.prototype.totalSize",{totalSize:a.fb.prototype.totalSize});a.fb.q={SYNC:"sync"};o_("PagingDataSource.EventType",a.fb.q,a)});
//# sourceMappingURL=oj-modular.map