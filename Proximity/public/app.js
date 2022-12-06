$(function () {


  const socket = io();

  function mapRange(value, a, b, c, d) {
    value = (value - a) / (b - a);
    return c + value * (d - c);
  }

  socket.on('msg', (data) => {
    console.log('msg', data);
    //console log the value

    //map the value to the rotation
    let deg = mapRange(data, 2, 50, 0, 360);
    let size = mapRange(data, 2, 50, 10, 300)

    //rotate the div
    document.getElementById('rect').style.transform = `rotate(${deg}deg)`;
    
    if (data>50){
      document.getElementById('rect').style.height = `300px`;
      document.getElementById('rect').style.width = `300px`;
    }else{
      document.getElementById('rect').style.height = `${size}px`;
      document.getElementById('rect').style.width = `${size}px`;
    }

  });

  
});
