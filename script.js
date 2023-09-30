var swiper = new Swiper(".mySwiperSlide", {
    grabCursor: true,
    spaceBetween:20,
    centeredSlides: false,
    slidesPerView: "auto",
    navigation: {
        nextEl: ".bxs-chevron-right",
        prevEl: ".bxs-chevron-left",
      },
      
  });

  var swiper = new Swiper(".mySwiperPopular", {
    grabCursor: true,
    spaceBetween:20,
    centeredSlides: false,
    slidesPerView: "auto",
      
    navigation: {
        nextEl: ".bxs-chevron-right-circle",
        prevEl: ".bxs-chevron-left-circle",
      },
      
  });

  document.querySelector('.kategori1').addEventListener('click', function () {
    document.querySelector('.produk-kategori1').classList.toggle('hidden');
    document.querySelector('.produk-kategori2').classList.remove('hidden');
    document.querySelector('.produk-kategori3').classList.remove('hidden');
    document.querySelector('.produk-kategori4').classList.remove('hidden');
    document.querySelector('.produk-kategori5').classList.remove('hidden');


  });

  document.querySelector('.kategori2').addEventListener('click', function () {
    document.querySelector('.produk-kategori2').classList.toggle('hidden');
    document.querySelector('.produk-kategori3').classList.remove('hidden');
    document.querySelector('.produk-kategori1').classList.remove('hidden');
    document.querySelector('.produk-kategori4').classList.remove('hidden');
    document.querySelector('.produk-kategori5').classList.remove('hidden');


  });

  document.querySelector('.kategori3').addEventListener('click', function () {
    document.querySelector('.produk-kategori3').classList.toggle('hidden');
    document.querySelector('.produk-kategori2').classList.remove('hidden');
    document.querySelector('.produk-kategori1').classList.remove('hidden');
    document.querySelector('.produk-kategori4').classList.remove('hidden');
    document.querySelector('.produk-kategori5').classList.remove('hidden');


  });

  document.querySelector('.kategori4').addEventListener('click', function () {
    document.querySelector('.produk-kategori4').classList.toggle('hidden');
    document.querySelector('.produk-kategori2').classList.remove('hidden');
    document.querySelector('.produk-kategori3').classList.remove('hidden');
    document.querySelector('.produk-kategori1').classList.remove('hidden');
    document.querySelector('.produk-kategori5').classList.remove('hidden');


  });
  document.querySelector('.kategori5').addEventListener('click', function () {
    document.querySelector('.produk-kategori5').classList.toggle('hidden');
    document.querySelector('.produk-kategori2').classList.remove('hidden');
    document.querySelector('.produk-kategori3').classList.remove('hidden');
    document.querySelector('.produk-kategori1').classList.remove('hidden');
    document.querySelector('.produk-kategori4').classList.remove('hidden');


  });
