// Interface -> A way of geneerating your own Types in TS
interface Todo {
    title: string,
    text: string
}

function showTodo(todo: Todo): void {
    console.log(`${todo.title}: ${todo.text}`);
}

let todo = {title: '123', text: 'Title1 Text'}

showTodo(todo)