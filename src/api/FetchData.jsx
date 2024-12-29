import axios from 'axios'

const api = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
})


// get Data 
export const getApiData = () => {
    return api.get("/posts")
}

// get Data for react query
export const getApiDataRQ = async(pageNumber) => {
    try {
        const res = await api.get(`/posts?_start=${pageNumber}&_limit=3`)
        return res.status === 200 ? res.data : [];
    } catch (error) {
        console.log(error);
    }
}

// get Data
export const getApiDataRQInd = async(id) => {
    try {
        const res = await api.get(`/posts/${id}`)
        return res.status === 200 ? res.data : [];

    } catch (error) {
        console.log(error);
    }
}

// delete Data
export const deletePost = (id) => {
    try {
        return api.delete(`/posts/${id}`)
    } catch(error) {
        console.log(error);
    }
}

// update Data
export const updatePost = (id) => {
    try {
        return api.patch(`/posts/${id}`, {title: "I have updated"})
    } catch(error) {
        console.log(error);
    }
}

// update Data
export const addNewPost = () => {
    try {
        return api.patch(`/posts`, {title: "I have added new post.", body:"New Post"})
    } catch(error) {
        console.log(error);
    }
}

// infinite-scroll 
export const fetchData = async({pageParam}) => {
    try {
        const res = await axios.get(`https://api.github.com/users?per_page=12&page=${pageParam}`);
        return res.data;
    } catch (error) {
        console.log(error)   
    }
}