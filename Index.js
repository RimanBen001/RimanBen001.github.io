function search_Novel() {
  let input = document.getElementById('searchbar').value;
  input = input.toLowerCase();
  console.log(input);
  let x = document.getElementsByClassName('seconddiv');

  for(i = 0; i < x.length; i++){
    if(!x[i].innerHTML.toLowerCase().includes(input)){
      x[i].style.display = "none";
    }
    else {
      x[i].style.display = "inline-block";
    }
  }
}
