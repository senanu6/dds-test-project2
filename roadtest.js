let current_question = document.querySelector('.current-question');
let track_img = document.querySelector('.track-img');
let question_txt = document.querySelector('.question-txt');
let Prev_Button = document.querySelector('.prev-button');
let Next_Button = document.querySelector('.next-button');
let Repeat_btn = document.querySelector('.repeat-button');
let curr_audio = document.createElement('audio');
let btn_0=document.getElementById('button0');
let btn_1=document.getElementById('button1');
let btn_2=document.getElementById('button2');
let btn_3=document.getElementById('button3');


 let curr_index = 0;
   
let btn;
let selected_ans = 0;

const test_questions = [
{
    
name : 'Question #1',
img : 'Road_signs/atl_image.jpg',
audioQuest : 'Text-Speech-Audios/question_1.mp3', 
quest_txt : 'When driving at night, you should dim your lights when:',

possible_ans : [

"A.: The other vehicle's headlights are dimmed.",
"B: Meeting or following another vehicle.",
"C: Approaching an intersection."
],
     

correct_ans : 1,
    
}, 

{    
name : 'Question #2',
img : 'Road_signs/atl_image.jpg',
audioQuest : 'Text-Speech-Audios/question_2.mp3', 
quest_txt : 'The Hands Free GA Law pertains to which of the following:',

possible_ans : [

"A.: All drivers regardless of age.",

"B: Older Drivers.",

"C: Drivers under the age of 21.",

"D: Drivers over the age of 21.",
],
     
correct_ans : 0,
    
}, 
        
{    
name : 'Question #3',
img : 'Road_signs/atl_image.jpg',
audioQuest : 'Text-Speech-Audios/question_3.mp3', 
quest_txt : "Georgia's Move-Over Law requires drivers to:",

possible_ans : [

'A.: Stay in the right lane if driving a tractor-trailer.',

'B: Move vehicles out of the lanes of traffic following a crash.',

'C: Move over at least one lane away from an emergency vehicle that is stationary, or if unable to move over, slow down below the speed limit.'

],
     
correct_ans : 2,
    
},  

{    
name : 'Question #4',
img : 'Road_signs/atl_image.jpg',
audioQuest : 'Text-Speech-Audios/question_4.mp3', 
quest_txt : 'If you are involved in a crash, one of the immediate requirements is to:',

possible_ans : [

"A.: Notify the Secretary of State's Office.",

'B: Notify your insurance agent.',

'C: Render aid to the injured.'

],
     
correct_ans : 2,
    
},  
 
{    
name : 'Question #5',
img : 'Road_signs/atl_image.jpg',
audioQuest : 'Text-Speech-Audios/question_5.mp3', 
quest_txt : 'What should you do when you see a flashing yellow traffic signal at the next intersection?',

possible_ans : [

'A.: Come to a complete stop before proceeding.',

'B: Speed up before the light changes to red.',

'C: Slow down and proceed with caution.'
],
     
correct_ans : 2,
    
},                                

{    
name : 'Question #6',
img : 'Road_signs/atl_image.jpg',
audioQuest : 'Text-Speech-Audios/question_6.mp3', 
quest_txt : 'Where does the licensed driver riding with a permit holder need to ride in the vehicle?',

possible_ans : [
'A.: In the front passenger seat.',

'B: In the backseat directly behind the driver.',

'C: Anywhere they choose.'
],
     
correct_ans : 0,
    
},                                

{    
name : 'Question #7',
img : 'Road_signs/atl_image.jpg',
audioQuest : 'Text-Speech-Audios/question_7.mp3', 
quest_txt : 'You are driving behind a motorcycle and want to pass. You must:',

possible_ans : [

'A.: Blow your horn to make the motorcycle move onto the shoulder so that you can pass.',

"B: Stay in the right lane as much as possible, because the motorcycle is small and doesn't use all of the lane.",

'C: Have your vehicle entirely into the left lane before and during the pass.'

],
     
correct_ans : 2,
    
},

{    
name : 'Question #8',
img : 'Road_signs/atl_image.jpg',
audioQuest : 'Text-Speech-Audios/question_8.mp3', 
quest_txt : 'All children ages 8 up to 18 are required to ride:',

possible_ans : [

'A.: Secured in a safety belt or child safety seat.',

'B: In the front seat of the vehicle.',

'C: In the backseat of the vehicle.'

],
     
correct_ans : 0,
    
},

{    
name : 'Question #9',
img : 'Road_signs/atl_image.jpg',
audioQuest : 'Text-Speech-Audios/question_9.mp3', 
quest_txt : 'Streets and highways are most slippery:',

possible_ans : [

'A.: When they are clean and dry.',

'B: When it has been raining hard for several hours.',

'C: Just after it starts to rain.'

],
     
correct_ans : 2,
    
},

{    
name : 'Question #10',
img : 'Road_signs/atl_image.jpg',
audioQuest : 'Text-Speech-Audios/question_10.mp3', 
quest_txt : 'Driving requires your full attention:',

possible_ans : [

'A.:True.',

'B:False.'

],
     
correct_ans : 0,
    
},

{    
name : 'Question #11',
img : 'Road_signs/atl_image.jpg',
audioQuest : 'Text-Speech-Audios/question_11.mp3', 
quest_txt : 'It is more dangerous to drive at night than in daytime, because:',

possible_ans : [

'A.: Your reaction time is slower at night.',

'B: You cannot see as far ahead at night.',

'C: The road is more slippery at night.'

],
     
correct_ans : 1,
    
},


{    
name : 'Question #12',
img : 'Road_signs/atl_image.jpg',
audioQuest : 'Text-Speech-Audios/question_12.mp3', 
quest_txt : 'The minimum speed on Georgia interstates is:',

possible_ans : [

'A: 40 MPH',

'B: 65 MPH',

'C: 55 MPH'

],
     
correct_ans : 0,
    
},


{    
name : 'Question #13',
img : 'Road_signs/atl_image.jpg',
audioQuest : 'Text-Speech-Audios/question_13.mp3', 
quest_txt : 'A double yellow line in the center of a highway means:',

possible_ans : [

'A.: You are approaching a dangerous intersection.',

'B: Passing is permitted when safe to do so.',

'C: Passing is prohibited.'

],
     
correct_ans : 2,
    
},


{    
name : 'Question #14',
img : 'Road_signs/atl_image.jpg',
audioQuest : 'Text-Speech-Audios/question_14.mp3', 
quest_txt : 'You have allowed the wheels of your vehicle to run off the edge of the pavement. You should:',

possible_ans : [

'A.: Release the gas pedal and turn the front wheels slightly to the left to edge the car back on the pavement.',

'B: Hold the steering wheel firmly; release the gas pedal; and gently apply the brakes.',

'C: Apply the brakes and turn the front wheels sharply to the left.'

],
     
correct_ans : 1,
    
},

{    
name : 'Question #15',
img : 'Road_signs/atl_image.jpg',
audioQuest : 'Text-Speech-Audios/question_15.mp3', 
quest_txt : 'If a driver is convicted of violating the Hands Free GA Law, they will:',

possible_ans : [

'A.: All of the answers.',


'B: Pay a fine of at least $ 50.',


'C: Accumulate at least one point on their license.'

],
     
correct_ans : 0,
    
},


{    
name : 'Question #16',
img : 'Road_signs/atl_image.jpg',
audioQuest : 'Text-Speech-Audios/question_16.mp3', 
quest_txt : 'Does Georgia Law require you to stop before turning right on a red light?',

possible_ans : [

'A.: Yes. You must come to full stop and yield to all vehicles and pedestrians on the cross street.',

'B: No. You must only yield to vehicles on your right.',

'C: No. You treat it as a "Yield" sign.'

],
     
correct_ans : 0,
    
},

{    
name : 'Question #17',
img : 'Road_signs/atl_image.jpg',
audioQuest : 'Text-Speech-Audios/question_17.mp3', 
quest_txt : 'A flashing yellow light at an intersection means:',

possible_ans : [

'A.: continue through the intersection quickly.',

'B: stop, check traffic, and proceed with caution.',

'C: slow down and proceed with caution.'

],
     
correct_ans : 2,
    
},

{    
name : 'Question #18',
img : 'Road_signs/atl_image.jpg',
audioQuest : 'Text-Speech-Audios/question_18.mp3', 
quest_txt : "When entering an expressway, your car's speed should:",

possible_ans : [

'A.: be adjusted to the speed of the traffic on the expressway.',

'B: be faster than expressway traffic.',

'C: be slower than the traffic on the expressway.'

],
     
correct_ans : 0,
    
},

{    
name : 'Question #19',
img : 'Road_signs/atl_image.jpg',
audioQuest : 'Text-Speech-Audios/question_19.mp3', 
quest_txt : 'In heavy fog:',

possible_ans : [

'A.: Use your parking lights and emergency flashers.',

'B: Use your low-beam lights.',

'C: Use your high-beam lights.'
],
     
correct_ans : 1,
    
},

{    
name : 'Question #20',
img : 'Road_signs/atl_image.jpg',
audioQuest : 'Text-Speech-Audios/question_20.mp3', 
quest_txt : 'If, while driving, a tire suddenly blows out, you should:',

possible_ans : [

'A.: grasp the steering wheel firmly and take your foot off the accelerator.',

'B: pump the brakes rapidly.',

'C: brake hard and steer toward the right edge of the roadway.'
],
     
correct_ans : 0,
    
},

{    
name : 'Question #21',
img : 'Road_signs/atl_image.jpg',
audioQuest : 'Text-Speech-Audios/question_21.mp3', 
quest_txt : 'You are stopped at an intersection and the traffic light changes to green. You should:',

possible_ans : [

'A.: go ahead only after you are sure that all cross traffic and pedestrians have cleared the intersection.',

'B: wait until the car next to you starts ahead.',

'C: proceed immediately so you do not hold up the traffic behind you.'

],
     
correct_ans : 0,
    
},

{    
name : 'Question #22',
img : 'Road_signs/atl_image.jpg',
audioQuest : 'Text-Speech-Audios/question_22.mp3', 
quest_txt : 'If you are convicted of operating a vehicle while under the influence alcohol or drugs:',

possible_ans : [

'A.: You will be permitted to drive only in emergencies.',

'B: You will be permitted to drive during daylight hours only.',

'C: Your privilege to drive will be suspended.'

],
     
correct_ans : 2,
    
},

{    
name : 'Question #23',
img : 'Road_signs/atl_image.jpg',
audioQuest : 'Text-Speech-Audios/question_23.mp3', 
quest_txt : 'Georgia law requires you to yield to all highway maintenance vehicles and workers in a construction zone.',

possible_ans : [


'A.: True.',


'B: False.'


],
     
correct_ans : 0,
    
},


{    
name : 'Question #24',
img : 'Road_signs/atl_image.jpg',
audioQuest : 'Text-Speech-Audios/question_24.mp3', 
quest_txt : 'The proper arm signal for slowing or stopping is:',

possible_ans : [

'A.: Right arm down.',

'B: Left arm down.',

'C: Left arm up.'
],
     
correct_ans : 1,
    
},

{    
name : 'Question #25',
img : 'Road_signs/atl_image.jpg',
audioQuest : 'Text-Speech-Audios/question_25.mp3', 
quest_txt : 'A school bus with its flashing red signals on has stopped on a non-divided highway; you must:',

possible_ans : [

'A.: stop until the signal lights are no longer flashing and all passengers have cleared the roadway.',

'B: stop when approaching from the rear only.',

'C: slow down when approaching from the front, and proceed with caution.'

],
     
correct_ans : 0,
    
},

{    
name : 'Question #26',
img : 'Road_signs/atl_image.jpg',
audioQuest : 'Text-Speech-Audios/question_26.mp3', 
quest_txt : 'When approaching an intersection for a left turn, you should approach the intersection:',

possible_ans : [

'A.: by cutting into the left lane immediately before the intersection.',


'B: as near as possible to the right hand curb.',


'C: in the far left lane or center (turning) lane.'

],
     
correct_ans : 2,
    
},

{    
name : 'Question #27',
img : 'Road_signs/atl_image.jpg',
audioQuest : 'Text-Speech-Audios/question_27.mp3', 
quest_txt : 'The Department of Driver Services is required by law to suspend the driving privileges of an individual for a conviction of the following offense(s).',

possible_ans : [

'A.: Hit and run or leaving the scene of a crash.',

'B: Super Speeder.',

'C: Improper exhaust.'

],
     
correct_ans : 0,
    
},

{    
name : 'Question #28',
img : 'Road_signs/atl_image.jpg',
audioQuest : 'Text-Speech-Audios/question_28.mp3', 
quest_txt : 'When driving at night you may use your parking lights instead of headlights:',

possible_ans : [

'A.: True.',

'B: False.'

],
     
correct_ans : 1,
    
},

{    
name : 'Question #29',
img : 'Road_signs/atl_image.jpg',
audioQuest : 'Text-Speech-Audios/question_29.mp3', 
quest_txt : 'Motorcycles are smaller than cars. This makes them:',

possible_ans : [

'A.: Less Stable.',

'B: Faster.',

'C: More difficult to see.'

],
     
correct_ans : 2,
    
},

{    
name : 'Question #30',
img : 'Road_signs/atl_image.jpg',
audioQuest : 'Text-Speech-Audios/question_30.mp3', 
quest_txt : 'The Georgia Move-Over law requires motorist to:',

possible_ans : [

'A.: Move to the next lane if safely possible.',

'B: Move into the median.',

'C: Stop alongside the officer.'

],
     
correct_ans : 0,
    
},

{    
name : 'Question #31',
img : 'Road_signs/atl_image.jpg',
audioQuest : 'Text-Speech-Audios/question_31.mp3', 
quest_txt : 'The Georgia Implied Consent Law means:',

possible_ans : [

'A.: you must sign a statement that you will not drive a motor vehicle after drinking more than three drinks.',

'B: you are required to submit to tests of your blood, breath, urine or other bodily substances to determine if you are under the influence of drugs or alcohol.',

'C: you consent to have a blood sample taken if an officer stops you for driving recklessly.'

],
     
correct_ans : 1,
    
},

{    
name : 'Question #32',
img : 'Road_signs/atl_image.jpg',
audioQuest : 'Text-Speech-Audios/question_32.mp3', 
quest_txt : 'What signal should you give before changing lanes in traffic?',

possible_ans : [

'A.: Left or right turn signal, depending on whether you wish to change left or right.',

'B: Stop signal; hand and arm down.',

'C: No signal is needed if the lane is open ahead.'

],
     
correct_ans : 0,
    
},

{    
name : 'Question #33',
img : 'Road_signs/atl_image.jpg',
audioQuest : 'Text-Speech-Audios/question_33.mp3', 
quest_txt : 'When driving into fog you should:',

possible_ans : [

'A.: Use your parking lights.',

'B: Use your high-beam headlights.',

'C: Use your low-beam headlights.'
],
     
correct_ans : 2,
    
},

{    
name : 'Question #34',
img : 'Road_signs/atl_image.jpg',
audioQuest : 'Text-Speech-Audios/question_34.mp3', 
quest_txt : "When approaching an intersection where a 'Yield' sign has been placed facing you, you must:",

possible_ans : [

'A.: give right of way to all vehicles.',

'B: stop, regardless of time or place.',

'C: come to a full stop, look in both directions, and then proceed.'

],
     
correct_ans : 0,
    
},

{    
name : 'Question #35',
img : 'Road_signs/atl_image.jpg',
audioQuest : 'Text-Speech-Audios/question_35.mp3', 
quest_txt : "A person’s commits the offense of aggressive driving when he or she:",

possible_ans : [

'A.: Is the passenger in a motor vehicle where the driver has the intent to annoy, harass, molest, intimidate, injure or obstruct another person.',


'B: Operates any motor vehicle with the intent to annoy, harass, molest, intimidate, injure or obstruct another person.',


'C: Operates any motor vehicle with the intent to help someone else.'

],
     
correct_ans : 1,
    
},

{    
name : 'Question #36',
img : 'Road_signs/atl_image.jpg',
audioQuest : 'Text-Speech-Audios/question_36.mp3', 
quest_txt : "If you have to stop on the shoulder of a freeway because of an emergency, you should:",

possible_ans : [

'A.: activate your hazard lights, raise the hood to indicate difficulty.',


'B: stand behind your car to warn traffic that you have stopped.',


'C: get out of your car and walk for help.'
],
     
correct_ans : 0,
    
},

{    
name : 'Question #37',
img : 'Road_signs/atl_image.jpg',
audioQuest : 'Text-Speech-Audios/question_37.mp3', 
quest_txt : "If the signal light changes from green to yellow as you enter the intersection, you should:",

possible_ans : [

'A.: stop and back up past the crosswalk.',

'B: slow down and exercise caution before proceeding through the intersection.',

'C: speed up to clear the intersection.'

],
     
correct_ans : 1,
    
},

{    
name : 'Question #38',
img : 'Road_signs/atl_image.jpg',
audioQuest : 'Text-Speech-Audios/question_38.mp3', 
quest_txt : "Bicyclists should use their arms to signal to other motorists when they are going to make a turn, or when they are slowing or stopping.",

possible_ans : [

'A.: False.',

'B: True.'
],
     
correct_ans : 1,
    
},

{    
name : 'Question #39',
img : 'Road_signs/atl_image.jpg',
audioQuest : 'Text-Speech-Audios/question_39.mp3', 
quest_txt : "A solid yellow line on your right side of the center line, means:",

possible_ans : [

'A.: reduce speed.',


'B: traffic light ahead.',


'C: do not pass.'
],
     
correct_ans : 2,
    
},

{    
name : 'Question #40',
img : 'Road_signs/atl_image.jpg',
audioQuest : 'Text-Speech-Audios/question_40.mp3', 
quest_txt : "When is it legal to back up on an expressway:",

possible_ans : [

'A.: never.',

'B: if you go past your exit.',

'C: in an emergency.'
],
     
correct_ans : 0,
    
},

{    
name : 'Question #41',
img : 'Road_signs/atl_image.jpg',
audioQuest : 'Text-Speech-Audios/question_41.mp3', 
quest_txt : "At a railroad crossing, where the crossing gates have been lowered:",

possible_ans : [

'A.: you must stop and remain stopped until the gates are raised and all tracks are cleared.',

'B: you may go around the gates, if you do not see a train coming.',

"C: you must stop first, and then you may proceed around the gates if you don't see a train coming."

],
     
correct_ans : 0,
    
},


{    
name : 'Question #42',
img : 'Road_signs/atl_image.jpg',
audioQuest : 'Text-Speech-Audios/question_42.mp3', 
quest_txt : "When does the law require your headlights to be turned on?",

possible_ans : [

'A.: From 6:00 p.m. to 6:00 a.m.',

'B: When you see other drivers with their headlights on.',

'C: 1/2 hour after sunset to 1/2 hour before sunrise. Or during other periods of low visibility.'

],
     
correct_ans : 2,
    
},

{    
name : 'Question #43',
img : 'Road_signs/atl_image.jpg',
audioQuest : 'Text-Speech-Audios/question_43.mp3', 
quest_txt : "Without exception, never drive a vehicle through, around, or under any railroad gate or barrier.",

possible_ans : [

'A.: False.',

'B: True.'
],
     
correct_ans : 1,
    
},

{    
name : 'Question #44',
img : 'Road_signs/atl_image.jpg',
audioQuest : 'Text-Speech-Audios/question_44.mp3', 
quest_txt : "Before moving your vehicle into traffic from a parked position, you should:",

possible_ans : [

'A.: signal other traffic and then pull out into the street.',

'B: signal and proceed when it is safe.',

'C: sound your horn and pull from the curb slowly.'

],
     
correct_ans : 1,
    
},

{    
name : 'Question #45',
img : 'Road_signs/atl_image.jpg',
audioQuest : 'Text-Speech-Audios/question_45.mp3', 
quest_txt : "What is the most common type of collision between cars and motorcycles?",

possible_ans : [


'A.: When a car turns in front of an oncoming motorcycle.',


'B: When a motorcycle is rear-ended by a car.',


"C: When a car backs out of a driveway into the motorcycle's path."

],
     
correct_ans : 0,
    
},

{    
name : 'Question #46',
img : 'Road_signs/atl_image.jpg',
audioQuest : 'Text-Speech-Audios/question_46.mp3', 
quest_txt : "Who is responsible for littering from a motor vehicle?",

possible_ans : [

'A.: The occupants of the vehicle.',

'B: The driver of the vehicle.',

'C: The property owner.'
],
     
correct_ans : 1,
    
},

{    
name : 'Question #47',
img : 'Road_signs/atl_image.jpg',
audioQuest : 'Text-Speech-Audios/question_47.mp3', 
quest_txt : "What should you do when you approach a flashing red light?",

possible_ans : [

'A.: Slow down.',

'B: Stop.',

'C: Continue with caution.'
],
     
correct_ans : 1,
    
},

{    
name : 'Question #48',
img : 'Road_signs/atl_image.jpg',
audioQuest : 'Text-Speech-Audios/question_48.mp3', 
quest_txt : "The Hands Free GA Law makes it illegal to do the following, while operating a motor vehicle in GA:",

possible_ans : [

'A.: Watch, record, or broadcast a video or movie.',

'B: Physically hold or support any wireless device.',

'C: Write, send, or read an email or text.',

'D: All of the answers.'
],
     
correct_ans : 3,
    
},

{    
name : 'Question #49',
img : 'Road_signs/atl_image.jpg',
audioQuest : 'Text-Speech-Audios/question_49.mp3', 
quest_txt : "The distance it takes you to stop your vehicle depends on:",

possible_ans : [

'A.: road condition, but not your speed.',

'B: the number of vehicles in front of you.',

'C: reaction of the driver, vehicle condition, wind direction, and road conditions.'

],
     
correct_ans : 2,
    
},

{    
name : 'Question #50',
img : 'Road_signs/atl_image.jpg',
audioQuest : 'Text-Speech-Audios/question_50.mp3', 
quest_txt : "The shoulder belt should be worn behind your back or under your arm.",

possible_ans : [

'A.: False.',


'B: True.'
],
     
correct_ans : 0,
    
},


{    
name : 'Question #51',
img : 'Road_signs/image51.jpg',
audioQuest : 'Text-Speech-Audios/question_51.mp3', 
quest_txt : "What does this road sign mean:",

possible_ans : [

'A.: Be ready to merge with traffic entering your lane.',

'B: Always stop.',

'C: Divided highway ahead.'
],
     
correct_ans : 0,
    
},

{    
name : 'Question #52',
img : 'Road_signs/image52.jpg',
audioQuest : 'Text-Speech-Audios/question_52.mp3', 
quest_txt : "What does this road sign mean:",

possible_ans : [

'A.: You must turn right.',


'B: No right turn permitted.',


'C: Right turn permitted on red light.'
],
     
correct_ans : 1,
    
},

{    
name : 'Question #53',
img : 'Road_signs/image53.jpg',
audioQuest : 'Text-Speech-Audios/question_53.mp3', 
quest_txt : "What does this road sign mean:",

possible_ans : [

'A.: Winding Road.',

'B: Loose Gravel.',

'C: Slippery when wet.'
],
     
correct_ans : 2,
    
},

{    
name : 'Question #54',
img : 'Road_signs/image54.jpg',
audioQuest : 'Text-Speech-Audios/question_54.mp3', 
quest_txt : "What does this road sign mean:",

possible_ans : [

'A.: Directional sign for children.',


'B: School zone ahead.',


'C: Playground area ahead.'

],
     
correct_ans : 1,
    
},

{    
name : 'Question #55',
img : 'Road_signs/image55.jpg',
audioQuest : 'Text-Speech-Audios/question_55.mp3', 
quest_txt : "What does this road sign mean:",

possible_ans : [

'A.: Falling rocks.',


'B: Trucks use second gear.',


'C: Steep Hill.'

],
     
correct_ans : 2,
    
},
];



