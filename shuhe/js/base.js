/**
 * Created by Administrator on 2019/5/6 0006.
 */
window.onload = function() {
var moreBtn = document.querySelector('.more-btn');
moreBtn.onclick = function() {
    var listBox = document.querySelector('.small-list');
    var val = listBox.style.display;
    console.log(val);
    if (val == 'block') {
        listBox.style.display = 'none';
    } else {
        listBox.style.display = 'block';
    }
}

}