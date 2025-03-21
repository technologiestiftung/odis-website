/*globals d3 */

const lineChart = (params) => {
  let module = {},
    container = params.container || d3.select("body"),
    height = params.height || 250,
    width = params.width || 500,
    xTickNum = params.xTickNum || false,
    data = params.data,
    xGrid = params.xGrid || false,
    yGrid = params.yGrid || false,
    xLabel = params.xLabel || false,
    yLabel = params.yLabel || false,
    group_sort = params.group_sort || false,
    date_column = params.date_column || "date",
    data_column = params.data_column || "value",
    zero_based = params.zero_based || false,
    group_column = params.group_column || false,
    colors = params.colors || "#4dbdf0",
    svg = container
      .append("svg")
      .attr("width", width)
      .attr("height", height)
      .attr("viewBox", `0 0 ${width} ${height}`)
      .attr("preserveAspectRatio", "xMidYMid meet"),
    margin = params.margin || { top: 20, right: 20, bottom: 30, left: 50 },
    dWidth = width - margin.left - margin.right,
    dHeight = height - margin.top - margin.bottom,
    g = svg
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`),
    parseTime = params.parseTime || d3.timeParse("%Y-%m-%d"),
    isTime = params.isTime || false,
    xTicks = params.xTicks || false;

  data.forEach((d) => {
    if (isTime) {
      d[date_column] = parseTime(d[date_column]);
    } else {
      d[date_column] = +d[date_column];
    }
    d[data_column] = +d[data_column];
  });

  let x =
      params.x || isTime == true
        ? d3
            .scaleTime()
            .rangeRound([0, dWidth])
            .domain(d3.extent(data, (d) => d[date_column]))
        : d3
            .scaleLinear()
            .range([0, dWidth])
            .domain(
              d3.extent(data, function (d) {
                return d[date_column];
              }),
            ),
    y =
      params.y ||
      d3
        .scaleLinear()
        .rangeRound([dHeight, 0])
        .domain(
          zero_based
            ? [0, d3.max(data, (d) => d[data_column])]
            : d3.extent(data, (d) => d[data_column]),
        ),
    line =
      params.line ||
      d3
        .line()
        .x((d) => x(d[date_column]))
        .y((d) => y(d[data_column]));

  //Let's get drawing

  let xAxis = d3.axisBottom(x);
  if (xTicks) xAxis.tickFormat(xTicks);
  if (xTickNum) xAxis.ticks(xTickNum);

  if (xGrid) {
    let xGridLines = d3.axisBottom(x);

    if (xTicks) xGridLines.tickFormat(xTicks);
    if (xTickNum) xGridLines.ticks(xTickNum);

    g.append("g")
      .attr("transform", `translate(0,${dHeight})`)
      .attr("class", "gridline")
      .call(xGridLines.tickSize(-dHeight).tickFormat(""));
  }

  if (yGrid) {
    let yGridLines = d3.axisLeft(y);

    g.append("g")
      .attr("class", "gridline")
      .call(yGridLines.tickSize(-dWidth).tickFormat(""));
  }

  g.append("g")
    .attr("transform", "translate(0," + dHeight + ")")
    .call(xAxis);

  g.append("g").call(d3.axisLeft(y));

  if (group_column) {
    let keys = [];
    if (group_sort) {
      keys = group_sort;
    } else {
      data.forEach((d) => {
        if (keys.indexOf(d[group_column]) == -1) {
          keys.push(d[group_column]);
        }
      });
    }

    keys.forEach((key, ki) => {
      g.append("path")
        .attr("class", "path")
        .attr("id", "path_" + key)
        .datum(data.filter((d) => (d[group_column] == key ? true : false)))
        .attr("fill", "none")
        .attr("stroke", typeof colors == "object" ? colors[key] : colors)
        .attr("stroke-linejoin", "round")
        .attr("stroke-linecap", "round")
        .attr("stroke-width", 1.5)
        .attr("d", line);
    });
  } else {
    g.append("path")
      .datum(data)
      .attr("class", "path")
      .attr("fill", "none")
      .attr("stroke", typeof colors == "object" ? colors[key] : colors)
      .attr("stroke-linejoin", "round")
      .attr("stroke-linecap", "round")
      .attr("stroke-width", 1.5)
      .attr("d", line);
  }

  if (xLabel) {
    g.append("g")
      .attr("transform", `translate(${dWidth},${dHeight + 10})`)
      .append("text")
      .text(xLabel)
      .attr("text-anchor", "end")
      .attr("fill", "#000")
      .style("font-size", 10);
    // .style('font-family','sans-serif')
  }

  if (yLabel) {
    g.append("g")
      .append("text")
      .attr("fill", "#000")
      .attr("transform", "rotate(-90)")
      .style("font-size", 14)
      // .style('font-family','sans-serif')
      .attr("y", 6)
      .attr("dy", "0.71em")
      .attr("text-anchor", "end")
      .text(yLabel);
  }

  module.svg = () => svg;
  module.x = (d) => x(d);
  module.y = (d) => y(d);
  module.g = () => g;
  module.dHeight = () => dHeight;
  module.dWidth = () => dWidth;
  module.parseTime = (d) => parseTime(d);

  return module;
};

const histogram = (params) => {
  let module = {},
    container = params.container || d3.select("body"),
    height = params.height || 250,
    width = params.width || 500,
    data = params.data,
    data_column = params.data_column || "value",
    zero_based = params.zero_based || false,
    colors = params.colors || "#000",
    svg = container
      .append("svg")
      .attr("width", width)
      .attr("height", height)
      .attr("viewBox", `0 0 ${width} ${height}`)
      .attr("preserveAspectRatio", "xMidYMid meet"),
    margin = params.margin || { top: 20, right: 20, bottom: 30, left: 50 },
    dWidth = width - margin.left - margin.right,
    dHeight = height - margin.top - margin.bottom,
    g = svg
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`),
    parseTime = params.parseTime || d3.timeParse("%Y-%m-%d"),
    isTime = params.isTime || false,
    equalize = params.equalize || false,
    values = [];

  data.forEach((d) => {
    if (isTime) {
      if (d[data_column] != "NaN") {
        values.push(parseTime(d[data_column]));
      }
    } else {
      if (d[data_column] != "NaN") {
        values.push(+d[data_column]);
      }
    }
  });

  let maxValue = params.maxValue || d3.max(values);

  //thresholdScott,thresholdFreedmanDiaconis,thresholdSturges
  let bin_count =
    params.bins || d3.thresholdSturges(values, d3.min(values), maxValue);

  let x = d3
    .scaleLinear()
    .domain([d3.min(values), maxValue])
    .range([0, dWidth]);

  let bins = d3.histogram().domain(x.domain()).thresholds(bin_count)(values);

  let bin_values = [];

  bins.forEach((b) => {
    let e = d3.extent(b);
    if (isNaN(e[0]) || isNaN(e[1])) {
      bin_values.push({ count: b.length, label: "-" });
    } else {
      if (Math.floor(e[0]) != Math.floor(e[1])) {
        bin_values.push({
          count: b.length,
          label: Math.floor(e[0]) + "-" + Math.floor(e[1]),
        });
      } else {
        bin_values.push({ count: b.length, label: Math.floor(e[0]) });
      }
    }
  });

  let maxLength =
    params.maxLength ||
    d3.max(bins, (d) => (equalize ? equalize(d.length) : d.length));

  let binBands = [];
  for (let b = 0; b < bin_values.length; b++) {
    binBands.push(b);
  }

  let sx = d3.scaleBand().domain(binBands).range([0, dWidth]);

  let y = d3.scaleLinear().domain([0, maxLength]).nice().range([dHeight, 0]);

  //Let's get drawing

  g.append("g")
    .call(d3.axisLeft(y))
    .call((g) => g.select(".domain").remove())
    .call((g) =>
      g
        .selectAll(".tick line")
        .attr("x1", dWidth)
        .style("stroke", "rgba(0,0,0,0.1)"),
    )
    .call((g) =>
      g
        .select(".tick:last-of-type text")
        .clone()
        .attr("x", 4)
        .attr("text-anchor", "start")
        .attr("font-weight", "bold")
        .text(data.y),
    );

  g.append("g")
    .attr("transform", `translate(0,${dHeight})`)
    .call(d3.axisBottom(sx).tickFormat((d) => bin_values[d].label));

  g.append("g")
    .call(
      d3
        .axisBottom(sx)
        .tickFormat((d) =>
          bin_values[d].count > 0
            ? equalize
              ? Math.round(equalize(bin_values[d].count))
              : bin_values[d].count
            : "",
        ),
    )
    .call((g) =>
      g
        .selectAll(".tick line")
        .style("stroke", (d) =>
          bin_values[d].count > 0 ? "#000" : "transparent",
        ),
    )
    .call((g) => g.selectAll(".tick text").attr("dy", -12))
    .call((g) =>
      g
        .selectAll(".tick")
        .attr(
          "transform",
          (d, di) =>
            `translate(${sx(di) + sx.bandwidth() / 2},${
              y(
                equalize ? equalize(bin_values[d].count) : bin_values[d].count,
              ) - 7
            })`,
        ),
    )
    .call((g) => g.select(".domain").remove());

  g.append("g")
    .attr("fill", "#000")
    .selectAll("rect")
    .data(bins)
    .enter()
    .append("rect")
    .attr("x", (d, i) => (dWidth / bins.length) * i + 1)
    .attr("width", (d) => Math.max(0, x(d.x1) - x(d.x0) - 2))
    .attr("y", (d) => {
      let h = y(equalize ? equalize(d.length) : d.length);
      if (h > dHeight - 1 && d.length > 0) {
        h = dHeight - 1;
      }
      return h;
    })
    .attr("height", (d) => {
      let h = y(0) - y(equalize ? equalize(d.length) : d.length);
      if (h > 0 && h < 1) {
        h = 1;
      }
      return h;
    });

  module.svg = () => svg;
  module.g = () => g;
  module.dHeight = () => dHeight;
  module.dWidth = () => dWidth;

  return module;
};

