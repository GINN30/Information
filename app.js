var accordionButtons = document.querySelectorAll('.accordion-button');

accordionButtons.forEach(function (button) {
    button.addEventListener('click', function () {
        accordionButtons.forEach(function (otherButton) {
            if (otherButton !== button) {
                otherButton.classList.remove('active');
            }
        });
        button.classList.toggle('active');
    });
});