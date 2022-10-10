import React from 'react'
import './Registration.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Registration = () => {

function handleSubmit(e) {
    e.preventDefault();
}

  return (
      <div className='registrationContainer'>
          <h1>Become a new douchebag!</h1>

            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-2" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
                </Form.Group>
              
                <Form.Group className="mb-3" controlId="passwordRepeat">
                  <Form.Control type="repeatPassword" placeholder="Repeat Password" />
                  <Form.Text className="text-muted">
                    Don't look at me like that, it's needed!
                </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check, so we can spam you!" />
                </Form.Group>
                <Button variant="primary" type="submit">
                Create Account
                </Button>
            </Form>
      </div>
  )
}

export default Registration