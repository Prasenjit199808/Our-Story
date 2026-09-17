document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       ELEMENTS
    ====================================================== */

    const birthday = document.getElementById("birthday");
    const memoriesIntro = document.getElementById("memoriesIntro");
    const gallery = document.getElementById("gallery");
    const wishes = document.getElementById("wishes");
    const cake = document.getElementById("cake");
    const finalScene = document.getElementById("final");
    const sketchReveal =
          document.getElementById("sketchReveal");

    const finalMessage =
         document.getElementById("finalMessage");

    const openButton = document.getElementById("openButton");
    const continueButton = document.getElementById("continueButton");
    const memoriesButton = document.getElementById("memoriesButton");
    const galleryButton = document.getElementById("galleryButton");
    const wishesButton = document.getElementById("wishesButton");
    const finalButton = document.getElementById("finalButton");
    const restartButton = document.getElementById("restartButton");

    const musicButton = document.getElementById("musicButton");
    const musicText = document.querySelector(".music-text");
    const birthdayMusic = document.getElementById("birthdayMusic");

    const candleInstruction =
        document.getElementById("candleInstruction");

    const confettiContainer =
        document.getElementById("confettiContainer");


    /* =====================================================
       MUSIC
    ====================================================== */

    let musicPlaying = false;

    if (birthdayMusic) {

        birthdayMusic.src =
            "music/MOHIT_CHAUHAN_-_TUM_SE_HI_FILM_JAB_WE_MET_(mp3.pm).mp3";

        birthdayMusic.loop = true;
        birthdayMusic.volume = 0.45;

    }


    function updateMusicButton() {

        if (!musicText) return;

        musicText.textContent =
            musicPlaying ? "Pause" : "Music";

    }


    function startMusic() {

        if (!birthdayMusic) return;

        birthdayMusic.play()
            .then(() => {

                musicPlaying = true;

                updateMusicButton();

            })
            .catch((error) => {

                console.log(
                    "Music could not start:",
                    error
                );

            });

    }


    function toggleMusic() {

        if (!birthdayMusic) return;


        if (birthdayMusic.paused) {

            birthdayMusic.play()
                .then(() => {

                    musicPlaying = true;

                    updateMusicButton();

                })
                .catch((error) => {

                    console.log(
                        "Music could not play:",
                        error
                    );

                });

        } else {

            birthdayMusic.pause();

            musicPlaying = false;

            updateMusicButton();

        }

    }


    if (musicButton) {

        musicButton.addEventListener(
            "click",
            toggleMusic
        );

    }


    /* =====================================================
       SMOOTH SCROLL
    ====================================================== */

    function goToScene(scene) {

        if (!scene) return;

        scene.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    }


    /* =====================================================
       MAIN NAVIGATION
    ====================================================== */

    if (openButton) {

        openButton.addEventListener(
            "click",
            () => {

                goToScene(birthday);

                startMusic();

            }
        );

    }


    if (continueButton) {

        continueButton.addEventListener(
            "click",
            () => {

                goToScene(memoriesIntro);

            }
        );

    }


    if (memoriesButton) {

        memoriesButton.addEventListener(
            "click",
            () => {

                goToScene(gallery);

            }
        );

    }


    if (galleryButton) {

        galleryButton.addEventListener(
            "click",
            () => {

                goToScene(wishes);

            }
        );

    }


    if (wishesButton) {

        wishesButton.addEventListener(
            "click",
            () => {

                goToScene(cake);

            }
        );

    }


    /* =====================================================
       WISH CARDS
    ====================================================== */

    const wishCards =
        document.querySelectorAll(".wish-card");


    wishCards.forEach((card) => {

        card.addEventListener(
            "click",
            () => {

                const wasOpen =
                    card.classList.contains(
                        "is-open"
                    );


                wishCards.forEach(
                    (otherCard) => {

                        otherCard.classList.remove(
                            "is-open"
                        );

                    }
                );


                if (!wasOpen) {

                    card.classList.add(
                        "is-open"
                    );

                    createSmallSparkles(card);

                }

            }
        );

    });


    /* =====================================================
       CANDLES — ENHANCED INTERACTIVE SYSTEM
    ====================================================== */

    const candles =
        document.querySelectorAll(".candle");

    const cakeContainer =
        document.getElementById("cakeContainer");


    let candlesRemaining =
        candles.length;


    /* -----------------------------------------------------
       PREPARE CANDLES
    ----------------------------------------------------- */

    function prepareCandles() {

        candles.forEach((candle, index) => {

            /* ---------------------------------------------
               Add subtle random wax drips
            --------------------------------------------- */

            const drip =
                document.createElement("span");

            drip.className =
                "candle-wax-drip";

            drip.style.left =
                `${25 + Math.random() * 50}%`;

            drip.style.setProperty(
                "--drip-height",
                `${5 + Math.random() * 10}px`
            );

            drip.style.animationDelay =
                `${Math.random() * 2}s`;

            candle.appendChild(drip);


            /* ---------------------------------------------
               Individual flame timing
            --------------------------------------------- */

            const flame =
                candle.querySelector(".flame");

            if (flame) {

                flame.style.animationDelay =
                    `${Math.random() * -.6}s`;

            }


            /* ---------------------------------------------
               Accessibility
            --------------------------------------------- */

            candle.setAttribute(
                "aria-label",
                `Blow out candle ${index + 1}`
            );

        });

    }


    prepareCandles();


    /* -----------------------------------------------------
       CREATE SMOKE
    ----------------------------------------------------- */

    function createCandleSmoke(candle) {

        const smoke =
            document.createElement("span");

        smoke.className =
            "candle-smoke";

        candle.appendChild(
            smoke
        );


        /*
         * Small delay makes the flame disappear
         * before the smoke begins.
         */

        requestAnimationFrame(() => {

            smoke.classList.add(
                "active"
            );

        });


        setTimeout(
            () => {

                smoke.remove();

            },
            1900
        );

    }


    /* -----------------------------------------------------
       CREATE SPARKS
    ----------------------------------------------------- */

    function createCandleSparks(candle) {

        for (
            let i = 0;
            i < 5;
            i++
        ) {

            const spark =
                document.createElement("span");

            spark.className =
                "candle-spark";


            spark.style.left =
                "50%";

            spark.style.top =
                "-18px";


            candle.appendChild(
                spark
            );


            const angle =
                (
                    Math.PI * 2 * i
                ) / 5;


            const distance =
                12 +
                Math.random() * 18;


            const x =
                Math.cos(angle) *
                distance;


            const y =
                Math.sin(angle) *
                distance -
                10;


            if (
                typeof gsap !== "undefined"
            ) {

                gsap.fromTo(
                    spark,
                    {
                        x: 0,
                        y: 0,
                        opacity: 1,
                        scale: .5
                    },
                    {
                        x,
                        y,
                        opacity: 0,
                        scale: 1.4,
                        duration:
                            .45 +
                            Math.random() * .25,
                        ease:
                            "power2.out",
                        onComplete: () => {

                            spark.remove();

                        }
                    }
                );

            } else {

                spark.remove();

            }

        }

    }


    /* -----------------------------------------------------
       EXTINGUISH CANDLE
    ----------------------------------------------------- */

    function extinguishCandle(candle) {

        if (
            candle.classList.contains("is-out") ||
            candle.classList.contains("is-extinguishing")
        ) {

            return;

        }

        candle.classList.add("is-extinguishing");


        /* ---------------------------------------------
           Flame reaction
        --------------------------------------------- */

        candle.classList.add(
            "flame-wind"
        );


        /* ---------------------------------------------
           Small shake
        --------------------------------------------- */

        if (
            typeof gsap !== "undefined"
        ) {

            gsap.fromTo(
                candle,
                {
                    rotation: 0,
                    scale: 1
                },
                {
                    rotation:
                        Math.random() > .5
                            ? -4
                            : 4,

                    scale: .94,

                    duration: .12,

                    yoyo: true,

                    repeat: 1,

                    ease:
                        "power2.out",

                    onComplete: () => {

                        candle.classList.remove(
                            "flame-wind"
                        );

                    }
                }
            );

        } else {

            candle.classList.remove(
                "flame-wind"
            );

        }


        /* ---------------------------------------------
           Sparks
        --------------------------------------------- */

        createCandleSparks(
            candle
        );


        /* ---------------------------------------------
           Smoke
        --------------------------------------------- */

        setTimeout(
            () => {

                createCandleSmoke(
                    candle
                );

            },
            180
        );


        /* ---------------------------------------------
           Extinguish
        --------------------------------------------- */

        setTimeout(
            () => {

                candle.classList.add("is-out");
                candle.classList.remove("is-extinguishing");

            },
            120
        );


        candlesRemaining--;


        updateCandleMessage();


        /* ---------------------------------------------
           Remaining candle reaction
        --------------------------------------------- */

        candles.forEach(
            remainingCandle => {

                if (
                    !remainingCandle.classList.contains(
                        "is-out"
                    )
                ) {

                    if (
                        typeof gsap !== "undefined"
                    ) {

                        gsap.to(
                            remainingCandle,
                            {
                                scale: 1.035,
                                duration: .18,
                                yoyo: true,
                                repeat: 1,
                                ease:
                                    "sine.inOut"
                            }
                        );

                    }

                }

            }
        );


        /* ---------------------------------------------
           FINAL CANDLE
        --------------------------------------------- */

        if (
            candlesRemaining === 0
        ) {

            setTimeout(
                () => {

                    birthdayWishComplete();

                },
                550
            );

        }

    }


    /* -----------------------------------------------------
       CANDLE CLICK
    ----------------------------------------------------- */

    candles.forEach(
        candle => {

            candle.addEventListener(
                "click",
                () => {

                    extinguishCandle(
                        candle
                    );

                }
            );

        }
    );


    /* -----------------------------------------------------
       FLAME REACTS TO POINTER
    ----------------------------------------------------- */

    if (cakeContainer) {

        cakeContainer.addEventListener(
            "pointermove",
            event => {

                const rect =
                    cakeContainer.getBoundingClientRect();


                candles.forEach(
                    candle => {

                        if (
                            candle.classList.contains(
                                "is-out"
                            )
                        ) {
                            return;
                        }


                        const candleRect =
                            candle.getBoundingClientRect();


                        const center =
                            candleRect.left +
                            candleRect.width / 2;


                        const distance =
                            Math.abs(
                                event.clientX -
                                center
                            );


                        /*
                         * Flame reacts when cursor
                         * comes close to it.
                         */

                        if (
                            distance < 55
                        ) {

                            candle.classList.add(
                                "flame-wind"
                            );

                        } else {

                            candle.classList.remove(
                                "flame-wind"
                            );

                        }

                    }
                );

            }
        );


        cakeContainer.addEventListener(
            "pointerleave",
            () => {

                candles.forEach(
                    candle => {

                        candle.classList.remove(
                            "flame-wind"
                        );

                    }
                );

            }
        );

    }


    /* =====================================================
       CANDLE MESSAGE
    ====================================================== */

    function updateCandleMessage() {

        if (!candleInstruction) {
            return;
        }


        if (
            candlesRemaining > 1
        ) {

            candleInstruction.textContent =
                `${candlesRemaining} candles left ✨`;

        }

        else if (
            candlesRemaining === 1
        ) {

            candleInstruction.textContent =
                "One last candle... ✨";

        }

        else {

            candleInstruction.textContent =
                "Make your wish. ♡";

        }

    }


    /* =====================================================
       ALL CANDLES OUT
    ====================================================== */

    function birthdayWishComplete() {

        if (cakeContainer) {

            cakeContainer.classList.add(
                "all-candles-out"
            );

        }


        /*
         * Bigger final sparkle burst.
         */

        setTimeout(
            () => {

                createSparkleBurst();

            },
            250
        );


        /*
         * Teddy celebrates only AFTER
         * all candles are out.
         */

        setTimeout(
            () => {

                const teddy =
                    document.querySelector(
                        ".cake-teddy"
                    );

                if (teddy) {

                    teddy.classList.add(
                        "teddy-celebrate"
                    );

                }

            },
            500
        );


        /*
         * Change message slightly later
         * so the smoke can be seen first.
         */

        setTimeout(
            () => {

                if (candleInstruction) {

                    candleInstruction.textContent =
                        "Wish made. ✨";

                }

            },
            750
        );


        /*
         * Reveal final button last.
         */

        if (finalButton) {

            finalButton.classList.remove(
                "hidden"
            );


            if (
                typeof gsap !== "undefined"
            ) {

                gsap.fromTo(
                    finalButton,
                    {
                        opacity: 0,
                        y: 22,
                        scale: .88
                    },
                    {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        duration: 1,
                        delay: .95,
                        ease:
                            "back.out(1.7)"
                    }
                );

            }

        }

    }

