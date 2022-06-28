<style>
.input-box {
  width: 94%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 10px;
  border-bottom: 2px solid var(--point-color);
  margin-top: 2.5rem;
}
input {
  width: calc(100% - 30px);
  border: 0;
  color: #666666;
  background-color: transparent;
}

button {
  padding: 10px;
  border-radius: 4px;
  cursor: pointer;
  background: url(../assets/icon/plus.svg) center no-repeat;
}
</style>

<script>
import { todoItems } from '../store/todos'

let todoTitle = ''

const addNewTodoItem = () => {
  const todo = { title: todoTitle, done: false }
  if (todoTitle.length !== 0) {
    $todoItems = [...$todoItems, todo]
    localStorage.setItem('todos', JSON.stringify($todoItems))
  } else {
    alert('write something!')
  }
  todoTitle = ''
}
</script>

<div class="input-box">
  <input
    type="text"
    bind:value="{todoTitle}"
    on:keydown="{(e) => e.key === 'Enter' && addNewTodoItem()}"
    placeholder="Add your new todo" />
  <button on:click="{() => addNewTodoItem()}" aria-label="add todo item"
  ></button>
</div>
