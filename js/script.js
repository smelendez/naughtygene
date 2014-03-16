$(document).ready(function(){
    var lastNode = null;
    var position = "";
    $('.choice').height(($('body').height() - $('#constellation').height()) / 2);

    var images = {
        'leftleft' : 'img/EXPORT_1.gif'
    };
    function drawTree(){
        var treeRoot = {};
        var i = 0,
            margin = [20,120,20,120],
            width = $('body').width() - margin[1] - margin[3],
            height = $('#constellation').height() - margin[0] - margin[2];

        var tree = d3.layout.tree().size([height, width]);

        var diagonal = d3.svg.diagonal()
            .projection(function(d) {return [d.y, d.x]; });

        var vis = d3.select("#constellation").append("svg:svg")
            .attr("width", width + margin[1] + margin[3])
            .attr("height", height+ margin[0] + margin[2])
            .append("svg:g")
            .attr("transform", "translate(" + margin[3] + "," + margin[0] + ")");

        function update(source){
            var nodes = tree.nodes(treeRoot);

            nodes.forEach(function(d) { d.y = d.depth * 180; });


            var node = vis.selectAll("g.node")
                .data(nodes, function(d) { return d.id || (d.id = ++i);});

            node.attr("class", function(d) {return "node " + (d.taken ? "taken" : "nottaken") });
            var nodeEnter = node.enter().append("svg:g")
                .each(function(d, i){if(d.taken) {lastNode = d; } })
                .attr("class", function(d) {return "node " + (d.taken ? "taken lastnode" : "nottaken") })
                .attr("transform", function(d) { return "translate(" + source.y0 + "," + source.x0 + ')';});

            var nodeUpdate = node.transition()
                .attr("transform", function(d) { return "translate("  + d.y + "," + d.x + ")"; });

            node.select("circle")
                .attr("r", function(d) {return d.taken ? 4.5 : 2});



            
            nodeEnter.append("svg:circle")
                .attr("r", function(d) {return d.taken ? 9.5 : 2});


            

            var link = vis.selectAll("path.link")
                .data(tree.links(nodes), function(d) { return d.target.id; });

            link.enter().insert("svg:path", "g")
                .attr("class", function(d){return "link " +(d.target.taken ? " taken" : "nottaken");})
                .attr("d", function(d) {
                    var o = {x: source.x0, y: source.y0};
                    return diagonal({source: o, target: o});

                }).attr("d", diagonal).transition().attr("d",diagonal);

            link.attr("d", diagonal);
            nodes.forEach(function(d) {
                d.x0 = d.x;
                d.y0 = d.y;

            });

        }
        function goLeft(){
            if (_.isUndefined(lastNode.children))
            {
                lastNode.children = [];
            }
            lastNode.children.push({
                name: String(i++),
                children: [],
                taken: true

            },{
                name: String(i++),
                children: [],
                taken: false


            });
            position += "left";
            update(lastNode);
            

        }
        $('#choiceleft').click(goLeft);
        $('#choiceright').click(goRight);
        function goRight(){
            if (_.isUndefined(lastNode.children))
            {
                lastNode.children = [];
            }
            lastNode.children.push({
                name: String(i++),
                children: [],
                taken: false

            },{
                name: String(i++),
                children: [],
                taken: true


            });
            position += "right";
            update(lastNode);
            


        }
        $.getJSON('data/flare.json', function(json){
            treeRoot = json;
            treeRoot.x0 = height / 2;
            treeRoot.y0 = 0;
            update(treeRoot);
            lastNode = treeRoot;

        });

    }
    drawTree();
    


});
