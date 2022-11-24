function k(event) {                 //day 9 - 5
   // tested alert("tested");
   if (event.which == 13) {            //day 9 - 5
      //alert("Enter");             //day 9 - 5
      if (rw == 0) {// 5 
         f();
         rw = setInterval(run, 100);   //6
         bw = setInterval(back, 100); //9    
         sw = setInterval(score, 100); // 13  
         fw = setInterval(score, 100);//22  

      }     // 5                            //day 9 - 8
   }                                 //day 9 - 5
   if (event.which == 32) {             //day 9 - 5
      alert("Space");                //day 9 - 5
   }                                 //day 9 - 5
}                                    //day 9 - 5
 //flame function
var a = 600;                                               //day 9 - 13
function f() {

   for (var y = 0; y < 10; y++) {                                           //day 9 - 15
      var i = document.createElement("img"); //day 9 - 7 

      i.src = "flame.gif";                           //day 9 - 9
      i.className="f"//misseddddddddddddddddddddddddddddd
      i.style.marginLeft = a + "px";                                 //day 9 - 14
      
      if(y <= 4){ //15 flame disttance as levels
         a=a+700;  //15
      } //15
      
      if(y >= 5){ //16-flame disttance as levels
         a = a + 400; //16
      }
                                                           //day 9 - 14                         
      
      i.id = "v" + y;//18 
      
      
      //i.className = "f";       //day 9 
      document.getElementById("d").appendChild(i);      //day 9 - 12 when  click enter fla, come 
   }                                                                   //day 9 - 15
   //day 9 - 7 
}                                          //day 9 - 7 


//day 10

//RUN FUNCTION-------------------
var rw = 0;
var r = 1;                                   //3 

function run() {                              //3 
   var rimg = document.getElementById("boy");//3 
   r = r + 1;                                 //3 
   if (r == 9) {                                 //3 
      r = 1;                                   //3 
   }                                         //3 
   rimg.src = "Run (" + r + ").png";           //3 
}                                            //3 

// 7move function
   var bw =0;                                                  //8
   var b = 0;                                                            // 7
   
   function back() {                                                    // 7
   b = b - 20;    // + karma pasata yanwa revercr ekatayana game                                                       // 7
   document.getElementById("d").style.backgroundPositionX = b + "px"; // 7
}                                                                   // 7


// 11 score function
var sw=0;//12
var u = 0;// 11

function score(){// 11
   u = u + 10;// 11
   document.getElementById("score").innerHTML=u;// 11
}


//19 flamee same forLoop
 //var a=800;//21 misseddddddddddddddddddddddddddddddddddddddddddddddddd
 var fw=0;
function move(){ //19
   for(var y=0; y<10; y++){//19
      //document.getElementById("v" + y)    //23

      var z = getComputedStyle(doccument.getElementById("v"+ y)); //20 -- hamogema CSS adalagana puluwan
      
      //alert(z.marginLeft);

       var p = parseInt(z.marginLeft = p + "px");//25
       //alert(p);  //25

       doccument.getElementById("v" + y).style.marginLeft = p + "px";//27
      
   }//19
}//19






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