
var leftMapButton = document.getElementById("leftMapButton");
var mapName = document.getElementById("mapNameField");
var rightMapButton = document.getElementById("rightMapButton");
var map = document.getElementById("map");
var mapLink = document.getElementById("mapLink");

var maps = [
  {
    "text": "June 10, 2024",
    "link": "2024-06-10_14-43-02/unmined.index.html"
  },
  {
    "text": "June 18, 2024",
    "link": "2024-06-18_20-45-01/unmined.index.html"
  },
  {
    "text": "June 25, 2024",
    "link": "2024-06-25_20-40-59/unmined.index.html"
  },
  {
    "text": "July 1, 2024",
    "link": "2024-07-01_00-05-03/unmined.index.html"
  },
  {
    "text": "July 8, 2024",
    "link": "2024-07-08_00-05-03/unmined.index.html"
  },
  {
    "text": "July 15, 2024",
    "link": "2024-07-15_00-05-03/unmined.index.html"
  },
  {
    "text": "July 22, 2024",
    "link": "2024-07-22_00-05-03/unmined.index.html"
  },
  {
    "text": "July 29, 2024",
    "link": "2024-07-29_03-05-03/unmined.index.html"
  },
  {
    "text": "August 3, 2024",
    "link": "2024-08-03_21-05-59/unmined.index.html"
  },
  {
    "text": "August 8, 2024",
    "link": "2024-08-08_03-05-03/unmined.index.html"
  },
  {
    "text": "August 15, 2024",
    "link": "2024-08-15_03-05-03/unmined.index.html"
  },
  {
    "text": "September 22, 2024",
    "link": "2024-09-22_03-05-03/index.html"
  },
  {
    "text": "October 22, 2024",
    "link": "2024-10-22/index.html"
  },
  {
    "text": "November 8, 2024",
    "link": "2024-11-08_03-05-03/index.html"
  },
  {
    "text": "December 22, 2024",
    "link": "2024-12-22/index.html"
  },
  {
    "text": "January 5, 2025",
    "link": "2025-1-5/index.html"
  },
  {
    "text": "January 22, 2025",
    "link": "2025-1-22/index.html"
  },
  {
    "text": "May 15, 2025",
    "link": "2025-05-15/index.html"
  }
];
var mapIndex = maps.length-1;

function setMap() {
  mapName.setAttribute("value", maps[mapIndex].text);
  map.setAttribute("src", maps[mapIndex].link);
  mapLink.setAttribute("href", maps[mapIndex].link);
}

setMap();

leftMapButton.addEventListener("click", function() {
  if (mapIndex > 0) {
    mapIndex--;
    setMap();
  }
});

rightMapButton.addEventListener("click", function() {
  if (mapIndex < maps.length-1) {
    mapIndex++;
    setMap();
  }
});