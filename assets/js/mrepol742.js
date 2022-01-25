
window.addEventListener('scroll', reveal)
reveal();
try {
lozad().observe();
} catch (e33) {
  
}
function reveal() {
    let items = document.querySelectorAll('.obj')
    for (let i = 0; i < items.length; i++) {
        let windowHeight = window.innerHeight;
        let revealTop = items[i].getBoundingClientRect().top;
        let distance = 50;

        if (revealTop < windowHeight - distance) {
            items[i].classList.add('active')
        } else {
            items[i].classList.remove('active')
        }
    }
}

const cursor = document.querySelector(".ms45");
var timeout;

document.addEventListener("mousemove", (e) => {
  let x = e.pageX;
  let y = e.pageY;

  cursor.style.top = y + "%";
  cursor.style.right = x + "%";

  function mouseStopped(){
    cursor.style.display = "none";
  }

  clearTimeout(timeout);
  timeout = setTimeout(mouseStopped, 1000);
});

document.addEventListener("mouseout", () => {
  cursor.style.display = "none";
});

function ab56(cname, cvalue, exdays) {
	const d = new Date();
	d.setTime(d.getTime() + (exdays*24*60*60*1000));
	let expires = "expires="+ d.toUTCString();
	document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }

  function ac(cname) {
	let name = cname + "=";
	let decodedCookie = decodeURIComponent(document.cookie);
	let ca = decodedCookie.split(';');
	for(let i = 0; i <ca.length; i++) {
	  let c = ca[i];
	  while (c.charAt(0) == ' ') {
		c = c.substring(1);
	  }
	  if (c.indexOf(name) == 0) {
		return c.substring(name.length, c.length);
	  }
	}
	return "";
  }


  function qwer() {
    let qw = ac("gy5");
  
      if (qw == "" || qw == null) {
        var x = document.querySelectorAll("#tst");
    x[0].style.setProperty("display", "block", "important");
      }
    }
  try {
    qwer();
  } catch (aasas){} 

  function acc() {
    var x = document.querySelectorAll("#tst");
    x[0].style.setProperty("display", "none", "important");
    ab56("gy5", "56a", 99);
  }

  var toastElList = [].slice.call(document.querySelectorAll('.toast'))
var toastList = toastElList.map(function (toastEl) {
  return new bootstrap.Toast(toastEl, option)
})
