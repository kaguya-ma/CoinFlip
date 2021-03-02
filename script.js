let heads = 0;
let tails = 0;

function tossCoin() {
  let result = Math.floor(Math.random() * 2)
  console.log(result) 
  if (result === 0) {
    document.querySelector("img").setAttribute("src", "heads.png")
    heads++
    document.querySelector("#heads").innerHTML=`Heads: ${heads}`
  }

  else {
    document.querySelector("img").setAttribute("src", "tails.png")
    tails++
    document.querySelector("#tails").innerHTML=`Tails: ${tails}`
  }
}

