import axios from "axios"
// import "../../axios"
export default {
    getData(){
        return axios({
            method:"POST",
            url:"http://jsonplaceholder.typicode.com/users",
        })
    },
    initData(){
        return axios({
            method:"POST",
            url:"http://jsonplaceholder.typicode.com/users",
        })
    },
}
