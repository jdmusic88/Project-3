console.log("hello");
console.log(state_sources);
console.log(residential);

//checking state_sources index numbers
var seventeenStates1 = state_sources["2017"];
var seventeenStates = Object.values(seventeenStates1);
console.log(seventeenStates);

var seventeenResidential = residential["2017"];
//console.log(seventeenResidential);
var Residential1 = Object.values(seventeenResidential);
var Residential = Residential1.slice(0,51);

var seventeenCommercial = commercial["2017"];
//console.log(seventeenCommercial);
var Commercial1 = Object.values(seventeenCommercial);
var Commercial = Commercial1.slice(0,51);

var seventeenIndustrial = industrial["2017"];
//console.log(seventeenIndustrial);
var Industrial1 = Object.values(seventeenIndustrial);
var Industrial = Industrial1.slice(0,51);

var seventeenTransport = transportation["2017"];
//console.log(seventeenTransport);
var Transportation1 = Object.values(seventeenTransport);
var Transportation = Transportation1.slice(0,51);

var states = residential.State;
var state_list = Object.values(states);
//console.log(state_list);

//===================================Stacked Bar Chart Vertical===========================================

var trace1 = {
    x: state_list,
    y: Residential,
    name: 'Residential',
    type: 'bar',
    transforms: [{
      type: 'sort',
      target: 'y',
      order: 'descending'
    }],
    marker: {
      color: "1A5276"
    }
    //orientation: 'h'
  };
  
  var trace2 = {
    x: state_list,
    y: Commercial,
    name: 'Commercial',
    type: 'bar',
    transforms: [{
      type: 'sort',
      target: 'y',
      order: 'descending'
    }],
    marker: {
      color: "#5499C7"
    }
    //orientation: 'h'
  };

  var trace3 = {
    x: state_list,
    y: Industrial,
    name: 'Industrial',
    type: 'bar',
    transforms: [{
      type: 'sort',
      target: 'y',
      order: 'descending'
    }],
    marker: {
      color: "#A3E4D7"
    }
    //orientation: 'h'
  };

  var trace4 = {
    x: state_list,
    y: Transportation,
    name: 'Transportation',
    type: 'bar',
    transforms: [{
      type: 'sort',
      target: 'y',
      order: 'descending'
    }],
    marker: {
      color: "#7DCEA0"
    }
    //orientation: 'h'
  };
  
  var data = [trace1, trace2, trace3, trace4];
  
  var layout = {
    barmode: 'stack',
    title: {
      text:'Energy Consumption in the United States',
      font: {
        family: 'Courier New, monospace',
        size: 24,
      },
    },
    xaxis:{
      title: 'State'
    },
    yaxis: {
      title: 'Billion BTUs'
    },
    width: 1200,
    height: 550
  };
  
  Plotly.newPlot("bar", data, layout);

  //================================Function to Update with Dropdown===================================

  function getData() {
    //define the dropdown menu
    var dropdownMenu = d3.select("#selDataset");

    // Assign the value of the dropdown menu option to a variable
    var dataset = dropdownMenu.property("value");
    console.log(dataset);

    var selectedResidential = residential[dataset];
    var selectedResidential1 = Object.values(selectedResidential);
    var Residential = selectedResidential1.slice(0,51); 
    //console.log(Residential);

    var selectedCommercial = commercial[dataset];
    var selectedCommercial1 = Object.values(selectedCommercial);
    var Commercial = selectedCommercial1.slice(0,51);

    var selectedIndustrial = industrial[dataset];
    var selectedIndustrial1 = Object.values(selectedIndustrial);
    var Industrial = selectedIndustrial1.slice(0,51);

    var selectedTransport = transportation[dataset];
    var selectedTransportation1 = Object.values(selectedTransport);
    var Transportation = selectedTransportation1.slice(0,51);

    var states = residential.State;
    var state_list = Object.values(states).slice(0,51);

    var trace1 = {
      x: state_list,
      y: Residential,
      name: 'Residential',
      type: 'bar',
      transforms: [{
        type: 'sort',
        target: 'y',
        order: 'descending'
      }],
      //orientation: 'h'
    };
    
    var trace2 = {
      x: state_list,
      y: Commercial,
      name: 'Commercial',
      type: 'bar',
      transforms: [{
        type: 'sort',
        target: 'y',
        order: 'descending'
      }],
      //orientation: 'h'
    };
  
    var trace3 = {
      x: state_list,
      y: Industrial,
      name: 'Industrial',
      type: 'bar',
      transforms: [{
        type: 'sort',
        target: 'y',
        order: 'descending'
      }],
      //orientation: 'h'
    };
  
    var trace4 = {
      x: state_list,
      y: Transportation,
      name: 'Transportation',
      type: 'bar',
      transforms: [{
        type: 'sort',
        target: 'y',
        order: 'descending'
      }],
      //orientation: 'h'
    };
    
    var data = [trace1, trace2, trace3, trace4];
    
    var layout = {
      barmode: 'stack',
      title: {
        text:'Energy Consumption in the United States',
        font: {
          family: 'Courier New, monospace',
          size: 24,
        },
      },
      xaxis:{
        title: 'State'
      },
      yaxis: {
        title: 'Billion BTUs'
      },
      width: 1200,
      height: 550
    };
    
    Plotly.newPlot("bar", data, layout);
  };

  //==============================Create Line Plot Using Toast====================================
  year_list = ['1960', '1961', '1962', '1963', '1964', '1965', '1966',
    '1967', '1968', '1969', '1970', '1971', '1972', '1973', '1974', '1975',
    '1976', '1977', '1978', '1979', '1980', '1981', '1982', '1983', '1984',
    '1985', '1986', '1987', '1988', '1989', '1990', '1991', '1992', '1993',
    '1994', '1995', '1996', '1997', '1998', '1999', '2000', '2001', '2002',
    '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011',
    '2012', '2013', '2014', '2015', '2016', '2017'];
  
  var finalResidential = [];
  console.log(finalResidential);
  var finalIndustrial = [];
  console.log(finalIndustrial)
  var finalTransportation = [];
  console.log(finalTransportation);
  var finalCommercial = [];
  console.log(finalCommercial);

  for (var i = 0; i < year_list.length; i++) {
    var residential1 = residential[year_list[i]]; 
    var Residential1 = Object.values(residential1);
    var Residential2 = Residential1.slice(51,52);
    finalResidential.push(Residential2[0]);


    var commercial1 = commercial[year_list[i]]; 
    var Commercial1 = Object.values(commercial1);
    var Commercial2 = Commercial1.slice(51,52);
    finalCommercial.push(Commercial2[0]);

    var industrial1 = industrial[year_list[i]]; 
    var Industrial1 = Object.values(industrial1);
    var Industrial2 = Industrial1.slice(51,52);
    finalIndustrial.push(Industrial2[0]);

    var transportation1 = transportation[year_list[i]]; 
    var Transportation1 = Object.values(transportation1);
    var Transportation2 = Transportation1.slice(51,52);
    finalTransportation.push(Transportation2[0]);
  };

  var percentResidential = [];
  console.log(percentResidential);
  var percentCommercial = [];
  console.log(percentCommercial);
  var percentIndustrial = [];
  console.log(percentIndustrial);
  var percentTransportation = [];
  console.log(percentTransportation);

  for (var i = 0; i < finalResidential.length; i++) {
      var total = finalResidential[i]+finalCommercial[i]+finalIndustrial[i]+finalTransportation[i];
      var percentRes = finalResidential[i]/total*100;
      percentResidential.push(percentRes); 
      var percentComm = finalCommercial[i]/total*100;
      percentCommercial.push(percentComm); 
      var percentInd = finalIndustrial[i]/total*100;
      percentIndustrial.push(percentInd); 
      var percentTrans = finalTransportation[i]/total*100;
      percentTransportation.push(percentTrans);
  };
  
  var container = document.getElementById('line2');
  var dataZ = {
    categories: year_list,
    series: [
        {
            name: 'Residential',
            data: percentResidential
        },
        {
            name: 'Commercial',
            data: percentCommercial
        },
        {
            name: 'Industrial',
            data: percentIndustrial
        },
        {
            name: 'Transportation',
            data: percentTransportation
        },
    ]
};
var options = {
    chart: {
        width: 1160,
        height: 540,
        title: 'Change in Energy Consumption in the United States'
    },
    yAxis: {
        title: 'Percentage of Total Energy',
    },
    xAxis: {
        title: 'Year',
        pointOnColumn: true,
        dateFormat: 'MMM',
        tickInterval: 'auto'
    },
    series: {
        showDot: false,
        zoomable: true
    },
    tooltip: {
        //suffix: '°C'
    },
    plot: {
        //bands: [
            //{
                //range: ['03/01/2016', '05/01/2016'],
                //color: 'gray',
                //opacity: 0.2
            //}
        //],
        lines: [
            {
                value: '03/01/2016',
                color: '#fa2828'
            }
        ]
    }
};
var theme = {
    series: {
        colors: [
            '#83b14e', '#458a3f', '#295ba0', '#2a4175', '#289399',
            '#289399', '#617178', '#8a9a9a', '#516f7d', '#dddddd'
        ]
    }
};
// For apply theme
// tui.chart.registerTheme('myTheme', theme);
// options.theme = 'myTheme';
var chart = tui.chart.lineChart(container, dataZ, options);
  


  //==================================Line Plot-Energy Types===============================================
