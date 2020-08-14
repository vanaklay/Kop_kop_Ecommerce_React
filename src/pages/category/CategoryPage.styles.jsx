import styled from 'styled-components';

export const CollectionContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;
`;

export const CollectionTitle = styled.h2`
    font-size: 38px;
    margin: 0 auto 30px;
`;

export const CollectionItems = styled.div`
    display: flex;
    justify-content: center;
    @media (min-width: 769px) and (max-width: 1200px) {
        display: grid;
        grid-template-columns: 50% 50%;
    }
    @media (max-width: 768px) {
        flex-direction: column;
    }
`;