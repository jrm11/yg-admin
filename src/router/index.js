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
            component: resolve => require(['../components/common/Home.vue'], resolve),
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
            component: resolve => require(['../components/common/Home.vue'], resolve),
            children: [
                {
                    // 房源管理
                    path: '/houseManage',
                    component: resolve => require(['../components/common/YClassifyManage.vue'], resolve)
                },
                {
                    // 地址管理
                    path: '/addressManage',
                    component: resolve => require(['../components/common/YAddressManage.vue'], resolve)
                },
                {
                    // 二手房
                    path: '/AddSecondHouse',
                    component: resolve => require(['../components/common/YAddSecondHouse.vue'], resolve)
                },
                {
                    // 二手小区房
                    path: '/addSecondAreaHouse',
                    component: resolve => require(['../components/common/YAddSecondAreaHouse.vue'], resolve)
                },
                {
                    // 新房
                    path: '/AddNewHouse',
                    component: resolve => require(['../components/common/YAddNewHouse.vue'], resolve)
                },
                {
                    // 新户型
                    path: '/AddNewType',
                    component: resolve => require(['../components/common/YAddNewType.vue'], resolve)
                },
                {
                    // 租房
                    path: '/AddRentHouse',
                    component: resolve => require(['../components/common/YAddRent.vue'], resolve)
                },
            ]
        },
        {
            // 东莞房源管理
            path: '/DGHouse',
            component: resolve => require(['../components/common/Home.vue'], resolve),
            children: [
                {
                    // 房源管理
                    path: '/houseManage',
                    component: resolve => require(['../components/common/YClassifyManage.vue'], resolve)
                },
                {
                    // 地址管理
                    path: '/addressManage',
                    component: resolve => require(['../components/common/YAddressManage.vue'], resolve)
                },
                {
                    // 二手房
                    path: '/AddSecondHouse',
                    component: resolve => require(['../components/common/YAddSecondHouse.vue'], resolve)
                },
                {
                    // 二手小区房
                    path: '/addSecondAreaHouse',
                    component: resolve => require(['../components/common/YAddSecondAreaHouse.vue'], resolve)
                },
                {
                    // 新房
                    path: '/AddNewHouse',
                    component: resolve => require(['../components/common/YAddNewHouse.vue'], resolve)
                },
                {
                    // 新户型
                    path: '/AddNewType',
                    component: resolve => require(['../components/common/YAddNewType.vue'], resolve)
                },
                {
                    // 租房
                    path: '/AddRentHouse',
                    component: resolve => require(['../components/common/YAddRent.vue'], resolve)
                },
            ]
        },
        {
            // 惠州房源管理
            path: '/HZHouse',
            component: resolve => require(['../components/common/Home.vue'], resolve),
            children: [
                {
                    // 房源管理
                    path: '/houseManage',
                    component: resolve => require(['../components/common/YClassifyManage.vue'], resolve)
                },
                {
                    // 地址管理
                    path: '/addressManage',
                    component: resolve => require(['../components/common/YAddressManage.vue'], resolve)
                },
                {
                    // 二手房
                    path: '/AddSecondHouse',
                    component: resolve => require(['../components/common/YAddSecondHouse.vue'], resolve)
                },
                {
                    // 二手小区房
                    path: '/addSecondAreaHouse',
                    component: resolve => require(['../components/common/YAddSecondAreaHouse.vue'], resolve)
                },
                {
                    // 新房
                    path: '/AddNewHouse',
                    component: resolve => require(['../components/common/YAddNewHouse.vue'], resolve)
                },
                {
                    // 新户型
                    path: '/AddNewType',
                    component: resolve => require(['../components/common/YAddNewType.vue'], resolve)
                },
                {
                    // 租房
                    path: '/AddRentHouse',
                    component: resolve => require(['../components/common/YAddRent.vue'], resolve)
                },
            ]
        },
        {
            // 中山房源管理
            path: '/ZSHouse',
            component: resolve => require(['../components/common/Home.vue'], resolve),
            children: [
                {
                    // 房源管理
                    path: '/houseManage',
                    component: resolve => require(['../components/common/YClassifyManage.vue'], resolve)
                },
                {
                    // 地址管理
                    path: '/addressManage',
                    component: resolve => require(['../components/common/YAddressManage.vue'], resolve)
                },
                {
                    // 二手房
                    path: '/AddSecondHouse',
                    component: resolve => require(['../components/common/YAddSecondHouse.vue'], resolve)
                },
                {
                    // 二手小区房
                    path: '/addSecondAreaHouse',
                    component: resolve => require(['../components/common/YAddSecondAreaHouse.vue'], resolve)
                },
                {
                    // 新房
                    path: '/AddNewHouse',
                    component: resolve => require(['../components/common/YAddNewHouse.vue'], resolve)
                },
                {
                    // 新户型
                    path: '/AddNewType',
                    component: resolve => require(['../components/common/YAddNewType.vue'], resolve)
                },
                {
                    // 租房
                    path: '/AddRentHouse',
                    component: resolve => require(['../components/common/YAddRent.vue'], resolve)
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
            component: resolve => require(['../components/common/Home.vue'], resolve),
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
            component: resolve => require(['../components/common/Home.vue'], resolve),
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
