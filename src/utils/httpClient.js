const API = "https://api.themoviedb.org/3";

export function get(path) {
    return fetch(API + path, {
            headers: {
                Authorization: 
                    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YjkzOGFlNmJiZDAyOWJlNWJhMjZmYTI0NjNkODg5YyIsInN1YiI6IjYxMWJmNjY0OWYwZTE5MDA1YzNiOWFmZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vxy3eyEKAh9loDSyMEUFGbf1jWdFmmAQ08RPXOj4ZdU",
                "Content-Type": "application/json;charset=utf-8",
            },
        })
        .then((result) => result.json())
}