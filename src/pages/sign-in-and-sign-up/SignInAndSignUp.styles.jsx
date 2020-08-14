import styled from 'styled-components';

export const SignInAndSignUpContainer = styled.div`
    width: 1200px;
    display: flex;
    justify-content: space-between;
    margin: 30px auto;
    @media (max-width: 1199px) {
        width: 100%;
        flex-direction: column;
        align-items: center;
    }
`;