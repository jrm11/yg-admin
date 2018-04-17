<template>
    <section>
        <el-form-item label="房源区域：">
            <el-radio size="small" v-model="radio0" border v-for="(item,index)  in areaList" :label="item"
                      :key="index">{{item}}
            </el-radio>
        </el-form-item>
        <el-form-item label="地铁线路：">

            <el-radio size="small" v-model="radio1" border v-for="(item,index)  in metroList" :label="item"
                      :key="index">{{item}}
            </el-radio>

        </el-form-item>
        <el-form-item label="价格：">
            <slot name="price"></slot>
        </el-form-item>
        <el-form-item label="面积：">
            <!--<el-checkbox size="small" v-model="radio3" border v-for="(item,index)  in acreageList" :label="item"-->
                      <!--:key="index">{{item}}-->
            <!--</el-checkbox>-->
            <slot name="acreage"></slot>
        </el-form-item>

        <el-form-item label="户型：">
            <slot name="chk"></slot>
        </el-form-item>

        <el-form-item label="特色：">
                <!--<el-checkbox size="small" v-model="radio5" border v-for="(item,index)  in featureList" :label="item"-->
                             <!--:key="index">{{item}}-->
                <!--</el-checkbox>-->
            <slot name="feature"></slot>
        </el-form-item>

        <el-form-item label="楼层：">

            <el-radio size="small" v-model="radio6" border v-for="(item,index)  in floorList" :label="item"
                      :key="index">{{item}}
            </el-radio>

        </el-form-item>

        <el-form-item label="朝向：">

            <!--<el-checkbox size="small" v-model="radio7" border v-for="(item,index)  in orientationsList" :label="item"-->
                      <!--:key="index">{{item}}-->
            <!--</el-checkbox>-->
            <slot name="orientations"></slot>

        </el-form-item>
        <el-form-item label="装修：">

            <el-radio size="small" v-model="radio8" border v-for="(item,index)  in decorationList" :label="item"
                      :key="index">{{item}}
            </el-radio>

        </el-form-item>
        <el-form-item label="房龄：">
            <el-radio size="small" v-model="radio9" border v-for="(item,index)  in houseAgeList" :label="item"
                      :key="index">{{item}}
            </el-radio>

        </el-form-item>

    </section>
</template>.

<script>
    const areaList = ["南山", "福田", "罗湖", "宝安", "龙岗", "龙华新区", "光明新区", "盐田", "坪山新区", "大鹏新区"];
    const metroList = ["罗宝线", "蛇口线", "龙岗线", "龙华线", "环中口线", "机场专线", "西丽线", "梅林线", "光明线", "坂田线"];
    const acreageList = ["50平方以下", "50-70平方", "70-90平方", "90-110平方", "110-130平方", "130-150平方", "150平方以上"];
    const featureList = ["满两年", "满五唯一", "红本在手", "近地铁", "不限购", "随时看房", "急售", "南北通透", "复式", "不看商住两用", "新上"];
    const floorList = ["6层以下", "6-12层", "12层以上"];
    const orientationsList = ["东", "西", "南", "北", "南北"];
    const decorationList = ["毛胚", "普通装修", "精装修", "豪华装修"];
    const houseAgeList = ["5年内", "5-10年", "10-20年", "20年以上"];
    export default {
        data() {
            return {
                areaList: areaList,
                metroList: metroList,
                acreageList: acreageList,
                featureList: featureList,
                floorList: floorList,
                orientationsList: orientationsList,
                decorationList: decorationList,
                houseAgeList: houseAgeList,
                radio0: '0',
                radio1: '1',
                radio3: '3',
                radio4: '4',
                radio5: '5',
                radio6: '6',
                radio7: '7',
                radio8: '8',
                radio9: '9',
                checkedList: []
            }
        }
    }
</script>

<style scoped lang="scss" type="text/scss">

</style>