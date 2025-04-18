const getWishedBook = () => {
    const storedBookSTR = localStorage.getItem("wishList");

    if (storedBookSTR) {
        const storedBookArray = JSON.parse(storedBookSTR);
        return storedBookArray;
    }
    else {
        return [];
    }
}

const addToWishlist = (id) => {
    const storedBookData = getWishedBook();
    if (storedBookData.includes(id)) {
        alert("Can't add same Book Twice");
    }
    else {
        storedBookData.push(id);
        const data = JSON.stringify(storedBookData);
        localStorage.setItem("wishList", data);
    }
}

export {addToWishlist, getWishedBook};