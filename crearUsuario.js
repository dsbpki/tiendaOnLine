const express = require('express');
const ruta = express.Router();

ruta.get('/crear', (req,res)=>{
    res.sendFile('./login.html',{root:__dirname})
})
ruta.post('/creado',(req,res)=>{
    req.getConnection((error,conn)=>{
        if(error){
            return res.send(error);
        }else{
            conn.query('INSERT INTO username SET ?',req.body,(error,rows)=>{
                if(error){
                    return res.send(error);
                }else{
                    res.send('Registro añadido XD !')
                }
            })
        }
    })
})

module.exports = ruta;