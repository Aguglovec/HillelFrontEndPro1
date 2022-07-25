import { useCallback, useEffect, useState } from 'react';

export default function useAsync(fn, defaultValue) {
    const [data, setData] = useState(defaultValue);
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState(null);

    function run(...args) {
        setIsLoaded(false);
        setError(null);

        fn(...args)
            .then(setData)
            .catch(setError)
            .finally(() => setIsLoaded(true));
    }

    return {
        data,
        isLoaded,
        isError: !!error,
        error,
        run,
    };
}
