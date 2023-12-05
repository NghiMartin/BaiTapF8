
function Toogle (options) {
    const container = options.container;
    const containerSelector = document.querySelector('.' + container);
    console.log(containerSelector);

    //1.Save variable can access in function (querrySelector, querySelectorAll)

    const buttonSelector = containerSelector.querySelector('.btn');
    const divSelectorToogle = containerSelector.querySelector('.mystyle');

    function handleClickToogle() {
        divSelectorToogle.classList.toggle('hide');
    }
    //2.addEvent
    function initEvent () {
        buttonSelector.addEventListener('click', handleClickToogle);
    }
    initEvent();
}




let instanceToogle = new Toogle({container: 'container_toogle'});
let instanceToogle2 = new Toogle({container: 'container_toogle2'});
