/*************************************************
 * Class Name: Footer
 * Created Date: 19/09/2020 
 * Edited By: Min
 * Last Edited: 19/09/2020
 * -----------------------------------------------
 * Description:
 * Drop-down menu for the nav bar
 *************************************************/
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

class DropDownMenu extends Component {
  constructor() {
    super();
    
    this.state = {
      showMenu: false,
    };
    
    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }
  
  showMenu(event) {
    event.preventDefault();
    
    this.setState({ showMenu: true }, () => {
      document.addEventListener('click', this.closeMenu);
    });
  }
  
  closeMenu(event) {  
    if (!this.dropdownMenu.contains(event.target)) {
      
      this.setState({ showMenu: false }, () => {
        document.removeEventListener('click', this.closeMenu);
      });  
      
    }
  }

  render() {
    return (
      <div onClick={this.showMenu}>
         Menu
        
        {
          this.state.showMenu
            ? (
              <div
                className="menu nav-wrapper grey darken-3"
                ref={(element) => {
                  this.dropdownMenu = element;
                }}
              >
                
                <ul><NavLink to='/Profile'>User Profile</NavLink></ul>
                <ul><NavLink to='/'>Menu item 2</NavLink></ul>
                <ul><NavLink to='/'>Menu item 3</NavLink></ul>
                
              </div>
            )
            : (
              null
            )
        }
      </div>
    );
  }
}
export default DropDownMenu