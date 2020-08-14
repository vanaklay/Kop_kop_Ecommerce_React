import React from 'react';

import SignIn from '../../components/signin/SignIn';
import SignUp from '../../components/signup/SignUp';

import { SignInAndSignUpContainer } from './SignInAndSignUp.styles';

const SignInAndSignUp = () => {
    return (
        <SignInAndSignUpContainer>
            <SignIn />
            <SignUp />
        </SignInAndSignUpContainer>
    );
};

export default SignInAndSignUp;