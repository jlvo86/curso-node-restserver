const express = require('express');
const cors = require('cors');


class Server
{
    constructor()
    {
      this.app  = express();
      this.port = process.env.PORT;
      this.userRouterPath = '/api/user';

      this.listen();
     
      //Midellewares
     this.middleware(); 
     
     //rutasd de la app

      this.routes();
    }

    middleware()
    {
        //cors 
        this.app.use(cors());

        //pasrseo y lectura del body
        this.app.use(express.json());

        //directorio publico
      this.app.use(express.static('public'));  
    }

    routes()
    {
       this.app.use(this.userRouterPath, require('../router/user')) ;
    }

    listen()
    {
        this.app.listen( this.port);
    }

}


module.exports = Server;