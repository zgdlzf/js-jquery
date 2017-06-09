var iNum1;
var iNum2;
var aProvince=["河北","山西"];
var aCity=[["石家庄","张家口"],["太原","朔州"]];
var aCountry=[[["无极县","赵县"],["沽源县","尚义县"]],[["清徐县","阳曲县"],["山阴县"],["应县"]]];
$(function(){
    for(var i=0;i<aProvince.length;i++){
        $("#selectProvince").append("<option>"+aProvince[i]+"</option>");
    }
    $("#selectProvince").change(function(){
        $("#selectCountry").children().not(":eq(0)").remove();
        $("#selectCity").children().not(":eq(0)").remove();
        iNum1=$(this).children("option:selected").index()-1;
        var aaCity=aCity[iNum1];
        for(var j=0;j<aaCity.length;j++){
            $("#selectCity").append("<option>"+aaCity[j]+"</option");
        }

    });

    $("#selectCity").change(function(){
        $("#selectCountry").children().not(":eq(0)").remove();
        iNum2=$(this).children("option:selected").index()-1;
        var aaCountry=aCountry[iNum1][iNum2];
        for(var z=0;z<aaCountry.length;z++){
            $("#selectCountry").append("<option>"+aaCountry[z]+"</option");
        }
    })
});



// var iNum1;
// var iNum2;
// var aProvince=["河北","山西"];
// var aCity=[["石家庄","张家口"],["太原","朔州"]];
// var aCountry=[[["无极县","赵县"],["沽源县","尚义县"]],[["清徐县","阳曲县"],["山阴县","应县"]]];
// $(function(){
//     for(var i=0;i<aProvince.length;i++){
//         $("#selectProvince").append("<option>"+aProvince[i]+"</option");
//     }
//     $("#selectProvince").change(function(){
//         $("#selectCountry").children().not(":eq(0)").remove();
//         $("#selectCity").children().not(":eq(0)").remove();
//         iNum1=$(this).children("option:selected").index()-1;
//         var aaCity=aCity[iNum1];
//         for(var j=0;j<aaCity.length;j++){
//             $("#selectCity").append("<option>"+aaCity[j]+"</option>");
//         }
//     });
//     $("#selectCity").change(function(){
//         $("#selectCountry").children().not(":eq(0)").remove();
//         iNum2=$(this).children("option:selected").index()-1;
//         var aaCountry=aCountry[iNum1][iNum2];
//         for(var z=0;z<aaCountry.length;z++){
//             $("#selectCountry").append("<option>"+aaCountry[z]+"</option>")
//         }
//     });
// });