(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{100:function(e,a,t){e.exports=t.p+"static/media/logo.5d5d9eef.svg"},110:function(e,a,t){e.exports=t(258)},115:function(e,a,t){},116:function(e,a,t){},253:function(e,a,t){},258:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(99),o=t.n(l),i=(t(115),t(100)),c=t.n(i),m=(t(116),t(101)),u=t(102),s=t(108),d=t(103),E=t(109),f=t(5),p=t(12),v=p.object().shape({email:p.string().email("Invalid email").required("Email Required"),password:p.string().required("Password Required")});t(98);var h=function(e){return r.a.createElement("pre",null,r.a.createElement("strong",null,"props")," = ",JSON.stringify(e,null,2))},g=t(36);t(253);var b=function(e){var a=e.field,t=e.form,n=(t.touched,t.errors,e.label),l=Object(g.a)(e,["field","form","label"]);return r.a.createElement(r.a.Fragment,null,n&&r.a.createElement("label",{className:"Input--Label",htmlFor:a.name},n),r.a.createElement("input",Object.assign({className:"Input--Field"},a,l)))};var w=function(){return r.a.createElement(f.d,{initialValues:{email:"",password:""},validationSchema:v},function(e){return r.a.createElement(f.c,{autoCapitalize:"off",autoComplete:"off"},r.a.createElement("div",{className:"Form--Container"},r.a.createElement("div",null,r.a.createElement("div",{className:"Form--Field"},r.a.createElement(f.b,{name:"email",type:"email",component:b,label:"Email Address"})),r.a.createElement("div",{className:"Form--Field"},r.a.createElement(f.b,{name:"password",type:"password",component:b,label:"Password"})),r.a.createElement(f.a,{name:"email",render:function(e){return r.a.createElement("div",{className:"Form--Error"},e)}}),r.a.createElement(f.a,{name:"password",render:function(e){return r.a.createElement("div",{className:"Form--Error"},e)}})),r.a.createElement("div",null,r.a.createElement(h,e))))})},F=p.object().shape({amount:p.number().min(1,"Amount must be greater than 0").max(100,"Amount cannot be greater than $100").required("Amount Required")}),N=t(107),C=t.n(N);var j=function(e){var a=e.value,t=e.onValueChange,n=Object(g.a)(e,["value","onValueChange"]);return console.log(e),r.a.createElement(C.a,Object.assign({value:a,thousandSeparator:!0,prefix:"$",onValueChange:t},n))};var O=function(){return r.a.createElement(f.d,{initialValues:{amount:0},validationSchema:F},function(e){return r.a.createElement(f.c,{autoCapitalize:"off",autoComplete:"off"},r.a.createElement("div",{className:"Form--Container"},r.a.createElement("div",null,r.a.createElement("div",{className:"Form--Field"},r.a.createElement(j,{placeholder:"$50",value:e.values.numbers,name:"amount",decimalScale:2,onValueChange:function(a){return e.setFieldValue("amount",a.floatValue)}})),r.a.createElement("div",null,e.errors.amount&&r.a.createElement("div",{className:"Form--Error"},e.errors.amount))),r.a.createElement("div",null,r.a.createElement(h,e))))})},S=function(e){function a(){var e,t;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(t=Object(s.a)(this,(e=Object(d.a)(a)).call.apply(e,[this].concat(r)))).state={isLoginForm:!0},t.handleSwitchForm=function(){t.setState(function(e){return{isLoginForm:!e.isLoginForm}})},t}return Object(E.a)(a,e),Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,r.a.createElement("button",{onClick:this.handleSwitchForm},"Switch Form")),r.a.createElement("div",null,this.state.isLoginForm?r.a.createElement(w,null):r.a.createElement(O,null)))}}]),a}(r.a.PureComponent);var y=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("img",{src:c.a,className:"App-logo",alt:"logo",width:"200",height:"200"}),r.a.createElement(S,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},98:function(e,a,t){}},[[110,1,2]]]);
//# sourceMappingURL=main.4a1db4d6.chunk.js.map