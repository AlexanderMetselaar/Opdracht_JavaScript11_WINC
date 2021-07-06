const colors = ['yellow', 'blue', 'red', 'orange'];
// var i = 0;
// while(i < colors.length) {
//     console.log(colors[i]);
//     i++;
// }

// for(n=0; n < colors.length; n++) {
//     console.log(colors[n])
// }

// colors.forEach(console.log);

// De while loop neemt 4/5 regels in beslag;
// De for loop neemt 2/3 regels in beslag;
// De .forEach opdracht neem 1 regel in beslag;

var house = {wall: "yellow", carpet: "blue", ceiling: "red",  toilet: "orange"};
for(var airiness in house) {
    console.log(house[airiness]);
}