<template>
  <div class="w-100 h-100 d-flex justify-content-center align-items-center">
    <div id="main-view" class="d-flex flex-column p-4">
      <h1 class="mt-3">To Do App</h1>

      <TaskInput class="mt-5" />

      <div class="tasks-list mt-5 d-flex flex-column flex-grow-1 gap-3">
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
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
  async mounted() {
    console.log("App Mounted");
    const res = await RestServices.getAllTasks();
    console.log(res);
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

#main-view h1 {
  font-weight: 600;
  font-size: 2.7rem;
}
.tasks-list {
  max-height: 100%;
  overflow: auto;
}
</style>
