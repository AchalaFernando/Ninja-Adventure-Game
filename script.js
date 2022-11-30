function k(event) {                 
   
   if (event.which == 13) {                      //9-5          
      
      if (rw == 0) {                            //10-5 
      //11-40 fid =f();                         //11 -5.1
         fid = f();
         rw = setInterval(run, 100);            //10-6
         rs.play();                             //11-40 add audio to file  
         bw = setInterval(back, 100);           //10-9    
         sw = setInterval(score, 100);          //10-13 

         fw = setInterval(move, 100);           //10-22   //11-7

      }                                        //10-5   //9-8
   }                                           //9-5
   if (event.which == 32) {                    //9-5
      //alert("Space");                        //9-5
      if(jw==0){                               //11-3
         clearInterval(rw);                    //11-3
         rs.pause();                           //11-40 add audio to file 

         jw = setInterval(jump, 100);          //11-3
         js.play();                            //11-40 add audio to file 
        }                                      //11-3  //9-5
   }                                           //day 9-5
}                                              //9-
 

//33 - 40  add audio to file 
var rs = new Audio ("run.mp3");              //11-33
rs.loop = true;                              //11-33

var js = new Audio("jump.mp3");              //11-37

var ds = new Audio("dead.mp3");              //11-37


//flame function
var fid = 0;                                          //11-5.1
var a = 600;//9 //600                                      //9-13

function f() {//9

   for (var y = 0; y < 10; y++) {                      //9-15
      var i = document.createElement("img");//9        //9-7 

      i.src = "flame.gif";//9                          //9-9
      i.className="f"; //9                             //misseddddddddddddddddddddddddddddd
      i.style.marginLeft = a + "px";//9                //9-14
      
      //a=a+500;//9
      if(y <= 4){                                        //10-15 flame disttance as levels
         a=a+700;                                       //10-15
      }                                                 //10-15
        
      if(y >= 5){                                       //10-16-flame disttance as levels
         a = a + 400;                                   //10-16
      }
                                                                       
      
      i.id = "v" + y;                                   //10-18 
      
      
      //i.className = "f";                              //9-
      document.getElementById("d").appendChild(i);//9   //9-12 when  click enter fla, come 
   }                                                    //9-15
                                                        //9-7 
}                                                       //9-7 


//day 10

//RUN FUNCTION-------------------
var rw = 0;
var r = 1;                                     // day 10  3 

function run() {                               // day 10  3 
   var rimg = document.getElementById("boy");  // day 10  3 
   r = r + 1;                                  // day 10  3 
   if (r == 9) {                               // day 10  3 
      r = 1;                                   // day 10  3 
   }                                           // day 10  3 
   rimg.src = "Run (" + r + ").png";           // day 10  3 
}                                              // day 10  3 

// 7move function
   var bw =0;                                                          // day 10  8
   var b = 0;                                                          // day 10   7
   
   function back() {                                                   //  day 10  7
   b = b - 20;    // + karma pasata yanwa revercr ekatayana game                                                       // 7
   document.getElementById("d").style.backgroundPositionX = b + "px";  // day 10   7
}                                                                      //  day 10  7
   

// 11 score function
var sw=0;                                                             // day 10  12
var u = 0;                                                            //  day 10  11

function score(){                                                     //  day 10  11
   u = u + 10; //add score by 10by                                                       // day 10   11

   //document.getElementById("end").style.visibility="visible";        //48

   //48 document.getElementById("score").innerHTML=u;                // day 10   11
   document.getElementById("score").innerHTML=u;                     //48
}


// day 10  19 flamee same forLoop
 // day 10  var a=800;//21 misseddddddddddddddddddddddddddddddddddddddddddddddddd
 var fw=0;
function move() {                                                      // day 10  19
   for(var y=0; y<10; y++){                                           // day 10  19
      //document.getElementById("v" + y)                              // day 10  23

      var z = getComputedStyle(document.getElementById("v"+ y));      // day 10  20 -- hamogema CSS adalagana puluwan
      
      //alert(z.marginLeft);

       var p = parseInt(z.marginLeft)-20;// day 10  25
       //alert(p);                                                      // day 10  25

       document.getElementById("v" + y).style.marginLeft = p + "px";   // day 10  27
     
       //17 - 60 160 athara awith dead//////////////////////
       if(p >= 60 & p <= 150){                                           //19
         
            //20 alert("Ammo Maruna");                                   //19
            //22 alert(mt);                                              //21
            //300//22 get the siz jump with out tuch flame when jump
            //25 alert("Hariyatama Maruna");                             //23
                              
            if(mt > 300){

             clearInterval(rw);                                           //30
             rs.pause();                                                  //42

             clearInterval(jw);                                           //30
             jw = -1;                                                     //30

             clearInterval(bw);                                           //30
             clearInterval(sw);                                           //30
             clearInterval(fw);                                           //30

             setInterval(dead, 100);// when dead stop all                                      //32 tuch o  flow flame dead image come
             ds.play();                                                   //43
            }
         }
      }                                                                   // day 10  19
}                                                                         // day 10  19


