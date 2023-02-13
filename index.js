const chartContainer = document.querySelector(".chart__container")

const data = [{"day": "mon","amount": 17.45},{"day": "tue","amount": 34.91},
  { "day": "wed","amount": 52.36},{"day": "thu","amount": 31.07},
  {"day": "fri","amount": 23.39},{"day": "sat","amount": 43.28},
  {"day": "sun","amount": 25.48}]
  
const max = findMax()

data.forEach(item => createBar(item))

 function findMax(){
    const amountArr = data.map(item => item.amount)
    return Math.max(...amountArr)
 }

  function createBar(item){
    const chartBar = document.createElement("span")
    chartBar.classList.add("fill")
    if(item.amount === max) chartBar.classList.add("active")
    chartBar.style.height = `${item.amount * 5 }px`
    
    const day = document.createElement("span")
    day.innerText = item.day

    const barContainer = document.createElement("div")
    barContainer.classList.add("value")
    barContainer.appendChild(chartBar)
    barContainer.appendChild(day)

    chartContainer.appendChild(barContainer)
  }

 
