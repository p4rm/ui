const t=(t,n)=>{const o=t._original||t;return{_original:t,emit:e(o.emit.bind(o),n)}},e=(t,e=0)=>{let n;return(...o)=>{clearTimeout(n),n=setTimeout(t,e,...o)}};async function n(t){return new Promise((e=>{const n=document.createElement("script");n.src=t,n.addEventListener("load",(()=>{e()})),document.head.appendChild(n)}))}const o=t=>{const e=t.closest("p4-item");return e?e.querySelector("p4-label"):null};export{e as a,t as d,o as f,n as l}