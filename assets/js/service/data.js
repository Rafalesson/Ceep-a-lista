export const removeDatasRepetidas = (datas) => {
    const datasUnicas = [];

    datas.forEach( data => {
        if (datasUnicas.indexOf(data.dataFormatada) === -1) {
            datasUnicas.push(data.dataFormatada);
        }
    });

    return datasUnicas;
}

export const ordenaPorData = (data) => {
    data.sort((a, b) => {
        const primeiraData = moment(a, "DD/MM/YYYY");
        const segundaData = moment(b, "DD/MM/YYYY");

        return primeiraData - segundaData;
    });
}