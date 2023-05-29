// Verifica se o navegador suporta a API Web Speech
if ("webkitSpeechRecognition" in window) {
  // Cria um objeto para reconhecimento de fala
  const recognition = new webkitSpeechRecognition();

  // Define se o reconhecimento deve parar quando o usuário parar de falar
  recognition.continuous = false;

  // Define o idioma utilizado para reconhecimento de fala
  recognition.lang = "pt-BR";

  // Executa essa função quando houver resultado de reconhecimento de fala
  recognition.onresult = function (event) {
    // Obtém o texto reconhecido
    const result = event.results[0][0].transcript;

    // Exibe o resultado na div com id "result"
    document.getElementById("result").innerText = result;
  };

  // Executa essa função quando ocorrer um erro no reconhecimento de fala
  recognition.onerror = function (event) {
    console.log("Erro no reconhecimento de fala");
  };

  // Adiciona um listener para o botão que inicia o reconhecimento de voz
  document.getElementById("start-btn").addEventListener("click", function () {
    // Muda o texto do botão quando iniciado o reconhecimento
    this.innerText = "Ouvindo...";

    // Inicia o reconhecimento de fala
    recognition.start();
  });

  // Adiciona um listener para o botão que para o reconhecimento de voz
  document.getElementById("stop-btn").addEventListener("click", function () {
    // Para o reconhecimento de fala
    recognition.stop();

    // Muda o texto do botão de iniciar para a inicialização posterior
    document.getElementById("start-btn").innerText = "Iniciar";
  });
} else {
  console.log("API Web Speech não suportada pelo navegador");
}
