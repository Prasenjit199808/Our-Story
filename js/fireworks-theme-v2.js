/* ============================================================
   OINDRILA BIRTHDAY — FINAL SCENE FIX v3
   Moon + brighter breathing moon + animated final message
   ============================================================ */

document.addEventListener("DOMContentLoaded", () => {
    "use strict";

    const finalScene = document.getElementById("final");

    if (!finalScene) return;


    /* ============================================================
       LOAD FONTS
       ============================================================ */

    if (!document.getElementById("oindrila-great-vibes-font")) {

        const font = document.createElement("link");

        font.id = "oindrila-great-vibes-font";
        font.rel = "stylesheet";

        font.href =
            "https://fonts.googleapis.com/css2?family=Great+Vibes&family=Cormorant+Garamond:wght@400;500;600&display=swap";

        document.head.appendChild(font);
    }


    /* ============================================================
       CSS
       ============================================================ */

    const style = document.createElement("style");

    style.id = "oindrila-final-v3-css";

    style.textContent = `

        /* ========================================================
           FINAL SCENE
        ======================================================== */

        #final.scene-final {

            position: relative !important;

            isolation: isolate !important;

            overflow: hidden !important;

            background:
                radial-gradient(
                    ellipse at 50% 40%,
                    rgba(100, 20, 65, .18) 0%,
                    rgba(20, 5, 18, .10) 40%,
                    transparent 70%
                ),
                linear-gradient(
                    180deg,
                    #010105 0%,
                    #050207 55%,
                    #020104 100%
                ) !important;
        }


        #final .final-content {

            position: relative !important;

            z-index: 40 !important;
        }




        /* ========================================================
           STARS
        ======================================================== */

        #oindrilaFinalStarsV3 {

           position: absolute !important;

           inset: 0 !important;

           width: 100% !important;
           height: 100% !important;

           z-index: 100 !important;

           pointer-events: none !important;

           overflow: visible !important;

           display: block !important;
        }


        .oindrila-v3-star {

            position: absolute !important;

            display: block !important;

            width: var(--star-size);
            height: var(--star-size);

            z-index: 31 !important;

            border-radius: 50%;

            background: #fffdf8;

            box-shadow:
               0 0 5px
             rgba(255,255,255,.75),

               0 0 12px
             rgba(255,225,235,.35);

            animation:
              oindrilaStarTwinkle
              var(--star-time)
              ease-in-out
              var(--star-delay)
              infinite alternate;

            will-change:
              opacity,
              transform;
    }


@keyframes oindrilaStarTwinkle {

    0% {

        opacity: .12;

        transform:
            scale(.45);
    }

    35% {

        opacity: .45;

        transform:
            scale(.8);
    }

    65% {

        opacity: 1;

        transform:
            scale(1.15);
    }

    100% {

        opacity: .18;

        transform:
            scale(.55);
    }
}
/* ========================================================
   LARGE BLINKING SPARKLE STARS
======================================================== */

.oindrila-v3-sparkle {

    position: absolute !important;
    
    display: block !important;
    width: 4px !important;
    height: 4px !important;

    z-index: 101 !important;

    pointer-events: none;

    background: #fffaf5;

    border-radius: 50%;

    opacity: .15;

    box-shadow:
        0 0 6px rgba(255,255,255,.9),
        0 0 18px rgba(255,220,230,.7);

    animation:
        oindrilaSparkleBlink
        var(--sparkle-time)
        ease-in-out
        var(--sparkle-delay)
        infinite;
}


/* Horizontal + vertical rays */

.oindrila-v3-sparkle::before,
.oindrila-v3-sparkle::after {

    content: "";

    position: absolute;

    left: 50%;
    top: 50%;

    transform:
        translate(-50%, -50%);

    background:
        linear-gradient(
            transparent,
            rgba(255,255,255,.95),
            transparent
        );
}


.oindrila-v3-sparkle::before {

    width: 1px;
    height: 24px;
}


.oindrila-v3-sparkle::after {

    width: 24px;
    height: 1px;
}


/* Blinking animation */

@keyframes oindrilaSparkleBlink {

    0% {

        opacity: .08;

        transform:
            scale(.35);
    }

    50% {

        opacity: 1;

        transform:
            scale(1.25);

        box-shadow:
            0 0 8px rgba(255,255,255,1),
            0 0 24px rgba(255,220,230,.9),
            0 0 45px rgba(255,200,220,.55);
    }

    100% {

        opacity: .1;

        transform:
            scale(.4);
    }

}



        /* ========================================================
           FIREWORKS
        ======================================================== */

        #oindrilaFinalFireworksV3 {

            position: absolute;

            inset: 0;

            width: 100%;
            height: 100%;

            z-index: 4;

            pointer-events: none;
        }



        /* ========================================================
           PINK PETALS
        ======================================================== */

        #oindrilaFinalPetalsV3 {

            position: absolute;

            inset: 0;

            z-index: 18;

            pointer-events: none;

            overflow: hidden;
        }


        .oindrila-v3-petal {

            position: absolute;

            top: -10%;

            width: 7px;
            height: 11px;

            border-radius:
                75% 25% 70% 30%;

            background:
                linear-gradient(
                    135deg,
                    #ffd1e1,
                    #ff4e91
                );

            box-shadow:
                0 0 10px
                rgba(255,75,145,.38);

            opacity: 0;

            animation:
                oindrilaPetalFall
                var(--petal-duration)
                linear
                var(--petal-delay)
                infinite;
        }


        @keyframes oindrilaPetalFall {

            0% {

                transform:
                    translate3d(0,-12vh,0)
                    rotate(0deg)
                    scale(var(--petal-scale));

                opacity: 0;
            }

            10% {

                opacity: .72;
            }

            50% {

                transform:
                    translate3d(
                        var(--petal-drift),
                        52vh,
                        0
                    )
                    rotate(190deg)
                    scale(var(--petal-scale));
            }

            92% {

                opacity: .42;
            }

            100% {

                transform:
                    translate3d(
                        calc(
                            var(--petal-drift) * -.4
                        ),
                        120vh,
                        0
                    )
                    rotate(360deg)
                    scale(var(--petal-scale));

                opacity: 0;
            }
        }




        /* ========================================================
           VIGNETTE
        ======================================================== */

        #oindrilaFinalVignetteV3 {

            position: absolute;

            inset: 0;

            z-index: 19;

            pointer-events: none;

            background:
                radial-gradient(
                    ellipse at center,
                    transparent 36%,
                    rgba(0,0,0,.12) 64%,
                    rgba(0,0,0,.58) 100%
                );
        }

        /* ========================================================
           MOON POSITION
           ======================================================== */

        #final .final-moon {

            position: absolute !important;

            top: 4vh !important;

            left: 50% !important;
            right: auto !important;

            width: 180px !important;
            height: 180px !important;

            transform: translateX(-50%) !important;

            z-index: 6 !important;

            pointer-events: none !important;
        }

        /* ========================================================
           MOBILE
        ======================================================== */

        @media (max-width: 700px) {
        

            #final .final-moon {

                top: 12vh !important;

                width: 78px !important;
                height: 78px !important;
            }


            .oindrila-v3-petal {

                width: 6px;
                height: 9px;
            }
        }



        /* ========================================================
           REDUCED MOTION
        ======================================================== */

        @media (prefers-reduced-motion: reduce) {

            #oindrilaFinalFireworksV3,
            #oindrilaFinalStarsV3,
            #oindrilaFinalPetalsV3 {

                display: none !important;
            }
        }

    `;

    document.head.appendChild(style);



    /* ============================================================
       CREATE STARS
       ============================================================ */

    const stars =
        document.createElement("div");

    stars.id =
        "oindrilaFinalStarsV3";

    stars.setAttribute(
        "aria-hidden",
        "true"
    );

    finalScene.appendChild(stars);


    const starCount =
        window.innerWidth < 700
            ? 55
            : 125;


    for (
        let i = 0;
        i < starCount;
        i++
    ) 
{

        const star =
            document.createElement("span");

        star.className =
            "oindrila-v3-star";

        star.style.left =
            `${Math.random() * 100}%`;

        star.style.top =
            `${Math.random() * 92}%`;
        star.style.setProperty(
            "--star-size",
            `${0.8 + Math.random() * 2.2}px`
       );    

        star.style.setProperty(
            "--star-time",
            `${2.5 + Math.random() * 5}s`
        );

        star.style.setProperty(
            "--star-delay",
            `${-Math.random() * 8}s`
        );

        stars.appendChild(star);
    }
    /* ============================================================
   CREATE LARGE SPARKLE STARS
============================================================ */

const sparkleCount =
    window.innerWidth < 700
        ? 6
        : 14;


for (
    let i = 0;
    i < sparkleCount;
    i++
) {

    const sparkle =
        document.createElement("span");

    sparkle.className =
        "oindrila-v3-sparkle";


    sparkle.style.left =
        `${6 + Math.random() * 88}%`;


    sparkle.style.top =
        `${5 + Math.random() * 78}%`;


    sparkle.style.setProperty(
        "--sparkle-time",
        `${3.5 + Math.random() * 4}s`
    );


    sparkle.style.setProperty(
        "--sparkle-delay",
        `${-Math.random() * 7}s`
    );


    finalScene.appendChild(
        sparkle
    );
}



    /* ============================================================
       CREATE PETALS
       ============================================================ */

    const petals =
        document.createElement("div");

    petals.id =
        "oindrilaFinalPetalsV3";

    petals.setAttribute(
        "aria-hidden",
        "true"
    );

    finalScene.appendChild(petals);


    const petalCount =
        window.innerWidth < 700
            ? 13
            : 25;


    for (
        let i = 0;
        i < petalCount;
        i++
    ) {

        const petal =
            document.createElement("span");

        petal.className =
            "oindrila-v3-petal";

        petal.style.left =
            `${Math.random() * 100}%`;

        petal.style.setProperty(
            "--petal-drift",
            `${-150 + Math.random() * 300}px`
        );

        petal.style.setProperty(
            "--petal-duration",
            `${8 + Math.random() * 8}s`
        );

        petal.style.setProperty(
            "--petal-delay",
            `${-Math.random() * 14}s`
        );

        petal.style.setProperty(
            "--petal-scale",
            `${.55 + Math.random() * .65}`
        );

        petals.appendChild(petal);
    }



    /* ============================================================
       VIGNETTE
       ============================================================ */

    const vignette =
        document.createElement("div");

    vignette.id =
        "oindrilaFinalVignetteV3";

    vignette.setAttribute(
        "aria-hidden",
        "true"
    );

    finalScene.appendChild(vignette);



    /* ============================================================
       FIREWORK CANVAS
    ============================================================ */
       

    const canvas =
        document.createElement("canvas");

    canvas.id =
        "oindrilaFinalFireworksV3";

    canvas.setAttribute(
        "aria-hidden",
        "true"
    );

    finalScene.appendChild(canvas);


    const ctx =
        canvas.getContext("2d");


    let W = 1;
    let H = 1;
    let DPR = 1;


    const rockets = [];
    const sparks = [];


    const colors = [

        "#ff4d91",
        "#ff75ad",
        "#ffd66b",
        "#fff4b0",
        "#a8e8ff",
        "#c39cff",
        "#f48cff"

    ];


    const random = (min, max) =>
        min +
        Math.random() *
        (max - min);


    const pick = array =>
        array[
            Math.floor(
                Math.random() *
                array.length
            )
        ];



    /* ============================================================
       RESIZE
       ============================================================ */

    function resize() {

        const rect =
            finalScene.getBoundingClientRect();

        W =
            Math.max(
                1,
                rect.width
            );

        H =
            Math.max(
                1,
                rect.height
            );

        DPR =
            Math.min(
                window.devicePixelRatio || 1,
                2
            );


        canvas.width =
            Math.floor(W * DPR);

        canvas.height =
            Math.floor(H * DPR);


        canvas.style.width =
            `${W}px`;

        canvas.style.height =
            `${H}px`;


        ctx.setTransform(
            DPR,
            0,
            0,
            DPR,
            0,
            0
        );
    }


    resize();


    window.addEventListener(
        "resize",
        resize
    );



    /* ============================================================
       LAUNCH FIREWORK
       ============================================================ */

    function launch(
        x,
        targetY
    ) {

        rockets.push({

            x,

            y:
                H + 15,

            targetY,

            speed:
                random(6, 8.5),

            color:
                pick(colors),

            trail: []
        });
    }



    /* ============================================================
       FIREWORK BURST
       ============================================================ */

    function burst(
        x,
        y,
        color
    ) {

        const amount =
            window.innerWidth < 700
                ? 42
                : 68;


        for (
            let i = 0;
            i < amount;
            i++
        ) {

            const angle =
                Math.PI * 2 * i / amount +
                random(-.07, .07);


            const speed =
                random(1.4, 5.2);


            sparks.push({

                x,
                y,

                vx:
                    Math.cos(angle) *
                    speed,

                vy:
                    Math.sin(angle) *
                    speed,

                gravity:
                    random(.012, .038),

                friction:
                    .985,

                life:
                    1,

                decay:
                    random(.012, .021),

                size:
                    random(1, 2.4),

                color
            });
        }


        /*
         * Small white sparks
         */

        for (
            let i = 0;
            i < 13;
            i++
        ) {

            const angle =
                random(
                    0,
                    Math.PI * 2
                );

            const speed =
                random(.7, 2.5);


            sparks.push({

                x,
                y,

                vx:
                    Math.cos(angle) *
                    speed,

                vy:
                    Math.sin(angle) *
                    speed,

                gravity:
                    .01,

                friction:
                    .99,

                life:
                    1,

                decay:
                    random(.025, .042),

                size:
                    random(.5, 1.4),

                color:
                    "#ffffff"
            });
        }
    }



    /* ============================================================
       UPDATE FIREWORKS
       ============================================================ */

    function update() {

        for (
            let i = rockets.length - 1;
            i >= 0;
            i--
        ) {

            const r =
                rockets[i];


            r.trail.push({

                x: r.x,
                y: r.y

            });


            if (
                r.trail.length > 9
            ) {

                r.trail.shift();
            }


            r.y -= r.speed;

            r.speed *= .988;


            if (
                r.y <= r.targetY
            ) {

                burst(
                    r.x,
                    r.y,
                    r.color
                );


                rockets.splice(
                    i,
                    1
                );
            }
        }


        for (
            let i = sparks.length - 1;
            i >= 0;
            i--
        ) {

            const p =
                sparks[i];


            p.x += p.vx;
            p.y += p.vy;


            p.vx *= p.friction;
            p.vy *= p.friction;


            p.vy += p.gravity;


            p.life -= p.decay;


            if (
                p.life <= 0
            ) {

                sparks.splice(
                    i,
                    1
                );
            }
        }
    }



    /* ============================================================
       DRAW FIREWORKS
       ============================================================ */

    function draw() {

        ctx.clearRect(
            0,
            0,
            W,
            H
        );


        /*
         * Rocket trails
         */

        rockets.forEach(r => {

            if (
                r.trail.length < 2
            ) return;


            ctx.beginPath();


            r.trail.forEach(
                (point, index) => {

                    if (
                        index === 0
                    ) {

                        ctx.moveTo(
                            point.x,
                            point.y
                        );

                    } else {

                        ctx.lineTo(
                            point.x,
                            point.y
                        );
                    }
                }
            );


            ctx.strokeStyle =
                r.color;

            ctx.globalAlpha =
                .35;

            ctx.lineWidth =
                1.3;

            ctx.stroke();


            ctx.globalAlpha =
                1;
        });


        /*
         * Sparks
         */

        sparks.forEach(p => {

            ctx.save();


            ctx.globalAlpha =
                Math.max(
                    0,
                    p.life
                );


            ctx.fillStyle =
                p.color;

            ctx.shadowColor =
                p.color;

            ctx.shadowBlur =
                9;


            ctx.beginPath();


            ctx.arc(
                p.x,
                p.y,
                p.size,
                0,
                Math.PI * 2
            );


            ctx.fill();


            ctx.restore();
        });
    }



    /* ============================================================
       FIREWORK LOOP
       ============================================================ */

    let lastLaunch = 0;

    let nextLaunch = 900;


    function animationLoop(now) {

        if (
            now - lastLaunch >
            nextLaunch
        ) {

            const left =
                Math.random() < .5;


            const x =
                left

                    ? random(
                        W * .08,
                        W * .38
                    )

                    : random(
                        W * .62,
                        W * .92
                    );


            const targetY =
                random(
                    H * .06,
                    H * .34
                );


            launch(
                x,
                targetY
            );


            lastLaunch =
                now;


            nextLaunch =
                random(
                    850,
                    1500
                );
        }


        update();

        draw();


        requestAnimationFrame(
            animationLoop
        );
    }


    requestAnimationFrame(
        animationLoop
    );



    /* ============================================================
       INITIAL FIREWORKS
       ============================================================ */

    setTimeout(
        () =>
            launch(
                W * .16,
                H * .22
            ),
        550
    );


    setTimeout(
        () =>
            launch(
                W * .84,
                H * .18
            ),
        950
    );


    setTimeout(
        () =>
            launch(
                W * .70,
                H * .30
            ),
        1500
    );


    setTimeout(
        () =>
            launch(
                W * .30,
                H * .14
            ),
        2050
    );

});

