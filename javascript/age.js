let Age = prompt("Age:");
let hasParent = prompt("Do you have Parent? yes/no");
let hasTicket = prompt("Do you have Ticket?yes/no")
let isLate = prompt("Are you late? yes/no")
if (Age>=18 && hasTicket &&  isLate === "no")
    {
        alert("you can watch")
    }else if (Age>13 && hasParent && hasTicket){
    alert("you can watch")}
    else if (isLate === "yes" || hasTicket === "no"){
        alert("cant watch");}
    
    else
         {
             alert("cant watch");

    }

