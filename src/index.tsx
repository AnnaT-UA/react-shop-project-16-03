import React from 'react'
import ReactDOM from 'react-dom/client'

//react Element
// const h1 = React.createElement('h1', { id: 'title' }, 'Hello app')
// const p = React.createElement('p', null, 'Blablablabla')

// const app = (
//     <div>
//         {h1}
//         {p}
//     </div>
// )

const h1 = <h1 id="title"> Hello App</h1>
const p = (
    <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam iure
        cumque consectetur tenetur omnis laudantium quos sint sunt neque earum
        aut iusto rerum, officia distinctio saepe reiciendis, commodi delectus
        voluptas.
    </p>
)

const ul = (
    <ul>
        <li>List item 1</li>
        <li>List item 2</li>
        <li>List item 2</li>
    </ul>
)

const app = (
    <div>
        {h1}
        {p}
        {ul}
    </div>
)

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(<React.StrictMode>{app}</React.StrictMode>)
