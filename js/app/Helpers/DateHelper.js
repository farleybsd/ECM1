class DateHelper{
    constructor(){
     throw new Error('Date Helper Nao pode Ser Instanciada!');   
    }
    static dataParaTexto(data)
    {
        return  ` ${data.getDate()} / ${data.getMonth() + 1}/${data.getFullYear()}`;
    }
    static textoParaData(texo){

        if(!/\d{4}-\d{2}-\d{2}/.test(texto)) 
                throw new Error('Deve estar no formato aaa-mm-dd')
        return new Date(... texto.split('-')
                   .map((item,indice)=> {
                       return item - indice %2;
                   }
                   )
        
        )        
    }
}