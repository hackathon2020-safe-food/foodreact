import React,{Component} from 'react';
import { Space,Button,Table} from 'antd';
import { MessageOutlined, LikeOutlined, StarOutlined ,RedditOutlined} from '@ant-design/icons';
import Enter from "./Enter";
import logo from '../media/safe_food_logo.png';
import {Link} from "react-router-dom";
import {transferPost,transferValuePost} from "../services/transfer";

class HomePage extends React.Component {
    state={
        dataSource:null,
        visible:false
    }
    formRef=React.createRef();
    componentDidMount() {
        this.fetch();
    }

    fetch=async ()=>{
        this.setState({'loading':true});

        const res=await transferPost('/goodsInfo/');
        if(res.status==='1'){
            for(let i=0;i<res.result.length;i++){
                res.result[i].key=res.result[i].food_name;
            }
            this.setState({
                loading:false,
                dataSource:res.result
            })
        }
    };
    showRoutes = async (record)=>{
        let name={'name':record.food_name};
        let json_list={'route':record.routes,'time':record.time}
        let res=await transferValuePost('/goods/'+record.food_name,json_list);
        if(res.status==='1'){
            this.props.history.push('/show')
        }
        //TODO
    }
    render() {
        const columns=[
            {
                title:'',
                dataIndex: 'food_url',
                key:'food_url',
                render:text=> <img src={text} />
            },
            {
                title:'商品名称',
                dataIndex:'food_name',
                key:'food_name'
            },
            {
                title:'抽检时间',
                dataIndex: 'time',
                key:"time"
            },
            {
                title:'是否合格',
                dataIndex:"is_safe",
                key:'is_safe'
            },
            {
                title:'描述',
                dataIndex: 'describe',
                key:'describe'

            },
            {
                title:'运转路线',
                dataIndex:'routes',
                key:'routes'
            },
            {
                title:'操作',
                key:'action',
                render:(record)=>{
                    return(<div>
                        <Button onClick={()=>this.showRoutes(record)} icon={<RedditOutlined />}>查看地图</Button>
                        </div>);
                }
            }
        ];
        const {dataSource,visible}=this.state;
        return (
            <div>
            <Table columns={columns} dataSource={dataSource}/>
            </div>
        )
    }
}

export default HomePage;
