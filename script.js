const counters = document.querySelectorAll('.counter')

counters.forEach(counter => {
  counter.innerText = "0"
  const target = +counter.getAttribute('data-target') //+ turn string(data-target) into a number, get value saved in data-target
  const increment = target / 200 //set speed of incrementing counter

  const updateCounter = () => {
    const c = +counter.innerText //turn innerText into a number with plus

    if(c < target) {
      counter.innerText = `${Math.ceil(c + increment)}` //Math.ceil rounds number up
      setTimeout(updateCounter, 1) //wait 1 second before next execution of updateCounter
    } else {
      counter.innerText = target
    }
  }

  updateCounter()
})