/* =====================================================
   PENCIL SKETCH → PHOTO → FINAL LETTER
===================================================== */

let sketchAnimationStarted = false;

/* =====================================================
   START SKETCH REVEAL
===================================================== */

function startSketchReveal() {

    const sketchReveal =
        document.getElementById(
            "sketchReveal"
        );

    const finalScene =
        document.getElementById(
            "final"
        );


    if (
        !sketchReveal ||
        !finalScene
    ) {

        console.warn(
            "Sketch or final scene not found."
        );

        return;

    }


    if (
        sketchAnimationStarted
    ) {

        return;

    }


    sketchAnimationStarted =
        true;


    /* =================================================
       KEEP FINAL LETTER HIDDEN
    ================================================= */

    finalScene.classList.remove(
        "sketch-finished"
    );

    finalScene.classList.add(
        "sketch-playing"
    );


    /* =================================================
       RESET SKETCH
    ================================================= */

    sketchReveal.classList.remove(
        "active",
        "drawing",
        "sketch-complete",
        "photo-reveal"
    );


    /* =================================================
       STEP 1 — SHOW SKETCH
    ================================================= */

    setTimeout(
        () => {

            sketchReveal.classList.add(
                "active"
            );

        },
        400
    );


    /* =================================================
       STEP 2 — START DRAWING
    ================================================= */

    setTimeout(
        () => {

            sketchReveal.classList.add(
                "drawing"
            );

        },
        1400
    );


    /* =================================================
       STEP 3 — DRAWING COMPLETE
    ================================================= */

    setTimeout(
        () => {

            sketchReveal.classList.remove(
                "drawing"
            );

            sketchReveal.classList.add(
                "sketch-complete"
            );

        },
        6900
    );


    /* =================================================
       STEP 4 — PHOTO REVEAL
    ================================================= */

    setTimeout(
        () => {

            sketchReveal.classList.add(
                "photo-reveal"
            );

        },
        7600
    );


    /* =================================================
       STEP 5 — PHOTO FINISHED
    ================================================= */

    setTimeout(
        () => {

            if (finalScene) {

                finalScene.classList.remove(
                    "sketch-playing"
                );

                finalScene.classList.add(
                    "sketch-finished"
                );

            }


            /* -----------------------------------------
               Tell effects.js:
               START FINAL LETTER NOW
            ----------------------------------------- */

            document.dispatchEvent(
                new CustomEvent(
                    "sketchRevealFinished"
                )
            );

        },
        12200
    );

}