//======================Create Placeholder Plotly Plot=====================================================
year_list = ['1960', '1961', '1962', '1963', '1964', '1965', '1966',
    '1967', '1968', '1969', '1970', '1971', '1972', '1973', '1974', '1975',
    '1976', '1977', '1978', '1979', '1980', '1981', '1982', '1983', '1984',
    '1985', '1986', '1987', '1988', '1989', '1990', '1991', '1992', '1993',
    '1994', '1995', '1996', '1997', '1998', '1999', '2000', '2001', '2002',
    '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011',
    '2012', '2013', '2014', '2015', '2016', '2017'];
traceA = {
  type: 'line',
  x: year_list,
  y: [1319.871, 1294.762, 1300.242, 1323.316, 1336.802, 1334.761, 1368.986, 1340.249, 1419.494, 1440.488, 1430.962, 1432.323, 1503.065, 1529.068, 1539.661, 1498.733, 1713.373, 1838.332, 2037.605, 2151.906, 2471.691, 2599.746, 2664.743, 2904.414, 2971.603, 3016.233, 2932.095, 2877.576, 3016.049, 3159.354, 2736.982, 2781.799, 2931.673, 2906.004, 3027.532, 3101.141, 3156.805, 3102.838, 2927.489, 2963.292, 3008.229, 2625.395, 2698.515, 2804.726, 3004.599, 3100.638, 3228.406, 3438.829, 3811.465, 3898.016, 4471.839, 4493.64, 4390.792, 4633.408, 4783.103, 4757.01, 4717.757, 4798.494],
  mode: 'lines',
  name: 'Biomass',
  line: {
    //color: 'rgb(219, 64, 82)',
    width: 3
  }
};

traceB = {
  type: 'line',
  x: year_list,
  y: [9830.513, 9618.013, 9904.585, 10414.512, 10967.543, 11582.398, 12145.291, 11917.043, 12337.535, 12383.168, 12268.895, 11603.202, 12109.53, 12960.121, 12651.009, 12655.613, 13575.89, 13907.111, 13769.684, 15041.652, 15460.982, 15937.724, 15269.049, 15867.06, 17013.578, 17540.071, 17240.884, 17949.877, 18885.663, 19055.165, 19167.682, 18989.14, 19117.802, 19836.126, 19903.559, 20098.843, 21002.157, 21443.603, 21583.324, 21582.103, 22575.538, 21906.355, 21902.852, 22322.634, 22464.302, 22793.45, 22444.214, 22747.914, 22382.816, 19691.342, 20828.382, 19663.856, 17380.923, 18038.771, 17996.577, 15548.985, 14227.138, 13839.632],
  mode: 'lines',
  name: 'Coal',
  line: {
    //color: 'rgb(219, 64, 82)',
    width: 3
  }
};

traceC = {
  type: 'line',
  x: year_list,
  y: [3991.686, 4044.624, 4266.259, 4352.755, 4371.22, 4519.117, 4644.739, 4765.724, 5094.19, 5244.026, 5401.004, 5657.916, 6210.091, 6574.759, 6267.211, 6061.326, 6679.498, 7125.886, 7296.139, 7039.256, 6110.279, 6014.173, 5678.583, 5719.725, 6065.095, 6097.767, 6196.291, 6328.356, 6655.121, 6711.705, 6422.08, 6209.922, 6350.84, 6466, 6717.543, 6811.839, 7168.372, 7297.919, 7351.882, 7586.69, 7927.311, 8170.353, 8019.781, 8340.797, 8641.615, 8744.885, 8830.605, 8858.242, 8346.459, 7656.512, 8010.589, 8211.183, 7897.088, 8051.055, 8492.328, 8402.506, 8169.609, 8262.728],
  mode: 'lines',
  name: 'Distillate Fuel Oil',
  line: {
    //color: 'rgb(219, 64, 82)',
    width: 3
  }
};

