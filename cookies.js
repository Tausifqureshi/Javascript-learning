//  ChatGPT Se liya hua Syntax ---> JavaScript me cookies kaise kaam karti hain, isko detail se samjhana aur uska code provide karna samajh lete hain.

// Cookies Kya Hain?
// Cookies ek chhoti si data file hoti hain jo web server dwara web browser me store ki jati hain. Ye user-specific data store karne ke liye use hoti hain jaise ki login information, user preferences, etc.

// JavaScript Me Cookies Kaise Use Kare?
// 1. Cookie Set Karna (Create/Write a Cookie)
// JavaScript me cookie set karne ke liye document.cookie property ka use karte hain. Ek cookie set karne ka format kuch aisa hota hai:
document.cookie = "username=JohnDoe; expires=Fri, 31 Dec 2024 23:59:59 GMT; path=/";



// 2. Cookie Get Karna (Read a Cookie)
// Cookies ko read karne ke liye bhi document.cookie property ka use karte hain. Ye saari cookies ek single string me return karta hai, jahan cookies semicolon (;) se separated hoti hain.

// Ek specific cookie ko read karne ke liye, hame string ko parse karna padta hai:
function getCookie(name) {
    let cookieArr = document.cookie.split(";");
    for(let i = 0; i < cookieArr.length; i++) {
        let cookiePair = cookieArr[i].split("=");
        if(name == cookiePair[0].trim()) {
            return decodeURIComponent(cookiePair[1]);
        }
    }
    return null;
}



// 3. Cookie Delete Karna (Delete a Cookie)
// Cookie ko delete karne ka sabse aasan tarika ye hai ki uski expiration date ko past me set kar diya jaye:
document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";






































