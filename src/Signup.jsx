import React, { Component } from 'react'
import { createUser, verifyUser } from './Cognito'

class Signup extends Component {
  constructor (props) {
    super(props)
    this.changeEmail = this.changeEmail.bind(this)
    this.changeUsername = this.changeUsername.bind(this)
    this.changePassword = this.changePassword.bind(this)
    this.changeVerifyCode = this.changeVerifyCode.bind(this)
    this.handleSignupSubmit = this.handleSignupSubmit.bind(this)
    this.handleVerifySubmit = this.handleVerifySubmit.bind(this)

    this.state = {
      email: '',
      password: '',
      verifyCode: '',
      username: '',
      showVerification: false,
    }
  }

  changeEmail (e) {
    this.setState({ email: e.target.value })
  }

  changeUsername (e) {
    this.setState({ username: e.target.value })
  }

  changePassword (e) {
    this.setState({ password: e.target.value })
  }

  changeVerifyCode (e) {
    this.setState({ verifyCode: e.target.value })
  }

  handleSignupSubmit (e) {
    const { username, email, password } = this.state
    e.preventDefault()
    console.log('회원가입 정보', this.state)
    createUser(username, email, password, (err, result) => {
      if (err) {
        console.log("회원가입 오류",  err)
        // err.message -> 이걸로 로그인 안된 오류 메세지 사용하심
        return
      }
      console.log("회원가입 성공",result.user)
      this.setState({ showVerification: true })
    })
  }

  // 코드 인증
  handleVerifySubmit (e) {
    e.preventDefault()
    verifyUser(this.state.username, this.state.verifyCode, (err, result) => {
      if (err) {
        console.log("코드인증 오류", err)
        return
      }
        console.log("코드인증 성공", result);
        alert("코드인증 성공")
    })
  }

  render () {
    return (
      <div className="Signup">
        <h2>가입</h2>
        {
          !this.state.showVerification ? (
            <form onSubmit={this.handleSignupSubmit}>
              <div>
                <input
                  value={this.state.email}
                  placeholder='Email'
                  type='email'
                  onChange={this.changeEmail} />
              </div>
              <div>
                <input
                  value={this.state.username}
                  placeholder='Username'
                  onChange={this.changeUsername} />
              </div>
              <div>
                <input
                  value={this.state.password}
                  placeholder='Password'
                  type='password'
                  minLength={6}
                  onChange={this.changePassword} />
              </div>
              <div>
                <button type='submit'>가입(Sign up)</button>
              </div>
            </form>
          ) : (
            <form onSubmit={this.handleVerifySubmit}>
              <input
                value={this.state.verifyCode}
                onChange={this.changeVerifyCode}
                placeholder='code' />
              <button type='submit'>코드인증(Verify)</button>
            </form>
          )
        }
      </div>
    )
  }
}

export default Signup
