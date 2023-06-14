import {Component} from 'react'
import './index.css'

class PasswordManager extends Component {
  state = {value: 0}

  getPasswordManagerTopsection = () => {
    const {value} = this.state
    console.log(value)
    return (
      <div className="password-manager-top-section">
        <div className="passwords-inputs-container">
          <h1 className="heading">Add New Password</h1>
          <div className="input-container">
            <div className="inputs-icon-container">
              <img
                className="input-logos"
                src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png "
                alt="website"
              />
            </div>
            <input className="inputs" placeholder="Enter Website" type="text" />
          </div>
          <div className="input-container">
            <div className="inputs-icon-container">
              <img
                className="input-logos"
                src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png "
                alt="username"
              />
            </div>
            <input
              className="inputs"
              placeholder="Enter Username"
              type="text"
            />
          </div>
          <div className="input-container">
            <div className="inputs-icon-container">
              <img
                className="input-logos"
                src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png "
                alt="password"
              />
            </div>
            <input
              className="inputs"
              placeholder="Enter Password"
              type="text"
            />
          </div>
          <button type="button" className="add-button">
            {' '}
            Add{' '}
          </button>
        </div>
        <img
          className="top-section-password-manager-image"
          src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png "
          alt=" password manager"
        />
      </div>
    )
  }

  getPasswordManagerBottomSection = () => {
    const {value} = this.state
    return (
      <div className="password-manager-bottom-section">
        <div className="search-container">
          <p className="your-passwords-text ">Your Password</p>
          <div className="bottom-input-container">
            <div className="bottom-inputs-icon-container">
              <img
                className="bottom-input-logos"
                src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png "
                alt="search"
              />
            </div>
            <input className="inputs" placeholder="search" type="search" />
          </div>
        </div>
        <hr className="hr-line" />
        <div className="inbox-container">
          <input id="passwordsCheckBox" className="check-box" type="checkbox" />
          <label htmlFor="passwordsCheckBox" className="check-box-label">
            Show Passwords{' '}
          </label>
        </div>
        <img
          className="no-passwords-image"
          src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
          alt="no passwords"
        />
      </div>
    )
  }

  render() {
    return (
      <div className="app-container">
        <div className="bg-container">
          <img
            className="app-logo"
            src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png "
            alt="app logo"
          />
          {this.getPasswordManagerTopsection()}
          {this.getPasswordManagerBottomSection()}
        </div>
      </div>
    )
  }
}

export default PasswordManager
