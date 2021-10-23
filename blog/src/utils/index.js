export const filterBlogByUser = (user, blogs) => {
    if (!user || !user.id) {
        return blogs;
    }
    return blogs.filter( blog => blog.userId === user.id)
}