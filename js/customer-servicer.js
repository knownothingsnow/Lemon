$(document).ready(function(){
    $(".delete-btn").click(function(){
        //var test = "<div style="width:50px; height:50px; background-color :black;"></div>";
        var test = "<div>asdasd</div>";
        $(".btn-group").parents("[id^=list-item-]").html(test);
        });

});