const loguear = async() => {
    const user = document.getElementById('user').value;
    const clave = document.getElementById('contra').value;
    const url = document.getElementById('url').value;

    // para mandar informacion al session storeage y utilizarla en vex de la variable escondida
    
    sessionStorage.setItem("urlbuho", url);
    const urlbuho = sessionStorage.getItem('urlbuho') + "/api/login"

    const options = {
        method : "POST",
        headers :{
            'Content-Type' : 'application/json'
        },
        body : JSON.stringify({
            usuario : user,
            clave : clave
        })
    }

    await fetch(urlbuho, options)
    .then(res => res.json())
    .then(data => {
        // console.log(data);
        if(data.error == true){
           alertify.error('Error message');
           console.log("hola");
        }else{
            sessionStorage.setItem("token", data.body.token)
            console.log(data);
        }
    })
    .catch(err => {
        console.log('Tenemos un problem', err)
    })
}
