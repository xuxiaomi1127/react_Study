import React from 'react';

// 一级路由
import Home from '../pages/Home';

// 二级路由
import Child from '../pages/Child';
import User from '../pages/User';

let RouterConfig = [
    {
        path:'/user',// 首页默认加载的页面
        component:User,// 所使用的组件
        exact: true //是否为严格模式
    },
    {
        path: '/home',
        component: Home,
        routes: [
            {
                path: '/home/child',
                component: Child
            }, {
                path: '/home/user',
                component: User
            },
        ]
    }
];
export default RouterConfig;
