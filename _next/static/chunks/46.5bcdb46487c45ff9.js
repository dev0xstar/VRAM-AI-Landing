"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[46],{46:function(e,t,o){o.r(t),o.d(t,{Arm:function(){return Arm},WebGL:function(){return WebGL}});var i=o(2676),a=o(7860),n=o(9714),s=o(2016),r=o(2172),l=o(6676),d=o(6908),c=o(2245),g=o(4570),u=o(2432),p=o(5271),m=o(4028);function Raf(e){let{render:t=!0}=e,{advance:o}=(0,s.D)();(0,l.xQ)(e=>{t&&o(e/1e3)})}let f=[{position:[-.1,-1.75,0],scale:.045,rotation:[0,.5*Math.PI,0],type:1},{position:[.15,-.4,0],scale:.02,rotation:[m.M8C.degToRad(-45),m.M8C.degToRad(-135),m.M8C.degToRad(-45)],type:1},{position:[.15,-.4,0],scale:.02,rotation:[m.M8C.degToRad(45),m.M8C.degToRad(-315),m.M8C.degToRad(-45)],type:1},{position:[-.2,-.35,0],scale:.02,rotation:[m.M8C.degToRad(-90),m.M8C.degToRad(-405),m.M8C.degToRad(-45)],type:1},{position:[-1.2,-.6,0],scale:.05,rotation:[m.M8C.degToRad(-90),m.M8C.degToRad(-405),m.M8C.degToRad(-45)],type:1},{position:[-1.6,-.6,0],scale:.05,rotation:[m.M8C.degToRad(-90),m.M8C.degToRad(-405),m.M8C.degToRad(-45)],type:1},{position:[.16,-1.38,0],scale:.05,rotation:[m.M8C.degToRad(0),m.M8C.degToRad(200),m.M8C.degToRad(-16)],type:2},{position:[0,-.68,0],scale:.04,rotation:[m.M8C.degToRad(0),m.M8C.degToRad(-14),m.M8C.degToRad(-16)],type:2},{position:[-.22,-.61,0],scale:.03,rotation:[m.M8C.degToRad(0),m.M8C.degToRad(-517),m.M8C.degToRad(-16)],type:2},{position:[.2,-.46,0],scale:.03,rotation:[m.M8C.degToRad(0),m.M8C.degToRad(-700),m.M8C.degToRad(-16)],type:2}],h=new m.EJi({color:new m.Ilk("#FF98A2"),metalness:1,roughness:.4,wireframe:!0,side:m.ehD});function Arm(){let{scene:e}=(0,a.L)("/models/arm.glb"),{scene:t}=(0,a.L)("/models/arm2.glb"),[o,r]=(0,p.useState)(1),[{color:l,roughness:C,metalness:M,wireframe:R},y]=(0,c.useControls)(()=>({color:"#ffffff",roughness:{min:0,value:.2,max:1},metalness:{min:0,value:.8,max:1},wireframe:!1}),[]),[{lightsColor:T,light1:x,light2:b,light1Intensity:v,light2Intensity:j,ambientColor:E,arm2LightsColor:w,arm2AmbientColor:I},A]=(0,c.useControls)("lights",()=>({light1:{step:1,value:[-200,150,50]},light2:{step:1,value:[300,-100,150]},light1Intensity:{min:0,value:1,max:1},light2Intensity:{min:0,value:1,max:1},lightsColor:"#FF98A2",ambientColor:"#0E0E0E",arm2LightsColor:"#90EE90",arm2AmbientColor:"#4CBB17"}),[]),[{custom:L,scale:k,modelScale:F,position:K,rotation:B},S]=(0,c.useControls)("model",()=>({custom:!1,scale:{min:0,value:.75,max:1,step:.001},modelScale:{min:.01,value:100,max:300,step:.01,label:"Model Scale"},position:{value:[0,0,100]},rotation:{step:1,min:-360,value:[0,0,0],max:360}})),[{modelOffset:O},_]=(0,c.useControls)("model position",()=>({modelOffset:{value:[0,0,0],step:1,label:"Model Offset"}}));(0,c.useControls)("model",()=>({export:(0,c.button)(()=>{alert(JSON.stringify({scale:k.toFixed(3),position:K,rotation:B,type:o}))})}),[k,K,B,o]),(0,p.useEffect)(()=>{h.color=new m.Ilk(l),h.roughness=C,h.metalness=M,h.wireframe=R},[l,C,M,R,h]),(0,p.useEffect)(()=>{e&&e.traverse(e=>{e.material&&(e.material=h)})},[e,h]),(0,p.useEffect)(()=>{t&&(t.traverse(e=>{e.material&&(e.material=h)}),t.position.set(0,0,0))},[t,h]);let D=(0,p.useRef)(),{viewport:G}=(0,s.D)(),N=(0,u.o)(e=>{let{thresholds:t}=e;return t}),P=(0,p.useMemo)(()=>Object.values(N).sort((e,t)=>e-t),[N]);return(0,d.v)(e=>{let{scroll:t}=e;t<N["light-start"]?(A({light1Intensity:.35,light2Intensity:.15,lightsColor:1===o?"#FF98A2":"#90EE90",ambientColor:1===o?"#FF98A2":"#4CBB17"}),y({color:1===o?"#b0b0b0":"#90EE90",roughness:.4,metalness:1===o?1:.8})):(A({light1Intensity:1,light2Intensity:1,lightsColor:1===o?"#efefef":"#90EE90",ambientColor:1===o?"#b0B0B0":"#4CBB17"}),y({color:1===o?"#efefef":"#90EE90",roughness:.4,metalness:1===o?.6:.8}))},[N,o]),(0,d.v)(e=>{let{scroll:t}=e;if(!D.current)return;if(L){D.current.scale.setScalar(G.height*k),D.current.position.set(G.width*K[0],G.height*K[1],0),D.current.rotation.fromArray(B.map(e=>m.M8C.degToRad(e)));return}let o=P.findIndex(e=>t<e)-1,i=P[o],a=P[o+1],n=(0,g.KK)(i,a,t,0,1),s=f[o],l=f[o+1];if(D.current&&(D.current.visible=(null==s?void 0:s.type)===(null==l?void 0:l.type)),!l)return;let d=(0,g.KK)(0,1,n,s.scale,l.scale),c=new m.Pa4(G.width*(0,g.KK)(0,1,n,s.position[0],l.position[0]),G.height*(0,g.KK)(0,1,n,s.position[1],l.position[1]),0),u=new m.USm().fromArray([,,,].fill(0).map((e,t)=>(0,g.KK)(0,1,n,s.rotation[t],l.rotation[t])));D.current.scale.setScalar(G.height*d),D.current.position.copy(c),D.current.rotation.copy(u),r(l.type)}),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("ambientLight",{args:[new m.Ilk(1===o?E:I)]}),(0,i.jsx)("group",{position:x,children:(0,i.jsx)("directionalLight",{args:[new m.Ilk(1===o?T:w),v]})}),(0,i.jsx)("group",{position:b,children:(0,i.jsx)("directionalLight",{args:[new m.Ilk(1===o?T:w),j]})}),(0,i.jsx)(n.b,{floatIntensity:L?0:1,rotationIntensity:L?0:1,children:(0,i.jsxs)("group",{ref:D,children:[1===o&&(0,i.jsx)("primitive",{object:e,scale:[F,F,F]}),2===o&&(0,i.jsx)("primitive",{object:t,scale:[F,F,F],position:O})]})})]})}function WebGL(e){let{render:t=!0}=e;return(0,i.jsxs)(r.Xz,{gl:{powerPreference:"high-performance",antialias:!0,alpha:!0},dpr:[1,2],frameloop:"always",orthographic:!0,camera:{near:.01,far:1e4,position:[0,200,-100],zoom:100},children:[(0,i.jsxs)(p.Suspense,{fallback:null,children:[(0,i.jsx)("ambientLight",{intensity:2}),(0,i.jsx)("directionalLight",{position:[10,10,5],intensity:3}),(0,i.jsx)(Arm,{})]}),(0,i.jsx)(Raf,{render:t})]})}}}]);