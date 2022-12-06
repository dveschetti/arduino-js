
# Proximity: Socket.IO + Johnny five
A simple example of johnny five + socket by Leonardo Angelucci and Desirée Veschetti

# Arduino 
<img src="http://johnny-five.io/img/breadboard/proximity-hcsr04.png" width="450">

## Node js
Install Node.js >= 0.10.x <br />
<a href="https://www.youtube.com/watch?v=TQks1p7xjdI">If you have problems look here: node js</a><br />

Install Xcode<br />
<a href="https://www.youtube.com/watch?v=lG9FNv8Txn8">If you have problems look here: xcode</a><br />

Install node-gyp npm install -g node-gyp
```
$ npm node-gyp npm install -g node-gyp
```

## Arduino
Open Arduino IDE<br />
Verify correct port and board<br />
Navigate to File > Examples > Firmata > StandardFirmataPlus<br />
Load sketch onto board.<br />
<a href="https://www.youtube.com/watch?v=2L8YYJpfuvE">If you have problems look here.</a>

## How to use
Open the folder on visual studio code. PingFirmata must be loaded onto Arduino-compatible boards to enable this component: <br/>
```
$ npm install nodebots-interchange
```
issue the following instruction with the serial port your arduino is plugged into. <br/>
```
$ interchange install hc-sr04 -a uno -p <port> --firmata
```
Start your server with the direction below <br/>
```
$ npm start
```
## Browse
http://localhost:3000/<br/>

## Resources
<a href="https://www.arduino.cc/en/software">Arduino IDE</a><br/>
<a href="http://johnny-five.io/">Johnny-five</a><br/>
<a href="https://nodejs.org/en/">Node js</a><br/>
<a href="https://code.visualstudio.com/">Visual studio code</a>
<a href="http://johnny-five.io/api/proximity/#pingfirmata">PingFirmata</a>

