//（未使用组件懒加载，后续优化）

//引入需要用到的页面组件
import Home from '../pages/Home';
import User from '../pages/User';
import Child from '../pages/two/Child';

const routers = [
    {
        path:'/home',
        component:Home,
        children:[
            {
                path:'/home/child',
                component: Child
            }
        ]
    },
    {
        path: '/user',
        component: User,
    }
];
export default routers