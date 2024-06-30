import React from 'react'
import ReactDOM from 'react-dom/client'

//react Element
const h1 = React.createElement('h1', { id: 'title' }, 'Hello app')
const p = React.createElement('p', null, 'Blablablabla')

const app = (
    <div>
        {h1}
        {p}
    </div>
)

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(<React.StrictMode>{app}</React.StrictMode>)
