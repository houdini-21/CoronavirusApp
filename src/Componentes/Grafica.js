import React from "react";
import { Doughnut } from "react-chartjs-2";

class Grafica extends React.Component {
  render() {
    const muertes = this.props.data.muertes;
    const confirmados = this.props.data.confirmados;
    const recuperados = this.props.data.recuperados;

    const data = {
      datasets: [
        {
          data: [confirmados, muertes, recuperados],
          backgroundColor: ["#4f9da6", "#ff5959", "#ccda46"],
          hoverBackgroundColor: ["#4f9da6", "#ff5959", "#ccda46"]
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
