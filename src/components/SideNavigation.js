import React from 'react';

class SideNavigation extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      width: 0,
      top:0
    };
  }

  componentDidMount(){
    setTimeout(function(){ 
      this.adjustSideMenu();
    }.bind(this), 300);
    window.addEventListener('resize', this.adjustSideMenu.bind(this));
  }

  componentWillUnmount(){
    window.removeEventListener('resize', this.adjustSideMenu.bind(this));
  }

  adjustSideMenu(){
    let widthSide = ((document.body.clientWidth - document.getElementById('application-container').clientWidth)/2)-20;
    let topSide = document.getElementById('application-container').offsetTop
    this.setState({
      width: widthSide,
      top:topSide
    });
  }
}


export default SideNavigation;