document.getElementById('toggle').addEventListener('change', function() {
    const isChecked = this.checked;
    const monthlyPrices = document.querySelectorAll('.price.monthly');
    const yearlyPrices = document.querySelectorAll('.price.yearly');

    monthlyPrices.forEach(price => {
        price.style.display = isChecked ? 'none' : 'block';
    });

    yearlyPrices.forEach(price => {
        price.style.display = isChecked ? 'block' : 'none';
    });
});