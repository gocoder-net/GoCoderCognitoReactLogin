import React, { Component } from 'react'
import {getCurrentUser, getUsername,signOut} from './Cognito'

class UserStatus extends Component {
  constructor (props) {
    super(props)
    // this.changeNewPassword = this.changeNewPassword.bind(this)
    // this.changeOldPassword = this.changeOldPassword.bind(this)
    // this.handleChangePasswordSubmit = this.handleChangePasswordSubmit.bind(this)

    this.state = {
      userName: '',
      newPassword: '',
      oldPassword: '',
      email: null,
    }
    
  }

  // changeNewPassword (e) {
  //   this.setState({ newPassword: e.target.value })
  // }
  // changeOldPassword (e) {
  //   this.setState({ oldPassword: e.target.value })
  // }


  componentDidMount () {  //  rendering이 모두 끝난 후 실행, https://velog.io/@ryong9rrr/componentDidMount-%EC%99%80-useEffect
    getCurrentUser(attributes => {
      for (let i = 0; i < attributes.length; i++) {
        if (attributes[i].Name === 'email') { //sub , email_verfied, email 등이 담겨 있음 이메일만 꺼내옴
          this.setState({ email: attributes[i].Value })
          name = attributes[i].Value;          
          console.log("인증된 정보 :" + attributes);

        }
      }
      // 유저네임 가져오기
      getUsername(username => {
        this.setState({ userName: username })
      })
    })

  }
  //
  // handleChangePasswordSubmit (e) {
  //   const { userName, email,oldPassword,newPassword } = this.state
  //   e.preventDefault()
  //   changePassword(userName, email, oldPassword,newPassword,(err, result) => {
  //     if (err) {
  //       console.log("비번 변경 오류",  err)
  //       return
  //     }
  //     console.log("비번 변경 성공", result.user)
  //     this.setState({ showVerification: true })
  //   })
  // }

  render () {
    return (
      <div>
        <div>
          {this.state.userName &&  <span>이름 : {this.state.userName} </span>}
        </div>
        <div>
          {this.state.email && <span>이메일 : {this.state.email}</span>}

        </div>
        <div>
         {this.state.email && <button onClick={signOut}>로그아웃(Sign out)</button>}
        </div>

        {/*<h2> 로그인된 ID 비밀번호 변경</h2>*/}
        {/*<form onSubmit={this.handleChangePasswordSubmit}>*/}
        {/*  <div>*/}
        {/*    <input*/}
        {/*        value={this.state.userName}*/}
        {/*        placeholder='userName'*/}
        {/*        type='text'*/}
        {/*        minLength={6}*/}
        {/*        />*/}
        {/*  </div>*/}
        {/*  <div>*/}
        {/*    <input*/}
        {/*        value={this.state.oldPassword}*/}
        {/*        placeholder='oldPassword'*/}
        {/*        type='text'*/}
        {/*        minLength={6}*/}
        {/*        onChange={this.changeOldPassword} />*/}
        {/*  </div>*/}
        {/*  <div>*/}
        {/*    <input*/}
        {/*        value={this.state.newPassword}*/}
        {/*        placeholder='newPassword'*/}
        {/*        type='text'*/}
        {/*        onChange={this.changeNewPassword} />*/}
        {/*  </div>*/}
        {/*  <div>*/}
        {/*    <button type='submit' >비밀번호 변경(Sign In)</button>*/}
        {/*  </div>*/}
        {/*</form>*/}
      </div>
    )
  }
}

export default UserStatus
