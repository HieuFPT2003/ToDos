import html from '../core.js'

function Header(){
    return html`
        <header class="header">
            <h1>todos</h1>
            <input class="new-todo" placeholder="What needs to be done?" autofocus>
        </header>
    `
}

export default Header