// Day 11 - 25.11.2022
// 1 jump Function
var jw=0;                                                                  //2
var j=1;                                                                   // 1
var mt=320;                                                                //11 - css margin top

function jump(){                                                           // 1
   var jimg = document.getElementById("boy");                              // 1
   
   if(j<=6){                                                               //13
      mt = mt -30;                                                         //13
   }                                                                       //13

  
   if(j>=7){                                                               //14
      mt = mt +30;                                                         //14
   }                                                                       //14

   jimg.style.marginTop = mt +"px";                                        //15


// 0000000000000000000000000000000000000000000000000000000

   j=j+1;                                                                  // 1
   if(j==13){                                                              // 1
      j=1;                                                                 // 1

      clearInterval(jw);                                                    //4
      jw  = 0;                                                              //4

      rw  = setInterval(run, 100);                                          //4
      rs.play();                                                            //41 - run eka athule jump eka hadala tiyene..

      if(fid ==0){                                                          //6 when click space only filame work
         fid = f();                                                         //6
      }                                                                     //6

      if(fw==0){                                                            //7
         fw=setInterval(move,100);                                          //7 
      }                                                                     //7

      if(bw==0){                                                            //8
         bw=setInterval(back, 100);                                         //8
      }                                                                     //8
      
      if(sw==0){                                                            //9
         sw=setInterval(score, 100);                                        //9
      }                                                                     //9

   }                                                                        // 1
   jimg.src = "Jump ("+j+").png";                                           // 1
}                                                                           // 1

// 31 deadf function
var d=1;                                                                    //31

function dead(){                                                            //31
   var dimg = document.getElementById("boy");                               //31
   d=d+1;                                                                   //31

   if(d==11){                                                               //31
      d=10;                                                                 //31

      dimg.style.marginTop = "320px"; //v Give .boy margintop -             //32
      document.getElementById("end").style.visibility="visble";
      document.getElementById("endScore").innerHTML=u;
   }                                                                        //31

   dimg.src="Dead (" +d+ ").png";                                             //32
}                                                                           //31


//49 reload fuction
function re(){                                                              //49
   location.reload();                                                       //49
}                                                                           //49



 //day - 9++++++++++++++++++++++++++
