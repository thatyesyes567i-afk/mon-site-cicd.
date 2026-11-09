function saluer(nom) {
  return 'Bonjour ' + nom + ' !';
}

// So that tests (Node.js) can use the function
if (typeof module !== 'undefined') {
  module.exports = { saluer };
}

// Browser part
if (typeof document !== 'undefined') {
  document.getElementById('btn').addEventListener('click', function () {
    const nom = document.getElementById('nom').value || 'monde';
    document.getElementById('resultat').textContent = saluer(nom);
  });
}