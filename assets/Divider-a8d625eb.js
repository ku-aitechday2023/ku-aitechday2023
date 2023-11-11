import{g as A,f as C,s as f,h as r,k as D,l as R,m as L,b as W,j as v,n as I,o as $}from"./index-b91ba649.js";function V(i){return A("MuiDivider",i)}C("MuiDivider",["root","absolute","fullWidth","inset","middle","flexItem","light","vertical","withChildren","withChildrenVertical","textAlignRight","textAlignLeft","wrapper","wrapperVertical"]);const j=["absolute","children","className","component","flexItem","light","orientation","role","textAlign","variant"],M=i=>{const{absolute:t,children:e,classes:o,flexItem:s,light:n,orientation:a,textAlign:l,variant:c}=i;return $({root:["root",t&&"absolute",c,n&&"light",a==="vertical"&&"vertical",s&&"flexItem",e&&"withChildren",e&&a==="vertical"&&"withChildrenVertical",l==="right"&&a!=="vertical"&&"textAlignRight",l==="left"&&a!=="vertical"&&"textAlignLeft"],wrapper:["wrapper",a==="vertical"&&"wrapperVertical"]},V,o)},k=f("div",{name:"MuiDivider",slot:"Root",overridesResolver:(i,t)=>{const{ownerState:e}=i;return[t.root,e.absolute&&t.absolute,t[e.variant],e.light&&t.light,e.orientation==="vertical"&&t.vertical,e.flexItem&&t.flexItem,e.children&&t.withChildren,e.children&&e.orientation==="vertical"&&t.withChildrenVertical,e.textAlign==="right"&&e.orientation!=="vertical"&&t.textAlignRight,e.textAlign==="left"&&e.orientation!=="vertical"&&t.textAlignLeft]}})(({theme:i,ownerState:t})=>r({margin:0,flexShrink:0,borderWidth:0,borderStyle:"solid",borderColor:(i.vars||i).palette.divider,borderBottomWidth:"thin"},t.absolute&&{position:"absolute",bottom:0,left:0,width:"100%"},t.light&&{borderColor:i.vars?`rgba(${i.vars.palette.dividerChannel} / 0.08)`:D(i.palette.divider,.08)},t.variant==="inset"&&{marginLeft:72},t.variant==="middle"&&t.orientation==="horizontal"&&{marginLeft:i.spacing(2),marginRight:i.spacing(2)},t.variant==="middle"&&t.orientation==="vertical"&&{marginTop:i.spacing(1),marginBottom:i.spacing(1)},t.orientation==="vertical"&&{height:"100%",borderBottomWidth:0,borderRightWidth:"thin"},t.flexItem&&{alignSelf:"stretch",height:"auto"}),({ownerState:i})=>r({},i.children&&{display:"flex",whiteSpace:"nowrap",textAlign:"center",border:0,"&::before, &::after":{content:'""',alignSelf:"center"}}),({theme:i,ownerState:t})=>r({},t.children&&t.orientation!=="vertical"&&{"&::before, &::after":{width:"100%",borderTop:`thin solid ${(i.vars||i).palette.divider}`}}),({theme:i,ownerState:t})=>r({},t.children&&t.orientation==="vertical"&&{flexDirection:"column","&::before, &::after":{height:"100%",borderLeft:`thin solid ${(i.vars||i).palette.divider}`}}),({ownerState:i})=>r({},i.textAlign==="right"&&i.orientation!=="vertical"&&{"&::before":{width:"90%"},"&::after":{width:"10%"}},i.textAlign==="left"&&i.orientation!=="vertical"&&{"&::before":{width:"10%"},"&::after":{width:"90%"}})),B=f("span",{name:"MuiDivider",slot:"Wrapper",overridesResolver:(i,t)=>{const{ownerState:e}=i;return[t.wrapper,e.orientation==="vertical"&&t.wrapperVertical]}})(({theme:i,ownerState:t})=>r({display:"inline-block",paddingLeft:`calc(${i.spacing(1)} * 1.2)`,paddingRight:`calc(${i.spacing(1)} * 1.2)`},t.orientation==="vertical"&&{paddingTop:`calc(${i.spacing(1)} * 1.2)`,paddingBottom:`calc(${i.spacing(1)} * 1.2)`})),u=R.forwardRef(function(t,e){const o=L({props:t,name:"MuiDivider"}),{absolute:s=!1,children:n,className:a,component:l=n?"div":"hr",flexItem:c=!1,light:h=!1,orientation:x="horizontal",role:p=l!=="hr"?"separator":void 0,textAlign:b="center",variant:m="fullWidth"}=o,w=W(o,j),d=r({},o,{absolute:s,component:l,flexItem:c,light:h,orientation:x,role:p,textAlign:b,variant:m}),g=M(d);return v.jsx(k,r({as:l,className:I(g.root,a),role:p,ref:e,ownerState:d},w,{children:n?v.jsx(B,{className:g.wrapper,ownerState:d,children:n}):null}))});u.muiSkipListHighlight=!0;const T=u;export{T as D};
