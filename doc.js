
document.querySelector('#botonConfirmacion').addEventListener('click',traerDatos);

function traerDatos() {
    
    const objeto = new XMLHttpRequest();
    // direccion del archivo json posteado en github
    objeto.open('GET','https://raw.githubusercontent.com/valerycm13/json/master/file.json',true);
    
    objeto.send();


    objeto.onreadystatechange =function(){

        if (this.readyState== 4 && this.status==200){
            //array de objeto json
            let datos=JSON.parse(this.responseText);
            
            let res = document.querySelector('#res');
            res.innerHTML='';

            for(let item of datos){

                res.innerHTML +=  `
                <tr>
                <td>${item.name}</td>
                <td>${item.address}</td>
                <td>${item.email}</td>
                <td>${item.age}</td>
                <td>${item.phoneNumbers}</td>
                
                
                </tr>
                `
                

            }
        }


    }
}

