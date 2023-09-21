import About from "../pages/About";
import PostIdPage from "../pages/PostIdPage";
import Posts from "../pages/Posts";

export const routes = [
    {path: '/about', comm: About, exact: true},
    {path: '/posts', comm: Posts, exact: true},
    {path: '/posts/:id', comm: PostIdPage, exact: true},
]