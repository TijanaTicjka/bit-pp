"use strict";
var mainModule = (function(data, ui){
    var onAddData = function (){
        var allData = ui.collectData();
        var isValid = ui.validateData(allData);
        if(!isValid) return;
        var examInfo = data.createExam(allData.subject, allData.student, allData.grade);
        var examInfoFinal = examInfo.getExamInfo();
        var mark = examInfo.grade;
        var passed = examInfo.hasPassed();
        if(passed){
            ui.addExamItemPassed(examInfoFinal, mark);
        }else{
            ui.addExamItemFailed(examInfoFinal, mark);
        }
        ui.updateStatistic();
    }
    var add = document.querySelector("#add");
    add.addEventListener("click",onAddData);
})(dataModule,uiModule)