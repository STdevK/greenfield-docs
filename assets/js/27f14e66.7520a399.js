"use strict";(self.webpackChunkgreenfield_docs=self.webpackChunkgreenfield_docs||[]).push([[1430],{55795:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var a=n(87462),i=(n(67294),n(3905));const r={title:"Blockchain API",icon:"generic",order:1},l="Blockchain API",o={unversionedId:"api-sdk/blockchain-rest",id:"api-sdk/blockchain-rest",title:"Blockchain API",description:"This document presents an overview of all the endpoints a node exposes: gRPC, REST as well as some other endpoints.",source:"@site/docs/api-sdk/blockchain-rest.md",sourceDirName:"api-sdk",slug:"/api-sdk/blockchain-rest",permalink:"/greenfield-docs/docs/api-sdk/blockchain-rest",draft:!1,editUrl:"https://github.com/bnb-chain/greenfield-docs/blob/main/docs/api-sdk/blockchain-rest.md",tags:[],version:"current",frontMatter:{title:"Blockchain API",icon:"generic",order:1},sidebar:"apiReferenceSidebar",previous:{title:"Endpoints",permalink:"/greenfield-docs/docs/api-sdk/endpoints"},next:{title:"BridgeParameters",permalink:"/greenfield-docs/docs/greenfield-api/bridge-params"}},s={},d=[{value:"An Overview of All the Endpoints",id:"an-overview-of-all-the-endpoints",level:2},{value:"gRPC Server \uff08Deprecated\uff09",id:"grpc-server-deprecated",level:2},{value:"REST Server",id:"rest-server",level:2},{value:"Swagger",id:"swagger",level:3},{value:"Tendermint RPC",id:"tendermint-rpc",level:2},{value:"Comparison Table",id:"comparison-table",level:2}],p={toc:d},m="wrapper";function c(e){let{components:t,...n}=e;return(0,i.kt)(m,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"blockchain-api"},"Blockchain API"),(0,i.kt)("p",null,"This document presents an overview of all the endpoints a node exposes: gRPC, REST as well as some other endpoints."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Since Greenfield Blockchain is based on Cosmos, The majority of the content in this page is copied from the\n",(0,i.kt)("a",{parentName:"p",href:"https://docs.cosmos.network/main/core/grpc_rest"},"Cosmos SDK"),".")),(0,i.kt)("h2",{id:"an-overview-of-all-the-endpoints"},"An Overview of All the Endpoints"),(0,i.kt)("p",null,"Each node exposes the following endpoints for users to interact with a node, each endpoint is served on a different port.\nDetails on how to configure each endpoint is provided in the endpoint's own section."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"the gRPC server (default port: ",(0,i.kt)("inlineCode",{parentName:"li"},"9090"),"),"),(0,i.kt)("li",{parentName:"ul"},"the REST server (default port: ",(0,i.kt)("inlineCode",{parentName:"li"},"1317"),"),"),(0,i.kt)("li",{parentName:"ul"},"the Tendermint RPC endpoint (default port: ",(0,i.kt)("inlineCode",{parentName:"li"},"26657"),").")),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"The node also exposes some other endpoints, such as the Tendermint P2P endpoint, or the\n",(0,i.kt)("a",{parentName:"p",href:"https://docs.tendermint.com/main/tendermint-core/metrics.html#list-of-available-metrics"},"Prometheus endpoint"),",\nwhich are not directly related to the Cosmos SDK. Please refer to the\n",(0,i.kt)("a",{parentName:"p",href:"https://docs.tendermint.com/main/tendermint-core/using-tendermint.html#configuration"},"Tendermint documentation"),"\nfor more information about these endpoints.")),(0,i.kt)("h2",{id:"grpc-server-deprecated"},"gRPC Server \uff08Deprecated\uff09"),(0,i.kt)("p",null,"In the Greenfield, Protobuf is the main encoding library. This brings a wide range of Protobuf-based tools that can be\nplugged. One such tool is ",(0,i.kt)("a",{parentName:"p",href:"https://grpc.io"},"gRPC"),", a modern open-source high performance RPC framework that has\ndecent client support in several languages."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"grpc.Server")," is a concrete gRPC server, which spawns and serves all gRPC query requests and a broadcast transaction\nrequest. This server can be configured inside ",(0,i.kt)("inlineCode",{parentName:"p"},"~/.gnfd/config/app.toml"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"grpc.enable = true|false")," field defines if the gRPC server should be enabled. Defaults to ",(0,i.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"grpc.address = {string}")," field defines the address (really, the port, since the host should be kept at ",(0,i.kt)("inlineCode",{parentName:"li"},"0.0.0.0"),")\nthe server should bind to. Defaults to ",(0,i.kt)("inlineCode",{parentName:"li"},"0.0.0.0:9090"),".")),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("inlineCode",{parentName:"p"},"~/.gnfd")," is the directory where the node's configuration and databases are stored.")),(0,i.kt)("p",null,"Once the gRPC server is started, you can send requests to it using a gRPC client. Some examples are given in our\n",(0,i.kt)("a",{parentName:"p",href:"/greenfield-docs/docs/guide/greenfield-blockchain/run-node/interact-node#using-grpc"},"Interact with the Node")," tutorial."),(0,i.kt)("h2",{id:"rest-server"},"REST Server"),(0,i.kt)("p",null,"Greenfield supports REST routes via gRPC-gateway."),(0,i.kt)("p",null,"All routes are configured under the following fields in ",(0,i.kt)("inlineCode",{parentName:"p"},"~/.gnfd/config/app.toml"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"api.enable = true|false")," field defines if the REST server should be enabled. Defaults to ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"api.address = {string}")," field defines the address (really, the port, since the host should be kept at ",(0,i.kt)("inlineCode",{parentName:"li"},"0.0.0.0"),") the\nserver should bind to. Defaults to ",(0,i.kt)("inlineCode",{parentName:"li"},"tcp://0.0.0.0:1317"),"."),(0,i.kt)("li",{parentName:"ul"},"some additional API configuration options are defined in ",(0,i.kt)("inlineCode",{parentName:"li"},"~/.gnfd/config/app.toml"),", along with comments,\nplease refer to that file directly.")),(0,i.kt)("h3",{id:"swagger"},"Swagger"),(0,i.kt)("p",null,"A ",(0,i.kt)("a",{parentName:"p",href:"https://swagger.io/"},"Swagger")," (or OpenAPIv2) specification file is exposed under the ",(0,i.kt)("inlineCode",{parentName:"p"},"/swagger")," route on the API server.\nSwagger is an open specification describing the API endpoints a server serves, including description, input arguments,\nreturn types and much more about each endpoint."),(0,i.kt)("p",null,"Enabling the ",(0,i.kt)("inlineCode",{parentName:"p"},"/swagger")," endpoint is configurable inside ",(0,i.kt)("inlineCode",{parentName:"p"},"~/.gnfd/config/app.toml")," via the ",(0,i.kt)("inlineCode",{parentName:"p"},"api.swagger")," field, which is set to true by default."),(0,i.kt)("h2",{id:"tendermint-rpc"},"Tendermint RPC"),(0,i.kt)("p",null,"Independently of the Cosmos SDK, Tendermint also exposes an RPC server. This RPC server can be configured by tuning\nparameters under the ",(0,i.kt)("inlineCode",{parentName:"p"},"rpc")," table in the ",(0,i.kt)("inlineCode",{parentName:"p"},"~/.gnfd/config/config.toml"),", the default listening address is ",(0,i.kt)("inlineCode",{parentName:"p"},"tcp://0.0.0.0:26657"),".\nAn OpenAPI specification of all Tendermint RPC endpoints is available ",(0,i.kt)("a",{parentName:"p",href:"https://docs.tendermint.com/master/rpc/"},"here"),"."),(0,i.kt)("p",null,"Some Tendermint RPC endpoints are directly related to the Cosmos SDK:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"/abci_query"),": this endpoint will query the application for state. As the ",(0,i.kt)("inlineCode",{parentName:"li"},"path")," parameter, you can send the following strings:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"any Protobuf fully-qualified service method, such as ",(0,i.kt)("inlineCode",{parentName:"li"},"/cosmos.bank.v1beta1.QueryAllBalances"),". The ",(0,i.kt)("inlineCode",{parentName:"li"},"data")," field should then include the method's request parameter(s) encoded as bytes using Protobuf."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"/app/simulate"),": this will simulate a transaction, and return some information such as gas used."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"/app/version"),": this will return the application's version."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"/store/{path}"),": this will query the store directly."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"/p2p/filter/addr/{port}"),": this will return a filtered list of the node's P2P peers by address port."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"/p2p/filter/id/{id}"),": this will return a filtered list of the node's P2P peers by ID."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"/broadcast_tx_{aync,async,commit}"),": these 3 endpoint will broadcast a transaction to other peers. CLI, gRPC and REST expose a way to broadcast transactions, but they all use these 3 Tendermint RPCs under the hood.")),(0,i.kt)("h2",{id:"comparison-table"},"Comparison Table"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Advantages"),(0,i.kt)("th",{parentName:"tr",align:null},"Disadvantages"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"gRPC\uff08Deprecated\uff09"),(0,i.kt)("td",{parentName:"tr",align:null},"- can use code-generated stubs in various languages",(0,i.kt)("br",null),"- supports streaming and bidirectional communication (HTTP2)",(0,i.kt)("br",null),"- small wire binary sizes, faster transmission"),(0,i.kt)("td",{parentName:"tr",align:null},"- based on HTTP2, not available in browsers",(0,i.kt)("br",null),"- learning curve (mostly due to Protobuf)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"REST"),(0,i.kt)("td",{parentName:"tr",align:null},"- ubiquitous",(0,i.kt)("br",null),"- client libraries in all languages, faster implementation",(0,i.kt)("br",null)),(0,i.kt)("td",{parentName:"tr",align:null},"- only supports unary request-response communication (HTTP1.1)",(0,i.kt)("br",null),"- bigger over-the-wire message sizes (JSON)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Tendermint RPC"),(0,i.kt)("td",{parentName:"tr",align:null},"- easy to use"),(0,i.kt)("td",{parentName:"tr",align:null},"- bigger over-the-wire message sizes (JSON)")))))}c.isMDXComponent=!0}}]);