import{a4 as c}from"./web-ifc-api-CwSt8Jc1.js";import{S as l}from"./stats.min-BpIepu9J.js";import{p as d,J as a,m as i}from"./index-K5IA6oiZ.js";import{p,C as m,s as b,i as u,H as g,d as f,u as h,g as w,A as y}from"./index-DGU7st_s.js";const A=document.getElementById("container"),t=new p,x=t.get(m),e=x.create();e.scene=new b(t);e.renderer=new u(t,A);e.camera=new g(t);t.init();e.camera.controls.setLookAt(12,6,8,0,0,-10);e.scene.setup();const I=t.get(f);I.create(e);e.scene.three.background=null;const L=new h(t),v=await fetch("https://thatopen.github.io/engine_components/resources/small.frag"),C=await v.arrayBuffer(),E=new Uint8Array(C),s=L.load(E);e.scene.three.add(s);const k=await fetch("https://thatopen.github.io/engine_components/resources/small.json");s.setLocalProperties(await k.json());const T=t.get(w),U=t.get(y);U.byIfcRel(s,c,"storeys");const n=new l;n.showPanel(2);document.body.append(n.dom);n.dom.style.left="0px";n.dom.style.zIndex="unset";e.renderer.onBeforeUpdate.add(()=>n.begin());e.renderer.onAfterUpdate.add(()=>n.end());d.init();const o=a.create(()=>i`
    <bim-panel active label="Exploder Tutorial" class="options-menu">
      <bim-panel-section collapsed label="Controls">
        <bim-checkbox 
          label="Explode model" 
          @change="${({target:r})=>{T.set(r.value)}}">  
        </bim-checkbox>  

      </bim-panel-section>
    </bim-panel>
    `);document.body.append(o);const R=a.create(()=>i`
      <bim-button class="phone-menu-toggler" icon="solar:settings-bold"
        @click="${()=>{o.classList.contains("options-menu-visible")?o.classList.remove("options-menu-visible"):o.classList.add("options-menu-visible")}}">
      </bim-button>
    `);document.body.append(R);
