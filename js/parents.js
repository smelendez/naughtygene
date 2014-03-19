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
        width: 480,  
        height: 256,
        url : 'videos/Kirstys Room.mp4.mp4',
        id: 'leadVideo',
        cue: 39,
            _children : [
            {
                type: 'video',
                id: 'mumword',
                width: 250,
                height: 145,
                xoffset: 420,
                delay: 2,
                url: 'videos/2_mother.mp4.mp4',
                stopothers: true,
                _children : [{
                    type: 'video',
                    id: 'momphone',
                    width: 250,
                    height: 145,
                    xoffset: 100,
                    delay: 2,
                    url: 'videos/mum_on_phone-school.mp4',
                    cue: 43,
                    _children : [{
                                type: 'video',
                                id: 'motherschoice',
                                xshift: 62,
                                width: 540,
                                height: 340,
                                xoffset: 50,
                                delay: 3,
                                hidenode: true,
                                url : "videos/6_mothers.mp4.mp4",
                                children: [{
                                    type: 'empty',
                                    id: 'stayathome',
                                    hidenode: true,
                                    xoffset: -100,
                                    yoffset: 105,
                                    width: 320,
                                    height: 100,
                                    _children : [{
                                        type: 'empty',
                                        taken: true,
                                        yoffset: 105,
                                        xoffset: 135,
                                        width: 0,
                                        height: 0,
                                        hideedge: true,
                                        id: "stayhomedot",
                                        children: [
                                                {
                                                        type: 'video',
                                                        width: 300,
                                                        height: 300,
                                                        url: 'videos/mum-home.mp4',
                                                        stopothers: true,
                                                        id: 'endVideo',
                                                        xoffset: 60,
                                                        position: 'center',
                                                        hidenode: true


                                                    }
                                        
                                        ]

                                    }]
                                    

                                },{
                                    type: 'empty',
                                    hidenode: true,
                                    id: 'boardingschool',
                                    width: 320,
                                    height: 100,
                                    _children : [{
                                        type: 'empty',
                                        taken: true,
                                        xoffset: 200,
                                        width: 0,
                                        height: 0,
                                        hideedge: true,
                                        id: "boardingschooldot",
                                        children: [{
                                            type: 'map_and_audio',
                                            width: 500,
                                            height: 500,
                                            baseurl : 'http://umap.fluv.io/en/map/travel_1508?scaleControl=0&miniMap=0&scrollWheelZoom=0&allowEdit=0#14/',
                                            startlat : 54.7785,
                                            startlon : -1.5710,
                                            audiourl: 'audio/Tramporgel School.mp3',
                                            id: 'boardingschoolmap',
                                            xoffset: -10,
                                            position: 'center',
                                            hidenode: true,
                                            "coordinates": [
                                              [
                                                -1.571044921875,
                                                54.77851410375888
                                              ],
                                              [
                                                -1.531219482421875,
                                                54.77217736682661
                                              ],
                                              [
                                                -1.51336669921875,
                                                54.73810039762111
                                              ],
                                              [
                                                -1.522979736328125,
                                                54.72382710216374
                                              ],
                                              [
                                                -1.501007080078125,
                                                54.702407731003355
                                              ],
                                              [
                                                -1.4996337890624998,
                                                54.67541909189064
                                              ],
                                              [
                                                -1.5106201171875,
                                                54.65317967568608
                                              ],
                                              [
                                                -1.539459228515625,
                                                54.59354980818523
                                              ],
                                              [
                                                -1.5985107421875,
                                                54.55852626350579
                                              ],
                                              [
                                                -1.6204833984374998,
                                                54.52028442493215
                                              ],
                                              [
                                                -1.621856689453125,
                                                54.50752918084323
                                              ],
                                              [
                                                -1.674041748046875,
                                                54.46285445402037
                                              ],
                                              [
                                                -1.66168212890625,
                                                54.38935426009769
                                              ],
                                              [
                                                -1.583404541015625,
                                                54.32853723970533
                                              ],
                                              [
                                                -1.558685302734375,
                                                54.296492110011854
                                              ],
                                              [
                                                -1.42547607421875,
                                                54.13508733112155
                                              ],
                                              [
                                                -1.3677978515625,
                                                53.996468534299375
                                              ],
                                              [
                                                -1.385650634765625,
                                                53.91323680284409
                                              ],
                                              [
                                                -1.34033203125,
                                                53.8468558161431
                                              ],
                                              [
                                                -1.3389587402343748,
                                                53.80713881129993
                                              ],
                                              [
                                                -1.31561279296875,
                                                53.7819922767562
                                              ],
                                              [
                                                -1.275787353515625,
                                                53.76089000834015
                                              ],
                                              [
                                                -1.286773681640625,
                                                53.73084156491151
                                              ],
                                              [
                                                -1.286773681640625,
                                                53.708087916231406
                                              ],
                                              [
                                                -1.2634277343749998,
                                                53.671493758257235
                                              ],
                                              [
                                                -1.253814697265625,
                                                53.638938911890925
                                              ],
                                              [
                                                -1.22222900390625,
                                                53.60635892124217
                                              ],
                                              [
                                                -1.21124267578125,
                                                53.57620003591595
                                              ],
                                              [
                                                -1.207122802734375,
                                                53.53949129565805
                                              ],
                                              [
                                                -1.176910400390625,
                                                53.52071674896369
                                              ],
                                              [
                                                -1.176910400390625,
                                                53.50438429010248
                                              ],
                                              [
                                                -1.149444580078125,
                                                53.47905653761052
                                              ],
                                              [
                                                -1.15631103515625,
                                                53.440627539922914
                                              ],
                                              [
                                                -1.2799072265625,
                                                53.38906175871291
                                              ],
                                              [
                                                -1.289520263671875,
                                                53.34809202306839
                                              ],
                                              [
                                                -1.289520263671875,
                                                53.312006056326894
                                              ],
                                              [
                                                -1.316986083984375,
                                                53.25535521592485
                                              ],
                                              [
                                                -1.33209228515625,
                                                53.24549522839595
                                              ],
                                              [
                                                -1.322479248046875,
                                                53.207677555890015
                                              ],
                                              [
                                                -1.329345703125,
                                                53.15171197633301
                                              ],
                                              [
                                                -1.329345703125,
                                                53.11710851455023
                                              ],
                                              [
                                                -1.2785339355468748,
                                                53.067626642387374
                                              ],
                                              [
                                                -1.237335205078125,
                                                53.013957053795096
                                              ],
                                              [
                                                -1.234588623046875,
                                                52.99577682618081
                                              ],
                                              [
                                                -1.300506591796875,
                                                52.930430153993285
                                              ],
                                              [
                                                -1.303253173828125,
                                                52.88570596233458
                                              ],
                                              [
                                                -1.297760009765625,
                                                52.83098033990201
                                              ],
                                              [
                                                -1.31011962890625,
                                                52.806912406341766
                                              ],
                                              [
                                                -1.275787353515625,
                                                52.75624323962823
                                              ],
                                              [
                                                -1.286773681640625,
                                                52.70717921897978
                                              ],
                                              [
                                                -1.281280517578125,
                                                52.66722198537979
                                              ],
                                              [
                                                -1.231842041015625,
                                                52.64472997207245
                                              ],
                                              [
                                                -1.204376220703125,
                                                52.6130549393468
                                              ],
                                              [
                                                -1.1920166015625,
                                                52.59720882433758
                                              ],
                                              [
                                                -1.251068115234375,
                                                52.580522509085554
                                              ],
                                              [
                                                -1.295013427734375,
                                                52.56216022339713
                                              ],
                                              [
                                                -1.448822021484375,
                                                52.53376701989027
                                              ]
                                            ]


                                        }]

                                    }]

                                },{
                                    type: 'empty',
                                    hidenode: true,
                                    id: 'localschool',
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
                                        id: "localschooldot",
                                        children: [{
                                            type: 'video',
                                            width: 300,
                                            height: 300,
                                            url: 'videos/10_zoom_3.mp4.mp4',
                                            id: 'endVideo',
                                            xoffset: 60,
                                            position: 'center',
                                            hidenode: true


                                        }]

                                    }]


                                }]
                            }
                        ]

                    }]}

                
            ,

            {
                type: 'video',
                id: 'fatheroption',
                width: 250,
                height: 145,
                delay: 4,
                url : 'videos/2_father.mp4.mp4',
                _children : [{
                    type: 'video',
                    width: 250,
                    height: 145,
                    xoffset: 100,
                    url: 'videos/Father_workmen.mp4',
                    cue: 49,
                    _children : [{
                                            type: 'video',
                                            id: 'fatherchoices',
                                            xshift: 62,
                                            width: 540,
                                            height: 340,
                                            delay: 2,
                                            xoffset: 50,
                                            hidenode: true,
                                            stopothers: true,
                                            url : "videos/6_fathers.mp4.mp4",
                                            children: [{
                                                type: 'empty',
                                                id: 'taketest',
                                                hidenode: true,
                                                xoffset: -100,
                                                yoffset: 30,
                                                width: 320,
                                                height: 100,
                                                _children : [{
                                                    type: 'empty',
                                                    taken: true,
                                                    yoffset: 21,
                                                    xoffset: 80,
                                                    width: 0,
                                                    height: 0,
                                                    hideedge: true,
                                                    id: "taketestdot",
                                                    children: [{
                                                        type: 'video',
                                                        width: 300,
                                                        height: 300,
                                                        url: 'videos/take_test.mp4',
                                                        id: 'endVideo',
                                                        xoffset: 60,
                                                        position: 'center',
                                                        hidenode: true

                                                    }]

                                                }]
                                                

                                            },{
                                                type: 'empty',
                                                hidenode: true,
                                                id: 'notest',
                                                width: 320,
                                                height: 100,
                                                yoffset: -30,
                                                _children : [{
                                                    type: 'empty',
                                                    taken: true,
                                                    xoffset: 185,
                                                    yoffset: -30,
                                                    width: 0,
                                                    height: 0,
                                                    id: "notestdot",
                                                    hideedge: true,
                                                    children: [{
                                                        type: 'video',
                                                        width: 300,
                                                        height: 300,
                                                        url: 'videos/roulette.mp4.mp4',
                                                        id: 'endVideo',
                                                        xoffset: 60,
                                                        position: 'center',
                                                        hidenode: true

                                                    }]

                                                }]

                                            }]


                                            
                                        }
                                ]

                            }]}

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
                        pop.play();
                        setTimeout(function(){
                            pop.pause();
                            setTimeout(function(){
                                pop.play();
                            }, delay);
                        }, 10);
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

                    case 'map_and_audio':
                        var frag = '<div style="display:none" id="' + d.id + '" class="map_and_audio">';
                        //frag += '<iframe id="iframe-' + d.id + '" src="' + d.baseurl + d.startlat + '/' + d.startlon + '" scrolling="no" frameborder="no"';
                        //frag += ' height="' + d.height + '" width="' + d.width + '">';
                        //frag += '</iframe>'; 
                        frag += '</div>'
                        $('body').append(frag);
                        var $div = $('#' + d.id);
                        var $iframe = $('#iframe-' + d.id);

                        $div.css({
                            position: 'absolute',
                            left: d.y,
                            top: d.x - d.height / 2,
                            height: d.height + 'px',
                            width: d.width + 'px',
                            display: 'block',
                            'z-index': 200
                        });
                        _.each(pops, function(pop){
                            pop.pause();
                        });
                        
                        var map = new L.Map(d.id, {
                            center: new L.LatLng (d.startlat, d.startlon),
                            zoom: 6,
                            maxZoom: 6,
                            minZoom:6 
                            
                        });
                        var layer = L.tileLayer('http://{s}.tile.stamen.com/toner-lite/{z}/{x}/{y}.png', {
                            'attribution' : "Map tiles by Stamen"

                        }).addTo(map);
                        d.coordinates = _.map(d.coordinates, function(x) {
                            return new L.LatLng(x[1], x[0]);
                        });
                        var line = new L.polyline(d.coordinates, {color: 'red'});
                        line.addTo(map);
                        map.addLayer(line);
                        var animatedMarker = L.animatedMarker(line.getLatLngs(), {
                            autoStart: true,
                            interval: 200,
                            distance: 2000
                        });

                        map.addLayer(animatedMarker);
                        frag = '<audio id="audio-' + d.id + '">';
                        frag += '<source src="' + d.audiourl + '" type="audio/mp3">';
                        frag += '</audio>';
                        $('body').append(frag);
                        var pop = Popcorn('#audio-' + d.id);
                        pops.push(pop);
                        pop.play();

                        
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
