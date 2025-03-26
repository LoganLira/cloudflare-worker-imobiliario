export default {
  async fetch(request) {
    const url = new URL(request.url);
    const subdomain = url.hostname.split(".")[0]; // Captura o subdomínio

    // Se for um subdomínio válido, redireciona
    if (subdomain !== "www" && subdomain !== "imobiliario") {
      return Response.redirect(`https://www.imobiliario.io/home/${subdomain}`, 301);
    }

    // Se não houver subdomínio, mantém a navegação normal
    return new Response("Domínio principal acessado.");
  },
};
