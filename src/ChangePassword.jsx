import React, { Component } from 'react'
import { changePassword } from './Cognito'

class ChangePassword extends Component {
  constructor (props) {
    super(props)
    this.newPassword = this.newPassword.bind(this)
    this.oldPassword = this.oldPassword.bind(this)

    this.state = {
      newPassword: '',
      oldPassword: '',
      showVerification: false,
    }
  }

  newPassword (e) {
    this.setState({ newPassword: e.target.value })
  }
  oldPassword (e) {
    this.setState({ oldPassword: e.target.value })
  }

  handleChangePasswordSubmit (e) {
      this.setState({ showVerification: true })
  }



  render () {
    return (
      <div className="ChangePassword">
        로그인된 이메일 : {this.state.email}
        <h2>비밀번호 변경</h2>
          <form onSubmit={this.handleChangePasswordSubmit}>
          <div>
            <input
              value={this.state.oldPassword}
              placeholder='oldPassword'
              type='text'
              minLength={6}
              onChange={this.oldPassword} />
          </div>
            <div>
              <input
                value={this.state.newPassword}
                placeholder='newPassword'
                type='text'
                onChange={this.newPassword} />
            </div>
          <div>
            <button type='submit'>비밀번호 변경(Sign In)</button>
          </div>
        </form>
      </div>
    )
  }
}

export default ChangePassword
