$(document).ready(function(){
    var lastNode = null;
    var position = "";
    var depth = 0, maxDepth = 3;
    var pops = [];

    var images = {

    };
    var videos = {
        '/0/0' : 'videos/brain.ogv'
    };
    var styles = {
        '/0/0' : 'position: absolute; left: 430px; top: 42px; width: 100px',
        '/1/1' : 'position: absolute; left: 250px; top: 282px; -webkit-transform: rotate(180deg)'
    };
    var choices = {
        '/' : ['proceed'],
        '/0' : []
    };

    var endNode = {
        type: 'video',
        width: 300,
        height: 300,
        url: 'videos/7_zoom_1.mp4.mp4',
        id: 'endVideo',
        xoffset: 60,
        position: 'center',
        hidenode: true


    }
    var theTree = {
        type: 'video',
        width: 270,  
        height: 144,
        url : 'videos/1_car_memory.mp4.mp4',
        id: 'leadVideo',
        cue: 28,
        xshift: 180,
        _children : [
            {
                type: 'video',
                id: 'pathology',
                width: 185,
                height: 185,
                xoffset: 240,
                cue: 9,
                url: 'videos/2_pathology_heptagon.mp4.mp4',
                _children : [
                    {
                        type: 'video',
                        id: 'funding',
                        width: 220,
                        height: 308,
                        xoffset: 110,
                        yoffset: -10,
                        position: 'center',
                        url: 'videos/4_app_1.mp4.mp4',
                        cue: 22,
                        stopothers: true,
                        _children : [
                            {
                                type: 'video',
                                id: 'researchvid',
                                //xshift: 79,
                                width: 190,
                                height: 125,
                                xoffset: 89,
                                hidenode: true,
                                url : "videos/6_researches_1.mp4.mp4",
                                children: [{
                                    type: 'empty',
                                    id: 'neuronloss',
                                    hidenode: true,
                                    hideedge:true,
                                    xoffset: -300,
                                    yoffset: 105,
                                    width: 320,
                                    height: 100,
                                    _children : [{
                                        type: 'empty',
                                        taken: true,
                                        yoffset: 105,
                                        xoffset: 155,
                                        width: 0,
                                        height: 0,
                                        hideedge: true,
                                        id: "neuronaldot",
                                        children: [
        {
                type: 'video',
                width: 300,
                height: 300,
                url: 'videos/8_zoom_1.mp4.mp4',
                id: 'endVideo',
                xoffset: -195,
                position: 'center',
                hidenode: true,
                hideedge :true


            }
                                        
                                        ]

                                    }]
                                    

                                },{
                                    type: 'empty',
                                    hidenode: true,
                                    hideedge: true,
                                    id: 'gliosis',
                                    width: 320,
                                    height: 100,
                                    _children : [{
                                        type: 'empty',
                                        taken: true,
                                        xoffset: 200,
                                        width: 0,
                                        height: 0,
                                        hideedge: true,
                                        hidenode: true,
                                        id: "reactivedot",
                                        children: [{
                                            type: 'video',
                                            width: 300,
                                            height: 300,
                                            url: 'videos/9_zoom_2.mp4.mp4',
                                            id: 'endVideo',
                                            xoffset: -195,
                                            position: 'center',
                                            hidenode: true,
                                            hideedge: true


                                        }]

                                    }]

                                },{
                                    type: 'empty',
                                    hidenode: true,
                                    hideedge: true,
                                    id: 'storage',
                                    yoffset: -105,
                                    width: 320,
                                    height: 100,
                                    _children : [{
                                        type: 'empty',
                                        taken: true,
                                        xoffset: 200,
                                        yoffset: -105,
                                        width: 0,
                                        height: 0,
                                        hideedge: true,
                                        id: "storagedot",
                                        children: [{
                                            type: 'video',
                                            width: 300,
                                            height: 300,
                                            url: 'videos/10_zoom_3.mp4.mp4',
                                            id: 'endVideo',
                                            xoffset: -195,
                                            position: 'center',
                                            hidenode: true,
                                            hideedge :true


                                        }]

                                    }]


                                }]
                            }
                        ]

                    }

                ]
            },

            {
                type: 'video',
                id: 'therapy',
                delay: 2,
                width: 185,
                height: 185,
                cue: 12,
                url: 'videos/3_therapy_heptagon.mp4.mp4',
                _children : [
                    {
                        type: 'video',
                        id: 'funding',
                        width: 600,
                        height: 842,
                        xoffset: 150,
                        position: 'center',
                        url: 'videos/5_app_2.mp4.mp4',
                        cue: 22,
                        stopothers: true,
                        _children : [
                                    {
                                        type: 'video',
                                        id: 'researchvid',
                                        xshift: 62,
                                        width: 540,
                                        height: 340,
                                        xoffset: 320,
                                        hidenode: true,
                                        url : "videos/7_researches 2.mp4.mp4",
                                        children: [{
                                            type: 'empty',
                                            id: 'genetherapy',
                                            hidenode: true,
                                            xoffset: -100,
                                            yoffset: 30,
                                            width: 320,
                                            height: 100,
                                            _children : [{
                                                type: 'empty',
                                                taken: true,
                                                yoffset: 21,
                                                xoffset: 130,
                                                width: 0,
                                                height: 0,
                                                hideedge: true,
                                                id: "genedot",
                                                children: [{
                                                    type: 'video',
                                                    width: 300,
                                                    height: 300,
                                                    url: 'videos/11_zoom_4.mp4.mp4',
                                                    id: 'endVideo',
                                                    xoffset: 60,
                                                    position: 'center',
                                                    hidenode: true

                                                }]

                                            }]
                                            

                                        },{
                                            type: 'empty',
                                            hidenode: true,
                                            id: 'drugintervention',
                                            width: 320,
                                            height: 100,
                                            yoffset: -30,
                                            _children : [{
                                                type: 'empty',
                                                taken: true,
                                                xoffset: 210,
                                                yoffset: -30,
                                                width: 0,
                                                height: 0,
                                                id: "drugdot",
                                                hideedge: true,
                                                children: [{
                                                    type: 'video',
                                                    width: 300,
                                                    height: 300,
                                                    url: 'videos/12_zoom_5.mp4.mp4',
                                                    id: 'endVideo',
                                                    xoffset: 60,
                                                    position: 'center',
                                                    hidenode: true

                                                }]

                                            }]

                                        }]


                                        }]
                                    }
                                ]

                            }

                        ]

                    };


    function drawTree(){
        var i = 0,
            margin = [20,120,20,120],
            width = $('body').width() - margin[1] - margin[3],
            height = $(window).height() - margin[0] - margin[2];

        var xoffsets = 0;


        var columnWidth =  165;

        var tree = d3.layout.tree().size([height, width]);
        var duration = 900;

        var diagonal = d3.svg.diagonal()
            .projection(function(d) {return [d.y, d.x]; });
        var line = d3.svg.line()
            .x(function(d){ return d.y;});

        var vis = d3.select("#constellation").append("svg:svg")
            .attr("width", width + margin[1] + margin[3])
            .attr("height", height)
            .append("svg:g")
            //.attr("transform", "translate(" + margin[3] + "," + margin[0] + ")");
            ;

        var centerPos = null;

        function update(source){
            var nodes = tree.nodes(theTree);
            

            nodes.forEach(function(d) {
                d.y = (d.depth) * columnWidth + columnWidth / 2;
                if (_.has(d, 'x0'))
                {
                    d.x = d.x0;
                    d.y = d.y0;
                }
            
                if (!centerPos) {
                    centerPos = d.x;
                }
                if (d.depth == 0)
                {
                    d.y = 425;

                }
            
            });
             


            var node = vis.selectAll("g.node")
                .data(nodes, function(d) { return d.id || (d.id = ++i);});

            node.attr("class", function(d) {return "node " + (d.taken ? "taken" : "nottaken") });
            var nodeEnter = node.enter().append("svg:g")
                .attr("class", function(d) {if (d.hidenode) {return "node hidenode";} return "node " + (d.taken ? "taken lastnode" : "nottaken") })
                .each(function(d, i) {
                    d.x = d.x * height / 2 / centerPos; 
                    d.y = (d.depth) * columnWidth + columnWidth / 2 + xoffsets; 
                    if (d.depth == 0)
                    {
                        d.y = 425;
                    }
                    if (d.yoffset) {
                        d.x += d.yoffset;

                    }

                    if (_.has(d, 'position'))
                    {
                        if (d.position == 'center')
                        {
                            d.x = height / 2;

                        }
                    }

                    if (_.has(d, 'xoffset'))
                    {
                        xoffsets += d.xoffset;
                        d.y += d.xoffset;
                    }
                    switch (d.type) {
                    case 'video':
                            
                        if (_.has(d, 'cue'))
                        {
                            var frag = '<div id="' + d.id + '" style="cursor:pointer"> <video width="' + d.width + '" height="' + d.height + '"  id="video-' + d.id + '" ';
                            if (_.has(d, 'loop'))
                            {
                                frag += 'loop';
                            }
                            frag += '>';
                            frag += '<source type="video/ogg" src="' + d.url + '" />';
                            frag += '</video>';
                            frag += '<div id="video-wrapper-'+ d.id +'" style="top:0; position:absolute;z-index:15; width: 100%; height: 100%"</div>';
                            $('body').append(frag);
                            var pop = Popcorn('#video-' + d.id);
                            if (d.stopothers){
                                _.each(pops, function(p){
                                    p.pause();
                                });
                            }
                            pops.push(pop);
                            var cue = _.once(function(){
                                d.children = d._children;
                                d.taken = true;
                                update(d);

                            });

                            pop.cue(d.cue, function(){setTimeout(cue, 3000)});
                            $('#video-wrapper-' + d.id).one('click', cue);
                        }
                        else
                        {
                            var frag = '<div id="' + d.id + '" style="cursor:pointer"> <video width="' + d.width + '" height="' + d.height + '"  id="video-' + d.id + '" ';
                            if (_.has(d, 'loop'))
                            {
                                frag += 'loop';
                            }
                            frag += '>';
                            frag += '<source type="video/ogg" src="' + d.url + '" />';
                            frag += '</video>';
                            frag += '<div id="video-wrapper-'+ d.id +'" style="top:0; position:absolute;z-index:15; width: 100%; height: 100%"</div>';
                            $('body').append(frag);
                            var pop = Popcorn('#video-' + d.id);
                            if (d.stopothers){
                                _.each(pops, function(p){
                                    p.pause();
                                });
                            }
                            pops.push(pop);
                            $('#video-wrapper-' + d.id).one('click', function(){
                                d.children = d._children;
                                d.taken = true;
                                update(d);

                            });

                        }
                        var $video = $('#' + d.id);
                        var delay = d.delay * 1000 || 1;
                        setTimeout(function(){
                            pop.play();
                        }, delay);

                        var left = columnWidth * d.depth + xoffsets;
                        if (_.has(d,'xshift'))
                        {
                            left += d.xshift;

                        }
                        $video.css({
                            position: 'absolute',
                            left: left +  'px',
                            top: d.x - d.height / 2

                        });
                        break;
                    case 'text':
                        var frag = '<div id="' + d.id + '" class="textNode">';
                        frag += d.text;
                        frag += '</div>';
                        $('body').append(frag);

                        var $text = $('#' + d.id);
                        $text.one('click', function(){
                            d.children = d._children;
                            d.taken = true;
                            update(d);

                        });

                        $text.css({
                            position: 'absolute',
                            left: d.y - $text.outerWidth() / 2,
                            top: d.x - $text.outerHeight()/ 2

                        });
                        break;

                    case 'empty':
                        var frag = '<div id ="' + d.id + '" class="emptyNode">';
                        frag += '</div>';
                        $('body').append(frag);
                        var $empty = $('#' + d.id);

                        $empty.css({
                            position: 'absolute',
                            left: d.y,
                            top: d.x - d.height / 2,
                            height: d.height + 'px',
                            width: d.width + 'px'
                            
                        });
                        $empty.one('click', function(){
                            d.children = d._children;
                            d.taken = true;
                            update(d);

                        });

                        break;
                        
                        

                    }

                });

            var nodeUpdate = node.transition().duration(duration)
                .attr("transform", function(d) { return "translate("  + d.y + "," + d.x + ")"; });

            node.select("circle")
                .attr("r", function(d) {return d.taken ? 4.5 : 2});



            
            nodeEnter.filter(function(d){return _.isUndefined(d.choice); }).append("svg:circle")
                .attr("r", function(d) {return d.taken ? 9.5 : 2})
                .attr("data-video", videos[position])
                .attr("data-image", images[position]);

            node.exit().remove();
            
            var link = vis.selectAll("path.link")
                .data(tree.links(nodes), function(d) { return d.target.id; });

            link.enter().insert("svg:path", "g")
                .attr("class", function(d){if (d.target.hideedge) {return "link hideedge";} return "link " +(d.target.taken ? " taken" : "nottaken");})

            link.attr("d", function(d){
                return 'M' + d.source.y + ',' + d.source.x + 'L' + d.target.y + ',' +  d.target.x;
            
            })
                .attr("class", function(d){if (d.target.hideedge) {return "link hideedge";} return "link " +(d.target.taken ? " taken" : "nottaken");});
            nodes.forEach(function(d) {
                d.x0 = d.x;
                d.y0 = d.y;

            });

        }
        update(theTree);
    }
    if(window.location.hash) {
        $('#choices').hide();

    }
    drawTree();
    $('body').on('click','#popupimg', function(){
        $('#popupimg').remove();

    });
    


});
