(this["webpackJsonpreact-gdrive-image-viewer"]=this["webpackJsonpreact-gdrive-image-viewer"]||[]).push([[0],{15:function(e,t,n){},17:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var c=n(3),a=n(8),i=n.n(a),s=n(6),r=n.n(s),o=n(9),l=n(5),d=n(20),j=n(21),u=(n(15),n(1));var b=function(e){var t=e.keys,n=e.options,a=Object(c.useState)([]),i=Object(l.a)(a,2),s=i[0],b=i[1],m=Object(c.useState)({}),h=Object(l.a)(m,2),p=h[0],g=h[1],O=Object(c.useState)(!1),f=Object(l.a)(O,2),v=f[0],x=f[1],y=Object(c.useState)(!1),w=Object(l.a)(y,2),k=w[0],C=w[1],I=Object(c.useState)(!1),S=Object(l.a)(I,2),N=S[0],E=S[1],B=Object(c.useState)(!1),D=Object(l.a)(B,2),q=D[0],F=D[1],G=Object(c.useState)(null),R=Object(l.a)(G,2),W=R[0],z=R[1],H=Object(c.useState)(null),J=Object(l.a)(H,2),X=J[0],_=J[1],A=Object(c.useState)(null),K=Object(l.a)(A,2),L=K[0],M=K[1],Q=t.gkey,T="https://www.googleapis.com/drive/v2/files?q=%27",V="%27+in+parents&key=",$="http://drive.google.com/uc?export=view&id=";function P(e){return Object(u.jsx)("div",{children:Object(u.jsxs)("div",{id:"modal-container",className:"modal",children:[Object(u.jsx)("span",{className:"close",children:"\xd7"}),Object(u.jsx)("img",{className:"modal-content",id:"curr-modal",alt:""}),Object(u.jsx)("div",{id:"caption"})]})})}Object(c.useEffect)((function(){function e(){return(e=Object(o.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(T+t.dirId+V+Q).then((function(e){return e.json()})).then((function(e){b(e.items)})).catch((function(e){console.log(e)}));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}(),function(e){e.style&&g(e.style);e.onClick&&(E(!0),e.onClick.newWindow&&C(!0),e.onClick.modal&&F(!0));e.hover&&x(!0);e.attachClass&&z(e.attachClass);e.attachId&&_(e.attachId);e.exclude&&M(e.exclude)}(n)}),[n,t,Q]);var U=function(e,t,c,a,i){return Object(u.jsx)("div",{className:n.imageContainerClass,children:!c&&Object(u.jsx)("img",{style:p,className:(N?" gd-pointer ":"")+" gd-img "+(v?" gd-pointer gd-hover ":"")+e,onClick:function(){q&&function(e){var t=document.getElementById("modal-container");document.getElementById("curr-modal").src=e,t.style.display="block",document.getElementsByClassName("close")[0].onclick=function(){t.style.display="none"}}($+a.id)},src:$+a.id,id:t||null,alt:a.title},i)},i)};return Object(u.jsxs)("div",{className:n.parentContainerClass,children:[q&&Object(u.jsx)(P,{}),s&&s.map((function(e,t){var n=j.a("","title",e);return null!=e.title.match(/\.(jpeg|jpg|gif|png)$/)?function(e,t,n,c,a,i,s){return d.a(c)?U(e,t,n,i,s):Object(u.jsx)("a",{href:c,target:a,children:U(e,t,n,i,s)})}(j.a("",n,W),j.a("",n,X),j.a("",n,L),!q&&N?$+e.id:"",k?"_blank":"",e,t):Object(u.jsx)(u.Fragment,{})}))]})},m=(n(17),function(){var e={gkey:"AIzaSyBB4j8mb7qH8Mo-EThFjGoQWp7vhqzaDjs",dirId:"1HbRyDdXLnhmnDRj4n8eXnexKbEr2bw1N"};return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h1",{children:"Example React-GDrive-Image-Viewer"}),Object(u.jsx)(b,{keys:e,options:{style:{width:"150px",height:"150px"},onClick:{modal:!0,newWindow:!1},exclude:{"1.jpg":!0},attachClass:{"2.jpg":"test"},attachId:{"2.jpg":"test2"},hover:!0,imageContainerClass:"inline",parentContainerClass:"main-content"}}),Object(u.jsxs)("a",{className:"text",rel:"noopener noreferrer",href:"https://drive.google.com/drive/u/2/folders/".concat(e.dirId),target:"_blank",children:["Open folder on Google Drive with ID: ",e.dirId]})]})});i.a.render(Object(u.jsx)(m,{}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.1ea47aeb.chunk.js.map