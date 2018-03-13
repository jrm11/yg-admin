<template>
    <section>
        <el-form-item label="房源区域：">
            <el-radio-group size="small"> size="small">
                <el-radio v-model="raido0" border v-for="(item,index)  in areaList" label="0" :key="index">{{item}}</el-radio>
            </el-radio-group>
        </el-form-item>
        <el-form-item label="地铁线路：">
            <el-radio-group size="small">>
                <el-radio v-model="raido1" border v-for="(item,index)  in metroList" label="1" :key="index">{{item}}</el-radio>
            </el-radio-group>
        </el-form-item>
        <el-form-item label="价格：">
            <el-radio-group size="small">>
                <el-radio v-model="raido2" border v-for="(item,index)  in priceList" label="2" :key="index">{{item}}</el-radio>
            </el-radio-group>
        </el-form-item>
        <el-form-item label="面积：">
            <el-radio-group size="small">>
                <el-radio v-model="raido3" border v-for="(item,index)  in acreageList" label="3" :key="index">{{item}}</el-radio>
            </el-radio-group>
        </el-form-item>

        <el-form-item label="户型：">
            <el-radio-group size="small">>
                <el-radio v-model="raido4" border v-for="(item,index)  in houseTypeList" label="4" :key="index">{{item}}</el-radio>
            </el-radio-group>
        </el-form-item>

        <el-form-item label="特色：">
            <el-radio-group size="small">>
                <el-radio  v-model="raido5" border v-for="(item,index)  in featureList" label="5" :key="index">{{item}}</el-radio>
            </el-radio-group>
        </el-form-item>

        <el-form-item label="楼层：">
            <el-radio-group size="small">>
                <el-radio v-model="raido6" border v-for="(item,index)  in floorList" label="6" :key="index">{{item}}</el-radio>
            </el-radio-group>
        </el-form-item>

        <el-form-item label="朝向：">
            <el-radio-group size="small">>
                <el-radio v-model="raido7" border v-for="(item,index)  in orientationsList" label="7" :key="index">{{item}}</el-radio>
            </el-radio-group>
        </el-form-item>
        <el-form-item label="装修：">
            <el-radio-group size="small">>
                <el-radio v-model="raido8" border v-for="(item,index)  in decorationList" label="" :key="index">{{item}}</el-radio>
            </el-radio-group>
        </el-form-item>
        <el-form-item label="房龄：">
            <el-radio-group size="small">>
                <el-radio v-model="raido9" border v-for="(item,index)  in houseAgeList" label="" :key="index">{{item}}</el-radio>
            </el-radio-group>
        </el-form-item>
    </section>
</template>

<script>
    export default {
        data() {
            return {
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
                raido0:'0',
                raido1:'1',
                raido2:'2',
                raido3:'3',
                raido4:'4',
                raido5:'5',
                raido6:'6',
                raido7:'7',
                raido8:'8',
                raido9:'9',
            }
        }
    }
</script>

<style scoped lang="scss" type="text/scss">

</style>