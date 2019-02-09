import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchPosts } from "../Redux/Actions/postActions";

class ReduxApi extends Component {
  query_json_api() {
    /* Lets fetch dome data here from some API */
    /*     let json_url = "https://jsonplaceholder.typicode.com/posts";

    fetch(json_url)
      .then(response => response.json())
      .then(json => {
        console.log("Data from the API ");
        console.log(json);
        this.setState({
          posts: json
        });
      }); */
  }

  /*   componentWillReceiveProps(next_props) {
    if (next_props.new_posts) {
      this.props.posts.unshift(next_props.new_post);
    }
  } */

  componentDidMount() {
    this.props.fetchPosts();
  }

  get_post() {
    let { posts, new_posts } = this.props;
    /*     if (this.props.new_posts) {
      this.props.posts.unshift(this.props.new_post);
    } */
    console.log(
      new_posts
    ); /* 
    for (let i = 0; i < new_posts.length; i++) {
      posts.unshift(new_posts[i]);
    } */

    posts = [...new_posts, ...posts];

    console.log(posts);
    let dp_posts = posts.map(post => {
      return (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      );
    });

    return dp_posts;
  }

  render() {
    return this.get_post();
  }
}

ReduxApi.propTypes = {
  fetchPosts: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired,
  new_post: PropTypes.object.isRequired
};

/* to get state from redux we need to to map state to props */

const mapStateToProps = state => ({
  posts: state.posts.items,
  new_posts: state.posts.custom_item_list
});

export default connect(
  mapStateToProps,
  { fetchPosts }
)(ReduxApi);
