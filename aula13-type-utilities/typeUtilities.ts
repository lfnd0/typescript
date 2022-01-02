type Todo = {
  title: string;
  description: string;
  completed: boolean;
}

// Readonly
const todo: Readonly<Todo> = {
  title: 'Finalizar minicurso de TS',
  description: 'Enviar arquivos para o GitHub.',
  completed: false
}

console.log(todo);
// todo.completed = true;

// Partial
function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
  return { ...todo, ...fieldsToUpdate }
}

const upTodo: Todo = updateTodo(todo, { completed: true });
console.log(upTodo);

// Pick (5 - 1)
type TodoPreview = Pick<Todo, 'title' | 'completed'>;

const todoPreview: TodoPreview = {
  title: 'Ver video-aulas de TS',
  completed: false
}

console.log(todoPreview);

// Omit (5 - 4)
type NewTodoPreview = Omit<Todo, 'description'>;

const newTodoPreview = {
  title: 'Ver videos sobre deploy de aplicacoes back-end',
  completed: false
}

console.log(newTodoPreview);
