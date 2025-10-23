const accordingBtns = document.querySelectorAll('.accor-btn')

accordingBtns.forEach(btn => {
    btn.addEventListener('click',  () =>  {
        const accordingDescription = btn.nextElementSibling

        btn.classList.toggle('active')

        if(accordingDescription.style.maxHeight) {
            accordingDescription.style.maxHeight = null
            
        }else {
            accordingDescription.style.maxHeight = accordingDescription.scrollHeight + 'rem'
            
        }
        closeOtherItems(btn)
    })
})


function closeOtherItems(currentBtn) {
    accordingBtns.forEach(btn => {
        // Cek apakah tombol saat ini BUKAN tombol yang baru saja diklik
        if (btn !== currentBtn) {
            // Hapus class 'active' dari tombol lain
            btn.classList.remove('active');
            
            // Tutup deskripsinya
            btn.nextElementSibling.style.maxHeight = null;
        }
    });
}