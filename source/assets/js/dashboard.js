'use strict'
 
function jsonp(url) {
    return new Promise(function(resolve, reject) {
        let script = document.createElement('script')
        const name = "_jsonp_" + Math.round(100000 * Math.random());
        //url formatting
        if (url.match(/\?/)) url += "&callback="+name
        else url += "?callback="+name
        script.src = url;

        window[name] = function(data) {
            resolve(data);
            document.body.removeChild(script);
            delete window[name];
        }
        document.body.appendChild(script);
    });
}

// var data = jsonp("https://datenregister.berlin.de/api/action/package_search&rows=1000&callback=initOne");
// var data2 = jsonp("https://datenregister.berlin.de/api/action/package_search");
// // var data2 = jsonp("https://datenregister.berlin.de/api/action/package_search&rows=1000&start=1000&callback=initTwo")


var data = jsonp("https://datenregister.berlin.de/api/3/action/package_search?rows=1000");
var data2 = jsonp("https://datenregister.berlin.de/api/3/action/package_search?rows=1000&start=1000")

Promise.all([data, data2])
.then(values => {
	var resultsArray = values["0"].result.results.concat(values["1"].result.results);
	return resultsArray;
})
.then(data => {
	initialize(data);
});

function initialize(results) {

	var licenses = getHighscores(results, "license", 5);
	var authors = getHighscores(results, "author", 7);
	var tags = getHighscores(results, "tags", 20);
	var category = getHighscores(results, "category", 20);
	var formats = getHighscores(results, "formats", 7);
    var activity = getTimestamps(results); 
	var newest5 = findNewest(results) 
	
  	
	makeChart(getHighscores(results, "author", 7));
	makeDonut(category);
	makeTagCloud(getHighscores(results, "tags", 20));
	makeActivity(getTimestamps(results));
	last30Days(results);
	//Fill HTML
	document.getElementById("totalDatasets").innerHTML = getTotalNumber(results);
	document.getElementById("last30").innerHTML = "+" + getTotalNumber(last30Days(results));
	
	for (var i=0; i<5; i++) {
		document.getElementById("newest" + i).innerHTML = "<span>" + newest5[i].title + "</span>" + "<a class='dl-arrow right cross-link' href='"+ newest5[i].url + "' target='_blank'><div></div></a><br />";
	}
}


function findNewest(data) {
	return [data[0], data[1], data[2], data[3], data[4]];
}

function getTotalNumber(data) {
	return data.length;
}

function getTimestamps(data) {
	var timestamps = data.map(x => ({"time": x.metadata_modified, "name": x.name}));
	return timestamps;
}

function last30Days(data) {
	var now = new Date() 
	var lastMonth = new Date(now);
		lastMonth.setDate(now.getDate() - 30);

	var last30 = data.filter(x => Date.parse(x.metadata_created) > Date.parse(lastMonth));
	return last30;
}


function getHighscores(data, item, amount){

	var countsObj = {};

	if (item === "author") {

		for (var i = 0; i < data.length; i++) {
			if (countsObj.hasOwnProperty(data[i].author)) {
				countsObj[data[i].author]++
			}

			else {
				countsObj[data[i].author] = 1;
			}

		}
	} else if (item === "license") {
		for (var i = 0; i < data.length; i++) {
			if (countsObj.hasOwnProperty(data[i].license_title)) {
				countsObj[data[i].license_title]++
			}

			else {
				countsObj[data[i].license_title] = 1;
			}

		}

	} else if (item === "tags") {
		for (var i = 0; i < data.length; i++) {

			data[i].tags.forEach(function(el) {
				
				if (countsObj.hasOwnProperty(el.name)) {
				
				countsObj[el.name]++
				
				} else {
				
				countsObj[el.name] = 1;
				
				}

			});

		}

	} else if (item === "formats") {
		for (var i = 0; i < data.length; i++) {

			data[i].resources.forEach(function(el) {
				
				if (countsObj.hasOwnProperty(el.format)) {
				
				countsObj[el.format]++
				
				} else {
				
				countsObj[el.format] = 1;
				
				}

			});

		}	
	} else if (item === "category") {
		for (var i = 0; i < data.length; i++) {
			data[i].groups.forEach(function(el) {
				if (countsObj.hasOwnProperty(el.display_name)) {
					countsObj[el.display_name]++
				} else {
					countsObj[el.display_name] = 1;
				}
			});
		}	
	}

		var props = Object.keys(countsObj).map(function(key) {
			return {key: key, value: this[key] };
		}, countsObj);

		props.sort(function(p1, p2) {return p2.value - p1.value});
		var tops = props.slice(0, amount);

		return tops;
}


