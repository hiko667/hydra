import { useEffect, useState } from "react";
import { memo } from "react";
import ForceGraph, { type NodeObject } from "react-force-graph-2d";
import type {ProjectGraphData} from './Dashboard.tsx'
import { mock_graph, mock_graph1 } from "./mock_graph.ts";


const fetchGraph = (graphId? : number) => {
    let response : any;
    if(graphId===1 || graphId===2)
    graphId === 1 ? response =  mock_graph1 : response = mock_graph
    else
        response = mock_graph
    return response
}
interface ProjectGraphProps {
    graph : ProjectGraphData;
    isDarkMode : boolean;
    onNodeClicked : (nodeId : number, nodeName : string, nodeGroup : string) => void;
}

const ProjectGraph = memo( function ProjectGraph({graph, isDarkMode, onNodeClicked} : ProjectGraphProps){
    const [graphData, setGraphData] = useState(fetchGraph(graph.id));
    const handleNodeClicked = (e : NodeObject<any>) => {
        onNodeClicked(e.id as number, e.name as string, e.group as string)
    }
    useEffect(() => {
        setGraphData(fetchGraph(graph.id))
    }, [graph.id])

    return(
        <>
            <ForceGraph 
                graphData={graphData} 
                nodeAutoColorBy={"group"} 
                onNodeClick={(e) => handleNodeClicked(e)}
                nodeCanvasObject={(node, ctx, globalScale) => {
                    const label = node.name as string;
                    const fontSize = 20 / globalScale;
                    ctx.font = `${fontSize}px Sans-Serif`;

                    ctx.beginPath();
                    switch (node.group) {
                        case "body":
                            ctx.arc(node.x!, node.y!, 5, 0, 2 * Math.PI, false);
                            ctx.fillStyle = isDarkMode ? "#000000" : "#177b99"
                            break;
                        case "neck":
                            ctx.arc(node.x!, node.y!, 3, 0, 2 * Math.PI, false);
                            ctx.fillStyle = isDarkMode ? "#17c5c8" : "#174b5d"
                            break;
                        default:
                            ctx.arc(node.x!, node.y!, 1.5, 0, 2 * Math.PI, false);
                            ctx.fillStyle = isDarkMode ? "#ffffff" : "#000000"
                            break;
                    }
                    
                    
                    ctx.fill();
                    
                    ctx.textAlign = 'center';
                    ctx.textBaseline = 'middle';
                    ctx.fillStyle = isDarkMode ? "white" : "black";
                    ctx.fillText(label, node.x!, node.y! - 6);
                }}
                nodePointerAreaPaint={(node, color, ctx) => {
                    ctx.beginPath();
                    ctx.arc(node.x!, node.y!, 5, 0, 2 * Math.PI, false);
                    ctx.fillStyle = color;
                    ctx.fill();
                }}
            />
        </>
    )
});

export default ProjectGraph;