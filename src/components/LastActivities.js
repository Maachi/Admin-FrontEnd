import React from 'react';
import SideNavigation from './SideNavigation';

class LastActivities extends SideNavigation {
  render() {
    return (
      <div className="column left" ref="side" style={{
        width: this.state.width + "px",
        top: this.state.top + "px"}}>
          <ul className="lateral-menu">
              <li className="whos-logged"><a href="/static/mocks/forms.html"><div className="avatar"><span>R</span></div>Rojas Novoa - Asesorías Legales</a></li>
              <li><a href="">Mis datos</a></li>
              <li><a href="">Asistente judicial</a></li>
              <li><a href="">Mis procesos</a></li>
              <li><a href="">Enviar notificación</a></li>
              <li><a href="">Salida segura</a></li>
          </ul>
      </div>
    );
  }
}

export default LastActivities;