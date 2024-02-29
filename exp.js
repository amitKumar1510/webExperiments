var quotes={
            0:"Click on next button to see the quotes.",
            1:"The only way to do great work is to love what you do." +"- Steve Jobs",
            2:"In three words I can sum up everything I've learned about life: it goes on." +"- Robert Frost",
            3:"The only limit to our realization of tomorrow will be our doubts of today." +"- Franklin D. Roosevelt",  
            4:"Be the change that you wish to see in the world." +"- Mahatma Gandhi",
            5:"Success is not final, failure is not fatal: It is the courage to continue that counts." +"- Winston Churchill",
            6:"The greatest glory in living lies not in never falling, but in rising every time we fall." +"- Nelson Mandela",
            7:"Life is what happens when you're busy making other plans." +"- Allen Saunders",
            8:"The only thing we have to fear is fear itself." +"- Franklin D. Roosevelt",
            9:"It is not the strongest of the species that survive, nor the most intelligent, but the one most responsive to change." +"- Charles Darwin",
            10:"To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment." +"- Ralph Waldo Emerson",
            11:"Two things are infinite: the universe and human stupidity; and I'm not sure about the universe." +"- Albert Einstein",
            12:"The best way to predict the future is to create it." +"- Peter Drucker",
            13:"The journey of a thousand miles begins with one step." +"- Lao Tzu",
            14:"You miss 100% of the shots you don't take." +"- Wayne Gretzky",
            15:"Imagination is more important than knowledge." +"- Albert Einstein",
            16:"End of quotes! Click on previous button to see previous quotes."
        };
        
        var index=0;
        window.onload = function() {
            document.getElementById("quotesDiv").innerHTML = quotes[0];
        };
        function previousQuote(){
            if(index>0){
            index=index-1;
            quote=quotes[index];
            // console.log(quote);
            document.getElementById("quotesDiv").innerHTML=quote;
            }
        }
        function nextQuote(){
            if(index<16){
            index=index+1;
            quote=quotes[index];
            // console.log("Quotes : ",quote);
            document.getElementById("quotesDiv").innerHTML=quote;
            }
        }
