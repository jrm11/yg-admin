<template>
    <section class="crumbs">
        <el-breadcrumb>
            <el-breadcrumb-item><i class="el-icon-date"></i> 表单</el-breadcrumb-item>
            <el-breadcrumb-item>编辑器</el-breadcrumb-item>
        </el-breadcrumb>
    </section>
</template>

<script>
    export default {
        data() {
            return {}
        }
    }
</script>


<style scoped lang="scss" rel="stylesheet/scss">
    .crumbs{
        margin-bottom: 10px;
        background: #ffffff;
        padding:10px;
    }
    .el-breadcrumb__item{
        float: none;
    }
    .el-breadcrumb{
        line-height: 1.5;
    }
</style>