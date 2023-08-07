export function getRandomElement<T>(arr: Array<T>) {
    return arr[Math.floor(Math.random() * arr.length)];
}

const adjectives = [
    'Lazy',
    'Golden',
    'Wet',
    'Greedy',
    'Humming',
    'Happy',
    'Cold',
    'Hot',
    'Freezing',
    'Shiny',
];
const nomes = [
    'Pants',
    'Flower',
    'Pyjama',
    'Piranhas',
    'Cat',
    'Elephant',
    'Robot',
    'Dog',
    'Sheep',
    'Jeans',
    'Dinosaur',
];

export function generateUsername() {
    return getRandomElement(adjectives) + getRandomElement(nomes);
}
