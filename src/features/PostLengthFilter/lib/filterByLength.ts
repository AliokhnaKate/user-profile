import type {PostModel} from '../../../entities/[entity]/model/types';

interface FilterOptions {
    maxLength: number,
    minLength: number
}

//фильтры по длине заголовка добавить в
// Посты пользователей https://jsonplaceholder.typicode.com/posts
// Альбомы пользователей https://jsonplaceholder.typicode.com/albums/1/photos
// Задачи пользователя https://jsonplaceholder.typicode.com/users/1/todos
// Альбом пользователя https://jsonplaceholder.typicode.com/users/1/albums
function filterByLengthTitle(book: PostModel, options: FilterOptions) {
    const {maxLength = 25, minLength = 1} = options;

    const titleLength = book.title.length;
    return titleLength <= maxLength && titleLength >= minLength;
}

export default filterByLengthTitle