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
  - listar pedidos ao desenvolvedor
  - receber ofertas do desenvolvedor
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

## Use cases entre o agente de AI e o Contratante

### Use Case 1 - Fase 1 - Recebimento de pedido feito pelo contratante

- vamos ter salvo no banco de dados o numero do usuário e o tipo de usuário (contratante ou desenvolvedor), sempre que ele refizer o fluxo de entrada soberescrevemos o dados e o tipo de usuário
- O contratante e o lontra ágil vão manter um diálogo para construir a ideia de projeto juntos
- Assim que o contratante e o lontra ágil decidem que o projeto está quase pronto, o lontra ágil diz que vai analisar melhor por 3 dias (implementamos o human in the loop):
  1. Fluxo de confirmação por documento consolidado
    - um representante do lontra ágil analisa o projeto e aprova um documento detalhado do projeto
    - o projeto consolidado é enviado de volta ao contratate para confirmação
  2. Agendamento de video conferência com o contratante
    - um representante do lontra ágil analisa o projeto e realiza uma video conferencia com o contratante
    - ele aprova um documento detalhado do projeto
- Um documento de projeto consolidado é gerado ao final do fluxo

### Use Case 2 - envia proposta ao contratante
  - se receber aceite de proposta envia link de pagamento ao contratante
### Use Case 3 - envia entrega parcial
  - se receber aceite da entrega envia link de pagamento ao contratante
  - se hover recusa, envia formulário de solictação de questonamentos
### Use Case 4 - cancelamento de contrato
### Use Case 5 - reativação de contrato
### Use Case 6 - solicita feedback
  - envia formulário de avaliação do projeto

## Use cases entre o agente de AI e o Desenvolvedor

### Use Case 7 - Listagem de pedidos ao desenvolvedor
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
              Ações rápidas:

              Mais detalhes: Link do Pdf com detalhes
              Fazer proposta

      Mensagem2:
          {nome do proejto 2}
          {descrição breve}
          {budget maximo}
          [Tec1, Tec2]
              Ações rpidas:

              Mais detalhes: Link do Pdf com detalhes
              Fazer proposta

      {...}
  ]
  ```

### Use Case 8 - provimento de detalhes do projeto
  - após a listagem dos projetos vamos ter botões de ação rápida
  - Um deles é o botão do PDF
  - Assim que o desenvolvedor clicar no botão e vai baixar o pdf.
  => assegurar que o arquivo do pdf está disponível para o desenvolvedor

### Use Case 9 - receber ofertas do desenvolvedor
  - após a listagem dos projetos vamos ter botões de ação rápida
  - O botão de Fazer proposta vai redirecionar para um formulário a ser preenchido pelo desenvolvedor para oferecer uma proposta.
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

### Use Case 10 - cadastrar desenvolvedor
### Use Case 11 - editar desenvolvedor
### Use Case 12 - notifica pagamento ao desenvolvedor
### Use Case 13 - recebe solicitação da entrega parcial do desenvolvedor:
  - envia formulário de detalhes da implementação de instruções para validar a entrega

### Use Case 14 - reconhecimento do usuário (dev ou contractor)
  - A gente faz uma validação da mensagem inicial vinda do wa.me se contém os dados necessários para reconhecimento do usuário
  - Se não tiver resolvemos por meio de outro fluxo

### Use Case 15 - prover informações ao usuário
### Use Case 16 - prevenção de abuso da AI para propósitos externos à plataforma
  - recusar qualquer diálogo sem consumir tokens excessivos
### Use Case 17 - Recureperação de conta
  - precisamos verificar se existe um id no whatsapp que identifica o usuário mesmo depois de trocar a o numero
  - ou precisamos implementar outros identificadores do usuário como email

## Workflows


## Agents


## Arquitetura do mastra




Fluxo de onboarding
