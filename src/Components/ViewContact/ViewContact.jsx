import React, { useEffect } from 'react'
import './ViewContact.css'
import { Tooltip, OverlayTrigger, Dropdown } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { deleteAsncy, getContact, singleAsncy } from '../../Services/Actions/googleAction';
import { Link, useNavigate } from 'react-router-dom';
import userr from '../../assets/user.png'
import not from '../../assets/not.png'

const ViewContact = () => {
    const renderTooltip = (message) => (
        <Tooltip id="button-tooltip">{message}</Tooltip>
    );

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { users, user } = useSelector((state) => state.googleReducer);

    const handleEdit = (id) => {
        dispatch(singleAsncy(id));
    }

    const handleDelete = (id) => {
        dispatch(deleteAsncy(id));
    }

    useEffect(() => {
        if (user) {
            navigate('/edit')
        }
    }, [user])

    return (
        <div className='page-body-wrapper'>
            <div className='page-title d-flex align-items-center'>
                <h2>Contacts</h2>
                <span>({users.length})</span>
            </div>
            {
                users.length === 0 ?
                    <div className="no-data-container text-center mt-5 pt-5">
                        <img src={not} alt="No data available" className='mt-5' style={{width: '330px', height: '300px'}} />
                        <p>No contacts yet</p>
                    </div> 
                    :
                        <div className="table-container">
                            <table className='table table-hover table-borderless custom-table-hover'>
                                <thead style={{ borderBottom: '1px solid #E5EDF6' }}>
                                    <tr style={{ height: '60px', verticalAlign: 'middle' }}>
                                        <th scope="col" style={{ width: '25%' }}>Name</th>
                                        <th scope="col" style={{ width: '15%' }}>Email</th>
                                        <th scope="col" style={{ width: '15%' }}>Phone number</th>
                                        <th scope="col" style={{ width: '15%' }}>Job title and company</th>
                                        <th scope="col" style={{ width: '15%' }}>Labels</th>
                                        <th scope="col" className='text-end'>
                                            <OverlayTrigger placement="bottom" overlay={renderTooltip("print")} delay={{ show: 500, hide: 0 }}>
                                                <button type="button" className="btn border-0 p-0">
                                                    <i className="material-icons hoverr">print</i>
                                                </button>
                                            </OverlayTrigger>
                                            <OverlayTrigger placement="bottom" overlay={renderTooltip("Export")} delay={{ show: 500, hide: 0 }}>
                                                <button type="button" className="btn border-0 p-0">
                                                    <i className="material-icons hoverr">upload</i>
                                                </button>
                                            </OverlayTrigger>
                                            <OverlayTrigger placement="bottom" overlay={renderTooltip("List setting")} delay={{ show: 500, hide: 0 }}>
                                                <button type="button" className="btn border-0 p-0">
                                                    <i className="material-icons hoverr">more_vert</i>
                                                </button>
                                            </OverlayTrigger>
                                        </th>
                                    </tr>
                                </thead>
                                <h6 style={{ fontSize: '12px', padding: '15px 0px 10px 10px' }}>Contacts</h6>
                                <tbody>
                                    {
                                        users.map((data, index) => {
                                            return (
                                                <tr key={index} style={{ height: '40px', verticalAlign: 'middle' }} className='hover-hidee'>
                                                    <td style={{ width: '25%' }}>
                                                        <img src={data.photo || userr} alt="Profile" style={{ width: '40px', height: '40px', borderRadius: '50%' }} className='me-4' />
                                                        {data.name}      {data.surname}
                                                    </td>
                                                    <td style={{ width: '15%' }}>{data.email}</td>
                                                    <td style={{ width: '15%' }}>{data.phone}</td>
                                                    <td style={{ width: '15%' }}>{data.job}</td>
                                                    <td style={{ width: '15%' }}>{data.notes}</td>
                                                    <td className='text-end hidee' style={{ width: '15%' }}>
                                                        <OverlayTrigger placement="bottom" overlay={renderTooltip("Add to favourites")} delay={{ show: 500, hide: 0 }}>
                                                            <button type="button" className="btn border-0 p-0">
                                                                <i className="material-icons hoverr">star_outline</i>
                                                            </button>
                                                        </OverlayTrigger>
                                                        <OverlayTrigger placement="bottom" overlay={renderTooltip("Edit contact")} delay={{ show: 500, hide: 0 }}>
                                                            <button type="button" className="btn border-0 p-0" onClick={() => handleEdit(data.id)}>
                                                                <i className="material-icons hoverr">edit</i>
                                                            </button>
                                                        </OverlayTrigger>
                                                        <Dropdown style={{ display: 'inline-block' }}>
                                                            <Dropdown.Toggle variant="transparent" id="dropdown-basic" className='border-0 fw-medium p-0' style={{ backgroundColor: 'transparent' }}>
                                                                <OverlayTrigger placement="bottom" overlay={renderTooltip("More actions")} delay={{ show: 500, hide: 0 }}>
                                                                    <button type="button" className="btn border-0 p-0">
                                                                        <i className="material-icons hoverr">more_vert</i>
                                                                    </button>
                                                                </OverlayTrigger>
                                                            </Dropdown.Toggle>
                                                            <Dropdown.Menu style={{ backgroundColor: '#E5EDF6', border: 'none', marginTop: '-3px' }}>
                                                                <Dropdown.ItemText className="dropdown-item-text" style={{ padding: '13px 12px' }}>
                                                                    <Link to={'/'} className='text-decoration-none d-flex align-items-center'><i className="material-icons" style={{ color: '#001D35', marginRight: '10px' }}>print</i><span style={{ color: '#001D35', fontSize: '14px' }} className='fw-medium'>Print</span></Link>
                                                                </Dropdown.ItemText>
                                                                <Dropdown.ItemText className="dropdown-item-text" style={{ padding: '13px 12px' }}>
                                                                    <Link to={'/'} className='text-decoration-none d-flex align-items-center'><i className="material-icons" style={{ color: '#001D35', marginRight: '10px' }}>upload</i><span style={{ color: '#001D35', fontSize: '14px' }} className='fw-medium'>Export</span></Link>
                                                                </Dropdown.ItemText>
                                                                <Dropdown.ItemText className="dropdown-item-text" style={{ padding: '13px 12px' }}>
                                                                    <Link to={'/'} className='text-decoration-none d-flex align-items-center'><i className="material-icons" style={{ color: '#001D35', marginRight: '10px' }}>archive</i><span style={{ color: '#001D35', fontSize: '14px' }} className='fw-medium'>Hide from contacts</span></Link>
                                                                </Dropdown.ItemText>
                                                                <Dropdown.ItemText className="dropdown-item-text" style={{ padding: '13px 12px' }}>
                                                                    <Link to={'/'} className='text-decoration-none d-flex align-items-center' onClick={() => handleDelete(data.id)}><i className="material-icons" style={{ color: '#001D35', marginRight: '10px' }}>delete</i><span style={{ color: '#001D35', fontSize: '14px' }} className='fw-medium'>Delete</span></Link>
                                                                </Dropdown.ItemText>
                                                            </Dropdown.Menu>
                                                        </Dropdown>
                                                    </td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
            }
        </div>
    )
}

export default ViewContact
