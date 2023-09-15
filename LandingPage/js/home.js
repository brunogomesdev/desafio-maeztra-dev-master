document.addEventListener('DOMContentLoaded', function() {



    document.querySelectorAll('.footer-menu h3').forEach((e) => {
        console.log(e)
        e.addEventListener('click', () => {
            console.log(e)
            e.nextElementSibling.classList.toggle('active');
        });

    });


    document.querySelector('.modal-fechar').addEventListener('click', () => {
        document.querySelector('.content-modal').classList.add('active')

    })


})