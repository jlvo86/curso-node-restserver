
const {response} = require('express');

 const userGet= (req, res = response)=> {
     const {apikey}= req.query;
    res.json(
        {
            msg: "hola mundo GET - CONTROLLER",
            apikey
        }
    )
}

const userPut=(req, res = response)=> {
    const {id} = req.params;
    res.json(
        {
            msg: "hola mundo PUT",
            id
        }
    )
}

const userPost=(req, res = response)=> {
    const {nombre, edad} = req.body;

    res.json(
        {
            msg: "hola mundo POST444",
           nombre,
           edad
        }
    )
}

const userDelete=(req, res = response)=> {
    res.json(
        {
            msg: "hola mundo DELETE"
        }
    )
}


const userPatch=(req, res = response)=> {
    res.json(
        {
            msg: "hola mundo pATCH"
        }
    )
}



module.exports ={
    userGet,
    userPost,
    userPut,
    userDelete,
    userPatch
}