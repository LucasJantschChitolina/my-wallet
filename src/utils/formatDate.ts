const formatDate = (date: string): string => {
    const dateFormatted = new Date(date)
    const year = dateFormatted.getFullYear();

    const day = dateFormatted.getDate() > 9 
    ? dateFormatted.getDate() : `0${dateFormatted.getDate()}`; //getDate pega o dia do mês o getDay pega o dia da semana
    
    // const month = dateFormatted.getMonth() + 1; 
    
    const month = dateFormatted.getMonth() + 1 > 9
    ? dateFormatted.getMonth() + 1 : `0${dateFormatted.getMonth() + 1}`; // janeiro é o mês 0 por isso o + 1;



    return `${day}/${month}/${year}`
}

export default formatDate;

