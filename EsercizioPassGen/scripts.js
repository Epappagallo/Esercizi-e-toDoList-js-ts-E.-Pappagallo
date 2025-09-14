window.addEventListener('DOMContentLoaded', () => {
  const nameInput = prompt('Inserisci il tuo nome:') || '';
  const birthdateInput = prompt('Inserisci la tua data di nascita (es. 2001-05-30):') || '';
  const passwordInput = prompt('Inserisci una password:') || '';

  const generated = `${nameInput}${passwordInput}${birthdateInput}`;

  const output = document.getElementById('generatedPassword');
  if (output) {
    output.value = generated;
  }
});

