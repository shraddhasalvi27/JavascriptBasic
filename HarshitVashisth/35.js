//object destructuring
const band ={
    bandName: "led zepplin",
    famousSong: "stairway to heaven",
    year: 1968,
    anotherFamousSong: "kashmir",
}
const bandname1 = band.bandName;
console.log(bandname1);

const {bandName,famousSong} = band;
console.log(bandName);
console.log(famousSong);

const{bandName:var1,bandName:var2}= band;
console.log(var1);
console.log(var2);

const{bandName,...restProps} = band; //I can right anything at the place of restProps
console.log(restProps);


