$(function() {

  openAnimation();

  // BODY FONT
  $('.body-font').on('change', function() {
    var font = $(this).val();
    $('.body').css("font-family", font);
    $('.body-font-output').text(font);
    $('.font-advice-container').addClass('advice-open');
    var alertBox = $('.font-pairing-output');
    switch (font) {
      case  'Raleway':
      	alertBox.removeClass('show-pairing');
        alertBox.text(font + ' paires nicely with Playfair Display');
        setTimeout(function() {
          alertBox.addClass('show-pairing');
        }, 500);
      	break;
      case 'Playfair Display':
        alertBox.removeClass('show-pairing');
        alertBox.text(font + ' paires nicely with Raleway');
        setTimeout(function() {
          alertBox.addClass('show-pairing');
        }, 500);
        break;
      case 'Lato':
        alertBox.removeClass('show-pairing');
        alertBox.text(font + ' paires nicely with Open Sans');
        setTimeout(function() {
          alertBox.addClass('show-pairing');
        }, 500);
        break;
      case 'Open Sans':
        alertBox.removeClass('show-pairing');
        alertBox.text(font + ' paires nicely with Lato');
        setTimeout(function() {
          alertBox.addClass('show-pairing');
        }, 500);
        break;
      case 'Roboto':
        alertBox.removeClass('show-pairing');
        alertBox.text(font + ' paires nicely with Oswald');
        setTimeout(function() {
          alertBox.addClass('show-pairing');
        }, 500);
        break;
      case 'Oswald':
        alertBox.removeClass('show-pairing');
        alertBox.text(font + ' paires nicely with Roboto');
        setTimeout(function() {
          alertBox.addClass('show-pairing');
        }, 500);
        break;
        case 'Raleway':
          alertBox.removeClass('show-pairing');
          alertBox.text(font + ' paires nicely with Open Sans');
          setTimeout(function() {
            alertBox.addClass('show-pairing');
          }, 500);
          break;
        case 'Montserrat':
          alertBox.removeClass('show-pairing');
          alertBox.text(font + ' paires nicely with Merriweather or Open Sans');
          setTimeout(function() {
            alertBox.addClass('show-pairing');
          }, 500);
          break;
        case 'Merriweather':
          alertBox.removeClass('show-pairing');
          alertBox.text(font + ' paires nicely with Montserrat');
          setTimeout(function() {
            alertBox.addClass('show-pairing');
          }, 500);
          break;
        case 'Eczar':
          alertBox.removeClass('show-pairing');
          alertBox.text(font + ' paires nicely with Lato');
          setTimeout(function() {
            alertBox.addClass('show-pairing');
          }, 500);
          break;
        case 'Quicksand':
          alertBox.removeClass('show-pairing');
          alertBox.text(font + ' paires nicely with Raleway');
          setTimeout(function() {
            alertBox.addClass('show-pairing');
          }, 500);
          break;
      default:
        alertBox.removeClass('show-pairing');
        alertBox.text(font + ' is a good choice!');
        setTimeout(function() {
          alertBox.addClass('show-pairing');
        }, 500);
    }
  });

  // HEADING FONT
  $('.heading-font').on('change', function() {
    var font = $(this).val();
    $('.heading').css("font-family", font)
    $('.heading-font-output').text(font);
    var alertBox = $('.font-pairing-output');
    switch (font) {
      case  'Raleway':
      	alertBox.removeClass('show-pairing');
        alertBox.text(font + ' paires nicely with Playfair Display');
        setTimeout(function() {
          alertBox.addClass('show-pairing');
        }, 500);
      	break;
      case 'Playfair Display':
        alertBox.removeClass('show-pairing');
        alertBox.text(font + ' paires nicely with Raleway');
        setTimeout(function() {
          alertBox.addClass('show-pairing');
        }, 500);
        break;
      case 'Lato':
        alertBox.removeClass('show-pairing');
        alertBox.text(font + ' paires nicely with Open Sans');
        setTimeout(function() {
          alertBox.addClass('show-pairing');
        }, 500);
        break;
      case 'Open Sans':
        alertBox.removeClass('show-pairing');
        alertBox.text(font + ' paires nicely with Lato');
        setTimeout(function() {
          alertBox.addClass('show-pairing');
        }, 500);
        break;
      case 'Roboto':
        alertBox.removeClass('show-pairing');
        alertBox.text(font + ' paires nicely with Oswald');
        setTimeout(function() {
          alertBox.addClass('show-pairing');
        }, 500);
        break;
      case 'Oswald':
        alertBox.removeClass('show-pairing');
        alertBox.text(font + ' paires nicely with Roboto');
        setTimeout(function() {
          alertBox.addClass('show-pairing');
        }, 500);
        break;
        case 'Raleway':
          alertBox.removeClass('show-pairing');
          alertBox.text(font + ' paires nicely with Open Sans');
          setTimeout(function() {
            alertBox.addClass('show-pairing');
          }, 500);
          break;
        case 'Montserrat':
          alertBox.removeClass('show-pairing');
          alertBox.text(font + ' paires nicely with Merriweather or Open Sans');
          setTimeout(function() {
            alertBox.addClass('show-pairing');
          }, 500);
          break;
        case 'Merriweather':
          alertBox.removeClass('show-pairing');
          alertBox.text(font + ' paires nicely with Montserrat');
          setTimeout(function() {
            alertBox.addClass('show-pairing');
          }, 500);
          break;
        case 'Eczar':
          alertBox.removeClass('show-pairing');
          alertBox.text(font + ' paires nicely with Lato');
          setTimeout(function() {
            alertBox.addClass('show-pairing');
          }, 500);
          break;
        case 'Quicksand':
          alertBox.removeClass('show-pairing');
          alertBox.text(font + ' paires nicely with Raleway');
          setTimeout(function() {
            alertBox.addClass('show-pairing');
          }, 500);
          break;
      default:
        alertBox.removeClass('show-pairing');
        alertBox.text(font + ' is a great choice!');
        setTimeout(function() {
          alertBox.addClass('show-pairing');
        }, 500);
    }
  });

  // BODY FONT WEIGHT
  $('.body-weight').on('change', function() {
    var weight = $(this).val();
    $('.body').css("font-weight",weight);
    $('.body-weight-output').text(weight);
  })

  // HEADING FONT WEIGHT
  $('.heading-weight').on('change', function() {
    var weight = $(this).val();
    $('.heading').css("font-weight",weight);
    $('.heading-weight-output').text(weight);
    console.log(weight)
  })

  // BODY FONT SIZE
  $('input[name="body-font-size"]').on('change', function() {
    var inputValue = $(this).val();
    $('.body').css("font-size",inputValue + "px");
    $('.body-font-size-output').text(inputValue);
  });

  // HEADING FONT SIZE
  $('input[name="heading-font-size"]').on('change', function() {
    var inputValue = $(this).val();
    $('.heading').css("font-size",inputValue + "px");
    $('.heading-font-size-output').text(inputValue);
  });

  // BODY LINE HEIGHT (LEADING)
  $('input[name="body-line-height"]').on('change', function() {
    var inputValue = $(this).val();
    $('.body').css("line-height",inputValue + "px");
    $('.body-line-height-output').text(inputValue);
    $('.body-lh-output-px').text(inputValue + 'px');
  });

  // HEADING LINE HEIGHT (LEADING)
  $('input[name="heading-line-height"]').on('change', function() {
    var inputValue = $(this).val();
    $('.heading').css("line-height",inputValue + "px");
    $('.heading-line-height-output').text(inputValue);
    $('.heading-lh-output-px').text(inputValue + 'px');
  });

  // BODY MARGIN TOP
  $('input[name="body-margin"]').on('change', function() {
    var inputValue = $(this).val();
    $('.body').css("margin-top",inputValue + "px");
    $('.body-margin-output').text(inputValue);
  });

  // HEADING MARGIN BOTTOM
  $('input[name="heading-margin"]').on('change', function() {
    var inputValue = $(this).val();
    $('.heading').css("margin-bottom",inputValue + "px");
    $('.heading-margin-output').text(inputValue);
  });

  // BODY MAX-WIDTH
  $('input[name="body-max-width"]').on('change', function() {
    var inputValue = $(this).val();
    $('.body').css("max-width",inputValue + "px");
    $('.body-max-width-output').text(inputValue);
  });

  // HEADING MAX-WIDTH
  $('input[name="heading-max-width"]').on('change', function() {
    var inputValue = $(this).val();
    $('.heading').css("max-width",inputValue + "px");
    $('.heading-max-width-output').text(inputValue);
  });

  // HEADING KERNING
  $('input[name="heading-kerning"]').on('change', function() {
    var inputValue = $(this).val();
    $('.heading').css("letter-spacing",inputValue + "px");
    $('.heading-kerning-output').text(inputValue);
    $('.heading-kerning-output-px').text(inputValue + "px");
  });

  // OPENS CSS MODAL
  $('.submit-btn').on('click', function(){
    $('.modal').addClass('open');
  });

  // CLOSES CSS MODAL
  $('.close-btn').on('click', function(){
    $('.modal').removeClass('open');
  });

  // RESET PATE BUTTON
  $('.reset-btn').on('click', function(){
    location.reload();
  })

  // TAB HEADING // SWITCH TO HEADER OPTIONS
  $('#heading-tab').on('click', function(){
    $(this).addClass('selected');
    $('#body-tab').removeClass('selected');

    $('.heading-form').addClass('active');
    $('.body-form').removeClass('active');
  });
  // TAB HEADING // SWITCH TO BODY OPTIONS
  $('#body-tab').on('click', function(){
    $(this).addClass('selected');
    $('#heading-tab').removeClass('selected');

    $('.heading-form').removeClass('active');
    $('.body-form').addClass('active');
  });

  $("#header-color").spectrum({
    color: "#000",
    className: "",
    chooseText: "Confirm Color",
    showInput: true,
    showInitial: true,
    //showPalette: true,
    showSelectionPalette: true,
    maxSelectionSize: 10,
    preferredFormat: "hex",
    change: function(color) {
        //$("#basic-log").text("change called: " + color.toHexString());
        $('.heading').css("color", color.toHexString());
        $('.header-hex-color').text(color.toHexString());
        $('.header-rgba-color').text(color.toRgbString());
    }
  });

  $("#body-color").spectrum({
    color: "#000",
    className: "",
    chooseText: "Confirm Color",
    showInput: true,
    showInitial: true,
    //showPalette: true,
    showSelectionPalette: true,
    maxSelectionSize: 10,
    preferredFormat: "hex",
    change: function(color) {
        //$("#basic-log").text("change called: " + color.toHexString());
        $('.body').css("color", color.toHexString());
        $('.body-hex-color').text(color.toHexString());
        $('.body-rgba-color').text(color.toRgbString());
    }
  });

  $("#bg-color").spectrum({
    color: "#fff",
    className: "",
    chooseText: "Confirm Color",
    showInput: true,
    showInitial: true,
    //showPalette: true,
    showSelectionPalette: true,
    maxSelectionSize: 10,
    preferredFormat: "hex",
    change: function(color) {
        //$("#basic-log").text("change called: " + color.toHexString());
        $('section').css("background", color.toHexString());
        $('.bg-hex-color').text(color.toHexString());
        $('.bg-rgba-color').text(color.toRgbString());
    }
  });

  // BODY TEXT ALIGN
  $('input[name=body-text-align]').on('change', function() {
    var checked = $('input[name=body-text-align]:checked').val();
    $('.body').css("text-align",checked);
    $('.body-text-align-output').text(checked);
  })

  // HEADING TEXT ALIGN
  $('input[name=heading-text-align]').on('change', function() {
    var checked = $('input[name=heading-text-align]:checked').val();
    $('.heading').css("text-align",checked);
    $('.heading-text-align-output').text(checked);
  })

  // COPY BUTTON ALERT
  $('.copy-btn').on('click', function(e){
    e.preventDefault();
    $('.alert-copied').toggleClass('alert-open');
    setTimeout(function() {
      $('.alert-copied').toggleClass('alert-open');
    }, 2000);
    copyToClipboard($("code"));
  });

  function openAnimation() {
    $('.main-logo').addClass('logo-animate');
    setTimeout(function() {
      $('.start-p').addClass('p-animate')
    }, 500);
    setTimeout(function() {
      $('.start-btn').addClass('btn-animate')
    }, 700);
  }

  $('.start-btn').on('click', function() {
    $('.intro-container').addClass('close');
  })

  new Clipboard('.copy-btn');

});


