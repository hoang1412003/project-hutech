"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1009],{98197:function(t,e,a){a.d(e,{D:function(){return g},F:function(){return l},I:function(){return c},a:function(){return p},b:function(){return h},c:function(){return u},f:function(){return d},g:function(){return y},u:function(){return f}});var r=a(99756),n=a(16441),o=a(2593),s=a(64146),i=a(48764).Buffer;let c=n.arrayify("0x80ac58cd"),p=n.arrayify("0xd9b67a26"),l={name:"Failed to load NFT metadata"};async function d(t,e,a){let s;if(e.startsWith("data:application/json;base64")&&void 0!==i){let a=e.split(",")[1],n=JSON.parse(i.from(a,"base64").toString("utf-8"));return r.C.parse({...n,id:o.O$.from(t).toString(),uri:e})}let c=e.replace("{id}",n.hexZeroPad(o.O$.from(t).toHexString(),32).slice(2));try{s=await a.downloadJSON(c)}catch(n){let r=e.replace("{id}",o.O$.from(t).toString());try{s=await a.downloadJSON(r)}catch(a){console.warn(`failed to get token metadata: ${JSON.stringify({tokenId:t.toString(),tokenUri:e})} -- falling back to default metadata`),s=l}}return r.C.parse({...s,id:o.O$.from(t).toString(),uri:e})}async function u(t,e,n,i){let u;let h=(await a.e(5025).then(a.t.bind(a,25025,19))).default,f=new s.CH(t,h,e),[y,g]=await Promise.all([f.supportsInterface(c),f.supportsInterface(p)]);if(y){let r=(await Promise.resolve().then(a.t.bind(a,34161,19))).default,o=new s.CH(t,r,e);u=await o.tokenURI(n)}else if(g){let r=(await Promise.resolve().then(a.t.bind(a,50266,19))).default,o=new s.CH(t,r,e);u=await o.uri(n)}else throw Error("Contract must implement ERC 1155 or ERC 721.");return u?d(n,u,i):r.C.parse({...l,id:o.O$.from(n).toString(),uri:""})}async function h(t,e){return"string"==typeof t?t:await e.upload(r.a.parse(t))}async function f(t,e,a,n){if(void 0===t.find(t=>"string"!=typeof t))return t;if(void 0===t.find(t=>"object"!=typeof t)){let o=await e.uploadBatch(t.map(t=>r.a.parse(t)),{rewriteFileNames:{fileStartNumber:a||0},onProgress:n?.onProgress});return o}throw Error("NFT metadatas must all be of the same type (all URI or all NFTMetadataInput)")}function y(t){let e=t[0].substring(0,t[0].lastIndexOf("/"));for(let a=0;a<t.length;a++){let r=t[a].substring(0,t[a].lastIndexOf("/"));if(e!==r)throw Error(`Can only create batches with the same base URI for every entry in the batch. Expected '${e}' but got '${r}'`)}return e.replace(/\/$/,"")+"/"}let g=100},21009:function(t,e,a){a.d(e,{C:function(){return w},D:function(){return m},a:function(){return I},c:function(){return b}});var r=a(24942),n=a(60824),o=a(26212),s=a(69262),i=a(29251),c=a(31886),p=a(84243),l=a(16441),d=a(2593),u=a(64146),h=a(99756),f=a(98197),y=a(84648),g=a(28854);class w{featureName=o.d4.name;constructor(t,e){this.contractWrapper=t,this.metadata=e}async getDefaultRoyaltyInfo(){let[t,e]=await this.contractWrapper.read("getDefaultRoyaltyInfo",[]);return o.bH.parseAsync({fee_recipient:t,seller_fee_basis_points:e})}async getTokenRoyaltyInfo(t){let[e,a]=await this.contractWrapper.read("getRoyaltyInfoForToken",[t]);return o.bH.parseAsync({fee_recipient:e,seller_fee_basis_points:a})}setDefaultRoyaltyInfo=(0,n.b)(async t=>{let e=await this.metadata.get(),a=await this.metadata.parseInputMetadata({...e,...t}),o=await this.metadata._parseAndUploadMetadata(a);if((0,r.h)("setContractURI",this.contractWrapper)){let t=new s.C(this.contractWrapper),e=[t.encode("setDefaultRoyaltyInfo",[a.fee_recipient,a.seller_fee_basis_points]),t.encode("setContractURI",[o])];return n.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"multicall",args:[e],parse:t=>({receipt:t,data:()=>this.getDefaultRoyaltyInfo()})})}throw Error("Updating royalties requires implementing ContractMetadata in your contract to support marketplaces like OpenSea.")});setTokenRoyaltyInfo=(0,n.b)(async(t,e)=>{let a=o.bH.parse(e);return n.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"setRoyaltyInfoForToken",args:[t,a.fee_recipient,a.seller_fee_basis_points],parse:t=>({receipt:t,data:()=>this.getDefaultRoyaltyInfo()})})})}class m{constructor(t,e,a,r){this.featureName=a,this.nextTokenIdToMintFn=r,this.contractWrapper=t,this.storage=e}createDelayedRevealBatch=(0,n.b)(async(t,e,a,r)=>{let o;if(!a)throw Error("Password is required");let s=await this.storage.uploadBatch([h.a.parse(t)],{rewriteFileNames:{fileStartNumber:0}}),l=(0,f.g)(s),d=await this.nextTokenIdToMintFn(),u=await this.storage.uploadBatch(e.map(t=>h.a.parse(t)),{onProgress:r?.onProgress,rewriteFileNames:{fileStartNumber:d.toNumber()}}),y=(0,f.g)(u),g=await this.contractWrapper.read("getBaseURICount",[]),w=await this.hashDelayRevealPassword(g,a),m=await this.contractWrapper.read("encryptDecrypt",[i.Y0(y),w]),b=await this.isLegacyContract();if(b)o=m;else{let t=await this.contractWrapper.getChainID(),e=c.keccak256(["bytes","bytes","uint256"],[i.Y0(y),w,t]);o=p.$.encode(["bytes","bytes32"],[m,e])}return n.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"lazyMint",args:[u.length,l.endsWith("/")?l:`${l}/`,o],parse:t=>{let e=this.contractWrapper.parseLogs("TokensLazyMinted",t?.logs),a=e[0].args.startTokenId,r=e[0].args.endTokenId,n=[];for(let e=a;e.lte(r);e=e.add(1))n.push({id:e,receipt:t});return n}})});reveal=(0,n.b)(async(t,e)=>{if(!e)throw Error("Password is required");let a=await this.hashDelayRevealPassword(t,e);try{let e=await this.contractWrapper.callStatic().reveal(t,a);if(!e.includes("://")||!e.endsWith("/"))throw Error("invalid password")}catch(t){throw Error("invalid password")}return n.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"reveal",args:[t,a]})});async getBatchesToReveal(){let t=await this.contractWrapper.read("getBaseURICount",[]);if(t.isZero())return[];let e=Array.from(Array(t.toNumber()).keys()),a=await Promise.all(e.map(t=>{if((0,r.h)("getBatchIdAtIndex",this.contractWrapper))return this.contractWrapper.read("getBatchIdAtIndex",[t]);if((0,r.h)("baseURIIndices",this.contractWrapper))return this.contractWrapper.read("baseURIIndices",[t]);throw Error("Contract does not have getBatchIdAtIndex or baseURIIndices.")})),n=a.slice(0,a.length-1),o=await Promise.all(Array.from([0,...n]).map(t=>this.getNftMetadata(t.toString()))),s=await this.isLegacyContract(),i=await Promise.all(Array.from([...a]).map(t=>s?this.getLegacyEncryptedData(t):this.contractWrapper.read("encryptedData",[t]))),c=i.map(t=>{if(!(l.hexDataLength(t)>0))return t;{if(s)return t;let e=p.$.decode(["bytes","bytes32"],t);return e[0]}});return o.map((t,e)=>({batchId:d.O$.from(e),batchUri:t.uri,placeholderMetadata:t})).filter((t,e)=>l.hexDataLength(c[e])>0)}async hashDelayRevealPassword(t,e){let a=await this.contractWrapper.getChainID(),r=this.contractWrapper.address;return c.keccak256(["string","uint256","uint256","address"],[e,a,t,r])}async getNftMetadata(t){return(0,f.c)(this.contractWrapper.address,this.contractWrapper.getProvider(),t,this.storage)}async isLegacyContract(){if((0,r.h)("contractVersion",this.contractWrapper))try{let t=await this.contractWrapper.read("contractVersion",[]);return t<=2}catch(t){}return!1}async getLegacyEncryptedData(t){let e=(await a.e(8839).then(a.t.bind(a,98839,19))).default,r=new u.CH(this.contractWrapper.address,e,this.contractWrapper.getProvider()),n=await r.functions.encryptedBaseURI(t);return n.length>0?n[0]:"0x"}}async function b(t,e,a,r,n){let s={},i=r||o.aZ,c=await (0,g.n)(t.getProvider(),e,i),p=c.mul(a);return p.gt(0)&&(i===o.aZ?s={value:p}:i!==o.aZ&&n&&await (0,y.a)(t,i,p,a,0)),s}class I{featureName=o.d5.name;constructor(t){this.contractWrapper=t}async get(){return this.contractWrapper.read("owner",[])}set=(0,n.b)(async t=>{let e=await (0,o.aP)(t);return n.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"setOwner",args:[e]})})}}}]);