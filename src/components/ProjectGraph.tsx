import ForceGraph from "react-force-graph-2d";

function genRandomTree(N = 300, reverse = false) {
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

export default function ProjectGraph(){
    return(
        <>
            <ForceGraph graphData={genRandomTree()} nodeAutoColorBy={"group"} onNodeClick={() => console.log("aaa")}/>
        </>
    )
}
