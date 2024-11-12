interface Todo {
    id:number,
    task:string,
    completed:boolean
}

class TodoList {
    private todos:Todo[] = [];
    public owner: string = "";

    constructor(owner:string){
        this.owner = owner;
    }

    addTodo(task:string):void {
        const newtodo:Todo = {
            id:this.todos.length +1,
            task:task,
            completed:false
        };
        this.todos.push(newtodo);
    }

    getTodos():Todo[]{
        return this.todos;
    }

    markCompleted(id:number){
        const todo = this.todos.filter(todo => todo.id == id);
        if (todo) todo[0].completed = true;
    }

    removeTodo(id:number):void{
        const todos = this.todos.filter(todo => todo.id != id);
        this.todos = todos;
    }
}

const todolist = new TodoList("Rohit");
console.log(todolist.getTodos());

todolist.addTodo("Learn Typescript");
todolist.addTodo("Learn version control");
console.log(todolist.getTodos());

todolist.markCompleted(1);

console.log(todolist.getTodos());

todolist.removeTodo(1);

console.log(todolist.getTodos());

console.log(todolist.owner);

todolist.owner = "Joshi";
console.log(todolist.owner);