define(["ojs/ojcore","jquery","ojs/ojcomponentcore"],function(b,e){(function(){var a=!1;e(document).mouseup(function(){a=!1});b.ta("oj.ojResizable",e.oj.baseComponent,{version:"1.0.0",widgetEventPrefix:"oj",options:{cancel:"input,textarea,button,select,option",distance:1,delay:0,alsoResize:!1,animate:!1,animateDuration:"slow",animateEasing:"swing",aspectRatio:!1,autoHide:!1,containment:!1,ghost:!1,grid:!1,handles:"e,s,se",helper:!1,resize:null,start:null,stop:null},GL:function(){var a=this;this.element.bind("mousedown."+
this.widgetName,function(b){return a.FL(b)}).bind("click."+this.widgetName,function(b){if(!0===e.data(b.target,a.widgetName+".preventClickEvent"))return e.removeData(b.target,a.widgetName+".preventClickEvent"),b.stopImmediatePropagation(),!1});this.AS=!1},EL:function(){this.element.unbind("."+this.widgetName);this.No&&this.document.unbind("mousemove."+this.widgetName,this.No).unbind("mouseup."+this.widgetName,this.Cs)},FL:function(b){if(!a){this.Rg&&this.Oo(b);this.Mo=b;var c=this,f=1===b.which,h=
"string"===typeof this.options.cancel&&b.target.nodeName?e(b.target).closest(this.options.cancel).length:!1;if(!f||h||!this.DL(b))return!0;this.xm=!this.options.delay;this.xm||(this.OR=setTimeout(function(){c.xm=!0},this.options.delay));if(this.Xz(b)&&this.xm&&(this.Rg=!1!==this.Zz(b),!this.Rg))return b.preventDefault(),!0;!0===e.data(b.target,this.widgetName+".preventClickEvent")&&e.removeData(b.target,this.widgetName+".preventClickEvent");this.No=function(a){return c.HL(a)};this.Cs=function(a){return c.Oo(a)};
this.document.bind("mousemove."+this.widgetName,this.No).bind("mouseup."+this.widgetName,this.Cs);b.preventDefault();return a=!0}},HL:function(a){if(e.ui.mS&&(!document.documentMode||9>document.documentMode)&&!a.button||!a.which)return this.Oo(a);if(this.Rg)return this.Yz(a),a.preventDefault();this.Xz(a)&&this.xm&&((this.Rg=!1!==this.Zz(this.Mo,a))?this.Yz(a):this.Oo(a));return!this.Rg},Oo:function(b){this.document.unbind("mousemove."+this.widgetName,this.No).unbind("mouseup."+this.widgetName,this.Cs);
this.Rg&&(this.Rg=!1,b.target===this.Mo.target&&e.data(b.target,this.widgetName+".preventClickEvent",!0),this.IL(b));return a=!1},Xz:function(a){return Math.max(Math.abs(this.Mo.pageX-a.pageX),Math.abs(this.Mo.pageY-a.pageY))>=this.options.distance},NR:o_c("xm"),Es:function(a){return parseInt(a,10)||0},rf:function(a){return!isNaN(parseInt(a,10))},zo:function(a,b){if("hidden"===e(a).css("overflow"))return!1;var f=b&&"left"===b?"scrollLeft":"scrollTop",h=!1;if(0<a[f])return!0;a[f]=1;h=0<a[f];a[f]=0;
return h},_create:function(){var a,b,f,h,g,k=this,l=this.options;this.element.addClass("oj-resizable");e.extend(this,{Bq:!!l.aspectRatio,aspectRatio:l.aspectRatio,Ac:this.element,gi:[],Lc:l.helper||l.ghost||l.animate?l.helper||"oj-resizable-helper":null});this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i)&&(this.element.wrap(e("\x3cdiv class\x3d'ui-wrapper' style\x3d'overflow: hidden;'\x3e\x3c/div\x3e").css({position:this.element.css("position"),width:this.element.outerWidth(),
height:this.element.outerHeight(),top:this.element.css("top"),left:this.element.css("left")})),this.element=this.element.parent().data("oj-resizable",this.element.resizable("instance")),this.LC=!0,this.element.css({marginLeft:this.Ac.css("marginLeft"),marginTop:this.Ac.css("marginTop"),marginRight:this.Ac.css("marginRight"),marginBottom:this.Ac.css("marginBottom")}),this.Ac.css({marginLeft:0,marginTop:0,marginRight:0,marginBottom:0}),this.YP=this.Ac.css("resize"),this.Ac.css("resize","none"),this.gi.push(this.Ac.css({position:"static",
zoom:1,display:"block"})),this.Ac.css({margin:this.Ac.css("margin")}),this.Uo());this.handles=l.handles||(e(".oj-resizable-handle",this.element).length?{LD:".oj-resizable-n",KC:".oj-resizable-e",$D:".oj-resizable-s",lc:".oj-resizable-w",zS:".oj-resizable-se",DS:".oj-resizable-sw",sS:".oj-resizable-ne",tS:".oj-resizable-nw"}:"e,s,se");if(this.handles.constructor===String)for("all"===this.handles&&(this.handles="n,e,s,w,se,sw,ne,nw"),a=this.handles.split(","),this.handles={},b=0;b<a.length;b++)f=e.trim(a[b]),
g="oj-resizable-"+f,h=e("\x3cdiv class\x3d'oj-resizable-handle "+g+"'\x3e\x3c/div\x3e"),this.handles[f]=".oj-resizable-"+f,this.element.append(h);this.NM=function(a){var b,c,d;a=a||this.element;for(b in this.handles)this.handles[b].constructor===String&&(this.handles[b]=this.element.children(this.handles[b]).first().show()),this.LC&&this.Ac[0].nodeName.match(/textarea|input|select|button/i)&&(c=e(this.handles[b],this.element),d=/sw|ne|nw|se|n|s/.test(b)?c.outerHeight():c.outerWidth(),c=["padding",
/ne|nw|n/.test(b)?"Top":/se|sw|s/.test(b)?"Bottom":/^e$/.test(b)?"Right":"Left"].join(""),a.css(c,d),this.Uo()),e(this.handles[b])};this.NM(this.element);this.xo=e(".oj-resizable-handle",this.element);this.xo.mouseover(function(){k.wu||(this.className&&(h=this.className.match(/oj-resizable-(se|sw|ne|nw|n|e|s|w)/i)),k.axis=h&&h[1]?h[1]:"se")});l.autoHide&&(this.xo.hide(),e(this.element).addClass("oj-resizable-autohide").mouseenter(function(){l.disabled||(e(this).removeClass("oj-resizable-autohide"),
k.xo.show())}).mouseleave(function(){l.disabled||k.wu||(e(this).addClass("oj-resizable-autohide"),k.xo.hide())}));this.GL()},_destroy:function(){function a(b){e(b).removeClass("oj-resizable oj-resizable-disabled oj-resizable-resizing").removeData("resizable").removeData("oj-resizable").unbind(".resizable").find(".oj-resizable-handle").remove()}this.EL();var b;this.LC&&(a(this.element),b=this.element,this.Ac.css({position:b.css("position"),width:b.outerWidth(),height:b.outerHeight(),top:b.css("top"),
left:b.css("left")}).insertAfter(b),b.remove());this.Ac.css("resize",this.YP);a(this.Ac);return this},DL:function(a){var b,f,h=!1;for(b in this.handles)if(f=e(this.handles[b])[0],f===a.target||e.contains(f,a.target))h=!0;return!this.options.disabled&&h},Zz:function(a){var b,f,h;h=this.options;b=this.element.position();var g=this.element;this.wu=!0;/absolute/.test(g.css("position"))?g.css({position:"absolute",top:g.css("top"),left:g.css("left")}):g.is(".ui-draggable")&&g.css({position:"absolute",top:b.top,
left:b.left});this.OM();b=this.Es(this.helper.css("left"));f=this.Es(this.helper.css("top"));h.containment&&(b+=e(h.containment).scrollLeft()||0,f+=e(h.containment).scrollTop()||0);this.offset=this.helper.offset();this.position={left:b,top:f};this.size=this.Lc?{width:this.helper.width(),height:this.helper.height()}:{width:g.width(),height:g.height()};this.ee=this.Lc?{width:g.outerWidth(),height:g.outerHeight()}:{width:g.width(),height:g.height()};this.wd={left:b,top:f};this.rh={width:g.outerWidth()-
g.width(),height:g.outerHeight()-g.height()};this.XP={left:a.pageX,top:a.pageY};this.aspectRatio="number"===typeof h.aspectRatio?h.aspectRatio:this.ee.width/this.ee.height||1;h=e(".oj-resizable-"+this.axis).css("cursor");e("body").css("cursor","auto"===h?this.axis+"-resize":h);g.addClass("oj-resizable-resizing");this.To("start",a);return!0},Yz:function(a){var b,f=this.helper,h={},g=this.XP;b=a.pageX-g.left||0;var g=a.pageY-g.top||0,k=this.Sf[this.axis];this.bk={top:this.position.top,left:this.position.left};
this.ck={width:this.size.width,height:this.size.height};if(!k)return!1;b=k.apply(this,[a,b,g]);this.cO(a.shiftKey);if(this.Bq||a.shiftKey)b=this.aO(b,a);b=this.VM(b,a);this.aC(b);this.To("resize",a);this.position.top!==this.bk.top&&(h.top=this.position.top+"px");this.position.left!==this.bk.left&&(h.left=this.position.left+"px");this.size.width!==this.ck.width&&(h.width=this.size.width+"px");this.size.height!==this.ck.height&&(h.height=this.size.height+"px");f.css(h);!this.Lc&&this.gi.length&&this.Uo();
e.isEmptyObject(h)||this._trigger("resize",a,this.ui());return!1},IL:function(a){this.wu=!1;var b,f,h,g=this.options;this.Lc&&(b=this.gi,b=(f=b.length&&/textarea/i.test(b[0].nodeName))&&this.zo(b[0],"left")?0:this.rh.height,f=f?0:this.rh.width,f={width:this.helper.width()-f,height:this.helper.height()-b},b=parseInt(this.element.css("left"),10)+(this.position.left-this.wd.left)||null,h=parseInt(this.element.css("top"),10)+(this.position.top-this.wd.top)||null,g.animate||this.element.css(e.extend(f,
{top:h,left:b})),this.helper.height(this.size.height),this.helper.width(this.size.width),this.Lc&&!g.animate&&this.Uo());e("body").css("cursor","auto");this.element.removeClass("oj-resizable-resizing");this.To("stop",a);this.Lc&&this.helper.remove();return!1},cO:function(a){var b,e,h,g;g={minWidth:0,maxWidth:Infinity,minHeight:0,maxHeight:Infinity};if(this.Bq||a)a=g.minHeight*this.aspectRatio,e=g.minWidth/this.aspectRatio,b=g.maxHeight*this.aspectRatio,h=g.maxWidth/this.aspectRatio,a>g.minWidth&&
(g.minWidth=a),e>g.minHeight&&(g.minHeight=e),b<g.maxWidth&&(g.maxWidth=b),h<g.maxHeight&&(g.maxHeight=h);this.eO=g},aC:function(a){this.offset=this.helper.offset();this.rf(a.left)&&(this.position.left=a.left);this.rf(a.top)&&(this.position.top=a.top);this.rf(a.height)&&(this.size.height=a.height);this.rf(a.width)&&(this.size.width=a.width)},aO:function(a){var b=this.position,e=this.size,h=this.axis;this.rf(a.height)?a.width=a.height*this.aspectRatio:this.rf(a.width)&&(a.height=a.width/this.aspectRatio);
"sw"===h&&(a.left=b.left+(e.width-a.width),a.top=null);"nw"===h&&(a.top=b.top+(e.height-a.height),a.left=b.left+(e.width-a.width));return a},VM:function(a){var b=this.eO,e=this.axis,h=this.rf(a.width)&&b.maxWidth&&b.maxWidth<a.width,g=this.rf(a.height)&&b.maxHeight&&b.maxHeight<a.height,k=this.rf(a.width)&&b.minWidth&&b.minWidth>a.width,l=this.rf(a.height)&&b.minHeight&&b.minHeight>a.height,m=this.wd.left+this.ee.width,n=this.position.top+this.size.height,q=/sw|nw|w/.test(e),e=/nw|ne|n/.test(e);k&&
(a.width=b.minWidth);l&&(a.height=b.minHeight);h&&(a.width=b.maxWidth);g&&(a.height=b.maxHeight);k&&q&&(a.left=m-b.minWidth);h&&q&&(a.left=m-b.maxWidth);l&&e&&(a.top=n-b.minHeight);g&&e&&(a.top=n-b.maxHeight);a.width||a.height||a.left||!a.top?a.width||(a.height||a.top||!a.left)||(a.left=null):a.top=null;return a},Uo:function(){if(this.gi.length){var a,b,e,h,g,k=this.helper||this.element;for(a=0;a<this.gi.length;a++){g=this.gi[a];if(!this.Kj)for(this.Kj=[],e=[g.css("borderTopWidth"),g.css("borderRightWidth"),
g.css("borderBottomWidth"),g.css("borderLeftWidth")],h=[g.css("paddingTop"),g.css("paddingRight"),g.css("paddingBottom"),g.css("paddingLeft")],b=0;b<e.length;b++)this.Kj[b]=(parseInt(e[b],10)||0)+(parseInt(h[b],10)||0);g.css({height:k.height()-this.Kj[0]-this.Kj[2]||0,width:k.width()-this.Kj[1]-this.Kj[3]||0})}}},OM:function(){this.MC=this.element.offset();this.Lc?(this.helper=this.helper||e("\x3cdiv style\x3d'overflow:hidden;'\x3e\x3c/div\x3e"),this.helper.addClass(this.Lc).css({width:this.element.outerWidth()-
1,height:this.element.outerHeight()-1,position:"absolute",left:this.MC.left+"px",top:this.MC.top+"px"}),this.helper.appendTo("body").ZR()):this.helper=this.element},Sf:{e:function(a,b){return{width:this.ee.width+b}},w:function(a,b){return{left:this.wd.left+b,width:this.ee.width-b}},n:function(a,b,e){return{top:this.wd.top+e,height:this.ee.height-e}},s:function(a,b,e){return{height:this.ee.height+e}},se:function(a,b,f){return e.extend(this.Sf.$D.apply(this,arguments),this.Sf.KC.apply(this,[a,b,f]))},
sw:function(a,b,f){return e.extend(this.Sf.$D.apply(this,arguments),this.Sf.lc.apply(this,[a,b,f]))},ne:function(a,b,f){return e.extend(this.Sf.LD.apply(this,arguments),this.Sf.KC.apply(this,[a,b,f]))},nw:function(a,b,f){return e.extend(this.Sf.LD.apply(this,arguments),this.Sf.lc.apply(this,[a,b,f]))}},To:function(a,b){e.ui.plugin.call(this,a,[b,this.ui()]);"resize"!==a&&this._trigger(a,b,this.ui())},plugins:{},ui:function(){return{Ac:this.Ac,element:this.element,helper:this.helper,position:this.position,
size:this.size,ee:this.ee,wd:this.wd,ck:this.ck,bk:this.bk}}});e.ui.plugin.add("resizable","animate",{stop:function(a){var b=e(this).data("oj-resizable"),f=b.options,h=b.gi,g=h.length&&/textarea/i.test(h[0].nodeName),k=g&&b.zo(h[0],"left")?0:b.rh.height,g={width:b.size.width-(g?0:b.rh.width),height:b.size.height-k},k=parseInt(b.element.css("left"),10)+(b.position.left-b.wd.left)||null,l=parseInt(b.element.css("top"),10)+(b.position.top-b.wd.top)||null;b.element.animate(e.extend(g,l&&k?{top:l,left:k}:
{}),{duration:f.animateDuration,bS:f.animateEasing,step:function(){var f={width:parseInt(b.element.css("width"),10),height:parseInt(b.element.css("height"),10),top:parseInt(b.element.css("top"),10),left:parseInt(b.element.css("left"),10)};h&&h.length&&e(h[0]).css({width:f.width,height:f.height});b.aC(f);b.To("resize",a)}})}});e.ui.plugin.add("resizable","containment",{start:function(){var a,b,f,h,g,k=e(this).data("oj-resizable"),l=k.element;f=k.options.containment;if(l=f instanceof e?f.get(0):/parent/.test(f)?
l.parent().get(0):f)k.lp=e(l),/document/.test(f)||f===document?(k.mp={left:0,top:0},k.yC={left:0,top:0},k.nh={element:e(document),left:0,top:0,width:e(document).width(),height:e(document).height()||document.body.parentNode.scrollHeight}):(a=e(l),b=[],e(["Top","Right","Left","Bottom"]).each(function(e,f){b[e]=k.Es(a.css("padding"+f))}),k.mp=a.offset(),k.yC=a.position(),k.zC={height:a.innerHeight()-b[3],width:a.innerWidth()-b[1]},f=k.mp,h=k.zC.height,g=k.zC.width,g=k.zo(l,"left")?l.scrollWidth:g,h=
k.zo(l)?l.scrollHeight:h,k.nh={element:l,left:f.left,top:f.top,width:g,height:h})},resize:function(a,b){var f,h,g,k,l=e(this).data("oj-resizable");f=l.options;h=l.mp;k=l.position;var m=l.Bq||a.shiftKey;g={top:0,left:0};var n=l.lp,q=!0;n[0]!==document&&/static/.test(n.css("position"))&&(g=h);k.left<(l.Lc?h.left:0)&&(l.size.width+=l.Lc?l.position.left-h.left:l.position.left-g.left,m&&(l.size.height=l.size.width/l.aspectRatio,q=!1),l.position.left=f.helper?h.left:0);k.top<(l.Lc?h.top:0)&&(l.size.height+=
l.Lc?l.position.top-h.top:l.position.top,m&&(l.size.width=l.size.height*l.aspectRatio,q=!1),l.position.top=l.Lc?h.top:0);l.offset.left=l.nh.left+l.position.left;l.offset.top=l.nh.top+l.position.top;f=Math.abs((l.Lc?l.offset.left-g.left:l.offset.left-h.left)+l.rh.width);h=Math.abs((l.Lc?l.offset.top-g.top:l.offset.top-h.top)+l.rh.height);g=l.lp.get(0)===l.element.parent().get(0);k=/relative|absolute/.test(l.lp.css("position"));g&&k&&(f-=Math.abs(l.nh.left));f+l.size.width>=l.nh.width&&(l.size.width=
l.nh.width-f,m&&(l.size.height=l.size.width/l.aspectRatio,q=!1));h+l.size.height>=l.nh.height&&(l.size.height=l.nh.height-h,m&&(l.size.width=l.size.height*l.aspectRatio,q=!1));q||(l.position.left=b.bk.left,l.position.top=b.bk.top,l.size.width=b.ck.width,l.size.height=b.ck.height)},stop:function(){var a=e(this).data("oj-resizable"),b=a.options,f=a.mp,h=a.yC,g=a.lp,k=e(a.helper),l=k.offset(),m=k.outerWidth()-a.rh.width,k=k.outerHeight()-a.rh.height;a.Lc&&(!b.animate&&/relative/.test(g.css("position")))&&
e(this).css({left:l.left-h.left-f.left,width:m,height:k});a.Lc&&(!b.animate&&/static/.test(g.css("position")))&&e(this).css({left:l.left-h.left-f.left,width:m,height:k})}});e.ui.plugin.add("resizable","alsoResize",{start:function(){function a(b){e(b).each(function(){var a=e(this);a.data("oj-resizable-alsoresize",{width:parseInt(a.width(),10),height:parseInt(a.height(),10),left:parseInt(a.css("left"),10),top:parseInt(a.css("top"),10)})})}var b=e(this).data("oj-resizable").options;"object"!==typeof b.alsoResize||
b.alsoResize.parentNode?a(b.alsoResize):b.alsoResize.length?(b.alsoResize=b.alsoResize[0],a(b.alsoResize)):e.each(b.alsoResize,function(b){a(b)})},resize:function(a,b){function f(a,d){e(a).each(function(){var a=e(this),f=e(this).data("oj-resizable-alsoresize"),g={};e.each(d&&d.length?d:a.parents(b.Ac[0]).length?["width","height"]:["width","height","top","left"],function(a,b){var c=(f[b]||0)+(m[b]||0);c&&0<=c&&(g[b]=c||null)});a.css(g)})}var h=e(this).data("oj-resizable"),g=h.options,k=h.ee,l=h.wd,
m={height:h.size.height-k.height||0,width:h.size.width-k.width||0,top:h.position.top-l.top||0,left:h.position.left-l.left||0};"object"!==typeof g.alsoResize||g.alsoResize.nodeType?f(g.alsoResize,null):e.each(g.alsoResize,function(a,b){f(a,b)})},stop:function(){e(this).removeData("resizable-alsoresize")}});e.ui.plugin.add("resizable","ghost",{start:function(){var a=e(this).data("oj-resizable"),b=a.options,f=a.size;a.ghost=a.Ac.clone();a.ghost.css({opacity:0.25,display:"block",position:"relative",height:f.height,
width:f.width,margin:0,left:0,top:0}).addClass("oj-resizable-ghost").addClass("string"===typeof b.ghost?b.ghost:"");a.ghost.appendTo(a.helper)},resize:function(){var a=e(this).data("oj-resizable");a.ghost&&a.ghost.css({position:"relative",height:a.size.height,width:a.size.width})},stop:function(){var a=e(this).data("oj-resizable");a.ghost&&a.helper&&a.helper.get(0).removeChild(a.ghost.get(0))}});e.ui.plugin.add("resizable","grid",{resize:function(){var a=e(this).data("oj-resizable"),b=a.options,f=
a.size,h=a.ee,g=a.wd,k=a.axis,l="number"===typeof b.grid?[b.grid,b.grid]:b.grid,m=l[0]||1,n=l[1]||1,q=Math.round((f.width-h.width)/m)*m,f=Math.round((f.height-h.height)/n)*n,r=h.width+q,p=h.height+f,s=b.maxWidth&&b.maxWidth<r,v=b.maxHeight&&b.maxHeight<p,u=b.minWidth&&b.minWidth>r,y=b.minHeight&&b.minHeight>p;b.grid=l;u&&(r+=m);y&&(p+=n);s&&(r-=m);v&&(p-=n);/^(se|s|e)$/.test(k)?(a.size.width=r,a.size.height=p):/^(ne)$/.test(k)?(a.size.width=r,a.size.height=p,a.position.top=g.top-f):/^(sw)$/.test(k)?
(a.size.width=r,a.size.height=p,a.position.left=g.left-q):(0<p-n?(a.size.height=p,a.position.top=g.top-f):(a.size.height=n,a.position.top=g.top+h.height-n),0<r-m?(a.size.width=r,a.position.left=g.left-q):(a.size.width=m,a.position.left=g.left+h.width-m))}})})();(function(){var a={buttons:!0,height:!0,width:!0},d={};b.ta("oj.ojDialog",e.oj.baseComponent,{version:"1.0.0",widgetEventPrefix:"oj",options:{cancelBehavior:"icon",dragAffordance:"title-bar",height:"auto",initialVisibility:"show",modality:"modal",
position:{my:"center",at:"center",of:window,collision:"fit",IS:function(a){var b=e(this).css(a).offset().top;0>b&&e(this).css("top",a.top-b)}},resizeBehavior:"resizable",role:"dialog",title:null,width:"300",beforeClose:null,beforeOpen:null,close:null,focus:null,open:null,resize:null,resizeStart:null,resizeStop:null},_create:function(){this.WP={display:this.element[0].style.display,width:this.element[0].style.width,minHeight:this.element[0].style.minHeight,maxHeight:this.element[0].style.maxHeight,
height:this.element[0].style.height};this.wd={parent:this.element.parent(),index:this.element.parent().children().index(this.element)};this.qu=this.element.attr("title");this.options.title=this.options.title||this.qu;this.dI();this.element.show().removeAttr("title").addClass("oj-dialog-content oj-dialog-default-content").appendTo(this.wa);this.Tp=!1;var a=this.element.find(".oj-dialog");a.length?a.parents(".oj-dialog-header").length&&(this.Tp=!0):this.element.find(".oj-dialog-header").length&&(this.Tp=
!0);this.Tp&&(a=this.element.find(".oj-dialog-header"),a.prependTo(this.wa),"icon"===this.options.cancelBehavior&&this.Dx(a));this.Tp||this.cI();"title-bar"===this.options.dragAffordance&&e.fn.draggable&&this.Pz();"resizable"===this.options.resizeBehavior&&e.fn.resizable&&this.Rz();this.ll=!1;this._super()},_init:function(){"show"===this.options.initialVisibility&&this.open()},Fw:function(){return this.document.find("body").eq(0)},_destroy:function(){var a,b=this.wd;this.Tx();this.element.removeUniqueId().removeClass("oj-dialog-content").css(this.WP).detach();
this.wa.stop(!0,!0).remove();this.qu&&this.element.attr("title",this.qu);a=b.parent.children().eq(b.index);a.length&&a[0]!==this.element[0]?a.before(this.element):b.parent.append(this.element)},widget:o_c("wa"),disable:e.noop,enable:e.noop,close:function(a){var b=this;this.ll&&!1!==this._trigger("beforeClose",a)&&(this.ll=!1,this.Tx(),this.opener.filter(":focusable").focus().length||e(this.document[0].activeElement).blur(),this._hide(this.wa,null,function(){b._trigger("close",a)}),e("#"+this.kA).replaceWith(e("#"+
this.rt)))},isOpen:o_c("ll"),rS:function(){this.Qo()},Qo:function(a,b){if(null===this.options.appendTo){var d=!1,g=parseInt(this.wa.css("zIndex"),10);e(".oj-dialog").each(function(){if(e(this)!=this.wa){d=!0;var a=parseInt(e(this).css("zIndex"),10);g>a&&(g=a)}});var k=!1;d&&e(".oj-dialog").each(function(){e(this)!=this.wa&&(e(this).css({position:"absolute",zIndex:g}),k=!0)});d&&this.wa.css({position:"absolute",zIndex:g+1});return k}var l=!!this.wa.nextAll(":visible").insertBefore(this.wa).length;
l&&!b&&this._trigger("focus",a);return l},open:function(a){if(!1!==this._trigger("beforeOpen",a)){var b=this;this.ll?this.Qo()&&this.Tk():(this.ll=!0,this.opener=e(this.document[0].activeElement),this.HB(),this.DM(),this.RH(),this.Js(),this.Qo(null,!0),this._show(this.wa,null,function(){b.Tk();b._trigger("focus")}),this._trigger("open"))}},Tk:function(){var a=this.element.find("[autofocus]");a.length||(a=this.element.find(":tabbable"));a.length||this.CQ&&(a=this.CQ.find(":tabbable"));a.length||this.Ku&&
(a=this.Ku.filter(":tabbable"));a.length||(a=this.wa);a.eq(0).focus()},LR:function(a){function b(){var a=this.document[0].activeElement;this.wa[0]===a||e.contains(this.wa[0],a)||this.Tk()}a.preventDefault();b.call(this);this._delay(b)},dI:function(){this.element.uniqueId();this.ey=this.element.attr("id");this.rt="ojDialogWrapper-"+this.ey;this.wa=e("\x3cdiv\x3e").addClass("oj-dialog oj-helper-reset-inheritable oj-component oj-dialog-front ").hide().attr({tabIndex:-1,role:this.options.role,id:this.rt});
this.fr=this.element.css("min-width");this.wa.css("min-width",this.fr);this.jI=this.element.css("max-width");this.wa.css("max-width",this.jI);this.Sn=this.element.css("min-height");this.wa.css("min-height",this.Sn);this.er=this.element.css("max-height");this.wa.css("max-height",this.er);this.wa.insertBefore(this.element);this._on(this.wa,{keydown:function(a){if("none"!=this.options.cancelBehavior&&!a.isDefaultPrevented()&&a.keyCode&&a.keyCode===e.ui.keyCode.ESCAPE)a.preventDefault(),this.close(a);
else if(a.keyCode===e.ui.keyCode.TAB){var b=this.wa.find(":tabbable"),d=b.filter(":first"),b=b.filter(":last");a.target!==b[0]&&a.target!==this.wa[0]||a.shiftKey?a.target!==d[0]&&a.target!==this.wa[0]||!a.shiftKey||(b.focus(1),a.preventDefault()):(d.focus(1),a.preventDefault())}},mousedown:function(a){this.Qo(a)&&this.Tk()}});this.element.find("[aria-describedby]").length||this.wa.attr({"aria-describedby":this.element.uniqueId().attr("id")})},Dx:function(a){this.Ku=e("\x3cbutton\x3e\x3c/button\x3e").ojButton({display:"icons",
icons:{start:"oj-component-icon oj-dialog-close-icon"},text:!1}).addClass("oj-dialog-header-close oj-button-no-chrome").appendTo(a);this._on(this.Ku,{click:function(a){a.preventDefault();this.close(a)}})},cI:function(){var a;this.Sp=e("\x3cdiv\x3e").addClass("oj-dialog-header oj-helper-clearfix").prependTo(this.wa);this._on(this.Sp,{mousedown:function(a){e(a.target).closest(".oj-dialog-close-icon")||this.wa.focus()}});"icon"===this.options.cancelBehavior&&this.Dx(this.Sp);a=e("\x3cspan\x3e").uniqueId().addClass("oj-dialog-title").prependTo(this.Sp);
this.TB(a);this.wa.attr({"aria-labelledby":a.attr("id")})},TB:function(a){this.options.title||a.html("\x26#160;");a.text(this.options.title)},Pz:function(){function a(b){return{position:b.position,offset:b.offset}}var b=this,d=this.options;this.wa.draggable({cancel:".oj-dialog-content, .oj-dialog-header-close",handle:".oj-dialog-header",containment:"document",start:function(d,h){e(this).addClass("oj-dialog-dragging");b.Qw();b._trigger("dragStart",d,a(h))},$R:function(d,e){b._trigger("drag",d,a(e))},
stop:function(g,k){d.position=[k.position.left-b.document.scrollLeft(),k.position.top-b.document.scrollTop()];e(this).removeClass("oj-dialog-dragging");b.YB();b._trigger("dragStop",g,a(k))}})},Rz:function(){function a(b){return{wd:b.wd,ee:b.ee,position:b.position,size:b.size}}var b=this,d=this.options,g=this.wa.css("position");this.El=this.wa.ojResizable.bind(this.wa);this.El({cancel:".oj-dialog-content",containment:"document",alsoResize:this.element,handles:"n,e,s,w,se,sw,ne,nw",start:function(d,
g){e(this).addClass("oj-dialog-resizing");b.Qw();b._trigger("ojstart",d,a(g))},resize:function(d,e){b._trigger("ojresize",d,a(e))},stop:function(g,l){d.height=e(this).height();d.width=e(this).width();e(this).removeClass("oj-dialog-resizing");b.YB();b._trigger("ojstop",g,a(l))}}).css("position",g)},AL:function(){var a=this.options;return"auto"===a.height?this.Sn:Math.min(this.Sn,a.height)},Js:function(){var a=this.wa.is(":visible");a||this.wa.show();this.wa.position(this.options.position);a||this.wa.hide()},
_setOptions:function(b){var f=this,h=!1,g={};e.each(b,function(b,c){f._setOption(b,c);b in a&&(h=!0);b in d&&(g[b]=c)});h&&(this.HB(),this.Js());this.wa.is(":data(oj-resizable)")&&this.El("option",g)},_setOption:function(a,b){var d,e=this.wa;"disabled"!==a&&(this._super(a,b),"draggable"===a&&((d=e.is(":data(oj-draggable)"))&&!b&&e.draggable("destroy"),!d&&b&&this.Pz()),"position"===a&&this.Js(),"resizable"===a&&((d=e.is(":data(oj-resizable)"))&&!b&&e.El("destroy"),d&&"string"===typeof b&&e.El("option",
"handles",b),d||!1===b||this.Rz()),"title"===a&&this.TB(this.Sp.find(".oj-dialog-title")))},HB:function(){var a,b,d,e=this.options;this.element.show().css({width:"auto",minHeight:0,maxHeight:"none",height:0});this.fr>e.width&&(e.width=this.fr);a=this.wa.css({height:"auto",width:e.width}).outerHeight();b=Math.max(0,this.Sn-a);d="number"===typeof this.er?Math.max(0,this.er-a):"none";"auto"===e.height?this.element.css({minHeight:b,maxHeight:d,height:"auto"}):this.element.height(Math.max(0,e.height-a));
this.wa.is(":data(oj-resizable)")&&this.wa.El("option","minHeight",this.AL())},Qw:function(){this.Zt=this.document.find("iframe").map(function(){var a=e(this),b=a.offset();return e("\x3cdiv\x3e").css({position:"absolute",width:a.outerWidth(),height:a.outerHeight()}).appendTo(a.parent()).offset(b)[0]})},YB:function(){this.Zt&&(this.Zt.remove(),delete this.Zt)},VG:function(a){return e(a.target).closest(".oj-dialog").length?!0:!!e(a.target).closest(".oj-datepicker").length},DM:function(){this.kA="ojDialogPlaceHolder-"+
this.ey;this.YL=e("\x3cdiv\x3e").hide().attr({id:this.kA});this.YL.insertBefore(e("#"+this.rt));this.wa.appendTo(this.Fw())},RH:function(){if("modeless"!==this.options.modality){var a=this,b=this.widgetFullName;e.ui.dialog.overlayInstances||this._delay(function(){e.ui.dialog.overlayInstances&&this.document.bind("focusin.dialog",function(d){a.VG(d)||(d.preventDefault(),e(".oj-dialog:visible:last .oj-dialog-content").data(b).Tk())})});this.Am=e("\x3cdiv\x3e").addClass("oj-component-overlay oj-dialog-front");
this.Am.appendTo(this.Fw());this._on(this.Am,{mousedown:"_keepFocus"});e.ui.dialog.overlayInstances++}},Tx:function(){"modeless"!==this.options.modality&&this.Am&&(e.ui.dialog.overlayInstances--,e.ui.dialog.overlayInstances||this.document.unbind("focusin.dialog"),this.Am.remove(),this.Am=null)},getNodeBySubId:function(a){if(null==a)return this.element?this.element[0]:null;a=a.subId;switch(a){case "oj-dialog":case "oj-dialog-header":case "oj-dialog-body":case "oj-dialog-footer":case "oj-dialog-content":case "oj-dialog-header-close":case "oj-resizable-n":case "oj-resizable-e":case "oj-resizable-s":case "oj-resizable-w":case "oj-resizable-se":case "oj-resizable-sw":case "oj-resizable-ne":case "oj-resizable-nw":return a=
"."+a,this.widget().find(a)[0]}return null}});e.ui.dialog.overlayInstances=0})()});
//# sourceMappingURL=oj-modular.map