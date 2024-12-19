import React, { useEffect, useState } from 'react';
import './Dashboard-component.css';
import UserInformation from '../User-Information/UserInformation';
import Newscomponent from '../News-Component/news-component';
import api from '../../api';
import { Console } from 'console';
import { listPartner } from '../../generated/partnerService';
import { useDispatch, useSelector } from 'react-redux';
function DashBoardComponent() {
  const [data, setData] = useState(null);
  const dispatch = useDispatch();
  const parents = useSelector((state: any) => state.partnerReducer); 

  const [isAdding, setIsAdding] = useState(false);
  const [newRow, setNewRow] = useState({
    name: "",
    description: "",
    opaque1: "",
    opaque2: "",
    phoneNumber: "",
    email: "",
    address: ""
  });

  useEffect(() => {
    dispatch(listPartner());
  }, [dispatch]);

  useEffect(() => {
    console.log(parents); // Log the response to the console
  }, [parents]);

  const handleAddClick = () => {
    setIsAdding(true);
  };

  const handleInputChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setNewRow({ ...newRow, [name]: value });
  };

  const handleSaveClick = () => {
    const newParent = {
      metadata: {
        name: newRow.name,
        description: newRow.description,
        opaque1: newRow.opaque1,
        opaque2: newRow.opaque2
      },
      spec: {
        phoneNumber: newRow.phoneNumber,
        email: newRow.email,
        address: newRow.address
      }
    };

    // dispatch(addParent(newParent)).then(() => {
    //  // Refresh the list after adding a new parent
    // });
    setIsAdding(false);
    setNewRow({
      name: "",
      description: "",
      opaque1: "",
      opaque2: "",
      phoneNumber: "",
      email: "",
      address: ""
    });
  };

  // useEffect(() => {
  //   api.get('/ITPAbpUserConfiguration/GetAll').then((response) => { 
  //     console.log(response.data);
  //   });
  // }, []);;  
  return (
    // <div className='userprofile'>
    //   {/* <Newscomponent></Newscomponent> */}

    //   {process.env.REACT_APP_MODE}
    // </div>

    <div className="table-container">
      <button onClick={handleAddClick}>Add</button>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Opaque1</th>
            <th>Opaque2</th>
            <th>Phone Number</th>
            <th>Email</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {parents?.map((row: { metadata: { name: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined; description: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined; opaque1: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined; opaque2: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined; }; spec: { phoneNumber: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined; email: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined; address: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined; }; }, index: React.Key | null | undefined) => (
            <tr key={index}>
              <td>{row.metadata.name}</td>
              <td>{row.metadata.description}</td>
              <td>{row.metadata.opaque1}</td>
              <td>{row.metadata.opaque2}</td>
              <td>{row.spec.phoneNumber}</td>
              <td>{row.spec.email}</td>
              <td>{row.spec.address}</td>
            </tr>
          ))}
          {isAdding && (
            <tr>
              <td><input type="text" name="name" value={newRow.name} onChange={handleInputChange} /></td>
              <td><input type="text" name="description" value={newRow.description} onChange={handleInputChange} /></td>
              <td><input type="text" name="opaque1" value={newRow.opaque1} onChange={handleInputChange} /></td>
              <td><input type="text" name="opaque2" value={newRow.opaque2} onChange={handleInputChange} /></td>
              <td><input type="text" name="phoneNumber" value={newRow.phoneNumber} onChange={handleInputChange} /></td>
              <td><input type="text" name="email" value={newRow.email} onChange={handleInputChange} /></td>
              <td><input type="text" name="address" value={newRow.address} onChange={handleInputChange} /></td>
              <td><button onClick={handleSaveClick}>Save</button></td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default DashBoardComponent;
