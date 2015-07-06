jsPlumb.ready(function () {



    jsPlumb.importDefaults({
        DragOptions: {cursor: 'pointer'},
        PaintStyle: {strokeStyle: '#666'},
        EndpointStyle: {width: 20, height: 16, strokeStyle: '#666'},
        Endpoint: "Rectangle",
        Anchors: ["TopCenter"]
    });




    var exampleEndpoint1 = {
        isSource: true,
        isTarget: true,
        scope: "me",
        maxConnections: 5

    };




    jsPlumb.addEndpoint("state1", exampleEndpoint1); 
    jsPlumb.addEndpoint("state2", exampleEndpoint1); 
    jsPlumb.addEndpoint("state3", exampleEndpoint1); 
    jsPlumb.addEndpoint("state4", exampleEndpoint1);
    jsPlumb.addEndpoint("state5", exampleEndpoint1);


});
