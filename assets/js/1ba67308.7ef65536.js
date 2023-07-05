"use strict";(self.webpackChunkgreenfield_docs=self.webpackChunkgreenfield_docs||[]).push([[6801],{7975:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var o=t(87462),i=(t(67294),t(3905));const a={title:"Run Testnet Node",order:4},r="Run Testnet Node",l={unversionedId:"guide/greenfield-blockchain/run-node/run-testnet-node",id:"guide/greenfield-blockchain/run-node/run-testnet-node",title:"Run Testnet Node",description:"Minimum System Requirements",source:"@site/docs/guide/greenfield-blockchain/run-node/run-testnet-node.md",sourceDirName:"guide/greenfield-blockchain/run-node",slug:"/guide/greenfield-blockchain/run-node/run-testnet-node",permalink:"/greenfield-docs/docs/guide/greenfield-blockchain/run-node/run-testnet-node",draft:!1,editUrl:"https://github.com/bnb-chain/greenfield-docs/blob/main/docs/guide/greenfield-blockchain/run-node/run-testnet-node.md",tags:[],version:"current",frontMatter:{title:"Run Testnet Node",order:4},sidebar:"guideSidebar",previous:{title:"Run Mainnet Node",permalink:"/greenfield-docs/docs/guide/greenfield-blockchain/run-node/run-mainnet-node"},next:{title:"Become Testnet Validator",permalink:"/greenfield-docs/docs/guide/greenfield-blockchain/run-node/become-testnet-validator"}},d={},s=[{value:"Minimum System Requirements",id:"minimum-system-requirements",level:2},{value:"Setting Up a New Node",id:"setting-up-a-new-node",level:2},{value:"Additional Configuration",id:"additional-configuration",level:3},{value:"Get Extra Information From Your Fullnode",id:"get-extra-information-from-your-fullnode",level:2},{value:"Monitor Syncing Process",id:"monitor-syncing-process",level:5},{value:"Prometheus Metrics",id:"prometheus-metrics",level:2},{value:"Testnet Tools",id:"testnet-tools",level:2}],u={toc:s},c="wrapper";function m(e){let{components:n,...t}=e;return(0,i.kt)(c,(0,o.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"run-testnet-node"},"Run Testnet Node"),(0,i.kt)("h2",{id:"minimum-system-requirements"},"Minimum System Requirements"),(0,i.kt)("p",null,"The hardware must meet certain requirements to run a Full Node."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Desktop or laptop hardware running recent versions of Mac OS X, or Linux."),(0,i.kt)("li",{parentName:"ul"},"1 TB of free disk space, accessible at a minimum read/write speed of 100 MB/s."),(0,i.kt)("li",{parentName:"ul"},"4 cores of CPU and 8 gigabytes of memory (RAM)."),(0,i.kt)("li",{parentName:"ul"},"A broadband Internet connection with upload/download speeds of at least 1 megabyte per second.")),(0,i.kt)("h2",{id:"setting-up-a-new-node"},"Setting Up a New Node"),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Please check the ","[greenfield repo]","(",(0,i.kt)("a",{parentName:"p",href:"https://github.com/bnb-chain/greenfield/releases/latest"},"https://github.com/bnb-chain/greenfield/releases/latest")," for information on the testnet, including the correct version of the binaries to use and details about the config file")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"You need to choose a home folder ",(0,i.kt)("inlineCode",{parentName:"li"},"$NODE_HOME")," (i.e. ~/.gnfd) for Greenfield Chain. You can setup this by:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"mkdir ~/.gnfd\nmkdir ~/.gnfd/config\n")),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"Download ",(0,i.kt)("inlineCode",{parentName:"li"},"app.toml"),",  ",(0,i.kt)("inlineCode",{parentName:"li"},"config.toml")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"genesis.json")," from ",(0,i.kt)("inlineCode",{parentName:"li"},"https://github.com/bnb-chain/greenfield/releases")," and copy them into ",(0,i.kt)("inlineCode",{parentName:"li"},"$NODE_HOME/config"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'wget  $(curl -s https://api.github.com/repos/bnb-chain/greenfield/releases/latest |grep browser_ |grep testnet_config |cut -d\\" -f4)\nunzip testnet_config.zip\ncp testnet_config/*  ~/.gnfd/config/\n')),(0,i.kt)("p",null,"You can edit this moniker later, in the ",(0,i.kt)("inlineCode",{parentName:"p"},"$NODE_HOME/config/config.toml")," file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-toml"},'# A custom human readable name for this node\nmoniker = "<your_custom_moniker>"\n')),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Monikers can contain only ASCII characters. Using Unicode characters will render your node unreachable. ")),(0,i.kt)("p",null,"Now your Full Node has been initialized."),(0,i.kt)("ol",{start:4},(0,i.kt)("li",{parentName:"ol"},"Start your Full Node.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"gnfd start\n")),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Alternatively, if you choose a different $NODE_HOME location and you are not using the suggested default ",(0,i.kt)("inlineCode",{parentName:"p"},"~/.gnfd"),", you may start the full node by using below script, where $NODE_HOME is your selected directory. "),(0,i.kt)("p",{parentName:"admonition"},"Example: If you set ",(0,i.kt)("inlineCode",{parentName:"p"},"/usr/local/gnfd-testnet")," as your home directory. Run the Full Node with below command."),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"gnfd start --home /usr/local/gnfd-testnet\n"))),(0,i.kt)("p",null,"If you encounter any issue when running a Full Node, you should read the FAQ provided ",(0,i.kt)("a",{parentName:"p",href:"/greenfield-docs/docs/faq/greenfield-faqs"},"here"),"."),(0,i.kt)("h3",{id:"additional-configuration"},"Additional Configuration"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Seed node: Your Full Node needs to know how to find peers in the blockchain network. You'll need to add healthy seed nodes to $NODE_HOME/config/config.toml. The recommended ",(0,i.kt)("inlineCode",{parentName:"p"},"config.toml")," already contains links to some seed nodes.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Service Port: RPC service listens on port ",(0,i.kt)("inlineCode",{parentName:"p"},"26657")," and P2P service listens on port ",(0,i.kt)("inlineCode",{parentName:"p"},"26656")," by default.\nMake sure these two ports are open before starting a full node, unless the full node has to listen on other ports.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Store: All the state and block data will store under ",(0,i.kt)("inlineCode",{parentName:"p"},"$NODE_HOME/data"),", do not delete or edit any of these files."))),(0,i.kt)("h2",{id:"get-extra-information-from-your-fullnode"},"Get Extra Information From Your Fullnode"),(0,i.kt)("p",null,"If you have a Full Node running, then you can publish extra messages to local files."),(0,i.kt)("h5",{id:"monitor-syncing-process"},"Monitor Syncing Process"),(0,i.kt)("p",null,"You can verify if state sync is done by ",(0,i.kt)("inlineCode",{parentName:"p"},"curl localhost:26657/status")," several times and see whether ",(0,i.kt)("inlineCode",{parentName:"p"},"latest_block_height")," is increasing in response."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'"sync_info": {\n  ...\n  "latest_block_height": "280072",\n  "latest_block_time": "2023-04-07T01:58:13.572249854Z",\n  ...\n}\n')),(0,i.kt)("h2",{id:"prometheus-metrics"},"Prometheus Metrics"),(0,i.kt)("p",null,"Prometheus is enabled on port ",(0,i.kt)("inlineCode",{parentName:"p"},"26660")," by default, and the endpoint is ",(0,i.kt)("inlineCode",{parentName:"p"},"/metrics"),"."),(0,i.kt)("h2",{id:"testnet-tools"},"Testnet Tools"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://greenfieldscan.com/"},"Explorer"))))}m.isMDXComponent=!0}}]);