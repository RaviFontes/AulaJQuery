let somarjs=document.getElementById("somajs").
addEventListener("click",()=>{
    //() => é chamado de aero function
    let v1=parseInt(document.getElementById("v1").value)
    let v2=parseInt(document.getElementById("v2").value)
    let soma=v1+v2
    let res=document.getElementById("res").value=soma
});

$("#somarjquery").click(()=>{
    let v1=parseInt($("#v1").val())
    let v2=parseInt($("#v2").val())
    let soma=v1+v2
    $("#res").val(soma)
});





