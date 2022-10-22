<template>
  <div class="w-100 h-100 d-flex justify-content-center align-items-center">
    <div id="main-view" class="d-flex flex-column p-4">
      <h1 class="mt-3">To Do App</h1>

      <TaskInput @addedTask="addedNewTask" class="mt-5" />

      <div
        v-if="!loading"
        :key="update"
        class="tasks-list mt-5 d-flex flex-column flex-grow-1 gap-3"
      >
        <TaskCard
          v-for="task in tasks"
          :key="task.id"
          :data="task"
          @editTask="editedTask"
          @deleteTask="deletedTask"
        />
      </div>
      <div v-else class="tasks-list mt-5 d-flex flex-column flex-grow-1 gap-3">
        <h4>Loading...</h4>
      </div>
    </div>
  </div>
</template>

<script>
import TaskCard from "../components/TaskCard.vue";
import TaskInput from "../components/TaskInput.vue";
import RestServices from "../services/RestServices";

export default {
  components: { TaskInput, TaskCard },
  data() {
    return {
      tasks: [],
      loading: false,
      update: 0
    };
  },
  async mounted() {
    this.getAllTasks();
  },

  methods: {
    async getAllTasks() {
      this.loading = true;
      const res = await RestServices.getAllTasks();
      if (res) {
        this.tasks = res;
      }
      this.loading = false;
    },
    addedNewTask(tasks) {
      //this.tasks = [...tasks] ?? []
      this.getAllTasks();
    },
    editedTask(editedTask) {
      const task = this.tasks.find((t) => t._id == editedTask._id);
      let index = this.tasks.indexOf(task);
      this.tasks[index] = editedTask;
    },
    deletedTask(deletedTask) {
      const task = this.tasks.find((t) => t._id == deletedTask._id);
      let index = this.tasks.indexOf(task);
      this.tasks.splice(index, 1);
      this.update++

      console.log("This: ", task, index)
    },
  },
};
</script>

<style>
#main-view {
  background: var(--main-bg);
  min-height: 100vh;
  max-height: 100vh;
  width: 700px;
}

@media only screen and (max-width: 600px) {
#main-view {
  width: 100%;
}
}


#main-view h1 {
  font-weight: 600;
  font-size: 2.7rem;
}
.tasks-list {
  max-height: 100%;
  overflow: auto;
}
</style>
