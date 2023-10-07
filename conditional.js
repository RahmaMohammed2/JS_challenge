//How to write a switch with if, else if and else//

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




//How to write a switch//

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