traceD = {
  type: 'line',
  x: year_list,
  y: [865.979, 891.189, 973.31, 1052.341, 1124.312, 1170.101, 1234.196, 1312.301, 1459.731, 1677.845, 1667.021, 1700.297, 1926.804, 1959.397, 1913.592, 1811.302, 1876.549, 1866.666, 1848.145, 2213.81, 2135.452, 2097.818, 2095.195, 1983.33, 2229.597, 2251.994, 2158.232, 2338.968, 2372.88, 2403.475, 2258.53, 2465.872, 2594.761, 2557.188, 2776.857, 2790.65, 2951.06, 2955.644, 2808.928, 3193.382, 3215.645, 2894.642, 3006.338, 2905.269, 2975.834, 2811.649, 2767.835, 2834.784, 2655.804, 2706.885, 2884.846, 2798.965, 2892.775, 3166.263, 3066.017, 3224.058, 3177.612, 3280.362],
  mode: 'lines',
  name: 'HGL',
  line: {
    //color: 'rgb(219, 64, 82)',
    width: 3
  }
};

traceE = {
  type: 'line',
  x: year_list,
  y: [1607.975, 1656.464, 1816.141, 1771.354, 1886.314, 2059.077, 2061.519, 2346.664, 2348.629, 2647.982, 2633.548, 2824.15, 2863.865, 2861.448, 3176.58, 3154.607, 2976.265, 2333.252, 2936.983, 2930.686, 2900.144, 2757.968, 3265.558, 3527.26, 3385.811, 2970.192, 3071.179, 2634.508, 2334.265, 2837.263, 3046.391, 3015.943, 2617.436, 2891.613, 2683.457, 3205.307, 3589.656, 3640.457, 3297.054, 3267.575, 2811.116, 2241.858, 2689.017, 2792.539, 2688.468, 2702.942, 2869.035, 2446.389, 2511.108, 2668.824, 2538.541, 3102.852, 2628.702, 2562.382, 2466.577, 2321.177, 2472.442, 2766.969],
  mode: 'lines',
  name: 'Hydroelectric Power',
  line: {
    //color: 'rgb(219, 64, 82)',
    width: 3
  }
};

traceF = {
  type: 'line',
  x: year_list,
  y: [738.522, 826.805, 976.887, 1043.682, 1120.761, 1214.502, 1353.654, 1670.229, 1941.094, 2016.832, 1972.743, 2060.819, 2140.842, 2167.221, 2030.373, 2047.083, 2025.995, 2126.482, 2163.806, 2203.632, 2190.406, 2062.194, 2071.522, 2140.915, 2413.72, 2496.888, 2682.354, 2842.819, 2981.766, 3058.904, 3129.491, 3025.005, 3001.33, 3028.007, 3154.499, 3132.195, 3274.239, 3308.167, 3356.783, 3461.781, 3580.35, 3425.975, 3340.318, 3265.457, 3382.535, 3474.752, 3379.382, 3357.61, 3192.839, 2883.274, 2962.87, 2949.817, 2901.435, 2968.557, 3042.091, 3204.168, 3349.876, 3481.346],
  mode: 'lines',
  name: 'Jet Fuel',
  line: {
    //color: 'rgb(219, 64, 82)',
    width: 3
  }
};

traceG = {
  type: 'line',
  x: year_list,
  y: [7630.802, 7751.568, 8050.79, 8309.962, 8464.411, 8805.625, 9218.658, 9506.785, 10114, 10595.275, 11090.916, 11531.738, 12259.336, 12797.127, 12534.588, 12797.511, 13415.29, 13760.444, 14210.988, 13487.461, 12647.895, 12630.56, 12537.986, 12696.942, 12867.019, 13097.625, 13486.741, 13815.858, 14105.067, 14050.036, 13871.812, 13780.951, 13972.523, 14141.364, 14359.802, 14680.047, 14967.231, 15126.904, 15559.439, 15888.68, 15990.592, 16201.234, 16618.766, 16715.286, 17022.752, 17022.388, 17058.027, 16859.024, 15999.412, 15801.249, 15570.293, 15110.405, 15021.605, 15240.281, 15361.358, 15788.432, 16050.927, 16002.227],
  mode: 'lines',
  name: 'Motor Gas excl Ethanol',
  line: {
    //color: 'rgb(219, 64, 82)',
    width: 3
  }
};

traceH = {
  type: 'line',
  x: year_list,
  y: [12385.366, 12926.392, 13730.841, 14419.107, 15297.642, 15779.457, 17005.781, 17964.988, 19204.569, 20657.964, 21692.71, 22365.248, 22682.497, 22595.346, 21729.561, 19977.076, 20381.227, 19972.477, 20067.662, 20687.615, 20226.934, 19749.623, 18367.053, 17212.02, 18389.567, 17713.531, 16603.236, 17646.792, 18460.278, 19607.316, 19627.801, 20033.047, 20723.809, 21255.357, 21757.307, 22720.621, 23151.345, 23372.324, 22911.552, 22925.26, 23815.293, 22747.645, 23513.541, 22822.564, 22927.283, 22567.132, 22225.318, 23670.821, 23836.273, 23421.003, 24568.039, 24953.771, 26075.691, 26788.768, 27376.838, 28179.686, 28392.79, 28042.043],
  mode: 'lines',
  name: 'Natural Gas',
  line: {
    //color: 'rgb(219, 64, 82)',
    width: 3
  }
};

traceI = {
  type: 'line',
  x: year_list,
  y: [6.026, 19.678, 26.394, 38.147, 39.819, 43.164, 64.158, 88.456, 141.534, 153.722, 239.347, 412.939, 583.752, 910.177, 1272.083, 1899.798, 2111.121, 2701.762, 3024.126, 2775.827, 2739.169, 3007.589, 3131.148, 3202.549, 3552.531, 4075.563, 4380.109, 4753.933, 5586.968, 5602.161, 6104.35, 6422.132, 6479.206, 6410.499, 6693.877, 7075.436, 7086.674, 6596.992, 7067.809, 7610.256, 7862.349, 8028.853, 8145.429, 7959.622, 8222.774, 8160.81, 8214.626, 8458.589, 8426.491, 8355.22, 8434.433, 8268.698, 8061.822, 8244.433, 8337.559, 8336.886, 8426.753, 8418.968],
  mode: 'lines',
  name: 'Nuclear Electric Power',
  line: {
    //color: 'rgb(219, 64, 82)',
    width: 3
  }
};