const histodots = (params) => {
  let module = {},
    container = params.container || d3.select("body"),
    height = params.height || 250,
    width = params.width || 700,
    data = params.data,
    data_column = params.data_column || "value",
    zero_based = params.zero_based || false,
    colors = params.colors || ["#4dbdf0", "#E60032"],
    svg = container
      .append("svg")
      .attr("width", width)
      .attr("height", height)
      .attr("viewBox", `0 0 ${width} ${height}`);
  (margin = params.margin || { top: 0, right: 0, bottom: 0, left: 0 }),
    (dWidth = width - margin.left - margin.right),
    (dHeight = height - margin.top - margin.bottom),
    (g = svg
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`)),
    (parseTime = params.parseTime || d3.timeParse("%Y-%m-%d")),
    (isTime = params.isTime || false),
    (equalize = params.equalize || false),
    (values = []);

  data.forEach((d) => {
    if (isTime) {
      if (d[data_column] != "NaN") {
        values.push(parseTime(d[data_column]));
      }
    } else {
      if (d[data_column] != "NaN") {
        values.push(+d[data_column]);
      }
    }
  });

  let maxValue = params.maxValue || d3.max(values);

  let color = d3
    .scaleLinear()
    .domain([zero_based ? 0 : d3.min(values), maxValue])
    .range(colors);

  //thresholdScott,thresholdFreedmanDiaconis,thresholdSturges
  let bin_count =
    params.bins || d3.thresholdSturges(values, d3.min(values), maxValue);

  let bins = d3.histogram().thresholds(8)(values);

  let bin_values = [];

  bins.forEach((b) => {
    let e = d3.extent(b);
    if (isNaN(e[0]) || isNaN(e[1])) {
      bin_values.push({ count: b.length, label: "-" });
    } else {
      if (Math.floor(e[0]) != Math.floor(e[1])) {
        bin_values.push({
          count: b.length,
          label: Math.floor(e[0]) + "-" + Math.floor(e[1]),
        });
      } else {
        bin_values.push({ count: b.length, label: Math.floor(e[0]) });
      }
    }
  });

  let dotSize = 2,
    dotPadding = 1,
    dotPlus = 0,
    binPadding = 10;

  bin_values.forEach((b, bi) => {
    if (b.count > 0) {
      let plusSize = (dotSize + dotPadding) * 2,
        perLine = Math.floor(dWidth / plusSize),
        bin = g.append("g").attr("transform", `translate(0,${dotPlus})`),
        bb = bin
          .append("text")
          .text(b.label)
          .style("font-size", 14)
          .node()
          .getBoundingClientRect();

      bins[bi] = bins[bi].sort();

      bin
        .append("line")
        .attr("x1", bb.width + 10)
        .attr("y1", 0)
        .attr("y2", 0)
        .attr("x2", dWidth)
        .style("stroke-dasharray", "3,3")
        .style("stroke", "black");
      bin
        .append("g")
        .attr(
          "transform",
          `translate(${plusSize / 2},${binPadding + plusSize / 2})`,
        )
        .selectAll("circle")
        .data(bins[bi])
        .enter()
        .append("circle")
        .attr("r", dotSize)
        .style("fill", (d) => color(d))
        .attr("cy", (d, i) => Math.floor(i / perLine) * plusSize)
        .attr(
          "cx",
          (d, i) => (i - Math.floor(i / perLine) * perLine) * plusSize,
        );

      dotPlus +=
        binPadding * (bi == bin_values.length - 1 ? 1 : 3) +
        Math.ceil(b.count / perLine) * plusSize;
    }
  });

  height = dotPlus + margin.top + margin.bottom;

  svg.attr("height", height).attr("viewBox", `0 0 ${width} ${height}`);

  module.svg = () => svg;
  module.g = () => g;
  module.dHeight = () => dHeight;
  module.dWidth = () => dWidth;

  return module;
};

const stackedArea = (params) => {
  let module = {},
    container = params.container || d3.select("body"),
    height = params.height || 250,
    width = params.width || 500,
    data = params.data,
    date_column = params.date_column || "date",
    data_column = params.data_column || "value",
    zero_based = params.zero_based || false,
    colors = params.colors || "#000",
    svg = container
      .append("svg")
      .attr("width", width)
      .attr("height", height)
      .attr("viewBox", `0 0 ${width} ${height}`)
      .attr("preserveAspectRatio", "xMidYMid meet"),
    margin = params.margin || { top: 20, right: 20, bottom: 30, left: 50 },
    dWidth = width - margin.left - margin.right,
    dHeight = height - margin.top - margin.bottom,
    g = svg
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`),
    parseTime = params.parseTime || d3.timeParse("%Y-%m-%d"),
    isTime = params.isTime || false,
    sums = [],
    maxDateVal = d3.max(data, (d) =>
      d3.sum(
        d3.keys(d).map(function (key) {
          return key !== date_column ? d[key] : 0;
        }),
      ),
    );

  data.forEach((d) => {
    let sum = 0;
    for (let key in d) {
      if (isTime && key == date_column) {
        d[key] = parseTime(d[key]);
      } else {
        d[key] = +d[key];
        sum += d[key];
      }
    }
    sums.push(sum);
  });

  let relData = [];

  data.forEach((d, di) => {
    let rel = {};
    for (let key in d) {
      if (isTime && key == date_column) {
        rel[key] = d[key];
      } else {
        rel[key] = (d[key] / sums[di]) * maxDateVal;
      }
    }
    relData.push(rel);
  });

  let keys = data.columns.filter(function (key) {
      return key !== date_column;
    }),
    x = d3
      .scaleTime()
      .range([0, dWidth])
      .domain(
        d3.extent(data, function (d) {
          return d[date_column];
        }),
      ),
    y = d3.scaleLinear().range([dHeight, 0]).domain([0, maxDateVal]),
    color = d3
      .scaleOrdinal()
      .range(d3.schemeAccent)
      .domain(
        d3.keys(data[0]).filter(function (key) {
          return key !== date_column;
        }),
      ),
    xAxis = d3.axisBottom().scale(x),
    yAxis = d3.axisLeft().scale(y),
    area = d3
      .area()
      .x((d) => x(d.data.date))
      .y0((d) => y(d[0]))
      .y1((d) => y(d[1])),
    stack = d3
      .stack()
      .keys(keys)
      .order(d3.stackOrderNone)
      .offset(d3.stackOffsetNone)(data),
    rStack = d3
      .stack()
      .keys(keys)
      .order(d3.stackOrderNone)
      .offset(d3.stackOffsetNone)(relData);

  let browser = g
    .selectAll(".browser")
    .data(stack)
    .enter()
    .append("g")
    .attr("class", (d) => "browser " + d.key)
    .attr("fill-opacity", 0.5);

  let areas = browser
    .append("path")
    .attr("class", "area")
    .attr("d", area)
    .style("fill", "rgba(0,0,0,0.1)")
    .style("stroke", "#555")
    .style("stroke-width", "0.1")
    .on("mouseover", function (d) {
      d3.select(this).style("fill", "#1e3791");
      tooltip
        .attr(
          "transform",
          `translate(${d3.mouse(this)[0]},${d3.mouse(this)[1]})`,
        )
        .text(d.key)
        .style("display", "block");
    })
    .on("mousemove", function (d) {
      tooltip
        .attr("dx", d3.mouse(this)[0] < dWidth / 2 ? 10 : -10)
        .attr("text-anchor", d3.mouse(this)[0] < dWidth / 2 ? "start" : "end")
        .attr(
          "transform",
          `translate(${d3.mouse(this)[0]},${d3.mouse(this)[1]})`,
        );
    })
    .on("mouseout", function () {
      d3.select(this).style("fill", "rgba(0,0,0,0.1)");
      tooltip.style("display", "none");
    });

  // browser.append('text')
  //     .datum(function(d) { return d; })
  //     .attr('transform', function(d) { return 'translate(' + x(data[13].date) + ',' + y(d[13][1]) + ')'; })
  //     .attr('x', -6)
  //     .attr('dy', '.35em')
  //     .style("text-anchor", "start")
  //     .text(function(d) { return d.key; })
  //     .attr('fill-opacity', 1);

  g.append("g")
    .attr("class", "x axis")
    .attr("transform", "translate(0," + dHeight + ")")
    .call(xAxis);

  g.append("g").attr("class", "y axis").call(yAxis);

  g.append("text")
    .attr("dx", 10)
    .attr("dy", 15)
    .text("Zugriffszahlen")
    // .style('font-family', 'sans-serif')
    .style("font-size", 10);

  let tooltip = g
    .append("text")
    .attr("dy", 6)
    .style("text-shadow", "0px 0px 3px #fff")
    .style("fill", "#000")
    .style("font-weight", "bold")
    .style("pointer-events", "none")
    // .style('font-family', 'sans-serif')
    .style("font-size", 10)
    .style("text-transform", "capitalize");

  let mode = true;

  module.setMode = (m) => {
    mode = m;
  };

  module.mode = () => {
    return mode;
  };

  module.update = () => {
    areas
      .datum((d, i) => (mode ? stack[i] : rStack[i]))
      .transition()
      .attr("d", area);
  };

  module.svg = () => svg;
  module.g = () => g;
  module.dHeight = () => dHeight;
  module.dWidth = () => dWidth;

  return module;
};

