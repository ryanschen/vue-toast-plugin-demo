<template>
  <div class="toast-wrapper" >
      <div class="main" :class="[visible]?'fade-in':'fade-out'">
          <span class="text">{{message}}</span>
      </div>
  </div>
</template>

<script>
export default {
  data() {
      return {
          message: '',
          visible: false
      }
  }
 }
</script>

<style lang="scss">
@keyframes fade-in {
    0% {
        opacity: 0;
        transform: scale(0.7);
    }
    100% {
        opacity: 1;
        transform: scale(1);
    }
}
@keyframes fade-out {
    0% {
        opacity: 1;
        transform: scale(1);
    }
    100% {
        opacity: 0;
        transform: scale(0.7);
    }
}
.toast-wrapper{
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 2000;
    display: flex;
    justify-content: center;
    align-items: center;
    .main{
        line-height: 24px;
        padding: 10px;
        text-align: center;
        border-radius: 6px;
        background-color: rgba(0, 0, 0, .6);
        .text{
            font-size: 14px;
            color: #fff;
        }
    }
    .fade-in{
        animation-name: fade-in;
        animation-direction: 0.3s;
        animation-fill-mode: both;
    }
    .fade-out{
        animation-name: fade-out;
        animation-direction: 0.3s;
        animation-fill-mode: both;
    }
}
</style>

