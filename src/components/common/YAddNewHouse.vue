<template>
    <section>
        <bread-nav></bread-nav>
        <el-form ref="form" :model="form" label-width="120px" class="form-bg">
            <el-form-item label="所属分类：">
                <el-select v-model="form.region" placeholder="深圳二手小区房">
                    <el-option label="深圳二手小区房" value="shanghai"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="所属经纪人：">
                <el-select v-model="form.region" placeholder="请选择所属经纪人">
                    <el-option label="余浩" value="shanghai"></el-option>
                    <el-option label="霍坤" value="beijing"></el-option>
                    <el-option label="潘俊" value="beijing"></el-option>
                    <el-option label="刘仁" value="beijing"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="房源名称：">
                <el-input placeholder="请输入房源名称"></el-input>
            </el-form-item>
            <el-form-item label="房源区域：">
                <el-radio-group>
                    <el-radio border v-for="item in areaList" label="">{{item}}</el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item label="地铁线路：">
                <el-radio-group>
                    <el-radio border v-for="item in metroList" label="">{{item}}</el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item label="价格：">
                <el-radio-group>
                    <el-radio border v-for="item in priceList" label="">{{item}}</el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item label="面积：">
                <el-radio-group>
                    <el-radio border v-for="item in acreageList" label="">{{item}}</el-radio>
                </el-radio-group>
            </el-form-item>

            <el-form-item label="户型：">
                <el-radio-group>
                    <el-radio border v-for="item in houseTypeList" label="">{{item}}</el-radio>
                </el-radio-group>
            </el-form-item>

            <el-form-item label="特色：">
                <el-radio-group>
                    <el-radio border v-for="item in featureList" label="">{{item}}</el-radio>
                </el-radio-group>
            </el-form-item>

            <el-form-item label="楼层：">
                <el-radio-group>
                    <el-radio border v-for="item in floorList" label="">{{item}}</el-radio>
                </el-radio-group>
            </el-form-item>

            <el-form-item label="朝向：">
                <el-radio-group>
                    <el-radio border v-for="item in orientationsList" label="">{{item}}</el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item label="装修：">
                <el-radio-group>
                    <el-radio border v-for="item in decorationList" label="">{{item}}</el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item label="房龄：">
                <el-radio-group>
                    <el-radio border v-for="item in houseAgeList" label="">{{item}}</el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item label="小区名称：">
                <el-col :span="6">
                    <p class="item-p">楼盘名称：</p>
                    <el-input placeholder="请输入楼盘名称"></el-input>
                </el-col>
                <el-col :span="6">
                    <p class="item-p">楼盘别名：</p>
                    <el-input placeholder="请输入楼盘别名"></el-input>
                </el-col>
            </el-form-item>
            <el-form-item label="楼盘地址：">
                <el-input placeholder="请输入楼盘地址"></el-input>
            </el-form-item>

            <el-form-item label="参数：">
                <el-row>
                    <el-col :span="6">
                        <p class="item-p">户型：</p>
                        <el-input placeholder="请输入户型"></el-input>
                    </el-col>
                    <el-col :span="6">
                        <p class="item-p">每平米售价：</p>
                        <el-input placeholder="请输入售价"></el-input>
                    </el-col>
                    <el-col :span="6">
                        <p class="item-p">开盘时间：</p>
                        <el-input placeholder="请输入开盘时间"></el-input>
                    </el-col>
                    <el-col :span="6">
                        <p class="item-p">交房时间：</p>
                        <el-input placeholder="请输入交房时间"></el-input>
                    </el-col>

                    <el-col :span="6">
                        <p class="item-p">产 权：</p>
                        <el-input placeholder="请输入产 权"></el-input>
                    </el-col>
                    <el-col :span="6">
                        <p class="item-p">物业公司：</p>
                        <el-input placeholder="请输入物业公司"></el-input>
                    </el-col>
                    <el-col :span="6">
                        <p class="item-p">建筑类型：</p>
                        <el-input placeholder="请输入建筑类型"></el-input>
                    </el-col>
                    <el-col :span="6">
                        <p class="item-p">规划户数：</p>
                        <el-input placeholder="请输入规划户数"></el-input>
                    </el-col>
                    <el-col :span="6">
                        <p class="item-p">停 车 位：</p>
                        <el-input placeholder="请输入停 车 位"></el-input>
                    </el-col>
                    <el-col :span="6">
                        <p class="item-p">物业费用：</p>
                        <el-input placeholder="请输入物业费用"></el-input>
                    </el-col>
                    <el-col :span="6">
                        <p class="item-p">建筑面积：</p>
                        <el-input placeholder="请输入建筑面积"></el-input>
                    </el-col>
                    <el-col :span="6">
                        <p class="item-p">开 发 商：</p>
                        <el-input placeholder="请输入开 发 商"></el-input>
                    </el-col>
                    <el-col :span="6">
                        <p class="item-p">物业类型：</p>
                        <el-input placeholder="请输入物业类型"></el-input>
                    </el-col>

                    <el-col :span="6">
                        <p class="item-p">绿 化 率：</p>
                        <el-input placeholder="请输入绿 化 率"></el-input>
                    </el-col>
                    <el-col :span="6">
                        <p class="item-p">占地面积：</p>
                        <el-input placeholder="请输入占地面积"></el-input>
                    </el-col>
                </el-row>
            </el-form-item>

            <el-form-item label="基本信息：" prop="desc">
                <div>
                    <p class="item-p">附近学校：</p>
                    <el-input type="textarea" placeholder="请输入学校信息"></el-input>
                </div>
                <div>
                    <p class="item-p">交通配套：</p>
                    <el-input type="textarea" placeholder="请输入配套信息"></el-input>
                </div>
            </el-form-item>
            <el-form-item label="房源介绍：" prop="desc">
                <div>
                    <p class="item-p">房源亮点：</p>
                    <el-input type="textarea" placeholder="请输入房源亮点"></el-input>
                </div>
            </el-form-item>

            <el-form-item label="小区简介：">
                <quill-editor ref="myTextEditor"
                              :content="content"
                              :options="editorOption"
                              @change="onEditorChange($event)">
                </quill-editor>
            </el-form-item>

            <el-form-item label="楼盘图片：">
                <quill-editor ref="myTextEditor"
                              :content="content"
                              :options="editorOption"
                              @change="onEditorChange($event)">
                </quill-editor>
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
    import breadNav from './bread'
    import {quillEditor} from 'vue-quill-editor'

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
                areaList: ["南山", "福田", "罗湖", "宝安", "龙岗", "龙华新区", "光明新区", "盐田", "坪山新区", "大鹏新区"],
                metroList: ["罗宝线", "蛇口线", "龙岗线", "龙华线", "环中口线", "机场专线", "西丽线", "梅林线", "光明线", "坂田线"],
                priceList: ["50万以下", "50-100万元", "100-150万元", "150-200万元", "200万以上"],
                acreageList: ["50平方以下", "50-70平方", "70-90平方", "90-110平方", "110-130平方", "130-150平方", "150平方以上"],
                houseTypeList: ["一室", "两室", "三室", "四室", "五室", "别墅"],
                featureList: ["满两年", "满五唯一", "红本在手", "近地铁", "不限购", "随时看房", "急售", "南北通透", "复式", "不看商住两用", "新上"],
                floorList: ["6层以下", "6-12层", "12层以上"],
                orientationsList: ["东", "西", "南", "北", "南北"],
                decorationList: ["毛胚", "普通装修", "精装修", "豪华装修"],
                houseAgeList: ["5年内", "5-10年", "10-20年", "20年以上"],
                content: '',
                editorOption: {}
            }
        },
        components: {
            breadNav,
            quillEditor,
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

    .el-col {
        margin-bottom: 20px;
        margin-right: 10px;
    }

    .item-p {
        color: #777
    }
</style>