// const histoline = (params) => {

//   let module = {},
//     container = params.container || d3.select('body'),
//     height = params.height || 250,
//     width = params.width || 500,
//     data = params.data,
//     data_column = params.data_column || 'value',
//     zero_based = params.zero_based || false,
//     colors = params.colors || '#000',
//     svg = container.append('svg').attr('width', width).attr('height', height).attr('viewBox',`0 0 ${width} ${height}`).attr('preserveAspectRatio','xMidYMid meet'),
//     margin = params.margin || {top: 20, right: 20, bottom: 30, left: 50},
//     dWidth = width - margin.left - margin.right,
//     dHeight = height - margin.top - margin.bottom,
//     g = svg.append("g").attr("transform", `translate(${margin.left},${margin.top})`),
//     parseTime = params.parseTime || d3.timeParse("%Y-%m-%d"),
//     isTime = params.isTime || false,
//     values = []

//   data.forEach(d=>{
//     if(d[data_column]!='NaN'){
//       if(isTime){
//         values.push(parseTime(d[data_column]))
//       }else{
//         values.push(+d[data_column])
//       }
//     }
//   })

//   let x = d3.scaleLinear()
//     .domain(d3.extent(values)).nice()
//     .range([0, dWidth])

//   let lineLimit = (d3.max(values)-d3.min(values))

