import * as d3 from 'd3'
import { useEffect, useRef } from "react";

const FirstChart = ({data})=>{

    const svgRef = useRef(null);
    useEffect(() => {
      const svg = d3.select(svgRef.current);
      const width = svg.attr('width');
      const height = svg.attr('height');
  
      // Define scales for x and y axis
      const xScale = d3.scaleBand()
        .domain(data.map(d => d.value))
        .range([0, width])
  
      const yScale = d3.scaleLinear()
        .domain([0, d3.max(data, d => d.value)])
        .range([height, 0]); // Invert scale for vertical bars
          
      // Create bars
      svg.selectAll('rect')
        .data(data)
        .enter()
        .append('rect')
        .attr('x', d => xScale(d.value))
        .attr('y', d => yScale(d.value))
        .attr('width', 12)
        .attr('height', d => height - yScale(d.value))
        .attr('fill', 'white')
        .attr('rx', 10)
        .attr('ry', 10);

  
    }, [data]);
  
    return (
    <>
        <div className="bg-gradient-to-tr from-[#313860] to-[#151928] w-[38vw] rounded-3xl p-2 max-h-[42vh]">
            <div className=" left-8 bottom-10">
                <ul className="text-2xl font-bold min-h-[38vh] flex flex-col justify-between">
                    <li className="text-white ">500</li>
                    <li className="text-white ">400</li>
                    <li className="text-white ">300</li>
                    <li className="text-white ">200</li>
                    <li className="text-white ">100</li>
                    <li className="text-white ">0</li>
                </ul>
            </div>
            <svg ref={svgRef} className="">
            </svg>
        </div>
    </>
     
    );
  };

export default FirstChart;




