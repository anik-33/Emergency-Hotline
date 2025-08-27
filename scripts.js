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

// history show function call 




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

      
      const data = {
        name: 'National Emergency Number',
        number: '999',
        date: new Date().toLocaleTimeString()
      };
      callingData.push(data);
      console.log(callingData);

      const historyContainer = document.getElementById('history-container')

      historyContainer.innerText = ''
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

// Police Helpline Number Call button event listtener
document.getElementById('police-call-btn')
  .addEventListener('click', function () {
    console.log('call button clicked')

    const navCoin = document.getElementById('nav-coin').innerText;
    let coinNumbers = parseInt(navCoin);

    if (coinNumbers >= 20) {
      coinNumbers -= 20;
      document.getElementById('nav-coin').innerText = coinNumbers;

      alert('Calling Police Helpline Number 999');

      
      const data = {
        name: ' Police Helpline',
        number: '999',
        date: new Date().toLocaleTimeString()
      };
      callingData.push(data);
      console.log(callingData);

      const historyContainer = document.getElementById('history-container')

      historyContainer.innerText = ''
      for (const history of callingData) {
        const div = document.createElement('div')
        div.innerHTML = `
         <div class="flex justify-between items-center gap-2 p-4 mt-2 bg-slate-300 rounded-lg">
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

// Fire Service Number Call button event listtener
document.getElementById('fire-service-call-btn')
  .addEventListener('click', function () {
    console.log('call button clicked')

    const navCoin = document.getElementById('nav-coin').innerText;
    let coinNumbers = parseInt(navCoin);

    if (coinNumbers >= 20) {
      coinNumbers -= 20;
      document.getElementById('nav-coin').innerText = coinNumbers;

      alert('Calling Fire Service...999');

      
      const data = {
        name: ' Fire Service',
        number: '999',
        date: new Date().toLocaleTimeString()
      };
      callingData.push(data);
      console.log(callingData);

      const historyContainer = document.getElementById('history-container')

      historyContainer.innerText = ''
      for (const history of callingData) {
        const div = document.createElement('div')
        div.innerHTML = `
         <div class="flex justify-between items-center gap-2 p-4 mt-2 bg-slate-300 rounded-lg">
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

//Ambulance Service Number Call button event listtener
document.getElementById('ambulance-call-btn')
  .addEventListener('click', function () {
    console.log('call button clicked')

    const navCoin = document.getElementById('nav-coin').innerText;
    let coinNumbers = parseInt(navCoin);

    if (coinNumbers >= 20) {
      coinNumbers -= 20;
      document.getElementById('nav-coin').innerText = coinNumbers;

      alert('Calling Ambulance...1994-999999');

      
      const data = {
        name: ' Ambulance',
        number: '1994-999999',
        date: new Date().toLocaleTimeString()
      };
      callingData.push(data);
      console.log(callingData);

      const historyContainer = document.getElementById('history-container')

      historyContainer.innerText = ''
      for (const history of callingData) {
        const div = document.createElement('div')
        div.innerHTML = `
         <div class="flex justify-between items-center gap-2 p-4 mt-2 bg-slate-300 rounded-lg">
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

//Women & Child Helpline Number Call button event listtener
document.getElementById('women-call-btn')
  .addEventListener('click', function () {
    console.log('call button clicked')

    const navCoin = document.getElementById('nav-coin').innerText;
    let coinNumbers = parseInt(navCoin);

    if (coinNumbers >= 20) {
      coinNumbers -= 20;
      document.getElementById('nav-coin').innerText = coinNumbers;

      alert('Calling Women & Child Helpline...109');

      
      const data = {
        name: ' Women & Child',
        number: '109',
        date: new Date().toLocaleTimeString()
      };
      callingData.push(data);
      console.log(callingData);

      const historyContainer = document.getElementById('history-container')

      historyContainer.innerText = ''
      for (const history of callingData) {
        const div = document.createElement('div')
        div.innerHTML = `
         <div class="flex justify-between items-center gap-2 p-4 mt-2 bg-slate-300 rounded-lg">
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

//Anti-Corruption Helpline Number Call button event listtener
document.getElementById('anti-corrup-call-btn')
  .addEventListener('click', function () {
    console.log('call button clicked')

    const navCoin = document.getElementById('nav-coin').innerText;
    let coinNumbers = parseInt(navCoin);

    if (coinNumbers >= 20) {
      coinNumbers -= 20;
      document.getElementById('nav-coin').innerText = coinNumbers;

      alert('Calling Anti-Corruption...106');

      
      const data = {
        name: ' Anti-Corruption',
        number: '106',
        date: new Date().toLocaleTimeString()
      };
      callingData.push(data);
      console.log(callingData);

      const historyContainer = document.getElementById('history-container')

      historyContainer.innerText = ''
      for (const history of callingData) {
        const div = document.createElement('div')
        div.innerHTML = `
         <div class="flex justify-between items-center gap-2 p-4 mt-2 bg-slate-300 rounded-lg">
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

//Electricity Helpline Number Call button event listtener
document.getElementById('electricity-call-btn')
  .addEventListener('click', function () {
    console.log('call button clicked')

    const navCoin = document.getElementById('nav-coin').innerText;
    let coinNumbers = parseInt(navCoin);

    if (coinNumbers >= 20) {
      coinNumbers -= 20;
      document.getElementById('nav-coin').innerText = coinNumbers;

      alert('Calling Electricity Outage...16216');

      
      const data = {
        name: 'Electricity Outage',
        number: '16216',
        date: new Date().toLocaleTimeString()
      };
      callingData.push(data);
      console.log(callingData);

      const historyContainer = document.getElementById('history-container')

      historyContainer.innerText = ''
      for (const history of callingData) {
        const div = document.createElement('div')
        div.innerHTML = `
         <div class="flex justify-between items-center gap-2 p-4 mt-2 bg-slate-300 rounded-lg">
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

//Brac Helpline Number Call button event listtener
document.getElementById('brac-call-btn')
  .addEventListener('click', function () {
    console.log('call button clicked')

    const navCoin = document.getElementById('nav-coin').innerText;
    let coinNumbers = parseInt(navCoin);

    if (coinNumbers >= 20) {
      coinNumbers -= 20;
      document.getElementById('nav-coin').innerText = coinNumbers;

      alert('Calling Brac Helpline...16445');

      
      const data = {
        name: 'Brac Helpline',
        number: '16445',
        date: new Date().toLocaleTimeString()
      };
      callingData.push(data);
      console.log(callingData);

      const historyContainer = document.getElementById('history-container')

      historyContainer.innerText = ''
      for (const history of callingData) {
        const div = document.createElement('div')
        div.innerHTML = `
         <div class="flex justify-between items-center gap-2 p-4 mt-2 bg-slate-300 rounded-lg">
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

//Bangladesh Railway Helpline Number Call button event listtener
document.getElementById('railway-call-btn')
  .addEventListener('click', function () {
    console.log('call button clicked')

    const navCoin = document.getElementById('nav-coin').innerText;
    let coinNumbers = parseInt(navCoin);

    if (coinNumbers >= 20) {
      coinNumbers -= 20;
      document.getElementById('nav-coin').innerText = coinNumbers;

      alert('Calling Bangladesh Railway...163');

      
      const data = {
        name: 'Bangladesh Railway',
        number: '163',
        date: new Date().toLocaleTimeString()
      };
      callingData.push(data);
      console.log(callingData);

      const historyContainer = document.getElementById('history-container')

      historyContainer.innerText = ''
      for (const history of callingData) {
        const div = document.createElement('div')
        div.innerHTML = `
         <div class="flex justify-between items-center gap-2 p-4 mt-2 bg-slate-300 rounded-lg">
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



