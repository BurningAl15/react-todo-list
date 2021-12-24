import { React, useState, useEffect } from 'react';

function useLocalStorage(itemName, initialValue) {
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);
    const [item, setItem] = useState(initialValue);

    useEffect(() => {
        setTimeout(() => {
            try {
                const localStorageItem = localStorage.getItem(itemName);
                let parsedItem;

                if (!localStorageItem) {
                    localStorage.setItem(itemName, JSON.stringify(initialValue));
                    parsedItem = initialValue;
                } else {
                    parsedItem = JSON.parse(localStorageItem);
                }

                setItem(parsedItem);
                setLoading(false);
            } catch (err) {
                setError(err);
            }
        }, 1000);
    });


    const saveItem = (newTodos) => {
        try {
            const stringifiedTodos = JSON.stringify(newTodos);
            console.table(newTodos);
            localStorage.setItem(itemName, stringifiedTodos);
            setItem(newTodos);
        } catch (err) {
            setError(err);
        }
    }

    return {
        item,
        saveItem,
        loading,
        error
    }
}
export default useLocalStorage;