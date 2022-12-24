// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler




function calcheight (data : {[name :string] : Person} ): number | null  {
    let sumh = 0

let count = 0

for(var key in data){
console.log(data)
  if(data.hasOwnProperty(key)){

    if(data[key].hasOwnProperty('height')){

      sumh += data[key].height;
  console.log('sum', sumh)
      count +=1;
  console.log(count)
    }

  }
};
console.log("===",sumh/count);
return sumh/count;

}
interface Person {
    height :number;
    weight :number;
}

let avg = calcheight ({
    nikita :{height :5 , weight: 80},
     nik :{height :3 , weight: 32}
});


