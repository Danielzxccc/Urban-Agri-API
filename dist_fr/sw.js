if(!self.define){let e,i={};const n=(n,r)=>(n=new URL(n+".js",r).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(r,s)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(i[o])return;let t={};const c=e=>n(e,o),d={module:{uri:o},exports:t,require:c};i[o]=Promise.all(r.map((e=>d[e]||c(e)))).then((e=>(s(...e),t)))}}define(["./workbox-fa446783"],(function(e){"use strict";importScripts("./sw.js"),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-31d44d75.css",revision:null},{url:"index.html",revision:"c495a33a351a935da6ba7204ebc8810e"},{url:"agrihub-logo-192-192.png",revision:"58dc9256a94ced172cea92ca533d50f0"},{url:"agrihub-logo-512-512.png",revision:"e6e64bb3876cc0b4eb6374aaf073a339"},{url:"manifest.webmanifest",revision:"090b8840e9b62b7dd86d72d7cd25c8ea"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
