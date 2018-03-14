import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);
const home = resolve => require(['../components/common/YHome.vue'], resolve);
const readme = resolve => require(['../components/page/YReadme.vue'], resolve);
const infoColManage = resolve => require(['../components/page/YInfoManage/YInfoColManage.vue'], resolve)
const infoContentManage = resolve => require(['../components/page/YInfoManage/YInfoContentManage.vue'], resolve)
const classifyManage = resolve => require(['../components/common/YClassifyManage.vue'], resolve);
const addressManage = resolve => require(['../components/common/YAddressManage.vue'], resolve);
const addSecondHouse = resolve => require(['../components/common/YAddSecondHouse.vue'], resolve);
const addSecondAreaHouse = resolve => require(['../components/common/YAddSecondAreaHouse.vue'], resolve);
const addSecondSchoolDistrictHouse = resolve => require(['../components/common/YAddSecondSchoolDistrictHouse.vue'], resolve)
const addNewHouse = resolve => require(['../components/common/YAddNewHouse.vue'], resolve)
const addNewType = resolve => require(['../components/common/YAddNewType.vue'], resolve)
const addRent = resolve => require(['../components/common/YAddRent.vue'], resolve)
const login = resolve => require(['../components/page/YLogin.vue'], resolve)
const leaveMsgManage = resolve => require(['../components/page/YMsgManage/YLeaveMsgManage.vue'], resolve)
const baseConfigManage = resolve => require(['../components/page/YConfigManage/YBaseConfigManage.vue'], resolve)
export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/login'
        },
        {
            path: '/readme',
            component: home,
            children: [
                {
                    path: '/',
                    component: readme
                },
                {
                    path: '/infoCol',
                    component: infoColManage
                },
                {
                    path: '/infoColContent',
                    component: infoContentManage
                }
            ]
        },
        {
            // 深圳房源管理
            path: '/AddData',
            component: home,
            children: [
                {
                    // 二手房
                    path: '/AddSecondHouse',
                    component: addSecondHouse,
                    meta: {
                        title: "添加二手房信息"
                    }
                },
                {
                    // 二手小区房
                    path: '/AddSecondAreaHouse',
                    component: addSecondAreaHouse,
                    meta: {
                        title: "添加二手小区房信息"
                    }
                },
                {
                    // 二手学区房
                    path: '/AddSecondSchoolHouse',
                    component: addSecondSchoolDistrictHouse,
                    meta: {
                        title: "添加二手学区房信息"
                    }
                },
                {
                    // 新房
                    path: '/AddNewHouse',
                    component: addNewHouse,
                    meta: {
                        title: "添加新房信息"
                    }
                },
                {
                    // 新户型
                    path: '/AddNewType',
                    component: addNewType,
                    meta: {
                        title: "添加新户型信息"
                    }
                },
                {
                    // 租房
                    path: '/AddRentHouse',
                    component: addRent,
                    meta: {
                        title: "添加租房信息"
                    }
                },
            ]
        },

        {
            // 深圳房源管理
            path: '/SZHouse',
            component: home,
            children: [
                {
                    // 房源管理
                    path: '/SZHouseManage',
                    component: classifyManage,
                    meta: {
                        title: "房源管理"
                    }
                },
                {
                    // 地址管理
                    path: '/SZAddressManage',
                    component: addressManage,
                    meta: {
                        title: "地址管理"
                    }
                },
                {
                    // 二手房
                    path: '/AddSecondHouse',
                    component: addSecondHouse,
                    meta: {
                        title: "添加二手房信息"
                    }
                },
                {
                    // 二手小区房
                    path: '/AddSecondAreaHouse',
                    component: addSecondAreaHouse,
                    meta: {
                        title: "添加二手小区房信息"
                    }
                },
                {
                    // 二手学区房
                    path: '/AddSecondSchoolHouse',
                    component: addSecondSchoolDistrictHouse,
                    meta: {
                        title: "添加二手学区房信息"
                    }
                },
                {
                    // 新房
                    path: '/AddNewHouse',
                    component: addNewHouse,
                    meta: {
                        title: "添加新房信息"
                    }
                },
                {
                    // 新户型
                    path: '/AddNewType',
                    component: addNewType,
                    meta: {
                        title: "添加新户型信息"
                    }
                },
                {
                    // 租房
                    path: '/AddRentHouse',
                    component: addRent,
                    meta: {
                        title: "添加租房信息"
                    }
                },
            ]
        },
        {
            path: '/login',
            component: login
        },
        {
            // 留言管理
            path: '/LeaveMsg',
            component: home,
            children: [
                {
                    // 管理
                    path: '/msgList',
                    component: leaveMsgManage
                }
            ]
        },
        {
            // 配置管理
            path: '/ConfigManage',
            component: home,
            children: [
                {
                    // 管理
                    path: '/baseConfigManage',
                    component: baseConfigManage
                }
            ]
        },
    ]
})
