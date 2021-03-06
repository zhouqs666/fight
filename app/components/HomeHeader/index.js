import React, {Component} from 'react';
//主页头部组件
import './index.less';

export default class HomeHeader extends Component {
    render() {
        return (
            <div className="home-header back">
                <div className="city">
                    {this.props.cityName}
                    <i className="iconfont icon-unfold"></i>
                </div>
                <div className="search">
                    <i className="iconfont icon-search"></i>
                    <input type="text"/>
                </div>
                <div className="profile">
                    <i className="iconfont icon-addressbook_fill"></i>
                </div>
            </div>
        )
    }
}