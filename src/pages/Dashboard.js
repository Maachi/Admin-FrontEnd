import React from 'react';
import {Link} from 'react-router';
import Header from '../components/Header';
import LastActivities from '../components/LastActivities';
import FlexibleNavigation from '../components/FlexibleNavigation';
import MainProcess from '../components/MainProcess';
import MainFirm from './MainFirm';

class Dashboard extends React.Component {
  render(){
    return (
        <MainFirm content={
            <div>
                <header className="top-grid">
                    <ul>
                        <li><Link to={`/${this.props.params.firm}/create/process`} className="button">Crear un nuevo proceso</Link></li>
                    </ul>
                </header>
                <h2>{this.props.params.firm}</h2>
                {[...Array(10)].map((x, i) =>
                    <MainProcess />
                )}
            </div>}>
        </MainFirm>);
  }
}

export default Dashboard;