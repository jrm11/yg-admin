<template>
    <section>
        <bread-nav></bread-nav>
        <div style="background: #fff; padding:10px;">
            <div class="btn-list">
                <el-button type="primary" size="small"><i class="el-icon-plus "></i>新增</el-button>
                <el-button type="primary" size="small"><i class="el-icon-download "></i>导出全部</el-button>
                <el-button type="primary" size="small"><i class="el-icon-download "></i>导出当前页
                </el-button>
                <el-button type="primary" size="small"><i class="el-icon-download "></i>导出zip</el-button>
                <el-button type="primary" size="small"><i class="el-icon-upload2 "></i>导入</el-button>
                <el-button type="danger" size="small">
                    <i class="el-icon-delete "></i>批量删除
                </el-button>
            </div>
            <el-table
                    :data="tableData"
                    border
                    style="width: 100%">
                <el-table-column
                        type="selection"
                        width="55">
                </el-table-column>
                <el-table-column
                        prop="date"
                        label="ID"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="name"
                        label="姓名"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="address"
                        label="时间">
                </el-table-column>
                <el-table-column
                        prop="address"
                        label="状态">
                </el-table-column>
                <el-table-column
                        prop="address"
                        label="操作">
                </el-table-column>
            </el-table>

            <!--<div class="page clearfix">-->
                <!--<el-col :span="24" class="toolbar">-->
                    <!--<el-pagination-->
                            <!--layout="total, sizes, prev, pager, next, jumper"-->
                            <!--@current-change=""-->
                            <!--:page-size="pagesize"-->
                            <!--:total="total"-->
                            <!--:page-sizes="[10]"-->
                            <!--style="float:right;">-->
                    <!--</el-pagination>-->
                <!--</el-col>-->
            <!--</div>-->
        </div>

    </section>
</template>

<script>
    import breadNav from '../../common/bread'

    export default {
        data() {
            return {
                pagesize: 10, total: 0,
                tableData: [{
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1517 弄'
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1519 弄'
                }, {
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1516 弄'
                }]
            }
        },
        components: {
            breadNav
        },
    }
</script>

<style scoped lang="scss" type="text/scss">
    .btn-list {
        padding-bottom: 10px;
    }
    $bgf:#fff;
    $border-d:#ddd;
    //宽度
    $w-1:1px;
    $w-12:12px;
    //高度
    $h58: 58px;
    //外边距
    $mr5:5px;
    /*修改分页样式 element-ui*/
    /*搜索条*/
    .search-bar {
        position: relative;
        background: $bgf;
        border: $w-1 solid $border-d;
        border-bottom: 0;
    }


    /*修改分页样式 element-ui*/
    .page {
        padding: 15px 0;
        background: $bgf;
        border-left: $w-1 solid $border-d;
        border-right: $w-1 solid $border-d;
        border-bottom: $w-1 solid $border-d;
        margin-bottom: 20px;
    }



    .el-pager li {
        /*padding: 5px 10px;*/
        margin: 0 5px;
        padding: 0 6px;
        border-radius: 5px;
        border: $w-1 solid $border-d;
        cursor: pointer;
    }

    .el-pager li.active + li {
        border-left: $w-1 solid $border-d;
    }


</style>