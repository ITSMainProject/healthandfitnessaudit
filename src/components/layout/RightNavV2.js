import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemText from '@material-ui/core/ListItemText';
import { NavLink } from 'react-router-dom'
import { signOut } from '../store/actions/AuthActions'
import { connect } from 'react-redux'

const mapDispatchToProps = (dispatch) => {
    return {
        
        signOut: () => dispatch(signOut()),
    }
}

const StyledMenu = withStyles({
    paper: {
        border: 0,
    },
  })((props) => (
    <Menu 
      elevation={0}
      getContentAnchorEl={null}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',

      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
      {...props}
      MenuListProps={{ disablePadding: true }}
    />
  ));
  
  const StyledMenuItem = withStyles((theme) => ({
    root: {
        backgroundColor: '#424242',
        color: theme.palette.common.white,
      '&:focus': {
        backgroundColor: '#ec407a',
        '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
          color: 'black',
          
        },
      },
    },
  }))(MenuItem);

function CustomizedMenus(props) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };

    return (
      <div>
        <Button id="right-button"
          aria-controls="customized-menu"
          aria-haspopup="true"
          variant="contained"
          onClick={handleClick}
        >
          <span className="material-icons" style={{color:'white', backgroundColor:'#424242', fontSize:40}}>
            menu
            </span>
        </Button>
        <StyledMenu
          id="customized-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
            <NavLink to='/' id="dash">
                <StyledMenuItem>
                    <ListItemText primary="Dashboard" onClick={handleClose}/>
                </StyledMenuItem>
            </NavLink>

            <NavLink to='/Profile' id="profile">
                <StyledMenuItem>
                    <ListItemText primary="Profile" onClick={handleClose}/>
                </StyledMenuItem>
            </NavLink>

            <NavLink to='/Summary' id="summary">
                <StyledMenuItem>
                    <ListItemText primary="Summary" onClick={handleClose}/>
                </StyledMenuItem>
            </NavLink>
     
                <StyledMenuItem onClick={props.signOut} id="logout">
                
                    <ListItemText primary="Log Out" onClick={handleClose}/>
                    
                </StyledMenuItem>

        </StyledMenu>
      </div>
    );
}
export default    connect (null, mapDispatchToProps)(CustomizedMenus)