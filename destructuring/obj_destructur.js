
// destructuring 


// object destructuring

const user = {
    id: 339,
    name: 'Sakib',
    age: 27,
   /*  education: {
        degree: "Masters"
    }, */
}

// অবজেক্টটাকে নেইমটাকে বের করে এনে আরেকটা ভ্যারিয়েবলে এসাইন করতে চাই যেন, অন্য যায়গায় ব্যবহার করতে পারি। 

// ট্রেডিশনাল ওয়েতে যেভাবে করতাম। 
//var name = user['name'];
//console.log(name);

// ডিসট্রাকচারিং ওয়েতে যদি করতে চাই তাহলে। 

/* 
    ডিসট্রাকচারিং এর নিময়ঃ  অবজেক্টের ক্ষেত্রে অবজেক্ট , এ্যারের ক্ষেত্রে এ্যারে। এ রকম করে করতে হবে। ডানপাশ বামপাশ সমান হতে হবে। 

*/

const {name} = user;  /* প্রথমে মেইন অবজেক্টটাকে ডান পাশে দিয়ে দিয়েছি। তারপরে সমান চিহ্নের ডান পাশে যেহেতু অবজেক্ট সেহেতু বামপাশেও একটা অবজেক্ট লাগবে তাদের দুজনের সমান হবার জন্য। তারপর সেই অবজেক্টের যেই প্রোপার্টি দরকার সেই প্রোপার্টি দিয়েছি। এবং যেহতু আমি name দিয়েছি। সেহতু, নেইম নামেই ভ্যারিয়েবল তৈরি হবে। কিন্তু, আমি যদি চাই আমার name টাকে title নামের ভ্যারিয়েবলে এসাইন করতে হবে তাহলে, এটাকে একটা alias দিতে হবে। যেমন নিচের উদাহরণ। */
const {age: বয়স} = user; // এখানে ঃবয়স হইলো alias

// অবজেক্ট থেকে অবজেক্ট ডিস্ট্রাকচারিং কিভাবে বের করা হয় তা নিম্নের উদাহরণ থেকে দেখে নেওয়া যায়। 
//let {education: {degree}} = user;

/* যদি এ রকম সিচুয়েশন হয় যে, নেস্টেড অবজেক্টটা মিসিং সেক্ষেত্রে কি হবে? তখন অবশ্যই আপনার স্ক্রিপ্ট ফেইল করবে। আর ফেইল করা ঠেকাতে কি করা যায় ? সেক্ষেত্রে ডিফল্ট ভ্যালু দিয়ে দেওয়াটা বুদ্ধিমানের  কাজ।   */
let {education: {degree} = {}} = user;

console.log(বয়স);
console.log(name);
console.log(degree);