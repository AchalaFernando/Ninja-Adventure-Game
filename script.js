function k(event) {                 //4.2
    // 0- tested alert("done");
    if (event.which == 13) {            //4.3
        //alert("Enter");                 //4.4
        if (rw == 0) {                 //7.1 
            rw = setInterval(run, 100);  //7.2 -  rw= dame nathnam enter click karama spreed duwanawa
            bw = setInterval(ba, 100);  //9.5 caharacter moving but bg thamai pitipasata yane
        }                           //7.3
    }                                //4.5
    if (event.which == 32) {            //4.6
        //alert("Space");                  //4.7
        if(jw == 0){ //13.2                                                

            clearInterval(rw);  //13.4 run with jump with by setting interval so siled

            jw = setInterval(jump, 100); //13.3 prob here run and jump both duing same time by adding setINterval  siled
        }//13.2 
    }                                 //4.8
}                                     //4.9

var bw = 0; //9.4
var rw = 0; //7.1 run worker
var r = 1; // 6.5

function run() { //6.2
    var a = document.getElementById("i"); //6.3 calling by a going to image in HTML

    r = r + 1;  // 6.6

    if (r == 9) { // 6.6
        r = 1; // 6.6
    }          // 6.6

    a.src = "Run (" + r + ").png";  // 6.7
}               //6.3





var b = 0;// 9.4 pix gana tiyagana   
function ba() {  //9.3   // baground eke move karana eka

    b = b - 20; //9.5
    document.getElementById("b").style.backgroundPositionX = b + "px";//9.6
}                //9.3 


var jw=0;//12- parak press wenawada kiyala        

var j = 1;  //11--3                                //++2+++ 1 -> 0 
function jump() { //11--1
    var f = document.getElementById("i");  //11--4

    j = j + 1;  //11--5                            //++3+++ 1 -> 0

    if (j == 10) { //11--6                         //++4+++ 13 -> 10
        j = 1; //11--7                             //++5+++ 1 -> 0

        clearInterval(jw);//14  

        rw = setInterval(run, 100);//15

        jw = -0;//16                                 //++6+++ 0 -> -1
        if(bw ==0){ //18.1                           //++7+++ 0 -> -1==========================

        bw=setInterval(ba, 100);  //18.3 -end
        //setInterval(ba,100); //17-bg speed wadi only meka dunoth
        }   //18.2
    } //11--8


    f.src = "Jump ("+ j+").png"; //11--8



} //11--2


//4 -when press enter alet show enter in alert maesge and same as space
//5 - press enter goes to foisst img & press space go to 2nd page
//6 run eka wenuwen function
//7- 2 parak  wehen we press enter id check karala -badagini unoth athulatayana - background eke image eka run wenawa 1 to 8 imgs
//8 -Animation ekek pena widihata balana
//9-game eke background eke pasata yanwa hethuwa  background eka badaka pene nathi nisa so weee need to go to css side
//9 bagcground eke x side eyana one - wena one
//9.2 bacgg alana div ekek denawa
//9.3 function background eke  nex ekata giya
//9.4 bg var  tiyana
//9.5 caharacter moving but bg thamai pitipasata yane

//10 - jump img dwn lor and adddd to project
//11-- only add jump image same run in function
//-- Jump wena setInterval karana one
//12 -- jump ek wenuwen bg
//13 jw aran api  yana one space ekata- ump karana
//13.4 jump weewi run wenawa
//14 jump unanam nawathana 68
//15 run karala  jump karala run wenawa 70
//16 - run jump wenawa done72
//17 mulin space dunoth bg wada karane naha
//18-  jump eken start karath wada



// homw work
//+++++1++++ css line- 6 =1