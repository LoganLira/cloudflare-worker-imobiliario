export default {
  async fetch(request) {
    let url = new URL(request.url);
    let subdomain = url.hostname.split('.')[0];

    if (subdomain !== "www" && subdomain !== "imobiliario") {
      return Response.redirect(`https://www.imobiliario.io/home/${subdomain}`, 301);
    }

    return new Response("Página padrão do imobiliario.io");
  }
};
