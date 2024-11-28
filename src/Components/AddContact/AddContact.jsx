import React, { useEffect, useRef, useState } from 'react'
import { Tooltip, OverlayTrigger } from 'react-bootstrap';
import './AddContact.css'
import user from '../../assets/user.png'
import { useDispatch } from 'react-redux';
import { contactAsync } from '../../Services/Actions/googleAction';
import { useNavigate } from 'react-router';

const AddContact = () => {

    const renderTooltip = (message) => (
        <Tooltip id="button-tooltip">{message}</Tooltip>
    );

    const [addContact, setAddContact] = useState({
        photo: '',
        name: '',
        surname: '',
        company: '',
        job: '',
        email: '',
        phone: '',
        day: '',
        month: '',
        year: '',
        notes: '',
    })

    const dispatch = useDispatch();
    const nevigate = useNavigate();
    const fileInputRef = useRef(null);

    // const [file, setFile] = useState(null);

    // const handleFile = (e) => {
    //     console.log("file", e.target.files[0]);
        
    //     setFile(e.target.files[0]);

    //     dispatch(fileAsncy(e.target.files[0]))
    // }

    const handleContact = (e) => {
        const { name, value } = e.target

        setAddContact({ ...addContact, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        addContact.id = Math.floor(Math.random() * 1000);

        dispatch(contactAsync(addContact))
        // dispatch(fileAsncy(file, addContact))

        console.log("addContact", addContact);

        nevigate('/');
    }

    // input filled mate required na lakhava ma and (onBlur)
    const toggleFilledClass = (e) => {
        e.target.classList.toggle('filled', e.target.value.trim() !== '');
    };


    // file mate
    const handleIconClick = () => {
        fileInputRef.current.click();
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const fileURL = URL.createObjectURL(file);  
            setAddContact(prevState => ({
                ...prevState,
                photo: fileURL,  
            }));
        }
    };

    const handlebackk = () => {
        nevigate(-1);
    }


    return (
        <div className='page-body-wrapper'>
            <div className='col-5' style={{ padding: '0px 16px 0px 0px' }}>
                <div className='add-form d-flex align-items-center justify-content-between'>
                    <OverlayTrigger placement="bottom" overlay={renderTooltip("Back")} delay={{ show: 400, hide: 0 }}>
                        <button type="button" className="btn border-0 p-0" onClick={handlebackk}>
                            <i className="material-icons hoverrr">arrow_back</i>
                        </button>
                    </OverlayTrigger>
                    <div className='d-flex align-items-center form-btn'>
                        <OverlayTrigger placement="bottom" overlay={renderTooltip("Add to favourites")} delay={{ show: 400, hide: 0 }}>
                            <button type="button" className="btn border-0 p-0">
                                <i className="material-icons hoverrr">star</i>
                            </button>
                        </OverlayTrigger>
                        <div className='form-btn'>
                            <button type="button" className="border-0 fw-medium save" onClick={handleSubmit}>Save</button>
                        </div>
                    </div>
                </div>
                <div className='formm'>
                    <input type="file" ref={fileInputRef} style={{ display: 'none' }} onChange={handleFileChange} name='photo' />
                    <div className='user'>
                        <div className='profile-icon position-relative'>
                            <img src={addContact.photo || user} alt="User Profile" onClick={handleIconClick} />
                            <button type="button" className="add-icon position-absolute border-0 d-flex align-items-center justify-content-center" onClick={handleIconClick}>
                                <i className="material-icons">add</i>
                            </button>
                        </div>
                        <div className='label'>
                            <OverlayTrigger placement="bottom" overlay={renderTooltip("Manage labels")} delay={{ show: 400, hide: 0 }}>
                                <button className='d-flex align-items-center'>
                                    <i className="material-icons">add</i>
                                    <span className='fs-6'>Label</span>
                                </button>
                            </OverlayTrigger>
                        </div>
                        {/* form */}
                        <form className='form' >
                            <div className='d-flex'>
                                <div className='col-1'>
                                    <OverlayTrigger placement="bottom" overlay={renderTooltip("Name")} delay={{ show: 400, hide: 0 }}>
                                        <button type="button" className="btn border-0 p-0 me-2">
                                            <i className="material-icons">person</i>
                                        </button>
                                    </OverlayTrigger>
                                </div>
                                <div className='col-9'>
                                    <div className='enter'>
                                        <input type="text" className='input' name='name' value={addContact.name} onChange={handleContact} onBlur={toggleFilledClass} placeholder=" " />
                                        <label className='line fw-medium'>First name</label>
                                    </div>
                                    <div className='enter mt-3'>
                                        <input type="text" className='input' name='surname' value={addContact.surname} onChange={handleContact} onBlur={toggleFilledClass} placeholder=" " />
                                        <label className='line fw-medium'>Surname</label>
                                    </div>
                                </div>
                            </div>
                            <div className='d-flex mt-4'>
                                <div className='col-1'>
                                    <OverlayTrigger placement="bottom" overlay={renderTooltip("Organisation")} delay={{ show: 400, hide: 0 }}>
                                        <button type="button" className="btn border-0 p-0 me-2">
                                            <i className="material-icons">domain</i>
                                        </button>
                                    </OverlayTrigger>
                                </div>
                                <div className='col-9'>
                                    <div className='enter'>
                                        <input type="text" className='input' name='company' value={addContact.company} onChange={handleContact} onBlur={toggleFilledClass} placeholder=" " />
                                        <label className='line fw-medium'>Company</label>
                                    </div>
                                    <div className='enter mt-3'>
                                        <input type="text" className='input' name='job' value={addContact.job} onChange={handleContact} onBlur={toggleFilledClass} placeholder=" " />
                                        <label className='line fw-medium'>Job title</label>
                                    </div>
                                </div>
                            </div>
                            <div className='d-flex mt-4'>
                                <div className='col-1'>
                                    <OverlayTrigger placement="bottom" overlay={renderTooltip("Email")} delay={{ show: 400, hide: 0 }}>
                                        <button type="button" className="btn border-0 p-0 me-2">
                                            <i className="material-icons">email</i>
                                        </button>
                                    </OverlayTrigger>
                                </div>
                                <div className='col-9'>
                                    <div className='enter'>
                                        <input type="email" className='input' name='email' value={addContact.email} onChange={handleContact} onBlur={toggleFilledClass} placeholder=" " />
                                        <label className='line fw-medium'>Email</label>
                                    </div>
                                </div>
                            </div>
                            <div className='d-flex mt-4'>
                                <div className='col-1'>
                                    <OverlayTrigger placement="bottom" overlay={renderTooltip("Phone")} delay={{ show: 400, hide: 0 }}>
                                        <button type="button" className="btn border-0 p-0 me-2">
                                            <i className="material-icons">call</i>
                                        </button>
                                    </OverlayTrigger>
                                </div>
                                <div className='col-9'>
                                    <div className='enter'>
                                        <input type="tel" className='input' name='phone' value={addContact.phone} onChange={handleContact} onBlur={toggleFilledClass} placeholder=" " />
                                        <label className='line fw-medium'>Phone</label>
                                    </div>
                                </div>
                            </div>
                            <div className='d-flex mt-4'>
                                <div className='col-1'>
                                    <OverlayTrigger placement="bottom" overlay={renderTooltip("Birthday")} delay={{ show: 400, hide: 0 }}>
                                        <button type="button" className="btn border-0 p-0 me-2">
                                            <i className="material-icons">cake</i>
                                        </button>
                                    </OverlayTrigger>
                                </div>
                                <div className="col-2">
                                    <div className="enter">
                                        <input type="number" className="input w-100" name='day' value={addContact.day} onChange={handleContact} onBlur={toggleFilledClass} placeholder=" " />
                                        <label className="line fw-medium">Day</label>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="enter">
                                        <select className="input w-100" name='month' value={addContact.month} onChange={handleContact} onBlur={toggleFilledClass} placeholder=" ">
                                            <option value="" selected></option>
                                            <option value="January">January</option>
                                            <option value="February">February</option>
                                            <option value="March">March</option>
                                            <option value="April">April</option>
                                            <option value="May">May</option>
                                            <option value="June">June</option>
                                            <option value="July">July</option>
                                            <option value="August">August</option>
                                            <option value="September">September</option>
                                            <option value="October">October</option>
                                            <option value="November">November</option>
                                            <option value="December">December</option>
                                        </select>
                                        <label className="line fw-medium">Month</label>
                                    </div>
                                </div>
                                <div className="col-4" style={{ width: '210px' }}>
                                    <div className="enter">
                                        <input type="number" className="input w-100" name='year' value={addContact.year} onChange={handleContact} onBlur={toggleFilledClass} placeholder=" " />
                                        <label className="line fw-medium">Year(optional)</label>
                                    </div>
                                </div>
                            </div>
                            <div className='d-flex mt-4'>
                                <div className='col-1'>
                                    <OverlayTrigger placement="bottom" overlay={renderTooltip("Notes")} delay={{ show: 400, hide: 0 }}>
                                        <button type="button" className="btn border-0 p-0 me-2">
                                            <i className="material-icons">note</i>
                                        </button>
                                    </OverlayTrigger>
                                </div>
                                <div className='col-9'>
                                    <div className='enter'>
                                        <textarea type="text" className='input' rows="4" cols="50" name='notes' value={addContact.notes} onChange={handleContact} style={{ height: "80px" }} onBlur={toggleFilledClass} placeholder=" "></textarea>
                                        <label className='line fw-medium'>Notes</label>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddContact
