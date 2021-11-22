
function degreesToRadians(degrees) {
    radians = (degrees * Math.PI)/180;
    return radians;
}

function computeDistance(beforeCoords, nowCoords) {
    var beforeLatRads = degreesToRadians(beforeCoords.latitude);
    var beforeLongRads = degreesToRadians(beforeCoords.longitude);
    var nowLatRads = degreesToRadians(nowCoords.latitude);
    var nowLongRads = degreesToRadians(nowCoords.longitude);

    var Radius = 6371; //지구의 반경(km)
    var distance = Math.acos(Math.sin(beforeLatRads) * Math.sin(nowLatRads) + 
                    Math.cos(beforeLatRads) * Math.cos(nowLatRads) *
                    Math.cos(beforeLongRads - nowLongRads)) * Radius;

    return distance;
}


exports.computeDistance =  computeDistance;