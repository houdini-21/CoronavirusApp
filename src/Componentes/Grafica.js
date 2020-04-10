import React from "react";
import { Doughnut } from "react-chartjs-2";

class Grafica extends React.Component {
  render() {
    const muertes = this.props.data.data.Deaths;
    const confirmados = this.props.data.data.Confirmed;
    const recuperados = this.props.data.data.Recovered;

    const data = {
      datasets: [
        {
          data: [confirmados, muertes, recuperados],
          backgroundColor: ["#00D1ED", "#ED2C0C", "#ABED0C"],
          hoverBackgroundColor: ["#00D1ED", "#ED2C0C", "#ABED0C"]
        }
      ],
      labels: ["Contagiados", "Muertes", "Recuperados"]
    };

    return (
      <div>
        <Doughnut
          data={data}
          options={{
            legend: {
              position: "right"
            }
          }}
        />
      </div>
    );
  }
}

export default Grafica;
