import React from 'react';

import {Container,
        Profile,
        Welcome,
        UserName
} from './styles'

const MainHeader: React.FC = () => {
    return(
        <Container>
            <h1>Togle</h1>

            <Profile>
                <Welcome>Olá, </Welcome>
                <UserName>Lucas Chitolina</UserName>
            </Profile>
        </Container>
    )
}

export default MainHeader;