function beforesubmit(event) {
  let outputDate = document.querySelector('.outputDate');
  let inputDate = document.querySelector('.inputDate');
  let formattedDate = new Date(inputDate.value).toLocaleDateString('en-US');
  console.log(formattedDate);
  outputDate.value = formattedDate;
}

function timestamp() {
  var response = document.getElementById('g-recaptcha-response');
  if (response == null || response.value.trim() == '') {
    var elems = JSON.parse(
      document.getElementsByName('captcha_settings')[0].value
    );
    elems['ts'] = JSON.stringify(new Date().getTime());
    document.getElementsByName('captcha_settings')[0].value =
      JSON.stringify(elems);
  }
}
setInterval(timestamp, 500);
