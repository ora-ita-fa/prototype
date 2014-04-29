define(["ojs/ojcore","knockout","ojs/ojmodel"],function(b,e){b.Da=o_a();o_("KnockoutUtils",b.Da,b);b.Da.yD="oj._internalObj";b.Da.Ld="oj._underUpdate";b.Da.Nj="oj.collectionUpdating";b.Da.map=function(a,d,c){function f(c){return function(d){h[b.Da.Ld]||a.set(c,d)}}var h,g,k,l;if(a instanceof b.g){h=c?e.observableArray():[];b.Da.LB(h,a);for(g=0;g<a.zc();g+=1)h.push(b.Da.map(a.Dn(g,null,!0,!1),d));g=function(c){var d;try{if(!h[b.Da.Ld]){h[b.Da.Nj]=!0;for(d=0;d<c.length;d++){var e=c[d].index,f=b.Da.sa(c[d].value),
g=c[d].status;"added"===g?e>=a.length-1?a.add(f):a.add(f,{at:e}):"deleted"===g&&a.hi(f,e)}a.comparator&&(h[b.Da.Ld]=!0,h.sort(function(c,d){return b.g.Zp(c,d,a.comparator,a,this)}),h[b.Da.Ld]=!1)}}catch(k){throw k;}finally{h[b.Da.Nj]=!1}};c&&h.subscribe&&h.subscribe(g,null,"arrayChange");c=function(a,c,d){var e;try{!h[b.Da.Nj]&&c instanceof b.g&&(h[b.Da.Ld]=!0,e=d.index,h.splice(e,1))}catch(f){throw f;}finally{h[b.Da.Ld]=!1}};g=function(a,c,e){var f,g;try{if(!h[b.Da.Nj]&&c instanceof b.g&&(h[b.Da.Ld]=
!0,f=c.vL(a),void 0!==f&&-1<f))if(g=b.Da.map(a,d),e.fillIn){for(var k=Array.isArray(h)?h.length:h().length;k<f;k++)h.splice(k,0,b.Da.map(c.Dn(k,null,!0,!1),d));h.splice(f,1,g)}else h.splice(f,0,g)}catch(l){throw l;}finally{h[b.Da.Ld]=!1}};k=function(a){try{!h[b.Da.Nj]&&a instanceof b.g&&(h[b.Da.Ld]=!0,e.isObservable(h)?h.removeAll():h=[])}catch(c){throw c;}finally{h[b.Da.Ld]=!1}};l=function(c){try{!h[b.Da.Nj]&&c instanceof b.g&&(h[b.Da.Ld]=!0,h.sort(function(d,e){return b.g.Zp(d,e,a.comparator,c,
this)}))}catch(d){throw d;}finally{h[b.Da.Ld]=!1}};a.Kf(b.N.l.ADD,g,void 0,void 0,!0);a.Kf(b.N.l.REMOVE,c,void 0,void 0,!0);a.Kf(b.N.l.RESET,k,void 0,void 0,!0);a.Kf(b.N.l.SORT,l,void 0,void 0,!0)}else{if(void 0===a)return;h={};c=a.attributes;g=null;for(g in c)c.hasOwnProperty(g)&&(k=e.observable(a.get(g)),h[g]=k,l=f(g),l.PR=g,k.subscribe&&k.subscribe(l));c=function(a){var c,d;try{for(d in h[b.Da.Ld]=!0,c=a.xt(),c)if(c.hasOwnProperty(d))h[d](a.get(d))}catch(e){throw e;}finally{h[b.Da.Ld]=!1}};a.Kf(b.N.l.CHANGE,
c,void 0,void 0,!0);b.Da.LB(h,a);d&&d(h)}return h};o_("KnockoutUtils.map",b.Da.map,b);b.Da.Vc=function(a){var d=[],c,e;for(c=0;c<a.length;c+=1)e=b.Da.sa(a[c]),d.push(e);return d};b.Da.sa=function(a){return a instanceof b.i?a:a[b.Da.yD]};b.Da.LB=function(a,d){Object.defineProperty(a,b.Da.yD,{value:d,enumerable:!1})}});
//# sourceMappingURL=oj-modular.map