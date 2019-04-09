import req from '../utils/request_cache'
import apis from './apis'

export default {
    getUserList(pagesize){
        // data filter or something
        return req(apis.userlist)
    }
}