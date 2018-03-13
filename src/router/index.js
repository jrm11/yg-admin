import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/login'
        },
        {
            path: '/readme',
            component: resolve => require(['../components/common/YHome.vue'], resolve),
            children: [
                {
                    path: '/',
                    component: resolve => require(['../components/page/YReadme.vue'], resolve)
                },
                {
                    path: '/infoCol',
                    component: resolve => require(['../components/page/YInfoManage/YInfoColManage.vue'], resolve)
                },
                {
                    path: '/infoColContent',
                    component: resolve => require(['../components/page/YInfoManage/YInfoContentManage.vue'], resolve)
                }
            ]
        },
        {
            // 深圳房源管理
            path: '/SZHouse',
            component: resolve => require(['../components/common/YHome.vue'], resolve),
            children: [
                {
                    // 房源管理
                    path: '/houseManage',
                    component: resolve => require(['../components/common/YClassifyManage.vue'], resolve),
                    meta: {
                        title: "房源管理"
                    }
                },
                {
                    // 地址管理
                    path: '/addressManage',
                    component: resolve => require(['../components/common/YAddressManage.vue'], resolve),
                    meta: {
                        title: "地址管理"
                    }
                },
                {
                    // 二手房
                    path: '/AddSecondHouse',
                    component: resolve => require(['../components/common/YAddSecondHouse.vue'], resolve),
                    meta: {
                        title: "二手房"
                    }
                },
                {
                    // 二手小区房
                    path: '/addSecondAreaHouse',
                    component: resolve => require(['../components/common/YAddSecondAreaHouse.vue'], resolve),
                    meta: {
                        title: "二手小区房"
                    }
                },
                {
                    // 二手学区房
                    path: '/addSecondSchoolHouse',
                    component: resolve => require(['../components/common/YAddSecondSchoolDistrictHouse.vue'], resolve),
                    meta: {
                        title: "二手学区房"
                    }
                },
                {
                    // 新房
                    path: '/AddNewHouse',
                    component: resolve => require(['../components/common/YAddNewHouse.vue'], resolve),
                    meta: {
                        title: "新房"
                    }
                },
                {
                    // 新户型
                    path: '/AddNewType',
                    component: resolve => require(['../components/common/YAddNewType.vue'], resolve),
                    meta: {
                        title: "新户型"
                    }
                },
                {
                    // 租房
                    path: '/AddRentHouse',
                    component: resolve => require(['../components/common/YAddRent.vue'], resolve),
                    meta: {
                        title: "租房"
                    }
                },
            ]
        },

        {
            path: '/login',
            component: resolve => require(['../components/page/YLogin.vue'], resolve)
        },
        {
            // 留言管理
            path: '/LeaveMsg',
            component: resolve => require(['../components/common/YHome.vue'], resolve),
            children: [
                {
                    // 管理
                    path: '/MsgManage',
                    component: resolve => require(['../components/page/YMsgManage/YLeaveMsgManage.vue'], resolve)
                }
            ]
        },
        {
            // 配置管理
            path: '/ConfigManage',
            component: resolve => require(['../components/common/YHome.vue'], resolve),
            children: [
                {
                    // 管理
                    path: '/baseConfigManage',
                    component: resolve => require(['../components/page/YConfigManage/YBaseConfigManage.vue'], resolve)
                }
            ]
        },
    ]
})
