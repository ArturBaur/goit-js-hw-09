const t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]"),a=document.body;let d;t.addEventListener("click",(()=>{t.disabled=!0,d=setInterval((()=>{const t=`#${Math.floor(16777215*Math.random()).toString(16)}`;a.style.backgroundColor=t}),1e3)})),e.addEventListener("click",(()=>{t.disabled=!1,clearInterval(d)}));
//# sourceMappingURL=01-color-switcher.d1c5c080.js.map
