import React, { useRef } from 'react'
import { Card, Button, Container , Form } from "react-bootstrap";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function Profile() {
    const { currentuser, logout , updateUserPassword } = useAuth();
    const navigate = useNavigate();
     const passwordRef = useRef();
  const handleLogout = async () => {
    try {
      await logout();
      navigate("/login");
    } catch (error) {
      console.error("Failed to log out:", error);
    }
  };
  const handleChangePassword = async (e) => {
    e.preventDefault();
    try {
      await updateUserPassword(passwordRef.current.value);
      alert("Password updated successfully!");
      passwordRef.current.value = "";
    } catch (error) {
      console.error("Error updating password:", error);
      alert(error.message);
    }
  };
  return (
     <Container
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <Card className="shadow-sm border-0 p-3">
          <Card.Body>
            <h3 className="text-center mb-4">Profile</h3>
                <div className="mb-3">
                  <strong>Email:</strong>
                  <div>{currentuser.email}</div>
                </div>

               <Form onSubmit={handleChangePassword}>
                  <Form.Group>
                    <Form.Label>New Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Enter new password"
                      ref={passwordRef}
                    />
                  </Form.Group>

                  <Button type="submit" variant="danger" className="w-100 mt-3">
                    Update Password
                  </Button>
                </Form>

                <Button
                  onClick={handleLogout}
                  variant="danger"
                  className="w-100 mt-3"
                >
                  Log Out
                </Button>

        

          </Card.Body>
        </Card>
      </div>
    </Container>
  )
}

export default Profile