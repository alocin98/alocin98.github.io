// Animations
AOS.init({
  anchorPlacement: 'top-left',
  duration: 1000
});

// Add your javascript here

function setLanguage(locale) {
  if(locale.includes('de')) $('[lang="en"]').hide();
  else if(locale.includes('en')) $('[lang="de"]').hide();
}

function changeLanguage(locale) {
  if(locale.includes('de')) {$('[lang="en"]').hide(); $('[lang="de"]').show();}
  else if(locale.includes('en')) {$('[lang="en"]').show(); $('[lang="de"]').hide();}
}

$('#switch-lang').click(function() {
  $('[lang="en"]').toggle();
  $('[lang="de"]').toggle();
});

setLanguage(navigator.language);