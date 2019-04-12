$(document).ready(function(){
    $("#l1").click(function(e){
        e.preventDefault();

       $("#austin").fadeToggle();
       $("#bright").hide();
       $("#james").hide();
       $("#sam").hide();
       $("#umar").hide();
       $("#christine").hide();
       $("#juliet").hide();
       $("#amani").hide();
    });

    $("#l2").click(function (e) {
        e.preventDefault();

        $("#austin").hide();
        $("#bright").fadeToggle();
        $("#james").hide();
        $("#sam").hide();
        $("#umar").hide();
        $("#christine").hide();
        $("#juliet").hide();
        $("#amani").hide();
    });

    $("#l3").click(function (e) {
        e.preventDefault();

        $("#austin").hide();
        $("#bright").hide();
        $("#james").fadeToggle();
        $("#sam").hide();
        $("#umar").hide();
        $("#christine").hide();
        $("#juliet").hide();
        $("#amani").hide();
    });

    $("#l4").click(function (e) {
        e.preventDefault();

        $("#austin").hide();
        $("#bright").hide();
        $("#james").hide();
        $("#sam").fadeToggle();
        $("#umar").hide();
        $("#christine").hide();
        $("#juliet").hide();
        $("#amani").hide();
    });

    $("#l5").click(function (e) {
        e.preventDefault();

        $("#austin").hide();
        $("#bright").hide();
        $("#james").hide();
        $("#sam").hide();
        $("#umar").fadeToggle();
        $("#christine").hide();
        $("#juliet").hide();
        $("#amani").hide();
    });

    $("#l6").click(function (e) {
        e.preventDefault();

        $("#austin").hide();
        $("#bright").hide();
        $("#james").hide();
        $("#sam").hide();
        $("#umar").hide();
        $("#christine").fadeToggle();;
        $("#juliet").hide();
        $("#amani").hide();
    });

    $("#l7").click(function (e) {
        e.preventDefault();

        $("#austin").hide();
        $("#bright").hide();
        $("#james").hide();
        $("#sam").hide();
        $("#umar").hide();
        $("#christine").hide();
        $("#juliet").fadeToggle();
        $("#amani").hide();
    });

    $("#l8").click(function (e) {
        e.preventDefault();

        $("#austin").hide();
        $("#bright").hide();
        $("#james").hide();
        $("#sam").hide();
        $("#umar").hide();
        $("#christine").hide();
        $("#juliet").hide();
        $("#amani").fadeToggle();
    });

});
$(document).ready(function () {
    $("#btn1").click(function(){
        $("#form1").show();
        event.preventDefault();
    })
})