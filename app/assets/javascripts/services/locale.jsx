function locale(language) {
    $.ajax({
      url:'/locale',
      method:"put",
      beforeSend: function(xhr) {xhr.setRequestHeader('X-CSRF-Token', $('meta[name="csrf-token"]').attr('content'))},
      data:{
        locale: language,
      },
      success:function() {
        console.log("Success locale apply! ")
        I18n.locale = language;
      },
      error:function(){
        console.log("Error locale is not apply!")
      }
    });
  }  
