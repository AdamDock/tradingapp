import React from 'react';
import { VictoryChart, VictoryLine, VictoryZoomContainer, VictoryBrushContainer, VictoryAxis, VictoryTooltip } from 'victory';



class Chart extends React.Component {
    constructor() {
      super();
      this.state = {
        zoomDomain: { x: [new Date(1990, 1, 1), new Date(2024,1,1)] }
      };
    }
  
    handleZoom(domain) {
      this.setState({ zoomDomain: domain });
    }
  
    render() {
        const { data } = this.props;
      return (
        <div>
          <VictoryChart width={600} height={400} scale={{ x: "time" }}
            containerComponent={
              <VictoryZoomContainer
                zoomDimension="x"
                zoomDomain={this.state.zoomDomain}
                onZoomDomainChange={this.handleZoom.bind(this)}
              />
            }
          >
              <VictoryLine

                style={{
                  data: { stroke: "tomato" }
                }}
                data={data}
                x="x"
                y="y"

              />
  
            </VictoryChart>
            <VictoryChart
              padding={{ top: 0, left: 50, right: 50, bottom: 30 }}
              width={600} height={100} scale={{ x: "time" }}
              containerComponent={
                <VictoryBrushContainer
                  brushDimension="x"
                  brushDomain={this.state.zoomDomain}
                  onBrushDomainChange={this.handleZoom.bind(this)}
                />
              }
            >
              <VictoryAxis
                tickFormat={(x) => new Date(x).getFullYear()}
              />
              <VictoryLine
                style={{
                  data: { stroke: "tomato" }
                }}
                data={data}
                x="x"
                y="y"
              />
            </VictoryChart>
        </div>
      );
    }
  }
  
    export default Chart;