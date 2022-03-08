import axios from "axios"
axios.interceptors.request.use((config) => {
    console.log("拦截",config);
    // if(localStorage.getItem("token")){
    //     config.headers.Authorization = localStorage.getItem("token")
    // }
    return config
})

//统一拦截携带token;
// axios.interceptors.response.use((res)=>{
//     return res.data
// },(error)=>{
//     if(error&&error.response&&error.response.status){
//         switch (error.response.status) {
//             case 401:
//                 Message.error('身份认证失败，请重新登录');
//                 router.replace('/login')
//                 break;
//             case 404:
//                 Message.error('资源已丢失');
//                 break;
//             default:
//                 Message.error('数据库丢失');
//                 break;
//         }
//     }else{
//         Message.error('服务器错误');
//         router.replace('/login')
//     }
// })
//响应拦截器;
