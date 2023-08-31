let rows;
let columns;

document.getElementById("process").onclick=function(){
    rows = document.getElementById("rows").value;
    columns = document.getElementById("columns").value;

    console.log("Rows = ",rows);
    console.log("Columns = ",columns);

    let i;
    for (i=1;i<=rows;i+=1){
        for (let j=1;j<=i;j+=1){
            document.getElementById("result_display").innerHTML+="*";
        }
        document.getElementById("result_display").innerHTML+="<br>";
    }

}