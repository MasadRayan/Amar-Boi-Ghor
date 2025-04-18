const getStoredBook = () => {
    const storedBookSTR = localStorage.getItem("readList");

    if (storedBookSTR) {
        const storedBookArray = JSON.parse(storedBookSTR);
        return storedBookArray;
    }
    else {
        return [];
    }
}

const addToDB = (id) => {
    const storedBookData = getStoredBook();
    if (storedBookData.includes(id)) {
        alert("Can't add same Book Twice");
    }
    else {
        storedBookData.push(id);
        const data = JSON.stringify(storedBookData);
        localStorage.setItem("readList", data);
    }
}

export {addToDB};