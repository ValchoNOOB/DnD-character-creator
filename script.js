function ConfirmRace() {
    const selectedRace = document.getElementById('Races').value;
    if (selectedRace) {
      window.open(selectedRace + '.html', '_blank');
    } else {
      alert('Choose race first.');
    }
  }

  function ConfirmClass() {
    const selectedClass = document.getElementById('Classes').value;
    if (selectedClass) {
      window.open(selectedClass + '.html', '_blank');
    } else {
      alert('Choose class first.');
    }
  }