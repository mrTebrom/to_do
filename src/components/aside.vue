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
      placeholder="Поиск"
      icon="search"
    ></teng-input>
    <ul class="navbar">
      <li>
        <router-link to="/about">
          <font-awesome-icon icon="star" style="color: #f85977" />
          <span>Важное</span>
        </router-link>
      </li>
      <li>
        <router-link to="/about">
          <font-awesome-icon icon="fa-list-check" style="color: #5946d2" />
          <span>Список дел</span>
        </router-link>
      </li>
      <hr />
      <!-- тут нужно сделать цикл -->
      <template v-for="(item, index) in listToDo" :key="index">
        <li @click="$router.push(item.url)">
          <router-link :to="item.url">
            <font-awesome-icon icon="fa-list-check" style="color: #5946d2" />
            <span>{{ item.title }}</span>
          </router-link>
        </li>
      </template>
    </ul>
    <button @click="addItem()">add</button>

    <TengPoppop @click="hide" :visible="visible">
      <h1 style="margin: 0">Создать список</h1>
      <teng-input
        label="Название списка"
        id="list-name"
        v-model="valueList"
        @input="onChange"
      />
      <div class="footer-dialog">
        <button>Отмена</button>
        <button class="ok" @click="addItem">Создать</button>
      </div>
    </TengPoppop>

    <button @click="show">Открыть всплывающее окно</button>
  </aside>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import TengInput from "@/components/input.vue";
import TengPoppop from "@/components/TengPoppup.vue";
export default {
  name: "MenuComponent",
  components: {
    TengInput,
    TengPoppop,
  },
  data() {
    return {
      visible: false,
      valueList: "",
    };
  },
  methods: {
    ...mapActions(["addTodoAction", "removeTodoAction"]),
    addItem: function () {
      if (this.valueList.length <= 0) return;
      if (this.listToDo.find((item) => item.title === this.valueList)) {
        return;
      }
      // Используем вызов действия для добавления элемента в список дел
      this.addTodoAction({
        title: this.valueList,
        url: this.valueList.split(" ").join("-"),
      });
    },
    show: function () {
      this.visible = true;
    },
    hide: function () {
      this.visible = false;
    },
    onChange: function (event) {
      this.valueList = event.target.value;
    },
  },
  computed: {
    ...mapGetters(["getListToDo"]),
    listToDo() {
      return this.getListToDo;
    },
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
        display: flex;
        gap: 16px;
        font-size: 16px;
      }
    }
  }
  .footer-dialog {
    display: flex;
    justify-content: flex-end;
    button {
      padding: 10px 24px;
      margin-left: 10px;
      border-radius: 24px;
      border: 1px solid transparent;
      background-color: transparent;
      color: #5946d2;
      cursor: pointer;
      &.ok {
        background-color: #5946d2;
        color: #ffffff;
      }
    }
  }
}
</style>
