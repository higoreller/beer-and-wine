# Instala a imagem base do Node.js
FROM node:16-alpine3.16

# Define o diretório de trabalho da aplicação dentro do container
WORKDIR /app

# Copia o package.json e o package-lock.json para o diretório de trabalho
COPY package*.json ./

# Instala as dependências do projeto
RUN npm install

# Copia o restante do código para o diretório de trabalho
COPY . .

# Expõe a porta 5100 para acesso externo
EXPOSE 5100

# Define o comando que será executado quando o container iniciar
CMD ["npm", "start"]