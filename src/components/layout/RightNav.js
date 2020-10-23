import React from 'react';
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../store/actions/AuthActions'
import styled from 'styled-components';


const Ul = styled.ul`

  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  li {
    padding: 0px 10px;
  }
  z-index: 2;
  justify-content: flex-end;
  @media (max-width: 900px) {
    flex-flow: column nowrap;
    justify-content: flex-start;
    background-color: #424242;
    position: fixed;
    transform: ${( {open} ) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: flex;
    width: flex;
    padding-top: 3.5rem;
    transition: transform 0s ease-in-out;
    li {
      color: #fff;
    }
  }
`;


const RightNav = (props) => {
    const {open} = props
  return (
    <Ul open={open}>
      <li><NavLink to='/' id="dash">Dashboard</NavLink></li>
      <li><a onClick={props.signOut} id="logout">Logout</a></li>
      <li><NavLink to='/Profile' className='btn btn-floating pink lighten-1' id="initial">
                {props.profile.initials} 
                </NavLink></li> 
    </Ul>
  )
}
const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut()),
    }
}

export default connect(null,mapDispatchToProps)(RightNav)