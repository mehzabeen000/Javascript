// Magic Square
var s=[[8,3,4],
      [1,5,9],
      [6,7,2]];

var diag=0;
var diag1=0;
for (x in s){
    diag+=s[x][x];
    y=(s.length)-1
    diag1+=s[x][y]
}
var row=[];
var col =[];
for (x in s){
    var row_sum=0;
    var col_sum=0;
    for (y in s){
        row_sum+=s[x][y]
        col_sum+=s[y][x]
    }
    row.push(row_sum)
    col.push(col_sum)
}
if (row[0]==col[0]){
    if (diag==diag1){
        console.log("It is a Magic Square");}
}
else{
    console.log("It is not a Magic Square")
}

