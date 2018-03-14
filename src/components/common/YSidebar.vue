<template>
    <div class="sider">
        <el-menu :default-active="onRoutes"
                 default-active="2"
                 @open="handleOpen"
                 @close="handleClose"
                 background-color="#324157"
                 text-color="#fff"
                 class="el-menu el-menu-vertical-demo el-menu--dark" unique-opened router>
            <template v-for="item in items">
                <template v-if="item.subs">
                    <el-submenu :index="item.index">
                        <template slot="title"><i :class="item.icon"></i>{{ item.title }}</template>
                        <el-menu-item @click="click" v-for="(subItem,i) in item.subs" :key="i"
                                      :index="subItem.index">{{ subItem.title}}

                        </el-menu-item>

                    </el-submenu>
                </template>
                <template v-else>
                    <el-menu-item :index="item.index">
                        <i :class="item.icon"></i>{{ item.title }}
                    </el-menu-item>
                </template>
            </template>

        </el-menu>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                items: [
                    {
                        icon: 'fa fa-envelope',
                        index: 'infoManage',
                        title: '信息管理',
                        subs: [
                            {
                                index: 'infoCol',
                                title: '信息栏目管理'
                            },
                            {
                                index: 'infoColContent',
                                title: '信息内容管理'
                            }
                        ]
                    },
                    {
                        icon: 'fa fa-plus-square',
                        index: 'AddData',
                        title: '添加数据',
                        subs: [
                            {
                                index: 'AddSecondHouse',
                                title: '添加二手房源',
                            },
                            {
                                index: 'AddSecondAreaHouse',
                                title: '添加二手小区房'
                            },
                            {
                                index: 'AddSecondSchoolHouse',
                                title: '添加二手学区房源'
                            },
                            {
                                index: 'AddNewHouse',
                                title: '添加新房源'
                            },
                            {
                                index: 'AddNewType',
                                title: '添加新户型'
                            },
                            {
                                index: 'AddRentHouse',
                                title: '添加租房房源'
                            }
                        ]
                    },
                    {
                        icon: 'fa fa-tasks',
                        index: 'SZHouse',
                        title: '深圳房源管理',
                        subs: [
                            {
                                index: 'SZHouseManage',
                                title: '房源分类管理 '
                            },
                            {
                                index: 'SZAddressManage',
                                title: '房源地址管理 '
                            },
                            {
                                index: 'SZSecondHouseList',
                                title: '二手房源信息列表',
                            },
                            {
                                index: 'SZSecondAreaHouseList',
                                title: '二手房小区信息列表'
                            },
                            {
                                index: 'SZSecondSchoolHouseList',
                                title: '二手房学区信息列表'
                            },
                            {
                                index: 'SZNewHouseList',
                                title: '新房源信息列表'
                            },
                            {
                                index: 'SZRentList',
                                title: '租房信息列表'
                            }
                        ]
                    },
                    {
                        icon: 'fa fa-tasks',
                        index: 'DGHouse',
                        title: '东莞房源管理',
                        subs: [
                            {
                                index: 'DGHouseManage',
                                title: '房源分类管理 '
                            },
                            {
                                index: 'DGAddressManage',
                                title: '房源地址管理 '
                            },
                            {
                                index: 'DGSecondHouseList',
                                title: '二手房源信息列表'
                            },
                            {
                                index: 'DGSecondAreaHouseList',
                                title: '二手房小区信息列表'
                            },
                            {
                                index: 'DGSecondSchoolHouseList',
                                title: '二手房学区信息列表'
                            },
                            {
                                index: 'DGNewHouseList',
                                title: '新房源信息列表'
                            },
                            {
                                index: 'DGRentList',
                                title: '租房信息列表'
                            }
                        ]
                    },
                    {
                        icon: 'fa fa-tasks',
                        index: 'HZHouse',
                        title: '惠州房源管理',
                        subs: [
                            {
                                index: 'HZHouseManage',
                                title: '房源分类管理 '
                            },
                            {
                                index: 'HZAddressManage',
                                title: '房源地址管理 '
                            },
                            {
                                index: 'HZSecondHouseList',
                                title: '二手房源信息列表'
                            },
                            {
                                index: 'HZSecondAreaHouseList',
                                title: '二手小区房信息列表'
                            },
                            {
                                index: 'HZSecondSchoolHouseList',
                                title: '二手房学区信息列表'
                            },
                            {
                                index: 'HZNewHouseList',
                                title: '新房源信息列表'
                            },
                            {
                                index: 'HZRentList',
                                title: '租房信息列表'
                            }
                        ]
                    },
                    {
                        icon: 'fa fa-tasks',
                        index: 'ZSHouse',
                        title: '中山房源管理',
                        subs: [
                            {
                                index: 'ZSHouseManage',
                                title: '房源分类管理 '
                            },
                            {
                                index: 'ZSAddressManage',
                                title: '房源地址管理 '
                            },
                            {
                                index: 'ZSSecondHouseList',
                                title: '二手房源信息列表'
                            },
                            {
                                index: 'ZSSecondAreaHouseList',
                                title: '二手小区房信息列表'
                            },
                            {
                                index: 'ZSSecondSchoolHouseList',
                                title: '二手房学区信息列表'
                            },
                            {
                                index: 'ZSNewHouseList',
                                title: '新房源信息列表'
                            },
                            {
                                index: 'ZSRentHouseList',
                                title: '租房信息列表'
                            }
                        ]
                    },
                    {
                        icon: 'fa fa-commenting',
                        index: 'LeaveMsg',
                        title: '留言管理',
                        subs: [
                            {
                                index: 'msgList',
                                title: '留言列表'
                            }
                        ]
                    },
                    {
                        icon: 'fa fa-cog',
                        index: 'ConfigManage',
                        title: '配置管理',
                        subs: [
                            {
                                index: 'baseConfigManage',
                                title: '基本配置列表'
                            }
                        ]
                    },
                ]
            }
        },
        methods: {
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            },
            click(){
                // alert(111)
            }
        },
        computed: {
            onRoutes() {
                return this.$route.path.replace('/', '');
            }
        }
    }
</script>

<style lang="scss" rel="stylesheet/scss">
    .sider {
        position: absolute;
        width: 201px;
        left: 0;
        top: 70px;
        bottom: 0;
        overflow-y: auto;
    }
    .sider>ul {
        height: 100%;
    }
    .el-menu-item {
        background: #1f2d3d !important;
    }

    .el-menu-item:hover, .el-menu-item:focus {
        background: #151f2a !important;
    }

    /*修改elementUI 样式*/
    .el-submenu .el-menu-item {
        height: 40px;
        line-height: 40px;
        padding-left: 50px !important;
    }

    .el-menu-item, .el-submenu__title {
        height: 50px;
        line-height: 50px;
    }

    /*修改font-answe字体样式*/
    .fa {
        margin-right: 15px;
    }



</style>

