var inattentive=-1;
var hyperactive=0;
var options=document.querySelectorAll("#options button");


const inattentiveAdhdQuestions = [
    "How often do you have difficulty finishing tasks or projects, even after completing the most challenging parts? (Never / Rarely / Sometimes / Often / Very Often)",
    "How often do you struggle to organize tasks or materials effectively when faced with a complex project? (Never / Rarely / Sometimes / Often / Very Often)",
    "How frequently do you forget appointments, deadlines, or errands? (Never / Rarely / Sometimes / Often / Very Often)",
    "How often do you misplace or lose important items needed for work or daily activities (e.g., keys, phone, wallet)? (Never / Rarely / Sometimes / Often / Very Often)",
    "How easily are you sidetracked by noises, conversations, or other external stimuli while trying to focus on a task? (Never / Rarely / Sometimes / Often / Very Often)",
    "How often does your mind wander or drift off topic when reading or listening to someone speak? (Never / Rarely / Sometimes / Often / Very Often)",
    "How often do you avoid starting or delay tasks that require sustained mental effort or concentration (e.g., paperwork, reports)? (Never / Rarely / Sometimes / Often / Very Often)",
    "How frequently do you make careless mistakes or overlook details in your work or daily activities? (Never / Rarely / Sometimes / Often / Very Often)",
    "How often do you have difficulty following instructions or completing tasks exactly as instructed? (Never / Rarely / Sometimes / Often / Very Often)",
    "How well do you manage to focus and complete tasks effectively when faced with multiple things to do at once? (Never / Rarely / Sometimes / Often / Very Often)",
    "How often do you find yourself daydreaming or lost in thought during meetings, lectures, or important conversations? (Never / Rarely / Sometimes / Often / Very Often)",
    "How frequently are you bothered by intrusive thoughts or worries that interfere with your ability to focus on a task at hand? (Never / Rarely / Sometimes / Often / Very Often)"
  ];


  const hyperactiveImpulsiveAdhdQuestions = [
    // Hyperactivity
    "How often do you feel a sense of inner restlessness that makes it difficult to sit still for long periods? (Never / Rarely / Sometimes / Often / Very Often)",
    "How frequently do you fidget with your hands or feet, or feel the need to move around even when in situations that require remaining seated? (Never / Rarely / Sometimes / Often / Very Often)",
    "How often do you feel like you're constantly 'on the go' or have an urge to be physically active, even in inappropriate settings? (Never / Rarely / Sometimes / Often / Very Often)",
    "How well can you participate in quiet leisure activities (reading, watching movies) without feeling restless or needing to get up frequently? (Never / Rarely / Sometimes / Often / Very Often)",
    "How often do you have difficulty remaining seated in situations where it's expected, such as meetings or lectures? (Never / Rarely / Sometimes / Often / Very Often)",
    "How often do you find yourself talking excessively in conversations, even when it's not your turn or the situation doesn't necessarily warrant it? (Never / Rarely / Sometimes / Often / Very Often)",

    // Impulsivity
    "How frequently do you have difficulty waiting your turn in situations like lines or conversations? (Never / Rarely / Sometimes / Often / Very Often)",
    "How often do you interrupt conversations or activities of others without waiting for them to finish? (Never / Rarely / Sometimes / Often / Very Often)",
    "How frequently do you blurt out answers or comments before a question is fully completed? (Never / Rarely / Sometimes / Often / Very Often)",
    "How often do you feel a strong urge to act impulsively without thinking through the consequences first? (Never / Rarely / Sometimes / Often / Very Often)",
    "How often do you engage in risky activities or make impulsive decisions that could potentially lead to negative outcomes? (Never / Rarely / Sometimes / Often / Very Often)",
    "How often do you make impulsive purchases or financial decisions without considering your budget or potential consequences? (Never / Rarely / Sometimes / Often / Very Often)"
  ];






var indexInattentive=[]
var indexHyper=[]
var countInattentive=0;
var countHyperactive=0;
// function questions(){
    // var ind;
    //             while(true){
    //                 if(countInattentive<4){
    //                    ind = Math.floor(Math.random() * inattentiveAdhdQuestions.length);
    //                    for(var t=0;t<indexInattentive.length;t++){
    //                     if(ind==t) continue;
    //                 }
    //                 indexInattentive.push(ind);
    //                 ++countInattentive;
    //                 }
    //                 else{
    //                   ind = Math.floor(Math.random() * hyperactiveImpulsiveAdhdQuestions.length);
    //                 for(var t=0;t<indexHyper.length;t++){
    //                     if(ind==t) continue;
    //                 }
    //                 indexHyper.push(ind);
    //                 ++countHyperactive;
    //                 }
    //                 break;
    //             }

    //             document.querySelector("p").innerHTML = adhdQuestions[ind]
    //              // Push the random index to the index array
    //         }

    function questions() {
        var ind;
        if (countInattentive < 4) {
            ind = Math.floor(Math.random() * inattentiveAdhdQuestions.length);
            // while (indexInattentive.includes(ind)) {
            //     ind = Math.floor(Math.random() * inattentiveAdhdQuestions.length);
            // }
            ++countInattentive;
            indexInattentive.push(ind);
            document.querySelector("p").innerHTML = inattentiveAdhdQuestions[ind];
        } else {
            ind = Math.floor(Math.random() * hyperactiveImpulsiveAdhdQuestions.length);
            // while (indexHyper.includes(ind)) {
            //     ind = Math.floor(Math.random() * hyperactiveImpulsiveAdhdQuestions.length);
            // }
            indexHyper.push(ind);
            ++countHyperactive;
            document.querySelector("p").innerHTML = hyperactiveImpulsiveAdhdQuestions[ind];
        }
    }



for(var i=0;i<options.length;i++){
    options[i].addEventListener("click",function(){
        var val=this.innerHTML;
        var count=countHyperactive+countInattentive;
        var quesNo=countHyperactive+countInattentive;
        switch(val){
            case "RARELY":
                if(points==-1 && count<6) break;
                if(quesNo==1 | quesNo==2 | quesNo==3) inattentive+=1;
                break;
            case "SOMETIMES":
                if(points==-1 && count<6) break;
                if(quesNo<=6){
                    if(quesNo>=4) ++hyperactive;
                    else ++inattentive;
                }
                break;
            case "OFTEN":
                if(points==-1 && count<6) break;
                if(quesNo<=6){
                    if(quesNo>=4) ++hyperactive;
                    else ++inattentive;
                }
                 1
                 break;
            case "VERY OFTEN":
                if(points==-1 && count<6) break;
                if(quesNo<=6){
                    if(quesNo>=4) ++hyperactive;
                else ++inattentive;
                }

                break;
                default:
                    if(points==-1){
                        inattentive=0;
                    }
        }
        alert(val);
        questions();
        ++quesNo;
        if(quesNo>6){
            var list=document.querySelectorAll("button")
            for(var t=0;t<list.length;t++){
                list[t].classList.add("disable")
                document.querySelector("p").textContent="ASSESSMENT OVER"
                var result;
                if(points>=4) result="HIGH CHANCES OF ADHD"
                else result="LOW CHANCES OF ADHD"
                document.querySelector("h1").textContent=result;
                document.querySelector("h3").textContent="Your Score: "+inattentive+hyperactive+"/6    Inattentive: "+inattentive+"/4    Hyperactive & Impulsive: "+hyperactive+"/2";
            }
        }
    })
}
