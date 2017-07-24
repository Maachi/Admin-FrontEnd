import React from 'react';

class Header extends React.Component {
  
  render() {
    return(
      <header className="application-header">
        <div className="application-wrapper">
          <h1><a href=".">gesti&oacute;n</a></h1>
          <ul className="actions">
            <li className="search">
                <label className="icon-search pe-is-e-zoom" href="." htmlFor="search" />
                <input type="text" id="search" name="search" placeholder="Búsqueda por proceso, palabra clave, abogado" autoComplete="off" />
            </li>
          </ul>
          <div className="user">
            <a id="view-profile-options" href="" className="avatar"><span>S</span></a>
            <p className="user-title">Sebastián <strong>Romero</strong></p>
          </div>
        </div>
      </header>
    );
  }

}

export default Header;