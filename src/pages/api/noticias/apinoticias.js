import { noticias } from "./noticias";

export default function handler(req, res) {
  res.status(200).json(noticias);
}

  /*
  https://nextjs.org/learn/seo/status-codes

  Tipos de códigos de status HTTP:
  Códigos Informativos (1xx): Indicam que o servidor recebeu a solicitação e está processando-a.
  Códigos de Sucesso (2xx): Indicam que a solicitação foi bem-sucedida e o servidor retornou a resposta esperada.
  Códigos de Redirecionamento (3xx): Indicam que o cliente precisa tomar mais medidas para completar a solicitação, geralmente um redirecionamento para outra página.
  Códigos de Erro do Cliente (4xx): Indicam que a solicitação contém um erro e não pode ser processada pelo servidor, geralmente devido a uma falha do cliente.
  Códigos de Erro do Servidor (5xx): Indicam que o servidor encontrou um problema interno e não pôde processar a solicitação.  
  
  Mais comuns:
  200 OK, 
  301 Movido Permanentemente, 
  400 Solicitação Inválida, 
  401 Não Autorizado, 
  403 Proibido, 
  404 Não Encontrado, 
  500 Erro Interno do Servidor 
  503 Serviço Indisponível
   */