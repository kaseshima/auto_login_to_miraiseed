window.location.href = 'ミライシードのログイン用URL'
const Password = 'この中にパスワード';
const StudentNumber ='この中に出席番号';
const myClassId = 'この中に自分のクラスのクラスID' ;
document.getElementById('myClassId').value =myClassId;
$('input.number').val(StudentNumber);
$('input.pass').val(Password);
document.getElementsByClassName('btn')[1].click();