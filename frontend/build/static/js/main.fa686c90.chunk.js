(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{124:function(e,t,n){e.exports=n(291)},291:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(17),l=n.n(c),i=n(50),o=n(23),u=n(35),s=n(37),d=function(e,t){switch(t.type){case"INFO_DIALOG":var n;return n=void 0===t.index?0:t.index,Object(s.a)({},e,{openInfo:!e.openInfo,activeInfo:n});case"ADD_DIALOG":return Object(s.a)({},e,{openAdd:!e.openAdd});case"ADD_ITEM":return Object(s.a)({},e,{list:Object(u.a)(e.list).concat([t.newItem])});case"DELETE_ITEM":var a=Object(u.a)(e.list.slice(0,t.index)).concat(Object(u.a)(e.list.slice(t.index+1)));return Object(s.a)({},e,{list:a});case"HANDLE_CHECK":return Object(s.a)({},e,{checked:t.newChecked});default:return e}},p=n(18),m=n(19),h=n(21),f=n(20),b=n(22),O=n(28),E=n.n(O),g=n(15),j=n(55),I=n.n(j),y=n(56),v=n.n(y),k=n(111),A=n.n(k),w=Object(g.createMuiTheme)({palette:{primary:{light:I.a[300],main:I.a[500],dark:I.a[700]},secondary:{light:v.a[300],main:v.a[500],dark:v.a[700]}},typography:{useNextVariants:!0}});var C=function(e){return function(t){return r.a.createElement(g.MuiThemeProvider,{theme:w},r.a.createElement(A.a,null),r.a.createElement(e,t))}},D=n(112),x=n.n(D),N=n(113),L=n.n(N),_=n(24),T=n.n(_),S=n(34),G=n.n(S),M=n(114),F=n.n(M),B=function(e){function t(){return Object(p.a)(this,t),Object(h.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props.classes;return r.a.createElement("div",{className:e.root},r.a.createElement(x.a,{position:"static"},r.a.createElement(L.a,null,r.a.createElement(G.a,{className:e.menuButton,color:"inherit","aria-label":"Menu"},r.a.createElement(F.a,null)),r.a.createElement(E.a,{variant:"h6",color:"inherit",className:e.grow},"Shopping List"),r.a.createElement(T.a,{color:"inherit"},"Login"))))}}]),t}(a.Component),H=Object(g.withStyles)({root:{flexGrow:1},grow:{flexGrow:1},menuButton:{marginLeft:-12,marginRight:20}})(B),R=n(115),W=n.n(R),V=n(118),q=n.n(V),J=n(117),K=n.n(J),P=n(116),z=n.n(P),Q=n(120),U=n.n(Q),X=n(119),Y=n.n(X),Z=n(121),$=n.n(Z),ee=function(e){function t(){var e,n;Object(p.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(h.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(r)))).handleOpenInfo=function(e){n.props.handleOpenInfo(e)},n.handleDeleteItem=function(e){n.props.handleDeleteItem(e)},n.handleToggle=function(e){return function(){var t=n.props,a=t.checked,r=t.handleCheckItem,c=a.indexOf(e),l=Object(u.a)(a);-1===c?l.push(e):l.splice(c,1),r(l)}},n}return Object(b.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.list,a=t.classes,c=t.checked,l=n.map(function(t,n){return r.a.createElement(W.a,{key:n,role:void 0,dense:!0,button:!0,onClick:e.handleToggle(t)},r.a.createElement(z.a,{checked:-1!==c.indexOf(t),tabIndex:-1,disableRipple:!0}),r.a.createElement(K.a,{primary:t.name}),r.a.createElement(q.a,null,r.a.createElement(G.a,{"aria-label":"Info",onClick:function(){return e.handleOpenInfo(n)}},r.a.createElement(Y.a,{classes:{badge:a.badge},color:"primary",variant:"dot",invisible:!t.info},r.a.createElement(U.a,null))),r.a.createElement(G.a,{"aria-label":"Delete",onClick:function(){return e.handleDeleteItem(n)}},r.a.createElement($.a,null))))});return r.a.createElement("div",{className:a.root},l)}}]),t}(r.a.Component),te=Object(o.b)(function(e){return{list:e.list,checked:e.checked}},function(e){return{handleOpenInfo:function(t){return e({type:"INFO_DIALOG",index:t})},handleCheckItem:function(t){return e({type:"HANDLE_CHECK",newChecked:t})},handleDeleteItem:function(t){return e({type:"DELETE_ITEM",index:t})}}})(Object(g.withStyles)(function(e){return{root:{listStyleType:"none",width:"100%",maxWidth:500,minWidth:300,backgroundColor:e.palette.background.paper,display:"flex",flexDirection:"column"},badge:{top:"15%",right:"15%",width:"40%",height:"40%",border:"2px solid ".concat("light"===e.palette.type?e.palette.grey[200]:e.palette.grey[900])}}})(ee)),ne=n(52),ae=n.n(ne),re=n(53),ce=n.n(re),le=n(122),ie=n.n(le),oe=n(123),ue=n.n(oe),se=n(54),de=n.n(se),pe=function(e){function t(){return Object(p.a)(this,t),Object(h.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e,t=this.props,n=t.openInfo,a=t.handleOpenInfo,c=t.list,l=t.activeInfo;return e=c[l]?c[l].info:null,r.a.createElement(ae.a,{open:n,onClose:a},r.a.createElement(ce.a,null,"More info"),r.a.createElement(ie.a,null,r.a.createElement(ue.a,null,e)),r.a.createElement(de.a,null,r.a.createElement(T.a,{color:"primary",onClick:a},"Close")))}}]),t}(a.Component),me=Object(o.b)(function(e){return{openInfo:e.openInfo,list:e.list,activeInfo:e.activeInfo}},function(e){return{handleOpenInfo:function(){return e({type:"INFO_DIALOG"})}}})(pe),he=n(76),fe=n.n(he),be=function(e){function t(){var e,n;Object(p.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(h.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(r)))).state={name:"",info:""},n.handleCloseAdd=function(){n.props.handleAddItem(n.state),n.props.handleOpenAdd(),n.setState({name:"",info:""})},n.changeNewItem=function(e){n.setState({name:e.target.value})},n.changeNewItemInfo=function(e){n.setState({info:e.target.value})},n}return Object(b.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props,t=e.classes,n=e.openAdd;return r.a.createElement(ae.a,{open:n,onClose:this.handleCloseAdd},r.a.createElement(ce.a,null,"Add a new product"),r.a.createElement(fe.a,{required:!0,id:"outlined-required",label:"New item",defaultValue:"",className:t.textField,margin:"normal",variant:"outlined",onChange:this.changeNewItem}),r.a.createElement(fe.a,{id:"outlined",label:"Additional info",defaultValue:"",className:t.textField,margin:"normal",variant:"outlined",onChange:this.changeNewItemInfo}),r.a.createElement(de.a,null,r.a.createElement(T.a,{color:"primary",onClick:this.handleCloseAdd},"Add")))}}]),t}(a.Component),Oe=Object(o.b)(function(e){return{openAdd:e.openAdd}},function(e){return{handleOpenAdd:function(){return e({type:"ADD_DIALOG"})},handleAddItem:function(t){return e({type:"ADD_ITEM",newItem:t})}}})(Object(g.withStyles)(function(e){return{textField:{marginLeft:e.spacing.unit,marginRight:e.spacing.unit}}})(be)),Ee=function(e){function t(){return Object(p.a)(this,t),Object(h.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props,t=e.classes,n=e.handleOpenAdd;return r.a.createElement("div",{className:t.checkList},r.a.createElement(te,null),r.a.createElement(me,null),r.a.createElement(Oe,null),r.a.createElement(T.a,{color:"primary",onClick:n},"Add new item"))}}]),t}(a.Component),ge=Object(o.b)(function(e){return{openInfo:e.openInfo}},function(e){return{handleOpenAdd:function(){return e({type:"ADD_DIALOG"})}}})(Object(g.withStyles)(function(e){return{root:{width:"100%",maxWidth:500,minWidth:300,backgroundColor:e.palette.background.paper},textField:{marginLeft:e.spacing.unit,marginRight:e.spacing.unit}}})(Ee)),je=function(e){function t(){return Object(p.a)(this,t),Object(h.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props.classes;return r.a.createElement("div",{className:e.root},r.a.createElement(H,null),r.a.createElement(E.a,{variant:"h4",gutterBottom:!0},"Check items that you need to buy"),r.a.createElement("div",{className:e.content},r.a.createElement(ge,null)))}}]),t}(a.Component),Ie=C(Object(g.withStyles)(function(e){return{root:{textAlign:"center"},content:{display:"flex",justifyContent:"center"}}})(je)),ye=Object(i.b)(d,{list:[{name:"bread",info:"bread"},{name:"milk",info:""},{name:"potatoes",info:"pota"},{name:"beer",info:""}],activeInfo:0,checked:[0],openInfo:!1,openAdd:!1});l.a.render(r.a.createElement(o.a,{store:ye},r.a.createElement(Ie,null)),document.getElementById("root"))}},[[124,2,1]]]);
//# sourceMappingURL=main.fa686c90.chunk.js.map