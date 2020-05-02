import React, { Component } from "react";
import Tour from "../Tour/Tour";
import { tourData } from "../tourData";
import "./TourList.scss";

class TourList extends Component {
  state = {
    tours: [],
  };

  componentDidMount() {
    this.setState({ tours: tourData });
  }

  handleDeleteTour = (id) => {
    const { tours } = this.state;
    const filteredTours = tours.filter((tour) => tour.id !== id);
    this.setState({ tours: filteredTours });
  };

  render() {
    const { tours } = this.state;

    return (
      <section className="tourlist">
        {tours.map((tour) => (
          <Tour key={tour.id} tour={tour} onDelete={this.handleDeleteTour} />
        ))}
      </section>
    );
  }
}

export default TourList;
