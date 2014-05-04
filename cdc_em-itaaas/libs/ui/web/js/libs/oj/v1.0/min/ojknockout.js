define(["ojs/ojcore","jquery","knockout"],function(b,e,a){function d(a,b){var c={};c.value=b.value;return c}function c(a,b){var c={},d=b.optionMetadata;d&&"shouldWrite"===d.writeback&&(c[b.option]=b.value);return c}function f(){this.Init()}function h(a,b,c){this.Init(a,b,c)}function g(b,c){return function(d){var f,e;f=d.parentElement;e=b.createChildContext(d.data,null,function(a){a.$key=d.key;a.$metadata=d.metadata;a.$headerContext=d});a.renderTemplate(c,e,null,f);return null}}function k(b,c){return function(d){var f,
e;f=d.parentElement;e=b.createChildContext(d.data,null,function(a){a.$keys=d.keys;a.$metadata=d.metadata;a.$cellContext=d});a.renderTemplate(c,e,null,f);return null}}function l(b,c,d){var f={};(function(c,d){f=function(f){var e=null,h=null;"header"==d?(e=b.extend({$column:f.column,$headerContext:f.headerContext}),h=f.headerContext.parentElement):"cell"==d&&(e=b.createChildContext(f.row,null,function(a){a.$column=f.column;a.$cellContext=f.cellContext}),h=f.cellContext.parentElement);"footer"==d&&(e=
b.extend({$column:f.column,$footerContext:f.footerContext}),h=f.footerContext.parentElement);a.renderTemplate(c,e,null,h,"replaceNode")}})(d,c);return f}function m(b,c){return function(d){var f=b.createChildContext(d.row,null,function(a){a.$rowContext=d.rowContext});a.renderTemplate(c,f,null,d.rowContext.parentElement,"replaceNode")}}b.T=function(a,b){this.Init(a,b)};o_("ComponentBinding",b.T,b);b.a.ga(b.T,b.a,"oj.ComponentBinding");b.T.create=function(c,d){if(null==c)throw"Binding name is required!";
var f=new b.T(c,d),e=a.bindingHandlers,h,g=Array.isArray(c)?c:[c];for(h=0;h<g.length;h++)e[g[h]]=f;return f};o_("ComponentBinding.create",b.T.create,b);b.T.Qc=function(){return b.T.IF};o_("ComponentBinding.getDefaultInstance",b.T.Qc,b);b.T.prototype.Tc=function(a){var c=a["for"],c=null==c?"@global":c;b.F.option("level")>=b.F.Ym&&this.To[c]&&b.F.error("Managed Attributes for '%s' are redefined",c);this.To[c]=a};b.a.c("ComponentBinding.prototype.setupManagedAttributes",{Tc:b.T.prototype.Tc});b.T.St=
function(){b.T.ux.St()};o_("ComponentBinding.deliverChanges",b.T.St,b);b.T.prototype.Init=function(a,c){b.T.j.Init.call(this);"string"===typeof c&&(c={componentName:c});this.Oq=c||{};this.xH=Array.isArray(a)?a:[a];this.init=b.a.gm(this,this._init);this.update=b.a.gm(this,this.qO);this.To={}};b.T.vq="_ojNeedsJUIBInit";b.T.prototype._init=function(c,d,f,h,g){a.applyBindingsToDescendants(g,c);e(c).data(b.T.vq,!0);return{controlsDescendantBindings:!0}};b.T.prototype.qO=function(a,c,d,f,h){f=e(a);f.data(b.T.vq)&&
(f.data(b.T.vq,null),this.Bz(a,f,c,d,h))};b.T.prototype.Bz=function(f,e,g,p,m){var k=g(),l=null,y=!1,w=[],z=null,x=null,C=b.T.jJ(this.xH,f,m),t=0,A={},B=this.Oq.componentName;if(null==B){l="component";if(!C[l]&&(l="role",!C[l])){b.F.error("component attribute is required for the ojComponent binding");return}var M=k[l];if(null==M){b.F.error("non-null component attribute is required for the ojComponent binding");return}a.computed(function(){b.T.Er(C[l],l,A,m);if(0==t)B=a.utils.unwrapObservable(M);else{y=
!0;C=null;b.T.pO(e);if(x){z.UC();z=null;var c=this.Oq.beforeDestroy;c&&c(f,x,g,p,m);x("destroy");x=null;for(c=0;c<w.length;c++)w[c].UC();w=null}this.Bz(f,e,g,p,m)}return null},this,{disposeWhenNodeIsRemoved:f})}if(null!=B)if(x=e[B],"function"===typeof x){var x=x.bind(e),E=b.T.mB(this.To,C,B),I=b.T.Qc();this!==I&&(I=I.EJ(C,B),b.bc.xf(I,E),E=I);var G={},z=new h(x,f,b.T.ux),I={"^slider$":[{event:"slidechange",getter:d}],"^oj*":[{event:"ojoptionchange",getter:c}]},K=function(){var a=this.DM,c=C[a];c&&
b.T.Er(c,a,A,m);if(0===t){var d=b.T.op(k[a]);null!=E[a]?(c=E[a].QP,null!=c&&(a=c(a,d,f,x,g,p,m)||{},b.bc.xf(G,a))):G[a]=d}else if(!y)if(c=b.T.op(g()[a]),null!=E[a]){var e=E[a].update;if(null!=e)for(d in a=e(a,c,f,x,g,p,m)||{},a)a.hasOwnProperty(d)&&z.wC(d,a[d])}else z.wC(a,c);return null},H;for(H in k)k.hasOwnProperty(H)&&H!==l&&w.push(a.computed(K,{DM:H},{disposeWhenNodeIsRemoved:f}));b.T.VM(e,B,I,g,C,z,m);x(G);(H=this.Oq.afterCreate)&&H(f,x,g,p,m);G=null}else b.F.error("Component %s is not found",
B);t=1};b.T.jJ=function(b,c,d){var f={},e=null,e=a.bindingProvider.instance,h;h=null;var g,e=e.rP?e.rP(c,d):c.getAttribute("data-bind");if(!e)return f;c=a.jsonExpressionRewriting.parseObjectLiteral(e);d=/^(\s|\u00A0)+|(\s|\u00A0)+$/g;for(e=0;e<c.length;e+=1){g=c[e];var m=g.key.replace(d,"");if(0<=b.indexOf(m)){h=g.value;break}}if(!h)return f;c=a.jsonExpressionRewriting.parseObjectLiteral(h);for(b=0;b<c.length;b+=1)h=c[b],f[h.key.replace(d,"")]=h.value.replace(d,"");return f};b.T.Er=function(a,b,c,
d){var f=c[b];void 0===f&&("string"!==typeof a&&(a=a()),f=null,null!==a&&(f=new Function("$context","with($context){with($data||{}){return "+a+";}}")),c[b]=f);return f?f(d):null};b.T.prototype.EJ=function(a,c){return b.T.mB(this.To,a,c)};b.T.mB=function(a,b,c){function d(b){b=a[b];if(null!=b){e.push(b);b=b.use;var c;if(null!=b)for(b=Array.isArray(b)?b:[b],c=0;c<b.length;c++)d(b[c])}}var f={},e=[];d(c);c=a["@global"];var h;c&&e.push(c);if(0<e.length)for(h in b)if(b.hasOwnProperty(h))for(c=0;c<e.length;c++){var g=
e[c],m=g.attributes;if(null!=m&&0<=m.indexOf(h)){f[h]={QP:g.init,update:g.update};break}}return f};b.T.Hv=".ojWriteback";b.T.pO=function(a){a&&a.off(b.T.Hv)};b.T.VM=function(a,c,d,f,e,h,g){var m={},k;for(k in d)if(c.match(k)){c=d[k];for(d=0;d<c.length;d++)k=c[d],a.on(k.event+b.T.Hv,{JP:k.getter},function(a,c){a.stopPropagation();var d=a.data.JP(a,c);h.SQ();try{for(var k in d)b.T.CO(k,f()[k],d[k],e[k],g,m)}finally{h.DQ()}});break}};b.T.SJ=function(a){var b=["true","false","null","undefined"];if(null==
a||0<=b.indexOf(a))return null;b=a.match(/^(?:[$_a-z][$\w]*|(.+)(\.\s*[$_a-z][$\w]*|\[.+\]))$/i);return null===b?null:"function(v){"+(b[1]?"Object("+b[1]+")"+b[2]:a)+"\x3dv;}"};b.T.CO=function(c,d,f,e,h,g){null!=d&&a.isObservable(d)?a.isWriteableObservable(d)&&d(f):(c=b.T.Er(function(){return b.T.SJ(e)},c,g,h))&&c(f)};b.T.op=function(c){c=a.utils.unwrapObservable(c);(Array.isArray(c)||b.bc.isPlainObject(c))&&c.ojConvertToJS&&(c=a.toJS(c));return c};b.a.ga(f,b.a,"ComponentBinding.GlobalChangeQueue");
f.prototype.Init=function(){f.j.Init.call(this);this.Ph=[]};f.prototype.yQ=function(a){-1===this.Ph.indexOf(a)&&(this.Ph.push(a),this.$n||(this.$n=setTimeout(b.a.gm(this,this.by),1)))};f.prototype.zQ=function(a){a=this.Ph.indexOf(a);0<=a&&this.Ph.splice(a,1)};f.prototype.St=function(){this.$n&&clearTimeout(this.$n);this.by()};f.prototype.by=function(){var a;this.$n=null;try{for(a=0;a<this.Ph.length;a+=1)this.Ph[a]()}finally{this.Ph=[]}};b.a.ga(h,b.a,"ComponentBinding.ComponentChangeTracker");h.prototype.Init=
function(a,c,d){h.j.Init.call(this);this.Ca=a;this.RI=c;this.HA=d;this.mC=b.a.gm(this,this.nH);this.Zq={};this.Oj=0};h.prototype.wC=function(a,b){this.zL()||this.KI||(this.Zq[a]=b,this.HA.yQ(this.mC))};h.prototype.UC=function(){this.HA.zQ(this.mC);this.KI=!0};h.prototype.DQ=function(){b.f.assert(0<this.Oj,"ComponentChangeTracker._suspendCount underflow");this.Oj-=1};h.prototype.SQ=function(){this.Oj-=1};h.prototype.zL=function(){return 1<=this.Oj};h.prototype.nH=function(){try{null!=b.Components.iu(this.RI)&&
this.Ca("option",this.Zq)}finally{this.Zq={}}};b.T.ux=new f;b.T.IF=b.T.create(["ojComponent","jqueryUI"]);b.uu={};o_("koStringTemplateEngine",b.uu,b);b.uu.WP=function(){function b(a){this.Pj=a;this.text=function(a){if(!a)return c[this.Pj];c[this.Pj]=a};this.data=function(a,b){d[this.Pj]||(d[this.Pj]={});if(1===arguments.length)return d[this.Pj][a];d[this.Pj][a]=b}}var c={},d={},f=new a.nativeTemplateEngine;f.makeTemplateSource=function(c,d){if("string"==typeof c){d=d||document;var f=d.getElementById(c);
return f?new a.templateSources.domElement(f):new b(c)}if(c&&1==c.nodeType||8==c.nodeType)return new a.templateSources.anonymousTemplate(c)};a.templates=c;a.setTemplateEngine(f)};o_("koStringTemplateEngine.install",b.uu.WP,b);b.T.Qc().Tc({attributes:["header","cell"],init:function(a,b,c,d,f,e,h){"header"===a?(a=b.row,null!=a&&(c=a.template,null!=c&&(a.renderer=g(h,c))),a=b.column,null!=a&&(c=a.template,null!=c&&(a.renderer=g(h,c))),d({header:b})):"cell"===a&&(a=b.template,null!=a&&(b.renderer=k(h,
a)),d({cell:b}))},update:function(a,b,c,d,f,e,h){return"header"===a?(a=b.row,null!=a&&(c=a.template,null!=c&&(a.renderer=g(h,c))),a=b.column,null!=a&&(c=a.template,null!=c&&(a.renderer=g(h,c))),{header:b}):"cell"===a?(a=b.template,null!=a&&(b.renderer=k(h,a)),{cell:b}):null},"for":"ojDataGrid"});a.bindingHandlers.ojContextMenu={update:function(b,c){e(b).off(".ojContextMenu");var d=a.utils.unwrapObservable(c());"string"!==e.type(d)&&(d=b.getAttribute("contextmenu"))&&(d="#"+d);d&&(d=e(d).data("oj-ojMenu"));
if(d){var f=e(b);f.on("keydown.ojContextMenu contextmenu.ojContextMenu",function(a){return"contextmenu"===a.type||121==a.which&&a.shiftKey?(d.show(a,{launcher:f,focus:"menu"}),!1):!0})}}};b.T.Qc().Tc({attributes:["columns","columnsDefault","rowTemplate"],init:function(a,b,c,d,f,e,h){if("columns"==a||"columnsDefault"==a){var g;for(c=0;c<b.length;c++){var k=b[c];f=k.template;e=k.footerTemplate;g=k.headerTemplate;null!=f&&(k.renderer=l(h,"cell",f));null!=e&&(k.footerRenderer=l(h,"footer",e));null!=g&&
(k.headerRenderer=l(h,"header",g))}"columns"==a?d({columns:b}):d({columnsDefault:b})}else"rowTemplate"==a&&d({rowRenderer:m(h,b)})},update:function(a,b,c,d,f,e,h){if("columns"==a||"columnsDefault"==a){var g;for(c=0;c<b.length;c++){var k=b[c];f=k.template;e=k.footerTemplate;g=k.headerTemplate;null!=f&&(k.renderer=l(h,"cell",f));null!=e&&(k.footerRenderer=l(h,"footer",e));null!=g&&(k.headerRenderer=l(h,"header",g))}"columns"==a?d({columns:b}):d({columnsDefault:b})}else if("rowTemplate"==a)return{rowRenderer:m(h,
b)};return null},"for":"ojTable"})});
//# sourceMappingURL=oj-modular.map