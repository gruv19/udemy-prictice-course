import checkNumInputs from './checkNumInputs';

const forms = (state) => {
    const form = document.querySelectorAll('form');
    const input = document.querySelectorAll('input');
    // const phoneInputs = document.querySelectorAll('input[name="user_phone"]');

    checkNumInputs('input[name="user_phone"]');
    // forEach(item => {
    //     item.addEventListener('input', () => {
    //         item.value = item.value.replace(/\D/, '');
    //     });
    // });

    const messeage = {
        loading: 'Загрузка...',
        success: 'Спасибо! Скоро мы с Вами свяжемся!',
        failure: 'Что-то пошло не так...'
    };

    const postData = async (url, data) => {
        document.querySelector('.status').textContent = messeage.loading;
        let res = await fetch(url, {
            method: "POST",
            body: data
        });

        return await res.text();
    };

    const cleraInputs = () => {
        input.forEach(item => {
            item.value = '';
        });
    };

    form.forEach(item => {
        item.addEventListener('submit', e => {
            e.preventDefault();

            let statusMessage = document.createElement('div');
            statusMessage.classList.add('status');
            item.appendChild(statusMessage);

            const formData = new FormData(item);
            if (item.getAttribute('data-calc') === 'end') {
                for (let key in state) {
                    formData.append(key, state[key]);
                }
            }
            postData('http://localhost:3000', formData)
                .then(res => {
                    console.log(res);
                    statusMessage.textContent = messeage.success;
                })
                .catch(() => statusMessage.textContent = messeage.failure)
                .finally(() => {
                    cleraInputs();
                    setTimeout(() => {
                        statusMessage.remove();
                    }, 5000);
                });
        });
    });
};

export default forms;