function makeChart(value) {
	var ctx = document.getElementById("chartOne").getContext('2d');
	ctx.canvas.height = 300;
	var authorDict = {
		"Senatsverwaltung für Stadtentwicklung und Wohnen Berlin": "SenSW",
		"Senatsverwaltung für Gesundheit und Soziales Berlin": "SenGeSoz",
		"Senatsverwaltung für Umwelt, Verkehr und Klimaschutz Berlin": "SenUVK",
		"Senatsverwaltung für Gesundheit, Pflege und Gleichstellung Berlin" : "SenGPG",
		"Amt für Statistik Berlin-Brandenburg": "AfSBB",
		"Stromnetz Berlin GmbH": "Stromnetz",
		"VBB - Verkehrsverbund Berlin-Brandenburg GmbH": "VBB"
		}

		var authorNames = value.map((el) => authorDict[el.key]);
		var nrOfDatasets = value.map((el) => el.value);
	
	var myChart = new Chart(ctx, {
	    type: 'bar',
	    data: {
	        labels: authorNames,

	        datasets: [{
	            data: nrOfDatasets,
	            backgroundColor: '#FFFFFF',
                borderColor: '#FFFFFF',
                color: '#909CC6',
                borderWidth: 1,
	        }]
        },
        defaults: {
            global: {
                maxBarThickness: 10
            }
        },
	    options: {
	    	responsive: false,
	    	maintainAspectRatio: false,
	        legend: {
	        	display: false
			},
			tooltips: {
				// enabled: false
				cornerRadius: 0,
			},
	        scales: {
	            yAxes: [{
	                ticks: {
	                	fontColor: "#909CC6",
	                    beginAtZero:true,
                        color: '#00eeee',
                        fontFamily: 'Clan Book'
	                }
	            }],
	            xAxes: [{
	            	ticks: {
	            		fontColor: "#909CC6",
	            		autoSkip: false,
                        fontFamily: 'Clan Book'
	            	}
	            }]
	        }
	    }
	});
}

function makeDonut(value) {
	
	
	var licenceDict = {
		"Creative Commons Attribution": "CC-BY",
		"GeoNutzV-Berlin": "Geo Berlin",
		"Creative Commons Attribution Share-Alike": "CC-BY-SA",
		"Siehe Website des Datensatzes": "Andere (nicht offen)",
		"Creative Commons Zero": "CC-0",
		"dl-de-2-0": "DL DE 2.0"
	}

	var ctx = document.getElementById("chartTwo").getContext('2d');
	ctx.canvas.height = 200;

    var licenceNames = value.map((el) => el.key);
    var nrOfDatasets = value.map((el) => el.value);
    
	var myChart = new Chart(ctx, {
	    type: 'doughnut',
	    data: {
	        labels: licenceNames,
	        datasets: [{
	            data: nrOfDatasets,
	            backgroundColor: '#FFFFFF',
	            borderColor: '#213A8F',
                borderWidth: 1,
                fontFamily: 'Clan Medium'
	        }]
	    },
	    options: {
	    	responsive: false,
	        maintainAspectRatio: false,
	        legend: {
	        	display: false
			},
			tooltips: {
				cornerRadius: 0
			}
	    }
	});

}

function makeActivity(value) {
	
	var dateObj = {};
	var dateArr = [];
	var valueArr = [];

	value.forEach(function(el) {
		var d = new Date(el.time);
		var year= d.getFullYear();
		var month = d.getMonth() + 1;
		var day = d.getDate();
		var myDate = (year + "-" + month + "-" + day);	

		if (dateObj.hasOwnProperty(myDate)) {
			dateObj[myDate] = dateObj[myDate] + 1;
		} else {
			dateArr.push(myDate);
			dateObj[myDate] = 1;
		}
		
	})
	
	dateArr.forEach(function(el) {
		valueArr.push(dateObj[el]);
	})

	var ctx = document.getElementById("activity").getContext('2d');
	
	valueArr = valueArr.reverse().slice(2);
	dateArr = dateArr.reverse().slice(2);

	var myChart = new Chart(ctx, {
	    type: 'line',
	    data: {
	        labels: dateArr,

	        datasets: [{
	          data: valueArr,
	          backgroundColor: '#FFFFFF',
	            borderColor: '#FFFFFF',
	            borderWidth: 1,
	            fill: false,
	            pointRadius: 1,

	        }]
	    },
	    options: {
	    	responsive: true,
	        maintainAspectRatio: false,
	        legend: {
	        	display: false
	        },
	        scales: {
	            yAxes: [{
	                ticks: {
	                	fontColor: "#909CC6",
                        color: '#00eeee',
                        fontFamily: 'Clan Book',
                    },
                    gridLines: {
                        color: '#243E98'
                    }

	            }],
	            xAxes: [{
	            	ticks: {
                        fontColor: "#909CC6",
                        fontFamily: 'Clan Book',
	            		gridLines: '#909CC6'
                    },
                    gridLines: {
                        color: '#243E98'
                    }
	            }]
	  
	        }
		}
	});


}

function makeTagCloud(value) {
	var taglist = [];

	value.forEach(function(el) {
		var temp = [];
		temp[0] = el.key;
		temp[1] = el.value;
		taglist.push(temp);
	})

	WordCloud(document.getElementById('tagCanvas'), 
		{ 	list: taglist,
			color: '#FFFFFF',
			backgroundColor: "#213A8F",
			weightFactor: 0.04,
            maxRotation:0,
            fontFamily: 'Clan Medium'
		});

}



