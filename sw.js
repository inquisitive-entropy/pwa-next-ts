if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return n[e]||(s=new Promise((async s=>{if("document"in self){const n=document.createElement("script");n.src=e,document.head.appendChild(n),n.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!n[e])throw new Error(`Module ${e} didn’t register its module`);return n[e]}))},s=(s,n)=>{Promise.all(s.map(e)).then((e=>n(1===e.length?e[0]:e)))},n={require:Promise.resolve(s)};self.define=(s,t,c)=>{n[s]||(n[s]=Promise.resolve().then((()=>{let n={};const a={uri:location.origin+s.slice(1)};return Promise.all(t.map((s=>{switch(s){case"exports":return n;case"module":return a;default:return e(s)}}))).then((e=>{const s=c(...e);return n.default||(n.default=s),n}))})))}}define("./sw.js",["./workbox-030153e1"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/pwa-next-ts/_next/static/chunks/f6078781a05fe1bcb0902d23dbbb2662c8d200b3.e82b60c8e7f6e0c10159.js",revision:"qCuROcp5VyWl3Bc8qZe3R"},{url:"/pwa-next-ts/_next/static/chunks/framework.c5f96f523b612591abef.js",revision:"qCuROcp5VyWl3Bc8qZe3R"},{url:"/pwa-next-ts/_next/static/chunks/main-666fa2611b5d74f9c378.js",revision:"qCuROcp5VyWl3Bc8qZe3R"},{url:"/pwa-next-ts/_next/static/chunks/pages/_app-2411b07f5eaa119c83ba.js",revision:"qCuROcp5VyWl3Bc8qZe3R"},{url:"/pwa-next-ts/_next/static/chunks/pages/_error-f54bd0c3f10f89ba1510.js",revision:"qCuROcp5VyWl3Bc8qZe3R"},{url:"/pwa-next-ts/_next/static/chunks/pages/index-f63d86b802bb46ba8a7a.js",revision:"qCuROcp5VyWl3Bc8qZe3R"},{url:"/pwa-next-ts/_next/static/chunks/polyfills-aa54647e89713304033b.js",revision:"qCuROcp5VyWl3Bc8qZe3R"},{url:"/pwa-next-ts/_next/static/chunks/webpack-50bee04d1dc61f8adf5b.js",revision:"qCuROcp5VyWl3Bc8qZe3R"},{url:"/pwa-next-ts/_next/static/css/94f0e0fcd1f94c743117.css",revision:"qCuROcp5VyWl3Bc8qZe3R"},{url:"/pwa-next-ts/_next/static/qCuROcp5VyWl3Bc8qZe3R/_buildManifest.js",revision:"qCuROcp5VyWl3Bc8qZe3R"},{url:"/pwa-next-ts/_next/static/qCuROcp5VyWl3Bc8qZe3R/_ssgManifest.js",revision:"qCuROcp5VyWl3Bc8qZe3R"},{url:"/pwa-next-ts/favicon.ico",revision:"21b739d43fcb9bbb83d8541fe4fe88fa"},{url:"/pwa-next-ts/icons/icon-128x128.png",revision:"d626cfe7c65e6e5403bcbb9d13aa5053"},{url:"/pwa-next-ts/icons/icon-144x144.png",revision:"e53a506b62999dc7a4f8b7222f8c5add"},{url:"/pwa-next-ts/icons/icon-152x152.png",revision:"18b3958440703a9ecd3c246a0f3f7c72"},{url:"/pwa-next-ts/icons/icon-16x16.png",revision:"83703514f19796ee15151e450984416d"},{url:"/pwa-next-ts/icons/icon-192x192.png",revision:"27dc12f66697a47b6a8b3ee25ba96257"},{url:"/pwa-next-ts/icons/icon-32x32.png",revision:"25e2c6ee34840568012b32e4314278df"},{url:"/pwa-next-ts/icons/icon-384x384.png",revision:"a40324a3fde2b0b26eeffd4f08bf8be8"},{url:"/pwa-next-ts/icons/icon-512x512.png",revision:"93d6e8e15cfa78dfee55446f607d9a28"},{url:"/pwa-next-ts/icons/icon-72x72.png",revision:"f2ffc41b3482888f3ae614e0dd2f6980"},{url:"/pwa-next-ts/icons/icon-96x96.png",revision:"fba02a40f7ba6fc65be8a2f245480f6d"},{url:"/pwa-next-ts/icons/pwa-icon-192x192.png",revision:"9176688720e2ae431372da7e25ee50ba"},{url:"/pwa-next-ts/icons/pwa-icon-512x512.png",revision:"e6cec51afec10d453c6caf8a9d37aee7"},{url:"/pwa-next-ts/manifest.json",revision:"2bf8c5050196c4baa3e1f36abcf78032"},{url:"/pwa-next-ts/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[new e.ExpirationPlugin({maxEntries:1,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/api\/.*$/i,new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/.*/i,new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));
