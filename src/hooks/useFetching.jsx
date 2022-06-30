import React, {useState} from 'react';

export const useFetching = (callback) => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, serError] = useState('');

    const fetching = async (...args) => {
        try {
            setIsLoading(true)
            await callback(...args)
        } catch (e) {
            serError(e.message)
        } finally {
            setIsLoading(false)
        }
    }

    return [fetching, isLoading, error]
}