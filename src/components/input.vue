<template>
  <div class="form-control">
    <div class="input-container">
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

  label {
    position: absolute;
    top: 17px;
    left: 16px;
    transition: 0.5s;
    font-size: 15px;
    &.active{
    font-size: 12px;
      top: 0;
      left: 16px;
      transition: 0.5s;
    }
  }

  input {
    padding: 17px 16px;
    color: #000;
    background-color: #fff;
    border-radius: 4px;
    border-width: 1px;
    outline: none;
    border-color: transparent;
    font-size: 15px;

    &:focus + label,
    &.active + label {
      font-size: 12px;
      top: 0;
      left: 16px;
      transition: 0.5s;
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

  &:hover label {
    font-size: 12px;
    top: 0;
    left: 16px;
    transition: 0.5s;
  }
}
</style>
