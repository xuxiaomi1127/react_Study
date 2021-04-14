import { Form, Input, Button, Row, Col, Table } from 'antd';
import React,{ Component} from 'react';
import 'antd/dist/antd.min.css';
import User from './User';
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
    member.id = `${i}`;
    member.name = '刘德华-' + (i + 1);
    member.phone = `1387548785${i}`;
    member.age = (i % 2 === 1 ? false : true);
    member.email = `abc${i}@163.com`;
    member.status = (i % 2 === 1 ? false : true);
    dataSource.push(member);
}

class Home extends Component{
    onFinish(values){
        console.log('Success:', values);
    };
    render(){
        return (
            <>
                <Form name="formData" onFinish={this.onFinish} style={{padding:"20px 0 0"}}>
                    <Row>
                        <Col span={10} offset={6}>
                            <Form.Item name="search">
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
                </Form>
                <Row>
                    <Col span={2} offset={22}>
                        <Form.Item name="search">
                                    <Button type="primary">
                                        User
                                    </Button>
                        </Form.Item>
                    </Col>
                </Row>
                <Table dataSource={dataSource} columns={columns}/>;
            </>
        );
    }
}

export default Home;