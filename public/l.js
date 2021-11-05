!function () {
  function t() {

    const t = `https://retter-local.dev-test.pro/pixel?pixel_key=ololo321&path=${window.location.hostname}`;
    sessionStorage.setItem("pixelKey", "ololo123");
    const e = document.createElement("script");
    e.type = "text/javascript", e.async = !0, e.src = t;
    const o = document.getElementsByTagName("script")[0];
    o.parentNode.insertBefore(e, o)
    alert("ololol");
  }
  window.attachEvent ? window.attachEvent("onload", t) : window.addEventListener("load", t, !1)

}();