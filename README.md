# ReactJs

# hw1
1) Установка по методичке не работает,  webpack-dev-server не запускается. 

Есть два варианта: 
- Удалить то что установленно из методички и установить версии и запускать : 
npm uninstall webpack webpack-cli webpack-dev-server
npm init
npm install webpack@4
npm install webpack-cli@3
./node_modules/webpack/bin/webpack.js  //Запуск сборки приложения
npm install webpack-dev-server@3
./node_modules/webpack-dev-server/bin/webpack-dev-server.js //Запуск webpack-dev-server
 

- Либо 
npm init
npm install webpack
npm install webpack-cli
./node_modules/webpack/bin/webpack.js  //Запуск сборки приложения
npm install webpack-dev-server

В файл package.json в секцию scripts дописать 
  "scripts": {
    "dev": "npm run webpack serve"
  },

npm run dev //Теперь webpack-dev-sever запускается командой 

Описание проблемы https://github.com/webpack/webpack-dev-server/issues/2424
"Please use webpack serve instead of using webpack-dev-server in package.json"




2) Чтобы jsx babel заработали, надо добавить  в package.json 

https://habr.com/ru/company/ruvds/blog/436886/

"babel": {
    "presets": [
      "@babel/env",
      "@babel/react"
    ]
  }


  # hw2

 Чтобы все работало с 