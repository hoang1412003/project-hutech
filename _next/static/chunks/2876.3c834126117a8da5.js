"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2876],{72555:function(t,r,e){e.d(r,{C:function(){return a}});class a{constructor(t){this.contractWrapper=t}overrideNextTransaction(t){this.contractWrapper.withTransactionOverride(t)}}},64558:function(t,r,e){e.d(r,{C:function(){return c}});var a=e(60824),n=e(26212);class c{featureName=n.ds.name;constructor(t){this.contractWrapper=t}async get(){let[t,r]=await this.contractWrapper.read("getPlatformFeeInfo",[]);return n.bJ.parseAsync({platform_fee_recipient:t,platform_fee_basis_points:r})}set=(0,a.b)(async t=>{let r=await n.bJ.parseAsync(t);return a.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"setPlatformFeeInfo",args:[r.platform_fee_recipient,r.platform_fee_basis_points]})})}},6726:function(t,r,e){e.d(r,{C:function(){return c}});var a=e(60824),n=e(26212);class c{featureName=n.d6.name;constructor(t){this.contractWrapper=t}async getRecipient(){let t=await this.contractWrapper.read("primarySaleRecipient",[]);return t}setRecipient=(0,a.b)(async t=>a.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"setPrimarySaleRecipient",args:[t]}))}},30756:function(t,r,e){e.d(r,{S:function(){return i}});var a=e(26212),n=e(60824),c=e(32906);class i{get chainId(){return this._chainId}constructor(t,r,e){this.contractWrapper=t,this.storage=r,this.erc721=new c.E(this.contractWrapper,this.storage,e),this._chainId=e}onNetworkUpdated(t){this.contractWrapper.updateSignerOrProvider(t)}getAddress(){return this.contractWrapper.address}async getAll(t){return this.erc721.getAll(t)}async getOwned(t,r){return t&&(t=await (0,a.aP)(t)),this.erc721.getOwned(t,r)}async getOwnedTokenIds(t){return t&&(t=await (0,a.aP)(t)),this.erc721.getOwnedTokenIds(t)}async totalSupply(){return this.erc721.totalCirculatingSupply()}async get(t){return this.erc721.get(t)}async ownerOf(t){return this.erc721.ownerOf(t)}async balanceOf(t){return this.erc721.balanceOf(t)}async balance(){return this.erc721.balance()}async isApproved(t,r){return this.erc721.isApproved(t,r)}transfer=(0,n.b)(async(t,r)=>this.erc721.transfer.prepare(t,r));setApprovalForAll=(0,n.b)(async(t,r)=>this.erc721.setApprovalForAll.prepare(t,r));setApprovalForToken=(0,n.b)(async(t,r)=>n.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"approve",args:[await (0,a.aP)(t),r]}))}},2876:function(t,r,e){e.r(r),e.d(r,{SignatureDrop:function(){return g}});var a=e(2593),n=e(9279),c=e(98197),i=e(26212),s=e(60824),o=e(24942),p=e(69262),h=e(72555),l=e(21009),u=e(64558),d=e(4081),m=e(6726),y=e(33286),f=e(30756),w=e(32906),W=e(40088);e(13550),e(77191),e(54146),e(64063);class g extends f.S{static contractRoles=i.dD;constructor(t,r,e){let a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},n=arguments.length>4?arguments[4]:void 0,c=arguments.length>5?arguments[5]:void 0,s=arguments.length>6&&void 0!==arguments[6]?arguments[6]:new i.cu(t,r,n,a,e);super(s,e,c),this.abi=i.bn.parse(n||[]),this.metadata=new o.C(this.contractWrapper,i.bV,this.storage),this.app=new o.b(this.contractWrapper,this.metadata,this.storage),this.roles=new d.C(this.contractWrapper,g.contractRoles),this.royalties=new l.C(this.contractWrapper,this.metadata),this.sales=new m.C(this.contractWrapper),this.encoder=new p.C(this.contractWrapper),this.estimator=new o.G(this.contractWrapper),this.events=new o.a(this.contractWrapper),this.platformFees=new u.C(this.contractWrapper),this.interceptor=new h.C(this.contractWrapper),this.claimConditions=new y.D(this.contractWrapper,this.metadata,this.storage),this.signature=new w.a(this.contractWrapper,this.storage),this.revealer=new l.D(this.contractWrapper,this.storage,i.cR.name,()=>this.erc721.nextTokenIdToMint()),this.signature=new w.a(this.contractWrapper,this.storage),this.owner=new l.a(this.contractWrapper),this.checkout=new W.a(this.contractWrapper)}onNetworkUpdated(t){this.contractWrapper.updateSignerOrProvider(t)}getAddress(){return this.contractWrapper.address}async totalSupply(){let[t,r]=await Promise.all([this.totalClaimedSupply(),this.totalUnclaimedSupply()]);return t.add(r)}async getAllClaimed(t){let r=a.O$.from(t?.start||0).toNumber(),e=a.O$.from(t?.count||c.D).toNumber(),n=Math.min((await this.totalClaimedSupply()).toNumber(),r+e);return await Promise.all(Array.from(Array(n).keys()).map(t=>this.get(t.toString())))}async getAllUnclaimed(t){let r=a.O$.from(t?.start||0).toNumber(),e=a.O$.from(t?.count||c.D).toNumber(),n=a.O$.from(Math.max((await this.totalClaimedSupply()).toNumber(),r)),i=a.O$.from(Math.min((await this.contractWrapper.read("nextTokenIdToMint",[])).toNumber(),n.toNumber()+e));return await Promise.all(Array.from(Array(i.sub(n).toNumber()).keys()).map(t=>this.erc721.getTokenMetadata(n.add(t).toString())))}async totalClaimedSupply(){return this.erc721.totalClaimedSupply()}async totalUnclaimedSupply(){return this.erc721.totalUnclaimedSupply()}async isTransferRestricted(){let t=await this.contractWrapper.read("hasRole",[(0,i.H)("transfer"),n.d]);return!t}createBatch=(0,s.b)(async(t,r)=>this.erc721.lazyMint.prepare(t,r));async getClaimTransaction(t,r,e){return this.erc721.getClaimTransaction(t,r,e)}claimTo=(0,s.b)(async(t,r,e)=>this.erc721.claimTo.prepare(t,r,e));claim=(0,s.b)(async(t,r)=>this.erc721.claim.prepare(t,r));burn=(0,s.b)(async t=>this.erc721.burn.prepare(t));async prepare(t,r,e){return s.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:t,args:r,overrides:e})}async call(t,r,e){return this.contractWrapper.call(t,r,e)}}},40088:function(t,r,e){e.d(r,{a:function(){return h}});var a=e(26212),n=e(38776);let c="https://paper.xyz/api/2022-08-12/platform/thirdweb",i={[a.aW.Mainnet]:"Ethereum",[a.aW.Goerli]:"Goerli",[a.aW.Polygon]:"Polygon",[a.aW.Mumbai]:"Mumbai",[a.aW.Avalanche]:"Avalanche"};async function s(t,r){let e=((0,n.Z)(r in i,`chainId not supported by paper: ${r}`),i[r]),a=await fetch(`${c}/register-contract?contractAddress=${t}&chain=${e}`),s=await a.json();return(0,n.Z)(s.result.id,"Contract is not registered with paper"),s.result.id}let o={expiresInMinutes:15,feeBearer:"BUYER",sendEmailOnSuccess:!0,redirectAfterPayment:!1};async function p(t,r){let e=await fetch(`${c}/checkout-link-intent`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({contractId:t,...o,...r,metadata:{...r.metadata,via_platform:"thirdweb"},hideNativeMint:!0,hidePaperWallet:!!r.walletAddress,hideExternalWallet:!0,hidePayWithCrypto:!0,usePaperKey:!1})}),a=await e.json();return(0,n.Z)(a.checkoutLinkIntentUrl,"Failed to create checkout link intent"),a.checkoutLinkIntentUrl}class h{constructor(t){this.contractWrapper=t}async getCheckoutId(){return s(this.contractWrapper.address,await this.contractWrapper.getChainID())}async isEnabled(){try{return!!await this.getCheckoutId()}catch(t){return!1}}async createLinkIntent(t){return await p(await this.getCheckoutId(),t)}}}}]);