import styled from 'styled-components';

export const PreviewCollectionContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;
`;

export const PreviewCollectionTitle = styled.h2`
    font-size: 38px;
    margin-bottom: 25px;
    align-self: center;
    cursor: pointer;
`;

export const PreviewItems = styled.div`
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