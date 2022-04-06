// complaints elements
const complaint = document.getElementById("complaintSelectionText");
const complaintIcon =  document.getElementById("selectionIconComplaint");
const complaintContainer =  document.getElementById("complaint")
// compliments elements
const compliment = document.getElementById("complimentSelectionText");
const complimentIcon = document.getElementById("selectionIconCompliment");
const complimentContainer =  document.getElementById("compliment")

// satisafaction elements
const satisfaction = document.getElementById("satisfactionSelectionText");
const satisfactionIcon =  document.getElementById("selectionIconSatisfaction");
const satisfactionContainer =  document.getElementById("satisfaction");

// rating elements
const rating = document.getElementById("ratingSelectionText");
const ratingIcon = document.getElementById("selectionIconRating");
const ratingContainer =  document.getElementById("rating");



    complaint.addEventListener("click",()=>{

        // hide and set properties of others to not selected    
        complaintIcon.style.display = "inline";
        complaint.style.fontSize = "35px";
        complaint.style.color = "#004121";
        complaintContainer.style.display = "inline";

        // default values
        complimentIcon.style.display = "none";
        compliment.style.fontSize = "25px";
        compliment.style.color = "#000000";
        satisfactionIcon.style.display = "none";
        satisfaction.style.fontSize = "25px";
        satisfaction.style.color = "#000000"
        ratingIcon.style.display = "none";
        rating.style.fontSize = "25px";
        rating.style.color = "#000000";
        
        // containers
        complimentContainer.style.display = "none";
        satisfactionContainer.style.display = "none";
        ratingContainer.style.display = "none";

    })

    compliment.addEventListener("click",()=>{

        // hide and set properties of others to not selected    
        complimentIcon.style.display = "inline";
        compliment.style.fontSize = "35px";
        compliment.style.color = "#004121";
        complimentContainer.style.display = "inline";

        // default values
        complaintIcon.style.display = "none";
        complaint.style.fontSize = "25px";
        complaint.style.color = "#000000"
        satisfactionIcon.style.display = "none";
        satisfaction.style.fontSize = "25px";
        satisfaction.style.color = "#000000"
        ratingIcon.style.display = "none";
        rating.style.fontSize = "25px";
        rating.style.color = "#000000"

          
        // containers
        complaintContainer.style.display = "none";
        satisfactionContainer.style.display = "none";
        ratingContainer.style.display = "none";
        

    })

    satisfaction.addEventListener("click",()=>{
        // hide and set properties of others to not selected    
        satisfactionIcon.style.display = "inline";
        satisfaction.style.fontSize = "35px";
        satisfaction.style.color = "#004121"
        satisfactionContainer.style.display = "inline";

        // default values
        complimentIcon.style.display = "none";
        compliment.style.fontSize = "25px";
        compliment.style.color = "#000000";
        ratingIcon.style.display = "none";
        rating.style.fontSize = "25px";
        rating.style.color = "#000000"
        complaintIcon.style.display = "none";
        complaint.style.fontSize = "25px";
        complaint.style.color = "#000000";

          
        // containers
        complimentContainer.style.display = "none";
        complaintContainer.style.display = "none";
        ratingContainer.style.display = "none";
    })

    rating.addEventListener("click",()=>{
        // hide and set properties of others to not selected    
        ratingIcon.style.display = "inline";
        rating.style.fontSize = "35px";
        rating.style.color = "#004121"
        ratingContainer.style.display = "inline";

        // default values
        complaintIcon.style.display = "none";
        complaint.style.fontSize = "25px";
        complaint.style.color = "#000000";
        complimentIcon.style.display = "none";
        compliment.style.fontSize = "25px";
        compliment.style.color = "#000000";
        satisfactionIcon.style.display = "none";
        satisfaction.style.fontSize = "25px";
        satisfaction.style.color = "#000000"

          
        // containers
        complaintContainer.style.display = "none";
        complimentContainer.style.display = "none";
        satisfactionContainer.style.display = "none";
    })

