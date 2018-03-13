<template>
    <section>
        <el-form-item label="基本信息：" prop="desc">
            <el-col :span="12">
                <p class="item-p">附近学校：</p>
                <el-input size="small"  type="textarea" :rows="6" placeholder="请输入学校信息"></el-input>
            </el-col>

            <el-col :span="12">
                <p class="item-p">交通配套：</p>
                <el-input size="small"  type="textarea" :rows="6" placeholder="请输入配套信息"></el-input>
            </el-col>
        </el-form-item>
        <el-form-item label="房源介绍：" prop="desc">
            <el-col :span="12">
                <p class="item-p">房源亮点：</p>
                <el-input size="small"  type="textarea" :rows="6" placeholder="请输入房源亮点"></el-input>
            </el-col>
        </el-form-item>
    </section>
</template>

<script>
    export default {
        data() {
            return {}
        }
    }
</script>

<style scoped lang="scss" type="text/scss">

</style>