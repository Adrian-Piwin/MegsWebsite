// Loading dom
(function(window, document, undefined){

    // code that should be taken care of right away
    
    window.onload = init;
    
      function init(){

            var page = document.getElementById("page");
            var navbar = document.getElementById("navbar");

            var navbtns = document.getElementsByClassName("nav-option");
            var homebtn = navbtns[0];
            var aboutbtn = navbtns[1];
            var portfoliobtn = navbtns[2];
            var contactbtn = navbtns[3];

            var homepage = document.getElementById("homepage");
            var aboutmepage = document.getElementById("about");
            var portfoliopage = document.getElementById("portfolio");
            var contactpage = document.getElementById("contact");

            // Header for sticky
            var header = document.getElementById("header");
            var sticky = header.offsetTop;
            var stickynav = navbar.offsetTop;

            // Start on homepage
            aboutbtn.style.color = "black";
            contactbtn.style.color = "black";
            homebtn.style.color = "#ac0f16";
            portfoliobtn.style.color = "black";

            //setHeader();

            // Clicking on home nav sends to home
            function mytest() {
                changePage(homepage);
                changeBtnStyle(homebtn);
            }

            // Clicking on aboutme nav sends to about me
            aboutbtn.onclick = function(event) {
                changePage(aboutmepage);
                changeBtnStyle(aboutbtn);
            }

            // Clicking on portfolio nav sends to portfolio
            portfoliobtn.onclick = function(event) {
                changePage(portfoliopage);
                changeBtnStyle(portfoliobtn);
            }

            // Clicking on contact nav sends to contact
            contactbtn.onclick = function(event) {
                changePage(contactpage);
                changeBtnStyle(contactbtn);
            }

            // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
            function setHeader() {
                if (window.pageYOffset > sticky) {
                    header.classList.add("sticky");
                } else if (window.pageYOffset <= sticky){
                    header.classList.remove("sticky");
                }

                if (window.pageYOffset > stickynav - 74) {
                    navbar.classList.remove("sticky");
                    navbar.classList.add("stickynav");
                } else if (window.pageYOffset <= stickynav - 74){
                    navbar.classList.remove("stickynav");
                }
            }

            // Function to change display
            function changePage(page){
                aboutmepage.style.display = "none";
                contactpage.style.display = "none";
                homepage.style.display = "none";
                portfoliopage.style.display = "none";

                page.style.display = "flex";
            }

            // Function to change nav style for page your on
            function changeBtnStyle(btn){
                aboutbtn.style.color = "black";
                contactbtn.style.color = "black";
                homebtn.style.color = "black";
                portfoliobtn.style.color = "black";

                btn.style.color = "#ac0f16";
            }

            // When the user scrolls the page, execute setHeader 
            window.onscroll = function() {setHeader()};

            window.addEventListener('scroll', () => {
                document.documentElement.style.setProperty('--scroll-y', `${window.scrollY}px`);
            });

            homebtn.addEventListener("click", mytest, false);
        }

})(window, document, undefined);