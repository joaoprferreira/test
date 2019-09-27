function desenharpagina(){
    desenharcards()
}
function desenharcards(){
     var pessoas = [
        {
            "id": 7,
            "email": "michael.lawson@reqres.in",
            "first_name": "Michael",
            "last_name": "Lawson",
            "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/follettkyle/128.jpg"
        },
        {
            "id": 8,
            "email": "lindsay.ferguson@reqres.in",
            "first_name": "Lindsay",
            "last_name": "Ferguson",
            "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/araa3185/128.jpg"
        },
        {
            "id": 9,
            "email": "tobias.funke@reqres.in",
            "first_name": "Tobias",
            "last_name": "Funke",
            "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/vivekprvr/128.jpg"
        },
        {
            "id": 10,
            "email": "byron.fields@reqres.in",
            "first_name": "Byron",
            "last_name": "Fields",
            "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/russoedu/128.jpg"
        },
        {
            "id": 11,
            "email": "george.edwards@reqres.in",
            "first_name": "George",
            "last_name": "Edwards",
            "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/mrmoiree/128.jpg"
        },
        {
            "id": 12,
            "email": "rachel.howell@reqres.in",
            "first_name": "Rachel",
            "last_name": "Howell",
            "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/hebertialmeida/128.jpg"
        }];
    
    const container = document.querySelector(".container");
        var pessoas = pessoas;
        let text = ""
        for (i = 0, len = pessoas.length; i < len; i++){
            text += `
                <div class="card">
                    <img src="${pessoas[i].avatar}">    
                    <h2>${pessoas[i].first_name + " " + pessoas[i].last_name }</h2>
                    <a href="">${pessoas[i].email}</a> 
                   <button url="https://www.google.com/intl/pt/gmail/about/#"> <h4>Enviar Email</h4></button>
                    
                </div>       
            `
        } 
        container.innerHTML = text;
}

desenharpagina()
