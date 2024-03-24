// const { response } = require("express");

var points=-1;
var options=document.querySelectorAll("#options button");

// const getQues=async()=>{
//     try{
//         const options ={
//             method:'GET',
//             body: JSON.stringify({
//                 message:vaue
//             })
//         }
//     }
//     catch(e){

//     }
//     const ques=await fetch('http://localhost:8000/gemini',option)
//     const data=await response.text()
//     console.log(data)
// }





const adhdQuestions = [
    // Existing questions ... (from previous responses)

    // Inattention (Preschool-aged children)
    "How often does your child have difficulty following simple instructions or completing short tasks (e.g., putting away toys)?",
    "Does your child frequently switch between activities or toys without finishing any of them?",
    "How often does your child seem lost in their own thoughts and not respond to their name being called?",

    // Hyperactivity-Impulsivity (Adolescence)
    "Does your teenager have difficulty sitting still for extended periods during lectures or studying?",
    "How often does your child seem restless or fidgety even when relaxing at home?",
    "Does your teenager frequently take unnecessary risks or engage in dangerous activities without considering the consequences?",

    // General Functioning
    "How much difficulty does your child have completing schoolwork or assignments due to inattention or disorganization?",
    "How often does your child's behavior negatively impact their social interactions with peers or family members?",
    "Does your child struggle to manage their time effectively and meet deadlines for chores or projects?",

    // Additional Considerations
    "Have you noticed any changes in your child's behavior or attention span compared to previous years?",
    "Are there specific situations or environments where your child's ADHD symptoms seem to be more pronounced?",
    "Has your child ever been evaluated for other learning disorders or mental health conditions that might co-occur with ADHD?",
        "How often does your child have difficulty sustaining attention in tasks or play activities?",
        "How often does your child fail to complete schoolwork, chores, or other duties?",
        "How often does your child seem not to listen when spoken to directly?",
        "How often does your child lose or misplace items needed for schoolwork or tasks at home?",
        "How often is your child easily distracted by extraneous stimuli?",
        "How often does your child forget to do daily chores or errands?",
        "How often does your child have difficulty organizing tasks and activities?",
        "How often does your child avoid, dislike, or is reluctant to engage in tasks that require sustained mental effort?",
        "How often does your child fidget or squirm with their hands or feet when seated for a long time?",
        "How often does your child leave their seat in situations when remaining seated is expected?",
        "How often does your child run about or climb in situations where it is inappropriate?",
        "How often is your child unable to be still or play quietly?",
        "How often does your child talk excessively?",
        "How often does your child blurt out an answer before a question has been fully completed?",
        "How often does your child have difficulty waiting their turn?",
        "How often does your child interrupt others' conversations or games?",
        "How often does your child take things without permission?",
        "How often does your child act impulsively in a situation that could lead to harm?",
        "**Movie Night:** Your family decides to watch a movie together at home. How often does your child fidget or get up to get snacks or drinks throughout the movie?",
  "**Homework Time:** Your child sits down to do their homework. How often do they get distracted by their phone, noises outside, or other thoughts while trying to focus?",
  "**Playing with Friends:** Your child is playing with friends at the park. How often do they lose track of the game or conversation and seem lost in their own thoughts?",

  // Scenario-Oriented Questions (Hyperactivity-Impulsivity)
  "**Waiting at the Doctor's Office:** You and your child are waiting for your appointment at the doctor's office. How often does your child have difficulty sitting still in the waiting room and need to move around?",
  "**Grocery Shopping:** You take your child grocery shopping with you. How often do they impulsively reach for items without asking or grab things off shelves without considering the consequences?",
  "**Family Dinner:** Your family is having dinner together. How often does your child blurt out something or interrupt others while they're talking?",

  // Scenario-Oriented Questions (Combined)
  "**School Play:** Your child is participating in a school play. How often do they have difficulty remembering their lines or staying focused during rehearsals?",
  "**Cleaning Up Room:** You ask your child to clean their room. How often do they start cleaning but get easily distracted by toys or other objects and have trouble finishing the task?",
  "**Traveling:** You are taking a long car trip with your child. How often do they fidget in their seat, complain of boredom, or impulsively ask for things throughout the trip?"

  ];


var index=[]
var count=0;
function questions(){


                var ind = Math.floor(Math.random() * adhdQuestions.length);
                document.querySelector("p").innerHTML = adhdQuestions[ind]
                index.push(ind); // Push the random index to the index array
            }




for(var i=0;i<options.length;i++){
    options[i].addEventListener("click",function(){
        var val=this.innerHTML;
        switch(val){
            case "OCASIONALLY":
                if(points==-1 && count<adhdQuestions.length) break;
                points+=1;
                break;
            case "OFTEN":
                if(points==-1 && count<adhdQuestions.length) break;
                points+=2;
                break;
            case "VERY OFTEN":
                if(points==-1 && count<adhdQuestions.length) break;
                points+=3;
                break;
            default:
                if(points==-1){
                    points=0;
                }
        }
        questions();
        ++count;
        if(count>adhdQuestions.length){
            var list=document.querySelectorAll("button")
            for(var t=0;t<list.length;t++){
                list[t].classList.add("disable")
                document.querySelector("p").textContent="ASSESSMENT OVER"
                var result;
                if(points>35) result="HIGH CHANCES OF ADHD"
                else if(points<30) result="LOW CHANCES OF ADHD"
                else result="MODERATE CHANGES OF ADHD"
                document.querySelector("h1").textContent=result;
                document.querySelector("h3").textContent="Your Score: "+points+"/40";
            }
        }
    })
}