//   let lineBins = d3.histogram()
//     .thresholds(lineLimit)
//     (values)

//   let min = d3.min(values)

//   lineBins.forEach((l,li)=>{
//     l.v = li+min
//   })

//   lineBins.slice(lineLimit, lineBins.length-lineLimit)
//   lineBins = lineBins.filter(d=>(d.length>0)?true:false)

//   let line = d3.line()
//     .x(d => x(d.v))
//     .y((d,i) => y(d.length))

//   let y = d3.scaleLinear()
//     .domain([0, d3.max(lineBins, d => d.length)]).nice()
//     .range([dHeight, 0  ])

//     //Let's get drawing

//   g.append('g')
//     .call(d3.axisLeft(y))
//     .call(g => g.select(".domain").remove())
//     .call(g => g.selectAll(".tick line").attr('x1', dWidth).style('stroke','rgba(0,0,0,0.1)'))
//     .call(g => g.select(".tick:last-of-type text").clone()
//         .attr("x", 4)
//         .attr("text-anchor", "start")
//         .attr("font-weight", "bold")
//         .text(data.y))

//   g.append('g')
//     .attr("transform", `translate(0,${dHeight})`)
//     .call(d3.axisBottom(x))

//   g.append('g')
//     .append('path')
//     .attr('fill','transparent')
//     .attr('stroke', 'red')
//     .attr('d', line(lineBins))

//   return module

// }

// const heatgrid = (params) => {
//   let module = {},
//     container = params.container || d3.select('body'),
//     height = params.height || 250,
//     width = params.width || 500,
//     data = params.data,
//     date_column = params.date_column || 'date',
//     data_column = params.data_column || 'value',
//     zero_based = params.zero_based || false,
//     group_column = params.group_column || false,
//     colors = params.colors || ['rgba(255,255,255,1)','rgba(0,0,0,1)'],
//     svg = container.append('svg').attr('width', width).attr('height', height).attr('viewBox',`0 0 ${width} ${height}`).attr('preserveAspectRatio','xMidYMid meet'),
//     margin = params.margin || {top: 20, right: 20, bottom: 30, left: 50},
//     dWidth = width - margin.left - margin.right,
//     dHeight = height - margin.top - margin.bottom,
//     g = svg.append("g").attr("transform", `translate(${margin.left},${margin.top})`),
//     parseTime = params.parseTime || d3.timeParse("%Y-%m-%d"),
//     isTime = params.isTime || false

//   data.forEach(d=>{
//     if(isTime){
//       d[date_column] = parseTime(d[date_column])
//     }else{
//       d[date_column] = +d[date_column]
//     }
//     d[data_column] = +d[data_column]
//   })

//   let cols = params.cols || 10,
//       rows = params.rows || 10

