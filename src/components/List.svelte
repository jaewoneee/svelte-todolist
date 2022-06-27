<style>
.list-box {
  width: 100%;
  height: 100%;
  overflow-y: auto;
}
ul {
  width: fit-content;
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-wrap: nowrap;
  gap: 1rem;
  margin-right: 4%;
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

label {
  margin-right: 8px;
}

p {
  font-weight: 600;
  color: #333;
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
  console.log(index)
  return ($todoItems = $todoItems.filter((n, i) => i !== index))
}
</script>

<div class="list-box">
  <ul>
    {#each $todoItems as todo, i}
      <li
        in:fly="{{ y: 100, duration: 500 }}"
        out:fly="{{ y: 100, duration: 500 }}">
        <input type="checkbox" id="{`check${i + 1}`}" />
        <label for="{`check${i + 1}`}"></label>
        <p>{todo}</p>
        <button
          aria-label="remove this todo item"
          on:click="{() => removeTotoItem(i)}"></button>
      </li>
    {/each}
  </ul>
</div>
