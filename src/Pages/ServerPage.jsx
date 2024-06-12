import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom"


export default function ServerPage() {
// console.log(posts)


    const state = useLocation();
    const [posts, setPosts] = useState([])

    useEffect(() => {
        if (state && state.posts) {
            setPosts(state.posts)
        };
    }, [state])

    return (

        <div>
            <h1>Welcome to ServerPage Dashboard...</h1>
            {posts.map((posts) => (
                <div key={posts.id}>
                    <h2>{posts.title}</h2>

                    <section>
                        <p>{posts.content}</p>

                    </section>
                </div>
            )

            )}


        </div>

    )
} 