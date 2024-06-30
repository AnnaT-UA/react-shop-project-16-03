import React from 'react'
import ReactDOM from 'react-dom/client'

///function declaration

function Title() {
    return <h1>Hello Title Component</h1>
}

function Content() {
    return (
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam iure
            cumque consectetur tenetur omnis laudantium quos sint sunt neque
            earum aut iusto rerum, officia distinctio saepe reiciendis, commodi
            delectus voluptas.
        </p>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <Title />
        <Content />
    </React.StrictMode>
)
