<template>
  <div>
    <div class="input-group">
      <input
        v-model="text"
        type="text"
        class="form-control p-3 ps-3"
        placeholder="Add new task . . ."
        aria-label="Add new task"
        aria-describedby="button-addon2"
      />
      <button
        @click="addTask"
        :disabled="!text || loading"
        class="btn btn-dark"
        type="button"
        id="button-addon2"
      >
        Add Task
      </button>
    </div>
    <div class="mt-4" v-if="loading">
      <h4>Adding Task...</h4>
    </div>
  </div>
</template>

<script>
import RestServices from "../services/RestServices";

export default {
  data() {
    return {
      text: "",
      loading: false,
    };
  },
  methods: {
    async addTask() {
      this.loading = true;
      await RestServices.addTask(this.text);
      this.text = "";
      this.$emit("addedTask");
      this.loading = false;
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
