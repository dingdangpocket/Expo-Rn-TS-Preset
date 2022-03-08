import axios from "axios"
// import "../../axios"
export default {
    userData(){
        return axios({
            method:"POST",
            url:"http://jsonplaceholder.typicode.com/users",
        })
    },
}