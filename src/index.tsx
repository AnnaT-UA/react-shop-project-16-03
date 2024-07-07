import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './Header'

type ContentType = {
    title: string
    text1: string
    text2: string
}

const Content = ({ title, text1, text2 }: ContentType) => {
    return (
        <>
            <h2>{title}</h2>
            <p>{text1}</p>
            <p>{text2}</p>
        </>
    )
}

const App = () => {
    return (
        <>
            <Header order={3} text="Title" leftPart="Hello" rightPart="Test" />
            <Header text="App" leftPart="Hi" rightPart="Bla-Bla" />
            <Header text="React" leftPart="Bye-bye" rightPart="Rainbow" />
            <Content title="Content 1" text1="hello 1" text2="Hello 2" />
            <Content
                title="Content 2"
                text1="hello 1"
                text2="Hello 2 lorem blalb alblablbl"
            />
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
