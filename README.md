# Avaliação técnica Backend

Clone este repositório e implemente o endpoint ```/usuarios-ativos``` desta aplicação.

Os dados necessários para o resultado devem ser consumidos da API externa informada pelo entrevistador. A documentação da API encontra-se na rota ```/docs``` da API externa.

**Chave de acesso da API externa**: ```APIKEY_690c335243fc72a58da0f904aa```

## Requisitos da Avaliação:

### Obrigatórios
  
- O retorno do endpoint deve apresentar um array com os usuários adequados com a seguinte tipagem:
```bash
{
  id: number
  nome: string
  status: string
}
```

- O tempo de resposta da requisição deverá ser menor do que 1 minuto e 40 segundos, sendo diferencial qualquer tempo menor do que este.

### Diferenciais

- Tempo de resposta da requisição inferior a 5 segundos.

- Documentação do endpoint com ```@nestjs/swagger```.

- Teste unitário.
