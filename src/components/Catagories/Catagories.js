import React, { Component } from "react";
import axios, { key } from "../../axios-data";
import { Container, ToggleButtonGroup, ToggleButton } from "react-bootstrap";

class Catagories extends Component {
  state = {
    dataCat: {}
  };

  getCatData = (axios, key) => {
    axios
      .get("genre/movie/list?api_key=" + key + "&language=en-US")
      .then(function(response) {
        let arr = [];
        // handle success
        Object.keys(response.data.genres).map(i => {
          arr.push({
            id: response.data.genres[i].id,
            name: response.data.genres[i].name
          });
        });
        this.setState({
          dataCat: arr
        });
      })
      .catch(function(error) {
        // handle error
        console.log(error);
      });
  };

  componentDidMount() {
    this.getCatData(axios, key);
  }
  render() {
    return (
      <Container className="mt-3 ">
        <ToggleButtonGroup type="checkbox" name="cat" vertical>
          {/* {this.state.dataCat} */}
        </ToggleButtonGroup>
      </Container>
    );
  }
}
export default Catagories;