loadQuestion(curr_index);
curr_audio.play();

function loadQuestion(curr_index) {
curr_audio.currentTime = 0;
curr_audio.src = test_questions[curr_index].audioQuest;
curr_audio.load;
current_question.textContent = test_questions[curr_index].name;  
track_img.style.backgroundImage = "url(" + test_questions[curr_index].img + ")";
question_txt.textContent = test_questions[curr_index].quest_txt; 
addButtons(curr_index);
};

function nextQuestion() {
removeButtons(curr_index);
if (curr_index < test_questions.length-1){ 
curr_index += 1;
}else{ curr_index = 0;
 };
 loadQuestion(curr_index);
playQuestion();
};


function prevQuestion() {
removeButtons(curr_index);

    if (curr_index > 0) {
curr_index -= 1;
}else {
curr_index = test_questions.length-1;
};
    
loadQuestion(curr_index);
playQuestion();
};

function Repeat() {
i = curr_index;
loadQuestion(i);
playQuestion();
};



function playQuestion() {
curr_audio.play();
};



function addButtons(curr_index){
    for (let j=0;j<4; ++j){
        str=document.getElementById("button"+j);
        str.style.display="none";
    };
 var possible_index = test_questions[curr_index].possible_ans.length;
    let btn_width = 0;
    for (let j=0;j < possible_index; j++) {
        if (btn_width < test_questions[curr_index].possible_ans[j].length){
            btn_width = test_questions[curr_index].possible_ans[j].length;
        };
    };
    
    let final_width = btn_width*8;
    let MAX_WIDTH= 204;
    if (final_width >> MAX_WIDTH) {
        final_width = MAX_WIDTH;
    };
   
    let  str_width = final_width + "px";
   
    
 for (let i=0;i < possible_index; i++) {
 btn = document.getElementById("button"+i);
     btn.style.width = str_width;
   btn.innerHTML = test_questions[curr_index].possible_ans[i];
     btn.style.display = "block";
   }
  }; 
   
 function removeButtons(current_index) {
 var possible_index = test_questions[curr_index].possible_ans.length;
 for (let i=0; i<possible_index; i++) {
 btn = document.getElementById("button"+i);    
 btn.style.display = "none";
 }
 
}; 
   
   
function checkEvent() {
btn.addEventListener("click",checkAnswer);
   
}; 

function checkAnswer(num) {
    
    
if (num  == test_questions[curr_index].correct_ans) {
  curr_audio.src = 'Text-Speech-Audios/Correct_answer.mp3';
  curr_audio.load;
    curr_audio.play();
 
  } else {
  curr_audio.src = 'Text-Speech-Audios/Wrong_answer.mp3';
  curr_audio.load;
      curr_audio.play();
    
  };
  
};


  