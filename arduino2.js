const express = require('express');
const { Board, Led } = require("johnny-five");

const app = express();
const arduinoPort = new Board('/dev/ttyUSB0');

let led;

arduinoPort.on('ready', () =>{
    console.log('Arduino conectado');
    
    led = new Led(13);
});

app.get('/', (req, res) => {
    led.toggle(500);
    console.log('Alterando status do led');
    res.json({msg: 'Tudo ok'});
});

app.listen(3000, () => console.log('API OK'));

