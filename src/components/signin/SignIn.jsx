import React from 'react';

import { signInWithGoogle } from '../../services/firebase';

import FormInput from '../form-input/FormInput';
import CustomButton from '../custom-button/CustomButton';

import './SignIn.styles.scss';

// Functional Component with hooks
// const SignIn = () => {
//     const [log, setLog] = useState({
//         email: '',
//         password: ''
//     });
//     const handleChange = event => {
//         const { name, value } = event.target;
//         setLog({ ...log, [name]: value });
//     };
//     const handleSubmit = event => {
//         event.preventDefault();
//         console.log(log.email + ' ' + log.password);
//         setLog({ email: '', password: '' });
//     }
//     return (
//         <div>
//             <h1>FORM</h1>
//             <form onSubmit={handleSubmit}>
//                 <input name='email' type='email' 
//                     placeholder='Email' value={log.email}
//                     onChange={handleChange}
//                      />
//                 <input name='password' type='current-password' 
//                     placeholder='Min 6 characters' value={log.password} 
//                     onChange={handleChange}
//                     />
//                 <button>Sign In</button>
//             </form>
//         </div>
//     );
// };

class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = event => {
        event.preventDefault();
        this.setState({ email: '', password: '' });
    }
    handleChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    render() {
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput name='email' type='email' 
                        value={this.state.email} required 
                        handleChange={this.handleChange}
                        autoComplete='username'
                        label='email'
                        />
                    <FormInput name='password' type='password' autoComplete='current-password'
                        value={this.state.password} label='password'
                        handleChange={this.handleChange} required />

                    <CustomButton type='submit'>Sign in</CustomButton>
                    <CustomButton onClick={signInWithGoogle}>Sign in with Google</CustomButton>
                </form>
            </div>
        )
    }
}

export default SignIn;