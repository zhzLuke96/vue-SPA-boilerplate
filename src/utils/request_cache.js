import req from './request'
import store from './store'

// just for get method
export default function(apiUrl,timeout){
    const cache = store.get(apiUrl)
    if(cache != undefined){
        return new Promise(res=>res(cache))
    }else{
        return req.get(apiUrl).then(data=>{
            store.setExpire(apiUrl,data,timeout)
            return data
        })
    }
}