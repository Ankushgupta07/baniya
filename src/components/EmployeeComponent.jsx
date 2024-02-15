import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { createEmployee, getEmployee, updateyyyEmployee } from '../services/EmployeeService';
import { useNavigate, useParams } from 'react-router-dom'
const EmployeeComponent = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [emailId, setEmail] = useState('');

    const [errors, setErrors] = useState(
        {
            firstName: '',
            lastName: '',
            emailId: ''
        }
    )
    const { id } = useParams();

    const navigator = useNavigate();

    const fun = async (id) => {
        try {

            const response =await getEmployee(id)
            
            if (response) {
                setFirstName(response.data.firstName)
                setLastName(response.data.lastName)
                setEmail(response.data.emailId)
            }

        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fun(id)
    }, [id])




    const handleLastNameChange = (event) => {
        setLastName(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };



    const saveEmployee = (event) => {
        event.preventDefault();

        if (validateForm()) {
            const employee = { firstName, lastName, emailId };
            console.log('Form submitted:', { firstName, lastName, emailId });
            if (id) {
                updateyyyEmployee(id, employee).then((response) => {
                    console.log(response.data)
                    navigator('/')

                }).catch(er => {
                    console.error(er)
                })
           return
            }
            createEmployee(employee).then((response) => {
                console.log(response.data)
            })
            navigator('/')
        }
        // You can use the firstName, lastName, and email state values to submit the data

    };

    function validateForm() {
        let valid = true
        const errorcopy = { ...errors }
        if (firstName.trim()) {
            errorcopy.firstName = '';
        }
        else {
            errorcopy.firstName = 'first name id required'

            valid = false;
        }
        if (lastName.trim()) {
            errorcopy.lastName = '';
        }
        else {
            errorcopy.lastName = 'dfsdf name id required'

            valid = false;
        } if (emailId.trim()) {
            errorcopy.emailId = '';
        }
        else {
            errorcopy.emailId = 'gfsdf name id required'

            valid = false;
        }
        setErrors(errorcopy)
        return valid;
    }
    function pagetitle() {
        if (id) {
            return <h2>UPDATE EMPLOYEE</h2>
        }
        else {
            return <h2>ADD EMPLOYEE</h2>
        }
    }
    return (
        <div>
            {
                pagetitle()
            }
            <div className="mb-3">
                <label className="form-label">First Name:</label>
                <input
                    type="text"
                    className={`form-control ${errors.firstName ? 'is-invalid' : ''}`}
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                />
                <div className="invalid-feedback">{errors.firstName}</div>
            </div>

            <div className="mb-3">
                <label className="form-label">Last Name:</label>
                <input
                    type="text"
                    className={`form-control ${errors.lastName ? 'is-invalid' : ''}`}
                    value={lastName}
                    onChange={handleLastNameChange}
                />
                <div className="invalid-feedback">{errors.lastName}</div>
            </div>

            <div className="mb-3">
                <label className="form-label">Email:</label>
                <input
                    type="email"
                    className={`form-control ${errors.emailId ? 'is-invalid' : ''}`}
                    value={emailId}
                    onChange={handleEmailChange}
                />
                <div className="invalid-feedback">{errors.emailId}</div>
            </div>

            <Button variant="primary" onClick={saveEmployee}>
                Save
            </Button>
        </div>
    );
};

export default EmployeeComponent;
