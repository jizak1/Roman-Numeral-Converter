document.addEventListener('DOMContentLoaded', () => {
    const numberInput = document.getElementById('number');
    const convertBtn = document.getElementById('convert-btn');
    const output = document.getElementById('output');

    const romanNumerals = [
        { value: 1000, numeral: 'M' },
        { value: 900, numeral: 'CM' },
        { value: 500, numeral: 'D' },
        { value: 400, numeral: 'CD' },
        { value: 100, numeral: 'C' },
        { value: 90, numeral: 'XC' },
        { value: 50, numeral: 'L' },
        { value: 40, numeral: 'XL' },
        { value: 10, numeral: 'X' },
        { value: 9, numeral: 'IX' },
        { value: 5, numeral: 'V' },
        { value: 4, numeral: 'IV' },
        { value: 1, numeral: 'I' }
    ];

    const convertToRoman = (num) => {
        let result = '';
        
        for (let i = 0; i < romanNumerals.length; i++) {
            while (num >= romanNumerals[i].value) {
                result += romanNumerals[i].numeral;
                num -= romanNumerals[i].value;
            }
        }
        
        return result;
    };

    const validateAndConvert = () => {
        const inputValue = numberInput.value;
        
        if (!inputValue) {
            output.textContent = 'Please enter a valid number';
            return;
        }

        const num = parseInt(inputValue);

        if (num <= 0) {
            output.textContent = 'Please enter a number greater than or equal to 1';
            return;
        }

        if (num >= 4000) {
            output.textContent = 'Please enter a number less than or equal to 3999';
            return;
        }

    
        const romanNumeral = convertToRoman(num);
        output.textContent = romanNumeral;
    };

    convertBtn.addEventListener('click', validateAndConvert);
    
    numberInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            validateAndConvert();
        }
    });

    numberInput.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/[^0-9]/g, '');
    });
});