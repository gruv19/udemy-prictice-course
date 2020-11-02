const postData = async (url, data) => {
    let res = await fetch(url, {
        method: "POST",
        body: data
    });

    return await res.text();
};

const getResource = async (url) => {
    let res = await fetch(url);
    
    if (!res.ok) {
        throw new Error(`Не удалось получить данные по адресу ${url}. Статус: ${res.status}`);
    }

    return await res.text();
};

export {postData, getResource};