function getFirstSelector(selector){
  return document.querySelector(`${selector}`)
}

function nestedTarget(){
  return getFirstSelector('div.target')
}


// parseInt()
function increaseRankBy(n){
  const li_items = document.getElementById('app').querySelectorAll('.ranked-list li')

  for (let i = 0; i < li_items.length; i ++){

    li_items[i].innerHTML = (parseInt(li_items[i].innerHTML) + n).toString()
  }
}

function deepestChild(){
  return document.querySelector('#grand-node div div div div')
}