export const getRandomPastDate = () => {
    const end = new Date(); //сегодня
    const start = new Date();
    start.setFullYear(end.getFullYear()-1); // год назад

    const randomTimeStamp = start.getTime() + Math.random()*(end.getTime() - start.getTime());

    return new Date(randomTimeStamp).toISOString();
}