# ReactJs

1) Установка по методичке не работает! 
Удалить то что установленно из методички и установить версии: 
npm uninstall webpack
npm install webpack@4

npm uninstall webpack-cli webpack-dev-server

npm install webpack-cli@3
npm install webpack-dev-server@3

2) Чтобы jsx babel заработали, надо добавить  в package.json 

"babel": {
    "presets": [
      "@babel/env",
      "@babel/react"
    ]
  }