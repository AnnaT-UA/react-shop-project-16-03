import React from 'react'
import ReactDOM from 'react-dom/client'

///Arrow function

type HeaderProps = {
    text: string
}

const Header = (props: HeaderProps) => {
    console.log(props)
    return <h1>Hello {props.text} Component</h1>
}
const Content = () => {
    return (
        <React.Fragment>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
                iure cumque consectetur tenetur omnis laudantium quos sint sunt
                neque earum aut iusto rerum, officia distinctio saepe
                reiciendis, commodi delectus voluptas.
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
                iure cumque consectetur tenetur omnis laudantium quos sint sunt
                neque earum aut iusto rerum, officia distinctio saepe
                reiciendis, commodi delectus voluptas.
            </p>
        </React.Fragment>
    )
}

const App = () => {
    return (
        <>
            <Header text="Title" />
            <Header text="App" />
            <Header text="React" />

            <Content />
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
