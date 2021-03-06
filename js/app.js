$(document).foundation();

// $(window).load(function() {
//   $("body").velocity("transition.slideBigIn", { duration: 500 });
//   $("section").velocity("transition.slideDownBigIn", { duration: 500 });
// });

// ======================================
// Line Art
// ======================================

/*
 * Lazy Line Painter - Path Object
 * Generated using 'SVG to Lazy Line Converter'
 *
 * http://lazylinepainter.info
 * Copyright 2013, Cam O'Connell
 *
 */

var pathObj = {
    "chuck": {
        "strokepath": [
            {
                "path": "M34.775,28.829c0.235,1.773,0.512,3.817,0.359,6.022c1.984-0.372,7.241-1.071,12.959,0.549  c0,0,1.041,0.298,1.487,0.298h0.84c0.446,0,1.487-0.298,1.487-0.298c5.717-1.62,10.974-0.92,12.958-0.549  c-0.153-2.205,0.124-4.248,0.359-6.021c0.079-0.592,0.124-1.188,0.075-1.787c-0.09,4.438-6.901,8.023-15.3,8.023  c-8.399,0-15.212-3.586-15.299-8.026C34.651,27.64,34.696,28.236,34.775,28.829z",
                "duration": 800
            },
            {
                "path": "M10.935,87.918c0,0.165-0.413,3.502-0.862,7.082h9.132l-5.114-22.324C14.091,72.676,10.935,87.557,10.935,87.918z",
                "duration": 600
            },
            {
                "path": "M89.065,87.918c0-0.361-3.156-15.242-3.156-15.242L80.794,95h9.132C89.478,91.42,89.065,88.083,89.065,87.918z",
                "duration": 600
            },
            {
                "path": "M79.581,68.077l-5.591-1.262l-1.624-1.353l-4.239-1.533l-1.999-0.556c0,0-0.291,15.458-16.128,22.691  c-15.838-7.232-16.129-22.691-16.129-22.691l-1.998,0.556l-4.239,1.533l-1.625,1.353l-5.591,1.262l-4.959,3.969  c0,0,4.869,21.464,4.959,21.825c0.015,0.058,0.111,0.475,0.262,1.13h58.638c0.151-0.655,0.247-1.072,0.262-1.13  c0.09-0.36,4.96-21.825,4.96-21.825L79.581,68.077z",
                "duration": 800
            },
            {
                "path": "M33.671,40.269l0.432,0.948c0.117-1.288,0.083-1.861,0.407-2.91c0.122-0.395,0.218-0.785,0.303-1.172  c0.171,0.059,0.414,0.19,0.591,0.645c0.296,0.769,1.487,4.288,1.487,4.288s0.669,2.355,4.3,2.825  c3.63,0.472,5.315-0.842,6.406-2.875c1.091-2.032,0.843-4.015,1.983-4.015h0.84c1.141,0,0.893,1.983,1.983,4.015  c1.09,2.032,2.775,3.346,6.406,2.875c3.631-0.47,4.3-2.825,4.3-2.825s1.191-3.519,1.487-4.288c0.177-0.454,0.419-0.585,0.59-0.645  c0.085,0.388,0.182,0.778,0.304,1.172c0.324,1.048,0.29,1.622,0.407,2.91l0.432-0.948c6.553-13.107,0.425-17.847,0.425-17.847  s-0.977-1.124-2.612-1.987C76.184,12.675,59.797,5,59.797,5s-4.267,5.433-12.555,5.273c-6.837-0.132-17.168,6.229-13.996,12.148  C33.246,22.421,27.118,27.161,33.671,40.269z M34.692,26.954c0-4.479,6.854-8.11,15.307-8.11c8.454,0,15.308,3.631,15.308,8.11  c0,0.03-0.008,0.058-0.008,0.088c0.049,0.6,0.004,1.195-0.075,1.787c-0.235,1.773-0.512,3.817-0.359,6.021  c-1.984-0.371-7.241-1.07-12.958,0.549c0,0-1.041,0.298-1.487,0.298h-0.84c-0.446,0-1.487-0.298-1.487-0.298  c-5.718-1.62-10.976-0.92-12.959-0.549c0.153-2.205-0.124-4.249-0.359-6.022c-0.079-0.593-0.124-1.189-0.075-1.79  C34.7,27.01,34.692,26.983,34.692,26.954z",
                "duration": 1800
            }
        ],
        "dimensions": {
            "width": 100,
            "height": 100
        }
    }
};


/*
 Setup and Paint your lazyline!
 */

 $(document).ready(function(){
 $('#chuck').lazylinepainter(
 {
    "svgData": pathObj,
    "strokeWidth": 1,
    "strokeColor": "#FFFFFF"
}).lazylinepainter('paint');
 });/*
 Setup and Paint your lazyline!
 */

 $(document).ready(function(){
 $('#chuck').lazylinepainter(
 {
    "svgData": pathObj,
    "strokeWidth": 1,
    "strokeColor": "#FFFFFF"
}).lazylinepainter('paint');
 });
