<style>
#wrapper {
  display: flex;
  height: 295px;
  align-items: center;
  gap: 5rem;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
}
#wrapper > div {
  width: fit-content;
}
</style>

<script>
import Title from './components/Title.svelte'
import Input from './components/Input.svelte'
import List from './components/List.svelte'
</script>

<div id="wrapper">
  <div>
    <Title />
    <Input />
  </div>
  <List />
</div>
