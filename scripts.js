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

    const navCoin = document.getElementById('nav-coin').innerText;
    let coinNumbers = parseInt(navCoin);

    if (coinNumbers >= 20) {
      coinNumbers -= 20;
      document.getElementById('nav-coin').innerText = coinNumbers;

      alert('Calling National Emergency Number 999');

  // history shown after call
      const data = {
        name: 'National Emergency Number',
        number: '999',
        date: new Date().toLocaleTimeString()
      };
      callingData.push(data);
      console.log(callingData);

      const historyContainer = document.getElementById('history-container')

      historyContainer.innerText=''
      for (const history of callingData) {
        const div = document.createElement('div')
        div.innerHTML = `
         <div class="flex justify-between items-center p-4 mt-2 bg-slate-300 rounded-lg">
                            <div>
                                <h1 class="font-bold">${data.name}</h1>
                                <h1>${data.number}</h1>
                            </div>
                            <div>
                                <h1>${data.date}</h1>
                            </div>
                        </div>
        `
        historyContainer.appendChild(div)
      }



    } else {
      alert('Insufficient coin');
    }
  });


// National Emergency copy button event listner
document.getElementById('national-emergency-copy-btn')
  .addEventListener('click', function () {
    console.log('copy clicked');
    const copyCount = document.getElementById('copy-increase')
    let copyCountIncrease = parseInt(copyCount.innerText);
    copyCountIncrease++;
    copyCount.innerText = copyCountIncrease;

    const text = document.getElementById('national-emergency-number').innerText

    // clipboard
    navigator.clipboard.writeText(text)
      .then(() => {
        alert('Number has been Copied: ' + text);
      })
      .catch(err => {
        console.error('Failed to copy: ', err);
      });
  })

