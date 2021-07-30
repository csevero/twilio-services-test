# Projeto que aborda algumas funcionalidades do Twilio

Em cada useCase será adicionado um resumo sobre a funcionalidade e a forma de utilizá-la, além de links que poderão ser úteis para você utilizar

## Como utilizar

- Primeiro, duplique o arquivo **.env.example** e o renomeie para **.env**
- No arquivo **.env** você terá de preencher os dados que estão lá, no caso os principais são:
  - TWILIO_ACCOUNT_SID e TWILIO_AUTH_TOKEN que podem ser obtidos na tela inicial da sua conta da twilio no console, para obter, pode [clicar aqui](https://www.twilio.com/console)
- As outras variáveis são os números que deseja cadastrar, na maioria das funcionalidades que possuem aqui no projeto precisarão de um ou de outro número, se você está querendo testar o projeto para obter os números basta:
  - TWILIO_SMS_NUMBER e TWILIO_CALL_NUMBER geralmente são o mesmo e se você está em uma conta da Twilio provavelmente ele irá gerar um novo para você, para ver, [clique aqui](https://www.twilio.com/console/phone-numbers)
  - TWILIO_WHATSAPP_NUMBER para testes você pode utilizar o +14155238886, **lembrando** que para conseguir utilizar o whatsapp para testes você precisa verificar seu número, para fazer o procedimento, [clique aqui](https://www.twilio.com/console/sms/whatsapp/learn) e siga o tutorial =D.
- Após tudo isso configurado basta instalar os pacotes com **yarn** ou **npm install**
- Depois rodar localmente, execute o script dev com **yarn dev** ou **npm run dev**
- O projeto está utilizando Typescript então para dar build basta rodar o script **yarn build** ou **npm run build**