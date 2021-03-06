import {Meteor} from "meteor/meteor";
// import {Mongo} from "meteor/mongo";
import axios from "axios";


if (Meteor.isServer) {
  /*Meteor.methods({
    "getData"() {
      return axios
        .get("https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=9b839194d31fa92107cbb9bd8994c792&text=cat&format=json&nojsoncallback=1")
        .then(data => {
          console.log("Got data", data.data);

          return data.data;
        });

    }
  });*/

  /*Meteor.methods({
    "getData"(search) {
      return axios
        .get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=491c766aeebbdf4c9c3b276591632e2c&text=${search.search}&sort=relevance&format=json&nojsoncallback=1`)
        .then(data => data.data);
    }
  });*/

  Meteor.methods({
    "getData"(search) {
      let colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
      let res = Promise.all(colors.map(c => (
        axios
          .get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=45da005011d13e201b877b4c6e5e87bc&text=${search.search}+${c}&sort=relevance&format=json&nojsoncallback=1`)
          .then(data => data.data))));
      console.log(res);
      return res;
    }
  });  
  // axios 自动 get json
}









