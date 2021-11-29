//const element = document.createAttribute('h1') //estamos creando un h1

//element.innerText = 'Hello React..' //estamos introduciendo texto al h1 creado

//y donde lo vamos a desplegar?

//const container = document.getElementById('root')

//container.appendChild(element)

import React from 'react'
import ReactDOM from 'react-dom'

const element = <h1>Hello React</h1>
const container = document.getElementById('root')

//reactdom gestiona el dom

//ReactDOM.render(_QUE_,_DONDE_)

ReactDOM.render(element,container)