function speed_check(speed){
    var speed_km=0;
    var point=0;
    if (speed<=70){
        console.log("Speed is OK")}
    for (var i=71;i<=speed;i++){
        speed_km+=1;
        if (speed_km%5==0){
            point+=1
            if (point>12){
                console.log("License suspended")
                break}}
    }
    console.log("point =",point)
}
speed_check(140)