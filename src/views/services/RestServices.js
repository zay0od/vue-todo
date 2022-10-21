const baseURL = "https://zayed-todo-nodejs.herokuapp.com"


export default{
    getAllTasks(){
        fetch(`${baseURL}/api/todos`)
        .then( response => response.json() )
        .then( data => console.log(data))
        .catch( err => console.log(err))

    }
}