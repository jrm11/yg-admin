<template>
    <section>
        <bread-nav></bread-nav>
        <el-form ref="form" :model="form" label-width="120px" class="form-bg">
            <city-select></city-select>
            <middle-man></middle-man>
            <el-form-item label="房源名称：">
                <el-col :span="6">
                    <el-input size="small" placeholder="请输入房源名称"></el-input>
                </el-col>
            </el-form-item>
            <house-info>
                <div slot="price">
                    <el-radio size="small" v-model="radio2" border v-for="(item,index)  in priceList" :label="item"
                              :key="index">{{item}}
                    </el-radio>
                </div>
                <div slot="chk">
                    <el-checkbox-group
                            v-model="checkedList">
                        <el-checkbox  size="small" v-for="item in houseTypeList" :label="item" :key="item" border>{{item}}</el-checkbox>
                    </el-checkbox-group>
                </div>
            </house-info>
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
    import citySelect from './YCity'
    const priceList= ["50万以下", "50-100万元", "100-150万元", "150-200万元", "200万以上"];
    const houseTypeList= ["一室", "两室", "三室", "四室", "五室", "别墅"];
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
                editorOption: {},
                radio4: '4',
                radio2: '2',
                checkedList: [],
                houseTypeList: houseTypeList,
                priceList:priceList
            }
        },
        components: {
            breadNav,
            quillEditor,
            houseInfo,
            middleMan,
            baseInfo,
            citySelect
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