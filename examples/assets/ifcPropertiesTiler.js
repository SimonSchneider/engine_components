import"./web-ifc-api-CwSt8Jc1.js";import{S as b}from"./stats.min-BpIepu9J.js";import{p as w,J as f,m as u}from"./index-K5IA6oiZ.js";import{p as y,C as g,s as h,i as B,H as k,d as F,u as L,b as S,k as U}from"./index-DGU7st_s.js";const v=document.getElementById("container"),n=new y,x=n.get(g),s=x.create();s.scene=new h(n);s.renderer=new B(n,v);s.camera=new k(n);n.init();s.camera.controls.setLookAt(12,6,8,0,0,-10);s.scene.setup();const I=n.get(F);I.create(s);s.scene.three.background=null;const R=new L(n),A=await fetch("https://thatopen.github.io/engine_components/resources/small.frag"),P=await A.arrayBuffer(),j=new Uint8Array(P),C=R.load(j);s.scene.three.add(C);function J(e,o){const t=new File([o],e),a=document.createElement("a"),m=URL.createObjectURL(t);a.href=m,a.download=t.name,a.click(),URL.revokeObjectURL(m)}async function O(e){for(const{name:o,bits:t}of e)J(o,t),await new Promise(a=>{setTimeout(a,100)})}const c=n.get(S);c.settings.wasm={path:"https://unpkg.com/web-ifc@0.0.53/",absolute:!0};const r={types:{},ids:{},indexesFile:"small.ifc-processed-properties-indexes"};let l=0;const d=[];c.onPropertiesStreamed.add(async e=>{r.types[e.type]||(r.types[e.type]=[]),r.types[e.type].push(l);for(const a in e.data)r.ids[a]=l;const o=`small.ifc-processed-properties-${l}`,t=new Blob([JSON.stringify(e.data)]);d.push({bits:t,name:o}),l++});c.onProgress.add(async e=>{console.log(e)});c.onIndicesStreamed.add(async e=>{d.push({name:"small.ifc-processed-properties.json",bits:new Blob([JSON.stringify(r)])});const t=n.get(U).serializeRelations(e);d.push({name:"small.ifc-processed-properties-indexes",bits:new Blob([t])}),await O(d)});async function $(){const o=await(await fetch("https://thatopen.github.io/engine_components/resources/small.ifc")).arrayBuffer(),t=new Uint8Array(o);await c.streamFromBuffer(t)}const i=new b;i.showPanel(2);document.body.append(i.dom);i.dom.style.left="0px";i.dom.style.zIndex="unset";s.renderer.onBeforeUpdate.add(()=>i.begin());s.renderer.onAfterUpdate.add(()=>i.end());w.init();const p=f.create(()=>u`
  <bim-panel active label="Property Tiles Tutorial" class="options-menu">
   <bim-panel-section collapsed label="Controls">
      
      <bim-panel-section style="padding-top: 12px;">
      
        <bim-button label="Load IFC"
          @click="${()=>{$()}}">
        </bim-button>  
      
      </bim-panel-section>
      
    </bim-panel>
  `);document.body.append(p);const z=f.create(()=>u`
      <bim-button class="phone-menu-toggler" icon="solar:settings-bold"
        @click="${()=>{p.classList.contains("options-menu-visible")?p.classList.remove("options-menu-visible"):p.classList.add("options-menu-visible")}}">
      </bim-button>
    `);document.body.append(z);
