// sendmail

$(document).ready(function(){
	$("#form").submit(function(e) { 
	e.preventDefault();
	//устанавливаем событие отправки для формы с id=form
	var form_data = $(this).serialize(); //собераем все данные из формы
	$.ajax({
		type: "POST", //Метод отправки
		url: "email.php", //путь до php фаила отправителя
		data: form_data,
		success: function() { //код в этом блоке выполняется при успешной отправке сообщения

		$('#emailModal').modal('hide');
		// alert("Ваше сообщение отправлено!");
			}
		});
	});
}); 

// scrollspy

$('body').scrollspy({ target: '#navbarHome' });

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
		if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
				document.getElementById("myBtn").style.display = "block";
		} else {
				document.getElementById("myBtn").style.display = "none";
		}
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
		document.body.scrollTop = 0; // For Chrome, Safari and Opera 
		document.documentElement.scrollTop = 0; // For IE and Firefox
}