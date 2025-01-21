import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from '../redux/UserReducer';
import { useNavigate } from 'react-router-dom';

const Create = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [department, setDepartment] = useState('');
    
    const users = useSelector((state) => state.users);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        // Create a new user object with the split firstName and lastName
        const newUser = {
            id: users[users.length - 1].id + 1,
            firstName,
            lastName,
            email,
            department
        };

        // Dispatch the addUser action with the new user
        dispatch(addUser(newUser));

        // Redirect to home page
        navigate('/');
    };

    return (
        <div className='d-flex vh-50 justify-content-center align-items-center mt-5'>
            <div className='w-90 border bg-secondary text-white p-5'>
                <h3 className='text_color'>Add New User</h3>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor='firstName'>First Name:</label>
                        <input
                            type='text'
                            name='firstName'
                            className='form-control form-signin'
                            placeholder='Enter first name'
                            onChange={e => setFirstName(e.target.value)}
                            value={firstName}
                        />
                    </div>
                    <div>
                        <label htmlFor='lastName'>Last Name:</label>
                        <input
                            type='text'
                            name='lastName'
                            className='form-control form-signin'
                            placeholder='Enter last name'
                            onChange={e => setLastName(e.target.value)}
                            value={lastName}
                        />
                    </div>
                    <div>
                        <label htmlFor='email'>Email:</label>
                        <input
                            type='email'
                            name='email'
                            className='form-control form-signin'
                            placeholder='Enter email'
                            onChange={e => setEmail(e.target.value)}
                            value={email}
                        />
                    </div>
                    <div>
                        <label htmlFor='department'>Department:</label>
                        <input
                            type='text'
                            name='department'
                            className='form-control form-signin'
                            placeholder='Enter department'
                            onChange={e => setDepartment(e.target.value)}
                            value={department}
                        />
                    </div>
                    <br />
                    <button className='btn btn-primary'>Submit</button>
                </form>
            </div>
        </div>
    );
};

export default Create;
