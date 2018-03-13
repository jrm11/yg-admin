<template>
    <el-form-item label="所属经纪人：">
        <el-select size="small" v-model="value2" placeholder="请选择经纪人">
            <el-option
                    v-for="item in middleManList"
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
                middleManList: [{
                    value: '选项1',
                    label: '余浩'
                }, {
                    value: '选项2',
                    label: '霍坤',
                    disabled: true
                }, {
                    value: '选项3',
                    label: '潘俊'
                }, {
                    value: '选项4',
                    label: '刘仁'
                }],
                value2: ''
            }
        }
    }
</script>

<style scoped lang="scss" type="text/scss">

</style>