var v=Object.defineProperty;var i=(r,e)=>v(r,"name",{value:e,configurable:!0});i(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const s of a)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function t(a){const s={};return a.integrity&&(s.integrity=a.integrity),a.referrerPolicy&&(s.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?s.credentials="include":a.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}i(t,"getFetchOpts");function n(a){if(a.ep)return;a.ep=!0;const s=t(a);fetch(a.href,s)}i(n,"processPreload")},"polyfill")();let o=1;document.addEventListener("DOMContentLoaded",()=>{d(o)});function d(r){document.querySelectorAll(".step").forEach(e=>e.style.display="none"),document.querySelector(`.step[data-step="${r}"]`).style.display="block"}i(d,"showStep");function h(){o++,d(o),o===3&&(document.querySelector(".nextButton").style.display="none")}i(h,"nextStep");function u(r){const e=document.getElementById("fullName"),t=e.nextElementSibling,a=/^[A-Za-z\s]+$/.test(e.value.trim());if(r)return a;a?(e.classList.remove("is-invalid"),e.classList.add("is-valid"),t.textContent=""):(e.classList.remove("is-valid"),e.classList.add("is-invalid"),t.textContent="Please Enter Valid Name"),f()}i(u,"validateFullName");function p(r){const e=document.getElementById("dob"),t=e.nextElementSibling,n=new Date,a=new Date(e.value.trim()),s=new Date(n);s.setFullYear(n.getFullYear()-60);const l=new Date(n);l.setFullYear(n.getFullYear()-18);const c=a>=s&&a<=l;if(r)return c;c?(e.classList.remove("is-invalid"),e.classList.add("is-valid"),t.textContent=""):(e.classList.remove("is-valid"),e.classList.add("is-invalid"),t.textContent=a>=s?"Minimum age requirements, 18 years old":"Maximum age requirements, 60 years old"),f()}i(p,"validateDateOfBirth");function m(r){const e=document.getElementById("password"),t=e.value.trim(),n=e.nextElementSibling,a=/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/,s={length:null,number:null,lowerCase:null,upperCase:null,specialChar:null};s.length=!!(t.length>7&t.length<16),s.number=/\d/.test(t),s.lowerCase=/[a-z]/.test(t),s.upperCase=/[A-Z]/.test(t),s.specialChar=a.test(t);const l=s.length&&s.number&&s.lowerCase&&s.upperCase&&s.specialChar;if(r)return l;l?(e.classList.remove("is-invalid"),e.classList.add("is-valid")):(e.classList.remove("is-valid"),e.classList.add("is-invalid")),n.querySelector("#passwordLength").className=s.length?"text-success":"text-danger",n.querySelector("#passwordNumber").className=s.number?"text-success":"text-danger",n.querySelector("#passwordLowerCase").className=s.lowerCase?"text-success":"text-danger",n.querySelector("#passwordUpperCase").className=s.upperCase?"text-success":"text-danger",n.querySelector("#passwordSpecialChar").className=s.specialChar?"text-success":"text-danger",y()}i(m,"validatePassword");function g(r){const e=document.getElementById("email"),t=e.nextElementSibling,a=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(e.value.trim());if(r)return a;a?(e.classList.remove("is-invalid"),e.classList.add("is-valid"),t.textContent=""):(e.classList.remove("is-valid"),e.classList.add("is-invalid"),t.textContent="Please Enter Valid Email"),y()}i(g,"validateEmail");function f(){const r=u(!0)&&p(!0),e=document.querySelector(".nextButton");e.disabled=!r;const t=document.getElementById("step1progress");t.ariaValueNow=r?"50":"0",t.querySelector(".progress-bar").style.width=r?"50%":"0"}i(f,"updateStep1");function y(){const r=g(!0)&&m(!0),e=document.querySelector(".submitButton");e.disabled=!r;const t=document.getElementById("step2progress");t.ariaValueNow=r?"50":"0",t.querySelector(".progress-bar").style.width=r?"50%":"0"}i(y,"updateStep2");document.getElementById("registrationForm").addEventListener("submit",r=>{r.preventDefault(),u(!0)&&p(!0)&&g(!0)&&m(!0)?h():alert("Invalid input. Please check your information.")});fetch("https://api.coinlore.net/api/ticker/?id=90,80,58,1,2321").then(r=>{if(!r.ok)throw new Error(`HTTP error! Status: ${r.status}`);return r.json()}).then(r=>{let e="";r.map(t=>{const n=parseFloat(t.percent_change_24h)<0;e+=`
                <div class="crypto">
                    <div class="crypto-name">
                        <img src="../img/${t.symbol.toLowerCase()}.svg" width="34" height="34" alt=${t.name} />
                        <span class="crypto-symbol">${t.symbol}</span>
                        <span class="badge text-bg-warning text-uppercase">${t.name}</span>
                    </div>
                    <hr />
                    <div class="crypto-price">$${t.price_usd}</div>
                    <div class="crypto-percent ${n?"text-danger":"text-success"}">${n?"&#5121;":"&#5123;"} ${Math.abs(t.percent_change_24h)}%</div>
                </div>
            `}),document.getElementById("crypto-stats").innerHTML=e}).catch(r=>console.error("Fetch error: ",r));
