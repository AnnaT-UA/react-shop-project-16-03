import React from 'react'
import ReactDOM from 'react-dom/client'

///Arrow function

const Title = () => <h1>Hello Title Component</h1>

const Content = () => {
    return (
        <div>
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
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <Title />
        <Content />
    </React.StrictMode>
)
