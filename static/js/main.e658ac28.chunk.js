(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{224:function(e,t,n){e.exports=n(365)},229:function(e,t,n){},230:function(e,t,n){},365:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(23),o=n.n(c),i=(n(229),n(46)),l=n(139),s=n(140),m=n(147),u=n(141),d=n(148),h=n(85),g=n(45),E=n(42),f=n(59),w=n(6),p=(n(230),n(143)),y=n.n(p),b=function(e){var t=e.onHelp;return r.a.createElement(w.l,{container:!0,direction:"row",alignItems:"center",spacing:16},r.a.createElement(w.l,{item:!0},r.a.createElement(w.q,{variant:"title"},"Contract-Based Account Tracker by Tasit")),r.a.createElement(w.l,{item:!0},r.a.createElement(w.m,{"aria-label":"Delete",color:"secondary",onClick:function(){return t&&t()}},r.a.createElement(y.a,null))))},B=n(26),v=Object(B.withStyles)(function(e){return Object(B.createStyles)({errorText:{fontFamily:"Inconsolata, Monaco, monospace"}})})(function(e){var t=e.classes,n=e.error;return r.a.createElement(w.l,{container:!0,direction:"column"},r.a.createElement(w.l,{item:!0},r.a.createElement(w.q,{variant:"h6",component:"h3",className:t.id},"Error")),r.a.createElement(w.l,{item:!0},r.a.createElement(w.l,{container:!0},r.a.createElement(w.q,{mode:"paragraph",color:"secondary"},r.a.createElement("pre",{className:t.errorText},JSON.stringify(n,void 0,2))))))}),O=Object(B.withStyles)(function(e){return Object(B.createStyles)({actionArea:{maxWidth:300},id:{textOverflow:"ellipsis",overflow:"hidden"}})})(function(e){var t=e.classes,n=e.id;return r.a.createElement(w.l,{item:!0},r.a.createElement(w.b,null,r.a.createElement(w.c,{className:t.actionArea},r.a.createElement(w.d,null,r.a.createElement(w.q,{variant:"h6",component:"h3",className:t.id},n)))))}),j=Object(B.withStyles)(function(e){return Object(B.createStyles)({title:{marginTop:2*e.spacing.unit}})})(function(e){var t=e.classes,n=e.contractBasedAccounts,a=e.name;return r.a.createElement(w.l,{container:!0,direction:"column",spacing:16},r.a.createElement(w.l,{item:!0},r.a.createElement(w.q,{variant:"title",className:t.title},a),r.a.createElement(w.q,{color:"textSecondary"},n.length,5===n.length?"+":""," ","contract-based accounts")),r.a.createElement(w.l,{item:!0},r.a.createElement(w.l,{container:!0,direction:"row",spacing:16},n.map(function(e){return r.a.createElement(O,Object.assign({key:e.id},e))}))))}),S=Object(B.withStyles)(function(e){return Object(B.createStyles)({orderBySelect:{marginLeft:e.spacing.unit}})})(function(e){var t=e.classes,n=e.onToggleWithName,a=e.onToggleWithImage,c=e.onOrderBy,o=e.withName,i=e.withImage,l=e.orderBy;return r.a.createElement(w.l,{item:!0},r.a.createElement(w.l,{container:!0,direction:"row"},r.a.createElement(w.k,{control:r.a.createElement(w.e,{checked:o,onChange:function(e){return n&&n()}}),label:"With names"}),r.a.createElement(w.k,{control:r.a.createElement(w.e,{checked:i,onChange:function(e){return a&&a()}}),label:"With images"}),r.a.createElement(w.k,{control:r.a.createElement(w.p,{className:t.orderBySelect,value:l,onChange:function(e){return c&&c(e.target.value)}},r.a.createElement(w.o,{value:"id"},"ID")),label:"Order By:",labelPlacement:"start"})))});function k(){var e=Object(h.a)(["\n  query contractBasedAccounts(\n    $where: ContractBasedAccount_filter!\n    $orderBy: ContractBasedAccount_orderBy!\n    $first: Int\n  ) {\n    contractBasedAccounts(\n      first: $first\n      where: $where\n      orderBy: $orderBy\n      orderDirection: asc\n    ) {\n      id\n    }\n  }\n"]);return k=function(){return e},e}function A(){var e=Object(h.a)(["\n  query contractBasedAccounts(\n    $where: ContractBasedAccount_filter!\n    $orderBy: ContractBasedAccount_orderBy!\n    $first: Int\n  ) {\n    contractBasedAccounts(\n      first: $first\n      where: $where\n      orderBy: $orderBy\n      orderDirection: asc\n    ) {\n      id\n    }\n  }\n"]);return A=function(){return e},e}var N=new g.a({uri:"https://api.thegraph.com/subgraphs/name/tasitlabs/gnosis-safe",cache:new E.a}),I=new g.a({uri:"https://api.thegraph.com/subgraphs/name/tasitlabs/argent",cache:new E.a}),C=Object(g.b)(A()),$=Object(g.b)(k()),q=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(m.a)(this,Object(u.a)(t).call(this,e))).toggleHelpDialog=function(){n.setState(function(e){return Object(i.a)({},e,{showHelpDialog:!e.showHelpDialog})})},n.gotoQuickStartGuide=function(){window.location.href="https://tasit.io"},n.state={withImage:!1,withName:!1,orderBy:"id",showHelpDialog:!1},n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.state,n=t.withImage,a=t.withName,c=t.orderBy,o=t.showHelpDialog;return r.a.createElement(f.a,{client:N},r.a.createElement("div",{className:"App"},r.a.createElement(w.l,{container:!0,direction:"column"},r.a.createElement(b,{onHelp:this.toggleHelpDialog}),r.a.createElement(S,{orderBy:c,withImage:n,withName:a,onOrderBy:function(t){return e.setState(function(e){return Object(i.a)({},e,{orderBy:t})})},onToggleWithImage:function(){return e.setState(function(e){return Object(i.a)({},e,{withImage:!e.withImage})})},onToggleWithName:function(){return e.setState(function(e){return Object(i.a)({},e,{withName:!e.withName})})}}),r.a.createElement(w.l,{item:!0},r.a.createElement(w.l,{container:!0},r.a.createElement(f.b,{query:C,variables:{where:{},orderBy:c,first:5}},function(e){var t=e.data,n=e.error;return e.loading?r.a.createElement(w.n,{variant:"query",style:{width:"100%"}}):n?r.a.createElement(v,{error:n}):r.a.createElement(j,{contractBasedAccounts:t.contractBasedAccounts,name:"Gnosis Safe"})}))),r.a.createElement(w.l,{item:!0},r.a.createElement(w.l,{container:!0},r.a.createElement(f.b,{query:$,client:I,variables:{where:{},orderBy:c,first:5}},function(e){var t=e.data,n=e.error;return e.loading?r.a.createElement(w.n,{variant:"query",style:{width:"100%"}}):n?r.a.createElement(v,{error:n}):r.a.createElement(j,{contractBasedAccounts:t.contractBasedAccounts,name:"Argent"})})))),r.a.createElement(w.f,{fullScreen:!1,open:o,onClose:this.toggleHelpDialog,"aria-labelledby":"help-dialog"},r.a.createElement(w.j,{id:"help-dialog"},"What's Tasit?"),r.a.createElement(w.h,null,r.a.createElement(w.i,null,"There's more info about the Tasit project over at tasit.io. Should we take you there now?")),r.a.createElement(w.g,null,r.a.createElement(w.a,{onClick:this.toggleHelpDialog,color:"primary"},"Nah, I'm good"),r.a.createElement(w.a,{onClick:this.gotoQuickStartGuide,color:"primary",autoFocus:!0},"Yes, please")))))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(q,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[224,1,2]]]);
//# sourceMappingURL=main.e658ac28.chunk.js.map