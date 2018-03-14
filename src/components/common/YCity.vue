<template>
    <el-form-item label="选择城市：">
        <el-select size="small" v-model="value2" placeholder="请选择城市">
            <el-option
                    v-for="item in cityList"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
            </el-option>
        </el-select>
    </el-form-item>
</template>

<script>
    export default {
        data() {
            return {
                cityList: [{
                    value: '选项1',
                    label: '深圳'
                }, {
                    value: '选项2',
                    label: '东莞',
                    disabled: true
                }, {
                    value: '选项3',
                    label: '惠州'
                }, {
                    value: '选项4',
                    label: '中山'
                }],
                value2: ''
            }
        }
    }
</script>

<style scoped lang="scss" type="text/scss">

</style>