traceJ = {
  type: 'line',
  x: year_list,
  y: [3129.471, 3204.314, 3298.708, 3497.534, 3672.894, 3784.081, 3944.823, 3919.077, 4154.63, 4248.913, 4311.869, 4321.896, 4562.544, 4830.798, 4619.11, 4332.237, 4699.547, 5155.896, 5464.015, 5646.393, 5304.096, 4288.756, 3857.739, 4195.855, 4266.615, 4164.025, 4372.408, 4590.909, 4888.397, 4796.699, 4999.132, 4651.464, 5031.334, 4920.222, 5106.526, 4976.158, 5279.544, 5552.398, 5611.351, 5701.366, 5352.186, 5533.979, 5531.513, 5714.795, 6135.898, 6062.485, 6126.746, 5815.221, 5165.391, 4618.088, 4712.648, 4610.774, 4392.562, 4454.535, 4315.174, 4381.315, 4432.824, 4450.985],
  mode: 'lines',
  name: 'Other Petroleum',
  line: {
    //color: 'rgb(219, 64, 82)',
    width: 3
  }
};

traceK = {
  type: 'line',
  x: year_list,
  y: [0.3589999999999236, 1.0009999999999764, 1.0609999999999218, 1.7609999999999673, 2.132999999999811, 1.9779999999996107, 1.958000000000311, 3.2999999999999545, 4.53200000000038, 6.423000000000002, 5.511000000000422, 5.73900000000026, 15.079000000000178, 20.422000000000253, 25.609999999999673, 33.77899999999977, 37.51299999999992, 37.38200000000029, 30.851000000000113, 40.26200000000017, 52.69900000000007, 59.4380000000001, 50.628000000000156, 63.93799999999965, 80.93299999999954, 97.59199999999964, 107.86600000000044, 112.41499999999996, 106.44000000000005, 238.04599999999982, 258.5210000000002, 270.0450000000001, 271.44200000000046, 281.75000000000045, 276.1640000000002, 252.92000000000053, 265.93200000000024, 268.34500000000025, 266.7819999999997, 283.8450000000007, 284.92500000000064, 295.75199999999995, 336.4780000000005, 345.14999999999964, 378.1859999999997, 416.6840000000002, 505.6940000000004, 591.8979999999997, 812.1889999999994, 999.4909999999995, 1222.6889999999994, 1492.375, 1710.6119999999992, 2039.8890000000001, 2279.4429999999993, 2415.763000000001, 2875.2079999999996, 3330.0120000000006],
  mode: 'lines',
  name: 'Other Renewables',
  line: {
    //color: 'rgb(219, 64, 82)',
    width: 3
  }
};

traceL = {
  type: 'line',
  x: year_list,
  y: [3517.193, 3449.539, 3431.526, 3388.215, 3486.651, 3690.538, 3938.365, 4098.401, 4201.219, 4538.736, 5056.559, 5268.789, 5819.543, 6476.723, 6055.739, 5649.322, 6445.105, 7047.268, 6936.026, 6485.399, 5771.629, 4790.883, 3938.868, 3260.463, 3151.038, 2758.987, 3254.887, 2901.476, 3170.377, 3143.921, 2819.852, 2657.037, 2518.138, 2478.725, 2342.454, 1954.697, 1952.12, 1828.228, 2035.724, 1904.948, 2090.597, 1861.449, 1605.429, 1771.853, 1989.729, 2111.118, 1580.734, 1658.894, 1431.707, 1172.89, 1227.92, 1058.058, 848.525, 731.008, 590.192, 595.09, 750.655, 784.14],
  mode: 'lines',
  name: 'Residual Fuel',
  line: {
    //color: 'rgb(219, 64, 82)',
    width: 3
  }
};

var layoutA = {
  title: {
    text: 'Energy in the United States Over Time',
    font: {
      family: 'Courier New, monospace',
      size: 24,
    },
  },
  xaxis: {title: 'Year'},
  yaxis: {title: 'Trillion BTUs'},
  width: 1200,
  height: 550
};

var dataA = [traceA, traceB, traceC, traceD, traceE, traceF, traceG, traceH, traceI,
  traceJ, traceK, traceL];

Plotly.newPlot('line', dataA, layoutA);

