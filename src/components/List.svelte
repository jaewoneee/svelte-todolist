<style>
.list-box {
  width: 100%;
  height: 100%;
  overflow-y: auto;
}
.list-box::-webkit-scrollbar {
  height: 2px;
  background-color: transparent;
}
.list-box::-webkit-scrollbar-thumb {
  border-radius: 30px;
  background-color: var(--point-color);
}
ul {
  width: fit-content;
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-wrap: nowrap;
  gap: 1rem;
  margin-right: 4%;
  align-items: center;
}
li {
  width: 200px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid rgb(195, 195, 195);
  padding: 1.2rem;
  border-radius: 8px;
  transition: all 0.1s ease-in;
}
li:hover {
  border: 1px solid var(--point-color);
}
li.completed {
  background-color: rgba(51, 51, 51, 0.115);
}
label {
  margin-right: 8px;
}

p {
  font-weight: 600;
  color: #333;
}
.empty-box {
  font-size: 2rem;
}
.empty-box span {
  color: var(--sub-color);
}
button {
  background: url(../assets/icon/trash.svg) center no-repeat;
  background-size: contain;
  width: 20px;
  height: 20px;
  text-indent: -9999px;
  margin-left: auto;
}
</style>

<script>
import { fly } from 'svelte/transition'
import { todoItems } from '../store/todos'

const removeTotoItem = (index) => {
  $todoItems = $todoItems.filter((item, i) => i !== index)
  localStorage.setItem('todos', JSON.stringify($todoItems))
}

const checkTodoItem = (index) => {
  const target = $todoItems.find((n, i) => i === index)
  target.done = !target.done
  $todoItems[index] = target
  localStorage.setItem('todos', JSON.stringify($todoItems))
}
</script>

<div class="list-box">
  <ul>
    {#if $todoItems !== []}
      {#each $todoItems as todo, i (todo.id)}
        <li
          class="{todo.done && 'completed'}"
          in:fly="{{ y: 100, duration: 500 }}"
          out:fly="{{ y: 100, duration: 500 }}">
          <input
            type="checkbox"
            id="{`todo${i + 1}`}"
            checked="{todo.done}"
            on:change="{() => checkTodoItem(i)}" />
          <label for="{`todo${i + 1}`}"></label>
          <p>{todo.title}</p>
          <button
            aria-label="remove this todo item"
            on:click="{() => removeTotoItem(i)}"></button>
        </li>
      {:else}
        <p class="empty-box">What are you going <span>to</span> do?</p>
      {/each}
    {/if}
  </ul>
</div>
