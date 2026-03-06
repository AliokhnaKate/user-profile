import type {PostModel} from '../../../entities/[entity]/model/types';

interface FilterOptions {
    maxLength: number,
    minLength: number
}

//фильтры по длине заголовка добавить в
// Посты пользователей https://jsonplaceholder.typicode.com/posts
function filterByLengthTitle(post: PostModel, options: FilterOptions) {
    const {maxLength = 25, minLength = 1} = options;

    const titleLength = post.title.length;
    return titleLength <= maxLength && titleLength >= minLength;
}

export default filterByLengthTitle