//=========================Create Function to Update Line Plot=======================================
function getData2() {
  //define the dropdown menu
  var dropdownMenu = d3.select("#selDataset2");

  // Assign the value of the dropdown menu option to a variable
  var state = dropdownMenu.property("value");
  console.log(state);  

  year_list = ['1960', '1961', '1962', '1963', '1964', '1965', '1966',
    '1967', '1968', '1969', '1970', '1971', '1972', '1973', '1974', '1975',
    '1976', '1977', '1978', '1979', '1980', '1981', '1982', '1983', '1984',
    '1985', '1986', '1987', '1988', '1989', '1990', '1991', '1992', '1993',
    '1994', '1995', '1996', '1997', '1998', '1999', '2000', '2001', '2002',
    '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011',
    '2012', '2013', '2014', '2015', '2016', '2017'];
    
  var Biomass = [];
  var Coal = [];
  var Distillate = [];
  var HGL = [];
  var Hydroelectric = [];
  var Jet = [];
  var Motor = [];
  var Natural = [];
  var Nuclear = [];
  var OtherPet = [];
  var OtherRenewable = [];
  var Residual = [];
  var TotalRenewable = [];

  for (var i = 0; i < year_list.length; i++) {
    var yearData1 = state_sources[year_list[i]];
    var yearData = Object.values(yearData1);
    //console.log(yearData);
    var end = state + 12;
    var stateData1 = yearData.slice(state,624);
    var stateData = stateData1.slice(0,12);
    //console.log(stateData);

    var biomass = stateData[0]/1000;
    Biomass.push(biomass);
    var coal = stateData[1]/1000;
    Coal.push(coal);
    var distillate = stateData[2]/1000;
    Distillate.push(distillate);
    var hgl = stateData[3]/1000;
    HGL.push(hgl);
    var hydroelectric = stateData[4]/1000;
    Hydroelectric.push(hydroelectric);
    var jet = stateData[5]/1000;
    Jet.push(jet);
    var motor = stateData[6]/1000;
    Motor.push(motor);
    var natural = stateData[7]/1000;
    Natural.push(natural);
    var nuclear = stateData[8]/1000;
    Nuclear.push(nuclear);
    var other_pet = stateData[9]/1000;
    OtherPet.push(other_pet);
    var total_renewable = stateData[10]/1000;
    TotalRenewable.push(total_renewable);
    var residual_fuel = stateData[11]/1000;
    Residual.push(residual_fuel);
    var other_renewable = total_renewable-hydroelectric-biomass
    OtherRenewable.push(other_renewable);
  };//this bracket ends the for loop for organizing data

  
  //==================================Create Plotly line plot that updates===============================
  trace1 = {
    type: 'line',
    x: year_list,
    y: Biomass,
    mode: 'lines',
    name: 'Biomass',
    line: {
      //color: 'rgb(219, 64, 82)',
      width: 3
    }
  };

  trace2 = {
    type: 'line',
    x: year_list,
    y: Coal,
    mode: 'lines',
    name: 'Coal',
    line: {
      //color: 'rgb(219, 64, 82)',
      width: 3
    }
  };

  trace3 = {
    type: 'line',
    x: year_list,
    y: Distillate,
    mode: 'lines',
    name: 'Distillate Fuel Oil',
    line: {
      //color: 'rgb(219, 64, 82)',
      width: 3
    }
  };

  trace4 = {
    type: 'line',
    x: year_list,
    y: HGL,
    mode: 'lines',
    name: 'HGL',
    line: {
      //color: 'rgb(219, 64, 82)',
      width: 3
    }
  };

  trace5 = {
    type: 'line',
    x: year_list,
    y: Hydroelectric,
    mode: 'lines',
    name: 'Hydroelectric Power',
    line: {
      //color: 'rgb(219, 64, 82)',
      width: 3
    }
  };

  trace6 = {
    type: 'line',
    x: year_list,
    y: Jet,
    mode: 'lines',
    name: 'Jet Fuel',
    line: {
      //color: 'rgb(219, 64, 82)',
      width: 3
    }
  };

  trace7 = {
    type: 'line',
    x: year_list,
    y: Motor,
    mode: 'lines',
    name: 'Motor Gas excl Ethanol',
    line: {
      //color: 'rgb(219, 64, 82)',
      width: 3
    }
  };

  trace8 = {
    type: 'line',
    x: year_list,
    y: Natural,
    mode: 'lines',
    name: 'Natural Gas',
    line: {
      //color: 'rgb(219, 64, 82)',
      width: 3
    }
  };

  trace9 = {
    type: 'line',
    x: year_list,
    y: Nuclear,
    mode: 'lines',
    name: 'Nuclear Electric Power',
    line: {
      //color: 'rgb(219, 64, 82)',
      width: 3
    }
  };

  trace10 = {
    type: 'line',
    x: year_list,
    y: OtherPet,
    mode: 'lines',
    name: 'Other Petroleum',
    line: {
      //color: 'rgb(219, 64, 82)',
      width: 3
    }
  };

  trace11 = {
    type: 'line',
    x: year_list,
    y: OtherRenewable,
    mode: 'lines',
    name: 'Other Renewables',
    line: {
      //color: 'rgb(219, 64, 82)',
      width: 3
    }
  };

  trace12 = {
    type: 'line',
    x: year_list,
    y: Residual,
    mode: 'lines',
    name: 'Residual Fuel',
    line: {
      //color: 'rgb(219, 64, 82)',
      width: 3
    }
  };

  var layout2 = {
    title: {
      text: 'Energy in the United States Over Time',
      font: {
        family: 'Courier New, monospace',
        size: 24,
      },
    },
    xaxis: {title: 'Year'},
    yaxis: {title: 'Trillion BTUs'},
    width: 1200,
    height: 550
  };

  var data2 = [trace1, trace2, trace3, trace4, trace5, trace6, trace7, trace8, trace9,
    trace10, trace11, trace12];

  Plotly.newPlot('line', data2, layout2);
  
};//this bracket ends the getData2 function

//=====================Create a choropleth========================================================

//==========================Placeholder Choropleth================================================
states = ['AK','AL','AR','AZ','CA','CO','CT','DE','FL','GA','HI','IA','ID','IL','IN','KS','KY','LA',
          'MA','MD','ME','MI','MN','MO','MS','MT','NC','ND','NE','NH','NJ','NM','NV','NY','OH','OK',
          'OR','PA','RI','SC','SD','TN','TX','UT','VA','VT','WA','WI','WV','WY'];

var seventeen1 = state_sources["2017"];
var seventeen = Object.values(seventeen1);

var percentBiomass = [];
var percentCoal = [];
var percentDistillate = [];
var percentHGL = [];
var percentHydroelectric = [];
var percentJet = [];
var percentMotor = [];
var percentNatural = [];
var percentNuclear = [];
var percentOther_Pet = [];
var percentOther_Renewable = [];
var percentResidual = [];
var BiomassRaw = [];
var CoalRaw = [];

var info = {"biomass": percentBiomass, "coal": percentCoal, "distillate": percentDistillate,
            "hgl": percentHGL, "hydroelectric": percentHydroelectric, "jet": percentJet,
            "motor": percentMotor, "natural": percentNatural, "nuclear": percentNuclear,
            "other_pet": percentOther_Pet, "other_renewable":percentOther_Renewable, 
            "residual": percentResidual};

index_list = [0,12,24,36,48,60,72,96,108,120,132,144,156,168,180,192,204,216,228,240,252,264,
              276,288,300,312,324,336,348,360,372,384,396,408,420,432,444,456,468,480,492,504,516,
              540,552,564,576,588,600,612];
          
