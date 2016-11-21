/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
            'allan, sans-serif': '<script src=\"http://use.edgefonts.net/allan:n7:all.js\"></script>',
            'amatic-sc, sans-serif': '<script src=\"http://use.edgefonts.net/amatic-sc:n4,n7:all.js\"></script>',
            'bubbler-one, sans-serif': '<script src=\"http://use.edgefonts.net/bubbler-one:n4:all.js\"></script>',
            'monofett, fantasy': '<script src=\"http://use.edgefonts.net/monofett:n4:all.js\"></script>',
            'codystar, sans-serif': '<script src=\"http://use.edgefonts.net/codystar:n4,n3:all.js\"></script>',
            'wire-one, sans-serif': '<script src=\"http://use.edgefonts.net/wire-one:n4:all.js\"></script>',
            'cedarville-cursive, cursive': '<script src=\"http://use.edgefonts.net/cedarville-cursive:n4:all.js\"></script>',
            'fredericka-the-great, sans-serif': '<script src=\"http://use.edgefonts.net/fredericka-the-great:n4:all.js\"></script>'        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
        ],
        symbols = {
            "stage": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'Symbol_5',
                            symbolName: 'Symbol_5',
                            type: 'rect',
                            rect: ['84', '85', '441', '229', 'auto', 'auto']
                        },
                        {
                            id: 'Symbol_1',
                            symbolName: 'Symbol_1',
                            type: 'rect',
                            rect: ['555', '36', '210', '340', 'auto', 'auto']
                        },
                        {
                            id: 'Symbol_4',
                            symbolName: 'Symbol_4',
                            type: 'rect',
                            rect: ['550', '200', '360', '162', 'auto', 'auto']
                        },
                        {
                            id: 'Symbol_3',
                            symbolName: 'Symbol_3',
                            type: 'rect',
                            rect: ['231', '-140', '332', '110', 'auto', 'auto']
                        },
                        {
                            id: 'Symbol_2',
                            symbolName: 'Symbol_2',
                            type: 'rect',
                            rect: ['225', '-161', '299', '177', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '550px', '400px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 3820,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "Symbol_1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'animao_perfil',
                            type: 'image',
                            rect: ['7px', '-6px', '210px', '340px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/anima%C3%A7%C3%A3o%20perfil.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '210px', '340px']
                        }
                    }
                },
                timeline: {
                    duration: 2423,
                    autoPlay: true,
                    data: [
                        [
                            "eid39",
                            "location",
                            -35,
                            34,
                            "easeInQuint",
                            "${animao_perfil}",
                            [[111.59, 164.77, 0, 0, 0, 0,0],[105.01, 170.01, 0, 0, 0, 0,8.41]]
                        ],
                        [
                            "eid37",
                            "location",
                            0,
                            2423,
                            "easeOutElastic",
                            "${animao_perfil}",
                            [[105.01, 170.01, 0, 0, 0, 0,0],[25.54, 165.73, 0, 0, 0, 0,79.59],[-429.72, 163.41, 0, 0, 0, 0,534.85]]
                        ]
                    ]
                }
            },
            "Symbol_2": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['-3px', '166px', 'auto', 'auto', 'auto', 'auto'],
                            id: 'Text',
                            text: '<p style=\"margin: 0px;\">​<span style=\"font-weight: 800; color: rgb(192, 96, 144);\">Hello!</span></p>',
                            font: ['allan, sans-serif', [142, 'px'], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'nowrap'],
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '299px', '177px']
                        }
                    }
                },
                timeline: {
                    duration: 2331,
                    autoPlay: true,
                    data: [
                        [
                            "eid8",
                            "left",
                            -35,
                            48,
                            "linear",
                            "${Text}",
                            '12px',
                            '-5px'
                        ],
                        [
                            "eid21",
                            "left",
                            13,
                            1955,
                            "linear",
                            "${Text}",
                            '-5px',
                            '11px'
                        ],
                        [
                            "eid22",
                            "left",
                            1968,
                            362,
                            "linear",
                            "${Text}",
                            '11px',
                            '-3px'
                        ],
                        [
                            "eid20",
                            "top",
                            1968,
                            362,
                            "linear",
                            "${Text}",
                            '0px',
                            '163px'
                        ],
                        [
                            "eid41",
                            "top",
                            2331,
                            0,
                            "easeOutElastic",
                            "${Text}",
                            '163px',
                            '166px'
                        ]
                    ]
                }
            },
            "Symbol_3": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['-9px', '218px', '332px', '110px', 'auto', 'auto'],
                            textStyle: ['', '', '', '', 'none'],
                            font: ['allan, sans-serif', [135, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            id: 'Text3',
                            text: '<p style=\"margin: 0px;\">​<span style=\"font-family: fredericka-the-great, sans-serif; font-size: 77px; color: rgb(36, 101, 110);\">welcome</span></p>',
                            align: 'left',
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '332px', '110px']
                        }
                    }
                },
                timeline: {
                    duration: 3176,
                    autoPlay: true,
                    data: [
                        [
                            "eid50",
                            "left",
                            2331,
                            845,
                            "linear",
                            "${Text3}",
                            '0px',
                            '-9px'
                        ],
                        [
                            "eid48",
                            "top",
                            2331,
                            845,
                            "linear",
                            "${Text3}",
                            '0px',
                            '218px'
                        ]
                    ]
                }
            },
            "Symbol_4": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['-372px', '-7px', '360px', '162px', 'auto', 'auto'],
                            textStyle: ['', '', '', '', 'none'],
                            font: ['allan, sans-serif', [66, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', ''],
                            id: 'Text5',
                            text: '<p style=\"margin: 0px;\">​<span style=\"font-family: amatic-sc, sans-serif; font-size: 88px; color: rgb(101, 54, 119);\">to my website!</span></p>',
                            align: 'left',
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '360px', '162px']
                        }
                    }
                },
                timeline: {
                    duration: 3820,
                    autoPlay: true,
                    data: [
                        [
                            "eid31",
                            "top",
                            3176,
                            644,
                            "linear",
                            "${Text5}",
                            '0px',
                            '-7px'
                        ],
                        [
                            "eid29",
                            "left",
                            3176,
                            644,
                            "linear",
                            "${Text5}",
                            '0px',
                            '-372px'
                        ]
                    ]
                }
            },
            "Symbol_5": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '441px', '229px', 'auto', 'auto'],
                            id: 'Rectangle2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(233,208,217,1.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '441px', '229px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("Anima%C3%A7ao%20perfil_edgeActions.js");
})("EDGE-238522821");
