  // Show Me The Money Button to generate random image of money
  var showMeTheMoneyImageBtn = document.getElementById('showMeTheMoneyImageBtn');

  // Output Div
  var imageOutputDiv = document.getElementById('imageOutputDiv');

  // Variables
  var randomIndex;

  // Image Array
  var moneyImageArray = 
  
  [
      'norwegianKroner.jpg',
      'chineseYuan.jpg',
      'czechKoruna.jpg',
      'danishKroner.jpg',
      'dollarBill.jpg',
      'hongKongDollar.jpg',
      'hundredPoundNote.jpg',
      'kenyanShilling.jpg',
      'swedishKroner.jpg',
      'tanzanianShilling.jpg',
      'goldBars.jpg'
  ]

      /* [

          {
              name: 'Norwegian Kroner',
              image: '0001norwegianKroner.jpg',
          },
          {
              name: 'Chinese Yuan',
              image: '0002ChineseYuan.jpg',
          },
          {
              name: 'Czech Koruna',
              image: '0003czechKoruna.jpg',
          },
          {
              name: 'Danish Kroner',
              image: '0004danishKroner.jpg',
          },
          {
              name:  'American Dollar',
              image: '0005dollarBill.jpg',
          },
          {
              name:  'Hong Kong Dollar',
              image: '0006hongKongDollar.jpg',
          },
          {
              name:  'British Pund Sterling',
              image: '0007hundredPoundNote.jpg',
          },
          {
              name:  'Kenyan Shilling',
              image: 'images/0008kenyanShilling.jpg',
          },
          {
              name:  'Swedish Kroner',
              image: '0009swedishKroner-jpg',
          },
          {
              name:  'Tanzanian Shilling',
              image: 'images/00010tanzanianShilling.jpg',
          },
          {
              name:  'Gold Bars',
              image: 'images/goldBars.jpg',
          },
      ]; */

      // Functions

      function setRandomIndex() {
      randomIndex = Math.floor( Math.random() * moneyImageArray.length );
  } 
    
      function showMeTheMoney() {
          setRandomIndex();   // Initiates randomIndex

          if ( moneyImageArray[randomIndex].includes('.jpg') === true ){
              imageOutputDiv.innerHTML = `
                  <img src='images/${ moneyImageArray[randomIndex]}'/>
              `;
          }else{
              imageOutputDiv.innerHTML = moneyImageArray[randomIndex];
          }
      }
       
      // Initiate onclick Section
      showMeTheMoneyImageBtn.onclick = showMeTheMoney;