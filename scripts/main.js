var mymap = L.map('mapid').setView([38.890, -77.030], 13.86);

L.tileLayer('https://api.mapbox.com/styles/v1/briannaedwards/ck2xhftpk0kxn1cnqgshbky4w/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiYnJpYW5uYWVkd2FyZHMiLCJhIjoiY2syeGd0MG5vMHE2dDNtbzJ3emhtOXl3diJ9.5N2Hl6x9_edGUmKKkv4hew', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18
}).addTo(mymap);

let marker1 = L.marker([38.889484, -77.035278]).addTo(mymap);
let marker2 = L.marker([38.897675, -77.036530]).addTo(mymap);
let marker3 = L.marker([38.889271, -77.050179]).addTo(mymap);
let marker4 = L.marker([38.889770, -77.009076]).addTo(mymap);

marker1.bindPopup("<b>Washington Monument</b><br>Built to honor President George Washington.").openPopup();
marker2.bindPopup("<b>White House</b><br>Where the current President lives.");
marker3.bindPopup("<b>Lincoln Memorial</b><br>Built to honor President Abraham Lincoln.");
marker4.bindPopup("<b>Capitol Building</b><br>Home of the United States Congress.");