for (var i = 0; i < index_list.length; i++) {
  var stateData1 = seventeen.slice(index_list[i],624);
  var stateData = stateData1.slice(0,12);
  var biomassRaw = stateData[0]-0;
  BiomassRaw.push(biomassRaw);
  var coalRaw = stateData[1]-0;
  CoalRaw.push(coalRaw);
  var distillateRaw = stateData[2]-0;
  var hglRaw = stateData[3]-0;
  var hydroelectricRaw = stateData[4]-0;
  var jetRaw = stateData[5]-0;
  var motorRaw = stateData[6]-0;
  var naturalRaw = stateData[7]-0;
  var nuclearRaw = stateData[8]-0;
  var other_petRaw = stateData[9]-0;
  var total_renewableRaw = stateData[10]-0;
  var residual_fuelRaw = stateData[11]-0;
  var other_renewableRaw = total_renewableRaw-hydroelectricRaw-biomassRaw;
  var total_energy = coalRaw+distillateRaw+hglRaw+hydroelectricRaw+jetRaw+motorRaw+naturalRaw+
                      nuclearRaw+other_petRaw+residual_fuelRaw+other_renewableRaw;
  var percent_biomass = biomassRaw/total_energy*100;
  percentBiomass.push(percent_biomass);
  var percent_coal = coalRaw/total_energy*100;
  percentCoal.push(percent_coal);
  var percent_distillate = distillateRaw/total_energy*100;
  percentDistillate.push(percent_distillate);
  var percent_hgl = hglRaw/total_energy*100;
  percentHGL.push(percent_hgl);
  var percent_hydroelectric = hydroelectricRaw/total_energy*100;
  percentHydroelectric.push(percent_hydroelectric);
  var percent_jet = jetRaw/total_energy*100;
  percentJet.push(percent_jet);
  var percent_motor = motorRaw/total_energy*100;
  percentMotor.push(percent_motor);
  var percent_natural = naturalRaw/total_energy*100;
  percentNatural.push(percent_natural);
  var percent_nuclear = nuclearRaw/total_energy*100;
  percentNuclear.push(percent_nuclear);
  var percent_other_pet = other_petRaw/total_energy*100;
  percentOther_Pet.push(percent_other_pet);
  var percent_other_renewable = other_renewableRaw/total_energy*100;
  percentOther_Renewable.push(percent_other_renewable);
  var percent_residual = residual_fuelRaw/total_energy*100;
  percentResidual.push(percent_residual);
                        
};
                      
console.log(percentBiomass);
//console.log(CoalRaw);
/*console.log(percentBiomass);
console.log(percentCoal);
console.log(percentDistillate);
console.log(percentHGL);
console.log(percentHydroelectric);
console.log(percentJet);
console.log(percentMotor);
console.log(percentNatural);
console.log(percentNuclear);
console.log(percentOther_Pet);
console.log(percentOther_Renewable);
console.log(percentResidual);*/

var data3 = [{
  type: 'choropleth',
  locationmode: 'USA-states',
  locations: states,
  z: percentHydroelectric,
  text: states,
  zmin: 0,
  zmax: 50,
  colorscale: [
      [0, 'rgb(242,240,247)'], [0.2, 'rgb(218,218,235)'],
      [0.4, 'rgb(188,189,220)'], [0.6, 'rgb(158,154,200)'],
      [0.8, 'rgb(117,107,177)'], [1, 'rgb(84,39,143)']
  ],
  colorbar: {
      title: 'Percentage of Total Energy',
      thickness: 0.2
  },
  marker: {
      line:{
          color: 'rgb(255,255,255)',
          width: 2
      }
  }
}];


var layout3 = {
  title: {
    text: 'Percentage of Total Energy by State',
    font: {
      family: 'Courier New, monospace',
      size: 24,
    },
  }, 
  geo:{
      scope: 'usa',
      showlakes: true,
      lakecolor: 'rgb(255,255,255)'
  },
  width: 800,
  height: 600
};

Plotly.newPlot("choropleth", data3, layout3);

function getData3() {
  var percentBiomass = [];
  //define the dropdown menu
  var dropdownMenu = d3.select("#selDataset3");

  // Assign the value of the dropdown menu option to a variable
  var energy = dropdownMenu.property("value");
  console.log(energy); 

  states = ['AK','AL','AR','AZ','CA','CO','CT','DE','FL','GA','HI','IA','ID','IL','IN','KS','KY','LA',
          'MA','MD','ME','MI','MN','MO','MS','MT','NC','ND','NE','NH','NJ','NM','NV','NY','OH','OK',
          'OR','PA','RI','SC','SD','TN','TX','UT','VA','VT','WA','WI','WV','WY'];
  var max = Math.max(info[energy]);
  
  var data4 = [{
    type: 'choropleth',
    locationmode: 'USA-states',
    locations: states,
    z: info[energy],
    text: states,
    zmin: 0,
    zmax: max,
    colorscale: [
        [0, 'rgb(242,240,247)'], [0.2, 'rgb(218,218,235)'],
        [0.4, 'rgb(188,189,220)'], [0.6, 'rgb(158,154,200)'],
        [0.8, 'rgb(117,107,177)'], [1, 'rgb(84,39,143)']
    ],
    colorbar: {
        title: 'Percentage of Total Energy',
        thickness: 0.2
    },
    marker: {
        line:{
            color: 'rgb(255,255,255)',
            width: 2
        }
    }
  }];
  
  
  var layout4 = {
    title: {
      text: 'Percentage of Total Energy by State',
      font: {
        family: 'Courier New, monospace',
        size: 24,
      },
    }, 
    geo:{
        scope: 'usa',
        showlakes: true,
        lakecolor: 'rgb(255,255,255)'
    },
    width: 800,
    height: 600
  };
  
  Plotly.newPlot("choropleth", data4, layout4);
  
};

//=============================Placeholder Plot for % Energy Over Time================================
var percent_timeBiomass1 = [];
var percent_timeCoal1 = [];
var percent_timeDistillate1 = [];
var percent_timeHGL1 = [];
var percent_timeHydroelectric1 = [];
var percent_timeJet1 = [];
var percent_timeMotor1 = [];
var percent_timeNatural1 = [];
var percent_timeNuclear1 = [];
var percent_timeOther_Pet1 = [];
var percent_timeOther_Renewable1 = [];
var percent_timeResidual1 = [];
  
    
year_list = ['1960', '1961', '1962', '1963', '1964', '1965', '1966',
      '1967', '1968', '1969', '1970', '1971', '1972', '1973', '1974', '1975',
      '1976', '1977', '1978', '1979', '1980', '1981', '1982', '1983', '1984',
      '1985', '1986', '1987', '1988', '1989', '1990', '1991', '1992', '1993',
      '1994', '1995', '1996', '1997', '1998', '1999', '2000', '2001', '2002',
      '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011',
      '2012', '2013', '2014', '2015', '2016', '2017'];

