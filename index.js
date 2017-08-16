function getFirstSelector(selector){
  return document.querySelector(`${selector}`)
}

function nestedTarget(){
  return getFirstSelector('div.target')
}

function increaseRankBy(n){
  const items = document.getElementById("app").querySelectorAll('ul.ranked-list li')

  for (let i = 0 ; i < items.length ; i++){
    items[i].innerHTML = (parseInt(items[i].innerHTML) + n)
  }
}

function deepestChild(){
  return document.getElementById('grand-node').querySelectorAll('div')[3]
}