//   let x = params.x || (isTime==true) ? d3.scaleTime().rangeRound([0,cols-1]).domain(d3.extent(data, function(d) { return d[date_column]; })) : d3.scaleLinear().rangeRound([0, cols-1]).domain(d3.extent(data, function(d) { return d[date_column]; })),
//     y = params.y || d3.scaleLinear().rangeRound([rows-1, 0]).domain((zero_based)?[0,d3.max(data, function(d) { return d[data_column]; })]:d3.extent(data, function(d) { return d[data_column]; })),
//     cell_width = dWidth/cols,
//     cell_height = dHeight/rows,
//     sx = params.x || (isTime==true) ? d3.scaleTime().rangeRound([0, (dWidth-cell_width)]).domain(d3.extent(data, function(d) { return d[date_column]; })) : d3.scaleLinear().range([0, (dWidth-cell_width)]).domain(d3.extent(data, function(d) { return d[date_column]; })),
//     sy = params.y || d3.scaleLinear().rangeRound([dHeight, 0]).domain((zero_based)?[0,d3.max(data, function(d) { return d[data_column]; })]:d3.extent(data, function(d) { return d[data_column]; }))

//   let grid = {}

//   data.forEach(d=>{
//     let gx = x(d[date_column]),
//         gy = y(d[data_column])

//     if(!(gx in grid)){
//       grid[gx] = {}
//     }

//     if(!(gy in grid[gx])){
//       grid[gx][gy] = 0
//     }

//     grid[gx][gy]++
//   })

//   let cells = []

//   for(let gx in grid){
//     for(let gy in grid[gx]){
//       cells.push({
//         x:gx,
//         y:gy,
//         c:grid[gx][gy]
//       })
//     }
//   }

//   let color = d3.scaleLinear().domain([0, d3.max(cells, (d)=>d.c)]).range([colors[0],colors[1]])

//   g.append("g")
//     .attr("transform", `translate(${cell_width/2},${dHeight})`)
//     .call(d3.axisBottom(sx))

//   g.append("g")
//     .call(d3.axisLeft(sy))

//   g.append('g').selectAll('rect').data(cells).enter().append('rect')
//     .attr('width', cell_width)
//     .attr('height', cell_height)
//     .attr('x', d=>d.x*cell_width)
//     .attr('y', d=>d.y*cell_height)
//     .attr('fill', d=>color(d.c))

//   return module
// }

/*------------ CHART BUILDING ------------*/

