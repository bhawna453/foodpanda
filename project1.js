
function toggleMobileMenu(menu) {
    menu.classList.toggle('open');}
    $(document).ready(function(){
        $('.dot1 ').click(function(){
          $('.vid1').css('display','block');
          $('.vid2').css('display','none');
          $('.vid3').css('display','none');
          $('#p1').css('color','black');
        });
        $('.dot2').click(function(){
          $('.vid1').css('display','none');
          $('.vid2').css('display','block');
          $('.vid3').css('display','none');
          $('#h12').css('color','red');
          $('#p1').css('color','white');
        });
        $('.dot3 ').click(function(){
          $('.vid1').css('display','none');
          $('.vid2').css('display','none');
          $('.vid3').css('display','block');
          $('#p1').css('color','white');
        });
      });
    