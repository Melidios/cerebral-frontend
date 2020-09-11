import React from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Link } from 'react-router-dom'

const SignIn = () => {

  return (
    <div className="py-5">
      <Form className="col-lg-4 col-12 col-md-7 m-auto">
        <Row form>
          <Col md={6}>
            <FormGroup className="text-left">
              <Label for="exampleEmail">Email</Label>
              <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup className="text-left">
              <Label for="examplePassword">Password</Label>
              <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
            </FormGroup>
          </Col>
        </Row>

        <Button>Sign in</Button>
      </Form>
      <div className="mt-4">
        <Link to="/signUp">Create account</Link>
      </div>
    </div>
  )
}

export default SignIn;