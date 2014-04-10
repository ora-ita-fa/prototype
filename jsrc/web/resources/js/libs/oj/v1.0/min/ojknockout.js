define(["ojs/ojcore","jquery","knockout"],function(a,e,d){function b(a,b){var c={};c.value=b.value;return c}function c(a,b){var c={},d=b.optionMetadata;d&&"shouldWrite"===d.writeback&&(c[b.option]=b.value);return c}function f(){this.h()}function h(a,b){this.h(a,b)}function g(a,b,c,f){var e={};(function(b,c){e.renderer=function(f){var e=null,h=null;"header"==c?(e=a.extend({$column:f.column,$headerContext:f.headerContext}),h=f.headerContext.parentElement):"cell"==c&&(e=a.createChildContext(f.row,null,
function(a){a.$column=f.column;a.$cellContext=f.cellContext}),h=f.cellContext.parentElement);d.renderTemplate(b,e,null,h,"replaceNode")}})(f,c);e.type=c;e.columnId=b;return e}function l(a,b){return function(c){d.renderTemplate(b,a,null,c.footerContext.parentElement,"replaceNode")}}function k(a,b){return function(c){var f=a.createChildContext(c.row,null,function(a){a.$rowContext=c.rowContext});d.renderTemplate(b,f,null,c.rowContext.parentElement,"replaceNode")}}function n(a,b){return function(c){var f,
e;f=c.parentElement;e=a.createChildContext(c.data,null,function(a){a.$key=c.key;a.$metadata=c.metadata;a.$headerContext=c});d.renderTemplate(b,e,null,f);return null}}function m(a,b){return function(c){var f,e;f=c.parentElement;e=a.createChildContext(c.data,null,function(a){a.$keys=c.keys;a.$metadata=c.metadata;a.$cellContext=c});d.renderTemplate(b,e,null,f);return null}}a.O=function(a,b){this.h(a,b)};o_("ComponentBinding",a.O,a);a.a.aa(a.O,a.a,"oj.ComponentBinding");a.O.create=function(b,c){if(null==
b)throw"Binding name is required!";var f=new a.O(b,c),e=d.bindingHandlers,h,m=Array.isArray(b)?b:[b];for(h=0;h<m.length;h++)e[m[h]]=f;return f};o_("ComponentBinding.create",a.O.create,a);a.O.Bc=function(){return a.O.BD};o_("ComponentBinding.getDefaultInstance",a.O.Bc,a);a.O.prototype.Ec=function(b){var c=b["for"],c=null==c?"@global":c;a.u.option("level")>=a.u.Vl&&this.On[c]&&a.u.error("Managed Attributes for '%s' are redefined",c);this.On[c]=b};a.a.b("ComponentBinding.prototype.setupManagedAttributes",
{Ec:a.O.prototype.Ec});a.O.ps=function(){a.O.Av.ps()};o_("ComponentBinding.deliverChanges",a.O.ps,a);a.O.prototype.h=function(b,c){a.O.j.h.call(this);"string"===typeof c&&(c={componentName:c});this.Ap=c||{};this.gF=Array.isArray(b)?b:[b];this.init=a.a.cl(this,this._init);this.update=a.a.cl(this,this.QL);this.On={}};a.O.cp="_ojNeedsJUIBInit";a.O.prototype._init=function(b,c,f,h,m){d.applyBindingsToDescendants(m,b);e(b).data(a.O.cp,!0);return{controlsDescendantBindings:!0}};a.O.prototype.QL=function(b,
c,d,f,h){f=e(b);f.data(a.O.cp)&&(f.data(a.O.cp,null),this.Vx(b,f,c,d,h))};a.O.prototype.Vx=function(f,e,m,g,k){var l=m(),n=null,A=!1,C=[],G=null,y=null,E=a.O.WG(this.gF,f,k),I=0,x={},w=this.Ap.componentName;if(null==w){n="component";if(!E[n]&&(n="role",!E[n])){a.u.error("component attribute is required for the ojComponent binding");return}var z=l[n];if(null==z){a.u.error("non-null component attribute is required for the ojComponent binding");return}d.computed(function(){a.O.lq(E[n],n,x,k);if(0==I)w=
d.utils.unwrapObservable(z);else{A=!0;E=null;a.O.PL(e);if(y){G.fB();G=null;var b=this.Ap.beforeDestroy;b&&b(f,y,m,g,k);y("destroy");y=null;for(b=0;b<C.length;b++)C[b].fB();C=null}this.Vx(f,e,m,g,k)}return null},this,{disposeWhenNodeIsRemoved:f})}if(null!=w)if(y=e[w],"function"===typeof y){var y=y.bind(e),F=a.O.Hz(this.On,E,w),B=a.O.Bc();this!==B&&(B=B.qH(E,w),a.ac.Jf(B,F),F=B);var K={},G=new h(y,a.O.Av),B={"^slider$":[{event:"slidechange",getter:b}],"^oj*":[{event:"ojoptionchange",getter:c}]},J=function(){var b=
this.lK,c=E[b];c&&a.O.lq(c,b,x,k);if(0===I){var d=a.O.ko(l[b]);null!=F[b]?(c=F[b].UM,null!=c&&(b=c(b,d,f,y,m,g,k)||{},a.ac.Jf(K,b))):K[b]=d}else if(!A)if(c=a.O.ko(m()[b]),null!=F[b]){var e=F[b].update;if(null!=e)for(d in b=e(b,c,f,y,m,g,k)||{},b)b.hasOwnProperty(d)&&G.OA(d,b[d])}else G.OA(b,c);return null},M;for(M in l)l.hasOwnProperty(M)&&M!==n&&C.push(d.computed(J,{lK:M},{disposeWhenNodeIsRemoved:f}));a.O.DK(e,w,B,m,E,G,k);y(K);(M=this.Ap.afterCreate)&&M(f,y,m,g,k);K=null}else a.u.error("Component %s is not found",
w);I=1};a.O.WG=function(a,b,c){var f={},e=null,e=d.bindingProvider.instance,h;h=null;var m,e=e.zM?e.zM(b,c):b.getAttribute("data-bind");if(!e)return f;b=d.jsonExpressionRewriting.parseObjectLiteral(e);c=/^(\s|\u00A0)+|(\s|\u00A0)+$/g;for(e=0;e<b.length;e+=1){m=b[e];var g=m.key.replace(c,"");if(0<=a.indexOf(g)){h=m.value;break}}if(!h)return f;b=d.jsonExpressionRewriting.parseObjectLiteral(h);for(a=0;a<b.length;a+=1)h=b[a],f[h.key.replace(c,"")]=h.value.replace(c,"");return f};a.O.lq=function(a,b,c,
d){var f=c[b];void 0===f&&("string"!==typeof a&&(a=a()),f=null,null!==a&&(f=new Function("$context","with($context){with($data||{}){return "+a+";}}")),c[b]=f);return f?f(d):null};a.O.prototype.qH=function(b,c){return a.O.Hz(this.On,b,c)};a.O.Hz=function(a,b,c){function d(b){b=a[b];if(null!=b){e.push(b);b=b.use;var c;if(null!=b)for(b=Array.isArray(b)?b:[b],c=0;c<b.length;c++)d(b[c])}}var f={},e=[];d(c);c=a["@global"];var h;c&&e.push(c);if(0<e.length)for(h in b)if(b.hasOwnProperty(h))for(c=0;c<e.length;c++){var m=
e[c],g=m.attributes;if(null!=g&&0<=g.indexOf(h)){f[h]={UM:m.init,update:m.update};break}}return f};a.O.au=".ojWriteback";a.O.PL=function(b){b&&b.off(a.O.au)};a.O.DK=function(b,c,d,f,e,h,m){var g={},k;for(k in d)if(c.match(k)){c=d[k];for(d=0;d<c.length;d++)k=c[d],b.on(k.event+a.O.au,{OM:k.getter},function(b,c){b.stopPropagation();var d=b.data.OM(b,c);h.MN();try{for(var k in d)a.O.aM(k,f()[k],d[k],e[k],m,g)}finally{h.xN()}});break}};a.O.EH=function(a){var b=["true","false","null","undefined"];if(null==
a||0<=b.indexOf(a))return null;b=a.match(/^(?:[$_a-z][$\w]*|(.+)(\.\s*[$_a-z][$\w]*|\[.+\]))$/i);return null===b?null:"function(v){"+(b[1]?"Object("+b[1]+")"+b[2]:a)+"\x3dv;}"};a.O.aM=function(b,c,f,e,h,m){null!=c&&d.isObservable(c)?d.isWriteableObservable(c)&&c(f):(b=a.O.lq(function(){return a.O.EH(e)},b,m,h))&&b(f)};a.O.ko=function(b){b=d.utils.unwrapObservable(b);(Array.isArray(b)||a.ac.isPlainObject(b))&&b.ojConvertToJS&&(b=d.toJS(b));return b};a.a.aa(f,a.a,"ComponentBinding.GlobalChangeQueue");
f.prototype.h=function(){f.j.h.call(this);this.Xg=[]};f.prototype.tN=function(b){-1===this.Xg.indexOf(b)&&(this.Xg.push(b),this.Wm||(this.Wm=setTimeout(a.a.cl(this,this.mw),1)))};f.prototype.uN=function(a){a=this.Xg.indexOf(a);0<=a&&this.Xg.splice(a,1)};f.prototype.ps=function(){this.Wm&&clearTimeout(this.Wm);this.mw()};f.prototype.mw=function(){var a;this.Wm=null;try{for(a=0;a<this.Xg.length;a+=1)this.Xg[a]()}finally{this.Xg=[]}};a.a.aa(h,a.a,"ComponentBinding.ComponentChangeTracker");h.prototype.h=
function(b,c){h.j.h.call(this);this.yb=b;this.Xy=c;this.GA=a.a.cl(this,this.XE);this.Lp={};this.Ui=0};h.prototype.OA=function(a,b){this.lJ()||this.zG||(this.Lp[a]=b,this.Xy.tN(this.GA))};h.prototype.fB=function(){this.Xy.uN(this.GA);this.zG=!0};h.prototype.xN=function(){a.f.assert(0<this.Ui,"ComponentChangeTracker._suspendCount underflow");this.Ui-=1};h.prototype.MN=function(){this.Ui-=1};h.prototype.lJ=function(){return 1<=this.Ui};h.prototype.XE=function(){try{this.yb("option",this.Lp)}finally{this.Lp=
{}}};a.O.Av=new f;a.O.BD=a.O.create(["ojComponent","jqueryUI"]);a.O.Bc().Ec({attributes:["columnTemplates","footerTemplate","rowTemplate"],init:function(a,b,c,d,f,e,h){var m;if("columnTemplates"==a){f=[];for(e=0;e<b.length;e++)m=b[e],a=m.columnId,c=m.template,m=m.type,null!=c&&(null!=a&&null!=m)&&(f[e]=g(h,a,m,c));0<f.length&&d({columnRenderers:f})}else"rowTemplate"==a?(c=b.template,d({rowRenderer:k(h,c)})):"footerTemplate"==a&&(c=b.template,d({footerRenderer:l(h,c)}))},update:function(a,b,c,d,f,
e,h){if("columnTemplates"==a){d=[];for(f=0;f<b.length;f++)e=b[f],a=e.columnId,c=e.template,e=e.type,null!=c&&(null!=a&&null!=e)&&(d[f]=g(h,a,e,c));if(0<d.length)return{columnRenderers:d}}else{if("rowTemplate"==a)return c=b.template,{rowRenderer:k(h,c)};if("footerTemplate"==a)return c=b.template,{footerRenderer:l(h,c)}}return null},"for":"ojTable"});a.Os={};o_("koStringTemplateEngine",a.Os,a);a.Os.YM=function(){function a(d){this.Wi=d;this.text=function(a){if(!a)return b[this.Wi];b[this.Wi]=a};this.data=
function(a,b){c[this.Wi]||(c[this.Wi]={});if(1===arguments.length)return c[this.Wi][a];c[this.Wi][a]=b}}var b={},c={},f=new d.nativeTemplateEngine;f.makeTemplateSource=function(b,c){if("string"==typeof b){c=c||document;var f=c.getElementById(b);return f?new d.templateSources.domElement(f):new a(b)}if(b&&1==b.nodeType||8==b.nodeType)return new d.templateSources.anonymousTemplate(b)};d.templates=b;d.setTemplateEngine(f)};o_("koStringTemplateEngine.install",a.Os.YM,a);a.O.Bc().Ec({attributes:["header",
"cell"],init:function(a,b,c,d,f,e,h){"header"===a?(a=b.row,null!=a&&(c=a.template,null!=c&&(a.renderer=n(h,c))),a=b.column,null!=a&&(c=a.template,null!=c&&(a.renderer=n(h,c))),d({header:b})):"cell"===a&&(a=b.template,null!=a&&(b.renderer=m(h,a)),d({cell:b}))},update:function(a,b,c,d,f,e,h){return"header"===a?(a=b.row,null!=a&&(c=a.template,null!=c&&(a.renderer=n(h,c))),a=b.column,null!=a&&(c=a.template,null!=c&&(a.renderer=n(h,c))),{header:b}):"cell"===a?(a=b.template,null!=a&&(b.renderer=m(h,a)),
{cell:b}):null},"for":"ojDataGrid"});d.bindingHandlers.ojContextMenu={update:function(a,b){e(a).off(".ojContextMenu");var c=d.utils.unwrapObservable(b());c&&(c=d.utils.unwrapObservable(c.menu));c||(c=a.getAttribute("contextmenu"));if(c&&(c=e("#"+c).data("oj-ojMenu"))){var f=e(a);f.on("keydown.ojContextMenu contextmenu.ojContextMenu",function(a){return"contextmenu"===a.type||121==a.which&&a.shiftKey?(c.show(a,{launcher:f,focus:"menu"}),!1):!0})}}}});
//# sourceMappingURL=oj-modular.map