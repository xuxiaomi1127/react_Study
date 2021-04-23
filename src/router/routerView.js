import React,{Component} from 'react'
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import RouterConfig from './routerConfig'

export default class RouterView extends Component {
    render(){
        console.log(RouterConfig);
        let {routes} = this.props;
        console.log(routes,this.props);
        return(
            <BrowserRouter>
                <Switch>
                    {
                        routes.map((route,key) => {
                            console.log(route)
                            if(route.exact) {
                                // 严格模式返回
                                return(
                                    <Route exact
                                           key={key}
                                           path={route.path}
                                           render={props => (
                                               //主要是为了传递嵌套路由到子组件
                                               //类似于 <User {...props} routes={route.routes} />
                                               <route.component {...props} routes={route.routes} />
                                           )}
                                    />
                                )
                            }else {
                                return(
                                    <Route
                                        key={key}
                                        path={route.path}
                                        render={props => (
                                            //主要是为了传递嵌套路由到子组件
                                            //类似于 <User {...props} routes={route.routes} />
                                            <route.component {...props} routes={route.routes} />
                                        )}
                                    />
                                )
                            }
                        })
                    }
                </Switch>
            </BrowserRouter>
        )
    };
}