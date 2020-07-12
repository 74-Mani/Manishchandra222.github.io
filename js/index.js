$('document').ready(function () {
    // $('#btn').on('click',function(){
    //     $('#form').toggle();
    // })

    var count = 1;
    animate_img();
    function animate_img() {
        if (count == 4) {
            count = 0;
        }
        count++;
        setTimeout(function () {
            $('#photo').attr('src', '/img/camp' + count + '.jpg')
            animate_img();
        }, 3000);
    }
    $('#form').hide()
    let btn = document.getElementById('btn');
    let form = document.getElementById('form');
    $('#btn').click(function () {
        if (form.style.display != 'none') {
            form.style.display = 'none'
        }
        else {
            form.style.display = 'block';
        }
    })
    loop();
    function loop() {
        setTimeout(function () {
            // $('#head1').animate({ fontSize: "+=10px" }, 1000)
            $('#head1').animate({ letterSpacing: "+=10px" }, 1000)
        
        setTimeout(function () {
            // $('#head1').animate({ fontSize: "-=10px" }, 1000)
            $('#head1').animate({ letterSpacing: "-=10px" }, 1000)
            loop();
        }, 3000);
        } , 2000);
           
    }

});