<template>
    <section>
        <bread-nav></bread-nav>
        {{msg}}
    </section>
</template>

<script>
    import breadNav from '../../common/bread'
    export default {
        data() {
            return {
                msg:"信息内容管理"
            }
        },
        components: {
            breadNav
        },
    }
</script>

<style scoped lang="scss" type="text/scss">

</style>