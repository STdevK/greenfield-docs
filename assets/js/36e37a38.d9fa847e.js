"use strict";(self.webpackChunkgreenfield_docs=self.webpackChunkgreenfield_docs||[]).push([[8310],{21755:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>f,contentTitle:()=>u,default:()=>k,frontMatter:()=>c,metadata:()=>y,toc:()=>h});var n=i(87462),s=(i(67294),i(3905)),a=i(26389),o=i(94891),l=i(75190),r=i(47507),p=i(24310),m=i(63303),d=(i(75035),i(85162));const c={id:"supply-of",title:"supply of a single coin.",description:"SupplyOf queries the supply of a single coin. When called from another module, this query might consume a high amount of gas if the pagination field is incorrectly set.",sidebar_label:"supply of a single coin.",hide_title:!0,hide_table_of_contents:!0,api:{description:"SupplyOf queries the supply of a single coin. When called from another module, this query might consume a high amount of gas if the pagination field is incorrectly set.",operationId:"SupplyOf",responses:{200:{description:"A successful response.",content:{"*/*":{schema:{type:"object",properties:{amount:{type:"object",properties:{denom:{type:"string"},amount:{type:"string"}},description:"Coin defines a token with a denomination and an amount. NOTE: The amount field is an Int which implements the custom method signatures required by gogoproto."}},description:"QuerySupplyOfResponse is the response type for the Query/SupplyOf RPC method."}}}},default:{description:"An unexpected error response.",content:{"*/*":{schema:{type:"object",properties:{error:{type:"string"},code:{type:"integer",format:"int32"},message:{type:"string"},details:{type:"array",items:{type:"object",properties:{type_url:{type:"string"},value:{type:"string",format:"byte"}}}}}}}}}},parameters:[{name:"denom",description:"denom is the coin denom to query balances for.",in:"query",required:!1,schema:{type:"string"}}],tags:["Bank"],method:"get",path:"/cosmos/bank/v1beta1/supply/by_denom",servers:[{url:"https://gnfd-testnet-fullnode-tendermint-us.bnbchain.org"}],info:{title:"Greenfield - gRPC Gateway docs",description:"A REST interface for state queries",version:"1.0.0"},postman:{name:"supply of a single coin.",description:{content:"SupplyOf queries the supply of a single coin. When called from another module, this query might consume a high amount of gas if the pagination field is incorrectly set.",type:"text/plain"},url:{path:["cosmos","bank","v1beta1","supply","by_denom"],host:["{{baseUrl}}"],query:[{disabled:!1,description:{content:"denom is the coin denom to query balances for.",type:"text/plain"},key:"denom",value:""}],variable:[]},header:[{key:"Accept",value:"*/*"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs/greenfield-api/greenfield-grpc-gateway-docs",custom_edit_url:null},u=void 0,y={unversionedId:"greenfield-api/supply-of",id:"greenfield-api/supply-of",title:"supply of a single coin.",description:"SupplyOf queries the supply of a single coin. When called from another module, this query might consume a high amount of gas if the pagination field is incorrectly set.",source:"@site/docs/greenfield-api/supply-of.api.mdx",sourceDirName:"greenfield-api",slug:"/greenfield-api/supply-of",permalink:"/greenfield-docs/docs/greenfield-api/supply-of",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"supply-of",title:"supply of a single coin.",description:"SupplyOf queries the supply of a single coin. When called from another module, this query might consume a high amount of gas if the pagination field is incorrectly set.",sidebar_label:"supply of a single coin.",hide_title:!0,hide_table_of_contents:!0,api:{description:"SupplyOf queries the supply of a single coin. When called from another module, this query might consume a high amount of gas if the pagination field is incorrectly set.",operationId:"SupplyOf",responses:{200:{description:"A successful response.",content:{"*/*":{schema:{type:"object",properties:{amount:{type:"object",properties:{denom:{type:"string"},amount:{type:"string"}},description:"Coin defines a token with a denomination and an amount. NOTE: The amount field is an Int which implements the custom method signatures required by gogoproto."}},description:"QuerySupplyOfResponse is the response type for the Query/SupplyOf RPC method."}}}},default:{description:"An unexpected error response.",content:{"*/*":{schema:{type:"object",properties:{error:{type:"string"},code:{type:"integer",format:"int32"},message:{type:"string"},details:{type:"array",items:{type:"object",properties:{type_url:{type:"string"},value:{type:"string",format:"byte"}}}}}}}}}},parameters:[{name:"denom",description:"denom is the coin denom to query balances for.",in:"query",required:!1,schema:{type:"string"}}],tags:["Bank"],method:"get",path:"/cosmos/bank/v1beta1/supply/by_denom",servers:[{url:"https://gnfd-testnet-fullnode-tendermint-us.bnbchain.org"}],info:{title:"Greenfield - gRPC Gateway docs",description:"A REST interface for state queries",version:"1.0.0"},postman:{name:"supply of a single coin.",description:{content:"SupplyOf queries the supply of a single coin. When called from another module, this query might consume a high amount of gas if the pagination field is incorrectly set.",type:"text/plain"},url:{path:["cosmos","bank","v1beta1","supply","by_denom"],host:["{{baseUrl}}"],query:[{disabled:!1,description:{content:"denom is the coin denom to query balances for.",type:"text/plain"},key:"denom",value:""}],variable:[]},header:[{key:"Accept",value:"*/*"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs/greenfield-api/greenfield-grpc-gateway-docs",custom_edit_url:null},sidebar:"apiReferenceSidebar",previous:{title:"TotalSupply",permalink:"/greenfield-docs/docs/greenfield-api/total-supply"},next:{title:"ABCIQuery",permalink:"/greenfield-docs/docs/greenfield-api/abci-query"}},f={},h=[{value:"supply of a single coin.",id:"supply-of-a-single-coin",level:2}],g={toc:h},b="wrapper";function k(e){let{components:t,...i}=e;return(0,s.kt)(b,(0,n.Z)({},g,i,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"supply-of-a-single-coin"},"supply of a single coin."),(0,s.kt)("p",null,"SupplyOf queries the supply of a single coin. When called from another module, this query might consume a high amount of gas if the pagination field is incorrectly set."),(0,s.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"Query Parameters")),(0,s.kt)("div",null,(0,s.kt)("ul",null,(0,s.kt)(l.Z,{className:"paramsItem",param:{name:"denom",description:"denom is the coin denom to query balances for.",in:"query",required:!1,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,s.kt)("div",null,(0,s.kt)(a.Z,{mdxType:"ApiTabs"},(0,s.kt)(d.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"A successful response.")),(0,s.kt)("div",null,(0,s.kt)(o.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(d.Z,{label:"*/*",value:"*/*",mdxType:"TabItem"},(0,s.kt)(m.Z,{mdxType:"SchemaTabs"},(0,s.kt)(d.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(p.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"amount"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,s.kt)("p",null,"Coin defines a token with a denomination and an amount. NOTE: The amount field is an Int which implements the custom method signatures required by gogoproto.")),(0,s.kt)(p.Z,{collapsible:!1,name:"denom",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(p.Z,{collapsible:!1,name:"amount",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}))))))),(0,s.kt)(d.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(r.Z,{responseExample:'{\n  "amount": {\n    "denom": "string",\n    "amount": "string"\n  }\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,s.kt)(d.Z,{label:"default",value:"default",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"An unexpected error response.")),(0,s.kt)("div",null,(0,s.kt)(o.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(d.Z,{label:"*/*",value:"*/*",mdxType:"TabItem"},(0,s.kt)(m.Z,{mdxType:"SchemaTabs"},(0,s.kt)(d.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(p.Z,{collapsible:!1,name:"error",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(p.Z,{collapsible:!1,name:"code",required:!1,schemaName:"int32",qualifierMessage:void 0,schema:{type:"integer",format:"int32"},mdxType:"SchemaItem"}),(0,s.kt)(p.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(p.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"details"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,s.kt)(p.Z,{collapsible:!1,name:"type_url",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(p.Z,{collapsible:!1,name:"value",required:!1,schemaName:"byte",qualifierMessage:void 0,schema:{type:"string",format:"byte"},mdxType:"SchemaItem"}),(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]")))))))),(0,s.kt)(d.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(r.Z,{responseExample:'{\n  "error": "string",\n  "code": 0,\n  "message": "string",\n  "details": [\n    {\n      "type_url": "string",\n      "value": "string"\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}k.isMDXComponent=!0}}]);