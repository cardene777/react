export const LANGUAGES = [
    "JavaScript",
    "PHP",
    "Python",
    "Ruby",
    "Go"
];

export const getLanguages = () => {
    return new Promise((resolve) => {
        setTimeout( () => {
            resolve(LANGUAGES);
        }, 1000)
    })
}