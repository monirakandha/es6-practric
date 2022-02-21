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

// const toalNumber = ( num1 , num2 , num3 ) => (num1 * num2 * num3);
// const totalResult = toalNumber(10, 20 , 30);
// console.log(totalResult);


// ৩.৪ এইবার দুইটা প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন নিবে। ওই arrow ফাংশনটা হবে অনেকগুলা লাইনের। সেখানে প্রত্যেকটা ইনপুট প্যারামিটার এর সাথে ২ যোগ করবে তারপর যোগফল দুইটা গুণ করবে। ক্যামনে করবে সেটা চিন্তা করে বের করার চেষ্টা করো। 

// const firstNumber = (num1 , num2) => {
//     let firstResult = num1 + 2;
//     let secondResult = num2 + 2;
//     return firstResult * secondResult;
    
    
// }

// const allResult = firstNumber(2,4);
// console.log(allResult);


// ৪. [হোম ওয়ার্ক] একটু গুগলে সার্চ দাও: javascript function declaration vs arrow function তারপর কয়েকটা আর্টিকেল পড়ে বুঝার চেষ্টা করো। 

// ৪.৫. [এক্সট্রা আরেকটা হোম ওয়ার্ক। এইটা ভিডিওতে বলা নাই]: জাভাস্ক্রিপ্ট এর var, let, const এর মধ্যে প্রার্থক্য কি? 

// ৫. অনেকগুলা সংখ্যার একটা array হবে। তারপর তোমার কাজ হবে array এর উপরে map ইউজ করে। প্রত্যেকটা উপাদানকে ৫ দিয়ে গুন্ করে গুনফল আরেকটা array হিসেবে রাখবে। পুরা কাজটা এক লাইনে হবে। 



// const numbers = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14']
// const result = numbers.map(number => number*5);
// console.log(result);

// ৬. [ চ্যালেঞ্জিং। গুগলে সার্চ দিয়ে বের করো ] অনেকগুলা সংখ্যার একটা array থেকে শুধু বিজোড় সংখ্যা বের করে নিয়ে আসার জন্য filter ইউজ করো 


// const oddNumber = [4, 5, 45, 456, 78, 90, 87, 60, 80, 32, 13, 14, 15, 16];
// const checkOdd = oddNumber.filter(x => x % 2);
// console.log(checkOdd);

// ৭. একটা array এর মধ্যে অনেকগুলা অবজেক্ট আছে। সেখানে যেই অবজেক্ট এর price আছে ৫০০০ টেক্কা সেই অবজেক্টকে find দিয়ে বের করো। 

// filter 

// const numbers = [4,34,4,67,89,39,90,768,7,985];
// const bigNum = numbers.filter(number => number > 20);
// console.log(bigNum);


// const oddNumber = [4, 5, 45, 456, 78, 90, 87, 60, 80, 32, 13, 14, 15, 16];
// const checkOdd = oddNumber.filter(x => x % 2);
// console.log(checkOdd);

// ৭. একটা array এর মধ্যে অনেকগুলা অবজেক্ট আছে। সেখানে যেই অবজেক্ট এর price আছে ৫০০০ টেক্কা সেই অবজেক্টকে find দিয়ে বের করো। 

// const products = [
//     {name: 'NoteBook', price: 50, color: 'Orange'},
//     {name: 'Pen', price: 20, color: 'Red'},
//     {name: 'UPS', price: 5000, color: 'Red'},
//     {name: 'PC', price: 72000, color: 'White'},
//     {name: 'Phone', price: 22000, color: 'White'}
// ]

// const expensiveIteam = products.find(x => x.price >=5000);
// console.log(expensiveIteam);


// ৭.৫ [এক্সট্রা] জাভাস্ক্রিপ্ট এ array এর map, forEach, filter, find কোনটা দিয়ে কি হয়। সেটার একটা সামারি লিখে ফেলো। 


// ৮. সিম্পল একটা জাভাস্ক্রিপ্ট অবজেক্ট এর কোন একটা প্রোপার্টিকে ভেরিয়েবল হিসেবে ডিক্লেয়ার করার জন্য destructuring ইউজ করো। 

// const products = {name: 'NoteBook', price: 50, color: 'Orange'};
// const{price} = products;
// console.log(price);

// ৯. [চ্যালেঞ্জিং] array এর destructuring করবে আর সেটা করার জন্য তুমি এরে এর থার্ড পজিশন এর উপাদান কে destructuring করে 'three' নামক একটা ভেরিয়েবল এ রাখবে। 

// const products = ['NoteBook', 'Laptop', 'Phone', 'Money', 'WaterBottle', '50', 'color', 'Orange'];
// const [one, two , three, four, five , six] = products;
// console.log(three);


// ১০. তিনটা প্যারামিটার ওয়ালা একটা ফাংশন লিখবে। যেই ফাংশনের কাজ হবে তিনটা প্যারামিটার নিয়ে সেই তিনটা প্যারামিটার এর যোগ করে যোগফল রিটার্ন করবে। আর থার্ড প্যারামিটার এর একটা ডিফল্ট ভ্যালু থাকবে। সেটা হবে ৭। 


// const threeNumbres = (a, b , c=7) => a + b + c ;
// console.log(`Result is : ${threeNumbres(20,10)}`);

// ১১. একটা nested অবজেক্ট ডিক্লেয়ার করো (অর্থাৎ একটা অবজেক্ট এর প্রপার্টি এর মধ্যেও যে অবজেক্ট থাকতে পারে। আবার সেই অবজেক্ট এর প্রপার্টি এর মধ্যেও সে অবজেক্ট থাকতে পারে। সেই রকম একটা অবজেক্ট ডিক্লেয়ার করো। এবং যেকোন একটা প্রপার্টি এর মান একটা array হবে। জাস্ট এমন একটা অবজেক্ট )
const PC = {
    name: "Value-Top",
    price: 7200,
    color: "white",
    processor: {
        ram: '16 GB',
        ssd: '500 GB',
        hardDisk: null
    },
    accesories: ['KeyBoard', 'Speaker', 'UPS']
}

/* ১২. উপরের অবজেক্ট এ ডট এর আগে যে প্রশ্নবোধক চিহ্ন দিয়ে যে অপশনাল চেইনিং করা যায়। সেটা একটু প্রাকটিস করো। */
console.log(`Optional Chaing: ${PC?.power?.nothing}`)