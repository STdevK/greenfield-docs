"use strict";(self.webpackChunkgreenfield_docs=self.webpackChunkgreenfield_docs||[]).push([[1118],{14858:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var n=t(87462),r=(t(67294),t(3905));const l={title:"Become Testnet Validator",order:5},o="Become Testnet Validator",i={unversionedId:"guide/greenfield-blockchain/run-node/become-testnet-validator",id:"guide/greenfield-blockchain/run-node/become-testnet-validator",title:"Become Testnet Validator",description:"Minimum Requirements",source:"@site/docs/guide/greenfield-blockchain/run-node/become-testnet-validator.md",sourceDirName:"guide/greenfield-blockchain/run-node",slug:"/guide/greenfield-blockchain/run-node/become-testnet-validator",permalink:"/greenfield-docs/docs/guide/greenfield-blockchain/run-node/become-testnet-validator",draft:!1,editUrl:"https://github.com/bnb-chain/greenfield-docs/blob/main/docs/guide/greenfield-blockchain/run-node/become-testnet-validator.md",tags:[],version:"current",frontMatter:{title:"Become Testnet Validator",order:5},sidebar:"guideSidebar",previous:{title:"Run Testnet Node",permalink:"/greenfield-docs/docs/guide/greenfield-blockchain/run-node/run-testnet-node"},next:{title:"Overview",permalink:"/greenfield-docs/docs/guide/storage-provider/introduction/overview"}},d={},s=[{value:"Minimum Requirements",id:"minimum-requirements",level:2},{value:"Setting up Validator Node",id:"setting-up-validator-node",level:2},{value:"1. Install Fullnode",id:"1-install-fullnode",level:3},{value:"2. Prepare validator, validator BLS, relayer, and challenger accounts",id:"2-prepare-validator-validator-bls-relayer-and-challenger-accounts",level:3},{value:"3.  Obtain validator, validator BLS, relayer, and challenger account addresses",id:"3--obtain-validator-validator-bls-relayer-and-challenger-account-addresses",level:3},{value:"4. Grant gov module to create your validator",id:"4-grant-gov-module-to-create-your-validator",level:3},{value:"5. Submit a Create Validator Proposal",id:"5-submit-a-create-validator-proposal",level:3},{value:"6. Wait for the voting until the Proposal is passed.",id:"6-wait-for-the-voting-until-the-proposal-is-passed",level:3},{value:"7. Query all validators",id:"7-query-all-validators",level:3}],u={toc:s},c="wrapper";function p(e){let{components:a,...t}=e;return(0,r.kt)(c,(0,n.Z)({},u,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"become-testnet-validator"},"Become Testnet Validator"),(0,r.kt)("h2",{id:"minimum-requirements"},"Minimum Requirements"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Number of BNB to be staked: ",(0,r.kt)("inlineCode",{parentName:"li"},"1000BNB")),(0,r.kt)("li",{parentName:"ul"},"Hardware Requirements:  Desktop or laptop hardware running recent versions of Mac OS X, or Linux."),(0,r.kt)("li",{parentName:"ul"},"CPU: 4 cores"),(0,r.kt)("li",{parentName:"ul"},"RAM: 8 GB"),(0,r.kt)("li",{parentName:"ul"},"HDD/SDD: 1 TB"),(0,r.kt)("li",{parentName:"ul"},"Bandwidth: 1 MB/s"),(0,r.kt)("li",{parentName:"ul"},"Slashing details: No slashing will occur for validator in the testnet so far, but will enable it short future.")),(0,r.kt)("h2",{id:"setting-up-validator-node"},"Setting up Validator Node"),(0,r.kt)("h3",{id:"1-install-fullnode"},"1. Install Fullnode"),(0,r.kt)("p",null,"Follow the instructions ",(0,r.kt)("a",{parentName:"p",href:"/greenfield-docs/docs/guide/greenfield-blockchain/run-node/run-testnet-node"},"here to set up a full node"),"."),(0,r.kt)("h3",{id:"2-prepare-validator-validator-bls-relayer-and-challenger-accounts"},"2. Prepare validator, validator BLS, relayer, and challenger accounts"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"keyring-backend")," supports multiple storage backends, some of which may not be available on all operating systems.\nSee more details ",(0,r.kt)("a",{parentName:"p",href:"/greenfield-docs/docs/api-sdk/key-management"},"here"),".")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"gnfd keys add validator --keyring-backend test\ngnfd keys add validator_bls --keyring-backend test --algo eth_bls\ngnfd keys add validator_relayer --keyring-backend test\ngnfd keys add validator_challenger --keyring-backend test\n")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Alternatively, if you choose a different $KEY_HOME location and you are not using the suggested default ",(0,r.kt)("inlineCode",{parentName:"p"},"~/.gnfd"),", you may start the full node by using below script, where $KEY_HOME is your selected directory.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"gnfd keys add validator --keyring-backend test --home ${KEY_HOME}\ngnfd keys add validator_bls --keyring-backend test --algo eth_bls --home ${KEY_HOME}\ngnfd keys add validator_relayer --keyring-backend test --home ${KEY_HOME}\ngnfd keys add validator_challenger --keyring-backend test --home ${KEY_HOME}\n")),(0,r.kt)("h3",{id:"3--obtain-validator-validator-bls-relayer-and-challenger-account-addresses"},"3.  Obtain validator, validator BLS, relayer, and challenger account addresses"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Ensure you choose the correct --keyring-backend and that --home is set correctly if you saved the files in a custom folder in ",(0,r.kt)("inlineCode",{parentName:"p"},"step 2"),".")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"VALIDATOR_ADDR=$(gnfd keys show validator -a --keyring-backend test)\nRELAYER_ADDR=$(gnfd keys show validator_relayer -a --keyring-backend test)\nCHALLENGER_ADDR=$(gnfd keys show validator_challenger -a --keyring-backend test)\nVALIDATOR_BLS=$(gnfd keys show validator_bls --keyring-backend test --output json | jq -r '.pubkey_hex')\nVALIDATOR_NODE_PUB_KEY=$(cat ${CONFIG_PATH}/config/priv_validator_key.json | jq -r '.pub_key.value')\n")),(0,r.kt)("h3",{id:"4-grant-gov-module-to-create-your-validator"},"4. Grant gov module to create your validator"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"0x7b5Fe22B5446f7C62Ea27B8BD71CeF94e03f3dF2")," is the module address of gov."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'gnfd tx authz grant 0x7b5Fe22B5446f7C62Ea27B8BD71CeF94e03f3dF2 delegate --spend-limit 1000000000000000000000BNB --allowed-validators ${VALIDATOR_ADDR} --from ${VALIDATOR_ADDR} --keyring-backend test --node "https://gnfd-testnet-fullnode-tendermint-us.bnbchain.org:443" --yes\n')),(0,r.kt)("h3",{id:"5-submit-a-create-validator-proposal"},"5. Submit a Create Validator Proposal"),(0,r.kt)("p",null,"Replace the values in the following JSON and save it as create_validator_proposal.json:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"${NODE_NAME}"),": A custom human-readable name for this node."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"${VALIDATOR_NODE_PUB_KEY}"),": The consensus key generated in step 1 (stored in ${HOME}/.gnfd/config/priv_validator_key.json by default)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"${VALIDATOR_ADDR}"),": The operator address created in step 2."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"${VALIDATOR_BLS}"),": The BLS key created in step 2."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"${RELAYER_ADDR}"),": The relayer address created in step 2."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"${CHALLENGER_ADDR}"),": The challenger address created in step 2.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n "messages": [\n  {\n   "@type": "/cosmos.staking.v1beta1.MsgCreateValidator",\n   "description": {\n    "moniker": "${NODE_NAME}",\n    "identity": "",\n    "website": "",\n    "security_contact": "",\n    "details": ""\n   },\n   "commission": {\n    "rate": "0.070000000000000000",\n    "max_rate": "1.000000000000000000",\n    "max_change_rate": "0.010000000000000000"\n   },\n   "min_self_delegation": "1000000000000000000000",\n   "delegator_address": "${VALIDATOR_ADDR}",\n   "validator_address": "${VALIDATOR_ADDR}",\n   "pubkey": {\n    "@type": "/cosmos.crypto.ed25519.PubKey",\n    "key": "${VALIDATOR_NODE_PUB_KEY}"\n   },\n   "value": {\n    "denom": "BNB",\n    "amount": "1000000000000000000000"\n   },\n   "from": "0x7b5Fe22B5446f7C62Ea27B8BD71CeF94e03f3dF2",\n   "relayer_address": "${RELAYER_ADDR}",\n   "challenger_address": "${CHALLENGER_ADDR}",\n   "bls_key": "${VALIDATOR_BLS}"\n  }\n ],\n "metadata": "",\n "title": "Create <name> Validator",\n "summary": "create <name> validator",\n "deposit": "1000000000000000000BNB"\n}\n')),(0,r.kt)("p",null,"Submit the proposal. Ensure the validator account has enough BNB tokens."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'gnfd tx gov submit-proposal ./create_validator_proposal.json --keyring-backend test --chain-id "greenfield_5600-1" --from ${VALIDATOR_ADDR} --node "https://gnfd-testnet-fullnode-tendermint-us.bnbchain.org:443" -b sync --gas "200000000" --fees "1000000000000000000BNB" --yes\n')),(0,r.kt)("h3",{id:"6-wait-for-the-voting-until-the-proposal-is-passed"},"6. Wait for the voting until the Proposal is passed."),(0,r.kt)("p",null,"After submitting the proposal successfully, you must wait for the voting to be completed and the proposal to be approved.\nIt will last 7days on mainnet while 1 day on testnet. Once it has passed and is executed successfully,\nyou can verify that the node has become a validator. "),(0,r.kt)("admonition",{type:"warning"},(0,r.kt)("p",{parentName:"admonition"},"Please ensure that the validator node is running before it is selected.")),(0,r.kt)("h3",{id:"7-query-all-validators"},"7. Query all validators"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'gnfd query staking validators --node "https://gnfd-testnet-fullnode-tendermint-us.bnbchain.org:443"\n')))}p.isMDXComponent=!0}}]);