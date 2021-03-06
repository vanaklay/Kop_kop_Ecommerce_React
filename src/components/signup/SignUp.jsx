import React, { useState } from 'react';

import FormInput from '../form-input/FormInput';
import CustomButton from '../custom-button/CustomButton';

import { auth, createUserProfileDocument } from '../../services/firebase';

import './SignUp.styles.scss';

const SignUp = () => {
    const [state, setState] = useState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const handleSubmit = async event => {
        event.preventDefault();
        const { displayName, email, password, confirmPassword } = state;
        if (password !== confirmPassword) {
            alert('Password don\'t match');
            return;
        }
        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password);
            await createUserProfileDocument(user, { displayName });
            setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            });
        } catch (error) {
            console.log(error);
        }
    };
    const handleChange = event => {
        const { name, value } = event.target;
        setState( { ...state, [name]: value });
    };
    return (
        <div className='sign-up'>
            <h2 className='title'>Je n'ai pas encore de compte</h2>
            <span>Je m'inscris avec un email</span>
            <form className='sign-up-form' onSubmit={handleSubmit}>
                <FormInput 
                    type='text'
                    name='displayName'
                    value={state.displayName}
                    handleChange={handleChange}
                    label='Nom'
                    required
                    />
                <FormInput 
                    type='email'
                    name='email'
                    value={state.email}
                    handleChange={handleChange}
                    autoComplete='username'
                    label='Email'
                    />
                <FormInput 
                    type='password'
                    name='password'
                    value={state.password}
                    handleChange={handleChange}
                    autoComplete='new-password'
                    label='Mot de passe'
                    required
                    />
                <FormInput 
                    type='password'
                    name='confirmPassword'
                    autoComplete='new-password'
                    value={state.confirmPassword}
                    handleChange={handleChange}
                    label='Confirmer le mot de passe'
                    required
                    />
                <CustomButton type='submit'>S'inscrire</CustomButton>
            </form>
        </div>
    );
};

export default SignUp;