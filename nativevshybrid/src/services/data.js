
let points = 0;
let pointsRef

export function setPoints(pointsTemp){
    points=pointsTemp;
}
export function addPoints(pointsAdd){
    points+=pointsAdd;
}
export function getPoints(){
    return points;
}

export function setPointsRef(pointsRefTemp){
    pointsRef=pointsRefTemp;
}
export function addPointsRef(pointsRefAdd){
    pointsRef+=pointsRefAdd;
}
export function getPointsRef(){
    return pointsRef;
}

