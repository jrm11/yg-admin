<template>
    <section>
        <bread-nav></bread-nav>
        <el-form ref="form" :model="form" label-width="120px" class="form-bg">
            <el-form-item label="所属分类：">
                <el-select size="small" v-model="form.region" placeholder="深圳租房">
                    <el-option label="深圳租房" value="shanghai"></el-option>
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
                    <el-input size="small" placeholder="请输入小区名称"></el-input>
                </el-col>
            </el-form-item>
            <el-form-item label="详细地址：">
                <el-col :span="6">
                    <el-input size="small" placeholder="请输入详细地址"></el-input>
                </el-col>
            </el-form-item>

            <el-form-item label="参数：">
                <el-row>
                    <el-col :span="6">
                        <p class="item-p">户型：</p>
                        <el-input size="small" placeholder="请输入户型"></el-input>
                    </el-col>
                    <el-col :span="6">
                        <p class="item-p">月租：</p>
                        <el-input size="small" placeholder="请输入月租"></el-input>
                    </el-col>

                    <el-col :span="6">
                        <p class="item-p">建筑面积：</p>
                        <el-input size="small" placeholder="请输入建筑面积"></el-input>
                    </el-col>

                    <el-col :span="6">
                        <p class="item-p">套内面积：</p>
                        <el-input size="small" placeholder="请输入套内面积"></el-input>
                    </el-col>
                    <el-col :span="6">
                        <p class="item-p">楼层：</p>
                        <el-input size="small" placeholder="请输入楼层"></el-input>
                    </el-col>
                    <el-col :span="6">
                        <p class="item-p">楼龄：</p>
                        <el-input size="small" placeholder="请输入楼龄"></el-input>
                    </el-col>
                    <el-col :span="6">
                        <p class="item-p">房屋现状：</p>
                        <el-input size="small" placeholder="请输入房屋现状"></el-input>
                    </el-col>
                </el-row>
            </el-form-item>


            <el-form-item label="房屋标签：">
                <el-row>
                    <el-col :span="5">
                        <p class="item-p">标签1：</p>
                        <el-input size="small" placeholder="请输入标签1"></el-input>
                    </el-col>
                    <el-col :span="5">
                        <p class="item-p">标签2：</p>
                        <el-input size="small" placeholder="请输入标签2"></el-input>
                    </el-col>

                    <el-col :span="5">
                        <p class="item-p">标签3：</p>
                        <el-input size="small" placeholder="请输入标签3"></el-input>
                    </el-col>
                    <el-col :span="5">
                        <p class="item-p">标签4：</p>
                        <el-input size="small" placeholder="请输入标签4"></el-input>
                    </el-col>
                </el-row>
            </el-form-item>

            <el-form-item label="房屋配置：">
                <el-row>
                    <el-col :span="6">
                        <el-form-item label="电梯：">
                            <el-radio-group>
                                <el-radio size="small" border label="">有</el-radio>
                                <el-radio size="small" border label="">无</el-radio>
                            </el-radio-group>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6">
                        <el-form-item label="空调：">
                            <el-radio-group>
                                <el-radio size="small" border label="">有</el-radio>
                                <el-radio size="small" border label="">无</el-radio>
                            </el-radio-group>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6">
                        <el-form-item label="冰箱：">
                            <el-radio-group>
                                <el-radio size="small" border label="">有</el-radio>
                                <el-radio size="small" border label="">无</el-radio>
                            </el-radio-group>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6">
                        <el-form-item label="洗衣机：">
                            <el-radio-group>
                                <el-radio size="small" border label="">有</el-radio>
                                <el-radio size="small" border label="">无</el-radio>
                            </el-radio-group>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6">
                        <el-form-item label="热水器：">
                            <el-radio-group>
                                <el-radio size="small" border label="">有</el-radio>
                                <el-radio size="small" border label="">无</el-radio>
                            </el-radio-group>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6">
                        <el-form-item label="燃气灶：">
                            <el-radio-group>
                                <el-radio size="small" border label="">有</el-radio>
                                <el-radio size="small" border label="">无</el-radio>
                            </el-radio-group>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6">
                        <el-form-item label="床：">
                            <el-radio-group>
                                <el-radio size="small" border label="">有</el-radio>
                                <el-radio size="small" border label="">无</el-radio>
                            </el-radio-group>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6">
                        <el-form-item label="沙发：">
                            <el-radio-group>
                                <el-radio size="small" border label="">有</el-radio>
                                <el-radio size="small" border label="">无</el-radio>
                            </el-radio-group>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6">
                        <el-form-item label="餐桌：">
                            <el-radio-group>
                                <el-radio size="small" border label="">有</el-radio>
                                <el-radio size="small" border label="">无</el-radio>
                            </el-radio-group>
                        </el-form-item>
                    </el-col>

                    <el-col :span="6">
                        <el-form-item label="衣柜：">
                            <el-radio-group>
                                <el-radio size="small" border label="">有</el-radio>
                                <el-radio size="small" border label="">无</el-radio>
                            </el-radio-group>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6">
                        <el-form-item label="电视：">
                            <el-radio-group>
                                <el-radio size="small" border label="">有</el-radio>
                                <el-radio size="small" border label="">无</el-radio>
                            </el-radio-group>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6">
                        <el-form-item label="抽油烟机：">
                            <el-radio-group>
                                <el-radio size="small" border label="">有</el-radio>
                                <el-radio size="small" border label="">无</el-radio>
                            </el-radio-group>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6">
                        <el-form-item label="橱柜：">
                            <el-radio-group>
                                <el-radio size="small" border label="">有</el-radio>
                                <el-radio size="small" border label="">无</el-radio>
                            </el-radio-group>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6">
                        <el-form-item label="马桶：">
                            <el-radio-group>
                                <el-radio size="small" border label="">有</el-radio>
                                <el-radio size="small" border label="">无</el-radio>
                            </el-radio-group>
                        </el-form-item>
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