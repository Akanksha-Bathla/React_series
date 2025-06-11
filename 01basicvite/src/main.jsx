import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Youtube from './Youtube.jsx'
import React from 'react'

const reactElement = {
    type: 'a',
    props: {
        href: "https://www.google.com",
        target: "_blank",
    },
    children: 'Click me to open Google',
}

function MyApp(){
    return(
        <div>
            <h1>Custom React App</h1>
        </div>
    )
}

const AnotherElement = (
    <a href="http://google.com" target = '_blank'>Visit Google</a>
)

const areactElement = React.createElement(
    'a',
    {
        href: "https://www.google.com",
        target: "_blank",
    },
    'Click me to open Google'
)


createRoot(document.getElementById('root')).render(
    <>
    <MyApp />
    AnotherElement <br/>
    areactElement
    <App />
    </>
    
)
