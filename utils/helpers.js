export const fetchFromLocalStorage = (itemName) => {
    let data = localStorage.getItem(itemName);
    if(data){
        return JSON.parse(localStorage.getItem(itemName));
    } else {
        return [];
    }
}

export const storeInLocalStorage = (itemName, data) => {
    localStorage.setItem(itemName, JSON.stringify(data));
}