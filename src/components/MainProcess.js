import React from 'react';

class MainProcess extends React.Component {
  render() {
    return (
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
    );
  }
}

export default MainProcess;