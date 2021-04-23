import { Form, Input, Button, Row, Col, Table } from 'antd';
import React,{ Component} from 'react';
import 'antd/dist/antd.min.css';
import RoterView from '../router/routerView';
import {
    BrowserRouter as Router,
    Route,
    Link
} from "react-router-dom";
const columns = [
    {
        title: '姓名',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: '年龄',dataIndex: 'age',key: 'age',render: (e) => {
            return e ? '男' : '女'
        }
    },
    {
        title: '电话',
        dataIndex: 'phone',
        key: 'phone',
    },
    {
        title: '邮箱',
        dataIndex: 'email',
        key: 'email',
    },
    {
        title: '状态', dataIndex: 'status', key: 'status', render: (e) => {
            return <span style={{ color: e ? '' : '#E44A5D' }}>{e ? '允许' : '不允许'}</span>;
        }
    },
];
const dataSource = [];

for (let i = 0; i < 100; i++) {
    let member = {};
    member.key = `${i}`;
    member.name = '刘德华-' + (i + 1);
    member.phone = `1387548785${i}`;
    member.age = (i % 2 === 1 ? false : true);
    member.email = `abc${i}@163.com`;
    member.status = (i % 2 === 1 ? false : true);
    dataSource.push(member);
}

class Home extends Component{
    goChild(url) {
        this.props.history.push({pathname:url})
    };
    onFinish(values){
        console.log('Success:', values);
    };
    render(){
        //let location = this.props.childrenRoute.location
        let {routes} = this.props;
        return (
            <>
                <Form name="formData" onFinish={this.onFinish} style={{padding:"20px 0 0"}}>
                    <Row>
                        <Col span={10} offset={6}>
                            <Form.Item name="searchContent">
                                <Input placeholder="请输入搜索内容" size="default" />
                            </Form.Item>
                        </Col>
                        <Col span={6} offset={1}>
                            <Form.Item>
                                <Button type="primary" htmlType="search">
                                    搜索
                                </Button>
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={2} offset={22}>
                            <Form.Item>
                                <Button type="primary" onClick={this.goChild.bind(this,'/user')}>
                                    User
                                </Button>
                            </Form.Item>
                        </Col>
                    </Row>
                </Form>
                <Table dataSource={dataSource} columns={columns}/>;
                <RoterView routes={routes}/>
            </>
        );
    }
}

export default Home;