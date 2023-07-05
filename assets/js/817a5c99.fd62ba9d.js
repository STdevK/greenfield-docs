"use strict";(self.webpackChunkgreenfield_docs=self.webpackChunkgreenfield_docs||[]).push([[835],{40814:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>u,frontMatter:()=>n,metadata:()=>i,toc:()=>c});var r=a(87462),o=(a(67294),a(3905));const n={title:"Uploader",order:7},s="Uploader",i={unversionedId:"guide/storage-provider/services/uploader",id:"guide/storage-provider/services/uploader",title:"Uploader",description:"Uploader is responsible for receiving and cutting the object payload data into segments, then storing it in the piece",source:"@site/docs/guide/storage-provider/services/uploader.md",sourceDirName:"guide/storage-provider/services",slug:"/guide/storage-provider/services/uploader",permalink:"/greenfield-docs/docs/guide/storage-provider/services/uploader",draft:!1,editUrl:"https://github.com/bnb-chain/greenfield-docs/blob/main/docs/guide/storage-provider/services/uploader.md",tags:[],version:"current",frontMatter:{title:"Uploader",order:7},sidebar:"guideSidebar",previous:{title:"Gateway",permalink:"/greenfield-docs/docs/guide/storage-provider/services/gateway"},next:{title:"Receiver",permalink:"/greenfield-docs/docs/guide/storage-provider/services/receiver"}},d={},c=[{value:"Key Workflow",id:"key-workflow",level:2},{value:"Receive and cutting object payload data",id:"receive-and-cutting-object-payload-data",level:3},{value:"Asynchronously store to piece store",id:"asynchronously-store-to-piece-store",level:3},{value:"Message",id:"message",level:2}],l={toc:c},p="wrapper";function u(e){let{components:t,...a}=e;return(0,o.kt)(p,(0,r.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"uploader"},"Uploader"),(0,o.kt)("p",null,"Uploader is responsible for receiving and cutting the object payload data into segments, then storing it in the piece\nstore, and notifying the downstream service to asynchronously replicate the object payload data that processed by EC\nto the secondary SP."),(0,o.kt)("h2",{id:"key-workflow"},"Key Workflow"),(0,o.kt)("h3",{id:"receive-and-cutting-object-payload-data"},"Receive and cutting object payload data"),(0,o.kt)("p",null,"Uploader receives the PutObjectRequest from Gateway that has been authenticated. The request is a streaming interface\nthat saves system memory resources to the greatest extent. Implemented PayloadStream for customized dynamic cutting\nsegments, it will return the segment's data and segment metadata for storing the piece store."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"// PayloadStream implement a one-way data flow, writes bytes of any size\n// read the fixed data size with payload metadata\ntype PayloadStream struct {\n    objectID       uint64\n    replicaIdx     uint32\n    segmentSize    uint64\n    redundancyType storagetypes.RedundancyType\n    entryCh        chan *SegmentEntry\n    init           atomic.Value\n    close          atomic.Value\n\n    pRead  *io.PipeReader\n    pWrite *io.PipeWriter\n}\n")),(0,o.kt)("h3",{id:"asynchronously-store-to-piece-store"},"Asynchronously store to piece store"),(0,o.kt)("p",null,"The background will start multiple goroutines to process the segment entry processed by PayloadStream and store it in\nthe piece store."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"type SegmentEntry struct {\n    objectID       uint64\n    replicaIdx     uint32\n    segmentIdx     uint32\n    redundancyType storagetypes.RedundancyType\n    segmentData    []byte\n    err            error\n}\n")),(0,o.kt)("h2",{id:"message"},"Message"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-protobuf"},"// PutObjectRequest is request type for the UploadObject RPC method.\nmessage PutObjectRequest {\n  // object_info defines the information of the object.\n  bnbchain.greenfield.storage.ObjectInfo object_info = 1;\n  // payload defines the data of the object.\n  bytes payload = 2;\n}\n")))}u.isMDXComponent=!0}}]);