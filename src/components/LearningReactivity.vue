<template>
  <div class="card text-left">
    <div class="card-body text-center">
      <h4 class="card-title">Reactivity</h4>
      <p class="card-text">{{ userName }}</p>
    </div>
  </div>
</template>

<script>
import { ref, reactive } from "vue";

export default {
  //   data() {
  //     return {
  //       name: "Trung nghĩa",
  //     };
  //   },
  //   created() {
  //     setTimeout(() => {
  //       this.name = "Minh Trang";
  //     }, 2000);
  //   },
  setup() {
    //thay the cho data
    //1 phương thức bình khác state vì stae là phương thức bất đồng bộ ref thì không

    // ref hay sử dụng với các dữ liệu nguyên thủy number, string ,boolean, null, undefiend
    // reactive dùng trong các array, object hay function phức tạp
    //
    let userName = ref("Mai Trung Nghĩa");
    let userAge = ref(23);
    let user = reactive({
      name: userAge,
      age: userAge,
    });
    setTimeout(() => {
      userName.value = "Minh Trang";
      user.name = "Mình nè";
      user.age = 24;
    }, 2000);

    return { userName };
  },
};
</script>

<style></style>
