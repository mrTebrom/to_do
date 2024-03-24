import { createStore } from "vuex";
const storage = localStorage.getItem("to-do");
export default createStore({
  state: {
    listToDo: JSON.parse(storage) || [],
  },
  getters: {
    getListToDo: (state) => state.listToDo,
  },
  mutations: {
    // Мутация для добавления элемента в массив
    addTodo: (state, todo) => {
      state.listToDo.push(todo);
      localStorage.setItem("to-do", JSON.stringify(state.listToDo));
    },
    // Мутация для удаления элемента из массива
    removeTodo: (state, index) => {
      state.listToDo.splice(index, 1);
    },
  },
  actions: {
    // Действие для вызова мутации добавления элемента
    addTodoAction: ({ commit }, todo) => {
      commit("addTodo", todo);
    },
    // Действие для вызова мутации удаления элемента
    removeTodoAction: ({ commit }, index) => {
      commit("removeTodo", index);
    },
  },
  modules: {},
});
