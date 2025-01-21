import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { updateUser } from '../redux/userReducer';

const Update = () => {
    const { id } = useParams();
    const users = useSelector((state) => state.users);
    const existingUser = users.find((user) => user.id == id);

    // Initialize state with existing user data
    const [firstName, setFirstName] = useState(existingUser ? existingUser.firstName : '');
    const [lastName, setLastName] = useState(existingUser ? existingUser.lastName : '');
    const [email, setEmail] = useState(existingUser ? existingUser.email : '');
    const [department, setDepartment] = useState(existingUser ? existingUser.department : '');

    const dispatch = useDispatch();
    const navigate = useNavigate();

    // Handle the update action
    const handleUpdate = (event) => {
        event.preventDefault();
        dispatch(updateUser({
            id: id,
            firstName,
            lastName,
            email,
            department
        }));
        navigate('/');
    };

    return (
        <div className='d-flex w-60 vh-50 justify-content-center align-items-center mt-5'>
            <div className='border bg-secondary text-white p-5'>
                <h3 className='text_color'>Update User</h3>
                <form onSubmit={handleUpdate}>
                    <div>
                        <label htmlFor='firstName'>First Name:</label>
                        <input
                            type='text'
                            name='firstName'
                            value={firstName}
                            className='form-control'
                            placeholder='Enter first name'
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor='lastName'>Last Name:</label>
                        <input
                            type='text'
                            name='lastName'
                            value={lastName}
                            className='form-control'
                            placeholder='Enter last name'
                            onChange={(e) => setLastName(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor='email'>Email:</label>
                        <input
                            type='email'
                            name='email'
                            value={email}
                            className='form-control'
                            placeholder='Enter email'
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor='department'>Department:</label>
                        <input
                            type='text'
                            name='department'
                            value={department}
                            className='form-control'
                            placeholder='Enter department'
                            onChange={(e) => setDepartment(e.target.value)}
                        />
                    </div>
                    <br />
                    <button className='btn btn-primary'>Update</button>
                </form>
            </div>
        </div>
    );
};

export default Update;
