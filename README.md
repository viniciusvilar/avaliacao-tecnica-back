# Avaliação técnica Backend

Você deverá implementar o endpoint ```/usuarios-ativos``` desta aplicação.

Os dados necessários para o resultado devem ser consumidos da API informada.

**Chave de acesso**: ```APIKEY_690c335243fc72a58da0f904aa```

## Requisitos:

### Obrigatórios

- O retorno do endpoint deve apresentar um array de usuarios ativos. O usuário deverá ser apresentado conforme o seguinte objeto:
```bash
{
  id: number
  nome: string
  status: string
}
```

- O tempo de resposta da requisição deverá ser menor do que 2 minutos, sendo diferencial qualquer tempo menor do que este.

### Diferenciais

- Tempo de resposta da requisição inferior a 5 segundos.

- Documentação do endpoint.

- Testes unitários.
