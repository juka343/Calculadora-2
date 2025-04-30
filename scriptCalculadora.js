const { createApp, ref } = Vue

const app = createApp({
    setup(){
        const operacion = ref('');
        const resultadoPantalla=ref('0');

        const botonPresionado=(boton)=>{
            if(boton==='='){
                try {
                    const expresion=operacion.value.replace(/x/g,'*');
                    resultadoPantalla.value=eval(expresion);
                    operacion.value=resultadoPantalla.value.toString();
                    
                } catch (error) {
                    resultadoPantalla.value="Error";
                }
            }else if(boton==='%'){
                try {
                    const expresion=operacion.value.replace(/x/g,'*');
                    const resultado=eval(expresion)/100;

                    resultadoPantalla.value=resultado;
                    operacion.value=resultadoPantalla.value.toString();
                    
                } catch (error) {
                    resultadoPantalla.value="Error";
                }
            }
            else if(boton==='C'){
                operacion.value='';
                resultadoPantalla.value='0';

            }else if(boton==='←'){
                if(resultadoPantalla.length===1){
                    operacion.value='';
                    resultadoPantalla.value="0";
                }
                else{
                    operacion.value=operacion.value.slice(0,-1)
                    resultadoPantalla.value = operacion.value || '0';

                }

            } else{
                operacion.value +=boton;
                resultadoPantalla.value=operacion.value;

            }
        }

        return{
            resultadoPantalla,
            operacion,
            botonPresionado
        }
    }


}).mount('#appCalculadora')