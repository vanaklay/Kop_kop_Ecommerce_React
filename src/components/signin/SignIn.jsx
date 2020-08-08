import React from 'react';
import { auth, signInWithGoogle } from '../../services/firebase';

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

    handleSubmit = async event => {
        event.preventDefault();
        const { email, password } = this.state;
        try {
            await auth.signInWithEmailAndPassword(email, password);
        } catch (error) {
            console.log(error.message);
        }
        this.setState({ email: '', password: '' });
    }
    handleChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    render() {
        return (
            <div className='sign-in'>
                <h2 className='title'>J'ai déjà un compte</h2>
                <span>Se connecter avec mon email et mot de passe</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput name='email' type='email' 
                        value={this.state.email} required 
                        handleChange={this.handleChange}
                        autoComplete='username'
                        label='Email'
                        />
                    <FormInput name='password' type='password' autoComplete='current-password'
                        value={this.state.password} label='Mot de passe'
                        handleChange={this.handleChange} required />
                    <div className='buttons'>
                    <CustomButton type='submit'>Se connecter</CustomButton>
                    <CustomButton type='button' onClick={signInWithGoogle} isGoogleSignIn>Se connecter avec Google</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn;