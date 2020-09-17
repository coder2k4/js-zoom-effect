$card = document.getElementById('card')
$img = $card.querySelector('img')

let zoom = 1;


$card.addEventListener('mousemove', (e) => {
    const x = e.clientX - e.target.offsetLeft;
    const y = e.clientY - e.target.offsetTop;

    $img.style.transformOrigin = `${x}px ${y}px`
    $img.style.transform = `scale(${zoom})`


    //console.log('clientX: ', e.clientX)
    //console.log('offsetLeft: ', e.target.offsetLeft)


})

$card.addEventListener('mouseout', (e) => {
    $img.style.transformOrigin = 'center center'
    $img.style.transform = 'scale(1)'
})


$card.addEventListener('wheel', (e) => {


    zoom += e.deltaY * -0.01  // -100 * -0.01 = 1
    zoom = Math.min(Math.max(1, zoom), 6); // min-max = 1 - 4
    //console.log(zoom)
    $img.style.transform = `scale(${zoom})`

})

