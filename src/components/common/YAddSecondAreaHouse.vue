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
                <!--价格-->
                <div slot="price" v-model="radio2">
                    <el-checkbox size="small"  border v-for="(item,index)  in priceList" :label="item"
                                 :key="index">{{item}}
                    </el-checkbox>
                </div>
                <!--面积-->
                <div slot="acreage" v-model="radio3">
                    <el-checkbox size="small"  border v-for="(item,index)  in acreageList" :label="item"
                                 :key="index">{{item}}
                    </el-checkbox>
                </div>
                <!--户型-->
                <div slot="chk" v-model="radio4">
                    <el-checkbox size="small"  border v-for="(item,index)  in houseTypeList" :label="item"
                                 :key="index">{{item}}
                    </el-checkbox>
                </div>
                <!--特色-->
                <el-checkbox-group slot="feature" v-model="radio5">
                    <el-checkbox size="small"  border v-for="(item,index)  in featureList" :label="item"
                                 :key="index">{{item}}
                    </el-checkbox>
                </el-checkbox-group>
                <!--朝向-->
                <div slot="orientations" v-model="radio7">
                    <el-checkbox size="small"  border v-for="(item,index)  in orientationsList"
                                 :label="item"
                                 :key="index">{{item}}
                    </el-checkbox>
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

            <!--<base-info></base-info>-->

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
    const priceList = ["50万以下", "50-100万元", "100-150万元", "150-200万元", "200万以上"];
    const houseTypeList = ["一室", "两室", "三室", "四室", "五室", "别墅"];
    const acreageList = ["50平方以下", "50-70平方", "70-90平方", "90-110平方", "110-130平方", "130-150平方", "150平方以上"];
    const featureList = ["近地铁", "花园小区", "不限购", "全新楼盘", "不限购", "交通方便", "配套齐全", "学区房", "双地铁口", "周边旧改"];
    const orientationsList = ["东", "西", "南", "北", "南北"];
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
                radio2: '2',
                radio3: '3',
                radio4: '4',
                radio5: [],
                radio6: '6',
                radio7: '7',
                houseTypeList: houseTypeList,
                priceList:priceList,
                acreageList:acreageList,
                featureList:featureList,
                orientationsList:orientationsList
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