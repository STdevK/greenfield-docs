"use strict";(self.webpackChunkgreenfield_docs=self.webpackChunkgreenfield_docs||[]).push([[1476],{79995:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>h,contentTitle:()=>u,default:()=>k,frontMatter:()=>c,metadata:()=>y,toc:()=>b});var n=a(87462),s=(a(67294),a(3905)),i=a(26389),o=a(94891),r=a(75190),l=a(47507),d=a(24310),m=a(63303),p=(a(75035),a(85162));const c={id:"spendable-balance-by-denom",title:"SpendableBalanceByDenom",description:"When called from another module, this query might consume a high amount of",sidebar_label:"SpendableBalanceByDenom",hide_title:!0,hide_table_of_contents:!0,api:{description:"When called from another module, this query might consume a high amount of\ngas if the pagination field is incorrectly set.\n\nSince: cosmos-sdk 0.47",operationId:"SpendableBalanceByDenom",responses:{200:{description:"A successful response.",content:{"*/*":{schema:{type:"object",properties:{balance:{type:"object",properties:{denom:{type:"string"},amount:{type:"string"}},description:"Coin defines a token with a denomination and an amount.\n\nNOTE: The amount field is an Int which implements the custom method\nsignatures required by gogoproto."}},description:"QuerySpendableBalanceByDenomResponse defines the gRPC response structure for\nquerying an account's spendable balance for a specific denom.\n\nSince: cosmos-sdk 0.47"}}}},default:{description:"An unexpected error response.",content:{"*/*":{schema:{type:"object",properties:{error:{type:"string"},code:{type:"integer",format:"int32"},message:{type:"string"},details:{type:"array",items:{type:"object",properties:{type_url:{type:"string"},value:{type:"string",format:"byte"}}}}}}}}}},parameters:[{name:"address",description:"address is the address to query balances for.",in:"path",required:!0,schema:{type:"string"}},{name:"denom",description:"denom is the coin denom to query balances for.",in:"query",required:!1,schema:{type:"string"}}],tags:["Query"],method:"get",path:"/cosmos/bank/v1beta1/spendable_balances/{address}/by_denom",servers:[{url:"https://gnfd-testnet-fullnode-tendermint-us.bnbchain.org"}],info:{title:"Greenfield - gRPC Gateway docs",description:"A REST interface for state queries",version:"1.0.0"},postman:{name:"SpendableBalanceByDenom",description:{content:"When called from another module, this query might consume a high amount of\ngas if the pagination field is incorrectly set.\n\nSince: cosmos-sdk 0.47",type:"text/plain"},url:{path:["cosmos","bank","v1beta1","spendable_balances",":address","by_denom"],host:["{{baseUrl}}"],query:[{disabled:!1,description:{content:"denom is the coin denom to query balances for.",type:"text/plain"},key:"denom",value:""}],variable:[{disabled:!1,description:{content:"(Required) address is the address to query balances for.",type:"text/plain"},type:"any",value:"",key:"address"}]},header:[{key:"Accept",value:"*/*"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs/greenfield-api/greenfield-grpc-gateway-docs",custom_edit_url:null},u=void 0,y={unversionedId:"greenfield-api/spendable-balance-by-denom",id:"greenfield-api/spendable-balance-by-denom",title:"SpendableBalanceByDenom",description:"When called from another module, this query might consume a high amount of",source:"@site/docs/greenfield-api/spendable-balance-by-denom.api.mdx",sourceDirName:"greenfield-api",slug:"/greenfield-api/spendable-balance-by-denom",permalink:"/greenfield-docs/docs/greenfield-api/spendable-balance-by-denom",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"spendable-balance-by-denom",title:"SpendableBalanceByDenom",description:"When called from another module, this query might consume a high amount of",sidebar_label:"SpendableBalanceByDenom",hide_title:!0,hide_table_of_contents:!0,api:{description:"When called from another module, this query might consume a high amount of\ngas if the pagination field is incorrectly set.\n\nSince: cosmos-sdk 0.47",operationId:"SpendableBalanceByDenom",responses:{200:{description:"A successful response.",content:{"*/*":{schema:{type:"object",properties:{balance:{type:"object",properties:{denom:{type:"string"},amount:{type:"string"}},description:"Coin defines a token with a denomination and an amount.\n\nNOTE: The amount field is an Int which implements the custom method\nsignatures required by gogoproto."}},description:"QuerySpendableBalanceByDenomResponse defines the gRPC response structure for\nquerying an account's spendable balance for a specific denom.\n\nSince: cosmos-sdk 0.47"}}}},default:{description:"An unexpected error response.",content:{"*/*":{schema:{type:"object",properties:{error:{type:"string"},code:{type:"integer",format:"int32"},message:{type:"string"},details:{type:"array",items:{type:"object",properties:{type_url:{type:"string"},value:{type:"string",format:"byte"}}}}}}}}}},parameters:[{name:"address",description:"address is the address to query balances for.",in:"path",required:!0,schema:{type:"string"}},{name:"denom",description:"denom is the coin denom to query balances for.",in:"query",required:!1,schema:{type:"string"}}],tags:["Query"],method:"get",path:"/cosmos/bank/v1beta1/spendable_balances/{address}/by_denom",servers:[{url:"https://gnfd-testnet-fullnode-tendermint-us.bnbchain.org"}],info:{title:"Greenfield - gRPC Gateway docs",description:"A REST interface for state queries",version:"1.0.0"},postman:{name:"SpendableBalanceByDenom",description:{content:"When called from another module, this query might consume a high amount of\ngas if the pagination field is incorrectly set.\n\nSince: cosmos-sdk 0.47",type:"text/plain"},url:{path:["cosmos","bank","v1beta1","spendable_balances",":address","by_denom"],host:["{{baseUrl}}"],query:[{disabled:!1,description:{content:"denom is the coin denom to query balances for.",type:"text/plain"},key:"denom",value:""}],variable:[{disabled:!1,description:{content:"(Required) address is the address to query balances for.",type:"text/plain"},type:"any",value:"",key:"address"}]},header:[{key:"Accept",value:"*/*"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs/greenfield-api/greenfield-grpc-gateway-docs",custom_edit_url:null},sidebar:"apiReferenceSidebar",previous:{title:"SpendableBalances",permalink:"/greenfield-docs/docs/greenfield-api/spendable-balances"},next:{title:"TotalSupply",permalink:"/greenfield-docs/docs/greenfield-api/total-supply"}},h={},b=[{value:"SpendableBalanceByDenom",id:"spendablebalancebydenom",level:2}],g={toc:b},f="wrapper";function k(e){let{components:t,...a}=e;return(0,s.kt)(f,(0,n.Z)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"spendablebalancebydenom"},"SpendableBalanceByDenom"),(0,s.kt)("p",null,"When called from another module, this query might consume a high amount of\ngas if the pagination field is incorrectly set."),(0,s.kt)("p",null,"Since: cosmos-sdk 0.47"),(0,s.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"Path Parameters")),(0,s.kt)("div",null,(0,s.kt)("ul",null,(0,s.kt)(r.Z,{className:"paramsItem",param:{name:"address",description:"address is the address to query balances for.",in:"path",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,s.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"Query Parameters")),(0,s.kt)("div",null,(0,s.kt)("ul",null,(0,s.kt)(r.Z,{className:"paramsItem",param:{name:"denom",description:"denom is the coin denom to query balances for.",in:"query",required:!1,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,s.kt)("div",null,(0,s.kt)(i.Z,{mdxType:"ApiTabs"},(0,s.kt)(p.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"A successful response.")),(0,s.kt)("div",null,(0,s.kt)(o.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(p.Z,{label:"*/*",value:"*/*",mdxType:"TabItem"},(0,s.kt)(m.Z,{mdxType:"SchemaTabs"},(0,s.kt)(p.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(d.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"balance"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,s.kt)("p",null,"Coin defines a token with a denomination and an amount."),(0,s.kt)("p",null,"NOTE: The amount field is an Int which implements the custom method\nsignatures required by gogoproto.")),(0,s.kt)(d.Z,{collapsible:!1,name:"denom",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"amount",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}))))))),(0,s.kt)(p.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(l.Z,{responseExample:'{\n  "balance": {\n    "denom": "string",\n    "amount": "string"\n  }\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,s.kt)(p.Z,{label:"default",value:"default",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"An unexpected error response.")),(0,s.kt)("div",null,(0,s.kt)(o.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(p.Z,{label:"*/*",value:"*/*",mdxType:"TabItem"},(0,s.kt)(m.Z,{mdxType:"SchemaTabs"},(0,s.kt)(p.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(d.Z,{collapsible:!1,name:"error",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"code",required:!1,schemaName:"int32",qualifierMessage:void 0,schema:{type:"integer",format:"int32"},mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"details"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,s.kt)(d.Z,{collapsible:!1,name:"type_url",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"value",required:!1,schemaName:"byte",qualifierMessage:void 0,schema:{type:"string",format:"byte"},mdxType:"SchemaItem"}),(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]")))))))),(0,s.kt)(p.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(l.Z,{responseExample:'{\n  "error": "string",\n  "code": 0,\n  "message": "string",\n  "details": [\n    {\n      "type_url": "string",\n      "value": "string"\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}k.isMDXComponent=!0}}]);