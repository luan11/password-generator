(this["webpackJsonppassword-generator"]=this["webpackJsonppassword-generator"]||[]).push([[0],{43:function(t,n,e){"use strict";e.r(n);var r=e(25),a=e.n(r),o=e(8),c=e(15),i=e(7),s=e(1),d=e(17),l=e(18),b=e.n(l),u=e(2),g=Object(s.createContext)({});function h(t){var n=t.children,e=Object(s.useState)(""),r=Object(i.a)(e,2),a=r[0],l=r[1],h=Object(s.useState)(!0),p=Object(i.a)(h,2),j=p[0],m=p[1],x=Object(s.useState)(!0),O=Object(i.a)(x,2),f=O[0],v=O[1],y=Object(s.useState)(!0),w=Object(i.a)(y,2),k=w[0],C=w[1],S=Object(s.useState)(!0),q=Object(i.a)(S,2),A=q[0],z=q[1],E=Object(s.useState)(!1),D=Object(i.a)(E,2),F=D[0],G=D[1],L=Object(s.useState)(""),N=Object(i.a)(L,2),I=N[0],J=N[1],P=Object(s.useState)(16),T=Object(i.a)(P,2),R=T[0],U=T[1],Y=Object(s.useState)(""),M=Object(i.a)(Y,2),Z=M[0],$=M[1];function B(t){G(!1),W("custom",!1),""!==I&&(J(""),W("customContent","")),""!==Z&&$(""),m(t),W("letters",t)}function _(t){G(!1),W("custom",!1),""!==I&&(J(""),W("customContent","")),""!==Z&&$(""),v(t),W("uppercase",t)}function H(t){G(!1),W("custom",!1),""!==I&&(J(""),W("customContent","")),""!==Z&&$(""),C(t),W("numbers",t)}function K(t){G(!1),W("custom",!1),""!==I&&(J(""),W("customContent","")),""!==Z&&$(""),z(t),W("special",t)}function Q(){return j||f||k||A||F&&I.length>0}function V(t){if(Q())if(t=t||R,F&&I.length>0){var n=Object(d.a)(I),e=new RegExp("[".concat(n,"]{").concat(t,"}")),r=new b.a(e).gen();$(r)}else{var a="";j&&(a+="a-z"),f&&(a+="A-Z"),k&&(a+="0-9"),A&&(a+=Object(d.a)("!?@#$%&*_-+=()[]{};:,."));var o=new RegExp("[".concat(a,"]{").concat(t,"}")),c=new b.a(o).gen();$(c)}}function W(t,n){var e,r=new Date,a="password-generator",i=window.localStorage.getItem(a),s=i?JSON.parse(i):{letters:j,uppercase:f,numbers:k,special:A,custom:F,customContent:I,length:R,theme:""},d=Object(c.a)(Object(c.a)({},s),(e={},Object(o.a)(e,t,n),Object(o.a)(e,"updatedAt",r.toISOString()),e)),l=JSON.stringify(d);window.localStorage.setItem(a,l)}return Object(s.useEffect)((function(){var t=window.localStorage.getItem("password-generator"),n=!!t&&JSON.parse(t);if(n){var e=n.letters,r=n.uppercase,a=n.numbers,o=n.special,c=n.custom,i=n.customContent,s=n.length,d=n.theme;if(m(e),v(r),C(a),z(o),G(c),J(i),U(s),l(d),d){var b=document.querySelector("body");b&&b.classList.add(d)}}}),[]),Object(u.jsx)(g.Provider,{value:{theme:a,letters:j,uppercase:f,numbers:k,special:A,custom:F,customContent:I,length:R,generated:Z,handleTheme:function(t){l(t),W("theme",t);var n=document.querySelector("body");n&&(t?n.classList.add(t):n.removeAttribute("class"))},toggleLetters:B,toggleUppercase:_,toggleNumbers:H,toggleSpecial:K,toggleCustom:function(t){B(!1),_(!1),H(!1),K(!1),""!==Z&&$(""),G(t),W("custom",t)},handleCustomContent:function(t){J(t),W("customContent",t)},handleLength:function(t){U(t),W("length",t),V(t)},hasGenerated:function(){return Z.length>0},isAbleToGenerate:Q,generate:V},children:n})}function p(){var t=Object(s.useContext)(g);if("undefined"===typeof t)throw new Error("You have to use usePasswordContext inside <PasswordProvider />");return Object(c.a)({},t)}var j,m,x,O,f,v=e(3),y=e(4),w=Object(y.a)(j||(j=Object(v.a)(["\n\t* {\n\t\tmargin: 0;\n\t\tpadding: 0;\n\t\tbox-sizing: border-box;\n\t}\n\n\t:root {\n\t\t--acqua-green: #19A6A5;\n\t\t--acqua-green-dark: #283038;\n\t\t--light-green: #A8FE75;\n\n\t\t--body: #1d2227;\n\n\t\t--container: #1a1e21;\n\n\t\t--heading: #C2C2C2;\n\t\t--text: #D9D9D9;\n\t}\n\n\tbody {\n\t\tfont-family: 'Ubuntu Mono', monospace;\n\t\tbackground: var(--body);\n\n\t\t&.light {\n\t\t\t--acqua-green: #2c6f6e;\n\t\t\t--acqua-green-dark: #DEDEDE;\n\t\t\t--light-green: #19A6A5;\n\n\t\t\t--body: #FAFAFA;\n\n\t\t\t--container: #F0F0F0;\n\n\t\t\t--heading: #1a1e21;\n\t\t\t--text: #1d2227;\n\t\t}\n\t}\n\n\tbutton,\n\tinput,\n\ttextarea,\n\tselect {\n\t\tfont-family: 'Ubuntu Mono', monospace;\n\t}\n\n\t.hidden {\n\t\tdisplay: none;\n\t}\n"]))),k=e(14),C=e(21),S=y.b.header(m||(m=Object(v.a)(["\n\twidth: 100%;\n\tpadding: 1rem;\n\tbackground: var(--container);\n\tdisplay: flex;\n\tjustify-content: space-around;\n\talign-items: center;\n\n\t@media (max-width: 480px) {\n\t\tjustify-content: space-between;\n\t}\n"]))),q=y.b.h1(x||(x=Object(v.a)(["\n\tletter-spacing: 0.15rem;\n\ttext-align: center;\n\tcolor: var(--light-green);\n\tmargin: 0;\n\tline-height: 100%;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\n\t@media (max-width: 480px) {\n\t\tfont-size: 1.35rem;\n\t}\n\n\t>span {\n\t\tdisplay: inline-block;\n\t\tcolor: var(--acqua-green);\n\t\tmargin-left: 0.25rem;\n\t}\n"]))),A=y.b.div(O||(O=Object(v.a)(["\n\tmargin-left: 1rem;\n"]))),z=y.b.button(f||(f=Object(v.a)(["\n\tbackground: transparent;\n\tborder: 0;\n\tpadding: 0;\n\tfont-size: 2rem;\n\tcolor: var(--text);\n\tcursor: pointer;\n\ttransition: all .35s;\n\tline-height: 100%;\n\n\t&:hover {\n\t\tcolor: var(--light-green);\n\t}\n"])));function E(){var t=p(),n=t.theme,e=t.handleTheme;return Object(u.jsxs)(S,{children:[Object(u.jsxs)(q,{children:[Object(u.jsx)(k.b,{}),Object(u.jsx)("span",{children:"Password Generator"})]}),Object(u.jsxs)(A,{children:[Object(u.jsx)(z,{type:"button",className:"light"===n?"":"hidden",onClick:function(){return e("")},children:Object(u.jsx)(C.a,{})}),Object(u.jsx)(z,{type:"button",className:"light"!==n?"":"hidden",onClick:function(){return e("light")},children:Object(u.jsx)(C.b,{})})]})]})}var D,F=e(6),G=y.b.label(D||(D=Object(v.a)(['\n\twidth: 100%;\n\tcolor: var(--text);\n\tfont-weight: 700;\n\tdisplay: flex;\n\tjustify-content: flex-start;\n\talign-items: center;\n\tcursor: pointer;\n\tflex-wrap: wrap;\n\n\t&:not(:last-child) {\n\t\tmargin-bottom: 1rem;\n\t}\n\n\t>input[type="checkbox"] {\n\t\tdisplay: none;\n\n\t\t&:checked {\n\t\t\t~ svg {\n\t\t\t\tcolor: var(--light-green);\n\n\t\t\t\t&:first-of-type {\n\t\t\t\t\tdisplay: none;\n\t\t\t\t}\n\n\t\t\t\t&:last-of-type {\n\t\t\t\t\tdisplay: block;\n\t\t\t\t}\n\t\t\t}\t\n\n\t\t\t~ input[type="text"] {\n\t\t\t\tdisplay: block;\n\t\t\t}\n\t\t}\n\t}\n\n\t>svg {\n\t\tmargin-right: 0.75rem;\n\t\tfont-size: 1.5rem;\n\n\t\t&:last-of-type {\n\t\t\tdisplay: none;\n\t\t}\n\t}\n\n\t>input[type="text"] {\n\t\tdisplay: none;\n\t\twidth: 100%;\n\t\tmargin-top: 0.5rem;\n\t\tborder: 1px solid #283038;\n\t\tcolor: var(--text);\n\t\tpadding: 0.75rem 1rem;\n\t\tborder-radius: 4px;\n\t\tbackground: var(--body);\n\t\tfont-size: 1rem;\n\t\ttransition: all .35s;\n\n\t\t&:not(:placeholder-shown) {\n\t\t\tborder-color: var(--light-green);\n\t\t}\n\t}\n'])));function L(){var t=p(),n=t.letters,e=t.uppercase,r=t.numbers,a=t.special,o=t.custom,c=t.customContent,i=t.toggleLetters,s=t.toggleUppercase,d=t.toggleNumbers,l=t.toggleSpecial,b=t.toggleCustom,g=t.handleCustomContent;return Object(u.jsxs)("div",{children:[Object(u.jsx)("h2",{children:"Options"}),Object(u.jsxs)(G,{children:[Object(u.jsx)("input",{type:"checkbox",checked:n,onChange:function(t){return i(t.target.checked)}}),Object(u.jsx)(F.a,{}),Object(u.jsx)(F.b,{}),"[a-z]"]}),Object(u.jsxs)(G,{children:[Object(u.jsx)("input",{type:"checkbox",checked:e,onChange:function(t){return s(t.target.checked)}}),Object(u.jsx)(F.a,{}),Object(u.jsx)(F.b,{}),"[A-Z]"]}),Object(u.jsxs)(G,{children:[Object(u.jsx)("input",{type:"checkbox",checked:r,onChange:function(t){return d(t.target.checked)}}),Object(u.jsx)(F.a,{}),Object(u.jsx)(F.b,{}),"[0-9]"]}),Object(u.jsxs)(G,{children:[Object(u.jsx)("input",{type:"checkbox",checked:a,onChange:function(t){return l(t.target.checked)}}),Object(u.jsx)(F.a,{}),Object(u.jsx)(F.b,{}),"Special (?!@#$%...)"]}),Object(u.jsxs)(G,{children:[Object(u.jsx)("input",{type:"checkbox",checked:o,onChange:function(t){return b(t.target.checked)}}),Object(u.jsx)(F.a,{}),Object(u.jsx)(F.b,{}),"Custom",Object(u.jsx)("input",{type:"text",placeholder:"Your custom...",value:c,onInput:function(t){return g(t.currentTarget.value)}})]})]})}var N,I,J,P,T,R=e(29),U=e(28),Y=y.b.h4(N||(N=Object(v.a)(["\n\tcolor: var(--text);\n\tmargin-bottom: 1rem;\n\n\t>span {\n\t\tcolor: var(--light-green);\n\t}\n\n\t+ div {\n\t\twidth: 100%;\n\t}\n"]))),M=y.b.div(I||(I=Object(v.a)(["\n\tposition: relative;\n\twidth: 100%;\n\tmargin: 2rem 0;\n\n\t>button {\n\t\tposition: absolute;\n\t\tright: 0;\n\t\tbottom: 0;\n\t}\n"]))),Z=y.b.input(J||(J=Object(v.a)(["\n\tdisplay: block;\n\twidth: 100%;\n\tmargin-top: 0.5rem;\n\tborder: 1px solid var(--acqua-green-dark);\n\tcolor: var(--text);\n\tpadding: 0.75rem 1rem;\n\tborder-radius: 4px;\n\tbackground: var(--body);\n\tfont-size: 1rem;\n\ttransition: all .35s;\n\toutline: none;\n\n\t&:not(:placeholder-shown) {\n\t\tborder-color: var(--light-green);\n\t}\n\n\t&:read-only {\n\t\tcursor: default;\n\t}\n"]))),$=y.b.button(P||(P=Object(v.a)(["\n\tcolor: var(--acqua-green-dark);\n\tpadding: 0.75rem 1rem;\n\tbackground: var(--light-green);\n\tborder: 1px solid var(--light-green);\n\tborder-radius: 4px;\n\tline-height: 100%;\n\tfont-size: 1rem;\n\tcursor: pointer;\n\tfont-weight: 700;\n\tdisplay: flex;\n\talign-items: center;\n\ttext-align: center;\n\tjustify-content: center;\n\ttransition: all .45s;\n\n\t&:hover {\n\t\tbackground-color: var(--acqua-green);\n\t\tborder-color: var(--acqua-green);\n\t}\n\n\t>span {\n\t\tdisplay: inline-block;\n\t\tmargin-left: 0.5rem;\n\t}\n\n\t&:disabled {\n\t\tcolor: var(--text);\n\t\tbackground: var(--acqua-green-dark);\n\t\tborder-color: var(--acqua-green-dark);\n\t\tcursor: default;\n\t}\n"])));function B(){var t=p(),n=t.length,e=t.generated,r=t.handleLength,a=t.hasGenerated,o=t.isAbleToGenerate,c=t.generate,i=Object(s.useRef)(null);return Object(u.jsxs)("div",{children:[Object(u.jsx)("h2",{children:"Generate"}),Object(u.jsxs)(Y,{children:["Length ",Object(u.jsx)("span",{children:n})]}),Object(u.jsx)(R.a,{axis:"x",styles:{track:{backgroundColor:"var(--body)"},active:{backgroundColor:"var(--light-green)"}},xstep:2,xmin:4,xmax:128,x:n,onChange:function(t){var n=t.x;return r(n)}}),Object(u.jsxs)(M,{children:[Object(u.jsx)(Z,{ref:i,type:"text",readOnly:!0,placeholder:"Your generated password...",value:e}),Object(u.jsx)($,{type:"button",disabled:!a(),onClick:function(){var t=i.current;t&&(t.select(),t.setSelectionRange(0,99999),document.execCommand("copy"))},children:Object(u.jsx)(U.a,{})})]}),Object(u.jsxs)($,{type:"button",disabled:!o(),style:{width:"100%"},onClick:function(){return c()},children:[Object(u.jsx)(k.a,{}),Object(u.jsx)("span",{children:"Generate"})]})]})}var _=y.b.div(T||(T=Object(v.a)(["\n\twidth: 100%;\n\tmargin: 0 auto;\n\tpadding: 3rem 1rem;\n\n\t@media (min-width: 576px) {\n\t\twidth: 540px;\n\t}\n\n\t@media (min-width: 768px) {\n\t\twidth: 720px;\n\t}\n\n\t@media (min-width: 992px) {\n\t\tpadding-top: 6rem;\n\t\tpadding-bottom: 6rem;\n\t\twidth: 960px;\n\t\theight: calc(100vh - 80px);\n\t\tdisplay: grid;\n\t\tgrid-template-columns: repeat(2, 1fr);\n\t\tcolumn-gap: 2rem;\n\t\talign-items: flex-start;\n\n\t\t>div {\n\t\t\tmargin-bottom: 0;\n\t\t}\n\t}\n\n\t@media (min-width: 1140px) {\n\t\twidth: 1140px;\n\t}\n\n\t@media (min-width: 1320px) {\n\t\twidth: 1320px;\n\t}\n\n\t>div {\n\t\tbackground: var(--container);\n\t\tpadding: 2rem 4rem;\n\t\tborder-radius: 4px;\n\t\tbox-shadow: 2px 4px 6px rgba(0, 0, 0, 0.15);\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\talign-items: flex-start;\n\t\tmargin-bottom: 2rem;\n\n\t\t@media (max-width: 991px) {\n\t\t\tpadding: 1.5rem 3rem;\n\t\t}\n\n\t\t.light & {\n\t\t\tbox-shadow: none;\n\t\t\tborder: 1px solid var(--acqua-green-dark);\n\t\t}\n\n\t\t>h2 {\n\t\t\twidth: 100%;\n\t\t\tcolor: var(--heading);\n\t\t\tborder-bottom: 1px solid var(--heading);\n\t\t\tpadding-bottom: 1.5rem;\n\t\t\tmargin-bottom: 1.5rem;\n\t\t}\n\t}\n"])));function H(){return Object(u.jsxs)(_,{children:[Object(u.jsx)(L,{}),Object(u.jsx)(B,{})]})}var K=function(){return Object(u.jsxs)(h,{children:[Object(u.jsx)(w,{}),Object(u.jsx)(E,{}),Object(u.jsx)(H,{})]})};a.a.render(Object(u.jsx)(K,{}),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.547421ba.chunk.js.map