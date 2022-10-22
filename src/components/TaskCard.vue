<template>
  <div class="position-relative">
    <div
      v-if="loadingChanges"
      class="p-1 px-3 card-loading-state d-flex justify-content-center align-items-center"
    >
      <h6>Applying changes...</h6>
    </div>
    <div
      v-if="loadingDelete"
      class="p-1 px-3 card-loading-state d-flex justify-content-center align-items-center"
    >
      <h6>Deleting task...</h6>
    </div>

    <div class="card-container d-flex bg-dark task-card p-1 px-3">
      <div
        class="flex-grow-1 h-100 d-flex flex-column justify-content-center p-1"
      >
        <input
          :disabled="!editMode"
          v-model="text"
          class="m-0 task-field"
          id="taskInput"
        />
        <p class="text-start m-1 date-label">{{ date }}</p>
      </div>

      <div class="d-flex justify-content-center align-items-center gap-3">
        <button v-if="!editMode" @click="editTask" class="card-icon">
          <b-icon-pencil-square />
        </button>
        <button
          v-else
          @click="applyChanges"
          :disabled="!text"
          class="card-icon"
        >
          Apply
        </button>

        <button @click="deleteTask" class="card-icon">
          <b-icon-trash3 />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import RestServices from "../services/RestServices";
import moment from "moment";

export default {
  props: {
    data: {
      type: Object,
    },
  },
  data() {
    return {
      loadingChanges: false,
      loadingDelete: false,
      editMode: false,
      text: "",
    };
  },
  computed: {
    date() {
      return moment(this.data?.date).format("DD MMM, YYYY");
    },
  },
  mounted() {
    this.text = this.data.text;
  },

  methods: {
    editTask() {
      this.editMode = true;
    },
    async applyChanges() {
      this.loadingChanges = true;
      const editedTask = await RestServices.editTask(this.data._id, this.text);
      this.$emit("editTask", editedTask);
      this.loadingChanges = false;
      this.editMode = false;
    },

    async deleteTask() {
      this.loadingDelete = true;
      await RestServices.deleteTask(this.data);
      this.$emit("deleteTask", this.data);
      this.loadingDelete = false;
    },
  },
};
</script>

<style>
@media only screen and (max-width: 600px) {
.card-container div{
  width: 73% !important;
}

.task-card .task-field {
  font-size: 1.2rem !important;
}
.task-card .date-label {
  font-size: 0.7rem !important;
}

}

.card-loading-state {
  position: absolute;
  color: var(--main-bg);
  background: rgba(167, 194, 218, 0.695);
  width: 100%;
  height: 100%;
  border-radius: 12px;
}
.task-card {
  border-radius: 12px;
  background: rgb(167, 194, 218);
  background: linear-gradient(
    17deg,
    rgba(167, 194, 218, 1) 17%,
    rgba(245, 207, 196, 1) 66%
  );
}
.task-card .task-field {
  border: none !important;
  outline: none !important;
  box-shadow: 0 !important;
  background: rgba(230, 230, 250, 0.502) !important;
  border-radius: 8px;
  color: var(--main-bg);
  margin-right: 40px !important;
  font-size: 1.7rem;
  font-weight: 700;
}
.task-card .task-field:disabled {
  color: var(--main-bg);
  background: transparent !important;
}
.task-card .task-field:focus {
  color: var(--main-bg);
  text-decoration: underline !important;
}
.task-card .date-label {
  color: var(--main-bg);
  font-weight: 700;
  font-size: 0.85rem;
  opacity: 0.55;
}
.card-icon {
  padding: 0 !important;
  margin: 0 !important;
  background: transparent;
  border: none;
}

.card-icon svg {
  width: 20px;
  height: 20px;
  opacity: 0.5;
  transition: all ease 0.8s;
}
.card-icon svg:hover {
  opacity: 1;
}
</style>
