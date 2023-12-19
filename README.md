## Hdev Client

Esse projeto é um client que provê uma interface para uma aplicação no nicho de saúde. Server da aplicação: [Hdev Server](https://github.com/guifaxina/healthdev)

### Acesse o projeto em produção:

"https://healthdev-guifaxinas-projects.vercel.app/"

## Guia de instalação.

As seguintes instruções vão gerar uma cópia do projeto pronto para rodar em sua máquina localmente.
O projeto requer o Node versão >= v18.17.0

1. Clone o projeto:
```sh
$ git clone "https://github.com/guifaxina/healthdev.git" <pasta(opcional)>
```
2. Entre na pasta que você especificou:
```sh
$ cd <pasta>
```
3. Instale as dependências e rode a aplicação:
```sh
$ npm i && npm run build && npm run start
```
O servidor agora irá estar rodando em <strong>http://localhost:3000</strong>

### Variáveis

Caso enfrente problemas com as requisições você provavelmente deverá alterar o arquivo src/variables.ts para o endereço que está rodando o server, por exemplo "http://localhost:8080"

#### Upload

Foi implementado upload da foto de perfil do usuário. O client faz uma requisição para o servidor solicitando uma URL de postagem, utilizando essa URL o client pode então fazer novamente uma requisição, diretamente para o bucket do S3. Poupando recursos e computação do servidor.

### Feito com
* TypeScript
* Next
  * React
* TailwindCSS
* ShadcnUI (Radix)
  * Framer motion
* React-hook-form
* Axios

### Author
* [Guilherme Faxina](https://www.linkedin.com/in/guifaxina/)
