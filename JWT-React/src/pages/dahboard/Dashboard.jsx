import React, { useEffect,useState } from 'react'
import {Row,Table,Col,Container,} from 'react-bootstrap'
import   {useNavigate} from 'react-router-dom'

const Dashboard = () => {

  const navigate=useNavigate();
  const token=localStorage.getItem("token");

  const [users,setUsers]=useState([]);

  useEffect(()=>{
    const fetchUsers= async ()=>{
      try {
          const response=await fetch("http://localhost:5000/api/users",{
            headers:{
              Authorization: `Bearer ${token}`// poc -> proof of concept
            }
          });
          const result=await response.json();
          setUsers(result);
      } catch (error) {
        console.log(error);
      }
    }
    if(token){
      fetchUsers();
    }else{
      navigate("/login");
    }
  },[token,navigate])
  return (
     <Container className="mt-5">
      <Row>
        <Col>
         <h1 className='text-center'>Dashboard</h1>
         <Table striped bordered hover responsive>
           <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
            </tr>
           </thead>
           <tbody>
            {users.length>0?(users.map((user)=>(
              <tr key={user._id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
              </tr>
            ))
          ):(
            <tr>
                  <td colSpan="2">No users found</td>
            </tr>
          )}
           </tbody>
          </Table> 
        </Col>
      </Row>
     </Container>
  )
}

export default Dashboard
