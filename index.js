function addingEventListener() {
    const input = document.getElementById('button');
  
    function clickAlert() {
      alert('submit');
    }
  
    input.addEventListener('click', clickAlert);
  }
  
  