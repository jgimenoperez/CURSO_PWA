console.log(1111)

// Detectar si podemos usar Service Workers
if ( navigator.serviceWorker ) {
    console.log(2222)
    navigator.serviceWorker.register('/sw.js')
            .then( reg => {
                console.log(3333)
                // setTimeout(() => {
                    
                //     reg.sync.register('posteo-gatitos');
                //     console.log('Se enviaron fotos de gatitos al server');

                // }, 3000);
                Notification.requestPermission().then( result => {
            
                    console.log("result",result);
                    reg.showNotification('Hola Mundo!');
                    
            
                });

            });


            

}


// if ( window.SyncManager ) { }




// fetch('https://reqres.in/api/users')
//     .then( resp => resp.text() )
//     .then( console.log );