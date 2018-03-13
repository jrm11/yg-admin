<template>
    <section>
        <bread-nav></bread-nav>
        <el-form ref="form" :model="form" label-width="120px" class="form-bg">
            <el-form-item label="所属分类：">
                <el-select v-model="form.region" placeholder="深圳新房源">
                    <el-option label="深圳新房源" value="shanghai"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="所属新房源：">
                <el-select v-model="form.region" placeholder="请选择所属经纪人">
                    <el-option label="是大幅度发给大家上课了；埃尔文全人类科技都是" value="shanghai"></el-option>
                    <el-option label="是大幅度发给大家上课了；埃尔文全人类科技都是" value="shanghai"></el-option>
                    <el-option label="是大幅度发给大家上课了；埃尔文全人类科技都是" value="shanghai"></el-option>
                </el-select>
            </el-form-item>

            <middle-man></middle-man>
            <el-form-item label="户型名称：">
                <el-col :span="6">
                    <el-input size="small" placeholder="请输入房源名称"></el-input>
                </el-col>
            </el-form-item>
            <house-info></house-info>
            <el-form-item label="小区名称：">
                <el-col :span="6">
                    <el-input size="small" placeholder="请输入小区名称"></el-input>
                </el-col>
            </el-form-item>
            <el-form-item label="详细地址：">
                <el-col :span="6">
                    <el-input size="small" placeholder="请输入详细地址"></el-input>
                </el-col>
            </el-form-item>
            <el-form-item label="房源编号：">
                <el-col :span="6">
                    <el-input size="small" placeholder="请输入房源编号"></el-input>
                </el-col>
            </el-form-item>
            <el-form-item label="参数：">
                <el-row>
                    <el-col :span="6">
                        <p class="item-p">户型：</p>
                        <el-input size="small" placeholder="请输入户型"></el-input>
                    </el-col>
                    <el-col :span="6">
                        <p class="item-p">面积：</p>
                        <el-input size="small" placeholder="请输入面积"></el-input>
                    </el-col>

                    <el-col :span="6">
                        <p class="item-p">售价：</p>
                        <el-input size="small" placeholder="请输入售价"></el-input>
                    </el-col>

                    <el-col :span="6">
                        <p class="item-p">每平米售价：</p>
                        <el-input size="small" placeholder="请输入每平米售价"></el-input>
                    </el-col>
                    <el-col :span="6">
                        <p class="item-p">套内面积：</p>
                        <el-input size="small" placeholder="请输入套内面积"></el-input>
                    </el-col>
                    <el-col :span="6">
                        <p class="item-p">楼层高度：</p>
                        <el-input size="small" placeholder="请输入楼层高度"></el-input>
                    </el-col>
                </el-row>
            </el-form-item>

            <base-info></base-info>
            <el-form-item label="小区简介：">
                <el-col :span="12">
                    <quill-editor ref="myTextEditor"
                                  :content="content"
                                  :options="editorOption"
                                  @change="onEditorChange($event)">
                    </quill-editor>
                </el-col>
            </el-form-item>

            <el-form-item label="楼盘图片：">
                <el-col :span="12">
                    <quill-editor ref="myTextEditor"
                                  :content="content"
                                  :options="editorOption"
                                  @change="onEditorChange($event)">
                    </quill-editor>
                </el-col>
            </el-form-item>
            <el-form-item label="图片上传：">
                <input type="file">
            </el-form-item>

            <el-form-item label="多图上传：">
                <input type="file">
            </el-form-item>
        </el-form>
    </section>
</template>

<script>
    import breadNav from './YBread'
    import houseInfo from './YHouseInfo'
    import {quillEditor} from 'vue-quill-editor'
    import middleMan from './YMiddleman'
    import baseInfo from './YBaseInfo'

    export default {
        data() {
            return {
                form: {
                    name: '',
                    region: '',
                    date1: '',
                    date2: '',
                    delivery: false,
                    type: [],
                    resource: '',
                    desc: ''
                },
                content: '',
                editorOption: {}
            }
        },
        components: {
            breadNav,
            quillEditor,
            houseInfo,
            middleMan,
            baseInfo
        },
        methods: {
            onSubmit() {
                console.log('submit!');
            },
            onEditorChange() {
                this.content = html
            }
        }
    }
</script>

<style lang="scss" type="text/scss">
    .form-bg {
        background: #fff;
        padding: 10px;
    }

    .item-p {
        color: #777
    }
</style>