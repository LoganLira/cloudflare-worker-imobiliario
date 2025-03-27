addEventListener('fetch', event => {
  const request = event.request
  const url = new URL(request.url)
  
  // Verifica se o subdomínio contém "www"
  if (url.hostname.startsWith('www.')) {
    // Remove o "www." do hostname
    const newUrl = url.href.replace('www.', '')
    
    // Redireciona para a versão sem "www"
    return event.respondWith(Response.redirect(newUrl, 301))
  }

  // Caso o hostname não tenha "www", continua com o fluxo normal
  // Aqui você pode adicionar a lógica para lidar com o restante da requisição
  event.respondWith(handleRequest(request))
})

// Função de manipulação da requisição (mantenha o seu código original de tratamento aqui)
async function handleRequest(request) {
  // A lógica de tratamento para a sua aplicação
  const url = new URL(request.url)
  const subdomain = url.hostname.split('.')[0] // Extrai o subdomínio (ex: quimoveis)
  
  // Aqui você pode continuar com o seu processamento normal para o subdomínio
  // Exemplo de resposta:
  return new Response(`Subdomínio: ${subdomain}`, {
    headers: { 'content-type': 'text/plain' },
  })
}
