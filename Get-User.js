function encode(e){
    return encodeURIComponent(e);
};
window.open("https://kaseshima.github.io/bookmarklet/miraiseed/#"+encode(encode(location.href)+'/'+encode($('#myClassId').val())+'/'+encode($('input.number').val())+'/'+encode($('input.pass').val())+'/'));