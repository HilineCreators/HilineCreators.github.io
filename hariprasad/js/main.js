// Functions for each action-command.

function help(){
  return "<h2><span style=\"color:#eb926d;\">Help:</span></h2><table>\
  <tr>\
    <td>all</td>\
    <td>Give me the complete picture</td>\
  </tr>\
  <tr>\
    <td>about</td>\
    <td>Everything you ever wanted to know about me</td>\
  </tr>\
  <tr>\
    <td>contact</td>\
    <td>How to get in touch with me</td>\
  </tr>\
  <tr>\
    <td>links</td>\
    <td>See what links I want you to click on</td>\
  </tr>\
  <tr>\
    <td>skills</td>\
    <td>Get to know how good I am</td>\
  </tr>\
  <tr>\
    <td>cv</td>\
    <td>Download my resume</td>\
  </tr>\
  <tr>\
    <td>projects</td>\
    <td>Visit web page for more</td>\
  </tr></table>";
}

function contact(){
  return "<h2><span style=\"color:#cc6666;\">Contact:</span></h2><table>\
  <tr>\
    <td>Email</td>\
    <td><a href=\"mailto:hariprasad.ka@hotmail.com\">hariprasad.ka@hotmail.com</a></td>\
  </tr>\
  <tr>\
    <td>Telephone</td>\
    <td><a href=\"tel:+91-9745-262669\">+91-9745-262669</a></td>\
  </tr>\
  <tr>\
    <td>Address</td>\
    <td>Hariprasad</td>\
  </tr>\
  <tr>\
    <td> </td>\
    <td>Thrissur, Kerala</td>\
  </tr>\
  <tr>\
    <td> </td>\
    <td>680521</td>\
  </tr>\
  <tr>\
    <td> </td>\
    <td>India</td>\
  </tr></table>";
}

function skills(){
  return "<h2><span style=\"color:#81a2be;\">Skills:</span></h2><table>\
  <tr>\
    <td>Web Application Pentesting</td>\
    <td>▰▰▰▰▰▰▰▰▱▱ 80%</td>\
  </tr>\
  <tr>\
    <td>Network Pentesting</td>\
     <td>▰▰▰▰▰▰▱▱▱▱ 60%</td>\
  </tr>\
  <tr>\
    <td>Mobile Application Pentesting</td>\
    <td>▰▰▰▰▱▱▱▱▱▱ 40%</td>\
  </tr>\
  <tr>\
    <td>HTML</td>\
    <td>▰▰▰▰▰▰▱▱▱▱ 60%</td>\
  </tr></table>";
}

function about(){
  return "<p>CyberSecurity Enthusiast | \n Security is my career focus but it’s my hobby too, also having a background as a developer, specializing in web app security testing.</p>";
}

function cv(){
  return "<span style=\"color:#8abeb7;\"><h2>CV:</h2></span><p>\tDownload from <a href=\"https://drive.google.com/file/d/1FM2M5joEXHViR0debxAzhfMnXevPY5yQ/view?usp=sharing\" target=\"_blank\" style=\"text-decoration: underline;\">here</a>.</p>";
}

function credits(){
  return "<p>Built by <a href=\"https://www.github.com/CedArctic\" target=\"_blank\"><i class=\"fab fa-github\"></i> CedArctic</a></p>";
}

function links(){
  return "<span style=\"color: #b5bd68;\"><h2>Links:</h2></span><ul>\
  <li><a href=\"https://www.linkedin.com/in/hariprasad-ka\" target=\"_blank\"><i class=\"fab fa-linkedin\"></i> LinkedIn</a></li>\
  <li><a href=\"https://github.com/Hariprasad-ka\" target=\"_blank\"><i class=\"fab fa-github\"></i> Github</a></li>\
  <li><a href=\"https://twitter.com/hariprasad_ka\" target=\"_blank\"><i class=\"fab fa-twitter\"></i> Twitter</a></li>\
  <li><a href=\"https://www.facebook.com/Hariprasad.ka\" target=\"_blank\"><i class=\"fab fa-facebook\"></i> Facebook</a></li>\
  </ul>";
}

function projects(){
  return "<p>Visit my web page<br>\
    Read my blog and projects <br>\
    </p>";
}

// Main Function
function commandProcessor(e){

  //Check if the enter key is pressed
  if(e.keyCode == 13){

    //Clear the area where info will be printed
    document.getElementById('injected').innerHTML= "";

    //Get user input
    var txtInput = document.getElementById('txtBox').value;

    //Select what info to print according to command
    if(txtInput == "help"){
      document.getElementById('injected').innerHTML=help();
    }else if (txtInput=="all") {
      document.getElementById('injected').innerHTML=about() + "\n\n\n" + skills() + "\n\n\n" + links() + "\n\n\n" + contact() + "\n\n\n" + cv();
    }else if (txtInput == "about") {
      document.getElementById('injected').innerHTML=about();
    }else if (txtInput == "contact") {
      document.getElementById('injected').innerHTML=contact();
    }else if (txtInput == "cv") {
      document.getElementById('injected').innerHTML=cv();
    }else if (txtInput=="skills") {
      document.getElementById('injected').innerHTML=skills();
    }else if (txtInput=="links") {
      document.getElementById('injected').innerHTML=links();
    }else if (txtInput == "projects") {
      var win = window.open("https://www.hilinecreators.com", '_blank');
      win.focus();
      document.getElementById('injected').innerHTML=projects();
    }else if (txtInput == "credits") {
      document.getElementById('injected').innerHTML=credits();
    }else{
      document.getElementById('injected').innerHTML = help();
    }

    //Clear input text box
    document.getElementById('txtBox').value= "";
  }
}
