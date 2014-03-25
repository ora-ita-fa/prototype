define(['./DvtToolkit'], function() {
  // Internal use only.  All APIs and functionality are subject to change at any time.
    // Map the D namespace to dvt, which is used to provide access across partitions.
  var D = dvt;
  D.Uh=(0,D.w)();(0,D.sa)("DvtAxis",D.Uh);D.E.l(D.Uh,D.Ha,"DvtAxis");D.Uh.newInstance=function(b,c,d){var e=new D.Uh;e.Init(b,c,d);return e};D.Uh.getDefaults=function(b){return(0,D.Yb)(new D.Vh,b)};D.Uh.prototype.Init=function(b,c,d){D.Uh.n.Init.call(this,b,c,d);this.Fe=new D.Vh;this.pa=new D.Wh(this);this.pa.Re(this);this.KP=D.o};D.Uh.prototype.Qd=function(b){b?this.S=this.Fe.Gg(b):this.S||(this.S=(0,D.Zb)(this))};
D.Uh.prototype.Sx=function(b,c,d){this.Qd(b);this.Ha().isLayout=D.o;this.H(D.r,c,d);b=this.v();this.Ha().isLayout=D.t;this.bi();var e=this.Ha().position;if("top"==e||"bottom"==e)return b.g<=d&&(this.KP=D.t),new D.Xh(c,window.Math.min(b.g,d));e=window.Math.max(1,0.1*b.f);b.f+e<=c&&(this.KP=D.t);return new D.Xh(window.Math.min(b.f+e,c),d)};D.Uh.prototype.H=function(b,c,d,e,f){this.Qd(b);this.Ob=c;this.Ab=d;this.bi();e||(e=0);f||(f=0);D.Yh.H(this,new D.L(e,f,c,d))};D.Uh.prototype.render=D.Uh.prototype.H;
D.D=D.Uh.prototype;D.D.qf=function(b,c){this===c&&this.Ra(b)};D.D.Ha=(0,D.B)("S");D.D.Ca=(0,D.B)("pa");D.D.getWidth=(0,D.B)("Ob");D.D.getHeight=(0,D.B)("Ab");
D.Th={};(0,D.sa)("DvtAxisConstants",D.Th);D.E.l(D.Th,D.E,"DvtAxisConstants");D.Th.Zv="tickLabel";D.Th.TICK_LABEL=D.Th.Zv;D.Th.Fo="title";D.Th.TITLE=D.Th.Fo;
D.LD=(0,D.A)("zH");D.E.l(D.LD,D.E,"DvtAbstractAxisValueFormatter");D.LD.prototype.Gm=(0,D.w)();
D.Vh=function(){this.Init({skyros:D.MD,alta:D.ND})};D.E.l(D.Vh,D.tr,"DvtAxisDefaults");D.ND={axisLine:{lineColor:"#9E9E9E"},majorTick:{lineColor:"rgba(196,206,215,0.4)"},minorTick:{lineColor:"rgba(196,206,215,0.2)"},tickLabel:{style:new D.P("font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;")},titleStyle:new D.P("font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 12px;")};
D.MD={position:D.r,baselineScaling:"zero",axisLine:{lineColor:"#8A8DAC",lineWidth:1,rendered:"on"},majorTick:{lineColor:"rgba(138,141,172,0.4)",lineWidth:1,rendered:"auto",lineStyle:"solid"},minorTick:{lineColor:"rgba(138,141,172,0.20)",lineWidth:1,rendered:"off",lineStyle:"solid"},tickLabel:{scaling:"auto",style:new D.P("font-size: 11px; color: #333333;"),rotation:"auto",rendered:"on"},titleStyle:new D.P("font-size: 11px; color: #737373;"),startGroupOffset:0,endGroupOffset:0,layout:{gapRatio:1,titleGap:4,
verticalAxisGap:3,horizontalAxisGap:5},_useBaselineColor:D.t,isLayout:D.t};
D.Wh=function(b){this.Init(b.e,b.qf,b);this.Lo=b};D.E.l(D.Wh,D.Bc,"DvtAxisEventManager");D.Wh.prototype.Fr=function(b,c){c instanceof D.Ec&&c.Ol()!=D.r&&this.ug(new D.ub(b,c.Ol()),this.Lo)};
D.Yh={};D.E.l(D.Yh,D.E,"DvtAxisRenderer");D.Yh.apa=5;D.Yh.H=function(b,c){var d=b.Ha(),e=(0,D.Eu)(b.e,d,c);b.Bb=e;"off"!=d.rendered&&(D.Yh.LQ(b,e,c),D.Yh.wJ(b,e,c))};
D.Yh.LQ=function(b,c,d){var e=b.Ha();if(e.title&&(c=e.position,!("radial"==c||"tangential"==c)))if(e.isLayout&&"bottom"==c&&(c="top"),b="top"==c||"bottom"==c?D.Yh.paa(b.Ca(),b,e.title,e.titleStyle,d.f,d.g):D.Yh.paa(b.Ca(),b,e.title,e.titleStyle,d.g,d.f)){var f=b.Lb(),e=window.Math.ceil(e.layout.titleGap*e.layout.gapRatio);"top"==c?(b.aa(d.x+d.f/2-f.f/2),b.qa(d.y),d.y+=f.g+e,d.g-=f.g+e):"bottom"==c?(b.aa(d.x+d.f/2-f.f/2),b.qa(d.y+d.g-f.g),d.g-=f.g+e):"left"==c?(b.Ni(3*window.Math.PI/2),(0,D.nc)(b,
d.x,d.y+d.g/2+f.f/2),d.x+=f.g+e,d.f-=f.g+e):"right"==c&&(b.Ni(3*window.Math.PI/2),(0,D.nc)(b,d.x+d.f-f.g,d.y+d.g/2+f.f/2),d.f-=f.g+e)}};D.Yh.wJ=function(b,c,d){var e=b.Ha();"on"==e.tickLabel.rendered&&(e=e.position,"top"==e||"bottom"==e?D.Yh.hwa(b,c,d):"tangential"==e?D.Yh.iwa(b,c,d):D.Yh.jwa(b,c,d))};
D.Yh.hwa=function(b,c,d){for(var e=c.Mx(b.e),f=b.Ha().isLayout,g=0,h=D.I.N(b.e),k=0;k<e.length;k++){var m=e[k];if(m!=D.r){if(c.OS()){!f&&b.KP&&(m=D.me.Yb(m,d.g,d.f,b)?m:D.r);if(!m)continue;h?m.hj():m.zi();m.R(d.y)}else m.Wn(),m.qa(d.y);b.Ca().ha(m,new D.Ec(m.Sn,D.r,D.r,{type:D.Th.Zv,id:m.Md()}));b.j(m);g=window.Math.max(g,D.me.Gi(m).g)}}c=c.Mx(b.e,1);f=0;if(c!=D.r)for(k=0;k<c.length;k++)m=c[k],m!=D.r&&(b.Ca().ha(m,new D.Ec(D.r,D.r,D.r,{type:D.Th.Zv,id:m.Md()})),e[k]!=D.r&&(f=e[k].Lb().f/2),h?m.aa(m.Y()+
f):m.aa(m.Y()-f),m.Wn(),m.qa(d.y+g),b.j(m))};
D.Yh.jwa=function(b,c,d){var e=b.Ha(),f=e.isLayout,g=e.position,h=D.I.N(b.e),k;"radial"==g?(k=d.x+d.f/2,k+=D.Yh.apa*(h?1:-1)):(k=d.x+d.f,f&&"left"==g&&(k=d.x));for(var e=function(e){!f&&b.KP&&(e=D.me.Yb(e,d.f,d.g,b)?e:D.r);if(e){b.Ca().ha(e,new D.Ec(e.Sn,D.r,D.r,{type:D.Th.Zv,id:e.Md()}));e.aa(k);e.zi();if("radial"==g){var m=e.Z();e.qa(d.y+d.g/2-m);h&&e.hj();var p=e.v(),q=0.15*p.g,m=m+p.g/2>c.Wha()&&"circle"==b.Ha().polarGridShape?1:0.3,p=window.DvtPathUtils.JF(p.x-q,p.y,p.f+2*q,p.g,2,2,2,2),p=new D.ad(b.e,
p);p.ga("#FFFFFF",m);b.j(p)}f&&"left"==g&&e.hj();b.j(e)}},m=c.Mx(b.e),p=0;p<m.length;p++){var q=m[p];q!=D.r&&e(q)}m=c.Mx(b.e,1);if(m!=D.r)for(p=0;p<m.length;p++)q=m[p],q!=D.r&&e(q)};D.Yh.iwa=function(b,c,d){c=c.Mx(b.e);for(var e=0;e<c.length;e++){var f=c[e];if(f!=D.r){var g=f.Md();b.Ca().ha(f,new D.Ec(f.of()?g:D.r,D.r,D.r,{type:D.Th.Zv,id:g}));f.F(d.x+d.f/2);f.R(d.y+d.g/2);b.j(f)}}};
D.Yh.paa=function(b,c,d,e,f,g){var h={type:D.Th.Fo,id:D.n};d=new D.le(c.e,d,0,0);d.Ka(e);return D.me.Yb(d,f,g,c)?(b.ha(d,new D.Ec(d.Sn,D.r,D.r,h)),d):D.r};
D.zD=(0,D.w)();D.E.l(D.zD,D.E,"DvtAxisInfo");D.Eu=function(b,c,d){return c.timeAxisType&&"disabled"!=c.timeAxisType?new D.OD(b,c,d):(0,window.isNaN)(c.dataMin)&&(0,window.isNaN)(c.dataMax)?new D.yD(b,c,d):new D.JD(b,c,d)};D.D=D.zD.prototype;
D.D.Init=function(b,c,d){this.e=b;this.Qc=c.position;this.cj=c._radius;"top"==this.Qc||"bottom"==this.Qc?(this.wg=d.x,this.Ng=d.x+d.f):"left"==this.Qc||"right"==this.Qc?(this.wg=d.y,this.Ng=d.y+d.g):"radial"==this.Qc?(this.wg=0,this.Ng=this.cj):"tangential"==this.Qc&&(D.I.N(b)?(this.wg=2*window.Math.PI,this.Ng=0):(this.wg=0,this.Ng=2*window.Math.PI));this.pEa=this.Eh=this.Fh=this.Ze=this.Ie=this.Cd=this.sc=D.r;this.Zm=this.qn=0;c.leftBuffer==D.r&&(c.leftBuffer=window.Infinity);c.rightBuffer==D.r&&
(c.rightBuffer=window.Infinity);this.S=c};D.D.G=(0,D.B)("S");D.D.Mx=(0,D.ba)(D.r);D.D.RE=(0,D.ba)(D.r);D.D.Ox=function(){return[]};D.D.SA=function(){return[]};D.D.kj=(0,D.ba)(D.r);D.D.TE=(0,D.ba)(D.r);D.D.JA=(0,D.ba)(D.r);D.D.Nm=(0,D.ba)(D.r);D.D.Zc=(0,D.ba)(D.r);D.D.SE=(0,D.ba)(D.r);D.D.OS=(0,D.ba)(D.t);
D.D.uo=function(b,c,d){if("tangential"==this.Qc){var e=16/180*window.Math.PI,f=1/180*window.Math.PI,g=this.cj+5;if(d<f||d>2*window.Math.PI-f)g+=5;b=new D.le(b,c,g*window.Math.sin(d),-g*window.Math.cos(d));d<f||window.Math.abs(d-window.Math.PI)<f||d>2*window.Math.PI-f?b.jf():d<window.Math.PI?b.hj():b.zi();window.Math.abs(d-window.Math.PI/2)<e||window.Math.abs(d-3*window.Math.PI/2)<e?b.Zd():d<window.Math.PI/2||d>3*window.Math.PI/2?b.lv():b.Wn()}else b=new D.le(b,c,d,d),b.Zd(),b.jf();b.Ka(this.S.tickLabel.style);
return b};D.ID=function(b,c,d,e){var f=!D.I.$()||1<D.I.KK();"radial"==b.Qc?("polygon"==b.S.polarGridShape?(e=D.Mm.fF(0,0,b.S._numGroups,e),c=new D.$e(c,e)):c=new D.lc(c,0,0,e),(0,D.Ka)(c)):"tangential"==b.Qc?(c=new D.Re(c,0,0,b.cj*window.Math.sin(e),-b.cj*window.Math.cos(e)),0.01>e%window.Math.PI/2&&f&&(0,D.Mb)(c)):(c=new D.Re(c,e,e,e,e),f&&(0,D.Mb)(c));c.Q(d);c.ea(D.t);return c};
D.GD=function(b,c,d){if(!c||0>=c.length)return D.t;var e=(0,window.parseInt)(b.S.tickLabel.style.q("font-size")),f=b instanceof D.JD?0.55*e:0.3*e,g=b instanceof D.JD?0.35*e:0.1*e,f=(e="left"==b.Qc||"right"==b.Qc||"radial"==b.Qc)||b.OS()?g:f;b=D.I.N(b.e);for(var h,k,m,p=0;p<c.length;p+=d+1)if(c[p]!=D.r)if(h==D.r||k==D.r)e?(h=c[p].y,k=c[p].y+c[p].g):(h=c[p].x,k=c[p].x+c[p].f);else{if(e){if(g=c[p].y,m=c[p].y+c[p].g,g>=h&&g-f<k||g<h&&m+f>h)return D.o}else if(g=c[p].x,m=c[p].x+c[p].f,!b&&g-f<k||b&&m+f>
h)return D.o;h=g;k=m}return D.t};D.DD=function(b,c,d){for(var e=0,f=(0,D.GD)(b,d,e);f;)e++,f=(0,D.GD)(b,d,e);if(0<e){b=[];for(d=0;d<c.length;d+=e+1)b.push(c[d]);return b}return c};D.HD=function(b,c){for(var d=[],e=0;e<b.length;e++){var f=b[e];f==D.r?d.push(D.r):(f=f.Lb(c),d.push(f))}return d};
D.CD=function(b,c,d,e){var f=[];"undefined"==typeof e&&(e=1);for(var g=0;g<c.length;g++){var h=c[g];if(h==D.r)f.push(D.r);else{d.j(h);var k=D.me.Gi(h),m=k.f*e,k=k.g;d.removeChild(h);h=b.OS()?new D.L(h.L()-k/2,h.K()-m/2,k,m):new D.L(h.Y()-m/2,h.Z()-k/2,m,k);f.push(h)}}return f};D.D=D.zD.prototype;D.D.qS=(0,D.ba)(D.r);D.D.PT=(0,D.w)();D.D.wS=(0,D.ba)(D.r);D.D.QT=(0,D.w)();D.D.PK=(0,D.ba)(D.r);D.D.vS=(0,D.ba)(D.r);D.D.uv=(0,D.B)("Ie");D.D.tv=(0,D.B)("Ze");D.D.or=(0,D.B)("sc");D.D.zv=(0,D.B)("Cd");
D.D.L2=(0,D.B)("Fh");D.D.K2=(0,D.B)("Eh");D.D.xv=(0,D.ba)(0);D.D.Wha=(0,D.B)("Ng");D.D.ES=(0,D.B)("qn");D.D.iS=(0,D.B)("Zm");
D.JD=function(b,c,d){this.Init(b,c,d)};D.E.l(D.JD,D.zD,"DvtDataAxisInfo");D.D=D.JD.prototype;
D.D.Init=function(b,c,d){D.JD.n.Init.call(this,b,c,d);"top"==this.Qc||"bottom"==this.Qc?("on"==c.tickLabel.rendered&&(this.qn=window.Math.max(10-c.leftBuffer,0),this.Zm=window.Math.max(10-c.rightBuffer,0)),D.I.N(b)?(this.Nh=this.Ng-this.Zm,this.Yj=this.wg+this.qn):(this.Nh=this.wg+this.qn,this.Yj=this.Ng-this.Zm)):"tangential"==this.Qc||"radial"==this.Qc?(this.Nh=this.wg,this.Yj=this.Ng):(this.Nh=this.Ng,this.Yj=this.wg);this.Ie=c.min;this.Ze=c.max;this.sc=c.viewportMin==D.r?this.Ie:c.viewportMin;
this.Cd=c.viewportMax==D.r?this.Ze:c.viewportMax;this.Eg=c.step;this.eA=c.minorStep;this.t_=c.minStep;this.Kj=D.r;c.tickLabel!=D.r&&(this.Kj=c.tickLabel.converter);this.Fh=c.dataMin;this.Eh=c.dataMax;b="zero"==this.S.baselineScaling;c="on"==this.S._continuousExtent;b&&(this.Fh=window.Math.min(0,this.Fh),this.Eh=window.Math.max(0,this.Eh));d=(0,D.KD)(this,this.Ie!=D.r?this.Ie:this.Fh,this.Ze!=D.r?this.Ze:this.Eh);this.Fh==this.Eh&&(this.Fh-=3*d,this.Eh+=2*d);if(this.Ie==D.r)if(b&&0<=this.Fh)this.Ie=
0;else if(c)this.Ie=this.Fh-0.1*(this.Eh-this.Fh),0<=this.Fh&&(this.Ie=window.Math.max(this.Ie,0));else if(!b&&this.Ze!=D.r)for(this.Ie=this.Ze;this.Ie>this.Fh;)this.Ie-=d;else this.Ie=window.Math.floor(this.Fh/d)*d;if(this.Ze==D.r)if(b&&0>=this.Eh)this.Ze=0;else if(c)this.Ze=this.Eh+0.1*(this.Eh-this.Fh),0>=this.Eh&&(this.Ze=window.Math.min(this.Ze,0));else if(b)this.Ze=(window.Math.floor(this.Eh/d)+1)*d;else for(this.Ze=this.Ie;this.Ze<=this.Eh;)this.Ze+=d;this.Ze==this.Ie&&(this.Ze=100,this.Ie=
0,d=(this.Ze-this.Ie)/10);this.sc==D.r&&(this.sc=this.Ie);this.Cd==D.r&&(this.Cd=this.Ze);if(this.sc!=this.Ie||this.Cd!=this.Ze)d=(0,D.KD)(this,this.sc,this.Cd);this.Eg=this.Eg?this.Eg:d;this.t_!=D.r&&this.Eg<this.t_&&(this.Eg=this.t_);this.pD=(this.Cd-this.bF())/this.Eg;this.eA!=D.r&&2<=this.Eg/this.eA?this.uD=this.Eg/this.eA:(this.uD=2,this.eA=this.Eg/this.uD)};
D.D.bF=function(){return"zero"==this.S.baselineScaling||"on"==this.S._continuousExtent&&this.S.min==D.r?window.Math.ceil(this.sc/this.Eg)*this.Eg:window.Math.ceil((this.sc-this.Ie)/this.Eg)*this.Eg+this.Ie};
D.D.Mx=function(b,c){if(c&&0<c)return D.r;var d=[],e=[],e=b.Fc,f="tangential"==this.Qc;this.S.tickLabel&&this.S.tickLabel.scaling&&(this.EN=new D.Cu(this.sc,this.Cd,this.Eg,this.S.tickLabel.scaling,this.S.tickLabel.autoPrecision?this.S.tickLabel.autoPrecision:"on"));for(var g=0;g<=this.pD;g++){var h=g*this.Eg+this.bF();if(!(f&&h==this.Cd)){var k=this.An(h),h=this.Zc(h),k=this.uo(b,k,h);d.push(k)}}f||(e=(0,D.HD)(d,e),d=(0,D.DD)(this,d,e));return d};
D.D.RE=function(b){var c=this.S.axisLine;return"on"==c.rendered?(c=new D.re(c.lineColor,1,c.lineWidth),(0,D.ID)(this,b,c,this.Yj)):D.r};
D.D.Ox=function(b){var c=[],d,e,f=this.S.majorTick;if("off"==f.rendered)return c;var g=new D.re(f.lineColor,1,f.lineWidth);f.lineStyle&&g.va((0,D.Ns)(f.lineStyle));f=g.clone();if(this.S._useBaselineColor){var h=D.R.u(this.S.axisLine.lineColor,0.75);f.ko(h)}for(h=0;h<=this.pD;h++)d=h*this.Eg+this.bF(),"tangential"==this.Qc&&d==this.Cd||(e=0==d?f:g,d=this.Zc(d),e=(0,D.ID)(this,b,e,d),c.push(e));return c};
D.D.SA=function(b){var c=[],d,e=this.S.minorTick;if("on"!=e.rendered)return c;var f=new D.re(e.lineColor,1,e.lineWidth);e.lineStyle&&f.va((0,D.Ns)(e.lineStyle));for(e=-1;e<=this.pD;e++)for(var g=e*this.Eg+this.bF(),h=1;h<this.uD;h++){d=g+h*this.eA;if(d>this.Cd)break;d<this.sc||(d=this.Zc(d),d=(0,D.ID)(this,b,f,d),c.push(d))}return c};D.D.kj=function(b){return b<this.sc||b>this.Cd?D.r:this.Zc(b)};
D.D.TE=function(b){var c=window.Math.min(this.Nh,this.Yj),d=window.Math.max(this.Nh,this.Yj);b<c?b=c:b>d&&(b=d);return this.Nm(b)};D.D.JA=function(b){b<this.sc?b=this.sc:b>this.Cd&&(b=this.Cd);return this.Zc(b)};D.D.Nm=function(b){return this.sc+(b-this.Nh)/(this.Yj-this.Nh)*(this.Cd-this.sc)};D.D.Zc=function(b){return this.Nh+(b-this.sc)/(this.Cd-this.sc)*(this.Yj-this.Nh)};D.D.SE=function(){var b=0;0>this.Cd?b=this.Cd:0<this.sc&&(b=this.sc);return this.kj(b)};
D.D.An=function(b){if(this.Kj&&(this.Kj.getAsString||this.Kj.format)){if(this.EN)return this.EN.Gm(b,this.Kj);if(this.Kj.getAsString)return this.Kj.getAsString(b);if(this.Kj.format)return this.Kj.format(b)}else{if(this.EN)return this.EN.Gm(b);var c=window.Math.log(this.Eg)/window.Math.log(10),c=window.Math.max(window.Math.ceil(-c),0);return b.toFixed(c)}};
D.KD=function(b,c,d){if(b.Eg)return b.Eg;b=d-c;if(0==b)return 0==c?10:window.Math.pow(10,window.Math.floor(window.Math.log(c)/window.Math.LN10)-1);c=window.Math.log(b)/window.Math.log(10);c=window.Math.pow(10,window.Math.ceil(c)-2);b=window.Math.round(b/c);return(10<=b&&14>=b?2:15<=b&&19>=b?3:20<=b&&24>=b?4:25<=b&&45>=b?5:46<=b&&80>=b?10:20)*c};D.D=D.JD.prototype;D.D.qS=(0,D.B)("pD");D.D.PT=function(b){this.pD=b;this.Eg=(this.Cd-this.sc)/this.pD};D.D.wS=(0,D.B)("uD");
D.D.QT=function(b){this.uD=b;this.eA=this.Eg/this.uD};D.D.PK=(0,D.B)("Eg");D.D.vS=(0,D.B)("eA");D.D.xv=function(){return(this.Ze-this.Ie)/64};D.D.ES=function(){return("top"==this.Qc||"bottom"==this.Qc)&&D.I.N(this.e)?this.Zm:this.qn};D.D.iS=function(){return("top"==this.Qc||"bottom"==this.Qc)&&D.I.N(this.e)?this.qn:this.Zm};
D.yD=function(b,c,d){this.Init(b,c,d)};D.E.l(D.yD,D.zD,"DvtGroupAxisInfo");
D.yD.prototype.Init=function(b,c,d){D.yD.n.Init.call(this,b,c,d);b=D.I.N(b);if(("top"==this.Qc||"bottom"==this.Qc)&&b)d=this.wg,this.wg=this.Ng,this.Ng=d;this.ps=c.groups;d=0<c.endGroupOffset?(0,window.Number)(c.endGroupOffset):0;var e=0<c.startGroupOffset?(0,window.Number)(c.startGroupOffset):0;this.Fh=0;this.Eh=this.ps.length-1;this.Ie=c.min==D.r?this.Fh-e:c.min;this.Ze=c.max==D.r?this.Eh+d:c.max;this.sc=c.viewportMin==D.r?this.Ie:c.viewportMin;this.Cd=c.viewportMax==D.r?this.Ze:c.viewportMax;var f=
(0,D.AD)(this,c.viewportStartGroup),g=(0,D.AD)(this,c.viewportEndGroup);-1!=f&&(this.sc=f-e);-1!=g&&(this.Cd=g+d);this.Ifa=b?c.rightBuffer:c.leftBuffer;this.Taa=b?c.leftBuffer:c.rightBuffer;this.mca=D.t;this.q0=c._renderGridAtLabels};D.ED=function(b,c,d,e){var f,g=D.I.N(b.e);b.mca=D.o;(0,D.BD)(b,e,e,c);for(var h=0;h<c.length;h++)e=c[h],e!=D.r&&(f=e.Y(),e.aa(0),e.qa(0),g?e.Ni(window.Math.PI/2):e.Ni(3*window.Math.PI/2),e.F(f));d=(0,D.CD)(b,c,d);return(0,D.DD)(b,c,d)};D.yD.prototype.OS=(0,D.B)("mca");
D.BD=function(b,c,d,e){c=window.Math.max(c-b.Ifa,0);d=window.Math.max(d-b.Taa,0);var f=D.I.N(b.e);b.wg+=(c-b.qn)*(f?-1:1);b.Ng-=(d-b.Zm)*(f?-1:1);for(f=0;f<e.length;f++){var g=e[f];g&&g.aa(b.kj(f))}b.qn=c;b.Zm=d};D.D=D.yD.prototype;
D.D.Mx=function(b,c){if(c&&0<c)return D.r;for(var d=[],e=b.Fc,f="top"==this.Qc||"bottom"==this.Qc,g=D.I.N(b),h=this.ps.length,k,m,p=0;p<h;p++){var q=(0,D.FD)(this,p),s=this.kj(p);s!=D.r?(m=this.uo(b,q,s),d.push(m),k||(k=m)):d.push(D.r)}if("tangential"==this.Qc)return d;h=k.Lb();f&&(this.S._startOverflow!=D.r&&this.S._endOverflow!=D.r?(k=this.S._startOverflow,g=this.S._endOverflow):(m=m.Lb(),k=g?h.f+h.x-this.wg:this.wg-h.x,g=g?this.Ng-m.x:m.f+m.x-this.Ng),(k>this.Ifa||g>this.Taa)&&(0,D.BD)(this,k,
g,d));g=[];g=(0,D.CD)(this,d,e,0.3);k=(0,D.CD)(this,d,e);if(!(0,D.GD)(this,k,0))return d;if(f){if("auto"==this.S.tickLabel.rotation){if((0,D.GD)(this,g,0))return(0,D.ED)(this,d,e,h.g/2);g=(0,D.HD)(d,e);return(0,D.GD)(this,g,0)?(0,D.ED)(this,d,e,h.g/2):d}g=(0,D.HD)(d,e);return(0,D.DD)(this,d,g)}return(0,D.DD)(this,d,k)};D.D.RE=function(b){var c=this.S.axisLine;return"on"==c.rendered?(c=new D.re(c.lineColor,1,c.lineWidth),(0,D.ID)(this,b,c,0)):D.r};
D.D.Ox=function(b){var c=[],d,e=this.S.majorTick,f=new D.re(e.lineColor,1,e.lineWidth);e.lineStyle&&f.va((0,D.Ns)(e.lineStyle));e=e.rendered;if("on"==e||"auto"==e&&"tangential"==this.Qc)for(var e=this.ps.length,g=0;g<e;g++){if(this.q0)d=this.kj(g);else if(this.kj(g+0.5))d=this.kj(g+0.5);else continue;d!=D.r&&(d=(0,D.ID)(this,b,f,d),c.push(d))}return c};D.D.kj=function(b){return b<this.sc||b>this.Cd?D.r:this.Zc(b)};
D.D.TE=function(b){var c=window.Math.min(this.wg,this.Ng),d=window.Math.max(this.wg,this.Ng);b<c?b=c:b>d&&(b=d);return this.Nm(b)};D.D.JA=function(b){b<this.sc?b=this.sc:b>=this.Cd&&(b=this.Cd);return this.Zc(b)};D.D.Nm=function(b){return this.sc+(b-this.wg)/((this.Ng-this.wg)/(this.Cd-this.sc))};D.D.Zc=function(b){return this.wg+(b-this.sc)*((this.Ng-this.wg)/(this.Cd-this.sc))};D.FD=function(b,c){c=window.Math.round(c);if(0>c||c>=b.ps.length)return D.r;var d=b.ps[c];d&&d.name&&(d=d.name);return d};
D.AD=function(b,c){if(c==D.r)return-1;for(var d=-1,e=0;e<b.ps.length;e++)if(c==(0,D.FD)(b,e)){d=e;break}return d};D.yD.prototype.xv=(0,D.ba)(1);
D.Cu=function(b,c,d,e,f){this.zH=new D.jp;this.Init(b,c,d,e,f)};D.E.l(D.Cu,D.LD,"DvtLinearScaleAxisValueFormatter");
D.Cu.prototype.Init=function(b,c,d,e,f){this.kfa={};this.Sq=[];this.Waa={};var g=function(b,c,d){var e;this.zH&&d&&(e=(0,D.ct)(this.zH,d,D.r));d={zr:c,nCa:e};this.kfa[b]=d;this.Sq.push(d);this.Waa[c]=d};g.call(this,"none",0);g.call(this,"thousand",3,"SCALING_SUFFIX_THOUSAND");g.call(this,"million",6,"SCALING_SUFFIX_MILLION");g.call(this,"billion",9,"SCALING_SUFFIX_BILLION");g.call(this,"trillion",12,"SCALING_SUFFIX_TRILLION");g.call(this,"quadrillion",15,"SCALING_SUFFIX_QUADRILLION");this.Sq.sort(function(b,
c){return b.zr<c.zr?-1:b.zr>c.zr?1:0});var h=D.t,k,m,g=D.t;"off"!==f&&(g=D.o);e||(e="auto");if(e=this.kfa[e])m=e.zr;"number"!==typeof m&&(h=D.o);if(h)if(h=window.Math.max(window.Math.abs(b),window.Math.abs(c)),h=(0,D.UD)(h),m=0,h<=this.Sq[0].zr)m=this.Sq[0].zr;else if(h>=this.Sq[this.Sq.length-1].zr)m=this.Sq[this.Sq.length-1].zr;else for(e=this.Sq.length-1;0<=e;e--)if(this.Sq[e].zr<=h){m=this.Sq[e].zr;break}g===D.o&&(0==d&&b==c?(b=m-(0,D.UD)(c),k=0>=b?3+b:window.Math.max(b,4)):k=window.Math.max(m-
(0,D.UD)(d),0));this.pxa=g;this.B0=m;this.sY=k};
D.Cu.prototype.Gm=function(b,c){var d=(0,window.parseFloat)(b);if((0,window.isNaN)(d))return b;var e;if(0<this.B0){for(e=0;e<this.B0;e++)d/=10;e=this.Waa[this.B0].nCa}if(c&&c.getAsString)d=c.getAsString(d);else if(c&&c.format)d=c.format(d);else if(this.pxa&&!(0,window.isNaN)((0,window.parseFloat)(d))&&(d=(0,window.parseFloat)((new window.Number(d)).toFixed(this.sY)),d=""+d,0<this.sY)){-1==d.indexOf(".")&&(d+=".");for(var f=d.substring(d.indexOf(".")+1).length;f<this.sY;)d+="0",f++}"string"===typeof e&&
(d+=e);return d};D.UD=function(b){b=0<=b?b:-b;var c=0;if(1E-15>b)return 0;if(window.Infinity==b)return window.Number.MAX_VALUE;if(10<=b)for(;10<=b;)c+=1,b/=10;else if(1>b)for(;1>b;)c-=1,b*=10;return c};
D.OD=function(b,c,d){this.Init(b,c,d)};D.E.l(D.OD,D.zD,"DvtTimeAxisInfo");D.PD=864E5*(365/12);
D.OD.prototype.Init=function(b,c,d){D.OD.n.Init.call(this,b,c,d);"top"==this.Qc||"bottom"==this.Qc?(!c._isOverview&&"on"==c.tickLabel.rendered&&(this.qn=window.Math.max(10-c.leftBuffer,0),this.Zm=window.Math.max(10-c.rightBuffer,0)),D.I.N(b)?(this.Nh=this.Ng-this.Zm,this.Yj=this.wg+this.qn):(this.Nh=this.wg+this.qn,this.Yj=this.Ng-this.Zm)):(this.Nh=this.wg,this.Yj=this.Ng);this.Kj=D.r;c.tickLabel!=D.r&&(this.Kj=c.tickLabel.converter);this.ps=c.groups;this.Fh=c.dataMin;this.Eh=c.dataMax;this.im=0<
this.ps.length?(this.Eh-this.Fh)/(this.ps.length-1):0;b=0<c.endGroupOffset?c.endGroupOffset*this.im:0;d=0<c.startGroupOffset?c.startGroupOffset*this.im:0;this.Ie=c.min!=D.r?c.min:this.Fh-d;this.Ze=c.max!=D.r?c.max:this.Eh+b;this.sc=c.viewportMin==D.r?this.Ie:c.viewportMin;this.Cd=c.viewportMax==D.r?this.Ze:c.viewportMax;c.viewportStartGroup!=D.r&&(this.sc=c.viewportStartGroup-d);c.viewportEndGroup!=D.r&&(this.Cd=c.viewportEndGroup+b);this.Vfa=0;this.k1=this.Cd-this.sc;this.RP=this.ws=this.Kca=this.BI=
D.r;this.CP=D.o;b=new D.jp;this.Hl=[(0,D.ct)(b,"MONTH_SHORT_JANUARY",D.r),(0,D.ct)(b,"MONTH_SHORT_FEBRUARY",D.r),(0,D.ct)(b,"MONTH_SHORT_MARCH",D.r),(0,D.ct)(b,"MONTH_SHORT_APRIL",D.r),(0,D.ct)(b,"MONTH_SHORT_MAY",D.r),(0,D.ct)(b,"MONTH_SHORT_JUNE",D.r),(0,D.ct)(b,"MONTH_SHORT_JULY",D.r),(0,D.ct)(b,"MONTH_SHORT_AUGUST",D.r),(0,D.ct)(b,"MONTH_SHORT_SEPTEMBER",D.r),(0,D.ct)(b,"MONTH_SHORT_OCTOBER",D.r),(0,D.ct)(b,"MONTH_SHORT_NOVEMBER",D.r),(0,D.ct)(b,"MONTH_SHORT_DECEMBER",D.r)];this.q0=c._renderGridAtLabels};
D.SD=function(b,c,d){var e=D.r,f=D.r;if(b.Kj&&b.Kj.getAsString)e=b.Kj.getAsString(c);else if(b.Kj&&b.Kj.format)e=b.Kj.format(c);else if(31536E6<=b.im)e=(0,D.QD)(b,c,D.t,D.t,D.o);else if(31536E6<=b.k1||24192E5<=b.im){if(d==D.r||d.getMonth()!=c.getMonth())e=(0,D.QD)(b,c,D.t,D.o,D.t);if(d==D.r||d.getYear()!=c.getYear())f=(0,D.QD)(b,c,D.t,D.t,D.o)}else if(24192E5<=b.k1||864E5<=b.im){if(d==D.r||d.getDate()!=c.getDate())e=(0,D.QD)(b,c,D.o,D.t,D.t);d==D.r||d.getYear()!=c.getYear()?f=(0,D.QD)(b,c,D.t,D.o,
D.o):d.getMonth()!=c.getMonth()&&(f=(0,D.QD)(b,c,D.t,D.o,D.t))}else{if(36E5<=b.k1||6E4<=b.im){if(d==D.r||d.getHours()!=c.getHours()||d.getMinutes()!=c.getMinutes())e=(0,D.RD)(b,c,D.t)}else if(d==D.r||d.getSeconds()!=c.getSeconds())e=(0,D.RD)(b,c,D.o);d==D.r||d.getMonth()!=c.getMonth()?f=(0,D.QD)(b,c,D.o,D.o,D.t):d.getDate()!=c.getDate()&&(f="left"==b.Qc||"right"==b.Qc?(0,D.QD)(b,c,D.o,D.o,D.t):(0,D.QD)(b,c,D.o,D.t,D.t))}return[e,f]};
D.QD=function(b,c,d,e,f){var g=c.getFullYear(),h;h=b.Hl&&12<=b.Hl.length?b.Hl[c.getMonth()]:c.toString().split(" ")[1];c=c.getDate();if(b.Hl&&17<b.Hl.length){var k=b.Hl[17],g=g+b.Hl[16];c+=k}k="DMY";b.Hl&&15<b.Hl.length&&(k=b.Hl[15]);b="";for(var m=0;m<k.length;m++)d&&"D"==k[m]?b+=c+" ":e&&"M"==k[m]?b+=h+" ":f&&"Y"==k[m]&&(b+=g+" ");return 0<b.length?b.slice(0,b.length-1):b};
D.RD=function(b,c,d){var e=c.getHours(),f=c.getMinutes();c=c.getSeconds();var g="",h="",k=D.t;b.Hl!=D.r&&14<b.Hl&&(g=b.Hl[window.DvtTimeAxis.TDa],h=b.Hl[window.DvtTimeAxis.uEa],k="t"==b.Hl[14]);b=""!=g&&""!=h;var m;b&&(m=h,12<e?(e-=12,m=h):0==e?(m=g,e=12):12>e&&(m=g));e=(10>e?"0"+e:""+e)+":"+(10>f?"0"+f:""+f);d&&(e+=":"+(10>c?"0"+c:""+c));return b?k?m+" "+e:e+" "+m:e};
D.OD.prototype.Mx=function(b,c){if(c&&1<c)return D.r;if(!this.BI){var d=[],e=[],f=[],g=[],h=D.r,k=0,m=0,m=b.Fc,p=D.I.N(b),q="left"==this.Qc||"right"==this.Qc,s="off"!=this.S.zoomAndScroll;if(s)var u=D.o;var v=0;q&&D.I.Zx()&&(v=0.2*(0,window.parseInt)(this.S.tickLabel.style.q("font-size")));var z=[],k=0;if("mixedFrequency"==this.S.timeAxisType){for(var C=this.sc,k=31536E6<=this.im?31536E6:this.im>=D.PD?D.PD:864E5<=this.im?864E5:36E5<=this.im?36E5:6E4<=this.im?6E4:1E3;C<=this.Cd;)z.push(C),C+=k;k=window.Math.floor(this.im/
k)-1}else z=this.ps;for(var F=0;F<z.length;F++){var C=z[F],H=this.kj(C);if(H!=D.r){var C=new window.Date(C+this.Vfa),J=(0,D.SD)(this,C,h),h=J[0],J=J[1];h!=D.r?(J!=D.r?d.push(this.uo(b,h,H+v)):d.push(this.uo(b,h,H)),f.push(H)):(d.push(D.r),f.push(D.r));s&&u&&(H=this.sc?this.kj(this.sc):H,u=D.t);J!=D.r?(h=D.r,h=J!=D.r?this.uo(b,J,H-v):this.uo(b,J,H),g.push(H),q||(p?h.zi():h.hj()),e.push(h),this.CP=D.t):(e.push(D.r),g.push(D.r));h=C}}u=d;v=(0,D.HD)(d,m);z=k;p=[];for(k=0;k<v.length;k++)v[k]!=D.r&&p.push(v[k]);
v=z;for(k=(0,D.GD)(this,p,v);k;)v++,k=(0,D.GD)(this,p,v);p=p.length;if(0<v)for(k=z=0;k<u.length;k++)u[k]!=D.r&&(0!=z%(v+1)&&(u[k]=D.r,p--),z++);k=p;u=e;m=(0,D.HD)(e,m);if(!m||0>=m.length)m=D.t;else{v=(p="left"==this.Qc||"right"==this.Qc)?this.S.layout.verticalAxisGap:this.S.layout.horizontalAxisGap;z=0;if(m[0]!=D.r){p?(F=m[0].y,H=m[0].y+m[0].g):(F=m[0].x,H=m[0].x+m[0].f);z++;for(J=1;J<m.length;J++)m[J]!=D.r&&(p?(h=m[J].y,C=m[J].y+m[J].g):(h=m[J].x,C=m[J].x+m[J].f),(h>=F&&h-v<H||h<F&&C+v>F)&&(u[J]=
D.r),u[J]!=D.r&&(F=h,H=C,z++))}m=z}if(!s)if(k<=1.5*m&&1<m){d=e;e=D.r;for(s=0;s<d.length;s++)d[s]!=D.r&&d[s].jf()}else 2>m&&(e=D.r);2>m&&(this.CP=D.o);if(q&&e!=D.r){for(var q=d,s=e,M=0.1*(0,window.parseInt)(this.S.tickLabel.style.q("font-size")),m=function(b,c){return c.y>=b.y&&c.y-M<b.y+b.g||c.y<b.y&&c.y+c.g+M>b.y?D.o:D.t},k=D.r,p=D.t,u=0;u<q.length;u++)if(q[u]&&s[u])if(q[u].Wn(),s[u].lv(),k&&m(k,q[u].Lb())){p=D.o;break}else if(q[u+1]&&m(q[u].Lb(),q[u+1].Lb())){p=D.o;break}else k=s[u].Lb();else if(q[u]||
s[u])if(v=q[u]?q[u]:s[u],k&&m(k,v.Lb())){p=D.o;break}else k=v.Lb();if(p){v=p=k=D.r;for(u=0;u<q.length;u++)s[u]?(q[u]=D.r,s[u].Zd(),z=s[u].Lb(),p&&m(p,z)&&(q[k]=D.r),v=z):q[u]&&(z=q[u].Lb(),v&&m(v,z)?q[u]=D.r:(p=z,k=u))}}this.BI=d;this.Kca=e;this.ws=f;this.RP=g}return 1==c?this.Kca:this.BI};D.OD.prototype.RE=function(b){var c=this.S.axisLine;return"on"==c.rendered?(c=new D.re(c.lineColor,1,c.lineWidth),(0,D.ID)(this,b,c,10)):D.r};
D.TD=function(b,c){if(b.q0)return 0;for(var d=b.ws[c],e=D.r,f=c-1;0<=f;f--)if(b.ws[f]!=D.r){e=b.ws[f];break}return e==D.r?window.Infinity:(d-e)/2};D.D=D.OD.prototype;
D.D.Ox=function(b){var c=this.S.majorTick;if("on"!=c.rendered)return[];var d=[];if(this.CP)for(var e=0;e<this.ws.length;e++)this.ws[e]!=D.r&&this.BI[e]!=D.r&&d.push(this.ws[e]-(0,D.TD)(this,e));else for(e=1;e<this.RP.length;e++)this.RP[e]!=D.r&&d.push(this.RP[e]-(0,D.TD)(this,e));var f=new D.re(c.lineColor,1,c.lineWidth);c.lineStyle&&f.va((0,D.Ns)(c.lineStyle));c=[];for(e=0;e<d.length;e++)d[e]>=this.Nh&&d[e]<=this.Yj&&c.push((0,D.ID)(this,b,f,d[e]));return c};
D.D.SA=function(b){var c=this.S.minorTick;if("on"!=c.rendered||this.CP)return[];for(var d=[],e=0;e<this.ws.length;e++)this.ws[e]!=D.r&&this.BI[e]!=D.r&&d.push(this.ws[e]-(0,D.TD)(this,e));var f=new D.re(c.lineColor,1,c.lineWidth);c.lineStyle&&f.va((0,D.Ns)(c.lineStyle));c=[];for(e=0;e<d.length;e++)d[e]>=this.Nh&&d[e]<=this.Yj&&c.push((0,D.ID)(this,b,f,d[e]));return c};D.D.kj=function(b){return b<this.sc||b>this.Cd?D.r:this.Zc(b)};
D.D.TE=function(b){var c=window.Math.min(this.Nh,this.Yj),d=window.Math.max(this.Nh,this.Yj);b<c?b=c:b>d&&(b=d);return this.Nm(b)};D.D.JA=function(b){b<this.sc?b=this.sc:b>this.Cd&&(b=this.Cd);return this.Zc(b)};D.D.Nm=function(b){return this.sc+(b-this.Nh)/(this.Yj-this.Nh)*(this.Cd-this.sc)};D.D.Zc=function(b){return this.Nh+(b-this.sc)/(this.Cd-this.sc)*(this.Yj-this.Nh)};D.D.V2=function(){return window.Math.abs(this.Zc(this.sc+this.im)-this.Zc(this.sc))};D.D.xv=(0,D.B)("im");
D.D.ES=function(){return("top"==this.Qc||"bottom"==this.Qc)&&D.I.N(this.e)?this.Zm:this.qn};D.D.iS=function(){return("top"==this.Qc||"bottom"==this.Qc)&&D.I.N(this.e)?this.qn:this.Zm};
});