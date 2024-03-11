let url = "/login";
switch(url)
{
    case "/home":
        console.log("display home.html");
        break;

    case "/about":
    case "/services":  
        console.log("display about.html");
        break;

    case "/login":
        console.log("display login.html");
        break;

    default:
        console.log("display 404.html");    



}
