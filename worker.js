export default {
  async fetch(request) {
    const url = new URL(request.url);
    const hostnameParts = url.hostname.split(".");

    // Remove "www." se estiver presente
    if (hostnameParts[0] === "www") {
      hostnameParts.shift();
    }

    const subdomain = hostnameParts[0]; // Captura o subdomínio (ex: "user1")

    if (subdomain !== "imobiliario") {
      const newUrl = `https://imobiliario.io/home/${subdomain}`; // Redireciona internamente
      const response = await fetch(newUrl, {
        method: request.method,
        headers: request.headers,
      });

      return new Response(response.body, {
        status: response.status,
        headers: response.headers,
      });
    }

    return new Response("Subdomínio inválido", { status: 404 });
  },
};

