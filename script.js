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