<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css">
<h1 align="center">
Agenda Fácil
<br/>
<br/>
<img src="https://user-images.githubusercontent.com/89225210/220485249-13c2edf6-6340-4867-b837-7b8bcafb6872.png"/>
</h1>

<h3> 💻 Principais funcionalidades </h3>

- Conectar o google calendar
- Escolher os horáios de atendimento
- Agendar um horário dentro os horários disponíveis



<h3> ✨ Desenvolvido com as seguintes tecnologias:</h3>
       
- <a href="https://www.prisma.io/">Prisma</a>
- <a href="https://day.js.org/">Next.js</a>
- <a href="https://stitches.dev/">Stitches</a>
- <a href="https://react-hook-form.com/">React Hook Form</a>
- <a href="https://zod.dev/">Zod</a>
- <a href="https://next-auth.js.org/">Next Auth</a>
- <a href="https://day.js.org/">Day.j</a>
- <a href="https://github.com/axios/axios">Axios</a>
- <a href="https://www.typescriptlang.org/">Typescript</a>
- <a href="https://www.npmjs.com/package/@mujapira-ui/react">Design System</a>
- <a href="https://www.npmjs.com/package/nookies">Nookies</a>

<h2 align="center">🏃‍♂️Instruções</h1>

<h3>Clone o projeto e acesse a pasta.</h3>

```bash
$ git clone git@github.com:mujapira/agenda-facil.git
$ cd agenda-facil
```

<h3>Criar imagem mySQL no docker:</h3>

```bash
docker run --name mysql -e MYSQL_ROOT_PASSWORD=docker -p 3306:3306 mysql:latest
```

<h3> altere o arquivo .env </h3>

```bash
DATABASE_URL=mysql://root:docker@localhost:3306/ignitecall
GOOGLE_CLIENT_ID="preencha com seus dados"
GOOGLE_CLIENT_SECRET="preencha com seus dados"
NEXTAUTH_SECRET="preencha com seus dados"
```

<h3> Inicie o projeto </h3>

```bash
# Instalar as dependências
$ npm install
# Rodar as migrations
$ npx prisma migrate dev
# Iniciar o servidor
$ npx prisma studio
$ docker start mysql
# Iniciar o projeto
$ npm run dev

##Caso seu servidor não seja iniciando, altere a baseURL nas pastas de lib
```
