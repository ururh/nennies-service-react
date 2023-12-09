import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { ContainerInput, EyeOff, InputEye, Paragraph, Title } from './LoginStyled';
import TextInput from '../../shared/TextInput';
import ButtonAuth from '../../shared/ButtonAuth';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { authentication } from '../../firebase/firebase-config';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setAuthStatus } from '../../redux/authSlice';

const Login = () => {
    const navigation = useNavigate();
    const dispatch = useDispatch()

    const validationSchema = yup.object().shape({
        email: yup.string().email('Invalid email').required('Email is required'),
        password: yup.string().required('Password is required'),
    });

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema,
        onSubmit: ({email, password}) => {
            signInWithEmailAndPassword(authentication, email, password)
            .then(() => {
                navigation('/nannies');
                dispatch(setAuthStatus(true));
                    })
                .catch(error=>{console.log(error)})
        },
    });

    return (
        <div>
            <Title>Log In</Title>
            <Paragraph>
                Welcome back! Please enter your credentials to access your account and continue your babysitter search.
            </Paragraph>
            <form onSubmit={formik.handleSubmit}>
                <ContainerInput>
                    {formik.touched.email && formik.errors.email && (
                        <div style={{ color: 'red' }}>{formik.errors.email}</div>
                    )}
                    <TextInput
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    {formik.touched.password && formik.errors.password && (
                        <div style={{ color: 'red' }}>{formik.errors.password}</div>
                    )}
                    <InputEye>
                        <TextInput
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        <EyeOff />
                    </InputEye>
                </ContainerInput>
    
                <ButtonAuth buttonText="Log In" />
            </form>
        </div>
    );
};

export default Login;
