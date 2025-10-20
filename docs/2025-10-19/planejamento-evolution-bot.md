# Evolution Agent 

## Descrição do Agente

- Lontra ágil vai fazer o papel de PO entre contratante e desenvolvedores e de intermediário de contratação do serviço de desenvolvimento

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
  - prover informações ao usuário
  - prevenção de abuso da AI para propósitos externos à plataforma
    - recusar qualquer diálogo sem consumir tokens excessivos

### Dúvidas
  - anonimato ou não comunicação entre contratante e desenvolvedor: lontra-agil faz papel de PO
  - fluxo de contraposta do contratante
  - fluxo de comunicação direta (dúvidas e reparos rápidos)
  - suporte para múltiplos projetos por um mesmo desenvolvedor
  - conferências em video chamada de representantes do lontra ágil perante contrantes e desenvolvedores
  - backup dos repositorios

### Use Case - Recebimento de pedido feito pelo contratante

- O contratante e o lontra ágil vão manter um diálogo para construir a ideia de projeto juntos
- Assim que o contratante e o lontra ágil decidem que o projeto estão quase pronto, o lontra ágil diz que vai analisar melhor por 3 dias (implementamos o human in the loop):
  1. Fluxo de confirmação por documento consolidado
    - um representante do lontra ágil analisa o projeto e aprova um documento detalhado do projeto
    - o projeto consolidado é enviado de volta ao contratate para confirmação
  2. Agendamento de video conferência com o contratante
    - um representante do lontra ágil analisa o projeto e realiza uma video conferencia com o contratante
    - ele aprova um documento detalhado do projeto
- Um documento de projeto consolidado é gerado ao final do fluxo

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
