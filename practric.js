// ১. কখন const আর কখন let দিয়ে ভেরিয়েবল ডিক্লেয়ার করতে হয় সেটা তোমাকে জানতেই হবে। তুমি নিজে নিজে একটা const দিয়ে আরেকটা let দিয়ে ভেরিয়েবল ডিক্লেয়ার করে ফেলো।

// const phoneNumber = 01719473072;
// console.log(typeof(phoneNumber));

// // let phoneModel = 'Samsung S20';
// // console.log(phoneModel);
// let phoneModel = 'Iphone12 pro max';
// console.log(phoneModel);

// ২. টেম্পলেট স্ট্রিং দিয়ে একটা স্ট্রিং তৈরি করো। সেটার মধ্যে উপরে ডিক্লেয়ার করা ভেরিয়েবল এর মান ডাইনামিক ভাবে বসাও। একইভাবে উপরে একটা অবজেক্ট ডিক্লেয়ার করো। এবং ডাইনামিকভাবে উপরের অবজেক্ট এর দুইটা প্রপার্টি এর মান তোমার টেমপ্লেট স্ট্রিং এর মধ্যে বসাও। 


// let fish = 350;
// let chicken = 150;
// let vegetable = 100;

// let totalBazarCost = `Today buy: ${fish} ${chicken} ${vegetable} Total Cost for Bazar'${fish * 4 + chicken * 10 + vegetable} `;
// let indiviusalCost = `Fish Price ${fish *4} Chicken Price ${chicken * 10} vegetable ${vegetable}`;
// console.log(totalBazarCost);
// console.log(indiviusalCost);


// const car = {type:"Fiat", model:"500", color:"white" , price:"20000"};
// const carProperty = [`Our New Car type ${type} and color is ${color} but price is high. Price is ${price}`]
// console.log(carProperty);



// ৩.১ একটা প্যারামিটার ওয়ালা arrow ফাংশন ডিক্লেয়ার করো। এবং সেই ফাংশনের কাজ হবে তুমি কোন ইনপুট দিলে সেই ইনপুট সংখ্যাকে ৫ দিয়ে ভাগ করে আউটপুট দিবে। 


const multipleNumber = (num) => num/5;
const multipleResult = multipleNumber(10);
console.log(multipleResult); 


// ৩.২ তুমি দুইটা প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন লিখবে। সেই ফাংশনের ভিতরে কাজ হবে। প্রত্যেকটা ইনপুট প্যারামিটার এর সাথে ২ যোগ করবে তারপর যোগফল দুইটা গুণ করবে। ক্যামনে করবে সেটা চিন্তা করে বের করার চেষ্টা করো 


// const firstTotal = (num1) => (num1+2);
// const secondToal = (num2)=>(num2 + 2);
// const totalResult = firstTotal(50);
// const secondResult = secondToal(13);
// const allResult = totalResult + secondResult

// const lastResult = totalResult * 2;
// console.log(allResult);
// console.log(lastResult);

// ৩.৩ এইবার তিনটা প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন ডিক্লেয়ার করো। যেই ফাংশনের কাজ হবে তিনটা প্যারামিটার নিয়ে সেই তিনটা প্যারামিটারকে গুণ করে সেই রেজাল্ট রিটার্ন করবে। 

const toalNumber = ( num1 , num2 , num3 ) => (num1 * num2 * num3);
const totalResult = toalNumber(10, 20 , 30);
console.log(totalResult);
