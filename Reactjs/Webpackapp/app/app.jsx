var ReactDOM = require('react-dom');
var React = require('react');
var ItemsList = require('./components/ItemsList');

//  https://metanit.com/web/react/2.9.php

const propsValues = {
    title: "Список смартфонов",
    items: [
        "HTC U Ultra", 
        "iPhone 7", 
        "Google Pixel", 
        "Huawei P9", 
        "Meizu Pro 6", 
        "Asus Zenfone 3"
    ]
};
 
ReactDOM.render(
    <ItemsList data={propsValues} />,
    document.getElementById("container")
)
/*
Напишите пожалуйста, как настроить webpack чтобы он автоматически компилил файлы при разработке, а не запускать его каждый раз из командной строки?
 
•Ответить•Поделиться ›
Аватар
S-le  Andrey • 6 месяцев назад
В файл конфигурации webpack.config.js добавьте следующие параметры:
watch: true, // следить за изменениями в файлах
watchOptions: {
aggregateTimeout: 100 // т.е. пересобирать файлы начнет только спустя указанное в миллисекундах время (в данном случае 100)
}

Можно настроить более гибко, чтобы webpack не следил за изменениями в версии для релиза. Но тут уже почитайте статьи по настройке webpack.
*/