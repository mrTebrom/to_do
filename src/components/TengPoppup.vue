<template>
  <div>
    <transition name="poppup">
      <div v-if="visible" class="poppup-backdrop" @click="onclose"></div>
    </transition>

    <transition name="poppup-inner">
      <div v-if="visible" class="poppup-inner-dialog" @click="onclose">
        <div class="poppup" @click.stop>
          <div class="modal-content">
            <slot />
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
export default {
  data() {
    return { state: 1 };
  },
  props: {
    visible: Boolean,
    onclose: Function,
  },
  methods: {
    openPopup() {
      this.isPopupVisible = true;
    },
    closePopup() {
      console.log("hide");
      this.$emit("hide");
    },
  },
};
</script>

<style scoped lang="less">
.poppup-enter-active,
.poppup-leave-active {
  transition: opacity 0.5s ease; /* Указываем анимацию только для изменения прозрачности */
}
.poppup-enter-from {
  opacity: 0; /* Начальное состояние: попап полностью прозрачен */
}
.poppup-enter-to {
  opacity: 1; /* Конечное состояние: попап полностью видим */
}
.poppup-leave-from {
  opacity: 1; /* Начальное состояние: попап полностью прозрачен */
}
.poppup-leave-to {
  opacity: 0; /* Конечное состояние: попап полностью видим */
}
.poppup-backdrop {
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(
    0,
    0,
    0,
    0.5
  ); /* Используем rgba для прозрачного цвета фона */
  z-index: 5;
}
.poppup-inner-dialog {
  position: fixed;
  min-height: 200px;
  background-color: #ffffff;
  z-index: 6;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 28px;
}

.poppup-inner-enter-active,
.poppup-inner-leave-active {
  transition: opacity 0.5s ease, transform 0.5s ease; /* Анимация для прозрачности и позиции */
}

.poppup-inner-enter-from {
  opacity: 0;
  transform: translate(-50%, -60%); /* Начальная позиция: немного выше */
}

.poppup-inner-enter-to {
  opacity: 1;
  transform: translate(-50%, -50%); /* Конечная позиция: по центру */
}
.poppup-inner-leave-from {
  opacity: 1;
  transform: translate(-50%, -50%); /* Начальная позиция: немного выше */
}

.poppup-inner-leave-to {
  opacity: 0;
  transform: translate(-50%, -60%); /* Конечная позиция: по центру */
}
.modal-content {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 500px;
  border-radius: 28px;
  height: 216px;
  padding: 24px;
}
</style>