d3.csv("/charts/all.csv")
  .then((data) => {
    let chart = lineChart({
      container: d3.select("#introvis"),
      data: data,
      yLabel: "Zugriffe",
      isTime: true,
      zero_based: true,
      group_column: "type",
      width: 700,
      height: 325,
      group_sort: ["pv", "a_pv", "r_pv", "ra_pv", "ora_pv", "all", "trend"],
      colors: {
        pv: "#4dbdf0",
        a_pv: "#213A8F",
        r_pv: "rgba(0,0,0,0.75)",
        ra_pv: "rgba(0,0,0,1)",
        ora_pv: "#E60032",
        all: "#213A8F",
        trend: "#E60032",
      },
    });

    let peakData = [
      { y: 30, dy: 20, date: "2013-04-01", note: { title: "VBB Daten" } },
      { y: 170, dy: 20, date: "2013-09-01", note: { title: "Wahl 2013" } },
      {
        y: 120,
        dy: 20,
        date: "2017-03-01",
        note: { title: "Beliebte Vornamen 2016" },
      },
      { y: 180, dy: 10, date: "2017-09-01", note: { title: "Wahl 2017" } },
      { y: 85, dy: 20, date: "2019-05-01", note: { title: "Wahl 2019" } },
      {
        y: 85,
        dy: 15,
        date: "2019-05-01",
        note: { title: "Beliebte Vornamen 2018" },
      },
      {
        y: 140,
        dy: 20,
        date: "2020-01-01",
        note: { title: "Beliebte Vornamen 2019" },
      },
      {
        y: 90,
        dy: -20,
        date: "2020-10-01",
        note: { title: "COVID-19 Fallzahlen" },
      },
      {
        y: 155,
        dy: 50,
        date: "2021-01-01",
        note: { title: "Beliebte Vornamen 2020" },
      },
    ];

    peakData.forEach((p) => {
      p["x"] = chart.x(chart.parseTime(p.date));
      if (p.x > chart.dWidth() / 2) {
        p["dx"] = -50;
      } else {
        p["dx"] = 50;
      }
      //console.log(p['note']['title'])
      if (p["note"]["title"] == "Beliebte Vornamen 2016") {
        p["dx"] = -50;
      }
      p["annotation"] = chart
        .g()
        .append("g")
        .attr("class", "annotation-group")
        .call(
          d3
            .annotation()
            .notePadding(5)
            .type(d3.annotationCalloutElbow)
            .annotations([p]),
        )
        .style("display", "none");
    });

    let peakLines = chart
      .g()
      .append("g")
      .selectAll("line")
      .data(peakData)
      .enter()
      .append("line")
      .attr("x1", (d) => d.x)
      .attr("x2", (d) => d.x)
      .attr("y1", 0)
      .attr("y2", chart.dHeight())
      .attr("stroke", "red")
      .attr("stroke-dasharray", "5,5");

    let story = [
        {
          title: "Zugriffe auf Datensätze",
          copy: "Die Kurve zeigt die Zugriffszahlen auf die Unterseiten zu den Datensätzen im Berliner Open-Data-Portal seid April 2013. <br /><br />Klicke auf weiter um mehr zu erfahren.",
        },
        {
          title: "Trend",
          copy: "Nach gutem Beginn stagnierte die Entwicklung über einen längeren Zeitraum. Seit 2017 ist wieder ein deutlicher Anstieg zu verzeichnen. Insgesamt ergibt sich dadurch ein positver Trend.",
        },
        // {
        //   title:'Verschwundene Daten',
        //   copy:'Einige der in der Statistik aufgeführten Datensätze sind inzwischen nicht mehr auf dem Portal abrufbar. Für die weitere Analyse nutzen wir nur Daten, die nach wie vor offen verfügbar sind.'
        // },
        // {
        //   title:'Tests',
        //   copy:'Regelmäßig gibt es eine geringe Zahl an Downloads, die vor dem Veröffentlichungsdatum liegen. Vermutlich handelt es sich um interne Tests.'
        // },
        {
          title: "Ausreißer",
          copy: "Bei Betrachtung der Kurve fallen einige Ausreißer auf. Zu diesen Zeitpunkten sind die Zugriffszahlen durch Datensätze, die auf besonders viel Interesse gestoßen sind, in die Höhe geschossen.",
        },
        // {
        //   title:'VBB Daten',
        //   copy:'Im April 2013 stellte der Verkehrsverbund Berlin Brandenburg (VBB) seine Fahrplandaten unter freie Lizenz. Die Daten erfreuten sich in den ersten Monaten großer Beliebtheit. Da der VBB mittlerweile eine eigene API anbietet, sind die Zugriffe über das Portal inzwischen niedriger.'
        // },
        {
          title: "Wahlen",
          copy: "Die Bundestagswahlen von 2013 und 2017, sowie die Europawahl 2019 sind deutlich sichtbar. Speziell die Datensätze, die Wahlbezirke definieren, werden in diesen Zeiträumen häufig heruntergeladen.",
        },
        {
          title: "Beliebte Vornamen",
          copy: "Alle Jahre wieder ein Lieblingsthema der Medien: Die beliebtesten Baby-Vornamen in Berlin. Dieser Datensatz wird im Frühjahr des Folgejahrs veröffentlicht und führt zu einer Vielzahl an Karten und Visualisierungen in der Berliner Presse.",
        },
        {
          title: "COVID-19-Fallzahlen",
          copy: "Nahezu tagesaktuelle Fahlzahlen zu COVID-19-Erkrankungen für Berlin wurden erstmals im April 2020 im Portal veröffentlicht. Während das Interesse und die Zahl der Zugriffe über den Sommer moderat blieben, stiegen diese dann aber mit Beginn der 2. Welle im Oktober 2020 stark an.",
        },
        {
          title: "Zugriffszahlen gesamt",
          copy: "Nicht jeder Besucher des Open-Data-Portals findet was er sucht. Die Zugriffszahlen auf alle Seiten des Portals, also nicht nur auf die Unterseiten zu den Datensätzen sondern zum Beispiel nur auf die Titelseite, sind dadurch höher. Auffällig ist, dass der Trend ansteigender Zugriffszahlen hier nicht so deutlich wird. Das könnte bedeuten, dass der Datensatz-Anteil der Zugriffe steigt.",
        },
      ],
      currentStory = 0;

    let introStory = () => {
      d3.select("#introtitle").html(story[currentStory].title);
      d3.select("#introcopy").html(story[currentStory].copy);

      chart.svg().selectAll(".path").style("display", "none");

      peakData.forEach((p) => {
        p.annotation.style("display", "none");
      });

      let show = ["pv"];

      switch (currentStory) {
        case 0:
          peakLines.style("display", "none");
          break;
        // case 1:
        //   show = ['pv','a_pv']
        // break;
        // case 2:
        //   peakLines.style('display','none')
        //   show = ['pv','a_pv','ra_pv']
        // break;
        case 1:
          peakLines.style("display", "block");
          peakLines.style("opacity", "0");
          show = ["pv", "trend"];
          break;
        case 2:
          peakLines.style("display", "block");
          peakLines.style("opacity", "1");
          show = ["pv"];
          break;
        // case 2:
        //   show = ['pv']
        //   peakData[0].annotation.style('display','block')
        // break;
        case 3:
          show = ["pv"];
          peakLines.style("opacity", "0.3");
          peakData[1].annotation.style("display", "block");
          peakData[3].annotation.style("display", "block");
          peakData[4].annotation.style("display", "block");
          break;
        case 4:
          show = ["pv"];
          peakData[2].annotation.style("display", "block");
          peakData[5].annotation.style("display", "block");
          peakData[6].annotation.style("display", "block");
          peakData[8].annotation.style("display", "block");
          break;
        case 5:
          show = ["pv"];
          peakLines.style("opacity", "0.3");
          peakData[7].annotation.style("display", "block");
          break;
        case 6:
          peakLines.style("opacity", "0");
          show = ["pv", "all"];
          break;
      }

      chart
        .svg()
        .selectAll("#path_" + show.join(", #path_"))
        .style("display", "block");

      d3.select("#introprev").property(
        "disabled",
        currentStory == 0 ? true : false,
      );
      d3.select("#intronext").property(
        "disabled",
        currentStory == story.length - 1 ? true : false,
      );
    };

    d3.select("#intronext").on("click", () => {
      if (currentStory < story.length - 1) {
        currentStory++;
        introStory();
      }
    });

    d3.select("#introprev").on("click", () => {
      if (currentStory > 0) {
        currentStory--;
        introStory();
      }
    });

    introStory();
  })
  .catch((err) => {
    throw err;
  });

// d3.json('/charts/outlier.json').then(data=>{

//   data.forEach(o=>{

//     let container = d3.select('#outliers').append('div')

//     container.append('h3').attr('class', 'p-top').text(o.title)

//     let text = `<strong>Lizenz</strong>: ${o.license_title}<br /><strong>Veröffentlichungsdatum</strong>:${o.date_released}<br /><strong>Autor</strong>:${o.author}<br /><a href="https://daten.berlin.de/datensaetze/${o.page}">Zum Datensatz &raquo;</a>`

//     container.append('p').attr('class','copy small-copy').html(text)

