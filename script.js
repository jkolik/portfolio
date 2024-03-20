const ASCII_CHARS = ["#", "0", "%", "*", "+", "~", "-", ";", ":", ",", "."];
const asciiContainer = document.getElementById("asciiContainer");

const asciiImages = [
    "................................................................................\n................................................................................\n................................................................................\n................................................................................\n.........................................................,,.....................\n.......................................................,:+*~-:,.................\n........................................................,~++0*-:,...............\n.,,......,,,,,,,,,,......,,,,,,,,,,,,,...,,,,.......,,:~~+%;~*---;,......,......\n-~~;;---------------~-;;;-~~~~~~~~~~~-:;;;;;;;:::-~+%%+0#%0~;;-----;,,,,:;:,,,,,\n,,,,,,,,::-~~~~~~~~++**~::::::::::::-~+++~~~~~~~~**+*+~%###*+~~~%%+~--;:;;;:::::\n...........,:;~++~~+~~~-:::,,,,...,-~-~~++++++*++++++++*%**++**+*0##0*-:........\n,,,,,,,,,,,,...,;~**~++~~~~------;~+++~~~+*++++~+~~~~~~~~~+~~~~++**0##0*,.......\n,,,,,,,,..........,;+*%%%*+*~~~-~++++*%**+~~+-~~~*%%%+~-~~~+++~~~+++*%%+,.......\n,,,,,,,,;~+*%%%*~-:;--~-+%%**+~+~+*++++~+~~+*++*%0##%~~~~~~++**0##0***-,......,,\n,,,,,;+%00000000#000*:...~~~~-*0+~~+++~~+~++~+%###0~~~~~~~+%+*00#0*+-:...,,,,,,,\n:::;*%%%%%%%****%0####~-~%-:,.-0+-~+*~~~+++~~~%0##+~+*+**%##*-**++*0%%%*~,,,,,,,\n,,-00%00%%*~;~;:-*0####**~;::;-%+~+~-~----~++~--~~++++*%##0%*+*+~+0######%~:,,,,\n:;0%%00%*+~~~+-~0##0%%**-;~*%000~+%+~~-~~~--+*+~-~~~+*0##%%+*%%%**0#***%0###+:::\n:*0**0%+~~-~--~+%##00*++*%00%%00++%#*~~*---*~~~*+~++*######00*%++*%#**--*%###+,,\n*#%*~**++++*%+++*%%00#00%000%%00*+*%~--+++++*+~~+++*0####0%0#%~~-*%%00%%%%%###-.\n%##++++~***%%%%0%*%+*%%*0000###0%**%+~~~~++~~++~~~-+%####%%*0+-~++%**%00#%+###0+\n**#0+;-~***%****%#####0**%%0%%*++~~++++++*++*%%*+~~~+####*%%%+*%***%%%%00%+####0\n*+%##%+++++**%0#######%********************+++*%%**++*0##%%*+*%0%%%%%%%00*%###%*\n****0###############%*++*****%%%%%%%%%%%%%%%%%%%%%%%**%%##%*++*0%0%%%00%%0###%++\n*****%0##########0%**********************%*+************%##0%*++**%**%%0####%***\n***%%%%%%0000000%0%%%%%%%%%%%%%%**********%%*************%0###000%%%0#####0*****\n*****************0%****%*****%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%0##########0%*******\n*****************%%******************************%%%%%%%%%%%%%%%%%00%%%%%%%*****",
    
    ":::::::::::::::::::::::::::::::::::::::::::::;;;-~+~-~~~~++*****%%00###000000%**\n:::::::::::::::::::::::::::::::;;;;---~~~~+++++++***********%%%%%0####*+++++++++\n:::::::::::::::::::::;;;--~~+++*********%%%%0000000%*%**00############0000000000\n:::::::::::::;;--~~++*****%%%***********0########0%**+~-~*0#####################\n:::::::;;;-~+**%%%0000000%**%%%000000000########0*+~~++**~*#####################\n::::~~~-;~%00#############00#################00000*~+****+*0####################\n:::*+-;;+#############################0##########0++*%**%*%%####################\n::*~-;~%####################0%%******%%0000#####%*~********0####0000000000000000\n,-+--~%0##################%*++**%~*%**++*%0000%%*~+%%*%%*+*000000000000000000000\n;-~+*00000###000########%*+*%0#00*%0000%*++%*~++~+%0000%*++%000000000000000%%%%%\n-~**%%%000%%%%%%0######%**%##0%%%*+%%**0#%%*+**++**%%%%%%+++%00000000000%%%%%%%%\n-~*%0000000000####0###0+%%000000****00**00%*+**++******+*++++*%%0000000000000000\n;++*%%%000000000000###***%*********+*+~+%0%**0*+++~~~+~~+*+~~~~+%000000000000000\n,-%+%00000000000000###***0#0%%*%%~~+*%0%%#**%%*+++~+~+***%*++~+++000000000000000\n::~*%0#000000000000###%*%%00%%%*%**%**0%00*%%%0++++*******+~~~~++*00000000000000\n::;~*%%%%00000#####00#0*%%*00%+~+*%*++%00*+*%##0*+**%%%*+++~~~~+++%0000%%%%*****\n:;;;-~+**%%%000000000000%%%%%+%0000000%***~+##00%*****++++++~~~+**+++~~~~-------\n;;;;--~~++**%%%%%%%%%00000%**%%%%%%%%%%**%~~%000%+~++++++**+~~~~**+--;;;;;;;;;;;\n;;;;--~~~++**%%%%%%%%00000000%%%*%%*%%00#0+++***++**********+~~~+*+-;;;;;;;;;;;;\n;;;----~~~+++***********%%*%%*+~~~-~~~++*++****%0*%*********++~~~++~;;;;;;;;;;;;\n;;;;;;---------------~~+%%%%%~;;::::;::;-+*****0*+*%%%%%**%%+~~~~~+~;;;;;;;;;;;;\n;-;;;;;;;;;;;;;;;;;;;-%%+++*~:::::::::::;~~+%***++~++****+++~~~~~~~+-;;;;;;;;;;;\n-+;:;~::;;;;;;;;~~;;--*0%++++~;;;::::;;;;-~+++*%%+-------------~~~~~~-;;;;;;;;;;\n+~--~~--~~~+~-~*++~++++++****+++~~~~~~~~++*%%00%*~---;;;;;;--;;-~~~~~~-;;;;;;;;;\n~++++-~+~++~+~~+~+++~+~-+--~+*%0%~~~~+*%%0%%*+~--;;;;;;;;;;;;;;;;-~~+~~--;;;;;;;\n:;-;-;---~+~~++--~++~+~~+-;;;--+*%*%%00%*+~-;;;;;;;;;;;;;;;;;;;;;;~++~~~++-;;;;;\n:;;;;;;:-~-~~~~-;;~~~~+~~;:::;;;-~%%%*+~-;;;:::::::::;;;;;;;;;;;;--~~~+++~;;;;;;\n;;::::::;;:;;;;:::;;;;;:--::::;;;;;;;;;;;:::::::::::::;;;;;;;;;;;;--~~++++-;;;;;",

    "**++++++***++%%**+++*****%%*%%00#00#############################################\n++++++**+**+**%%*+++***+*%*%%%%0#00######0######################################\n++~++******+*%%%*++++**+*%*%0%%0000#0000%%%00###################################\n+~~~++***+++*%%**+~++*++*%**%%00000000++*%%00%%0################################\n-~~~~~+***+******+~+++++*%**%%000000%~~+**%%%%**0###############################\n-~~~~~+++*++******~+++*+*%*%%%00000%*;~+*%%%*+++%0##############################\n-~~~~~~++*+++*%%*+++++++***%%%0000%%---~+++++~~~*00#############################\n-~~~~~++++*++*%%*++*++++****%%%000%+;;;;--~~~~~-*00#############################\n-~~~~++++++++*%%*++*++++****%%%%0%%~;-;;;-;;-~--*%0#############################\n~~~~~~~~+++++*%%*~+*++++***%%%%%0%*+---;;---~-;;*%0#############################\n~~~~~~~~+++~+*0%*++++++*****%*%%0%*+-;;;;;;;-;-+%00#############################\n-~~~~~~~+++++*0*+++++++*****%**%0%*+;;;;;::;;~*%%00#############00000###########\n~~~~~+~~+++++*0%*++++*++****%%%%00*+-::::::;-+*%00#############000000000#00##000\n~+~++++~+++++*0%*+++*********%%%%%*+~;::::;;-+*%00#############00000000000000000\n~+++~~++~+++++*%*++***+*******%%%%*+~;:::::;-+*%00000000#######00000000000000000\n~++++~++++++++*%*+*********+*****+-;;::::::;-~+*%%00000000000000%%%%%00000000000\n~+++~+++++++++*%*+***+*****+*+~~~-;;;;:::::;-~~~+**%%%%%0000000%%%%%%%%%%0000000\n+*+++++*++++++*%********++*+--------;:::::::;--~~~-~+*%%%%000%%%%%%%%%%%%0%000%%\n++*+++*+~~++++%%***+****+++-;------;;::;::::;;;------~+*%%%0%%%%%%%%%%%%%%%000%%\n+++****+~++++**%*++******+-;---~-;;;;::;;::::;;;--;----**%%0%%%%%%%%%%%%%%%00%%%\n+*****++++++**+*%++*****++-;;;;;-;;;;:;:::;;;;;;;-::-;;+*%%00%%%%%%%%%%%%%%%%%%%\n*%*****+++++++*%*++*****++-;;::;;;;;:;::::;-~~~-;;::::;+*%%%%%%%%%%%%%%%%%%%%%%%\n**********++++*%*++*****++~;;;:::;::::::;;--~~++-;::::-+*%%%%%%%%%%%%%%%%%%%%%%%\n*%*************%++******++-;;;::::;:::::;;;--~~+~:::::-+*%%%%%%%%%%%%%%%%%%%%%%%\n*%**********%*%%***%****++----:::::::::::;;-~~~~~::;;;~**%%%%%%%%%%%%%%%%%%%%%%%\n*%*********%**%%**%%****++----;:::::::::::;;-----;:;-;-***%%%%%%%%%%%%%%%%%%%%%%\n*%********%***%%**%*****+~----;::::::::::::;;-;;;;::-~~+**%%%%%%%%%%%%%%%%%%%%%%\n%%***%%*%%****%%%%%%%***+-;--~;:::::::::::::;;;;;;;:-~~+**%%%%%%%%%%%%%%%%%%%%%*",
    
    "................................................................................\n................................................................................\n................................................................................\n................................................................................\n................................................................................\n................................................................................\n................................................................................\n................................................................................\n.........,;-~~~~-;:,........................................,:;-~~~~-:,.........\n.......:*0*-;::,:-*%*-,..................................:~*%+-:,::;~*0~,.......\n......;#%:.....-%#####0~,..............................:*#####0*:.....;#%,......\n......%#:.....+*:;######0-...........................,+######0::%;.....-#~......\n......%#,....,#0+*%#######~.........................,*######0*++#*.....-#~......\n......-#~.....+###*######~~~.......................,*;%#####%*###-....,%#:......\n.......~#~....,~0######0~.,%:......................~+.,+#######%;....,*#;.......\n........-0%;....,;-~~-:,...+~......................%;...,;-~~-:....,-0%:........\n.........,-%%~;,..........,0+......................0+,.........,:-+%*;..........\n............:-+**++~~--~+*%*,......................;%%+~~--~~+***+-,............\n................,:;-----;:,..........................:;-----;;:,................\n................................................................................\n................................................................................\n................................................................................\n................................................................................\n................................................................................\n................................................................................\n................................................................................\n................................................................................\n................................................................................",
 
    "*******************************************************+*%**********************\n*************************%%%%*****************%%*+****+%#***********************\n**********************%%%******%***************%00**+*0#%+**********************\n*********************00****************%%%0****+*0##%##0++**********************\n*********************#*+***********%%%***00*****+*0####00%%*********************\n*********************%0**********%0%**%%%******%0######00000%%******************\n***********************%%%******0#%**********%0%%**+%#0+++********%%%%%%%*******\n**************%%%%************%##**************+*****#0+*****%%%*********%%*****\n******%%**********%0%*******+*##********************+%0+***%0%**********+*0*****\n****%%**************0%******%##*************%***+*****%***%#*+***%%******%%*****\n***0%+*************+0#+*%%*%##*+**%%%%*******0**%%********#%+***+%%****%%%******\n***0***************%0*%0**0#0**%%%*********+%#%%#%********#0********************\n***0************%%%%*+0*%##%%0%************00%%%********%%%0%**%0***************\n****0*************++**0##000%*+******%%*%%#0%%%%*****%%***+**%******************\n*****%%************%00%%0#0*********%0%*%#0%*+*%%**00*+***%%***%%***************\n**************%00%##0**#0**0%********+*00%*+**%***00**%%%****%%*0%***0%*********\n*************0#%*0#%*0#0**%0#%++*00**0#0**%0*%%+*##0%%***+*%%**%%*****0%********\n***********+%#%%0#%%##%+**000*%0#0%%###*%#0%*%%*%#0**+***%0**%********0*********\n*******************##%+***##%%%#0*%##*#%0#%%**%###0*****%0***********0%*********\n*****************+0#0+****%%*****%##**#******0#%*##%*****%+********%%***********\n******************##*****%******000**0%*****##*+**0#%%***%******%%%*************\n******************##*********+%#0%%%%******##*****%%%0%%%%0%*%%%****************\n******************%#%+*******0#%00%*******##*****%**+*****0%********************\n********************0%******##%0%*********#0+***%********%%*********************\n**************************0#%*%***********#0+**********%%***********************\n*************************0#**%*************0%********%%*************************\n************************%#%%%****************%%*********************************\n*************************%%*****************************************************",
    
    "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n~~~~~~~~~~~~~~~-~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n~~~~~~~~~~~~~~~~-----------~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n~~~~~~~~~~~~-;;::::::::::::::;;--~~~~~~~~~~~~~--;;;;;;;;;;;;;----~~~~~~~~~~~~~~~\n~--~~~~~~-;:::::::,,,,,,,,,::::;;:;--~~~~~-;:,,:,,,:::::,,,::::::::;;-~~~~~~~~~~\n----~~-;::::::::::::::::,:,:::;-;::;--~~~;:::;;;:::::::::::::::::::::::;~~~~~~~~\n---~~-;::;;;;;;---~++++++~~--;;;;;::;;--:::::;;;;;;:,:--------;;;::;;;:::;~~~~~~\n-~+*+;:::::::;;-~~---;;;;;;--;;:;;;;:::::::::::;;;-;:,:~~~~~~~+++~-;;;;;,:;~~~~~\n~++++;;;;:::::::,,,,,,,,,,:;;;;;;;;;;::::::::::;;;-~;,,:;--------~++~-;:::;++---\n-~+++~-;;;;;;;;;;;:;;;;;;;------~~~-;;----;-----~+~+~;:,,:;;--------;::::;-**~--\n----~~~~~~~~~~~~~~~~+++++******~**%00%+*%**+-;,:;+00%*~;::::::::,,,,,::;-~*+~-~~\n-----------~~~~~~~~--------~~~~---~~+~-0#%-;;::::;*%*++++~----------~~~+~~~--~~~\n--------------------------------------+~+~-:::::;;++-------~~~~~~~~~~~------~~~~\n------------------------~-----;;;;;;:::::,,::::;-+*+----------------------------\n---------------------~--;;::::::::::::::::;;;-~+++~--------------------------~--\n-------------------~-;;:::;;;;-;;;;;---~~~+++~~---------------------------------\n--------------------,,,,--:;-~~+++*+++~~~------------------------------------~~-\n----------------~++-::::~+*%%%%**+-----------------------------------------~----\n-------------~+++++++~~*0%**+++~-;;--------------------------------------~~~~~~~\n------------+++++++~~-~***++~~-;-------------------------------------------~----\n-------------~~~~~--------------------------------------------------------------\n--------------------------------------------------------------------------------\n--------------------------------------------------------------------------------\n--------------------------------------------------------------------------------",

    "................................................................................\n................................................................................\n........:~+~,....:~+--++;.....,-+~;~+--+~:.....,-+~;~~,.,~~,.....;~;..;+-.......\n.........*#+......0#-,##:......~#*.%#-;#0,......;#0,~#-.-#~......:0%..%0:.......\n.........~#~......%#;,0#,......~#+.*#-:#%.......:#%..+0:0+........:#--#:........\n.........~#+......%#:.0#,......~#~.+#-:#0.......:#%..,*0*,.........-00-.........\n........,+%+,....:*%-;*%;.....,+%+;+%~-%*:.....,-%*:..,*:...........~+..........\n.....................,............,.............................................\n................................................................................\n................................................................................\n................................................................................\n............:~-..:~-;~~;....-+;..-+;-+~-++;.....;+-..;+-;++-++-~++:.............\n............,*#,.+#;:##,....:0%.,00,-#%,0#:.....,%#,.*#::#0,%#--#%..............\n.............,%+:#-.:#0,.....:#-~#:.-#+.0#:......,%+;#;.:#%.*#;:#%..............\n..............:00+..:#0.......-00;..-#+.%#:.......:0#-..;#%.*#-:#%..............\n...............-*...-%%;.......+~..,~%+-*%-........-+...-**-+*~~%*:.............\n....................,..,...............,........................................\n................................................................................\n................................................................................\n................................................................................\n.....:+*~:~*-..~*;.....,-*~..-*~,......:-;..,--:;--:...,~*;..+*-:+*~;**;........\n......+#+.,+#~+0~,......,-0*~0+,.......:+#-:%0;,-#%,....,+0~*0-..%#;,0#:........\n......+#~...*##-..........~##+...........-##%,..;#*.......*##-...%#:.0#:........\n......~#+.;%0-*#~,......:*0~+#+,........,*#*0+,.-#+.....,*#~~#+,.%#:.0#:........\n.....,~*~;+*:.,+*;.....,+*-..~*-.......:%0;.;0%;~0*,...,~*~..-*~;+*-;+*-........\n.......................................,,,...,,,,,,,............................\n................................................................................\n................................................................................"
];

