import React from 'react';

import SelectInput from '../../components/SelectInput'
import ContentHeader from '../../components/ContentHeader'

import {Container} from './styles'

const Dashboard: React.FC = () => {

    const options = [
        {value: 'lucas', label: 'Lucas'},
        {value: 'natalia', label: 'Natália'},
        {value: 'emerson', label: 'Emerson'},
        {value: 'neusa', label: 'Neusa'},
    ]
    
    return (
        <Container>
            <ContentHeader title="Dashboard" lineColor="#fff">
                <SelectInput options={options} onChange={() => {}}/>
            </ContentHeader>
        </Container>
    )
}

export default Dashboard