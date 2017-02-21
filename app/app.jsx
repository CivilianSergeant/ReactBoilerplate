var React = require('react');
var ReactDOM = require('react-dom');
var objOne = {
    name:"Himel"
};
var objTwo = {
    age:29,
    ...objOne
};
console.log(objTwo);
ReactDOM.render(
    <h1>Hello World!</h1>,
    document.getElementById('app')
);