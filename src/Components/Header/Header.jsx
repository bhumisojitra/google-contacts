import './Header.css'
import '../SideBar/SideBar.css'
import { Tooltip, OverlayTrigger } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { logoutUser } from '../../Services/Actions/loginFormAction';

const Header = () => {

    const { user } = useSelector((state) => state.loginFormReducer);
    const renderTooltip = (message) => (
        <Tooltip id="button-tooltip">{message}</Tooltip>
    );

    const dispatch = useDispatch();
    const handleLogout = () => {
        dispatch(logoutUser());
    }

    return (

        <div className='header d-flex align-items-center justify-content-between z-1'>
            <div className="search-bar">
                <i className="material-icons">search</i>
                <input type="text" placeholder="Search" />
            </div>
            <div className="profile">
                <OverlayTrigger placement="bottom" overlay={renderTooltip("Help menu")} delay={{ show: 500, hide: 0 }}>
                    <button type="button" className="btn border-0 p-0">
                        <i className="material-icons hoverr">help_outline</i>
                    </button>
                </OverlayTrigger>
                <OverlayTrigger placement="bottom" overlay={renderTooltip("Settings menu")} delay={{ show: 500, hide: 0 }}>
                    <button type="button" className="btn border-0 p-0">
                        <i className="material-icons hoverr">settings</i>
                    </button>
                </OverlayTrigger>
                <OverlayTrigger placement="bottom" overlay={renderTooltip("Google apps")} delay={{ show: 500, hide: 0 }}>
                    <button type="button" className="btn border-0 ps-4 pe-3">
                        <i className="material-icons hoverr">apps</i>
                    </button>
                </OverlayTrigger>
                <OverlayTrigger placement="bottom" overlay={renderTooltip("Google Account")} delay={{ show: 500, hide: 0 }}>
                    <Dropdown style={{ display: 'inline-block' }}>
                        <Dropdown.Toggle variant="transparent" id="dropdown-basic" className='border-0 fw-medium p-0' style={{ backgroundColor: 'transparent' }}>
                            <OverlayTrigger placement="bottom" overlay={renderTooltip("More actions")} delay={{ show: 500, hide: 0 }}>
                                <div className="btn border-0 p-0 me-3">
                                    {user?.photoURL ? (
                                        <img src={user.photoURL} alt="Profile" className="profile-pic" />
                                    ) : (
                                        <img src={'https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg'} alt="Profile" className="profile-pic" />
                                    )}
                                </div>
                            </OverlayTrigger>
                        </Dropdown.Toggle>
                        <Dropdown.Menu style={{ backgroundColor: '#E5EDF6', border: 'none', marginTop: '-3px' }}>
                            <Dropdown.ItemText className="dropdown-item-text" style={{ padding: '13px 12px' }}>
                                <Link to={'/'} onClick={handleLogout} className='text-decoration-none d-flex align-items-center'><i className="material-icons" style={{ color: '#001D35', marginRight: '10px' }}>print</i><span style={{ color: '#001D35', fontSize: '14px' }} className='fw-medium'>LOGOUT</span></Link>
                            </Dropdown.ItemText>
                        </Dropdown.Menu>
                    </Dropdown>
                </OverlayTrigger>
            </div>
        </div>
    )
}

export default Header