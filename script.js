
var leftMapButton = document.getElementById("leftMapButton");
var mapName = document.getElementById("mapNameField");
var rightMapButton = document.getElementById("rightMapButton");
var map = document.getElementById("map");
var mapLink = document.getElementById("mapLink");

import maps from "./maps.json" with { type: 'json' };

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