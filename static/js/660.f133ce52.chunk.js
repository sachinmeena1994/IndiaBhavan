"use strict";(self.webpackChunkindia_bhavan=self.webpackChunkindia_bhavan||[]).push([[660],{242:(e,a,s)=>{s.r(a),s.d(a,{default:()=>m});var t=s(555),l=s(43),n=s(472),r=s(877),c=s(115),i=(s(342),s(786)),o=(s(147),s(579));var d=s(204);s(921);const m=()=>{const[e,a]=(0,l.useState)([]),[s,m]=(0,l.useState)(["All"]),[u,x]=(0,l.useState)("All"),[h,b]=(0,l.useState)(""),[g,j]=(0,l.useState)(!1),[p,f]=(0,l.useState)("Manage Menu"),[y,w]=(0,l.useState)(!1),[v,N]=(0,l.useState)(null),[C,k]=(0,l.useState)(!1);(0,l.useEffect)((()=>{(async()=>{const e=(await(0,n.GG)((0,n.rJ)(r.db,"Menu"))).docs.map((e=>(0,t.A)({id:e.id},e.data())));a(e);const s=["All",...new Set(e.map((e=>e.category)))];m(s)})()}),[]);const S=[{name:"Manage Menu",icon:(0,o.jsx)(d.xBk,{})},{name:"Orders",icon:(0,o.jsx)(d.AsH,{})},{name:"Settings",icon:(0,o.jsx)(d.Pcn,{})}],A=e.filter((e=>{const a="All"===u||e.category===u,s=e.name.toLowerCase().includes(h.toLowerCase());return a&&s})),M=[{name:"Name",selector:e=>e.name,sortable:!0},{name:"Price",selector:e=>"$".concat(e.price),sortable:!0},{name:"Category",selector:e=>e.category,sortable:!0},{name:"Actions",cell:e=>(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("button",{onClick:()=>{return a=e,w(!0),N(a),void j(!0);var a},className:"bg-yellow-500 text-white px-2 py-1 rounded-md mr-2",children:"Edit"}),(0,o.jsx)("button",{onClick:()=>(async e=>{if(window.confirm("Are you sure you want to delete this food item?"))try{await(0,n.kd)((0,n.H9)(r.db,"Menu",e)),a((a=>a.filter((a=>a.id!==e)))),c.oR.success("Food item deleted successfully!")}catch(s){c.oR.error("Error deleting food item.")}})(e.id),className:"bg-red-500 text-white px-2 py-1 rounded-md",children:"Delete"})]})}];return(0,o.jsxs)("div",{className:"flex h-screen overflow-hidden",children:[(0,o.jsx)(c.N9,{}),(0,o.jsxs)("aside",{className:"bg-gray-800 text-white h-full p-4 fixed transition-all duration-300 ".concat(C?"w-16":"w-64"," flex flex-col"),children:[(0,o.jsxs)("button",{onClick:()=>k(!C),className:"text-white mb-4 p-2 rounded-md hover:bg-gray-700 transition duration-200 flex items-center justify-between",children:[C?(0,o.jsx)(d.OXb,{size:20}):(0,o.jsx)(d.QCr,{size:20}),!C&&(0,o.jsx)("span",{children:"Close"})]}),(0,o.jsx)("ul",{className:"space-y-4",children:S.map((e=>(0,o.jsxs)("li",{onClick:()=>f(e.name),className:"p-2 rounded cursor-pointer flex items-center transition duration-200 ".concat(p===e.name?"bg-gray-700 text-yellow-400":"hover:bg-gray-700"),children:[(0,o.jsx)("span",{className:"text-xl",children:e.icon}),!C&&(0,o.jsx)("span",{className:"ml-3",children:e.name})]},e.name)))})]}),(0,o.jsx)("div",{className:"flex-1 flex flex-col transition-all duration-300 ".concat(C?"ml-16":"ml-64"),children:(0,o.jsxs)("main",{className:"flex-1 p-6 bg-gray-100 overflow-y-auto",children:[(0,o.jsx)("h2",{className:"text-xl font-bold mb-4",children:p}),"Manage Menu"===p&&(0,o.jsxs)("div",{children:[(0,o.jsx)("button",{onClick:()=>{j(!g),w(!1),N(null)},className:"bg-blue-500 text-white px-4 py-2 rounded-md mb-6",children:g?"Cancel":"Add New Food"}),(0,o.jsxs)("div",{className:"flex items-center gap-4 mb-6",children:[(0,o.jsxs)("div",{children:[(0,o.jsx)("label",{className:"block mb-2 font-semibold",children:"Filter by Category:"}),(0,o.jsx)("select",{value:u,onChange:e=>x(e.target.value),className:"border rounded-md p-2",children:s.map(((e,a)=>(0,o.jsx)("option",{value:e,children:e},a)))})]}),(0,o.jsxs)("div",{className:"flex-1",children:[(0,o.jsx)("label",{className:"block mb-2 font-semibold",children:"Search:"}),(0,o.jsx)("input",{type:"text",value:h,onChange:e=>b(e.target.value),placeholder:"Search by name...",className:"border rounded-md p-2 w-full"})]})]}),(0,o.jsx)("div",{className:"bg-white p-4 rounded-md shadow-md",children:(0,o.jsx)(i.Ay,{title:"Menu Items",columns:M,data:A,pagination:!0,highlightOnHover:!0,striped:!0})})]})]})})]})}}}]);
//# sourceMappingURL=660.f133ce52.chunk.js.map