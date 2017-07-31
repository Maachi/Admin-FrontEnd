import React from 'react';
import Header from '../components/Header';
import LastActivities from '../components/LastActivities';
import FlexibleNavigation from '../components/FlexibleNavigation';

class Dashboard extends React.Component {

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
                        <header className="top-grid">
                            <ul>
                                <li><a className="button" href="/static/mocks/process.html">Crear un nuevo proceso</a></li>
                            </ul>
                        </header>
                        <div className="item">
                            <div className="when">
                                <a className="avatar" href=""><span>D</span></a> Diana Catalina — <time dateTime="2015-12-26T16:19:08Z" data-local="time-or-date" title="December 26, 2015 at 11:19am COT">11:19am</time>
                            </div>
                            <h3>Vivamus vel mi nec nulla luctus malesuada vel at nibh us vel.</h3>
                            <div className="editable-field">
                                <p> — Donec sit amet pretium tellus, ac sodales mauris. Cras pulvinar at risus eget tempor. In hendrerit congue vehicula. Nam et metus vulputate, venenatis nisl id, sodales felis.</p>
                            </div>
                            <ul className="processes">
                                <li className="last-document">
                                    <span className="icon pe-is-a-zip" />
                                    <div className="information">
                                        <h4><a href="">Gestión presentadas</a></h4>
                                        <p>Donec sit amet pretium tellus, ac sodales mauris. Cras pulvinar at risus eget tempor.</p>
                                    </div>
                                </li>
                                <li><a href="">Libreta de cambio</a></li>
                                <li><a href="">Pruebas a juzgados</a></li>
                                <li><a href="">Sustentación de pruebas juzgados</a></li>
                                <li><a className="view-more" href="/static/mocks/detail.html">Más gestión...</a></li>
                            </ul>
                        </div>
                        <div className="item">
                            <div className="when">
                                <a className="avatar" href=""><span>D</span></a> Diana Catalina — <time dateTime="2015-12-26T16:19:08Z" data-local="time-or-date" title="December 26, 2015 at 11:19am COT">11:19am</time>
                            </div>
                            <h3>Vel mi nec nulla luctus malesuada vel at nibh vivamus vel mi nec nulla luctus malesuada vel at nibh us vel.</h3>
                            <p> — Donec sit amet pretium tellus, ac sodales mauris. Cras pulvinar at risus eget tempor. In hendrerit congue vehicula. Nam et metus vulputate, venenatis nisl id, sodales felis.</p>
                            <ul className="processes">
                                <li className="last-document">
                                    <span className="icon pe-is-a-folder-o-v" />
                                    <div className="information">
                                        <h4><a href="">Gestión presentadas</a></h4>
                                        <p>Donec sit amet pretium tellus, ac sodales mauris. Cras pulvinar at risus eget tempor.</p>
                                    </div>
                                </li>
                                <li><a className="view-more" href="">Más gestión...</a></li>
                            </ul>
                        </div>
                        <div className="item">
                            <div className="when">
                                <a className="avatar" href=""><span>D</span></a> Diana Catalina — <time dateTime="2015-12-26T16:19:08Z" data-local="time-or-date" title="December 26, 2015 at 11:19am COT">11:19am</time>
                            </div>
                            <h3>Vel mi nec nulla luctus malesuada vel at nibh vivamus vel mi nec nulla luctus malesuada vel at nibh us vel.</h3>
                            <p> — Donec sit amet pretium tellus, ac sodales mauris. Cras pulvinar at risus eget tempor. In hendrerit congue vehicula. Nam et metus vulputate, venenatis nisl id, sodales felis.</p>
                            <ul className="processes">
                                <li><a className="view-more" href="">Añadir gestión...</a></li>
                            </ul>
                        </div>
                        <div className="item">
                            <div className="when">
                                <a className="avatar" href=""><span>D</span></a> Diana Catalina — <time dateTime="2015-12-26T16:19:08Z" data-local="time-or-date" title="December 26, 2015 at 11:19am COT">11:19am</time>
                            </div>
                            <h3>Vivamus vel mi nec nulla luctus malesuada vel at nibh us vel.</h3>
                            <p> — Donec sit amet pretium tellus, ac sodales mauris. Cras pulvinar at risus eget tempor. In hendrerit congue vehicula. Nam et metus vulputate, venenatis nisl id, sodales felis.</p>
                            <ul className="processes">
                                <li className="last-document">
                                    <span className="icon pe-is-a-zip" />
                                    <div className="information">
                                        <h4><a href="">Gestión presentadas</a></h4>
                                        <p>Donec sit amet pretium tellus, ac sodales mauris. Cras pulvinar at risus eget tempor.</p>
                                    </div>
                                </li>
                                <li><a href="">Libreta de cambio</a></li>
                                <li><a href="">Pruebas a juzgados</a></li>
                                <li><a href="">Sustentación de pruebas juzgados</a></li>
                                <li><a className="view-more" href="">Más gestión...</a></li>
                            </ul>
                        </div>
                        <div className="item">
                            <div className="when">
                                <a className="avatar" href=""><span>D</span></a> Diana Catalina — <time dateTime="2015-12-26T16:19:08Z" data-local="time-or-date" title="December 26, 2015 at 11:19am COT">11:19am</time>
                            </div>
                            <h3>Vel mi nec nulla luctus malesuada vel at nibh vivamus vel mi nec nulla luctus malesuada vel at nibh us vel.</h3>
                            <p> — Donec sit amet pretium tellus, ac sodales mauris. Cras pulvinar at risus eget tempor. In hendrerit congue vehicula. Nam et metus vulputate, venenatis nisl id, sodales felis.</p>
                            <ul className="processes">
                                <li><a className="view-more" href="">Añadir gestión...</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <LastActivities />
            <FlexibleNavigation />
        </div>);
  }
}

export default Dashboard;