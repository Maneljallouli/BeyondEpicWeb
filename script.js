document.getElementById("recrutement-form").addEventListener("submit", function(event) {
    const requiredFields = ['nom', 'prenom', 'email', 'telephone', 'cv', 'lettre_motivation'];
    let valid = true;

    requiredFields.forEach(field => {
        const input = document.getElementById(field);
        if (!input.value) {
            input.style.borderColor = 'red';
            valid = false;
        } else {
            input.style.borderColor = '';
        }
    });

    if (!valid) {
        event.preventDefault();
        alert("Tous les champs obligatoires doivent être remplis.");
    }
});
