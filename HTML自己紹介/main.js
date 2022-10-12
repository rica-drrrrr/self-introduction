'use strict'

const btn = document.getElementById('submitButton');

btn.addEventListener('click', function() {
  const reslut = ['ありがとうございます!','Thank you!','谢谢你！','شُكْرًا！','ขอบคุณค่ะ!','Obrigada!',
'감사합니다!','多謝你!','Grazie!','Merci!','cпасибо!','Gracias!'];
  const number = Math.floor(Math.random() * reslut.length);
  btn.textContent = reslut[number];
});


document.querySelector('.mainImage_item').animate(
  [
    { opacity: 0 },
    { opacity: 1 }
  ],
  {
    duration: 1900,
    fill: 'forwards'
  }
);