/* =====================================================
   FINAL BUTTON
===================================================== */

if (finalButton) {

    finalButton.addEventListener(
        "click",
        () => {

            goToScene(finalScene);

            setTimeout(
                () => {
                    launchConfetti();
                },
                500
            );

            setTimeout(
                () => {
                    startSketchReveal();
                },
                1000
            );

        }
    );

}

    /* =====================================================
   RESTART
===================================================== */

if (restartButton) {

    restartButton.addEventListener(
        "click",
        () => {

            /* -----------------------------------------
               RESET SKETCH ANIMATION
            ----------------------------------------- */

            sketchAnimationStarted = false;


            if (sketchReveal) {

                sketchReveal.classList.remove(
                    "active",
                    "drawing",
                    "sketch-complete",
                    "photo-reveal"
                );

            }


            if (finalScene) {

                finalScene.classList.remove(
                    "sketch-playing",
                    "sketch-finished"
                );

            }


            /* -----------------------------------------
               TELL effects.js TO RESET
            ----------------------------------------- */

            document.dispatchEvent(
                new CustomEvent(
                    "birthdayExperienceRestart"
                )
            );


            /* -----------------------------------------
               RESET CANDLES
            ----------------------------------------- */

            candlesRemaining =
                candles.length;


            candles.forEach(
                (candle) => {

                    candle.classList.remove(
                        "is-out",
                        "is-extinguishing",
                        "flame-wind"
                    );


                    /* Reset GSAP / inline transforms */

                    if (
                        typeof gsap !== "undefined"
                    ) {

                        gsap.killTweensOf(
                            candle
                        );

                        gsap.set(
                            candle,
                            {
                                rotation: 0,
                                scale: 1,
                                opacity: 1,
                                clearProps: "transform"
                            }
                        );

                    }

                    else {

                        candle.style.transform =
                            "";

                        candle.style.opacity =
                            "";

                        candle.style.filter =
                            "";

                    }


                    /* Remove old smoke and sparks */

                    candle
                        .querySelectorAll(
                            ".candle-smoke, .candle-spark"
                        )
                        .forEach(
                            (element) => {

                                element.remove();

                            }
                        );

                }
            );


            /* -----------------------------------------
               RESET CAKE
            ----------------------------------------- */

            if (cakeContainer) {

                cakeContainer.classList.remove(
                    "all-candles-out"
                );

            }


            /* -----------------------------------------
               RESET TEDDY
            ----------------------------------------- */

            const teddy =
                document.querySelector(
                    ".cake-teddy"
                );


            if (teddy) {

                teddy.classList.remove(
                    "teddy-celebrate"
                );

            }


            /* -----------------------------------------
               RESET CANDLE MESSAGE
            ----------------------------------------- */

            if (candleInstruction) {

                candleInstruction.textContent =
                    "Tap the candles ✨";

            }


            /* -----------------------------------------
               HIDE FINAL BUTTON
            ----------------------------------------- */

            if (finalButton) {

                finalButton.classList.add(
                    "hidden"
                );


                if (
                    typeof gsap !== "undefined"
                ) {

                    gsap.killTweensOf(
                        finalButton
                    );

                    gsap.set(
                        finalButton,
                        {
                            opacity: 0,
                            y: 22,
                            scale: .88
                        }
                    );

                }

            }


            /* -----------------------------------------
               RESET WISH CARDS
            ----------------------------------------- */

            wishCards.forEach(
                (card) => {

                    card.classList.remove(
                        "is-open"
                    );

                }
            );


            /* -----------------------------------------
               RESET CONFETTI
            ----------------------------------------- */

            if (confettiContainer) {

                confettiContainer.innerHTML =
                    "";

            }


            /* -----------------------------------------
               RESET MUSIC
            ----------------------------------------- */

            if (birthdayMusic) {

                birthdayMusic.pause();

                birthdayMusic.currentTime =
                    0;

            }


            musicPlaying =
                false;


            updateMusicButton();


            /* -----------------------------------------
               GO BACK TO START
            ----------------------------------------- */

            window.scrollTo(
                {
                    top: 0,
                    behavior: "smooth"
                }
            );

        }
    );

}


    /* =====================================================
       CONFETTI
    ====================================================== */

    function launchConfetti() {

        if (!confettiContainer) return;


        confettiContainer.innerHTML =
            "";


        const colors = [
            "#f3a6c8",
            "#ffd2e5",
            "#e8c98f",
            "#a9d8f5",
            "#b7e4c7",
            "#d8b4fe",
            "#f7c59f"
        ];


        for (
            let i = 0;
            i < 120;
            i++
        ) {

            const piece =
                document.createElement(
                    "div"
                );


            piece.className =
                "confetti";


            piece.style.left =
                Math.random() * 100 +
                "%";


            piece.style.width =
                5 +
                Math.random() * 6 +
                "px";


            piece.style.height =
                7 +
                Math.random() * 9 +
                "px";


            piece.style.background =
                colors[
                    Math.floor(
                        Math.random() *
                        colors.length
                    )
                ];


            piece.style.animationDuration =
                3 +
                Math.random() * 4 +
                "s";


            piece.style.animationDelay =
                Math.random() * 1.5 +
                "s";


            piece.style.borderRadius =
                Math.random() > 0.5
                    ? "2px"
                    : "50%";


            confettiContainer.appendChild(
                piece
            );


            setTimeout(
                () => {

                    piece.remove();

                },
                8000
            );

        }

    }


    /* =====================================================
       SMALL SPARKLES
    ====================================================== */

    function createSmallSparkles(element) {

        const rect =
            element.getBoundingClientRect();


        for (
            let i = 0;
            i < 8;
            i++
        ) {

            const sparkle =
                document.createElement(
                    "span"
                );


            sparkle.textContent =
                "✦";


            sparkle.style.position =
                "fixed";


            sparkle.style.left =
                rect.left +
                rect.width / 2 +
                "px";


            sparkle.style.top =
                rect.top +
                rect.height / 2 +
                "px";


            sparkle.style.zIndex =
                "999";


            sparkle.style.pointerEvents =
                "none";


            sparkle.style.color =
                "#ffd2e5";


            sparkle.style.fontSize =
                "12px";


            document.body.appendChild(
                sparkle
            );


            const angle =
                (
                    Math.PI *
                    2 *
                    i
                ) / 8;


            const distance =
                35 +
                Math.random() * 30;


            const x =
                Math.cos(angle) *
                distance;


            const y =
                Math.sin(angle) *
                distance;


            if (
                typeof gsap !== "undefined"
            ) {

                gsap.to(
                    sparkle,
                    {
                        x: x,
                        y: y,
                        opacity: 0,
                        scale: 0.3,
                        duration: 0.8,
                        ease: "power2.out",
                        onComplete: () => {

                            sparkle.remove();

                        }
                    }
                );

            }

        }

    }


    /* =====================================================
       CAKE SPARKLES
    ====================================================== */

    function createSparkleBurst() {

        if (!cake) return;


        const rect =
            cake.getBoundingClientRect();


        for (
            let i = 0;
            i < 18;
            i++
        ) {

            const sparkle =
                document.createElement(
                    "span"
                );


            sparkle.textContent =
                Math.random() > 0.5
                    ? "✦"
                    : "•";


            sparkle.style.position =
                "fixed";


            sparkle.style.left =
                rect.left +
                rect.width / 2 +
                "px";


            sparkle.style.top =
                rect.top +
                rect.height / 2 +
                "px";


            sparkle.style.zIndex =
                "999";


            sparkle.style.pointerEvents =
                "none";


            sparkle.style.color =
                Math.random() > 0.5
                    ? "#ffd2e5"
                    : "#e8c98f";


            sparkle.style.fontSize =
                8 +
                Math.random() * 12 +
                "px";


            document.body.appendChild(
                sparkle
            );


            const angle =
                Math.random() *
                Math.PI *
                2;


            const distance =
                70 +
                Math.random() *
                130;


            const x =
                Math.cos(angle) *
                distance;


            const y =
                Math.sin(angle) *
                distance;


            if (
                typeof gsap !== "undefined"
            ) {

                gsap.fromTo(
                    sparkle,
                    {
                        opacity: 1,
                        scale: 0.5
                    },
                    {
                        x: x,
                        y: y,
                        opacity: 0,
                        scale: 1.5,
                        duration: 1,
                        ease: "power2.out",
                        onComplete: () => {

                            sparkle.remove();

                        }
                    }
                );

            }

        }

    }


    /* =====================================================
       INITIALIZE
    ====================================================== */

    updateCandleMessage();

    updateMusicButton();


    console.log(
        "Birthday website loaded successfully."
    );

});
