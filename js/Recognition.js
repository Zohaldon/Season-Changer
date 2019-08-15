//When Window is loaded
window.addEventListener("DOMContentLoaded",	() => {
    
    //Configure Speech Recogniton
    window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

    const recognition = new SpeechRecognition(),
    RecognitonOutput = document.querySelector('.Recognition-Output');

    var Winter = document.getElementById("w");
    var Summer = document.getElementById("s");
    var Monsoon = document.getElementById("m");

    function ChangeSeasonToSummer()
    {
        Winter.style.display='none';
        Monsoon.style.display='none';
        Summer.style.display='block';
        document.body.style.backgroundImage = "url('images/Summer.jpeg')";
    }

    function ChangeSeasonToWinter()
    {
        Winter.style.display='block';
        Summer.style.display='none';
        Monsoon.style.display='none';
        document.body.style.backgroundImage = "url('images/Winter.jpeg')";
    }

    function ChangeSeasonToMonsoon()
    {
        Winter.style.display='none';
        Summer.style.display='none';
        Monsoon.style.display='block';
        document.body.style.backgroundImage = "url('images/Monsoon.jpg')";
    }


    //Initiate Speech Recognition
    recognition.start();

    //Listen uptill user finishes commanding
    recognition.addEventListener('result', e => {

        //Get the Trnscript of User's Speech
        //Removes all of the Spaces
        const transcript = e.results[0][0].transcript.toLowerCase().replace(/\s/g, '');

        //Print The recognised text
        RecognitonOutput.textContent = transcript;

        //Check if Recived Transcript could be applied to change the season or not 
        if (transcript == 'winter')
        {
            ChangeSeasonToWinter();
        }
        else
        {
            if(transcript == 'summer')
            {
                ChangeSeasonToSummer();
            }
            if(transcript == 'monsoon')
            {
                ChangeSeasonToMonsoon();
            }
        }
    });

    //Restart speech recognition after user has finished talking
    recognition.addEventListener('end', recognition.start);
});