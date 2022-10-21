<template>
    <div id="main-view">
        <h2>Main View</h2>
    </div>
</template>

<script>
import RestServices from "./services/RestServices"
export default {
    mounted(){
        console.log("App Mounted")
        
        RestServices.getAllTasks()
    }

}
</script>

<style>
#main-view{
    background: rgb(47, 47, 47);
    min-height: 100vh;
    width: 100%;

}
</style>