const Password = ["","1115"];
const who ={
    grade : ["gradeList", "3年"], 
    Classroom : ["","5組"],
    StudentNumber : ["","12"], 
};

const Decision = ""
const Cancel = ""
function ClickList(ElementId ,SearchWord) {
    //リストタグから表示が引数と最初に一致したリストの要素を取得
    List = document.getElementById(ElementId);
    for (i = 0; i < ElementId.length; i++) {
        elm = List[i];
        if (elm.textContent === SearchWord){
            elm.click();
        break;
        };
    };
}

function ImputKay(ClassName, Key) {

    document.getElementsByClassName('Key').getElementById(string.charAt(1)).click
};

function ClickElement(ElementId) {
    document.getElementById(ElementId).click();
};

ClickElement("classSelect");
ClickList("",who.Classroom);
ClickList("",who.grade);
//.click();
//document.getElementById("");

