"use strict";

document.addEventListener("DOMContentLoaded", function () {
  function jsonp(url) {
    return new Promise(function (resolve) {
      let script = document.createElement("script");
      const name = "_jsonp_" + Math.round(100000 * Math.random());
      //url formatting
      if (url.match(/\?/)) url += "&callback=" + name;
      else url += "?callback=" + name;
      script.src = url;

      window[name] = function (data) {
        resolve(data);
        document.body.removeChild(script);
        delete window[name];
      };
      document.body.appendChild(script);
    });
  }
  function getData() {
    let data = [];
    for (const start of ["0", "1000", "2000", "3000", "4000"]) {
      data.push(
        jsonp(
          "https://datenregister.berlin.de/api/3/action/package_search?rows=1000&start=" +
            start
        )
      );
    }
    return data;
  }

  Promise.all(getData())
    .then((values) => {
      let resultsArray = [];
      for (const id in values) {
        resultsArray = resultsArray.concat(values[id].result.results);
      }
      return resultsArray;
    })
    .then((data) => {
      initialize(data);
    });
});

function initialize(results) {
  document.getElementById("totalDatasets").innerHTML = getTotalNumber(results);
  document.getElementById("last30").innerHTML =
    "+" + getTotalNumber(last30Days(results));
  document.getElementById("authors").innerHTML = getAuthorCount(results);
}

function getTotalNumber(data) {
  return data.length;
}

function last30Days(data) {
  let now = new Date();
  let thisYear = new Date(now.getFullYear(), 0, 1);

  let last30 = data.filter((x) => Date.parse(x.metadata_created) > thisYear);
  return last30;
}

function getAuthorCount(data) {
  let uniqueAuthors = {};
  for (let i = 0; i < data.length; i++) {
    if (!(data[i].author in uniqueAuthors)) {
      uniqueAuthors[data[i].author] = true;
    }
  }
  let authorCount = Object.keys(uniqueAuthors).length;
  return authorCount;
}