const transitionDuration = 1000; // Duration for the entire transition in milliseconds
const steps = 50; // Number of steps for the fading effect

function blendAscii(currentAscii, nextAscii, blendFactor) {
    const blendedAscii = [];
    const lines = currentAscii.split("\n");

    for (let i = 0; i < lines.length; i++) {
        const currentLine = lines[i];
        const nextLine = nextAscii.split("\n")[i];

        for (let j = 0; j < currentLine.length; j++) {
            const currentChar = currentLine[j];
            const nextChar = nextLine[j];

            if (currentChar === "\n") {
                blendedAscii.push("\n");
                continue;
            }

            const currentIndex = ASCII_CHARS.indexOf(currentChar);
            const nextIndex = ASCII_CHARS.indexOf(nextChar);
            const blendedIndex = Math.round(currentIndex + (nextIndex - currentIndex) * blendFactor);
            const blendedChar = ASCII_CHARS[blendedIndex];

            blendedAscii.push(blendedChar);
        }
        blendedAscii.push("\n");
    }

    return blendedAscii.join("");
}

async function transitionCycle() {
    let currentAsciiIndex = 0;

    while (true) {
        const nextAsciiIndex = (currentAsciiIndex + 1) % asciiImages.length;
        const currentAscii = asciiImages[currentAsciiIndex];
        const nextAscii = asciiImages[nextAsciiIndex];

        for (let step = 1; step <= steps; step++) {
            const blendFactor = step / steps;
            const blendedAscii = blendAscii(currentAscii, nextAscii, blendFactor);
            asciiContainer.innerText = blendedAscii;

            await new Promise(resolve => setTimeout(resolve, transitionDuration / steps));
        }

        // Pause for 5 seconds
        await new Promise(resolve => setTimeout(resolve, 3000));

        // Move to the next image
        currentAsciiIndex = nextAsciiIndex;
    }
}

