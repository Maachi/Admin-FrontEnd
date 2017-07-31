import React from 'react';
import SideNavigation from './SideNavigation';

class FlexibleNavigation extends SideNavigation {

  render() {
    return (
      <div className="column right" ref="side" style={{
        width: this.state.width + "px",
        top: this.state.top + "px"}}>
        <ul className="lateral-menu">
          <li><h4>Últimos archivos</h4></li>
          <li><a href=""><span className="pe-mini-next-1" />Factura de venta Biko sas</a></li>
          <li><a href="">Contratos de traducción Maachi sas</a></li>
          <li><a href="">Asistencia contrato validación</a></li>
          <li><a href=""><span className="pe-mini-surround" />Audio prueba caso tejas</a></li>
          <li><a href="">Factura de salida</a></li>
          <li><a href="">Liquidación de servicios</a></li>
        </ul>
        <ul className="lateral-menu">
          <li><h4>Gestión de usuarios</h4></li>
          <li><a href=""><span className="pe-mini-user-male" />Sebastián Romero</a></li>
          <li><a href=""><span className="pe-mini-user-male" />Diana Catalina</a></li>
          <li><a href=""><span className="pe-mini-user-male" />Ronald</a></li>
          <li><a href=""><span className="pe-mini-user-male" />Nohemi Novoa</a></li>
        </ul>
      </div>
    );
  }
}

export default FlexibleNavigation;