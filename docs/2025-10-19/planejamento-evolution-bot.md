# Evolution Agent 

## Use Cases

1. Conversa com contratante
  - recebe pedido de projeto do cliente
  - envia proposta ao contratante
    - se receber aceite de proposta envia link de pagamento ao contratante
  - envia entrega parcial
    - se receber aceite da entrega envia link de pagamento ao contratante
    - se hover recusa, envia formulário de solictação de questonamentos
  - cancelamento de contrato
  - reativação de contrato
  - solicita feedback
    - envia formulário de avaliação do projeto
2. Conversa com desenvolvedor
  - cadastrar desenvolvedor
  - editar desenvolvedor
  - entregar pedidos ao desenvolvedor
  - receber ofertas
  - notifica pagamento ao desenvolvedor
  - recebe solicitação da entrega parcial do desenvolvedor:
    - envia formulário de detalhes da implementação de instruções para validar a entrega
3. Conversa com usuário qualquer
  - reconhecimento do usuário (dev ou contractor)
  - conversar em dar informações
  - recusar qualquer diálogo sem consumir tokens excessivos

### Dúvidas
- anonimato por parte do contratante
- fluxo de contraposta do contratante
- fluxo de comunicação direta (dúvidas e reparos rápidos)
- suporte para múltiplos projetos por um mesmo desenvolvedor
- conferências em video chamada de representantes do lontra ágil perante contrantes e desenvolvedores

### Use Case - Oferecimento de pedidos ao desenvolvedor

- O desenvolvedor começa um diálogo e pergunta por pedidos
- O Agente tem o conhecimento do desenvolvedor com quem ele fala, pois o cadastro e o reconhecimento já foi feito, e ele sabe que tipos de requisitos o desenvolvedor consegue lidar
- O Agente consegue pré-selecionar projeto e oferecer
- O Agente manda uma unica mensagem com nome e descrições breves de cada projeto

```
[
    Estes são os projetos que eu acredito que voce vai gostar:

    Mensagem1:
        {nome do proejto 1}
        {descrição breve}
        {budget maximo}
        [Tec1, Tec2]
            Ações ráidas:

            Mais detalhes: Link do Pdf com detalhes
            Fazer proposta

    Mensagem2:
        {nome do proejto 2}
        {descrição breve}
        {budget maximo}
        [Tec1, Tec2]
            Ações ráidas:

            Mais detalhes: Link do Pdf com detalhes
            Fazer proposta

    {...}
]
```

- O desenvolvedor consegue interagir e pedir mais informações do projeto por link do pdf.
- Quando o desenvolvedor clicar em Fazer proposta, o agente deve oferecer um formulário a ser preenchido pelo desenvolvedor para oferecer uma proposta.

```
type Proposal = {
    upfrontPaymentValue: number
    deliverables: Array<{
        title: string (title)
        type: enum([MVP, Revision, Release])
        description: string (text area)
        value: number (currency)
    }>
}
```

## Workflows


## Agents


## Arquitetura do mastra




Fluxo de onboarding
