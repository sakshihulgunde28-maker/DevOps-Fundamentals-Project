/* =====================================================
   DEVOPS LEARNING DASHBOARD
   JAVASCRIPT
===================================================== */


/* =====================================================
   SMOOTH SCROLLING
===================================================== */


document.querySelectorAll('.sidebar a').forEach(link => {

    link.addEventListener('click', function (e) {

        const target = document.querySelector(
            this.getAttribute('href')
        );

        if (target) {

            e.preventDefault();

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});





/* =====================================================
   ACTIVE SIDEBAR MENU
===================================================== */


const sections = document.querySelectorAll("section");

const menuLinks = document.querySelectorAll(
    ".sidebar a"
);



window.addEventListener("scroll", () => {


    let current = "";


    sections.forEach(section => {


        const sectionTop =
            section.offsetTop - 150;


        if (scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }


    });



    menuLinks.forEach(link => {


        link.classList.remove("active");


        if (link.getAttribute("href")
            === "#" + current) {


            link.classList.add("active");


        }


    });



});





/* =====================================================
   THEME BUTTON
===================================================== */


const themeBtn =
    document.querySelector(".theme-btn");



if (themeBtn) {


    themeBtn.addEventListener("click", () => {


        document.body.classList.toggle(
            "light-mode"
        );


    });


}





/* =====================================================
   MONITORING ANIMATION
===================================================== */


const progressBars =
    document.querySelectorAll(".progress");



window.addEventListener(
    "load",
    () => {


        progressBars.forEach(bar => {


            bar.style.width = "0";


            setTimeout(() => {


                bar.style.width =
                    getComputedStyle(bar)
                        .getPropertyValue("--value");


            }, 500);



        });



    });





/* =====================================================
   CHART.JS CPU CHART
===================================================== */


if (document.getElementById("cpuChart")) {


    const cpuChart =
        document.getElementById("cpuChart");



    new Chart(cpuChart, {


        type: "line",


        data: {


            labels: [
                "10 AM",
                "11 AM",
                "12 PM",
                "1 PM",
                "2 PM",
                "3 PM"
            ],


            datasets: [{


                label: "CPU Usage %",


                data: [
                    20,
                    35,
                    30,
                    45,
                    38,
                    35
                ],


                borderWidth: 3,


                tension: 0.4


            }]


        },


        options: {


            responsive: true,


            plugins: {


                legend: {


                    labels: {


                        color: "#ffffff"


                    }


                }


            },


            scales: {


                x: {


                    ticks: {


                        color: "#94a3b8"


                    }


                },


                y: {


                    ticks: {


                        color: "#94a3b8"


                    }


                }


            }



        }



    });



}





/* =====================================================
   MEMORY CHART
===================================================== */


if (document.getElementById("memoryChart")) {


    const memoryChart =
        document.getElementById("memoryChart");



    new Chart(memoryChart, {


        type: "bar",


        data: {


            labels: [

                "10 AM",
                "11 AM",
                "12 PM",
                "1 PM",
                "2 PM",
                "3 PM"

            ],


            datasets: [{


                label: "Memory Usage %",


                data: [

                    45,
                    52,
                    58,
                    55,
                    60,
                    58

                ],


                borderWidth: 1


            }]


        },


        options: {


            responsive: true,


            plugins: {


                legend: {


                    labels: {


                        color: "#ffffff"


                    }

                }

            },


            scales: {


                x: {


                    ticks: {


                        color: "#94a3b8"


                    }


                },


                y: {


                    ticks: {


                        color: "#94a3b8"


                    }


                }


            }



        }



    });



}





/* =====================================================
   CARD REVEAL ANIMATION
===================================================== */


const cards =
    document.querySelectorAll(

        ".stat-card, .monitor-card, .skill-card, .module-card, .note-card, .resource-card"

    );



const observer =
    new IntersectionObserver(

        (entries) => {


            entries.forEach(entry => {


                if (entry.isIntersecting) {


                    entry.target.classList.add(
                        "show"
                    );


                }


            });


        },


        {

            threshold: 0.15

        }



    );



cards.forEach(card => {


    observer.observe(card);


});





/* =====================================================
   BUTTON EFFECT
===================================================== */


document.querySelectorAll("button")
    .forEach(button => {


        button.addEventListener(
            "click",
            () => {


                button.style.transform =
                    "scale(.95)";


                setTimeout(() => {


                    button.style.transform =
                        "";


                }, 150);



            });


    });





/* =====================================================
   CURRENT YEAR FOOTER
===================================================== */


const year =
    document.querySelector("#year");


if (year) {


    year.innerHTML =
        new Date().getFullYear();


}