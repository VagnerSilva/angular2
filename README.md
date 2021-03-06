# Angular2

# **Pré-requisitos**

#### **Instalação**
----------
Node.js

**Como instalar**

 1. Windows
 Efetue o download do [Node.js](https://nodejs.org/en/) e instalar da forma padrão (next...).
 2. Ubuntu
 ```
sudo apt-get install nodejs
sudo apt-get install npm
sudo ln -s /usr/bin/nodejs /usr/bin/node

Para testar...
$ node -v
v6.3.0
$ npm -v
3.10.5
```
 
 3. Mac
 
```
   brew install node
```

**Configuração**

Adicione na raiz do seu projeto, os arquivos de configuração.

+ [package.json](https://github.com/VagnerSilva/angular2/blob/master/package.json)
+ [tsconfig.json](https://github.com/VagnerSilva/angular2/blob/master/gulp/conf/tsconfig.json) (copiar parar gulp/conf)
+ [typings.json](https://github.com/VagnerSilva/angular2/blob/master/typings.json)
+ [tslint.json](https://github.com/VagnerSilva/angular2/blob/master/tslint.json)
+ [.jshintrc](https://github.com/VagnerSilva/angular2/blob/master/.jshintrc)


 **Instalando Dependências**
 
Depois de adicionarmos os arquivos de configuração, instalaremos  as seguintes dependências de modo global. 

    npm install --global bower gulp-cli typescript typings

E posteriormente, as dependências de desenvolvimento.

    npm install --save-dev gulp gulp-typescript gulp-sourcemaps browser-sync superstatic

Por fim execute o comando

    npm install


