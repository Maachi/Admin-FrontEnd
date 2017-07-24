import React from 'react';
import {Link} from 'react-router';

class Login extends React.Component {
  
  render() {
    return (
      <div className="center login error">
        <div className="box">
          <form method="post">
            <fieldset>
              <input type="text" name="user" placeholder="Username or email"/>
              <input type="password" name="password" placeholder="Password" />
              <button className="submit">Access</button>
            </fieldset>
          </form>
        </div>
        <p className="box-message">Please follow <Link to="dashboard">Dashboard</Link> guidelines to start using Gestion theme. You can add messages for users below the boxes</p>
      </div>
    );
  }
}

export default Login;