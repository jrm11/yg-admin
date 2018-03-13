<template>
    <section>
        <bread-nav></bread-nav>
        {{msg}}
    </section>
</template>

<script>
    import breadNav from './YBread'
    export default {
        data() {
            return {
                msg:"添加地址管理"
            }
        },
        components: {
            breadNav
        },
    }
</script>

<style scoped lang="scss" type="text/scss">

</style>