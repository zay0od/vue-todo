const baseURL = "https://zayed-todo-nodejs.herokuapp.com"


export default{
    async getAllTasks(){

        try{
            const res =  await fetch(`${baseURL}/api/todos`)
            const data = await res.json()
            return data
        }catch(error){
            console.log("Can't Fetch Data",)
            return null
        }

 
    }
}