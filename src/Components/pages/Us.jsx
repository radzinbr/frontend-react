import React, { useEffect, useState } from 'react';
import Header from '../layout/Header';
import Sidebar from '../layout/Sidebar';
import Content from '../layout/Content';
import CardUser from '../ui/CardUser';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Stack from 'react-bootstrap/Stack';

const Us = () => {
    const [users, setUsers] = useState([]);
    const [show, setShow] = useState(false);
    const [validated, setValidated] = useState(false);
    const [showPassword, setShowPassword] = useState(false); // Added state for password visibility

    useEffect(() => {
        const getUsers = async () => {
            try {
                const response = await fetch('http://localhost:3300/user/list');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                console.log(data.success);
                console.log(data.user);
                setUsers(data.user);
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        getUsers();
    }, []);

    const handleClose = () => setShow(false);

    const toggleShowPassword = () => setShowPassword(!showPassword); // Added function to toggle password visibility

    const handleSubmit = async (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        } else {
            event.preventDefault(); // Prevent the default form submission behavior.

            const newUser = {
                name: event.target.name.value,
                email: event.target.email.value,
                pass: event.target.pass.value,
                images: event.target.images.value, // Corrected the name attribute to 'images'
            };

            try {
                const response = await fetch('http://localhost:3300/user', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(newUser),
                });

                if (response.ok) {
                    const data = await response.json();
                    alert(data.success);
                    setShow(false); // Corrected setShowModal to setShow
                    setUsers([...users, data.user]);
                } else {
                    // Handle the case when the server returns an error status.
                    alert('Error: Failed to create a new user.');
                }
            } catch (error) {
                // Handle any network or other errors that may occur during the request.
                console.error('Error creating a new user:', error);
            }
        }

        setValidated(true); // Regardless of form validity, set validated to true.
    };

    return (
        <>
            <Header />
            <div className="main">
                <Sidebar />
                <Content>
                    <div className="all">
                        <h1>sobre nos</h1>
                        <Button as="button" variant="primary" onClick={() => setShow(true)}>
                            Adicionar usuários
                        </Button>
                        <Modal show={show} onHide={handleClose} animation={false}>
                            <Modal.Header closeButton>
                                <Modal.Title>Adicionar novo usuario</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                                    <Row className="mb-3">
                                        <Form.Group as={Col} md="4" controlId="validationCustom01">
                                            <Form.Label>primeiro nome</Form.Label>
                                            <Form.Control
                                                required
                                                name='name'
                                                type="text"
                                                placeholder="nome"
                                                defaultValue=""
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                Campo obrigatório.
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                        {/* ... (Other form fields) */}
                                        <Form.Group as={Col} md="6" controlId="validationCustom02">
                                            <Form.Label>Senha</Form.Label>
                                            <InputGroup>
                                                <Form.Control
                                                    required
                                                    name='pass'
                                                    type={showPassword ? 'text' : 'password'}
                                                    placeholder="Senha"
                                                    defaultValue=""
                                                />
                                                <Button variant="outline-secondary" onClick={toggleShowPassword}>
                                                    {showPassword ? 'Esconder' : 'Mostrar'}
                                                </Button>
                                            </InputGroup>
                                            <Form.Control.Feedback type="invalid">
                                                Campo obrigatório.
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                        <Form.Group as={Col} md="4" controlId="validationCustom03">
                                            <Form.Label>Email</Form.Label>
                                            <Form.Control
                                                required
                                                name='email'
                                                type="email" // Use 'email' type for email input
                                                placeholder="Email"
                                                defaultValue=""
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                Campo obrigatório.
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                        <Form.Group as={Col} md="12" controlId="validationCustom04">
                                            <Form.Label>images</Form.Label>
                                            <Form.Control
                                                required
                                                name='images'
                                                type="text"
                                                placeholder="URL"
                                                defaultValue=""
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                Campo obrigatório.
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                        <Form.Group className="mb-3">
                                            <Form.Check
                                                required
                                                label="Aceitar os termos e condições"
                                                feedback="Você tem que aceitar os termos"
                                                feedbackType="invalid"
                                            />
                                        </Form.Group>
                                        <Stack direction='horizontal' gap={3} className='d-flex justify-content-end'>
                                            <Button variant='secondary' onClick={handleClose}>Cancelar</Button>
                                            <Button type="submit">Enviar form</Button>
                                        </Stack>
                                    </Row>
                                </Form>
                            </Modal.Body>
                        </Modal>

                        {users.length > 0 ? (
                            users.map((user) => {
                                return <CardUser key={user.id} user={user} />;
                            })
                        ) : (
                            <p>carregando...</p>
                        )}
                    </div>
                </Content >
            </div >
        </>
    );
};

export default Us;
