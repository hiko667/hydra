import { useState } from "react";
import ForceGraph from "react-force-graph-2d";
import type {ProjectGraphData} from './Dashboard.tsx'

const fetchGraph = (graphId : string) => {
    return{
        "nodes": [ 
        { 
          "id": "id1",
          "name": "name1",
          "val": 1 
        },
        { 
          "id": "id2",
          "name": "name2",
          "val": 10 
        },
    ],
    "links": [
        {
            "source": "id1",
            "target": "id2"
        },
    ]
    } 
}
interface ProjectGraphProps {
    graph : ProjectGraphData;
    onNodeClicked : (nodeId : string) => void;
}

export default function ProjectGraph({onNodeClicked} : ProjectGraphProps){
    return(
        <>
            <ForceGraph graphData={fetchGraph("n")} nodeAutoColorBy={"group"} onNodeClick={(e) => onNodeClicked(e.id)}/>
        </>
    )
}
