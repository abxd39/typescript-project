import axios from "axios"

let Myrequest =  axios.create({
});

Myrequest.interceptors.request.use((config)=>{
    return config
})


Myrequest.interceptors.response.use((response)=>{
        return response.data
    },
    (error)=>{
        let err='处理网络错误，http对应的状态吗'
        return Promise.reject(err)
    }
)

export default Myrequest;