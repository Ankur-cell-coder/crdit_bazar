import { useState } from "react"
import axios from 'axios';
import SignInForm from "./SigninForm";

const SignIn = () => {
    const [formValues] = useState({ username: '', password: '' });

    const onSubmit = signInDto => {

        axios.post(
            '/api/admin/signin',
            signInDto
        )
            .then(res => {
                if (res.status === 200) {
                    localStorage.setItem("JWT", res.data.accessToken);
                    alert('Logged in successfully');
                    window.location.reload();
                } else
                    Promise.reject()
            })
            .catch(err => alert('Something went wrong'));
    };

    return (
        <SignInForm initialValues={formValues}
            onSubmit={onSubmit}
            enableReinitialize>
            Sign In
        </SignInForm>
    );
}

export default SignIn