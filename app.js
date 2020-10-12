class Controler {

    initButton() {

        let button = document.getElementById("change")
        button.addEventListener("click", () => {
            let frame = document.getElementById("frame")
            frame.src = "https://www.google.com/webhp?igu=1";
        });

        let addCookie = document.getElementById("addCookie")
        addCookie.addEventListener("click", () => {
            this.setCookie("user", "John", 5);
        });
        let viewCookie = document.getElementById("viewCookie")
        viewCookie.addEventListener("click", () => {
            alert(document.cookie);
        });
    }

    setCookie(cname, cvalue, exdays) {
        var d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        var expires = "expires=" + d.toGMTString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }
}




const controler1 = new Controler()
controler1.initButton();


//sau varianta a 2 a
localStorage.setItem('cookie_eating', "ramona");
localStorage.removeItem("cookie_eating")
sessionStorage.setItem("cookie_eating", "norbi");
sessionStorage.setItem("cookie_eating", "ramona");

document.cookie = "cookie_eating=andrei;expires=" + new Date(2021, 10, 05, 1, 5, 60, 34).toUTCString()
console.log(document.cookie)


//varianta 3
Cookies.set("running", "true", { expires: 5 });
var myCookie = Cookies.get("running");
console.log(myCookie);

document.cookie