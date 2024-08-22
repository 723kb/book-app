import{r as i,j as e,a as c}from"./app-to61IkPx.js";import{A as p}from"./ApplicationLogo-BuY0m3Bm.js";import{q as f}from"./transition-CbLSAliw.js";import{u as j}from"./useTranslation-CGpZo7Ma.js";const h=i.createContext(),x=({children:t})=>{const[r,n]=i.useState(!1),s=()=>{n(o=>!o)};return e.jsx(h.Provider,{value:{open:r,setOpen:n,toggleOpen:s},children:e.jsx("div",{className:"relative",children:t})})},b=({children:t})=>{const{open:r,setOpen:n,toggleOpen:s}=i.useContext(h);return e.jsxs(e.Fragment,{children:[e.jsx("div",{onClick:s,children:t}),r&&e.jsx("div",{className:"fixed inset-0 z-40",onClick:()=>n(!1)})]})},v=({align:t="right",width:r="48",contentClasses:n="py-1 bg-white",children:s})=>{const{open:o,setOpen:m}=i.useContext(h);let a="origin-top";t==="left"?a="ltr:origin-top-left rtl:origin-top-right start-0":t==="right"&&(a="ltr:origin-top-right rtl:origin-top-left end-0");let u="";return r==="48"&&(u="w-48"),e.jsx(e.Fragment,{children:e.jsx(f,{as:i.Fragment,show:o,enter:"transition ease-out duration-200",enterFrom:"opacity-0 scale-95",enterTo:"opacity-100 scale-100",leave:"transition ease-in duration-75",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-95",children:e.jsx("div",{className:`absolute z-50 mt-2 rounded-md shadow-lg ${a} ${u}`,onClick:()=>m(!1),children:e.jsx("div",{className:"rounded-md ring-1 ring-black ring-opacity-5 "+n,children:s})})})})},y=({className:t="",children:r,...n})=>e.jsx(c,{...n,className:"block w-full px-4 py-2 text-start text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out "+t,children:r});x.Trigger=b;x.Content=v;x.Link=y;const l=x;function g({active:t=!1,className:r="",children:n,...s}){return e.jsx(c,{...s,className:"inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium leading-5 transition duration-150 ease-in-out focus:outline-none "+(t?"border-indigo-400 text-gray-900 focus:border-indigo-700 ":"border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:text-gray-700 focus:border-gray-300 ")+r,children:n})}function d({active:t=!1,className:r="",children:n,...s}){return e.jsx(c,{...s,className:`w-full flex items-start ps-3 pe-4 py-2 border-l-4 ${t?"border-indigo-400 text-indigo-700 bg-indigo-50 focus:text-indigo-800 focus:bg-indigo-100 focus:border-indigo-700":"border-transparent text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300"} text-base font-medium focus:outline-none transition duration-150 ease-in-out ${r}`,children:n})}function L({user:t,header:r,children:n}){const{t:s}=j(),[o,m]=i.useState(!1);return e.jsxs("div",{className:"min-h-screen bg-gray-100",children:[e.jsxs("nav",{className:"bg-white border-b border-gray-100",children:[e.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:e.jsxs("div",{className:"flex justify-between h-16",children:[e.jsxs("div",{className:"flex",children:[e.jsx("div",{className:"shrink-0 flex items-center",children:e.jsx(c,{href:"/",children:e.jsx(p,{className:"block h-9 w-auto fill-current text-gray-800"})})}),e.jsx("div",{className:"hidden space-x-8 sm:-my-px sm:ms-10 sm:flex",children:e.jsx(g,{href:route("dashboard"),active:route().current("dashboard"),children:s("Dashboard")})}),e.jsx("div",{className:"hidden space-x-8 sm:-my-px sm:ms-10 sm:flex",children:e.jsx(g,{href:route("books.index"),active:route().current("books.index"),children:"Books"})})]}),e.jsx("div",{className:"hidden sm:flex sm:items-center sm:ms-6",children:e.jsx("div",{className:"ms-3 relative",children:e.jsxs(l,{children:[e.jsx(l.Trigger,{children:e.jsx("span",{className:"inline-flex rounded-md",children:e.jsxs("button",{type:"button",className:"inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150",children:[t.name,e.jsx("svg",{className:"ms-2 -me-0.5 h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:e.jsx("path",{fillRule:"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",clipRule:"evenodd"})})]})})}),e.jsxs(l.Content,{children:[e.jsx(l.Link,{href:route("profile.edit"),children:s("Profile")}),e.jsx(l.Link,{href:route("logout"),method:"post",as:"button",children:s("Log Out")})]})]})})}),e.jsx("div",{className:"-me-2 flex items-center sm:hidden",children:e.jsx("button",{onClick:()=>m(a=>!a),className:"inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out",children:e.jsxs("svg",{className:"h-6 w-6",stroke:"currentColor",fill:"none",viewBox:"0 0 24 24",children:[e.jsx("path",{className:o?"hidden":"inline-flex",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M4 6h16M4 12h16M4 18h16"}),e.jsx("path",{className:o?"inline-flex":"hidden",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M6 18L18 6M6 6l12 12"})]})})})]})}),e.jsxs("div",{className:(o?"block":"hidden")+" sm:hidden",children:[e.jsx("div",{className:"pt-2 pb-3 space-y-1",children:e.jsx(d,{href:route("dashboard"),active:route().current("dashboard"),children:s("Dashboard")})}),e.jsx("div",{className:"pt-2 pb-3 space-y-1",children:e.jsx(d,{href:route("books.index"),active:route().current("books.index"),children:s("Books")})}),e.jsxs("div",{className:"pt-4 pb-1 border-t border-gray-200",children:[e.jsxs("div",{className:"px-4",children:[e.jsx("div",{className:"font-medium text-base text-gray-800",children:t.name}),e.jsx("div",{className:"font-medium text-sm text-gray-500",children:t.email})]}),e.jsxs("div",{className:"mt-3 space-y-1",children:[e.jsx(d,{href:route("profile.edit"),children:s("Profile")}),e.jsx(d,{method:"post",href:route("logout"),as:"button",children:s("Log Out")})]})]})]})]}),r&&e.jsx("header",{className:"bg-white shadow",children:e.jsx("div",{className:"max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8",children:r})}),e.jsx("main",{children:n})]})}export{L as A};
