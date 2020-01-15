<template>
    <div>
        <h1>Users</h1>
        <p>이 유저는 현재 아이디가 {{ userId }} 입니다.</p>
    </div>
</template>

<script>
    export default {
        computed: {
            userId () {
                return this.$route.params.userId
            }
        }
    }
</script>