// Start the transition cycle
transitionCycle();



var slideIndex = 1;
showSlides(slideIndex);

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var thumbnails = document.getElementsByClassName("thumbnail");

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (i = 0; i < thumbnails.length; i++) {
    thumbnails[i].classList.remove("active");
    thumbnails[i].style.color = "rgb(159, 159, 159)"; // Reset color for all thumbnails
  }

  slides[slideIndex - 1].style.display = "block";
  thumbnails[slideIndex - 1].classList.add("active"); // Add the "active" class to the current thumbnail
  thumbnails[slideIndex - 1].style.color = "rgb(130, 107, 53)"; // Change the text color for the active thumbnail
}

// Automatic slideshow
var slideInterval = setInterval(function () {
  plusSlides(1);
}, 6000);

// Pause slideshow when mouse is over thumbnails
var thumbnailContainer = document.querySelector('.thumbnail-container');

thumbnailContainer.addEventListener('mouseenter', function () {
  clearInterval(slideInterval);
});

thumbnailContainer.addEventListener('mouseleave', function () {
  slideInterval = setInterval(function () {
    plusSlides(1);
  }, 6000);
});

// Function to update thumbnail color
function updateThumbnailColor(index) {
  var thumbnails = document.getElementsByClassName("thumbnail");

  for (var i = 0; i < thumbnails.length; i++) {
    thumbnails[i].style.color = "rgb(159, 159, 159)"; // Reset color for all thumbnails
  }

  thumbnails[index - 1].style.color = "rgb(130, 107, 53)"; // Change the text color to red for the active thumbnail
}
