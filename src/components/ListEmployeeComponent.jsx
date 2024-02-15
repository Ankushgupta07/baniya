import React, { useEffect, useState } from "react";
import { deleteemployee, listEmployees } from "../services/EmployeeService";
import { useNavigate } from 'react-router-dom'


function ListEmployeeComponent() {
    const [employees, setEmployees] = useState([]);
    const [call, setCall] = useState(true);
    const [ID, setID] = useState('');
    const navigator = useNavigate();

    const hjhkk = async (id) => {

        await deleteemployee(id)
        setCall(!call)
    }


    useEffect(() => {
        aauytrew()


    }, [call])

    const aauytrew = () => {
        listEmployees()
            .then((response) => {
                setEmployees(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }
    useEffect(() => {

    }, [call]);
    // const deleteEmployee = async (id) => {
    //     try {
    //         const confirmDelete = window.confirm("Are you sure you want to delete this employee?");
    //         if (confirmDelete) {
    //             await deleteemployee(id);

    //             setCall(!call)
    //             // Assuming setEmployees is a function to update the employees list
    //            // setEmployees((prevEmployees) => prevEmployees.filter((employee) => employee.id !== id));
    //             // Navigate after successful deletion
    //            navigator('/');
    //         }
    //     } catch (error) {
    //         console.log(error);
    //     }
    // };





    function addNewEmployee() {
        navigator("/add")
    }
    function editEmployee(id) {
        navigator(`/edit/${id}`)
    }
    return (
        <div className="bg-slate-600">
            <h2 className="">Employees List</h2>
            <button

                className="" onClick={addNewEmployee}>ADD EMPLOYEE</button>

            <div className="">
                <table className="">
                    <thead>
                        <tr>
                            <th>Employee First Name</th>
                            <th>Employee Last Name</th>
                            <th>Employee Email Id</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody className="">
                        {employees.map((employee) => (
                            <tr key={employee.id}>
                                <td>{employee.firstName}</td>
                                <td>{employee.lastName}</td>
                                <td>{employee.emailId}</td>
                                <td>
                                    <button
                                        onClick={() => editEmployee(employee.id)}
                                        className=""
                                    >
                                        Update
                                    </button>
                                    <button
                                        style={{ marginLeft: "10px" }}
                                        onClick={() => hjhkk(employee.id)}
                                        className="btn btn-danger"
                                    >
                                        Delete
                                    </button>
                                    <button
                                        style={{ marginLeft: "10px" }}
                                        onClick={() => viewEmployee(employee.id)}
                                        className=""
                                    >
                                        View
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default ListEmployeeComponent;
