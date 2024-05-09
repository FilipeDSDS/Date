var data1 = new Date('05/08/2024'); 
var data2 = new Date('05/09/2024');

function maior(data1, data2){
    return data1>data2 ? data1 : data2;
}

function intervalo(dataAntiga, dataNova){
    if(dataAntiga>dataNova){
        return("O primeiro parâmetro sempre deverá ser mais antigo que o segundo parâmetro.");
    }

    var dife = dataNova.getDate() - dataAntiga.getDate();

    return dife;
}

function getDataAtual() {
  
    var data = new Date();
 
    var horas = data.getHours();
    var minutos = data.getMinutes();
    var dia = data.getDate();
    var mes = data.getMonth() + 1; 
    var ano = data.getFullYear();

    horas = horas < 10 ? '0' + horas : horas;
    minutos = minutos < 10 ? '0' + minutos : minutos;
    dia = dia < 10 ? '0' + dia : dia;
    mes = mes < 10 ? '0' + mes : mes;
 
    var dataFormatada = `${horas}:${minutos} - ${dia}/${mes}/${ano}`;
  
    return dataFormatada;
  }
  
console.log(maior(data1, data2));
console.log(intervalo(data1, data2));
console.log(getDataAtual());