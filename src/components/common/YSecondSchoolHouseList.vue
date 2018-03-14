<template>
    <section>

        <el-col :span="24" class="toolbar search-bar" style="padding-bottom: 0px;">
            <el-form :inline="true" :model="filters">
                <el-form-item class="fl">
                    <el-input v-model="filters.name" placeholder="姓名" class="ml10" size="small"></el-input>
                </el-form-item>
                <el-form-item class="fl">
                    <el-button type="primary"  size="small"><i class="el-icon-search "></i>查询</el-button>
                </el-form-item>
                <div class="btn-list">
                    <el-button type="primary"  size="small"><i class="el-icon-plus "></i>新增</el-button>

                    <el-button type="danger"  size="small"><i
                            class="el-icon-delete "></i>批量删除
                    </el-button>
                </div>
            </el-form>
        </el-col>
        <el-table
                :data="tableData"
                style="width: 100%">
            <el-table-column
                    type="selection"
                    width="55">
            </el-table-column>
            <el-table-column
                    prop="date"
                    label="ID"
                    sortable
                    width="80">
            </el-table-column>
            <el-table-column
                    prop="name"
                    label="名称"
                    sortable>
            </el-table-column>
            <el-table-column
                    prop="ClickNum"
                    sortable

                    width="100"
                    label="点击量">
            </el-table-column>

            <el-table-column
                    prop="status"
                    label="状态"
                    width="120"
            >
            </el-table-column>

            <el-table-column
                    width="320" label="操作">
                <template slot-scope="scope">
                    <el-button size="mini" type="text">修改</el-button>
                    <el-button size="mini" type="text">热销</el-button>
                    <el-button size="mini" type="text">置顶</el-button>
                    <el-button size="mini" type="text">精选</el-button>
                    <el-button size="mini" type="text">屏蔽</el-button>
                    <el-button size="mini" type="text">删除</el-button>
                </template>
            </el-table-column>
        </el-table>

        <!--分页-->
        <div class="page clearfix">
            <el-col :span="24" class="toolbar">
                <el-pagination
                        layout="total, sizes, prev, pager, next, jumper"
                        @current-change=""
                        :page-size="pagesize"
                        :total="total"
                        :page-sizes="[10]"
                        style="float:right;">
                </el-pagination>
            </el-col>
        </div>

    </section>
</template>

<script>
    export default {
        data() {
            return {
                filters: {
                    name: ''
                },
                total: 0,
                page: 1,pagesize: 10,
                tableData: [{
                    date: '1',
                    ClickNum: 1001,
                    status: "正常",
                    name: '[深圳新房源] 龙华大浪【河背家园】新盘上市采光极佳 无暗房 ',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '4',
                    ClickNum: 1040,
                    status: "热|顶|精",

                    name: '[深圳新房源] 华润旧改项目苹果小镇 观澜大型公园旁【富艺家园】 ',
                    address: '上海市普陀区金沙江路 1517 弄'
                }, {
                    date: '5',
                    ClickNum: 1030,
                    status: "热|顶|精",

                    name: '[深圳新房源] 罗湖黄贝岭四个地铁口新盘即将隆重开盘！送精装修，18000元起 ',
                    address: '上海市普陀区金沙江路 1519 弄'
                }, {
                    date: '6',
                    ClickNum: 1002,
                    status: "热|顶|精",
                    name: '[深圳新房源] 沙井《时代家园》一梯四户首付三成 分期3-6年精装修交楼（售罄） ',
                    address: '上海市普陀区金沙江路 1516 弄'
                }]
            }
        }
    }
</script>
<style lang="scss" scoped rel="stylesheet/scss">
    @import "../../assets/css/app.scss";
    @import "../../assets/css/userManager.scss";

    .userManager-c {
        margin: 0 100px;
        height: 100%;
    }

    .btn-list {
        position: absolute;
        top: 50%;
        right: 10px;
        transform: translateY(-50%);
    }
</style>