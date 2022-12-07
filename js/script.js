'use strict';

/////////////////////////////////////////////////
// BANKIST APP
/////////////////////////////////////////////////
// Data
const account1 = {
  owner: 'Asmir Pljakić',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 2.5, // %,
  transferRate: 0.03, // % 0.03
  pin: 1111,
  movementsDates: [
    '2021-11-18T21:31:17.178Z',
    '2021-12-23T07:42:02.383Z',
    '2022-01-28T09:15:04.904Z',
    '2022-04-01T10:17:24.185Z',
    '2022-11-30T14:11:59.604Z',
    '2022-12-01T17:01:17.194Z',
    '2022-12-02T10:36:17.929Z',
    '2022-12-03T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'en-US', // en-US
};

const account2 = {
  owner: 'Berina Pepić',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 3.7, // %
  transferRate: 0.02, // % 0.02
  pin: 2222,
  movementsDates: [
    '2021-11-18T21:31:17.178Z',
    '2021-12-23T07:42:02.383Z',
    '2022-01-28T09:15:04.904Z',
    '2022-04-01T10:17:24.185Z',
    '2022-11-30T14:11:59.604Z',
    '2022-12-01T17:01:17.194Z',
    '2022-12-02T10:36:17.929Z',
    '2022-12-03T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'en-US', // en-US
};

const account3 = {
  owner: 'Ismail Carovac',
  movements: [200, -200, 340, -300, 2750, 50, 400, -460],
  interestRate: 4.2, // %
  transferRate: 0.02, // % 0.02
  pin: 3333,
  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2022-01-25T14:18:46.235Z',
    '2022-12-01T16:33:06.386Z',
    '2022-12-02T14:43:26.374Z',
    '2022-12-02T18:49:59.371Z',
    '2022-12-04T12:01:20.894Z',
  ],
  currency: 'CAD',
  locale: 'fr-CA', // fr-CA
};

const account4 = {
  owner: 'Semir Pljakić',
  movements: [430, 1000, 700, 50, 90, -100, 950, 700],
  interestRate: 1.7, // %
  transferRate: 0.15, // % 0.15
  pin: 4444,
  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2022-01-25T14:18:46.235Z',
    '2022-12-01T16:33:06.386Z',
    '2022-12-02T14:43:26.374Z',
    '2022-12-02T18:49:59.371Z',
    '2022-12-04T12:01:20.894Z',
  ],
  currency: 'CHF',
  locale: 'it-CH', // it-CH
};
const account5 = {
  owner: 'Seid Semsović',
  movements: [830, 430, -100, 950, 700, 50, -220, 550],
  interestRate: 2.8, // %
  transferRate: 0.025, // % 0.025
  pin: 5555,
  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2022-01-25T14:18:46.235Z',
    '2022-12-01T16:33:06.386Z',
    '2022-12-02T14:43:26.374Z',
    '2022-12-02T18:49:59.371Z',
    '2022-12-04T12:01:20.894Z',
  ],
  currency: 'KWD',
  locale: 'ar-KW', // ar-KW
};

const account6 = {
  owner: 'Naila Zukanović',
  movements: [430, -22, 750, 40, -400, 510, -190, 2724],
  interestRate: 1.1, // %
  transferRate: -18.69, // %  x18.96 %
  pin: 6666,
  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2022-01-25T14:18:46.235Z',
    '2022-12-01T16:33:06.386Z',
    '2022-12-02T14:43:26.374Z',
    '2022-12-02T18:49:59.371Z',
    '2022-12-04T12:01:20.894Z',
  ],
  currency: 'TRY',
  locale: 'tr-TR', // tr-TR
};

const account7 = {
  owner: 'Semin Zoranić',
  movements: [453, 3400, -150, -790, -3210, -1000, 4300, -30],
  interestRate: 3.7, // %
  transferRate: 0.02, // % 0.02
  pin: 7777,
  movementsDates: [
    '2021-11-18T21:31:17.178Z',
    '2021-12-23T07:42:02.383Z',
    '2022-01-28T09:15:04.904Z',
    '2022-04-01T10:17:24.185Z',
    '2022-11-30T14:11:59.604Z',
    '2022-12-01T17:01:17.194Z',
    '2022-12-02T10:36:17.929Z',
    '2022-12-03T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'en-US', // en-US
};

const account8 = {
  owner: 'Berin Rebronja',
  movements: [430, 50, 700, 50, -500, -100, 950, 700],
  interestRate: 1.7, // %
  transferRate: -0.05, // % 0.15
  pin: 8888,
  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2022-01-25T14:18:46.235Z',
    '2022-12-01T16:33:06.386Z',
    '2022-12-02T14:43:26.374Z',
    '2022-12-02T18:49:59.371Z',
    '2022-12-04T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US', // en-US
};

const accounts = [
  account1,
  account2,
  account3,
  account4,
  account5,
  account6,
  account7,
  account8,
];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
// Functions
const formatMovementDate = function (date, locale) {
  const calcdaysPassed = (date1, date2) =>
    Math.round(Math.abs((date2 - date1) / (1000 * 60 * 60 * 24)));
  const daysPassed = calcdaysPassed(new Date(), date);
  // console.log(daysPassed);

  if (daysPassed === 0) return `Today`;
  if (daysPassed === 1) return `Yesterday`;
  if (daysPassed <= 7) return `${daysPassed} days ago`;

  return new Intl.DateTimeFormat(locale).format(date);
};

const formatCur = function (value, locale, currency) {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
  }).format(value);
};

