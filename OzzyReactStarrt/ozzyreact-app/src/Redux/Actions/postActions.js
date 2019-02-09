import { FETCH_POSTS, NEW_POST } from "./types";

export const fetchPosts = () => dispatch => {
  console.log("fetch action called");
  /* THis is where we fetch post data from teh server and display them, so actions become the things we do to change our pwn state */
  let json_url = "https://jsonplaceholder.typicode.com/posts";

  fetch(json_url)
    .then(response => response.json())
    .then(posts =>
      dispatch({
        type: FETCH_POSTS,
        payload: posts
      })
    );
};

export const createPost = (postData /* Takes some data */) => dispatch => {
  console.log("form create post action called");
  fetch("https://jsonplaceholder.typicode.com/posts", {
    /* This is an additinla parameter for spefiying method */
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify(postData)
  })
    .then(res => res.json())
    .then(post =>
      dispatch({
        type: NEW_POST,
        payload: postData
      })
    );
};
