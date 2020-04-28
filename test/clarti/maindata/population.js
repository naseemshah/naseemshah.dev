
// DATA INIT
var populationData;
var populationDataYears = [];
var populationDataValues = [];
var fertility = 2.5;
var mortaility = 7.3;


populationData = [

  {
    "Year": "2000",
    "Population": 1056575549
  },
  {
    "Year": "2001",
    "Population": 1075000085
  },
  {
    "Year": "2002",
    "Population": 1093317189
  },
  {
    "Year": "2003",
    "Population": 1111523144
  },
  {
    "Year": "2004",
    "Population": 1129623456
  },
  {
    "Year": "2005",
    "Population": 1147609927
  },
  {
    "Year": "2006",
    "Population": 1165486291
  },
  {
    "Year": "2007",
    "Population": 1183209472
  },
  {
    "Year": "2008",
    "Population": 1200669765
  },
  {
    "Year": "2009",
    "Population": 1217726215
  },
  {
    "Year": "2010",
    "Population": 1234281170
  },
  {
    "Year": "2011",
    "Population": 1250288729
  },
  {
    "Year": "2012",
    "Population": 1265782790
  },
  {
    "Year": "2013",
    "Population": 1280846129
  },
  {
    "Year": "2014",
    "Population": 1295604184
  },
  {
    "Year": "2015",
    "Population": 1310152403
  },
  {
    "Year": "2016",
    "Population": 1324509589
  },
  {
    "Year": "2017",
    "Population": 1338658835
  },
  {
    "Year": "2018",
    "Population": 1352617328
  }
]

populationData.forEach((object)=>{
  populationDataYears.push(object.Year);
  populationDataValues.push(object.Population);

});

var totalPopulation = Math.max(...populationDataValues);
//DATA INIT