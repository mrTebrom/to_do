<template>
  <div class="form-control">
    <input
      type="text"
      :id="id"
      :aria-placeholder="placeholder"
      v-model="inputValue"
      @focus="onFocus"
      @blur="onBlur"
    />
    <label :for="id" :class="{ active: focused || inputValue }">
      <span v-if="icon" class="icon active">
        <font-awesome-icon :icon="icon" />
      </span>
      {{ label || placeholder }}
    </label>
  </div>
</template>

<script>
export default {
  name: "teng-input",
  props: {
    label: String,
    id: String,
    placeholder: String,
    icon: String,
    background: String,
  },
  data() {
    return {
      focused: false,
      inputValue: "",
    };
  },
  methods: {
    onFocus() {
      this.focused = true;
    },
    onBlur() {
      this.focused = false;
    },
  },
};
</script>

<style lang="less">
.form-control {
  position: relative;
  transition: 0.5s;
  display: flex;
  width: 100%;
  &:hover label {
    font-size: 10px;
    top: 3px;
    transition: 0.5s;
  }
  label {
    position: absolute;
    top: 17px;
    left: 16px;
    transition: 0.5s;
    font-size: 15px;

    &.active {
      font-size: 10px;
      top: 3px;
    }
  }

  input {
    padding: 17px 16px;
    color: #000;
    background-color: #fff;
    border-radius: 4px;
    border: 1px solid transparent;
    outline: none;
    font-size: 15px;
    display: flex;
    width: 100%;
    background-color: #ededed;

    &:focus + label,
    &.active + label {
      font-size: 10px;
      top: 3px;
    }
  }

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    height: 2px;
    width: 100%;
    background-color: #1c1c1c;
  }
}
</style>
