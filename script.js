document.addEventListener('DOMContentLoaded', function() {
    // La date cible : 25 octobre 2025, 00h00min00s
    // Attention : Les mois en JavaScript sont indexés à partir de 0 (janvier = 0, octobre = 9)
    const targetDate = new Date('October 25, 2025 00:00:00').getTime();

    // Récupérer les éléments HTML où afficher le décompte
    const daysElement = document.getElementById('days');
    const hoursElement = document.getElementById('hours');
    const minutesElement = document.getElementById('minutes');
    const secondsElement = document.getElementById('seconds');
    const messageElement = document.getElementById('message');

    // Mettre à jour le décompte toutes les secondes
    const countdownInterval = setInterval(function() {
        // Obtenir la date et l'heure actuelles
        const now = new Date().getTime();

        // Calculer la distance entre la date cible et la date actuelle
        const distance = targetDate - now;

        // Si le décompte est terminé
        if (distance < 0) {
            clearInterval(countdownInterval); // Arrêter l'intervalle
            daysElement.textContent = '0';
            hoursElement.textContent = '0';
            minutesElement.textContent = '0';
            secondsElement.textContent = '0';
            messageElement.textContent = "C'est le grand jour !";
            return; // Sortir de la fonction
        }

        // Calculer les jours, heures, minutes et secondes
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Afficher les résultats dans les éléments HTML correspondants
        daysElement.textContent = days;
        hoursElement.textContent = hours;
        minutesElement.textContent = minutes;
        secondsElement.textContent = seconds;

    }, 1000); // Mettre à jour toutes les 1000 millisecondes (1 seconde)
});