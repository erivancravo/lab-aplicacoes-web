function age(ofAge) {
  if(ofAge == 'yes') {
    return 'maior de idade, que legal cara'
  } else {
    return 'menor de idade, nada legal cara'
  }
}

function saveInfo() {
  const fullName = document.querySelector('input[name="fullName"]').value;
  const userName = document.querySelector('input[name="userName"]').value;
  const email = document.querySelector('input[name="email"]').value;
  if (fullName == '' || userName == '' || email == '') {
    alert('Não podem haver campos em branco*');
    return 0;
  }
  const ofAgeRadio = document.querySelector('input[name="ofAge"]:checked');
  const ofAge = ofAgeRadio ? ofAgeRadio.value : '';
  if (!ofAgeRadio) {
    alert('Por favor, selecione se você é maior de 18 anos.');
    return 0; // Não prosseguir com a submissão
  }
  const message = age(ofAge);
  const agreed = document.querySelector('input[name="agreed"]').value;
  if (agreed != 'on') {
    alert('Você precisa concordar com os termos antes de continuar!');
    return 0;
  }
  const allData = [fullName, userName, email, message, agreed];
  return allData; // Não prosseguir com a submissão
}

function showFullscreenGif() {
  const fullscreenGifContainer = document.getElementById('fullscreenGifContainer');
  fullscreenGifContainer.style.display = 'flex'; // Exibe o elemento em tela inteira

  /*setTimeout(function () {
    fullscreenGifContainer.style.display = 'none';
  }, 5000);*/
  return false;
}

function displayInformation(list) {
  const main = document.querySelector('main');
  const displayForm = document.createElement('form');
  const h1 = document.createElement('h1');
  displayForm.id = 'displayForm';
  h1.innerText = 'Ficha';
  displayForm.appendChild(h1);
  displayForm.id = 'displayForm';
  main.appendChild(displayForm);
  for(let i = 0; i < list.length + 1; i++)  {
    const newDiv = document.createElement('div');
    newDiv.classList = `displayDiv`;
    newDiv.id = `div-${i+1}`;
    displayForm.appendChild(newDiv);
  }

  //para o nome completo
  const newLabel1 = document.createElement('label');
  newLabel1.innerText = 'Full Name: ';
  const newLabel2 = document.createElement('label');
  newLabel2.classList = 'whiteLB';
  newLabel2.innerText = `${list[0]}`;
  const div1 = document.querySelector('div#div-1');
  div1.appendChild(newLabel1);
  div1.appendChild(newLabel2);

  //para o username
  const newLabel3 = document.createElement('label');
  newLabel3.innerText = 'Username: ';
  const newLabel4 = document.createElement('label');
  newLabel4.classList = 'whiteLB';
  newLabel4.innerText = `${list[1]}`;
  const div2 = document.querySelector('div#div-2');
  div2.appendChild(newLabel3);
  div2.appendChild(newLabel4);

  //para o email
  const newLabel5 = document.createElement('label');
  newLabel5.innerText = 'Email: ';
  const newLabel6 = document.createElement('label');
  newLabel6.classList = 'whiteLB';
  newLabel6.innerText = `${list[2]}`;
  const div3 = document.querySelector('div#div-3');
  div3.appendChild(newLabel5);
  div3.appendChild(newLabel6);

  //para o sim ou não
  const newLabel7 = document.createElement('label');
  newLabel7.innerText = 'Maior: ';
  const newLabel8 = document.createElement('label');
  newLabel8.classList = 'whiteLB';
  newLabel8.innerText = `${list[3]}`;
  const div4 = document.querySelector('div#div-4');
  div4.appendChild(newLabel7);
  div4.appendChild(newLabel8);

  //não sei oq
  const newLabel9 = document.createElement('label');
  newLabel9.innerText = 'Agreed with terms: ';
  const newLabel10 = document.createElement('label');
  newLabel10.classList = 'whiteLB';
  newLabel10.innerText = `${list[4]}`;
  const div5 = document.querySelector('div#div-5');
  div5.appendChild(newLabel9);
  div5.appendChild(newLabel10);

  //botões deletar confirmar
  const confirmBtn = document.createElement('button');
  confirmBtn.id = 'confirm';
  confirmBtn.classList = 'btn';
  confirmBtn.innerText = 'confirm';
  const deleteBtn = document.createElement('button');
  deleteBtn.innerText = 'delete';
  deleteBtn.classList = 'btn';
  const div6 = document.querySelector('div#div-6');
  div6.appendChild(confirmBtn);
  div6.appendChild(deleteBtn);
  confirmBtn.addEventListener('click', function(event) {
    event.preventDefault()
    alert('Seu cadastro foi confirmado');
    showFullscreenGif();
  });
  deleteBtn.addEventListener('click', function() {
    deletarForm();
  })
} 

function deletarForm() {
  const displayForm = document.querySelector('form#displayForm');
  displayForm.remove(); 
}

const form = document.querySelector('form#inputs');
form.addEventListener('submit', function(event) {
  event.preventDefault();
  const list = saveInfo();
  if (list != 0) {
    console.log(list);
    displayInformation(list);
    form.reset();
  }
});

