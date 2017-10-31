import React from 'react';
import Header from '../components/Header';
import LastActivities from '../components/LastActivities';
import FlexibleNavigation from '../components/FlexibleNavigation';

class MainFirm extends React.Component {
  render(){
    return (
        <div className="app">
          <div className="pop-over">
            <ul>
              <li><a href="">Detalles de presentación</a></li>
              <li><a href="">Ver detalle</a></li>
              <li><a href="">Ver código fuente de la página</a></li>
            </ul>
            <ul>
              <li><a href="">Configuración</a></li>
              <li><a href="">Salir</a></li>
            </ul>
          </div>
          <Header />
            <div className="application-canvas">
                <div id="application-content" className="application-wrapper">
                    <div className="sub-menu">
                        <ul className="main-actions">
                            <li><a href=".">Dashboard</a></li>
                            <li><a href=".">Procesos</a></li>
                            <li><a href="/static/mocks/list.html">Abogados</a></li>
                            <li><a href=".">Clientes</a></li>
                            <li><a href=".">Documentos</a></li>
                        </ul>
                    </div>
                    <div id="application-container" className="grid">
                      {this.props.content}
                    </div>
                </div>
            </div>
            <LastActivities />
            <FlexibleNavigation />
        </div>);
  }
}
export default MainFirm;