//     lineChart({
//       container:container,
//       yLabel:'Zugriffe',
//       xGrid:true,
//       yGrid:true,
//       data:o.original_pv,
//       data_column:'c',
//       isTime:true,
//       width:700,
//       xTickNum:5,
//       zero_based:true,
//       colors:'#000'
//     })

//   })

// }).catch(err=>{ throw err; })

// d3.csv('/charts/bots.csv').then(data=>{
//   data.forEach(d=>{ d.value = d.value*100; })
//   lineChart({
//     container:d3.select('#timepatterns'),
//     data:data,
//     isTime:true,
//     width:700,
//     yLabel:'Datensätze mit Klicks in %',
//     zero_based:true,
//     group_column:'type',
//     colors:{
//       req:'rgba(0,0,0,1)',
//       reql:'rgba(0,0,0,0.5)'
//     }
//   })
// }).catch(err=>{ throw err; })

d3.csv("/charts/dataset_count.csv")
  .then((data) => {
    let chart = lineChart({
      container: d3.select("#count"),
      data: data,
      yLabel: "Anzahl Datensätze",
      yGrid: true,
      width: 700,
      isTime: true,
      zero_based: true,
      colors: "#213A8F",
      y: d3.scaleLinear().rangeRound([200, 0]).domain([0, 3000]),
    });

    chart
      .g()
      .append("g")
      .attr("class", "annotation-group")
      .call(
        d3
          .annotation()
          .notePadding(5)
          .type(d3.annotationCalloutElbow)
          .annotations([
            {
              note: { title: "2665 Datensätze", label: "Stand 16.04.2021" },
              x: chart.x(chart.parseTime("2021-04-16")),
              y: 22,
              dx: -20,
              dy: 50,
            },
          ]),
      );
  })
  .catch((err) => {
    throw err;
  });

d3.csv("/charts/dataset_author.csv")
  .then((data) => {
    let chart2 = lineChart({
      container: d3.select("#author"),
      data: data,
      yLabel: "Anzahl Bereitsteller",
      yGrid: true,
      width: 700,
      isTime: true,
      zero_based: true,
      colors: "#213A8F",
      y: d3.scaleLinear().rangeRound([200, 0]).domain([0, 140]),
    });

    chart2
      .g()
      .append("g")
      .attr("class", "annotation-group")
      .call(
        d3
          .annotation()
          .notePadding(5)
          .type(d3.annotationCalloutElbow)
          .annotations([
            {
              note: { title: "112 Bereitsteller", label: "Stand 16.04.2021" },
              x: chart2.x(chart2.parseTime("2021-04-16")),
              y: 40,
              dx: -20,
              dy: 50,
            },
          ]),
      );
  })
  .catch((err) => {
    throw err;
  });

d3.csv("/charts/dataset_top1_sum.csv")
  .then((data) => {
    let chart2 = lineChart({
      container: d3.select("#top1_sum"),
      data: data,
      yLabel: "Anzahl Zugriffe",
      yGrid: false,
      width: 600,
      isTime: true,
      zero_based: true,
      colors: "#E60032",
      y: d3.scaleLinear().rangeRound([200, 0]).domain([0, 5000]),
    });
  })
  .catch((err) => {
    throw err;
  });

d3.csv("/charts/dataset_top1_std.csv")
  .then((data) => {
    let chart2 = lineChart({
      container: d3.select("#top1_std"),
      data: data,
      yLabel: "Anzahl Zugriffe",
      yGrid: false,
      width: 600,
      isTime: true,
      zero_based: true,
      colors: "#E60032",
      y: d3.scaleLinear().rangeRound([200, 0]).domain([0, 50]),
    });
  })
  .catch((err) => {
    throw err;
  });

// d3.csv('/charts/seasonal.csv').then(data=>{
//   lineChart({
//     container:d3.select('#seasonal'),
//     data:data,
//     yLabel:'Zugriffe rel. zum Jahresmax.',
//     width:700,
//     xGrid:true,
//     group_column:'year',
//     date_column:'month',
//     zero_based:true,
//     xTicks:(d)=>{
//       //let m = ['Januar','Februar','März','April','Mai','Juni','Juli','August','September','Oktober','November','Dezember']
//       let m = ['Jan','Feb','Mär','Apr','Mai','Jun','Jul','Aug','Sep','Okt','Nov','Dez']
//       return m[d]
//     },
//     colors:{
//       2014:'rgba(0,0,0,0.25)',
//       2015:'rgba(0,0,0,0.5)',
//       2016:'rgba(0,0,0,0.75)',
//       2017:'rgba(0,0,0,0.1)'
//     }
//   })
// }).catch(err=>{ throw err; })

// d3.csv('/charts/overtime.csv').then(data=>{
//   lineChart({
//     container:d3.select('#individual'),
//     data:data,
//     group_column:'type',
//     colors:'rgba(0,0,0,0.1)'
//   })

//   heatgrid({
//     container:d3.select('#individual'),
//     data:data,
//     rows:10,
//     cols:24,
//     zero_based:true
//   })
// }).catch(err=>{ throw err; })

d3.csv("/charts/histofull_smoothed.csv")
  .then((data) => {
    histodots({
      container: d3.select("#histograms-1"),
      data: data,
      data_column: "all",
    });

    histodots({
      container: d3.select("#histograms-2"),
      data: data,
      data_column: "mean",
    });

    histodots({
      container: d3.select("#histograms-3"),
      data: data,
      data_column: "median",
    });

    /*
  histogram({
    container:d3.select('#histograms-1'),
    data:data,
    data_column:'all'      
  })
  histogram({
    container:d3.select('#histograms-2'),
    data:data,
    data_column:'mean'      
  })
  histogram({
    container:d3.select('#histograms-3'),
    data:data,
    data_column:'median'      
  })
  histoline({
    container:d3.select('#histograms-1'),
    data:data,
    data_column:'all'      
  })
  histoline({
    container:d3.select('#histograms-2'),
    data:data,
    data_column:'mean'      
  })
  histoline({
    container:d3.select('#histograms-3'),
    data:data,
    data_column:'median'      
  })
  */
  })
  .catch((err) => {
    throw err;
  });

