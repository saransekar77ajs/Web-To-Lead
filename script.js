function beforesubmit(event) {
  let outputDate = document.querySelector('.outputDate');
  let inputDate = document.querySelector('.inputDate');
  let formattedDate = new Date(inputDate.value).toLocaleDateString('en-US');
  console.log(formattedDate);
  outputDate.value = formattedDate;
}
