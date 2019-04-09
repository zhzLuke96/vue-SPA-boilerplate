export default {
    get(key) {
        const value = localStorage.getItem(key)
        if (value == null){
            return undefined
        }else{
            if(value.timeout == undefined){
                return value.data
            }
            const expired = (new Date(value.iss) - new Date() > value.timeout)
            if(expired){
                return undefined
            }else{
                return value.data
            }
        }
    },
    set(key,value){
        localStorage.setItem(key, JSON.stringify({
            value: value
        }));
    },
    setExpire(key, value, timeout) {
        localStorage.setItem(key, JSON.stringify({
            data: value,
            timeout: timeout || 60 * 60 * 1000,
            iss: new Date().toJSON()
        }));
    },
    remove(key) {
        localStorage.removeItem(key);
    },
    clear() {
        localStorage.clear();
    }
}