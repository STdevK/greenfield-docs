"use strict";(self.webpackChunkgreenfield_docs=self.webpackChunkgreenfield_docs||[]).push([[7181],{44325:(e,a,r)=>{r.r(a),r.d(a,{assets:()=>d,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>s,toc:()=>o});var t=r(87462),n=(r(67294),r(3905));const l={title:"Cross Chain Transfer",order:5},i="Cross Chain Transfer",s={unversionedId:"guide/greenfield-blockchain/cli/bridge",id:"guide/greenfield-blockchain/cli/bridge",title:"Cross Chain Transfer",description:"Abstract",source:"@site/docs/guide/greenfield-blockchain/cli/bridge.md",sourceDirName:"guide/greenfield-blockchain/cli",slug:"/guide/greenfield-blockchain/cli/bridge",permalink:"/greenfield-docs/docs/guide/greenfield-blockchain/cli/bridge",draft:!1,editUrl:"https://github.com/bnb-chain/greenfield-docs/blob/main/docs/guide/greenfield-blockchain/cli/bridge.md",tags:[],version:"current",frontMatter:{title:"Cross Chain Transfer",order:5},sidebar:"apiReferenceSidebar",previous:{title:"Storage Provider",permalink:"/greenfield-docs/docs/guide/greenfield-blockchain/cli/storage-provider"},next:{title:"On-chain Governance",permalink:"/greenfield-docs/docs/guide/greenfield-blockchain/cli/governance"}},d={},o=[{value:"Abstract",id:"abstract",level:2},{value:"Quick Start",id:"quick-start",level:2},{value:"Detailed CLI",id:"detailed-cli",level:2},{value:"Query",id:"query",level:3},{value:"params",id:"params",level:4},{value:"Transactions",id:"transactions",level:3},{value:"transfer-out",id:"transfer-out",level:4}],c={toc:o},u="wrapper";function p(e){let{components:a,...r}=e;return(0,n.kt)(u,(0,t.Z)({},c,r,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"cross-chain-transfer"},"Cross Chain Transfer"),(0,n.kt)("h2",{id:"abstract"},"Abstract"),(0,n.kt)("p",null,"The bridge module is responsible for handling the BNB transfers between greenfield and BSC."),(0,n.kt)("p",null,"Users can transfer BNB to BSC via gnfd command, and query the relayer fee for the cross-chain transfers."),(0,n.kt)("h2",{id:"quick-start"},"Quick Start"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'## Start a local cluster\n$ bash ./deployment/localup/localup.sh all 3\n$ alias gnfd="./build/bin/gnfd"\n$ receiver=0x32Ff14Fa1547314b95991976DB432F9Aa648A423\n## send 500BNB to the receiver (note the decimal of BNB is 18)\n$ gnfd tx bridge transfer-out validator0 $receiver 500000000000000000000BNB --home ./deployment/localup/.local/validator0 --keyring-backend test --node http://localhost:26750 -b block  -y\n## query the relayer fees for crosschain transfers\n$ gnfd q bridge params --node tcp://127.0.0.1:26750 \n')),(0,n.kt)("h2",{id:"detailed-cli"},"Detailed CLI"),(0,n.kt)("p",null,"A user can query and interact with the ",(0,n.kt)("inlineCode",{parentName:"p"},"bridge")," module using the CLI."),(0,n.kt)("h3",{id:"query"},"Query"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"query")," commands allow users to query the params of the ",(0,n.kt)("inlineCode",{parentName:"p"},"bridge")," module."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"gnfd query bridge --help\n")),(0,n.kt)("h4",{id:"params"},"params"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"params")," command allows users to query the params of the ",(0,n.kt)("inlineCode",{parentName:"p"},"bridge")," module."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"gnfd query bridge params [flags]\n")),(0,n.kt)("p",null,"Example:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"gnfd query bridge params --node http://localhost:26750\n")),(0,n.kt)("p",null,"Example Output:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yml"},'params:\n  transfer_out_ack_relayer_fee: "0"\n  transfer_out_relayer_fee: "1"\n')),(0,n.kt)("h3",{id:"transactions"},"Transactions"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"tx")," commands allow users to interact with the ",(0,n.kt)("inlineCode",{parentName:"p"},"bridge")," module."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"gnfd tx bridge --help\n")),(0,n.kt)("h4",{id:"transfer-out"},"transfer-out"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"transfer-out")," command allows users to send funds between accounts from greenfield to BSC."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"gnfd tx bridge transfer-out [from_key_or_address] [to_address] [amount] [flags]\n")),(0,n.kt)("p",null,"Example:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"gnfd tx bridge transfer-out validator0 0x32Ff14Fa1547314b95991976DB432F9Aa648A423 500000000000000000000BNB --home ./deployment/localup/.local/validator0 --keyring-backend test --node http://localhost:26750 -b block  -y\n")))}p.isMDXComponent=!0}}]);