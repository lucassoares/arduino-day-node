const serialPort = require('serialport');

const arduinoPort = new serialPort('/dev/ttyUSB0');

arduinoPort.on('open', () => console.log('Porta aberta!'));

arduinoPort.on('error', erro => console.log(`Houve um erro: ${erro}`));

arduinoPort.on('data', data => console.log(data.toString()));