for (var i = 0; i < year_list.length; i++) {
      var Data = state_sources[year_list[i]];
      var Data1 = Object.values(Data);
      var stateData1 = Data1.slice(528,624);
      var stateData = stateData1.slice(0,12);
      var biomassRaw = stateData[0]-0;
      var coalRaw = stateData[1]-0;
      var distillateRaw = stateData[2]-0;
      var hglRaw = stateData[3]-0;
      var hydroelectricRaw = stateData[4]-0;
      var jetRaw = stateData[5]-0;
      var motorRaw = stateData[6]-0;
      var naturalRaw = stateData[7]-0;
      var nuclearRaw = stateData[8]-0;
      var other_petRaw = stateData[9]-0;
      var total_renewableRaw = stateData[10]-0;
      var residual_fuelRaw = stateData[11]-0;
      var other_renewableRaw = total_renewableRaw-hydroelectricRaw-biomassRaw;
      var total_energy = coalRaw+distillateRaw+hglRaw+hydroelectricRaw+jetRaw+motorRaw+naturalRaw+
                    nuclearRaw+other_petRaw+residual_fuelRaw+other_renewableRaw;
      var percent_biomass = biomassRaw/total_energy*100;
      percent_timeBiomass1.push(percent_biomass);
      var percent_coal = coalRaw/total_energy*100;
      percent_timeCoal1.push(percent_coal);
      var percent_distillate = distillateRaw/total_energy*100;
      percent_timeDistillate1.push(percent_distillate);
      var percent_hgl = hglRaw/total_energy*100;
      percent_timeHGL1.push(percent_hgl);
      var percent_hydroelectric = hydroelectricRaw/total_energy*100;
      percent_timeHydroelectric1.push(percent_hydroelectric);
      var percent_jet = jetRaw/total_energy*100;
      percent_timeJet1.push(percent_jet);
      var percent_motor = motorRaw/total_energy*100;
      percent_timeMotor1.push(percent_motor);
      var percent_natural = naturalRaw/total_energy*100;
      percent_timeNatural1.push(percent_natural);
      var percent_nuclear = nuclearRaw/total_energy*100;
      percent_timeNuclear1.push(percent_nuclear);
      var percent_other_pet = other_petRaw/total_energy*100;
      percent_timeOther_Pet1.push(percent_other_pet);
      var percent_other_renewable = other_renewableRaw/total_energy*100;
      percent_timeOther_Renewable1.push(percent_other_renewable);
      var percent_residual = residual_fuelRaw/total_energy*100;
      percent_timeResidual1.push(percent_residual);
};

trace30 = {
  type: 'line',
  x: year_list,
  y: percent_timeBiomass1,
  mode: 'lines',
  name: 'Biomass',
  line: {
    //color: 'rgb(219, 64, 82)',
    width: 3
  }
};

trace31 = {
  type: 'line',
  x: year_list,
  y: percent_timeCoal1,
  mode: 'lines',
  name: 'Coal',
  line: {
    //color: 'rgb(219, 64, 82)',
    width: 3
  }
};

trace32 = {
  type: 'line',
  x: year_list,
  y: percent_timeDistillate1,
  mode: 'lines',
  name: 'Distillate Fuel Oil',
  line: {
    //color: 'rgb(219, 64, 82)',
    width: 3
  }
};

trace33 = {
  type: 'line',
  x: year_list,
  y: percent_timeHGL1,
  mode: 'lines',
  name: 'HGL',
  line: {
    //color: 'rgb(219, 64, 82)',
    width: 3
  }
};

trace34 = {
  type: 'line',
  x: year_list,
  y: percent_timeHydroelectric1,
  mode: 'lines',
  name: 'Hydroelectric Power',
  line: {
    //color: 'rgb(219, 64, 82)',
    width: 3
  }
};

trace35 = {
  type: 'line',
  x: year_list,
  y: percent_timeJet1,
  mode: 'lines',
  name: 'Jet Fuel',
  line: {
    //color: 'rgb(219, 64, 82)',
    width: 3
  }
};

trace36 = {
  type: 'line',
  x: year_list,
  y: percent_timeMotor1,
  mode: 'lines',
  name: 'Motor Gas excl Ethanol',
  line: {
    //color: 'rgb(219, 64, 82)',
    width: 3
  }
};

trace37 = {
  type: 'line',
  x: year_list,
  y: percent_timeNatural1,
  mode: 'lines',
  name: 'Natural Gas',
  line: {
    //color: 'rgb(219, 64, 82)',
    width: 3
  }
};

trace38 = {
  type: 'line',
  x: year_list,
  y: percent_timeNuclear1,
  mode: 'lines',
  name: 'Nuclear Electric Power',
  line: {
    //color: 'rgb(219, 64, 82)',
    width: 3
  }
};

trace39 = {
  type: 'line',
  x: year_list,
  y: percent_timeOther_Pet1,
  mode: 'lines',
  name: 'Other Petroleum',
  line: {
    //color: 'rgb(219, 64, 82)',
    width: 3
  }
};

trace40 = {
  type: 'line',
  x: year_list,
  y: percent_timeOther_Renewable1,
  mode: 'lines',
  name: 'Other Renewables',
  line: {
    //color: 'rgb(219, 64, 82)',
    width: 3
  }
};

trace41 = {
  type: 'line',
  x: year_list,
  y: percent_timeResidual1,
  mode: 'lines',
  name: 'Residual Fuel',
  line: {
    //color: 'rgb(219, 64, 82)',
    width: 3
  }
};

var layout30 = {
  title: {
    text: 'Percentage of Total Energy by Energy Type Over Time',
    font: {
      family: 'Courier New, monospace',
      size: 24,
    },
  },
  xaxis: {title: 'Year'},
  yaxis: {title: 'Percentage of Total Energy Consumed'},
  width: 1200,
  height: 550
};

var data30 = [trace30, trace31, trace32, trace33, trace34, trace35, trace36, trace37, trace38,
  trace39, trace40, trace41];

Plotly.newPlot('line3', data30, layout30);

//===================================Organize the Data for the Updating % Energy Plot=================

