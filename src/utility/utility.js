

const getStoredData = () => {
    const storedBookSTR = localStorage.getItem("ReadLists");
    if(storedBookSTR){
        const storedBookData = JSON.parse(storedBookSTR)
        return storedBookData
    }
    else{
        return []
    }
}

const setBookData = (id) => {
    const availableBook = getStoredData()
    if(availableBook.includes(id)){
        alert('The book is already in store')
    }else{
        availableBook.push(id)
        const setStoreData = JSON.stringify(availableBook)
        localStorage.setItem("ReadLists", setStoreData)
    }
}

export {setBookData, getStoredData };