// URLのアンカー（#以降の部分）
let user = location.hash.replace( '#', '' ).split(',');
//例：学年,クラス,出席番号,PW
 
$('#').find('li').each( function( index, element ) {
 
    console.log( element.textContent );
 
})