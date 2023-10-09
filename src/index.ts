import { gsap } from "gsap";

// animation
const tl = gsap.timeline();

tl
.to('.convert-from', {
    yPercent: -20,
    opacity: 0,
    delay:0.9,
    ease: 'Power3.out',
    })
.to('.equal', {
    yPercent: -20,
    opacity: 0,
    ease: 'Power3.out',
    })
    .to('.convert-to', {
        yPercent: -20,
        opacity: 0,
        ease: 'Power3.out',
        })
.to('.loader', {
height: '0vh',
delay:0.8,
ease: 'slow(0.7, 0.7, false)',
})
.from('.nav', {
xPercent: -20,
opacity: 0,
ease: 'Power3.out',
})
.from('.live', {
    yPercent: -20,
    opacity: 0,
    ease: 'Power3.out',
    })
    .from('.exc', {
        xPercent: -20,
        opacity: 0,
        ease: 'Power3.out',
        })


// Get the current date and time
const currentDate = new Date();

// Extract the current time components
const currentHours: number = currentDate.getHours();
const currentMinutes: number = currentDate.getMinutes();

// Format the time as a string (e.g., "HH:MM")
(document.querySelector('#time') as HTMLElement).textContent =  `${currentHours.toString().padStart(2, '0')}:${currentMinutes.toString().padStart(2, '0')}`;


// live date
let currDate = new Date();
let domEnder: string[] = ['th', 'st', 'nd', 'rd', 'th', 'th', 'th', 'th', 'th', 'th'];
let dayOfMonth: string =currDate.getDate() < 10
? '0' + currDate.getDate() + domEnder[currDate.getDate()]
: currDate.getDate() + domEnder[parseFloat(('' + currDate.getDate()).substr(('' +
currDate.getDate()).length - 1))],
months = [
'Jan',
'Feb',
'March',
'April',
'May',
'June',
'July',
'Aug',
'Sept',
'Oct',
'Nov',
'Dec',
];
let curMonth: string = months[currDate.getMonth()];
let curYear: number = currDate.getFullYear();
(document.querySelector('.date') as HTMLElement).textContent = `${dayOfMonth} ${curMonth} ${curYear}`;
// coverter functionality
let currencyOne = document.getElementById('currency-1') as HTMLSelectElement;
let currencyTwo = document.getElementById('currency-2') as HTMLSelectElement;
const num = document.getElementById('num') as HTMLInputElement;
const amount = document.getElementById('amount') as HTMLElement;
const rateEL = document.getElementById('rate') as HTMLElement;
const swapEl = document.getElementById('swapBtn') as HTMLElement;


// Fetch exchange rates and update the DOM
function calculate() {
const currOne: string = currencyOne.value;
const currTwo: string = currencyTwo.value;
fetch(`https://api.exchangerate-api.com/v4/latest/${currOne}`)
.then((res) => res.json())
.then((data) => {
const rate: any = data.rates[currTwo];
rateEL.innerText = `1 ${currOne} = ${rate} ${currTwo}`;
amount.innerText = (num.valueAsNumber * rate).toFixed(2);
});
}
currencyOne.addEventListener('change', calculate);
currencyTwo.addEventListener('change', calculate);
num.addEventListener('input', calculate);
swapEl.addEventListener('click', () => {
const temp = currencyOne.value;
currencyOne.value = currencyTwo.value;
currencyTwo.value = temp;calculate();
});
calculate();


