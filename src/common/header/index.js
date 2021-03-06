import React, { Component } from 'react';
import  {CSSTransition}  from 'react-transition-group';
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  Addition,
  Button,
  SearchWrapper
} from './style'
class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      focused:false
    }
    this.handleInputFocus = this.handleInputFocus.bind(this)
    this.handleInputBlur = this.handleInputBlur.bind(this)
  }
  render() {
    return (
      <HeaderWrapper>
        <Logo/>
        <Nav>
          <NavItem className='left active'>首页</NavItem>
          <NavItem className='left'>下载App</NavItem>
          <NavItem className='right'>登录</NavItem>
          <NavItem className='right'>
          <i className="iconfont">&#xe636;</i>
          </NavItem>
          <SearchWrapper>
            <CSSTransition 
              in={this.state.focused}
              timeout={200}
              className="slide"
            >
              <NavSearch 
                className={this.state.focused ? 'focused' : ' '}
                onFocus={this.handleInputFocus}
                onBlur={this.handleInputBlur}
              ></NavSearch>
            </CSSTransition>
            
            <i className={this.state.focused ? 'focused iconfont' : 'iconfont'}>&#xe60b;</i>
          </SearchWrapper>
        </Nav>
        <Addition>
          <Button className='writting'>
          <i className="iconfont">&#xe678;</i>
            写文章
          </Button>
          <Button className="reg">注册</Button>
        </Addition>
      </HeaderWrapper>
    )
  }

  handleInputFocus(){
    console.log(1)
    //聚焦
    this.setState({
      focused:true
    })
  }

  handleInputBlur(){
    console.log(2)
    //离焦
    this.setState({
      focused:false
    })
  }
}

export default Header;