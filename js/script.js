$(document).ready(()=>{


var labels = $('label')

var order = 0;

for (var i = 0; i < labels.length; i++) {
   $(labels[i]).click(function(e){
      if($(this).attr('id')!='checked'){
      $('#'+$(this).prop('for')).attr("checked", "checked")
      console.log($(this).prop('for').charAt(0))
      $('.dice').css('opacity','0.2')
      order = parseInt($(this).prop('for').charAt(0))
      $('#'+order).css('opacity','1')
      $('.question').css('display','none')
      $('#question'+(order+1)).css('display', 'block')
    }
  })

}

$('#previous').click((e)=>{
  if(order > 0){
  console.log(order)
  $('.dice').css('opacity','0.2')
  $('#'+(order-1)).css('opacity','1')
  $('.question').css('display','none')
  $('#question'+(order)).css('display', 'block')
  console.log('.'+order)
  console.log($('.'+order).attr('checked'))
  for (var i = 0; i < $('.'+order).length; i++) {
    $($('.'+order)[i]).removeAttr('checked')
    console.log($('.'+order)[i])
  }
  console.log($('.1'))
  order -= 1
  }
})









})
