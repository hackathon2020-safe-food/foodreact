import React from 'react';
import {Button} from 'antd';
import {BulbOutlined} from '@ant-design/icons';
import {Link} from 'react-router-dom';
import img1 from '../media/hhh.png';
class Enter extends React.Component{
    render(){
        return(
                  <div id="Home">
        <div className="nav-wrap">
          <div style={{ lineHeight: '80px', fontSize: "25px", background: 'white', color: "#6a005f", textAlign: "center" }}>
              <BulbOutlined/>
                        食为安
	        </div>
          <Button type='primary' style={{ position: "absolute", right: "100px", top: "10px"}}><Link to="/homepage">进入</Link></Button>
        </div>
        <div>
            <img src={img1} alt="数字化抗疫" width="90%" />
        </div>
      </div>
        )
    }
}
export default Enter;