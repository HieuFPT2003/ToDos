import html from '../core.js'

function TodoItem({todo}){
    console.log(todo);
    return html`
        <li class = "completed">
            <div class="view">
                <input class="toggle" type="checkbox">
                <label>Buy a unicorn</label>
                <button class="destroy"></button>
            </div>
            <input class="edit" value="Rule the web">
        </li>
    `
}

export default TodoItem