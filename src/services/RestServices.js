const baseURL = "https://zayed-todo-nodejs.herokuapp.com"


export default {
    //Get All Tasks
    async getAllTasks() {
        try {
            const res = await fetch(`${baseURL}/api/todos`)
            const data = await res.json()

            //console.log("Tasks ", data)
            return data
        } catch (error) {
            throw new Error("Can't get tasks")
        }
    },
    //Add a Task
    async addTask(addedTask) {
        try {
            const res = await fetch(`${baseURL}/api/todos/`,
                {
                    method: "POST", body: JSON.stringify({ text: addedTask }),
                    headers: { "Content-type": "application/json; charset=UTF-8" }
                })


            const data = await res.json()
            //console.log("Added: ", data)
            return data
        } catch (error) {
            throw new Error("Can't add task")
        }
    },

    //Edit a Task
    async editTask(taskId, taskText) {
        try {
            const res = await fetch(`${baseURL}/api/todos/${taskId}`,
                {
                    method: "PUT", body: JSON.stringify({ text: taskText }),
                    headers: { "Content-type": "application/json; charset=UTF-8" }
                })


            const data = await res.json()
            //console.log("edited: ", data)
            return data
        } catch (error) {
            throw new Error("Can't edit task")
        }
    },

    //Delete a Task
    async deleteTask(task) {
        try {
            const res = await fetch(`${baseURL}/api/todos/${task._id}`,
                {
                    method: "DELETE",
                    headers: { "Content-type": "application/json; charset=UTF-8" }
                })

            console.log("deleted: ", res)
            return res
        } catch (error) {
            throw new Error("Can't delete task")
        }
    }




}