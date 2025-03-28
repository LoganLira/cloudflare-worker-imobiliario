addEventListener("fetch", event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  const url = new URL(request.url)
  let subdomain = url.hostname.split(".")[0] // Pega o subdomínio antes do ".imobiliario.io"

  // Remove "www." se estiver presente
  if (subdomain === "www") {
    subdomain = url.hostname.split(".")[1] || "default"
  }

  // Redireciona para o caminho com o subdomínio
  const newUrl = `https://imobiliario.io/home/${subdomain}`

  return Response.redirect(newUrl, 301)
}