// live rates
function liveRate() {
const baseCurr = 'USD';
fetch(`https://api.exchangerate-api.com/v4/latest/${baseCurr}`)
.then((res) => res.json())
.then((data) => {
const tableWrapper = document.querySelector('.table-wrapper') as HTMLElement;
tableWrapper.innerHTML = `
<table>
<tr>
    <th>currency code</th>
    <th>currency Rate</th>
</tr>
<tr>
    <td class="code">AED</td>
    <td>${data.rates['AED']}</td>
</tr>
<tr>
    <td class="code">ARS</td>
    <td>${data.rates['ARS']}</td>
</tr>
<tr>
    <td class="code">AUD</td>
    <td>${data.rates['AUD']}</td>
</tr>
<tr>
    <td class="code">BGN</td>
    <td>${data.rates['BGN']}</td>
</tr>
<tr>
    <td class="code">BRL</td>
    <td>${data.rates['BRL']}</td>
</tr>
<tr>
    <td class="code">BSD</td>
    <td>${data.rates['BSD']}</td>
</tr>
</table>
<table>
<tr>
    <th>currency code</th>
    <th>currency Rate</th>
</tr>
<tr>
    <td class="code">CAD</td>
    <td>${data.rates['CAD']}</td>
</tr>
<tr>
    <td class="code">CHF</td>
    <td>${data.rates['CHF']}</td>
</tr>
<tr>
    <td class="code">CLP</td>
    <td>${data.rates['CLP']}</td>
</tr>
<tr>
    <td class="code">CNY</td>
    <td>${data.rates['CNY']}</td>
</tr>
<tr>
    <td class="code">COP</td>
    <td>${data.rates['COP']}</td>
</tr>
<tr>
    <td class="code">CZK</td>
    <td>${data.rates['CZK']}</td>
</tr>
</table>
<table>
<tr>
    <th>currency code</th>
    <th>currency Rate</th>
</tr>
<tr>
    <td class="code">DKK</td>
    <td>${data.rates['DKK']}</td>
</tr>
<tr>
    <td class="code">DOP</td>
    <td>${data.rates['DOP']}</td>
</tr>
<tr>
    <td class="code">EGP</td>
    <td>${data.rates['EGP']}</td>
</tr>
<tr>
    <td class="code">EUR</td>
    <td>${data.rates['EUR']}</td>
</tr>
<tr>
    <td class="code">FJD</td>
    <td>${data.rates['FJD']}</td>
</tr>
<tr>
    <td class="code">GBP</td>
    <td>${data.rates['GBP']}</td>
</tr>
</table>
<table>
<tr>
    <th>currency code</th>
    <th>currency Rate</th>
</tr>
<tr>
    <td class="code">GTQ</td>
    <td>${data.rates['GTQ']}</td>
</tr>
<tr>
    <td class="code">HKD</td>
    <td>${data.rates['HKD']}</td>
</tr>
<tr>
    <td class="code">HRK</td>
    <td>${data.rates['HRK']}</td>
</tr>
<tr>
    <td class="code">HUF</td>
    <td>${data.rates['HUF']}</td>
</tr>
<tr>
    <td class="code">IDR</td>
    <td>${data.rates['IDR']}</td>
</tr>
<tr>
    <td class="code">ILS</td>
    <td>${data.rates['ILS']}</td>
</tr>
</table>
<table>
<tr>
    <th>currency code</th>
    <th>currency Rate</th>
</tr>
<tr>
    <td class="code">INR</td>
    <td>${data.rates['INR']}</td>
</tr>
<tr>
    <td class="code">ISK</td>
    <td>${data.rates['ISK']}</td>
</tr>
<tr>
    <td class="code">JPY</td>
    <td>${data.rates['JPY']}</td>
</tr>
<tr>
    <td class="code">KRW</td>
    <td>${data.rates['KRW']}</td>
</tr>
<tr>
    <td class="code">KZT</td>
    <td>${data.rates['KZT']}</td>
</tr>
<tr>
    <td class="code">MXN</td>
    <td>${data.rates['MXN']}</td>
</tr>
</table>
<table>
<tr>
    <th>currency code</th>
    <th>currency Rate</th>
</tr>
<tr>
    <td class="code">MYR</td>
    <td>${data.rates['MYR']}</td>
</tr>
<tr>
    <td class="code">NOK</td>
    <td>${data.rates['NOK']}</td>
</tr>
<tr>
    <td class="code">NZD</td>
    <td>${data.rates['NZD']}</td>
</tr>
<tr>
    <td class="code">PAB</td>
    <td>${data.rates['PAB']}</td>
</tr>
<tr>
    <td class="code">PEN</td>
    <td>${data.rates['PEN']}</td>
</tr>
<tr>
    <td class="code">PHP</td>
    <td>${data.rates['PHP']}</td>
</tr>
</table>
<table>
<tr>
    <th>currency code</th>
    <th>currency Rate</th>
</tr>
<tr>
    <td class="code">PKR</td>
    <td>${data.rates['PKR']}</td>
</tr>
<tr>
    <td class="code">PLN</td>
    <td>${data.rates['PLN']}</td>
</tr>
<tr>
    <td class="code">PYG</td>
    <td>${data.rates['PYG']}</td>
</tr>
<tr>
    <td class="code">RON</td>
    <td>${data.rates['RON']}</td>
</tr>
<tr>
    <td class="code">RUB</td>
    <td>${data.rates['RUB']}</td>
</tr>
<tr>
    <td class="code">SAR</td>
    <td>${data.rates['SAR']}</td>
</tr>
</table>
<table>
<tr>
    <th>currency code</th>
    <th>currency Rate</th>
</tr>
<tr>
    <td class="code">SEK</td>
    <td>${data.rates['SEK']}</td>
</tr>
<tr>
    <td class="code">SGD</td>
    <td>${data.rates['SGD']}</td>
</tr>
<tr>
    <td class="code">THB</td>
    <td>${data.rates['THB']}</td>
</tr>
<tr>
    <td class="code">TRY</td>
    <td>${data.rates['TRY']}</td>
</tr>
<tr>
    <td class="code">TWD</td>
    <td>${data.rates['TWD']}</td>
</tr>
<tr>
    <td class="code">UAH</td>
    <td>${data.rates['UAH']}</td>
</tr>
</table>
<table>
<tr>
    <th>currency code</th>
    <th>currency Rate</th>
</tr>
<tr>
    <td class="code">UYU</td>
    <td>${data.rates['UYU']}</td>
</tr>
<tr>
    <td class="code">ZAR</td>
    <td>${data.rates['ZAR']}</td>
</tr>
</table>
`;
});
}
liveRate();



// Credits
document.addEventListener("DOMContentLoaded", function() {
    let burgerIcon = document.querySelector("#credits") as HTMLElement;
    let navLinks = document.querySelector(".credits-modal") as HTMLElement;
    let close = document.querySelector("#closeModal") as HTMLElement;
  
    function toggleMenu() {
      navLinks.classList.toggle("show");
      burgerIcon.classList.toggle("open");
      console.log("hello world");
    }
  
    function closeMenu() {
      navLinks.classList.remove("show");
      burgerIcon.classList.remove("open");
      console.log("close world");
    }
  
    burgerIcon.addEventListener("click", toggleMenu);
    close.addEventListener("click", closeMenu);
  });
  