const displayMovements = function (acc, sort = false) {
  containerMovements.innerHTML = '';
  const movs = sort
    ? acc.movements.slice().sort((a, b) => a - b)
    : acc.movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const date = new Date(acc.movementsDates[i]);
    const displayDate = formatMovementDate(date, acc.locale);
    const formattedMov = formatCur(mov, acc.locale, acc.currency);

    const html = `<div class="movements__row">
          <div class="movements__type movements__type--${type}">${++i} ${type}</div>
          <div class="movements__date">${displayDate}</div>
          <div class="movements__value">${formattedMov}</div>
        </div>`;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  const formattedMov = formatCur(acc.balance, acc.locale, acc.currency);
  labelBalance.textContent = `${formattedMov}`;
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = formatCur(incomes, acc.locale, acc.currency);

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = formatCur(Math.abs(out), acc.locale, acc.currency);

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((deposit, i, arr) => {
      return deposit >= 1;
    })
    .reduce((acc, deposit) => acc + deposit, 0);
  labelSumInterest.textContent = formatCur(interest, acc.locale, acc.currency);
};

const clearInputUserPinCloseBtn = function () {
  //Clear input fields
  inputCloseUsername.value = inputClosePin.value = '';
  //Focus input user:
  inputCloseUsername.focus();
  inputClosePin.blur();
};

const clearInputUserPin = function () {
  inputLoginUsername.value = inputLoginPin.value = '';
  inputLoginPin.blur();
  inputLoginUsername.focus();
};

const clearInputTransferAmount = function () {
  inputTransferTo.value = inputTransferAmount.value = '';
  inputTransferAmount.blur();
  inputTransferTo.focus();
};

const updateUI = function (acc) {
  //Display movements
  displayMovements(acc);

  //Dispaly balance
  calcDisplayBalance(acc);

  //Display summary
  calcDisplaySummary(acc);
};

const startLogOutTimer = function () {
  let time = 60;

  const tick = function () {
    const min = String(Math.trunc(time / 60)).padStart(2, 0);
    const sec = String(time % 60).padStart(2, 0);

    //1)In each call, print the remaining time to UI
    labelTimer.textContent = `${min}:${sec}`;

    //2) When 0 secounds, stop timer and log out user and hide
    if (time === 0) {
      clearInterval(timer);
      containerApp.style.opacity = 0;
      hideContainer();
      labelWelcome.textContent = `Log in to get started`;
    }
    //3) Decrese 1s
    time--;
  };

  tick();
  const timer = setInterval(tick, 1000);
  return timer;
};

const hideContainer = function () {
  setTimeout(function () {
    containerApp.classList.add('hidden');
  }, 800);
};

const showContainer = function () {
  containerApp.classList.remove('hidden');
  setTimeout(function () {
    containerApp.style.opacity = 100;

    //Display UI and message
    labelWelcome.textContent = `Wellcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
  }, 100);
};
// Functions
/////////////////////////////////////////////////

//Event handler
let currentAccount, timer;

//Fake login:
// currentAccount = account1;
// updateUI(currentAccount);
// containerApp.style.opacity = 100;

hideContainer();
//LOGIN:
btnLogin.addEventListener('click', function (e) {
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value.toLowerCase()
  );
  // console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    //clear userpin and usename:
    clearInputUserPin();
    inputLoginUsername.blur();

    //Timer:
    if (timer) clearInterval(timer);
    timer = startLogOutTimer();

    showContainer();

    const now = new Date();
    const options = {
      hour: 'numeric',
      minute: 'numeric',
      day: 'numeric',
      month: 'numeric',
      year: 'numeric',
      weekday: 'short',
    };
    labelDate.textContent = new Intl.DateTimeFormat(
      currentAccount.locale,
      options
    ).format(now);

    updateUI(currentAccount);
  } else {
    alert('USERNAME OR PASSWORD NOT CORRECT!');
    clearInputUserPin();

    //Hide UI
    containerApp.style.opacity = 0;
    hideContainer();
    document.querySelector('.welcome').textContent = `Log in to get started`;
  }
});

//TRANSFER:
btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value.toLowerCase()
  );

  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);

    receiverAcc.movements.push(amount - amount * receiverAcc.transferRate);

    // Add transfer date:
    currentAccount.movementsDates.push(new Date().toISOString());
    receiverAcc.movementsDates.push(new Date().toISOString());

    updateUI(currentAccount);

    //Reset timer:
    clearInterval(timer);
    timer = startLogOutTimer();
  } else {
    alert(
      "The username is incorrect or you don't have enough money in your account."
    );
    clearInputTransferAmount();
  }
});

//CLOSE:
btnClose.addEventListener('click', function (e) {
  e.preventDefault();
  // console.log('Delete');

  if (
    inputCloseUsername?.value.toLowerCase() === currentAccount.username &&
    Number(inputClosePin?.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    // console.log(index);

    //Delete account
    accounts.splice(index, 1);

    //Hide UI
    containerApp.style.opacity = 0;

    //Change paragraf:
    document.querySelector(
      '.welcome'
    ).textContent = `'${currentAccount.owner}' account has been deleted.`;

    //Clear timer:
    clearInterval(timer);
  } else {
    alert('USERNAME OR PASSWROD NOT CORRECT!');
    clearInputUserPinCloseBtn();
  }
  inputCloseUsername.value = inputClosePin.value = '';
});

//LOAN:
btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  //To round our money to a smaller value without decimals:
  const amount = Math.floor(inputLoanAmount.value);
  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    setTimeout(function () {
      // Add movement
      currentAccount.movements.push(amount);

      //Add loan date
      currentAccount.movementsDates.push(new Date().toISOString());

      // Update UI
      updateUI(currentAccount);

      //Reset timer:
      clearInterval(timer);
      timer = startLogOutTimer();
    }, 1000);
  }
  inputLoanAmount.value = '';
});

let sorted = false;

//SORT
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount, !sorted);
  sorted = !sorted;
});
