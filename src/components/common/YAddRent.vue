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
                    <el-radio size="small" v-model="radio2"  border v-for="(item,index)  in list" :label="item"
                                 :key="index">{{item}}
                    </el-radio>
                </div>
                <!--面积-->
                <div slot="acreage" v-model="radio3">
                    <el-radio size="small"  border v-for="(item,index)  in acreageList" :label="item"
                                 :key="index">{{item}}
                    </el-radio>
                </div>
                <!--户型-->
                <div slot="chk" v-model="radio4">
                    <el-radio size="small"  border v-for="(item,index)  in houseTypeList" :label="item"
                                 :key="index">{{item}}
                    </el-radio>
                </div>
                <!--特色-->
                <el-checkbox-group slot="feature" v-model="radio5">
                    <el-checkbox size="small"  border v-for="(item,index)  in featureList" :label="item"
                                 :key="index">{{item}}
                    </el-checkbox>
                </el-checkbox-group>
                <!--朝向-->
                <div slot="orientations" v-model="radio7">
                    <el-radio size="small"  border v-for="(item,index)  in orientationsList"
                                 :label="item"
                                 :key="index">{{item}}
                    </el-radio>
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


            <!--<el-form-item label="房屋标签：">-->
                <!--<el-row>-->
                    <!--<el-col :span="5">-->
                        <!--<p class="item-p">标签1：</p>-->
                        <!--<el-input size="small" placeholder="请输入标签1"></el-input>-->
                    <!--</el-col>-->
                    <!--<el-col :span="5">-->
                        <!--<p class="item-p">标签2：</p>-->
                        <!--<el-input size="small" placeholder="请输入标签2"></el-input>-->
                    <!--</el-col>-->

                    <!--<el-col :span="5">-->
                        <!--<p class="item-p">标签3：</p>-->
                        <!--<el-input size="small" placeholder="请输入标签3"></el-input>-->
                    <!--</el-col>-->
                    <!--<el-col :span="5">-->
                        <!--<p class="item-p">标签4：</p>-->
                        <!--<el-input size="small" placeholder="请输入标签4"></el-input>-->
                    <!--</el-col>-->
                <!--</el-row>-->
            <!--</el-form-item>-->

            <el-form-item label="房屋配置：">
                <el-row >
                    <el-col :span="6" v-for="(item ,index) in labelList" :key="index">
                        <el-form-item :label="item.label">
                            <el-radio size="small" v-model="item.radio" label="1" border>有</el-radio>
                            <el-radio size="small" v-model="item.radio" label="2" border>无</el-radio>
                        </el-form-item>
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
    const list = ["1000元以下", "1000-2000元", "2000-3000元", "3000-4000元", "4000-5000元", "5000-6000元", "6000元以上"];
    const houseTypeList = ["一室", "两室", "三室", "四室", "五室", "别墅"];
    const acreageList = ["50平方以下", "50-70平方", "70-90平方", "90-110平方", "110-130平方", "130-150平方", "150平方以上"];
    const featureList = ["近地铁", "花园小区", "不限购", "全新楼盘", "不限购", "交通方便", "配套齐全", "学区房", "双地铁口", "周边旧改"];
    const orientationsList = ["东", "西", "南", "北", "南北"];
    import breadNav from './YBread'
    import houseInfo from './YHouseInfo'
    import {quillEditor} from 'vue-quill-editor'
    import middleMan from './YMiddleman'
    import baseInfo from './YBaseInfo'

    import citySelect from './YCity'
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
                labelList: [
                    {
                        label: "电梯：",
                        radio: "1"
                    },{
                        label: "空调：",
                        radio: "2"
                    }, {
                        label: "冰箱：",
                        radio: "3"
                    }, {
                        label: "洗衣机：",
                        radio: "4"
                    }, {
                        label: "热水器：",
                        radio: "5"
                    }, {
                        label: "燃气灶：",
                        radio: "6"
                    }, {
                        label: "床：",
                        radio: "7"
                    }, {
                        label: "沙发：",
                        radio: "8"
                    }, {
                        label: "餐桌：",
                        radio: "9"
                    }, {
                        label: "衣柜：",
                        radio: "10"
                    }, {
                        label: "电视：",
                        radio: "11"
                    }, {
                        label: "抽油烟机：",
                        radio: "12"
                    }, {
                        label: "橱柜：",
                        radio: "13"
                    }, {
                        label: "马桶：",
                        radio: "14"
                    }],
                radio2: '2',
                radio3: '3',
                radio4: '4',
                radio5: [],
                radio6: '6',
                radio7: '7',
                list: list,
                houseTypeList: houseTypeList,
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