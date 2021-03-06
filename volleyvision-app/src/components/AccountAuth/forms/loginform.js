import React, {useRef, useState } from "react";
import { Form, Button, Card, Alert } from 'react-bootstrap'
import { useAuth } from "../authcontext";
import { Link, useHistory } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"

export default function LoginForm() {

    const emailRef = useRef()
    const passwordRef = useRef()
    const { login } = useAuth()
    // const { login, currentUser } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    async function handleSubmit(e) {
        e.preventDefault()

        try {
            setError('')
            setLoading(true)
            await login(emailRef.current.value, passwordRef.current.value)
        } catch {
            setError('Failed to login')
        }

        setLoading(false)
    }

    async function handleClickPlayer(e) {
        e.preventDefault()

        try {
            setError('')
            setLoading(true)
            await login(emailRef.current.value, passwordRef.current.value)
            history.push("/player_dashboard")
        } catch {
            setError('Failed to login')
        }

        setLoading(false)
    }

    async function handleClickCoach(e) {
        e.preventDefault()

        try {
            setError('')
            setLoading(true)
            await login(emailRef.current.value, passwordRef.current.value)
            history.push("/coach_dashboard")
        } catch {
            setError('Failed to login')
        }

        setLoading(false)
    }

    async function handleClickRecruiter(e) {
        e.preventDefault()

        try {
            setError('')
            setLoading(true)
            await login(emailRef.current.value, passwordRef.current.value)
            history.push("/recruiter_dashboard")
        } catch {
            setError('Failed to login')
        }

        setLoading(false)
    }

    return (
        <>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">
                        Log In
                    </h2>
                    {/* <p>This is here for debugging purposes: <br />
                        Current User: <br />
                        {currentUser && currentUser.email}
                    </p> */}
                    {error && <Alert variant="danger">{error}</Alert>}
                
                    <Form onSubmit={handleSubmit}>
                        <Form.Group id="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" ref={emailRef} required />
                        </Form.Group>
                        <Form.Group id="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" ref={passwordRef} required />
                        </Form.Group>
                        <br />
                        <Button disabled={loading} className="w-100" type="submit" onClick={handleClickPlayer}>
                            Log In As Player
                        </Button>
                        <br /><br />
                        <Button disabled={loading} className="w-100" type="submit" onClick={handleClickCoach}>
                            Log In As Coach
                        </Button>
                        <br /><br />
                        <Button disabled={loading} className="w-100" type="submit" onClick={handleClickRecruiter}>
                            Log In As Recruiter
                        </Button>
                    </Form>
                    <div className = "w-100 text-center mt-2">
                        <Link to ="/forgotpassword"> Forgot Password? </Link>
                    </div>
                </Card.Body>
            </Card>
            <div className = "w-100 text-center mt-2">
                Need an account? <Link to="/signup">Sign Up</Link>
            </div>
        </>
    )
}