(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1897],{17753:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/myCards",function(){return n(60571)}])},6566:function(e,t,n){"use strict";n.d(t,{XD:function(){return a},YJ:function(){return s}});let a="0x8A21099e06B3dA6e79cc7B4c88Eee948D3DFBd7f",s="0x901E8f953FeacEFec9944cA17cD03Db2e10C64FE"},60571:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return p}});var a=n(85893),s=n(99273),c=n(99034),i=n.n(c),r=n(6566),d=n(67294),l=n(87536),o=n(11163);let u=e=>{let{nft:t}=e,n=(0,s.SFn)(),c=(0,o.useRouter)(),{contract:d}=(0,s.cqn)(r.YJ,"marketplace-v3"),{contract:u}=(0,s.cqn)(r.XD),{mutateAsync:p}=(0,s.gZ8)(d);async function x(){let e=await (null==u?void 0:u.call("isApprovedForAll",[n,r.YJ]));if(!e){let e=await (null==u?void 0:u.call("setApprovalForAll",[r.YJ,!0]));e&&console.log(e)}return!0}let{register:m,handleSubmit:f}=(0,l.cI)({defaultValues:{nftContractAddress:r.XD,tokenId:null==t?void 0:t.metadata.id,price:"0",startDate:new Date,endDate:new Date}});async function h(e){await x();let t=await p({assetContractAddress:e.nftContractAddress,tokenId:e.tokenId,pricePerToken:e.price,startTimestamp:new Date(e.startDate),endTimestamp:new Date(e.endDate)});return t}return(0,a.jsxs)("div",{className:i().listingInfo,children:[(0,a.jsx)("p",{children:"Start date:"}),(0,a.jsx)("input",{type:"datetime-local",...m("startDate")}),(0,a.jsx)("p",{children:"End date:"}),(0,a.jsx)("input",{type:"datetime-local",...m("endDate")}),(0,a.jsx)("p",{children:"Price:"}),(0,a.jsx)("input",{type:"number",step:.01,...m("price")}),(0,a.jsx)("br",{}),(0,a.jsx)(s.tnh,{contractAddress:r.YJ,action:async()=>{await f(h)()},onSuccess:()=>{console.log("success"),c.push("/marketplace")},children:"List for sale"})]})};function p(){let e=(0,s.SFn)(),{contract:t,isLoading:n}=(0,s.cqn)(r.XD,"edition"),{data:c,isLoading:l}=(0,s.YZw)(t,e);console.log(c);let[o,p]=(0,d.useState)();return(0,a.jsxs)("div",{children:[(0,a.jsx)("h1",{children:"My Items"}),(0,a.jsx)("div",{className:i().grid,children:o?(0,a.jsxs)("div",{className:i().saleCard,children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("button",{onClick:()=>p(void 0),children:"Back"}),(0,a.jsx)("br",{}),(0,a.jsx)(s.CHu,{metadata:o.metadata})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("p",{children:"List card for sale"}),(0,a.jsx)(u,{nft:o})]})]}):n||l?(0,a.jsx)("p",{children:"Loading..."}):null==c?void 0:c.map((e,t)=>(0,a.jsxs)("div",{className:i().nftCard,children:[(0,a.jsx)(s.CHu,{metadata:e.metadata}),(0,a.jsxs)("div",{className:i().myCardInfo,children:[(0,a.jsx)("h3",{children:e.metadata.name}),(0,a.jsxs)("p",{children:["Qty: ",e.quantityOwned]})]}),(0,a.jsx)("button",{onClick:()=>p(e),className:i().saleButton,children:"Sell Item"})]},t))})]})}}},function(e){e.O(0,[6998,9774,2888,179],function(){return e(e.s=17753)}),_N_E=e.O()}]);