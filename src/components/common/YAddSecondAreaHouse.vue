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
                    <el-radio size="small" v-model="radio4" border v-for="(item,index)  in houseTypeList" :label="item"
                              :key="index"></el-radio>
                </div>
            </house-info>
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
            <el-form-item label="开发商名：">
                <el-col :span="6">
                    <el-input size="small" placeholder="请输入开发商"></el-input>
                </el-col>
            </el-form-item>
            <el-form-item label="物业公司：">
                <el-col :span="6">
                    <el-input size="small" placeholder="请输入物业公司"></el-input>
                </el-col>
            </el-form-item>
            <el-form-item label="参数：">
                <el-row>
                    <el-col :span="6">
                        <p class="item-p">每平米售价：</p>
                        <el-input size="small" placeholder="请输入售价"></el-input>
                    </el-col>
                    <el-col :span="6">
                        <p class="item-p">建筑年代：</p>
                        <el-input size="small" placeholder="请输入建筑年代"></el-input>
                    </el-col>
                    <el-col :span="6">
                        <p class="item-p">物业用途：</p>
                        <el-input size="small" placeholder="请输入物业用途"></el-input>
                    </el-col>
                    <el-col :span="6">
                        <p class="item-p">建筑结构：</p>
                        <el-input size="small" placeholder="请输入建筑结构"></el-input>
                    </el-col>
                    <el-col :span="6">
                        <p class="item-p">车位个数：</p>
                        <el-input size="small" placeholder="请输入车位个数"></el-input>
                    </el-col>
                    <el-col :span="6">
                        <p class="item-p">容积比率：</p>
                        <el-input size="small" placeholder="请输入容积比率"></el-input>
                    </el-col>
                    <el-col :span="6">
                        <p class="item-p">水电煤气：</p>
                        <el-input size="small" placeholder="请输入水电煤气"></el-input>
                    </el-col>
                    <el-col :span="6">
                        <p class="item-p">供暖方式：</p>
                        <el-input size="small" placeholder="请输入供暖方式"></el-input>
                    </el-col>
                    <el-col :span="6">
                        <p class="item-p">产权性质：</p>
                        <el-input size="small" placeholder="请输入产权性质"></el-input>
                    </el-col>
                    <el-col :span="6">
                        <p class="item-p">规划户数：</p>
                        <el-input size="small" placeholder="请输入规划户数"></el-input>
                    </el-col>
                    <el-col :span="6">
                        <p class="item-p">占地面积：</p>
                        <el-input size="small" placeholder="请输入占地面积"></el-input>
                    </el-col>
                    <el-col :span="6">
                        <p class="item-p">绿化情况：</p>
                        <el-input size="small" placeholder="请输入绿化情况"></el-input>
                    </el-col>

                    <el-col :span="6">
                        <p class="item-p">物业费用：</p>
                        <el-input size="small" placeholder="请输入物业费用"></el-input>
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
                houseTypeList: houseTypeList,
                priceList:priceList
            }
        },
        components: {
            breadNav,
            quillEditor,
            houseInfo,
            middleMan,
            baseInfo,citySelect
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