define(["ojs/ojcore","jquery","knockout","jqueryui","ojs/ojknockout"],function(b,e,a){b.wc=o_a();o_("ValueBinding",b.wc,b);b.wc.gn="invalidComponentTracker";o_("ValueBinding._ATTRIBUTE_INVALID_COMPONENT_TRACKER",b.wc.gn,b);b.wc.lF="messages";b.wc.hn="optionChange";b.wc._init=function(a,c,e,h,g){c={};g=g.call();e=b.T.op(g[b.wc.hn]);a===b.wc.gn?e||b.wc.VA(g,c,h):a===b.wc.hn&&b.wc.VA(g,c,h);return c};b.wc.VA=function(d,c,f){var h=b.wc.hn,g,k,l=d[b.wc.gn],m,n=-1,q={};g=b.T.op(d[h]);null!==l&&(!g||g instanceof
Function)&&(c[h]=function(c,d){g&&g.call(this,c,d);d.option===b.wc.lF&&a.isWriteableObservable(l)&&(m=a.utils.unwrapObservable(l),b.f.Et(m),k=d.value,e.each(m,function(a,b){0>n&&b.component===f&&(n=a)}),k&&(q.component=f,f.call(f,"isValid")?q.valid=!0:q.valid=!1,0<=n?l.splice(n,1,q):l.push(q)))})};b.T.Qc().Tc({"for":"ojValue",attributes:[b.wc.gn,b.wc.hn],init:b.wc._init});b.T.Qc().Tc({"for":"ojInputText",use:"ojValue"});b.T.Qc().Tc({"for":"ojInputNumber",use:"ojValue"});b.T.Qc().Tc({"for":"ojRadioCheckbox",
use:"ojValue"});b.T.Qc().Tc({"for":"ojRadioset",use:"ojValue"});b.T.Qc().Tc({"for":"ojCheckboxset",use:"ojValue"});b.T.Qc().Tc({"for":"ojInputDateTime",use:"ojValue"});b.T.Qc().Tc({"for":"ojInputDate",use:"ojValue"});b.T.Qc().Tc({"for":"ojInputTime",use:"ojValue"});b.T.Qc().Tc({"for":"ojInputPassword",use:"ojValue"});b.T.Qc().Tc({"for":"ojTextArea",use:"ojValue"});b.T.Qc().Tc({"for":"ojCombobox",use:"ojValue"});b.T.Qc().Tc({"for":"ojSelect",use:"ojValue"})});
//# sourceMappingURL=oj-modular.map