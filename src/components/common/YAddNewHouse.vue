<template>
    <section>
        <bread-nav></bread-nav>
        <el-form ref="form" :model="form" label-width="120px" class="form-bg">
            <el-form-item label="所属分类：">
                <el-select size="small" v-model="form.region" placeholder="深圳二手小区房">
                    <el-option label="深圳二手小区房" value="shanghai"></el-option>
                </el-select>

            </el-form-item>
            <middle-man></middle-man>
            <el-form-item label="房源名称：">
                <el-col :span="6">
                    <el-input size="small" placeholder="请输入房源名称"></el-input>
                </el-col>
            </el-form-item>
            <house-info></house-info>
            <el-form-item label="小区名称：">
                <el-col :span="6">
                    <p class="item-p">楼盘名称：</p>
                    <el-input size="small" placeholder="请输入楼盘名称"></el-input>
                </el-col>
                <el-col :span="6">
                    <p class="item-p">楼盘别名：</p>
                    <el-input size="small" placeholder="请输入楼盘别名"></el-input>
                </el-col>
            </el-form-item>
            <el-form-item label="楼盘地址：">
                <el-col :span="6">
                    <el-input size="small" placeholder="请输入楼盘地址"></el-input>
                </el-col>
            </el-form-item>

            <el-form-item label="参数：">
                <el-row>
                    <el-col :span="6">
                        <p class="item-p">户型：</p>
                        <el-input size="small" placeholder="请输入户型"></el-input>
                    </el-col>
                    <el-col :span="6">
                        <p class="item-p">每平米售价：</p>
                        <el-input size="small" placeholder="请输入售价"></el-input>
                    </el-col>
                    <el-col :span="6">
                        <p class="item-p">开盘时间：</p>
                        <el-input size="small" placeholder="请输入开盘时间"></el-input>
                    </el-col>
                    <el-col :span="6">
                        <p class="item-p">交房时间：</p>
                        <el-input size="small" placeholder="请输入交房时间"></el-input>
                    </el-col>

                    <el-col :span="6">
                        <p class="item-p">产 权：</p>
                        <el-input size="small" placeholder="请输入产 权"></el-input>
                    </el-col>
                    <el-col :span="6">
                        <p class="item-p">物业公司：</p>
                        <el-input size="small" placeholder="请输入物业公司"></el-input>
                    </el-col>
                    <el-col :span="6">
                        <p class="item-p">建筑类型：</p>
                        <el-input size="small" placeholder="请输入建筑类型"></el-input>
                    </el-col>
                    <el-col :span="6">
                        <p class="item-p">规划户数：</p>
                        <el-input size="small" placeholder="请输入规划户数"></el-input>
                    </el-col>
                    <el-col :span="6">
                        <p class="item-p">停 车 位：</p>
                        <el-input size="small" placeholder="请输入停 车 位"></el-input>
                    </el-col>
                    <el-col :span="6">
                        <p class="item-p">物业费用：</p>
                        <el-input size="small" placeholder="请输入物业费用"></el-input>
                    </el-col>
                    <el-col :span="6">
                        <p class="item-p">建筑面积：</p>
                        <el-input size="small" placeholder="请输入建筑面积"></el-input>
                    </el-col>
                    <el-col :span="6">
                        <p class="item-p">开 发 商：</p>
                        <el-input size="small" placeholder="请输入开 发 商"></el-input>
                    </el-col>
                    <el-col :span="6">
                        <p class="item-p">物业类型：</p>
                        <el-input size="small" placeholder="请输入物业类型"></el-input>
                    </el-col>

                    <el-col :span="6">
                        <p class="item-p">绿 化 率：</p>
                        <el-input size="small" placeholder="请输入绿 化 率"></el-input>
                    </el-col>
                    <el-col :span="6">
                        <p class="item-p">占地面积：</p>
                        <el-input size="small" placeholder="请输入占地面积"></el-input>
                    </el-col>
                </el-row>
            </el-form-item>

            <base-info></base-info>

            <el-form-item label="小区简介："> <el-col :span="10">
                <quill-editor ref="myTextEditor"
                              :content="content"
                              :options="editorOption"
                              @change="onEditorChange($event)">
                </quill-editor></el-col>
            </el-form-item>

            <el-form-item label="楼盘图片：">
                <el-col :span="10">
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