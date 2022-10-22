<template>
  <div>
    <div class="input-group">
      <input
        v-model="text"
        type="text"
        class="form-control p-2 ps-3"
        placeholder="Add new task . . ."
        aria-label="Add new task"
        aria-describedby="button-addon2"
      />
      <button
        @click="addTask"
        :disabled="!text"
        class="btn btn-dark"
        type="button"
        id="button-addon2"
      >
        Add Task
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: "",
    };
  },
  methods: {
    addTask() {
      console.log(this.text);
    },
  },
};
</script>

<style>
.input-group {
  border-radius: 12.5px !important;
}

.btn {
  background: rgb(167, 194, 218);
  background: linear-gradient(
    17deg,
    rgba(167, 194, 218, 1) 17%,
    rgba(245, 207, 196, 1) 66%
  );
  border: 1px solid var(--main-text) !important;
  color: var(--main-bg) !important;
  font-weight: 500 !important;
}
</style>
