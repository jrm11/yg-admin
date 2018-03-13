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
                        <el-menu-item v-for="(subItem,i) in item.subs" :key="i"
                                      :index="subItem.index">{{ subItem.title
                            }}
                        </el-menu-item>
                    </el-submenu>
                </template>
                <template v-else>
                    <el-menu-item :index="item.index" >
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
                        icon: 'el-icon-setting',
                        index: 'readme',
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
                        icon: 'el-icon-menu',
                        index: '2',
                        title: '深圳房源管理',
                        subs: [
                            {
                                index: 'basetable',
                                title: '房源分类管理 | 添加'
                            },
                            {
                                index: 'vuetable',
                                title: '房源地址管理 | 添加'
                            },
                            {
                                index: 'basetable',
                                title: '添加二手房源'
                            },
                            {
                                index: 'vuetable',
                                title: '添加二手小区房'
                            },
                            {
                                index: 'basetable',
                                title: '添加二手学区房源'
                            },
                            {
                                index: 'vuetable',
                                title: '添加新房源'
                            },
                            {
                                index: 'basetable',
                                title: '添加新户型'
                            },
                            {
                                index: 'vuetable',
                                title: '添加租房房源'
                            }
                        ]
                    },
                    {
                        icon: 'el-icon-menu',
                        index: '2',
                        title: '东莞房源管理',
                        subs: [
                            {
                                index: 'basetable',
                                title: '房源分类管理 | 添加'
                            },
                            {
                                index: 'vuetable',
                                title: '房源地址管理 | 添加'
                            },
                            {
                                index: 'basetable',
                                title: '添加二手房源'
                            },
                            {
                                index: 'vuetable',
                                title: '添加二手小区房'
                            },
                            {
                                index: 'basetable',
                                title: '添加二手学区房源'
                            },
                            {
                                index: 'vuetable',
                                title: '添加新房源'
                            },
                            {
                                index: 'basetable',
                                title: '添加新户型'
                            },
                            {
                                index: 'vuetable',
                                title: '添加租房房源'
                            }
                        ]
                    },
                    {
                        icon: 'el-icon-menu',
                        index: '2',
                        title: '惠州房源管理',
                        subs: [
                            {
                                index: 'basetable',
                                title: '房源分类管理 | 添加'
                            },
                            {
                                index: 'vuetable',
                                title: '房源地址管理 | 添加'
                            },
                            {
                                index: 'basetable',
                                title: '添加二手房源'
                            },
                            {
                                index: 'vuetable',
                                title: '添加二手小区房'
                            },
                            {
                                index: 'basetable',
                                title: '添加二手学区房源'
                            },
                            {
                                index: 'vuetable',
                                title: '添加新房源'
                            },
                            {
                                index: 'basetable',
                                title: '添加新户型'
                            },
                            {
                                index: 'vuetable',
                                title: '添加租房房源'
                            }
                        ]
                    },
                    {
                        icon: 'el-icon-menu',
                        index: '2',
                        title: '中山房源管理',
                        subs: [
                            {
                                index: 'basetable',
                                title: '房源分类管理 | 添加'
                            },
                            {
                                index: 'vuetable',
                                title: '房源地址管理 | 添加'
                            },
                            {
                                index: 'basetable',
                                title: '添加二手房源'
                            },
                            {
                                index: 'vuetable',
                                title: '添加二手小区房'
                            },
                            {
                                index: 'basetable',
                                title: '添加二手学区房源'
                            },
                            {
                                index: 'vuetable',
                                title: '添加新房源'
                            },
                            {
                                index: 'basetable',
                                title: '添加新户型'
                            },
                            {
                                index: 'vuetable',
                                title: '添加租房房源'
                            }
                        ]
                    },
                    {
                        icon: 'el-icon-setting',
                        index: '22',
                        title: '留言管理',
                        subs: [
                            {
                                index: 'infoCol',
                                title: '留言信息管理'
                            }
                        ]
                    },
                    {
                        icon: 'el-icon-setting',
                        index: '11',
                        title: '配置管理',
                        subs: [
                            {
                                index: 'infoCol',
                                title: '基本配置管理'
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

    ul {
        height: 100%;
    }

    }
    .el-menu-item{
        background: #1f2d3d!important;
    }
    .el-menu-item:hover, .el-menu-item:focus {
        background: #151f2a !important;
    }
</style>

