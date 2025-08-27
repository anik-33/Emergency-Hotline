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

//   Police Helpline Number copy button event listner 

document.getElementById('police-copy-btn')
  .addEventListener('click', function () {
    console.log('copy clicked');
    const copyCount = document.getElementById('copy-increase')
    let copyCountIncrease = parseInt(copyCount.innerText);
    copyCountIncrease++;
    copyCount.innerText = copyCountIncrease;

    const text = document.getElementById('police-number').innerText

    // clipboard
    navigator.clipboard.writeText(text)
      .then(() => {
        alert('Number has been Copied: ' + text);
      })
      .catch(err => {
        console.error('Failed to copy: ', err);
      });
  })
//  Fire Service Number copy button event listner 

document.getElementById('fire-service-copy-btn')
  .addEventListener('click', function () {
    console.log('copy clicked');
    const copyCount = document.getElementById('copy-increase')
    let copyCountIncrease = parseInt(copyCount.innerText);
    copyCountIncrease++;
    copyCount.innerText = copyCountIncrease;

    const text = document.getElementById('fire-service-number').innerText

    // clipboard
    navigator.clipboard.writeText(text)
      .then(() => {
        alert('Number has been Copied: ' + text);
      })
      .catch(err => {
        console.error('Failed to copy: ', err);
      });
  })
//  Ambulance Service Number copy button event listner 

document.getElementById('ambulance-copy-btn')
  .addEventListener('click', function () {
    console.log('copy clicked');
    const copyCount = document.getElementById('copy-increase')
    let copyCountIncrease = parseInt(copyCount.innerText);
    copyCountIncrease++;
    copyCount.innerText = copyCountIncrease;

    const text = document.getElementById('ambulance-number').innerText

    // clipboard
    navigator.clipboard.writeText(text)
      .then(() => {
        alert('Number has been Copied: ' + text);
      })
      .catch(err => {
        console.error('Failed to copy: ', err);
      });
  })
//  Women & Child Helpline Number copy button event listner 

document.getElementById('women-copy-btn')
  .addEventListener('click', function () {
    console.log('copy clicked');
    const copyCount = document.getElementById('copy-increase')
    let copyCountIncrease = parseInt(copyCount.innerText);
    copyCountIncrease++;
    copyCount.innerText = copyCountIncrease;

    const text = document.getElementById('women-number').innerText

    // clipboard
    navigator.clipboard.writeText(text)
      .then(() => {
        alert('Number has been Copied: ' + text);
      })
      .catch(err => {
        console.error('Failed to copy: ', err);
      });
  })
//  Anti-Corruption Helpline Number copy button event listner 

document.getElementById('anti-corrup-copy-btn')
  .addEventListener('click', function () {
    console.log('copy clicked');
    const copyCount = document.getElementById('copy-increase')
    let copyCountIncrease = parseInt(copyCount.innerText);
    copyCountIncrease++;
    copyCount.innerText = copyCountIncrease;

    const text = document.getElementById('anti-corrup-number').innerText

    // clipboard
    navigator.clipboard.writeText(text)
      .then(() => {
        alert('Number has been Copied: ' + text);
      })
      .catch(err => {
        console.error('Failed to copy: ', err);
      });
  })
//  Electricity Helpline Number copy button event listner 

document.getElementById('electricity-copy-btn')
  .addEventListener('click', function () {
    console.log('copy clicked');
    const copyCount = document.getElementById('copy-increase')
    let copyCountIncrease = parseInt(copyCount.innerText);
    copyCountIncrease++;
    copyCount.innerText = copyCountIncrease;

    const text = document.getElementById('electricity-number').innerText

    // clipboard
    navigator.clipboard.writeText(text)
      .then(() => {
        alert('Number has been Copied: ' + text);
      })
      .catch(err => {
        console.error('Failed to copy: ', err);
      });
  })
//  Brac Helpline Number copy button event listner 

document.getElementById('brac-copy-btn')
  .addEventListener('click', function () {
    console.log('copy clicked');
    const copyCount = document.getElementById('copy-increase')
    let copyCountIncrease = parseInt(copyCount.innerText);
    copyCountIncrease++;
    copyCount.innerText = copyCountIncrease;

    const text = document.getElementById('brac-number').innerText

    // clipboard
    navigator.clipboard.writeText(text)
      .then(() => {
        alert('Number has been Copied: ' + text);
      })
      .catch(err => {
        console.error('Failed to copy: ', err);
      });
  })
//   Railway Helpline Number copy button event listner 

document.getElementById('railway-copy-btn')
  .addEventListener('click', function () {
    console.log('copy clicked');
    const copyCount = document.getElementById('copy-increase')
    let copyCountIncrease = parseInt(copyCount.innerText);
    copyCountIncrease++;
    copyCount.innerText = copyCountIncrease;

    const text = document.getElementById('railway-number').innerText

    // clipboard
    navigator.clipboard.writeText(text)
      .then(() => {
        alert('Number has been Copied: ' + text);
      })
      .catch(err => {
        console.error('Failed to copy: ', err);
      });
  })