// d3.select('#showhistos').on('click', ()=>{
//   let el = d3.select('#individual-histograms'),
//     but = d3.select('#showhistos'),
//     display = el.style('display')

//   if(display == 'block'){
//     el.style('display','none')
//     but.text('Die ersten 12 Monate eines Datensatzes als Histogramme anzeigen')
//   }else{
//     el.style('display','block')
//     but.text('Histogramme ausblenden')
//   }
// })

// d3.csv('/charts/histotime.csv').then(data=>{

//   let type = 'median' // mean,median
//   let maxs = [], overallmax = 0
//   for(let t = 1; t<=12; t++){
//     maxs[t] = 0
//     data.forEach(d=>{
//       if(d['t'+t+'_'+type] != 'NaN'){
//         maxs[t]++
//       }
//     })
//     if(maxs[t]>overallmax) overallmax = maxs[t]
//   }

//   for(let t = 1; t<=12; t++){
//     let chart = histogram({
//       container:d3.select('#individual-histograms'),
//       data:data,
//       width:350,
//       height:200,
//       maxValue:160,
//       maxLength:820,
//       bins:20,
//       equalize:(d)=>d/maxs[t]*overallmax,
//       data_column:`t${t}_${type}`
//     })

//     chart.g().append('g').attr('transform', `translate(${chart.dWidth()},0)`)
//       .append('text').attr('text-anchor','end').text(t+' Monate nach Release')
//       .attr('dy',6)
//       // .style('font-family','sans-serif').style('font-weight','bold').style('font-size',12)
//   }
// }).catch(err=>{ throw err; })

// d3.csv('/charts/group_author.csv').then(data=>{

//   let chart = stackedArea({
//     container:d3.select('#stacked_groups_2'),
//     data:data,
//     isTime:true,
//     height:600,
//     width:700
//   })

//   d3.select('#stacked_groups_2-abs').on('click', ()=>{
//     chart.setMode(true)
//     chart.update()
//   })

//   d3.select('#stacked_groups_2-rel').on('click', ()=>{
//     chart.setMode(false)
//     chart.update()
//   })

// }).catch(err=>{ throw err; })

// d3.csv('/charts/group_group_name.csv').then(data=>{

//   let chart = stackedArea({
//     container:d3.select('#stacked_groups_1'),
//     data:data,
//     isTime:true,
//     height:600,
//     width:700
//   })

//   d3.select('#stacked_groups_1-abs').on('click', ()=>{
//     chart.setMode(true)
//     chart.update()
//   })

//   d3.select('#stacked_groups_1-rel').on('click', ()=>{
//     chart.setMode(false)
//     chart.update()
//   })

// }).catch(err=>{ throw err; })

// d3.csv('/charts/group_license_title.csv').then(data=>{

//   let chart = stackedArea({
//     container:d3.select('#stacked_groups_3'),
//     data:data,
//     isTime:true,
//     height:600,
//     width:700
//   })

//   d3.select('#stacked_groups_3-abs').on('click', ()=>{
//     chart.setMode(true)
//     chart.update()
//   })

//   d3.select('#stacked_groups_3-rel').on('click', ()=>{
//     chart.setMode(false)
//     chart.update()
//   })

// }).catch(err=>{ throw err; })

const buildTable = (data, id) => {
  let table = d3.select("#" + id).append("table"),
    thead = table.append("thead").append("tr"),
    tbody = table.append("tbody"),
    tr = tbody.selectAll("tr").data(data).enter().append("tr");

  thead.append("th").text("Datensatz");
  thead.append("th").text("Zugriffe");

  tr.append("td").html((d) =>
    "group" in d
      ? `<a href="https://daten.berlin.de/datensaetze/${d.page}">${d.page}</a><br /><span class="small">${d.group}</span>`
      : `<a href="https://daten.berlin.de/datensaetze/${d.page}">${d.page}</a>`,
  );
  tr.append("td").html((d) => `${Math.round(d.count)}`);
};

const buildTableExtended = (data, id) => {
  let table = d3.select("#" + id).append("table"),
    thead = table.append("thead").append("tr"),
    tbody = table.append("tbody"),
    tr = tbody.selectAll("tr").data(data).enter().append("tr");

  thead.append("th").text("Datensatz");
  //thead.append('th').text('Zugriffe')
  thead.append("th").text("Rel.Std.");
  thead.append("th").text("Mittelwert");
  thead.append("th").text("Zugriffe");
  thead.append("th").text("Monate");

  tr.append("td").html((d) =>
    "group" in d
      ? `<a href="https://daten.berlin.de/datensaetze/${d.page}">${d.page}</a><br /><span class="small">${d.group}</span>`
      : `<a href="https://daten.berlin.de/datensaetze/${d.page}">${d.page}</a>`,
  );
  //tr.append('td').html(d=>`${Math.round(d.count)}`)
  tr.append("td").html((d) => `${Math.round(d.std_norm * 100)}%`);
  tr.append("td").html((d) => `${Math.round(d.mean)}`);
  tr.append("td").html((d) => `${Math.round(d.count)}`);
  tr.append("td").html((d) => `${d.month_count}`);
};

d3.csv("/charts/top_abs.csv")
  .then((data) => {
    buildTable(data, "top_abs");
  })
  .catch((err) => {
    throw err;
  });

d3.csv("/charts/top_month.csv")
  .then((data) => {
    buildTableExtended(data, "top_month");
  })
  .catch((err) => {
    throw err;
  });

// d3.csv('/charts/top_group_abs.csv').then(data=>{
//   buildTable(data,'top_group_abs')
// }).catch(err=>{ throw err; })

// d3.csv('/charts/top_group_month.csv').then(data=>{
//   buildTable(data,'top_group_month')
// }).catch(err=>{ throw err; })
