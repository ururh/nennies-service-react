import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { ContainerInput, EyeOff, InputEye, Paragraph, Title } from './RegistrationStyled';
import TextInput from '../../shared/TextInput';
import ButtonAuth from '../../shared/ButtonAuth';
import { authentication } from '../../firebase/firebase-config';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setAuthStatus } from '../../redux/authSlice';

const RegistrationForm = () => {
    const navigation = useNavigate();
    const dispatch = useDispatch()

    const validationSchema = yup.object().shape({
        name: yup.string()
            .min(3, 'Name must be at least 3 characters')
            .required('Name is required'),
        email: yup.string().email('Invalid email').required('Email is required'),
        password: yup
            .string()
            .min(6, 'Password must be at least 6 characters')
            .matches(/[a-zA-Z]/, 'Password must contain at least one letter')
            .matches(/\d/, 'Password must contain at least one digit')
            .required('Password is required'),
    });

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
        },
        validationSchema,
        onSubmit: (values) => {
                createUserWithEmailAndPassword(authentication, values.email, values.password)
                    .then(() => {
                        navigation('/nannies') 
                        dispatch(setAuthStatus(true))
                    })
                .catch(error=>{console.log(error)})
        },
    });

    return (
        <div>
            <Title>Registration</Title>
            <Paragraph>
                Thank you for your interest in our platform! In order to register, we need some information. Please provide us
                with the following information.
            </Paragraph>
            <form onSubmit={formik.handleSubmit}>
                <ContainerInput>
                    {formik.touched.name && formik.errors.name && (
                        <p style={{ color: 'red' }}>{formik.errors.name}</p>
                    )}
                    <TextInput
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
          
                    {formik.touched.email && formik.errors.email && (
                        <p style={{ color: 'red' }}>{formik.errors.email}</p>
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
                        <p style={{ color: 'red' }}>{formik.errors.password}</p>
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
                <ButtonAuth buttonText="Sign Up" />
            </form>
        </div>
    );
};

export default RegistrationForm;
