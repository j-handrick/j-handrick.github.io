$('img').on('click', function(e) {
  $('#imgViewer').html('').append( $(e.currentTarget).clone().removeClass('img-responsive').removeClass('img-thumbnail') )
  $('#viewImg').modal('show')
})

$('img').each(function(i,e) {
  $(e).wrap('<div class="img-wrapper"></div>')
})
