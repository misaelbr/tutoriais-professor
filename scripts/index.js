function loadScript(url) {
    // aguarda o evento de carregamento do documento
    document.addEventListener("DOMContentLoaded", function() {
      // cria um elemento script
      var script = document.createElement("script");
      script.src = url;
      // adiciona o script ao final do corpo do documento
      document.body.appendChild(script);
    });
 }

loadScript("scripts/collapsible.js");