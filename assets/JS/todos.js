// strike the completed todo
$("ul").on("click" , "li",function(){
    $(this).toggleClass("completed");
});

//click on span to delete todo
$("ul").on("click","span",function(event){
    $(this).parent().fadeOut(500,function(){
        $(this).remove();
    })
    event.stopPropagation();
});

//add new todo to list
$("input[type='text']").keypress(function(event){
    if(event.which === 13){
        var todotext=$(this).val();
        $(this).val("");
        $("ul").append("<li> <span> <i class='fa fa-trash'></i> </span>" + todotext + "</li>");

    }
});

$(".fa-plus").click(function(){
    $("input[type='text']").fadeToggle();
});