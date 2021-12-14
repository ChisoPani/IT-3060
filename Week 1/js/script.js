const greeting = () => {

  const name = document.getElementById('fname');
  const greetings = document.getElementById('greetings');

  greetings.innerHTML = '</br> </hr><b>Hello </b>' + '<b style="color:red; font-size:50px;">'+ name.value + '</b>';
}

document.getElementById('submit').onclick = greeting;
