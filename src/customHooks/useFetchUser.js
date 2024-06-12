import React, { useState, useEffect } from "react";

const userApiUrl = "https://fakestoreapi.com/products";

export function UseFetchUser(userId) {

    const [user, setUser] = useState(null);

    const [loading, setLoading] = useState(false);

    const [error, setError] = useState(null);

    console.log(user, loading, error);

    useEffect(() => {

        if (!userId) return;


        const controller = new AbortController();

        const signal = controller.signal;

        setLoading(true);

        fetch(`${userApiUrl}/${userId}`, { signal })

            .then((response) => {

                if (!response.ok) {

                    throw new Error('Network response was not ok');

                }

                return response.json();

            })

            .then((data) => setUser(data))

            .catch((err) => {

                console.log(err);

                setError(err);

            })

            .finally(() => {
                setTimeout(() => {
                    setLoading(false);
                }, 2000);
            });


        return () => {

            controller.abort();

        };

    }, [userId]);



    return { user, loading, error };
}
