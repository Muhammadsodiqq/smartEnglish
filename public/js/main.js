function myFunction() {
    document.getElementById("drop-down").classList.toggle("show");
    document.getElementById("direction").classList.toggle("show1")
};

window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("drop-down-menu");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }

    if (!event.target.matches('.dropbtn')) {
        var img = document.getElementsByClassName('dropbtn');
      var j;
      for (j = 0; j < img.length; j++) {
          var imgclasses = img[i];
          if(imgclasses.classList.contains('show1')) {
              imgclasses.classList.remove('show1');
          }
      }
    }

    if(!event.target.matches('.burger')) {
      var burgerElem = document.getElementsByClassName("main-menu");
      var i;
      for (i = 0; i < burgerElem.length; i++) {
        var burgerMini = burgerElem[i];
        if(burgerMini.classList.contains('change-position')) {
          burgerMini.classList.remove('change-position');
        }
      }
    }
}

function name() {
  document.getElementById("main-menu-content").classList.toggle("change-position");
}

function isNumberKey(evt){
  var charCode = (evt.which) ? evt.which : event.keyCode
  if (charCode > 31 && (charCode < 48 || charCode > 57))
      return false;
  return true;
}

// setTimeout(function(){$(".dropbtn").trigger("onclick")},180000);

