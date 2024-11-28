import React, { useEffect } from 'react'
import './SideBar.css'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'
import { Dropdown } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import $ from 'jquery';

const SideBar = () => {

  const { users } = useSelector((state) => state.googleReducer);

  useEffect(() => {
    $('.side-bar').on('click', function () {
      $('.side-bar').removeClass('active');
      $(this).addClass('active');
    });
  }, []); 

  return (
    <div className='page-body'>
      <div className='sidebar'>
        <div className='logo-bar'>
          <div style={{ padding: '12px', margin: '0px 4px' }} className='hoverr'>
            <i className="material-icons" style={{ color: '#5f6368' }}>menu</i>
          </div>
          <div className='logo'>
            <img src={logo} alt="logo" width={'44px'} height={'40px'} style={{ margin: '0px 0px 4px', padding: '0px 4px 0px 0px' }} />
            <span>Contacts</span>
          </div>
        </div>
        <div className='sidebar-navigation'>
          <Dropdown>
            <Dropdown.Toggle variant="transparent" id="dropdown-basic" className='border-0 fw-medium d-flex align-items-center dropdown-togglee drop' style={{ backgroundColor: '#C2E7FF', borderRadius: '15px' }}>
              <i className="material-icons" style={{ color: '#001D35', fontSize: '28px', marginRight: '10px' }}>add</i>
              <span>Create contact</span>
            </Dropdown.Toggle>
            <Dropdown.Menu style={{ backgroundColor: '#E5EDF6', border: 'none', marginTop: '-3px' }} className='dropdown-menuu'>
              <Dropdown.ItemText className="dropdown-item-text" style={{ padding: '13px 12px' }}>
                <Link to={'/form'} className='text-decoration-none d-flex align-items-center'><i className="material-icons" style={{ color: '#001D35', marginRight: '10px' }}>person</i><span style={{ color: '#001D35', fontSize: '14px' }} className='fw-medium'>Create a contact</span></Link>
              </Dropdown.ItemText>
              <Dropdown.ItemText className="dropdown-item-text" style={{ padding: '13px 12px' }}>
                <Link to={'/'} className='text-decoration-none d-flex align-items-center'><i className="material-icons" style={{ color: '#001D35', marginRight: '10px' }}>group</i><span style={{ color: '#001D35', fontSize: '14px' }} className='fw-medium'>Create multiple contacts</span></Link>
              </Dropdown.ItemText>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div style={{ padding: '10px 0px 0px' }} className='side'>
          <ul >
            <li className='side-bar active'>
              <Link to={'/'} className='text-decoration-none d-flex align-items-center'>
                <i className="material-icons" style={{ color: '#001D35', marginRight: '10px' }}>person</i>
                <span className='fw-medium'>Contacts</span>
                <span className='ms-auto fw-medium' style={{ fontSize: '12px' }}>{users.length}</span>
              </Link>
            </li>
            <li className='side-bar'>
              <Link to={'/frequent'} className='text-decoration-none d-flex align-items-center'>
                <i className="material-icons" style={{ color: '#444746', marginRight: '10px' }}>history</i>
                <span className='fw-medium' style={{ color: '#444746' }}>Frequent</span>
              </Link>
            </li>
            <li className='side-bar'>
              <Link to={'/page'} className='text-decoration-none d-flex align-items-center'>
                <i className="material-icons" style={{ color: '#444746', marginRight: '10px' }}>archive</i>
                <span className='fw-medium' style={{ color: '#444746' }}>Other contacts</span>
                <span className='ms-auto fw-medium' style={{ fontSize: '12px' }}>
                  <i className="material-icons" style={{ color: '#444746' }}>info_outline</i>
                </span>
              </Link>
            </li>
            <li style={{ margin: '18px 12px 18px 18px', fontSize: '14px' }} className='fw-medium'>Fix and manage</li>
            <li className='side-bar'>
              <Link to={'/fix'} className='text-decoration-none d-flex align-items-center'>
                <i className="material-icons" style={{ color: '#444746', marginRight: '10px' }}>handyman</i>
                <span className='fw-medium' style={{ color: '#444746' }}>Merge and fix</span>
              </Link>
            </li>
            <li className='side-bar'>
              <Link to={'/fix'} className='text-decoration-none d-flex align-items-center'>
                <i className="material-icons" style={{ color: '#444746', marginRight: '10px' }}>download</i>
                <span className='fw-medium' style={{ color: '#444746' }}>Import</span>
              </Link>
            </li>
            <li className='side-bar'>
              <Link to={'/fix'} className='text-decoration-none d-flex align-items-center'>
                <i className="material-icons" style={{ color: '#444746', marginRight: '10px' }}>delete</i>
                <span className='fw-medium' style={{ color: '#444746' }}>Bin</span>
              </Link>
            </li>
            <li style={{ margin: '15px 12px 15px 18px', fontSize: '14px' }} className='fw-medium d-flex align-items-center'>
              <span>Labels</span>
              <span className='ms-auto fw-medium' style={{ fontSize: '12px' }}>
                <i className="material-icons hoverrr" style={{ color: '#444746', marginRight: '10px' }}>add</i>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default SideBar

