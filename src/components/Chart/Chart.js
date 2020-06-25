import React, { Component } from "react";
import { Pie } from "react-chartjs-2";

class Chart extends Component {
  constructor(props) {
    super(props);

    this.state = {
        // chartData: this.props.chartData
        chartData: {
          labels: ['Affirmation', 'Gifts', 'Quality Time', 'Service', 'Touch'],
              datasets: [
                  {
                      label: 'Population',
                      data: [
                          4,
                          2,
                          2,
                          5,
                          1
                      ],
                      backgroundColor: [
                          'rgba(0, 198, 248, 0.6)',
                          'rgba(0, 155, 245, 0.6)',
                          'rgba(246, 142, 206, 0.6)',
                          'rgba(230, 85, 174, 0.6)',
                          'rgba(255, 10, 160, 0.6)'
                      ],
                      
                  }
              ]
        }
    };
  }

  render() {
    return (
      <div className="chart">
        <Pie
          data={this.state.chartData}
          options={{maintainAspectRatio: false}}
        />
      </div>
    );
  }
}

export default Chart;
