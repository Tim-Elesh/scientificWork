let btn = document.querySelector('#btn');
let sidebar = document.querySelector('.sidebar');

 btn.onclick = function(){
    sidebar.classList.toggle('active');
};

let currentDate = new Date();
console.log(currentDate.getFullYear());
console.log(currentDate.getMonth());
console.log(currentDate.getDate());


var dayOfWeek = currentDate.getDay();
var days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
var dayName = days[dayOfWeek];


let formattedDate = currentDate.toLocaleDateString();
document.getElementById("date").innerHTML = dayName + ' ' + formattedDate;


document.querySelectorAll('.card').forEach(function(card) {
    card.addEventListener('click', function() {
      // Get the modal element
      var modal = document.getElementById('modal');
      // Show the modal
      modal.style.display = 'block';
      modal.style.pointerEvents= 'visible';
      modal.style.opacity = '100%'
      document.body.style.overflow = 'hidden';
      document.body.style.pointerEvents = 'none';
      document.body.style.opacity = '80%';
    });
  });
  function closeModal() {
      var modal = document.getElementById('modal');
      modal.style.display = 'none';
      document.body.style.overflowY = 'scroll';
      document.body.style.pointerEvents = 'visible';
      document.body.style.opacity = '100%';
  }


  document.getElementById('nine-grade').addEventListener('click', function myFunction1() {
    var books10 = document.getElementById('books-10');
    if (books10.classList.contains('hidden')) {
      books10.classList.remove('hidden');
      this.textContent = '9 класс';
    } else {
      books10.classList.add('hidden');
      this.textContent = 'Показать остальной контент';
    }

    var books11 = document.getElementById('books-11');
    if (books11.classList.contains('hidden')) {
      books11.classList.remove('hidden');
      this.textContent = '9 класс';
    } else {
      books11.classList.add('hidden');
      this.textContent = 'Показать остальной контент';
    }
  }); 

  document.getElementById('ten-grade').addEventListener('click', function myFunction2() {
    var books9 = document.getElementById('books-9');
    if (books9.classList.contains('hidden')) {
      books9.classList.remove('hidden');
      this.textContent = '10 класс';
    } else {
      books9.classList.add('hidden');
      this.textContent = 'Показать остальной контент';
    }

    var books11 = document.getElementById('books-11');
    if (books11.classList.contains('hidden')) {
      books11.classList.remove('hidden');
      this.textContent = '10 класс';
    } else {
      books11.classList.add('hidden');
      this.textContent = 'Показать остальной контент';
    }
  });
  
  document.getElementById('eleven-grade').addEventListener('click', function myFunction3() {
    var books9 = document.getElementById('books-9');
    if (books9.classList.contains('hidden')) {
      books9.classList.remove('hidden');
      this.textContent = '10 класс';
    } else {
      books9.classList.add('hidden');
      this.textContent = 'Показать остальной контент';
    }

    var books10 = document.getElementById('books-10');
    if (books10.classList.contains('hidden')) {
      books10.classList.remove('hidden');
      this.textContent = '11 класс';
    } else {
      books10.classList.add('hidden');
      this.textContent = 'Показать остальной контент';
    }
  }); 
