const checkTextInputs = (selector) => {
    const txtInputs = document.querySelectorAll(selector);

    txtInputs.forEach(input => {
        let currentValue = input.value;

        input.addEventListener('keypress', function(e) {
            if (e.key.match(/[^а-яё 0-9]/ig)) {
                e.preventDefault();
            }
            currentValue = input.value;
        });

        input.addEventListener('input', function(e) {
            if (e.target.value.match(/[^а-яё 0-9]/ig)) {
                e.target.value = currentValue;
            }
        });
    });
};

export default checkTextInputs;