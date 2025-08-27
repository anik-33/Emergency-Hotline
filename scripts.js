// Event listener on click starts here 
// heart button click event listener
const callingData = []

document.querySelectorAll('.heart-btn').forEach((btn, index) => {
  btn.addEventListener("click", () => {
    console.log(`Heart Button  clicked!`);
    const heartCount = document.getElementById('nav-heart-count');

    let count = parseInt(heartCount.innerText);
    count++;
    heartCount.innerText = count;
  });
});

// Natioal Emergency Call button event listtener
document.getElementById('national-emergency-call-btn')
  .addEventListener('click', function () {
    console.log('call button clicked')
    const navCoin = document.getElementById('nav-coin').innerText
    let coinNumbers = parseInt(navCoin)
    if (coinNumbers >= 20) {
      coinNumbers -= 20;
      alert('Calling National Emergency Number 999')
      

      document.getElementById('nav-coin').innerText = coinNumbers;
      return;

    }
    else {
      alert('Insufficient coin');
      return;
    }

    const data = {
      name: 'Calling National Emergency Number',
      date: new Date().toLocaleTimeString()
    }
    callingData.push(data)
    console.log(callingData)
  });

// National Emergency copy button event listner
document.getElementById('national-emergency-copy-btn')
.addEventListener('click',function(){
  console.log('copy clicked');
  const copyCount =document.getElementById('copy-increase')
  let copyCountIncrease = parseInt(copyCount.innerText);
  copyCountIncrease++;
  copyCount.innerText =copyCountIncrease;

   const text = document.getElementById('national-emergency-number').innerText
    
    // clipboard এ কপি করছি
    navigator.clipboard.writeText(text)
      .then(() => {
        alert('Copied: ' + text); // সফল হলে alert দেখাবে
      })
      .catch(err => {
        console.error('Failed to copy: ', err);
      });
})

