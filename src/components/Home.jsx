import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { deleteUser } from '../redux/userReducer';

const Home = () => {
    // Retrieve transformed user data from Redux store
    const users = useSelector((state) => state.users);
    console.log(users);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // Handle user deletion
    const handleDelete = (id) => {
        console.log(id);
        dispatch(deleteUser(id));
        navigate(0); // Refresh the page to update the list after deletion
    };

    return (
        <div className="container" style={{ marginTop: '2rem' }}>
            <h2 className="mb-5">Simple CRUD App With Redux</h2>
            <Link to="/create" className="btn btn-primary my-3 p-3">
                Create +
            </Link>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Department</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                        <tr key={index}>
                            <td>{user.id}</td>
                            <td>{user.firstName}</td>
                            <td>{user.lastName}</td>
                            <td>{user.email}</td>
                            <td>{user.department}</td>
                            <td>
                                <Link to={`/edit/${user.id}`} className="btn btn-sm btn-primary">
                                    Edit
                                </Link>
                                <button
                                    onClick={() => handleDelete(user.id)}
                                    className="btn btn-sm btn-danger ms-2"
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Home;
