<template>
    <div>
        <h1>axios test</h1>
        <ul>
            <li v-for="u in users">
                {{ u }}
            </li>
        </ul>
    </div>
</template>
<style scoped>

</style>
<script>
    import axios from "axios"
    export default {
        data(){
            return {
                users:[]
            }
        },
        created(){
            axios({
                "method": 'get',
                "url": '/api/users'
            }).then((resp)=>{
                this.users = this.users.concat(resp.data)
            })
        }
    }
</script>
