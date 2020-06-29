import React, { Component } from "react";
import { Pie } from "react-chartjs-2";
import axios from "axios";

class Chart extends Component {
  constructor(props) {
    super(props);

    this.state = {
        // chartData: this.props.chartData
        chartData: {}
    };
  }

  componentDidMount() {
    this.getData()
  }

  componentDidUpdate(prevProps) {
    if(prevProps.isDone !== this.props.isDone) {
      this.getData()
    }
  }

  componentWillUnmount() {
    this.setState({chartData: {} })
  }

  getData = () => {
    axios.get('/api/progress')
    .then((res) => {
      console.log(res)
      this.setState({
        chartData: {
          labels: ['Affirmation', 'Gifts', 'Quality Time', 'Service', 'Touch'],
              datasets: [
                  {
                      label: 'Love Language Goals',
                      data: [
                          res.data[0].count,
                          res.data[1].count,
                          res.data[2].count,
                          res.data[3].count,
                          res.data[4].count
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
    })
    })
  }

  render() {
    return (
      <div className="chart"
            style={{
              height:"350px",
              width: "350px",
              padding: "10px",
              marginTop: "35px",
            }}>
        <Pie
          data={this.state.chartData}
          options={{maintainAspectRatio: false}}
        />
      </div>
    );
  }
}

export default Chart;
