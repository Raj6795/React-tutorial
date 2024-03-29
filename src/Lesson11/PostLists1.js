import React, { Component } from "react";
import axios from "axios";

class PostLists1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
    };
  }

  componentDidMount() {
    axios
      .post("https://jsonplaceholder.typicode.com/posts", {
        userId: "200",
        title: "New Post",
        body: "React is awesome",
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return <div>PostLists1</div>;
  }
}

export default PostLists1;
