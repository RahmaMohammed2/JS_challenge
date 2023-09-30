for(let i =0; i<5; i++) {
    console.log("Rahma")
}


let i = 0;

while(i <10) {
    console.log("Eahma ")
    i++
} 

let today = "Sunday"

if(today == "Saturday") {
    console.log ("Come to Coding Class")
} else if (today == "Sunday") {
    console.log("Sleep")
} else if( today == "Monday") {
    console.log("Go to school")
} else {
    console.log("Do whatever you like")
}


switch (today) {
    case "Saturday":
        console.log("Coding time ...")
        break;
    case "Sunday":
        console.log("Sleep time")
        break;
    case "Monday":
        console.log("Monday")
          break;


    default:
        console.log("Do whatever you like")
        
        break;
}


do {
    console.log("Noor")
    count++;
} while (count < 10);

