<template>
  <aside>
    <div class="user">
      <div class="avatar">EE</div>
      <div class="info">
        <span class="username">username</span>
        <span class="email">email@gmail.com</span>
      </div>
    </div>
    <teng-input
      id="search"
      aria-placeholder="Поиск"
      placeholder="Введите текст поиска"
      icon="search"
    ></teng-input>
    <ul class="navbar">
      <li>
        <router-link to="/about">Важное</router-link>
      </li>
      <li>
        <router-link to="/about">Список дел</router-link>
      </li>
      <hr />
    </ul>
  </aside>
</template>
<script>
import TengInput from "@/components/input.vue";
export default {
  name: "MenuComponent",
  components: {
    TengInput,
  },
};
</script>
<style scoped lang="less">
aside {
  width: 280px;
  height: 100vh;
  background-color: #ffffff;
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  .user {
    display: flex;
    gap: 20px;
    .avatar {
      width: 32px;
      height: 32px;
      background-color: red;
      border-radius: 50%;
      padding: 0;
      margin: 0;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .info {
      display: flex;
      flex-direction: column;
      .username {
        font-size: 15px;
        color: #000000;
      }
      .email {
        font-size: 12px;
        color: #1c1b1f;
      }
    }
  }
  .navbar {
    margin: 0;
    padding: 0;
    li {
      list-style: none;
      padding: 10px 16px;
      a {
        color: #000000;
        text-decoration: none;
      }
    }
  }
}
</style>