//0 - badaka creation
//1 - add image to bg
//2 - badaka hadana add fire gif-
//3 - add  flame
//4 - add flame 500times in html css thats ot working
//5 - add flame in  js file - ad enter and space in alert
//6 - only show flame
//7 - tag eka js wala call karanawa
//8 - get f()  wada karana img
//9 - add image nt working
//10 - img tag hadan one thana kiyana one
//11 - tag eka html eken gan aone- bag eka atjulata "(appendChild(i)"  var athulata dagana
//12 - flame
//13 - margin left add in js
//14 - flame eke  repeet wena code eka
//15 - badaka tika ekapara hadena one= game emeke ekapara badaka kali hadena one 500 mnam 100.


 // day - 10+++++++++++++++++++++++++ run- bag animation - score - backgrounda moov
 //  - add run imgs
 //1 -  make run  img (cntl + space=you can chuuse img from th list)
 //2 add css boy class
 //3 - character eka run wena hadana (rimg = run img)
 //4 - run funtion var haddana - enter 2 paraka wena eka nawathana
 // 5 - run f( ) wada karana yana f() ekata
 //6 setInt wena id eka baradena rw ta - enter press ekathana duwanawa flam wada
 //7 - m0ovr bg- bbuild funtion
 //8=bacgground eka wenuwwen duwa
 //9=k () eke stINterval dena - bw ekata id eka baradena- background eka repeet wena kiyala css walin kiyana one = x pathata witharrak
 //10 -add sore -html wala img udin <p> then go to css crete class score [postiot absoloot dane anith componemt awlata efect wene nathi wena]
 //11 -js-hadana f() score kiyalka- scor eka waadi weba var ekak hadana one 
 //12 - 
 //13 - enter pahalin setIntevl score mil 10 n 10ta eyage id eka baradena
 // 14 - css .d  x pathata witharak rpeeet wena- nathnam jum ekedi awl
 //15 - badaka scrol karama pwnwwwwwawa-
 //16 - badaka set 2 k level 2 k
 //17 - game wala badaka peena baha -css wala .d x pathata hide  & position absaloot damama game eka scroll karana baha
 //18 - badaka moov karna one-flam  eka js walin allana nam karananam id ekak dena one id eken puluwan tag ekak alagana-solution---flame tika hadadaima id ekek dena 
 //19 - f() moov kiyala  flame eka - forloop eka use karala thamai alana wene -uda 
 //20 - in athana aragana  hamogema margin Left hana one - e  kiyane  hamogema CSS anduragana
 //21 - getINt - setIn karana ekata id ekak
 //22 - thama moov wena naha
 //23 -  v akura + y - udin duna akura  {9.30am} awl 
 //24 - x- patahata move kara amarana man marLeft
 //25 - alert eka ain karala var p dala alert eka ewenama dama
 //26 - 
 //27

 // day - 11+++++++++++++++++++++++++ Jump - space btn  press all animation should work-brier moving- - dead eke up and dwn alana margin top - - img eka flame eka udin paninawa-dead up and down - dead unama okoma animation nawathanawa //30 -
 //da - 11 - when dead show dead img - add audio - run wedi sound on-juup -dead unama sounds stop - score bord-
 // add jump images 12 to file 
 //1 - jump function eka
 //2 - jum eke id eka tiyagana variabel ekek --rw--
 //3 - jw aragena k function eke spaaace eke alert ain karala if iekak dala check    karagana jw--- da 0 ta  so ehenam naaaawathana run eka  clerInterval -rw-- r eka balagana rw-nawthana rnu eka set INtwal eka  junp eka mil 100  -eyage id eka tiyagena -jw - eka - prob digatama jump wenawa 
 //4 - jump eka nwaatinaawwado {
 //5  -   game eka start karoth space ekek- any key nt working -anim 4k work
 // - f funtin ekata id ekak hadana one
 //5.2 - f functioneka wada karana eka f ta baradene
 //6-   when click space only filame work
 //7-   press space- frames move wena -
 //8 - press space- bg - background 
 //9 - press space- sw - score
 //10- press space- flame move- background back- score work
 //11 - game eke jump wqena hight - CSS
 //12 -  jump ing 1-6 up --7to 12 down
 //13 - jump funct 1-6 img 
 //14 - 7 to 12
 //15 - marin top ekata denaw -858 nt working
  //16- dead  - go to move function
  //16.1- pix gana
  //16.2 - pix imahge eka berena thana
  //17 - 60 160 athara awith dead
  //18 - 
  //19 - 60 th 160 th atahara inawanam if eka dala  - awla jump kaaarana baha jump karane kurulek wage
 //20 - rem alert
 //21 - aleret var mt-margin top- meka thule mt dana alert eka athulata	
 //22 - ena value eka comment -
//23 =- mt valuw < 300 t awada - de3ad eka agest wena thana  adu karana one  160  become 140
//24 -  add dead imgs
//25 - 
//26
//27
//30 -0 
//31 - dead function eke show dead img eka (not on top filame)
//32 - full dead codew eka

//32 - ded kiyana fuunction eka 1 parai dead wena one- so we can that  strate id -we dont need to put setINtvel - flame wadunagaman dead
//33 - add audio to file 
//34 - you need to add 1st from js side 
//35 - var rs ru sound
//36-  - rrepeet
//37 - allaudi fils

// 40 - run play wena jump 
//41 - jump  function ekata yana - 1 parak jup karta pase
//42=  ded unama run sound nawathana  - move function
//43 =  dead soud on
//44- score bord - html  side 
//44 danata tine div eke eliye new div y sore dif show
//45- css side eken penanan adadla div eka -end and buttion-

//46 - end class put in css- visibility: hidden;

//47 view karana yane js walin - ded function eke thamaidana one-score card eke pene   one-
//48 = bring scor to end display
//49 - try agen btn - onclick ekedi re function ekata katha karana