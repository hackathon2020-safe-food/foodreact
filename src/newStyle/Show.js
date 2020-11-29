import React from 'react';
import {Button} from 'antd';
import {BulbOutlined} from '@ant-design/icons';
import {Link} from 'react-router-dom';
class Show extends React.Component{
    render(){

        return(
            <div id="Home">
          <Button type='primary' style={{ position: "absolute", right: "100px", top: "10px"}}><Link to="/homepage">返回</Link></Button>
      </div>
        )
    }
}
export default Show;