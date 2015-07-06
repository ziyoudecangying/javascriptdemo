jsPlumb.ready(function () {



    jsPlumb.importDefaults({
        DragOptions: {cursor: 'pointer'},
        PaintStyle: {strokeStyle: '#666'},
        EndpointStyle: {width: 20, height: 16, strokeStyle: '#666'},
        Endpoint: "Rectangle",
        Anchors: ["TopCenter"]
    });

    var exampleDropOptions = {
        hoverClass: "dropHover",
        activeClass: "dragActive"
    };

    var color1 = "#316b31";
    var exampleEndpoint1 = {
        endpoint: ["Dot", {radius: 11}],
        paintStyle: {fillStyle: color1},
        isSource: true,
        scope: "green dot",
        connectionStyle: {strokeStyle: color1, lineWidth: 6},
        connector: ["Bezier", {curviness: 63}],
        maxConnections: 1,
        isTarget: true,
        dropOptions: exampleDropOptions
    };

    var color2 = "rgba(229,219,61,0.5)";
    var exampleEndpoint2 = {
        endpoint: "Rectangle",
        anchor: "BottomLeft",
        paintStyle: {fillStyle: color2, opacity: 0.5},
        isSource: true,
        scope: "yellow dot",
        connectionStyle: {strokeStyle: color2, lineWidth: 4},
        connector: "Straight",
        maxConnections: 3,
        isTarget: true,
        dropOptions: exampleDropOptions,
        beforeDetach: function (conn) {
            return confirm("Detach connection?");
        },
        onMaxConnections: function (info) {
            alert("Cannot drop connection " + info.connection.id + " : maxConnections has been reached on Endpoint " + info.endpoint.id);
        }
    };

    var anchors = [
        [1, 0.2, 1, 0],
        [0.8, 1, 0, 1],
        [0, 0.8, -1, 0],
        [0.2, 0, 0, -1]];

    var maxConnectionsCallback = function (info) {
        alert("Cannot drop connection " + info.connection.id + " : maxConnections has been reached on Endpoint " + info.endpoint.id);
    };

    var e1 = jsPlumb.addEndpoint("state2", {anchor: "LeftMiddle"}, exampleEndpoint1);//将exampleEndpoint1类型的点绑定到id为state2的元素上  
    e1.bind("maxConnections", maxConnectionsCallback);//也可以在加到元素上之后绑定函数  

    jsPlumb.addEndpoint("state1", exampleEndpoint1);//将exampleEndpoint1类型的点绑定到id为state1的元素上  
    jsPlumb.addEndpoint("state3", exampleEndpoint2);//将exampleEndpoint2类型的点绑定到id为state3的元素上  
    jsPlumb.addEndpoint("state1", {anchor: anchors}, exampleEndpoint2);//将exampleEndpoint2类型的点绑定到id为state1的元素上，指定活动连接点  


});