//==========================Function newLine updates the % energy plot upon dropdown change============  
function newLine() {
  //define the dropdown menu
  var dropdownMenu = d3.select("#selDataset4");
    
  // Assign the value of the dropdown menu option to a variable
  var state = dropdownMenu.property("value");
  console.log(state);  

  var percent_timeBiomass = [];
  console.log(percent_timeBiomass);
  var percent_timeCoal = [];
  console.log(percent_timeCoal);
  var percent_timeDistillate = [];
  console.log(percent_timeDistillate);
  var percent_timeHGL = [];
  console.log(percent_timeHGL);
  var percent_timeHydroelectric = [];
  console.log(percent_timeHydroelectric);
  var percent_timeJet = [];
  console.log(percent_timeJet);
  var percent_timeMotor = [];
  console.log(percent_timeMotor);
  var percent_timeNatural = [];
  console.log(percent_timeNatural);
  var percent_timeNuclear = [];
  console.log(percent_timeNuclear);
  var percent_timeOther_Pet = [];
  console.log(percent_timeOther_Pet);
  var percent_timeOther_Renewable = [];
  console.log(percent_timeOther_Renewable);
  var percent_timeResidual = [];
  console.log(percent_timeResidual);
    
  year_list = ['1960', '1961', '1962', '1963', '1964', '1965', '1966',
        '1967', '1968', '1969', '1970', '1971', '1972', '1973', '1974', '1975',
        '1976', '1977', '1978', '1979', '1980', '1981', '1982', '1983', '1984',
        '1985', '1986', '1987', '1988', '1989', '1990', '1991', '1992', '1993',
        '1994', '1995', '1996', '1997', '1998', '1999', '2000', '2001', '2002',
        '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011',
        '2012', '2013', '2014', '2015', '2016', '2017'];

  for (var i = 0; i < year_list.length; i++) {
        var Data = state_sources[year_list[i]];
        var Data1 = Object.values(Data);
        var stateData1 = Data1.slice(state,624);
        var stateData = stateData1.slice(0,12);
        var biomassRaw = stateData[0]-0;
        var coalRaw = stateData[1]-0;
        var distillateRaw = stateData[2]-0;
        var hglRaw = stateData[3]-0;
        var hydroelectricRaw = stateData[4]-0;
        var jetRaw = stateData[5]-0;
        var motorRaw = stateData[6]-0;
        var naturalRaw = stateData[7]-0;
        var nuclearRaw = stateData[8]-0;
        var other_petRaw = stateData[9]-0;
        var total_renewableRaw = stateData[10]-0;
        var residual_fuelRaw = stateData[11]-0;
        var other_renewableRaw = total_renewableRaw-hydroelectricRaw-biomassRaw;
        var total_energy = coalRaw+distillateRaw+hglRaw+hydroelectricRaw+jetRaw+motorRaw+naturalRaw+
                      nuclearRaw+other_petRaw+residual_fuelRaw+other_renewableRaw;
        var percent_biomass = biomassRaw/total_energy*100;
        percent_timeBiomass.push(percent_biomass);
        var percent_coal = coalRaw/total_energy*100;
        percent_timeCoal.push(percent_coal);
        var percent_distillate = distillateRaw/total_energy*100;
        percent_timeDistillate.push(percent_distillate);
        var percent_hgl = hglRaw/total_energy*100;
        percent_timeHGL.push(percent_hgl);
        var percent_hydroelectric = hydroelectricRaw/total_energy*100;
        percent_timeHydroelectric.push(percent_hydroelectric);
        var percent_jet = jetRaw/total_energy*100;
        percent_timeJet.push(percent_jet);
        var percent_motor = motorRaw/total_energy*100;
        percent_timeMotor.push(percent_motor);
        var percent_natural = naturalRaw/total_energy*100;
        percent_timeNatural.push(percent_natural);
        var percent_nuclear = nuclearRaw/total_energy*100;
        percent_timeNuclear.push(percent_nuclear);
        var percent_other_pet = other_petRaw/total_energy*100;
        percent_timeOther_Pet.push(percent_other_pet);
        var percent_other_renewable = other_renewableRaw/total_energy*100;
        percent_timeOther_Renewable.push(percent_other_renewable);
        var percent_residual = residual_fuelRaw/total_energy*100;
        percent_timeResidual.push(percent_residual);
    };

      trace10 = {
        type: 'line',
        x: year_list,
        y: percent_timeBiomass,
        mode: 'lines',
        name: 'Biomass',
        line: {
          //color: 'rgb(219, 64, 82)',
          width: 3
        }
      };
    
      trace11 = {
        type: 'line',
        x: year_list,
        y: percent_timeCoal,
        mode: 'lines',
        name: 'Coal',
        line: {
          //color: 'rgb(219, 64, 82)',
          width: 3
        }
      };
    
      trace12 = {
        type: 'line',
        x: year_list,
        y: percent_timeDistillate,
        mode: 'lines',
        name: 'Distillate Fuel Oil',
        line: {
          //color: 'rgb(219, 64, 82)',
          width: 3
        }
      };
    
      trace13 = {
        type: 'line',
        x: year_list,
        y: percent_timeHGL,
        mode: 'lines',
        name: 'HGL',
        line: {
          //color: 'rgb(219, 64, 82)',
          width: 3
        }
      };
    
      trace14 = {
        type: 'line',
        x: year_list,
        y: percent_timeHydroelectric,
        mode: 'lines',
        name: 'Hydroelectric Power',
        line: {
          //color: 'rgb(219, 64, 82)',
          width: 3
        }
      };
    
      trace15 = {
        type: 'line',
        x: year_list,
        y: percent_timeJet,
        mode: 'lines',
        name: 'Jet Fuel',
        line: {
          //color: 'rgb(219, 64, 82)',
          width: 3
        }
      };
    
      trace16 = {
        type: 'line',
        x: year_list,
        y: percent_timeMotor,
        mode: 'lines',
        name: 'Motor Gas excl Ethanol',
        line: {
          //color: 'rgb(219, 64, 82)',
          width: 3
        }
      };
    
      trace17 = {
        type: 'line',
        x: year_list,
        y: percent_timeNatural,
        mode: 'lines',
        name: 'Natural Gas',
        line: {
          //color: 'rgb(219, 64, 82)',
          width: 3
        }
      };
    
      trace18 = {
        type: 'line',
        x: year_list,
        y: percent_timeNuclear,
        mode: 'lines',
        name: 'Nuclear Electric Power',
        line: {
          //color: 'rgb(219, 64, 82)',
          width: 3
        }
      };
    
      trace19 = {
        type: 'line',
        x: year_list,
        y: percent_timeOther_Pet,
        mode: 'lines',
        name: 'Other Petroleum',
        line: {
          //color: 'rgb(219, 64, 82)',
          width: 3
        }
      };
    
      trace20 = {
        type: 'line',
        x: year_list,
        y: percent_timeOther_Renewable,
        mode: 'lines',
        name: 'Other Renewables',
        line: {
          //color: 'rgb(219, 64, 82)',
          width: 3
        }
      };
    
      trace21 = {
        type: 'line',
        x: year_list,
        y: percent_timeResidual,
        mode: 'lines',
        name: 'Residual Fuel',
        line: {
          //color: 'rgb(219, 64, 82)',
          width: 3
        }
      };
    
      var layout10 = {
        title: {
          text: 'Percentage of Total Energy by Energy Type Over Time',
          font: {
            family: 'Courier New, monospace',
            size: 24,
          },
        },
        xaxis: {title: 'Year'},
        yaxis: {title: 'Percentage of Total Energy Consumed'},
        width: 1200,
        height: 550
      };
    
      var data10 = [trace10, trace11, trace12, trace13, trace14, trace15, trace16, trace17, trace18,
        trace19, trace20, trace21];
    
      Plotly.newPlot('line3', data10, layout10);
    
};
