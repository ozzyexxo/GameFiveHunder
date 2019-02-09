import React, { Component } from "react";
import VideoBox from "./video_box";

class VideoMbed extends Component {
  state = {
    is_loaded: false,
    videos: "",
    length: 0,
    r_query: "",
    r_next: ""
  };

  /*apiUrl = "https://www.metaweather.com/api/location/search/?query=tampere"; */
  componentDidMount() {
    /* Lets fetch dome data here from some API */
    /*    fetch(this.proxyurl + this.apiUrl)
      .then(d => d.json())
      .then(d => {
        console.log("Data from the API ");
        console.log(d);
      }); */
    this.query_reddit("Arsenal");
  }

  get_display_elem() {
    if (!this.state.is_loaded) {
      return <h1>Loading ...</h1>;
    }

    return this.state.videos.map(vid => {
      return <VideoBox src={vid} />;
    });
  }

  handleClick = event => {
    event.preventDefault();
    const data = new FormData(event.target);
    console.log(data);

    this.setState({
      is_loaded: false
    });

    this.query_reddit(this.state.r_query, false);
  };

  handleNext = event => {
    event.preventDefault();
    const data = new FormData(event.target);
    console.log(data);

    this.setState({
      is_loaded: false
    });

    this.query_reddit(this.state.r_query, true);
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };
  get_input_form() {
    return (
      <div>
        <input
          type="text"
          onChange={this.handleChange}
          name={"r_query"}
          placeholder="Reddit Query"
          value={this.state.r_query}
        />
        <button name={"next"} onClick={this.handleNext}>
          Next
        </button>
        <button name={"search"} onClick={this.handleClick}>
          Search
        </button>
      </div>
    );
  }

  render() {
    return (
      <div>
        {" "}
        {this.get_input_form()}
        {this.get_display_elem()}
      </div>
    );
  }

  query_reddit = (q, after) => {
    let query = "q=" + q;
    let limit = "&limit=100";
    let sort = "&sort=new";
    let proxyurl = "https://cors-anywhere.herokuapp.com/";
    let base_uri = "https://www.reddit.com/";

    let search_filter = "search.json?";
    let nsfw_filter = "&include_over_18=1";
    let only_subreddit_filter = "&restrict_sr=0";
    let after_filter = "&after=";

    let mega_uri =
      base_uri +
      search_filter +
      query +
      nsfw_filter +
      limit +
      sort +
      only_subreddit_filter;

    if (after) {
      mega_uri = mega_uri + after_filter + this.state.r_next;
    }

    if (mega_uri) {
      const options = {
        method: "GET",
        mode: "no-cors"
      };
      fetch(proxyurl + mega_uri)
        .then(function(data) {
          return data.json();
        })
        .then(data => {
          console.log(data);
          console.log(mega_uri);

          /* lets get the images */
          //let imgz = data.data.children.map(elm => elm.data.url);
          let r_nxt = data.data.after;
          let vids = data.data.children.map(elm => {
            if (
              elm.data.url.endsWith(".mp4") ||
              elm.data.url.endsWith(".ogg") ||
              elm.data.url.endsWith(".webm")
            ) {
              return elm.data.url;
            }
            if (elm.data.url.endsWith(".gifv")) {
              return elm.data.url.replace(".gifv", ".mp4");
            }
            if (elm.data.url.startsWith("https://gfycat.com")) {
              return (
                elm.data.url.replace(
                  "https://gfycat.com",
                  "https://giant.gfycat.com"
                ) + ".webm"
              );
            }
          });

          vids = vids.filter(vid => vid);
          vids = vids.filter((vid, pos) => {
            return vids.indexOf(vid) == pos;
          });
          console.log(vids);
          this.setState({
            is_loaded: true,
            videos: vids,
            r_next: r_nxt
          });
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  };
}

export default VideoMbed;
