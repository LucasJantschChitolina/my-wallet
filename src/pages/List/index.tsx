import React, {useMemo, useState, useEffect} from 'react';

import ContentHeader from '../../components/ContentHeader';
import HistoryFinanceCard from '../../components/HistoryFinanceCard';
import SelectInput from '../../components/SelectInput';

import gains from '../../repositories/gains';
import expenses from '../../repositories/expenses';

import formatCurrency from '../../utils/formatCurrency';

import {Container, Content, Filters} from './styles'

interface IRouteParams {
    match: {
        params: {
            type: string;
        }
    }
}

interface Idata {
    id: string;
    description: string;
    amountFormatted: string;
    frequency: string;
    dateFormatted: string;
    tagColor: string;
}

const List: React.FC<IRouteParams> = ({ match }) => {
    const [data,setData] = useState<Idata[]>([])

    const {type} = match.params;
    const title = useMemo(() => {
        return type === 'entry-balance' ? 'Entradas' : 'Saídas'
    },[type])

    const lineColor = useMemo(() => {
        return type === 'entry-balance' ? '#F7931B' : '#E44C4E'
    },[type])

    const listData = useMemo(() => {
        return type === 'entry-balance' ? gains : expenses
    },[type])

    const months = [
        {value: 1, label: 'Janeiro'},
        {value: 2, label: 'Fevereiro'},
        {value: 3, label: 'Março'},
        {value: 4, label: 'Abril'},
        {value: 5, label: 'Maio'},
        {value: 6, label: 'Junho'},
        {value: 7, label: 'Julho'},
        {value: 8, label: 'Agosto'},
        {value: 9, label: 'Setembro'},
        {value: 10, label: 'Outubro'},
        {value: 11, label: 'Novembro'},
        {value: 12, label: 'Dezembro'}
    ]

    const years = [
        {value: 2018, label: '2018'},
        {value: 2019, label: '2019'},
        {value: 2020, label: '2020'},
        {value: 2021, label: '2021'},
        
    ]

    useEffect(() => {
        const response = listData.map(item => {
            return {
                id: String(Math.random () * data.length),
                description: item.description,
                amountFormatted: formatCurrency(Number(item.amount)),
                frequency: item.frequency,
                dateFormatted: item.date,
                tagColor: item.frequency === 'recorrente' ? '#E44C4E' : '#4E41F0',
            }
        })
        setData(response);

    },[])

    return (
        <Container>
            <ContentHeader title={title} lineColor={lineColor}>
                <SelectInput options={years}/>
                <SelectInput options={months}/>
            </ContentHeader>

            <Filters>
                <button 
                    type="button"
                    className="tag-filter tag-filter-recurrent"
                >
                    Recorrentes
                </button>
                <button 
                    type="button"
                    className="tag-filter tag-filter-eventual"
                >
                    Eventuais
                </button>
            </Filters>

            <Content>
                {
                    data.map(item =>(
                        <HistoryFinanceCard 
                        key={item.id}
                        tagColor={item.tagColor}
                        title={item.description}
                        subtitle={item.dateFormatted}
                        amount={item.amountFormatted} />
                    ))
                }
            </Content>
        </Container>
    )
}

export default List