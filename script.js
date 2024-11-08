function addNewAQField(){
    
    let newNode= document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("aqField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows",2);
    newNode.setAttribute("placeholder","Enter..");
    
    let AqOb= document.getElementById("AQ");
    let AQaddButton= document.getElementById("aqAddButton");
    
    AqOb.insertBefore(newNode,AQaddButton);
    
    
}

function addNewWEField(){
    let newNode= document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("weField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows",2);
    newNode.setAttribute("placeholder","Enter..");

    let weob= document.getElementById("WE");
    let WEaddButton= document.getElementById("weAddButton");

    weob.insertBefore(newNode,WEaddButton);
}



function generateResume(){
    let nameField= document.getElementById("name-Field").value;
    let nameTemplate= document.getElementById('nameTemplate1');
    
    nameTemplate.innerHTML= nameField;
    document.getElementById("nameTemplate2").innerHTML=nameField;
   
    document.getElementById("contactTemplate").innerHTML= document.getElementById("contact-Number-Field").value;
    document.getElementById("emailTemplate").innerHTML= document.getElementById("email-Field").value;
    document.getElementById("addressTemplate").innerHTML= document.getElementById("address-Field").value;
    document.getElementById("linkedInTemplate").innerHTML= document.getElementById("linkedIn-Field").value;
    document.getElementById("githubTemplate").innerHTML= document.getElementById("gitHub-Field").value;
    document.getElementById("objectiveTemplate").innerHTML= document.getElementById("objective-Field").value;


    //axadmeic Qualification

    let aqs= document.getElementsByClassName("aqField");

    let str="";

    for(let e of aqs){
        str=str + `<li> ${e.value} </li>`;
    }
    document.getElementById("aqTemplate").innerHTML= str;

    let wes= document.getElementsByClassName("weField");
    let str1="";

    for(let e of wes){
        str1= str1+ `<li> ${e.value} </li>`;

    }
    document.getElementById("weTemplate").innerHTML= str1;


    //code for setting image of the user
    let file= document.getElementById("image-Field").files[0];

    let reader=new FileReader();

    reader.readAsDataURL(file);

    // set image to template 
    reader.onloadend =function(){
        document.getElementById('image-template').src=reader.result;

    }
    document.getElementById('image-template').src=reader.result;

    document.getElementById("resume-form").style.display="none";
    document.getElementById("resume-template").style.display="block";
}

function printResume(){
    window.print();
}