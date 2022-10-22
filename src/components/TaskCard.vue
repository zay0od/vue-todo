<template>
  <div class="d-flex bg-dark task-card p-1 px-3">
    <div
      class="flex-grow-1 h-100 d-flex flex-column justify-content-center p-1"
    >
      <input :disabled="true" value="This is new taks" class="m-0 task-field" />
      <p class="text-start m-1 date-label">12 Jun, 2022</p>
    </div>

    <div class="d-flex justify-content-center align-items-center gap-3">
      <button class="card-icon">
        <b-icon-pencil-square />
      </button>

      <button class="card-icon">
        <b-icon-trash3 />
      </button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
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
  background: transparent !important;
  color: var(--main-bg);
  font-size: 1.7rem;
  font-weight: 700;
}
.task-card .task-field:disabled {
  color: var(--main-bg);
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
