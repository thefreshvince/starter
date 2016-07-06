(function(){

  var sidetap_link = document.getElementsByClassName('side-tap')[0],
      body = document.body;

      console.log(sidetap_link);

  sidetap_link.addEventListener('click', e => body.classList.toggle('side-tap--open'));

})();
