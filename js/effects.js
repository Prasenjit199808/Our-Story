/* ============================================================
   OINDRILA BIRTHDAY WEBSITE
   effects.js
   CLEAN FIXED MASTER VERSION
   ============================================================ */

document.addEventListener("DOMContentLoaded", () => {

    "use strict";

    /* ============================================================
       BASIC SETTINGS
    ============================================================ */

    const reducedMotion =
        window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;

    const hasGSAP =
        typeof window.gsap !== "undefined";


    /* ============================================================
       DOM
    ============================================================ */

    const opening =
        document.getElementById("opening");

    const birthday =
        document.getElementById("birthday");

    const memoriesIntro =
        document.getElementById("memoriesIntro");

    const gallery =
        document.getElementById("gallery");

    const wishes =
        document.getElementById("wishes");

    const cake =
        document.getElementById("cake");

    const finalScene =
        document.getElementById("final");


    /* ============================================================
       PHOTO LIST
    ============================================================ */

    const photoFiles = [

        "photo (1).jpg",
        "photo (1).png",

        "photo (2).jpg",
        "photo (2).png",

        "photo (3).jpg",
        "photo (3).png",

        "photo (4).jpg",
        "photo (4).png",

        "photo (5).jpg",
        "photo (5).png",

        "photo (6).jpg",
        "photo (6).png",
        "photo (7).jpg",   
        "photo (7).png",
        "photo (8).jpg",
        "photo (8).png",
        "photo (9).png",
        "photo (10).png",

        "photo (11).png",
        "photo (12).png",
        "photo (13).png",
        "photo (14).png",
        "photo (15).png",
        "photo (16).png",
        "photo (17).png",
        "photo (18).png",
        "photo (19).png",
        "photo (20).png",

        "photo (21).png",
        "photo (22).png",
        "photo (23).png",
        "photo (24).png",
        "photo (25).png",
        "photo (26).png",
        "photo (27).png",
        "photo (28).png",
        "photo (29).png",
        "photo (30).png",

        "photo (31).png",
        "photo (32).png",
        "photo (33).png",
        "photo (34).png",
        "photo (35).png",
        "photo (36).png",
        "photo (37).png",
        "photo (38).png",
        "photo (39).png",
        "photo (40).png",

        "photo (41).png",
        "photo (42).png",
        "photo (43).png",
        "photo (44).png",
        "photo (45).png"

    ];


    /* ============================================================
       MASTER CSS
    ============================================================ */

    const style =
        document.createElement("style");

    style.id =
        "birthday-effects-master";

    style.textContent = `

        /* ========================================================
           GENERAL
        ======================================================== */

        #opening,
        #gallery,
        #final {
            position: relative;
            overflow: hidden;
        }

        #opening.cinematic-opening {
            isolation: isolate;
        }

        #opening .opening-content {
            position: relative;
            z-index: 20;
        }


        /* ========================================================
           OPENING
        ======================================================== */

        #opening .mini-symbol,
        #opening .opening-mini-symbol {
            display: inline-block;
            transform-origin: center;
            animation:
                openingStarGlow
                3.5s
                ease-in-out
                infinite;
        }

        @keyframes openingStarGlow {

            0%,
            100% {
                opacity: .5;
                transform:
                    scale(.82)
                    rotate(0deg);
                filter:
                    drop-shadow(
                        0 0 2px
                        rgba(255,220,180,.15)
                    );
            }

            50% {
                opacity: 1;
                transform:
                    scale(1.2)
                    rotate(180deg);
                filter:
                    drop-shadow(
                        0 0 14px
                        rgba(255,210,180,.85)
                    );
            }

        }


        #opening h1 {

            background:
                linear-gradient(
                    110deg,
                    #fff 0%,
                    #fff 38%,
                    #ffd0e5 50%,
                    #fff 62%,
                    #fff 100%
                );

            background-size:
                240% auto;

            -webkit-background-clip:
                text;

            background-clip:
                text;

            -webkit-text-fill-color:
                transparent;

            animation:
                openingHeadingShimmer
                7s
                ease-in-out
                infinite;
        }


        @keyframes openingHeadingShimmer {

            0% {
                background-position:
                    200% center;
            }

            45%,
            100% {
                background-position:
                    -20% center;
            }

        }


        #opening #openButton {

            position: relative;
            overflow: hidden;

            animation:
                openingButtonPulse
                3s
                ease-in-out
                infinite;
        }


        #opening #openButton::after {

            content: "";

            position: absolute;

            top: 0;
            left: 120%;

            width: 70%;
            height: 100%;

            background:
                linear-gradient(
                    90deg,
                    transparent,
                    rgba(255,255,255,.42),
                    transparent
                );

            transform:
                skewX(-22deg);

            animation:
                openingButtonSweep
                4s
                ease-in-out
                infinite;

            pointer-events: none;
        }


        @keyframes openingButtonPulse {

            0%,
            100% {
                box-shadow:
                    0 0 0
                    rgba(255,170,210,0);
            }

            50% {
                box-shadow:
                    0 0 32px
                    rgba(255,170,210,.32);
            }

        }


        @keyframes openingButtonSweep {

            0% {
                left: -120%;
            }

            45%,
            100% {
                left: 150%;
            }

        }


        .birthday-opening-star {

            position: absolute;

            width: 2px;
            height: 2px;

            border-radius: 50%;

            background:
                rgba(255,255,255,.85);

            pointer-events: none;

            z-index: 2;

            animation:
                openingTinyStar
                var(--star-time)
                ease-in-out
                var(--star-delay)
                infinite alternate;
        }


        @keyframes openingTinyStar {

            from {
                opacity: .05;
                transform: scale(.4);
            }

            to {
                opacity: .9;
                transform: scale(1.5);
            }

        }


        /* ========================================================
           ALBUM
        ======================================================== */

        #gallery {
            isolation: isolate;
        }

        #gallery.circular-album-mode
        .memory-grid {
            display: none !important;
        }

        #memoryAlbum {

            position: relative;

            width: 100%;
            height: 560px;

            margin: 10px auto 0;

            overflow: hidden;

            perspective: 1800px;
            perspective-origin: 50% 48%;

            transform-style:
                preserve-3d;

            touch-action: pan-y;

            user-select: none;

            cursor: grab;

            z-index: 10;
        }

        #memoryAlbum.dragging {
            cursor: grabbing;
        }

        #albumRing {

            position: absolute;

            left: 50%;
            top: 52%;

            width: 1px;
            height: 1px;

            transform-style:
                preserve-3d;
        }


        /* ========================================================
           ALBUM CARD
        ======================================================== */

        .album-card {

            position: absolute;

            left: -105px;
            top: -150px;

            width: 210px;
            height: 300px;

            padding: 0;
            margin: 0;

            overflow: hidden;

            border-radius: 12px;

            border:
                1px solid
                rgba(255,255,255,.18);

            background:
                #18161d;

            box-sizing: border-box;

            transform-style:
                preserve-3d;

            cursor: pointer;

            will-change:
                transform,
                opacity,
                filter;

            box-shadow:
                0 25px 80px
                rgba(0,0,0,.58);
        }

        .album-card.front {

            border-color:
                rgba(255,190,220,.9);

            box-shadow:
                0 30px 100px
                rgba(0,0,0,.72),
                0 0 45px
                rgba(255,180,215,.18);
        }

        .album-card .album-photo {

            position: absolute;

            inset: 0;

            width: 100%;
            height: 100%;

            overflow: hidden;

            border-radius: 11px;
        }

        .album-card img {

            display: block;

            width: 100% !important;
            height: 100% !important;

            max-width: none !important;
            max-height: none !important;

            object-fit: cover !important;

            object-position: center;

            margin: 0 !important;
            padding: 0 !important;

            border: 0 !important;

            border-radius: 11px;

            pointer-events: none;

            user-select: none;

            -webkit-user-drag: none;
        }

        .album-number {

            position: absolute;

            left: 10px;
            bottom: 9px;

            padding: 4px 8px;

            border-radius: 20px;

            background:
                rgba(0,0,0,.52);

            color:
                rgba(255,255,255,.75);

            font:
                9px Inter,
                sans-serif;

            letter-spacing: .15em;

            z-index: 5;

            pointer-events: none;
        }


        /* ========================================================
           ALBUM CONTROLS
        ======================================================== */

        .album-control {

            position: absolute;

            top: 50%;

            width: 64px;
            height: 64px;

            margin-top: -32px;

            border-radius: 50%;

            border:
                1px solid
                rgba(255,255,255,.28);

            background:
                rgba(20,18,24,.72);

            color: #fff;

            font-size: 34px;

            line-height: 58px;

            text-align: center;

            cursor: pointer;

            z-index: 500;

            pointer-events: auto;

            transition:
                transform .25s ease,
                border-color .25s ease,
                background .25s ease;
        }

        .album-control:hover {

            transform:
                scale(1.1);

            background:
                rgba(255,180,215,.12);

            border-color:
                rgba(255,190,220,.75);
        }

        #albumPrev {
            left: 5%;
        }

        #albumNext {
            right: 5%;
        }


        /* ========================================================
           FIXED COUNTER + HELP
        ======================================================== */

        .album-counter {

            position: absolute;

            left: 50%;
            bottom: 38px;

            transform:
                translateX(-50%);

            z-index: 600;

            color:
                rgba(255,255,255,.62);

            font:
                11px Inter,
                sans-serif;

            letter-spacing:
                .18em;

            pointer-events: none;

            white-space: nowrap;
        }

        .album-help {
           display: none !important;
         
        }


        /* ========================================================
           PHOTO VIEWER
        ======================================================== */

        #birthdayPhotoViewer {

            position: fixed;

            inset: 0;

            display: flex;

            align-items: center;
            justify-content: center;

            background:
                rgba(5,4,8,.965);

            opacity: 0;

            visibility: hidden;

            pointer-events: none;

            z-index: 999999;

            transition:
                opacity .3s ease,
                visibility .3s ease;
        }

        #birthdayPhotoViewer.open {

            opacity: 1;

            visibility: visible;

            pointer-events: auto;
        }

        .birthday-viewer-bg {

            position: absolute;

            inset: 0;

            background:
                radial-gradient(
                    circle at center,
                    rgba(255,185,215,.08),
                    transparent 52%
                );
        }

        .birthday-viewer-image {

            position: relative;

            z-index: 10;

            max-width:
                88vw;

            max-height:
                88vh;

            width: auto;
            height: auto;

            object-fit: contain;

            display: block;

            border-radius: 8px;

            border:
                1px solid
                rgba(255,215,230,.28);

            box-shadow:
                0 35px 110px
                rgba(0,0,0,.8);

            cursor: pointer;

            user-select: none;

            -webkit-user-drag: none;
        }

        .birthday-viewer-top {

            position: absolute;

            left: 28px;
            right: 28px;
            top: 22px;

            display: flex;

            justify-content:
                space-between;

            align-items: center;

            z-index: 100;
        }

        .birthday-viewer-count {

            color:
                rgba(255,205,225,.72);

            font:
                10px Inter,
                sans-serif;

            letter-spacing:
                .22em;
        }

        .birthday-viewer-close {

            width: 48px;
            height: 48px;

            border-radius: 50%;

            border:
                1px solid
                rgba(255,255,255,.28);

            background:
                rgba(255,255,255,.06);

            color: #fff;

            font-size: 28px;

            cursor: pointer;

            z-index: 200;
        }

        .birthday-viewer-arrow {

            position: absolute;

            top: 50%;

            width: 64px;
            height: 64px;

            margin-top: -32px;

            border-radius: 50%;

            border:
                1px solid
                rgba(255,255,255,.28);

            background:
                rgba(20,18,24,.78);

            color: #fff;

            font-size: 40px;

            line-height: 55px;

            text-align: center;

            cursor: pointer;

            z-index: 300;
        }

        #birthdayViewerPrev {
            left: 28px;
        }

        #birthdayViewerNext {
            right: 28px;
        }

        .birthday-viewer-help {

            position: absolute;

            bottom: 22px;

            left: 50%;

            transform:
                translateX(-50%);

            color:
                rgba(255,255,255,.35);

            font:
                9px Inter,
                sans-serif;

            letter-spacing:
                .16em;

            text-transform:
                uppercase;

            z-index: 100;

            white-space: nowrap;
        }


        /* ========================================================
           FINAL SCENE
        ======================================================== */

        #final {
            isolation: isolate;
        }

        #final .final-content {

            position: relative;

            z-index: 20;
        }

        #final .final-moon {

            position: absolute;

            top: 4%;
            left: 50%;

            width: 180px;
            height: 180px;

            transform: translateX(-50%);
            z-index: 6;

            pointer-events: none;
        }

        #final .moon-glow {

            position: absolute;

            inset: -60px;

            border-radius: 50%;

            background:
                radial-gradient(
                    circle,
                    rgba(255,230,215,.30),
                    rgba(255,205,220,.11) 35%,
                    transparent 70%
                );

            filter: blur(8px);

            opacity: 0;
        }

        #final .moon {

            position: absolute;

            left: 30px;
            top: 30px;

            width: 120px;
            height: 120px;

            border-radius: 50%;

            background:
                radial-gradient(
                    circle at 35% 30%,
                    #fffdf3,
                    #f5e4df 48%,
                    #d7b9bd 78%,
                    #ae919a
                );

            box-shadow:
                0 0 45px
                rgba(255,225,220,.3);

            opacity: 0;
        }

        #final .final-clouds {

            position: absolute;

            inset: 0;

            z-index: 8;

            pointer-events: none;

            overflow: hidden;
        }

        #final .final-cloud {

            position: absolute;

            width: 290px;
            height: 75px;

            border-radius: 50%;

            background:
                rgba(255,255,255,.035);

            filter: blur(24px);

            opacity: 0;
        }

        #final .final-cloud::before {

            content: "";

            position: absolute;

            left: 70px;
            top: -35px;

            width: 130px;
            height: 90px;

            border-radius: 50%;

            background: inherit;
        }

        .final-cloud-1 {
            left: -80px;
            top: 22%;
        }

        .final-cloud-2 {
            right: -100px;
            top: 40%;
            transform: scale(.8);
        }

        .final-cloud-3 {
            left: 18%;
            bottom: 16%;
            transform: scale(.65);
        }

        .final-cloud-4 {
            right: 18%;
            top: 18%;
            transform: scale(.6);
        }


        /* ========================================================
           FINAL MESSAGE
        ======================================================== */

        #final .final-letter-lines {
            opacity: 1 !important;
        }

        #final .final-line {

            opacity: 0;
            

            transform:
                translateY(18px);
        }

        #final .final-birthday {

            opacity: 0;

            transform:
                translateY(25px);
        }

        #final .final-title {

            opacity: 0;

            transform:
                translateY(35px)
                scale(.94);
        }

        #final .final-flower {

            opacity: 0;

            transform:
                scale(.5)
                rotate(-15deg);
        }

        #final .final-signature-new {

            opacity: 0;

            transform:
                translateY(20px);
        }

        #final .final-closing {

            opacity: 0;

            transform:
                translateY(15px);
        }


        /* ========================================================
           SAFETY — NEVER ALLOW HIDDEN PAGE SCROLL
        ======================================================== */

        html.viewer-lock,
        body.viewer-lock {
            overflow: hidden !important;
        }


        /* ========================================================
           MOBILE
        ======================================================== */

        @media(max-width:700px) {

            #memoryAlbum {
                height: 450px;
            }

            .album-card {

                left: -82px;
                top: -118px;

                width: 164px;
                height: 236px;
            }

            .album-control {

                width: 48px;
                height: 48px;

                margin-top: -24px;

                font-size: 28px;

                line-height: 42px;
            }

            #albumPrev {
                left: 10px;
            }

            #albumNext {
                right: 10px;
            }

            .birthday-viewer-image {

                max-width: 88vw;

                max-height: 82vh;
            }

            .birthday-viewer-arrow {

                width: 48px;
                height: 48px;

                margin-top: -24px;

                font-size: 30px;

                line-height: 40px;
            }

            #birthdayViewerPrev {
                left: 10px;
            }

            #birthdayViewerNext {
                right: 10px;
            }

            #final .final-moon {

                width: 130px;
                height: 130px;
                
                left: 50%
                right: 1%;
                
                top: 5%;
                transform: translateX(-50%);
            }

            #final .moon {

                width: 85px;
                height: 85px;

                left: 22px;
                top: 22px;
            }

            .birthday-viewer-help {
                display: none;
            }

            .album-help {
                font-size: 8px;
                letter-spacing: .08em;
            }

        }


        @media(max-width:420px) {

            #memoryAlbum {
                height: 400px;
            }

            .album-card {

                left: -68px;
                top: -98px;

                width: 136px;
                height: 196px;
            }

            .album-help {
                bottom: 8px;
            }

            .album-counter {
                bottom: 32px;
            }

        }

    `;

    document.head.appendChild(style);


    /* ============================================================
       REMOVE OLD VIEWER
       ------------------------------------------------------------
       script.js from the older version can create .photo-viewer.
       The new album uses #birthdayPhotoViewer instead.
    ============================================================ */

    function removeOldPhotoViewer() {

        document
            .querySelectorAll(".photo-viewer")
            .forEach(
                oldViewer => {

                    oldViewer.remove();

                }
            );

    }

    removeOldPhotoViewer();


    /* ============================================================
       OPENING STARS
    ============================================================ */

    function createOpeningStars() {

        if (!opening) {
            return;
        }

        if (
            opening.dataset.starsCreated ===
            "true"
        ) {
            return;
        }

        opening.dataset.starsCreated =
            "true";

        const count =
            window.innerWidth < 700
                ? 16
                : 32;

        for (
            let i = 0;
            i < count;
            i++
        ) {

            const star =
                document.createElement(
                    "span"
                );

            star.className =
                "birthday-opening-star";

            star.style.left =
                `${Math.random() * 100}%`;

            star.style.top =
                `${Math.random() * 100}%`;

            star.style.setProperty(
                "--star-time",
                `${2 + Math.random() * 4}s`
            );

            star.style.setProperty(
                "--star-delay",
                `${Math.random() * -4}s`
            );

            opening.appendChild(
                star
            );

        }

    }

    createOpeningStars();


    /* ============================================================
       OPENING ANIMATION
    ============================================================ */

    function animateOpening() {

        if (!opening) {
            return;
        }

        const content =
            opening.querySelector(
                ".opening-content"
            );

        if (!content) {
            return;
        }

        const parts =
            content.querySelectorAll(
                "h1, p, button, " +
                ".mini-symbol, " +
                ".opening-mini-symbol, " +
                ".eyebrow, " +
                ".opening-eyebrow, " +
                ".subtext, " +
                ".opening-subtext, " +
                ".divider, " +
                ".opening-divider, " +
                ".hint, " +
                ".opening-hint"
            );

        if (
            hasGSAP &&
            !reducedMotion
        ) {

            gsap.killTweensOf(parts);

            gsap.fromTo(
                parts,
                {
                    opacity: 0,
                    y: 18
                },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1.2,
                    stagger: .35,
                    delay: .7,
                    ease: "power3.out",
                    overwrite: true
                }
            );

            gsap.to(
                content,
                {
                    y: -5,
                    duration: 4.5,
                    delay: 2,
                    repeat: -1,
                    yoyo: true,
                    ease: "sine.inOut"
                }
            );

        } else {

            parts.forEach(
                element => {

                    element.style.opacity =
                        "1";

                    element.style.transform =
                        "none";

                }
            );

        }

    }

    setTimeout(
        animateOpening,
        150
    );


    /* ============================================================
       ALBUM ELEMENTS
    ============================================================ */

    function getAlbumElements() {

        let album =
            document.getElementById(
                "memoryAlbum"
            );

        if (
            !album &&
            gallery
        ) {

            album =
                document.createElement(
                    "div"
                );

            album.id =
                "memoryAlbum";

            gallery.appendChild(
                album
            );

        }

        if (!album) {
            return null;
        }

        let ring =
            document.getElementById(
                "albumRing"
            );

        if (!ring) {

            ring =
                document.createElement(
                    "div"
                );

            ring.id =
                "albumRing";

            album.appendChild(
                ring
            );

        }

        let previous =
            document.getElementById(
                "albumPrev"
            );

        let next =
            document.getElementById(
                "albumNext"
            );

        if (!previous) {

            previous =
                document.createElement(
                    "button"
                );

            previous.id =
                "albumPrev";

            previous.className =
                "album-control";

            previous.type =
                "button";

            previous.innerHTML =
                "‹";

            previous.setAttribute(
                "aria-label",
                "Previous memory"
            );

            album.appendChild(
                previous
            );

        }

        if (!next) {

            next =
                document.createElement(
                    "button"
                );

            next.id =
                "albumNext";

            next.className =
                "album-control";

            next.type =
                "button";

            next.innerHTML =
                "›";

            next.setAttribute(
                "aria-label",
                "Next memory"
            );

            album.appendChild(
                next
            );

        }

        let counter =
            document.getElementById(
                "albumCounter"
            );

        if (!counter) {

            counter =
                document.createElement(
                    "div"
                );

            counter.id =
                "albumCounter";

            counter.className =
                "album-counter";

            album.appendChild(
                counter
            );

        }

        

        return {
            album,
            ring,
            previous,
            next,
            counter
        };

    }


    const albumElements =
        getAlbumElements();


    /* ============================================================
       ALBUM STATE
    ============================================================ */

    let albumCards = [];

    let albumIndex = 0;

    let albumDragging = false;

    let dragStartX = 0;

    let dragDistance = 0;

    let albumRadiusX = 760;

    let albumRadiusZ = 235;

    let albumAutoTimer = null;

    let albumMoved = false;

    let albumWheelLock = false;


    /* ============================================================
       VIEWER STATE
    ============================================================ */

    let viewer = null;

    let viewerImage = null;

    let viewerCounter = null;

    let viewerIsOpen = false;

    let viewerIndex = 0;

    let viewerTouchX = 0;


    /* ============================================================
       ALBUM SIZE
    ============================================================ */

    function updateAlbumSize() {

        if (
            window.innerWidth <= 420
        ) {

            albumRadiusX = 390;
            albumRadiusZ = 120;

        } else if (
            window.innerWidth <= 700
        ) {

            albumRadiusX = 500;
            albumRadiusZ = 155;

        } else {

            albumRadiusX = 760;
            albumRadiusZ = 235;

        }

    }


    /* ============================================================
       ALBUM COUNTER
    ============================================================ */

    function updateAlbumCounter() {

        if (!albumElements) {
            return;
        }

        const current =
            String(
                albumIndex + 1
            ).padStart(
                2,
                "0"
            );

        const total =
            String(
                albumCards.length
            ).padStart(
                2,
                "0"
            );

        albumElements.counter.textContent =
            `${current} / ${total}`;

        /*
         * Sync any hard-coded counter that exists
         * in the HTML.
         */

        const visibleCurrent =
            document.getElementById(
                "albumCurrent"
            );

        const visibleTotal =
            document.getElementById(
                "albumTotal"
            );

        if (visibleCurrent) {

            visibleCurrent.textContent =
                current;

        }

        if (visibleTotal) {

            visibleTotal.textContent =
                total;

        }

    }


    /* ============================================================
       BUILD ALBUM
    ============================================================ */

    function buildAlbum() {

        if (!albumElements) {
            return;
        }

        const {
            album,
            ring,
            previous,
            next
        } =
            albumElements;

        if (gallery) {

            gallery.classList.add(
                "circular-album-mode"
            );

        }

        ring.innerHTML =
            "";

        albumCards =
            [];

        photoFiles.forEach(
            (
                filename,
                index
            ) => {

                const card =
                    document.createElement(
                        "article"
                    );

                card.className =
                    "album-card";

                card.dataset.index =
                    index;

                const photo =
                    document.createElement(
                        "div"
                    );

                photo.className =
                    "album-photo";

                const image =
                    document.createElement(
                        "img"
                    );

                image.src =
                    "./images/" +
                    filename;

                image.alt =
                    `Memory ${index + 1}`;

                image.loading =
                    "eager";

                image.draggable =
                    false;

                const number =
                    document.createElement(
                        "span"
                    );

                number.className =
                    "album-number";

                number.textContent =
                    String(
                        index + 1
                    ).padStart(
                        2,
                        "0"
                    );

                photo.appendChild(
                    image
                );

                card.appendChild(
                    photo
                );

                card.appendChild(
                    number
                );

                ring.appendChild(
                    card
                );

                albumCards.push(
                    card
                );


                /* ------------------------------------------------
                   IMAGE ERROR
                ------------------------------------------------ */

                image.addEventListener(
                    "error",
                    () => {

                        console.warn(
                            "Could not load image:",
                            filename
                        );

                        card.dataset.imageError =
                            "true";

                    }
                );


                /* ------------------------------------------------
                   FIXED CLICK HANDLER

                   IMPORTANT:
                   There is ONLY ONE click listener.

                   Clicking any card opens the viewer
                   immediately.

                   A drag is ignored.
                ------------------------------------------------ */

                card.addEventListener(
                    "click",
                    event => {

                        event.preventDefault();
                        event.stopPropagation();

                        if (
                            albumMoved
                        ) {

                            albumMoved =
                                false;

                            return;

                        }

                        albumIndex =
                            index;

                        renderAlbum(
                            false
                        );

                        stopAlbumAuto();

                        openViewer(
                            index
                        );

                    }
                );

            }
        );


        previous.onclick =
            event => {

                event.preventDefault();
                event.stopPropagation();

                previousAlbum();

            };


        next.onclick =
            event => {

                event.preventDefault();
                event.stopPropagation();

                nextAlbum();

            };


        updateAlbumSize();

        renderAlbum(
            false
        );

        startAlbumAuto();


        /* ========================================================
           DRAG
        ======================================================== */

        album.onpointerdown =
            event => {

                if (
                    event.target.closest(
                        ".album-control"
                    )
                ) {
                    return;
                }

                albumDragging =
                    true;

                albumMoved =
                    false;

                dragStartX =
                    event.clientX;

                dragDistance =
                    0;

                album.classList.add(
                    "dragging"
                );

                stopAlbumAuto();

               

            };


        album.onpointermove =
            event => {

                if (
                    !albumDragging
                ) {
                    return;
                }

                dragDistance =
                    event.clientX -
                    dragStartX;

                if (
                    Math.abs(
                        dragDistance
                    ) > 6
                ) {

                    albumMoved =
                        true;

                }

                renderDraggedAlbum(
                    dragDistance
                );

            };


        album.onpointerup =
            event => {

                finishAlbumDrag(
                    event
                );

            };


        album.onpointercancel =
            event => {

                finishAlbumDrag(
                    event
                );

            };


        /* ========================================================
           WHEEL
        ======================================================== */

        album.addEventListener(
            "wheel",
            event => {

                event.preventDefault();

                if (
                    albumWheelLock
                ) {
                    return;
                }

                albumWheelLock =
                    true;

                if (
                    event.deltaY > 0 ||
                    event.deltaX > 0
                ) {

                    nextAlbum();

                } else {

                    previousAlbum();

                }

                setTimeout(
                    () => {

                        albumWheelLock =
                            false;

                    },
                    300
                );

            },
            {
                passive: false
            }
        );

    }


    /* ============================================================
       RENDER ALBUM
    ============================================================ */

    function renderAlbum(
        animate
    ) {

        if (
            !albumCards.length
        ) {
            return;
        }

        const total =
            albumCards.length;

        const step =
            360 / total;

        albumCards.forEach(
            (
                card,
                index
            ) => {

                let relative =
                    index -
                    albumIndex;

                while (
                    relative >
                    total / 2
                ) {

                    relative -=
                        total;

                }

                while (
                    relative <
                    -total / 2
                ) {

                    relative +=
                        total;

                }

                const angle =
                    relative *
                    step;

                const radians =
                    angle *
                    Math.PI /
                    180;

                const x =
                    Math.sin(
                        radians
                    ) *
                    albumRadiusX;

                const z =
                    Math.cos(
                        radians
                    ) *
                    albumRadiusZ;

                const depth =
                    (
                        z +
                        albumRadiusZ
                    ) /
                    (
                        albumRadiusZ * 2
                    );

                const front =
                    Math.abs(
                        relative
                    ) < .12;

                const scale =
                    front
                        ? 1.08
                        : .60 +
                          depth * .34;

                const opacity =
                    front
                        ? 1
                        : .12 +
                          depth * .88;

                const blur =
                    front
                        ? 0
                        : Math.max(
                            0,
                            3 -
                            depth * 3
                        );

                const rotation =
                    -angle * .10;

                card.classList.toggle(
                    "front",
                    front
                );

                card.style.zIndex =
                    String(
                        100 +
                        Math.round(
                            depth * 1000
                        )
                    );


                if (
                    !animate ||
                    reducedMotion ||
                    !hasGSAP ||
                    albumDragging
                ) {

                    card.style.transform =
                        `
                        translate3d(
                            ${x}px,
                            0px,
                            ${z}px
                        )
                        rotateY(
                            ${rotation}deg
                        )
                        scale(
                            ${scale}
                        )
                        `;

                    card.style.opacity =
                        opacity;

                    card.style.filter =
                        `blur(${blur}px)`;

                } else {

                    gsap.to(
                        card,
                        {
                            x,
                            y: 0,
                            z,
                            rotationY:
                                rotation,
                            scale,
                            opacity,
                            filter:
                                `blur(${blur}px)`,
                            duration: .65,
                            ease:
                                "power3.inOut",
                            overwrite:
                                true
                        }
                    );

                }

            }
        );

        updateAlbumCounter();

    }


    /* ============================================================
       DRAG RENDER
    ============================================================ */

    function renderDraggedAlbum(
        distance
    ) {

        if (
            !albumCards.length
        ) {
            return;
        }

        const total =
            albumCards.length;

        const step =
            360 / total;

        const degreeOffset =
            distance * .28;

        albumCards.forEach(
            (
                card,
                index
            ) => {

                let relative =
                    index -
                    albumIndex +
                    degreeOffset /
                    step;

                while (
                    relative >
                    total / 2
                ) {

                    relative -=
                        total;

                }

                while (
                    relative <
                    -total / 2
                ) {

                    relative +=
                        total;

                }

                const angle =
                    relative *
                    step;

                const radians =
                    angle *
                    Math.PI /
                    180;

                const x =
                    Math.sin(
                        radians
                    ) *
                    albumRadiusX;

                const z =
                    Math.cos(
                        radians
                    ) *
                    albumRadiusZ;

                const depth =
                    (
                        z +
                        albumRadiusZ
                    ) /
                    (
                        albumRadiusZ * 2
                    );

                const front =
                    Math.abs(
                        relative
                    ) < .12;

                const scale =
                    front
                        ? 1.08
                        : .60 +
                          depth * .34;

                const opacity =
                    front
                        ? 1
                        : .12 +
                          depth * .88;

                const rotation =
                    -angle * .10;

                card.style.transform =
                    `
                    translate3d(
                        ${x}px,
                        0px,
                        ${z}px
                    )
                    rotateY(
                        ${rotation}deg
                    )
                    scale(
                        ${scale}
                    )
                    `;

                card.style.opacity =
                    opacity;

            }
        );

    }


    /* ============================================================
       FINISH DRAG
    ============================================================ */

    function finishAlbumDrag(
        event
    ) {

        if (
            !albumDragging
        ) {
            return;
        }

        albumDragging =
            false;

        albumElements.album.classList.remove(
            "dragging"
        );

        const total =
            albumCards.length;

        if (!total) {
            return;
        }

        const step =
            360 / total;

        const movement =
            Math.round(
                dragDistance *
                .28 /
                step
            );

        albumIndex =
            (
                albumIndex -
                movement +
                total
            ) %
            total;

        dragDistance =
            0;

        renderAlbum(
            true
        );

        restartAlbumAuto();

        try {

            albumElements.album.releasePointerCapture(
                event.pointerId
            );

        } catch (error) {}

    }


    /* ============================================================
       ALBUM NEXT / PREVIOUS
    ============================================================ */

    function nextAlbum() {

        if (
            !albumCards.length
        ) {
            return;
        }

        albumIndex =
            (
                albumIndex + 1
            ) %
            albumCards.length;

        renderAlbum(
            true
        );

        restartAlbumAuto();

    }


    function previousAlbum() {

        if (
            !albumCards.length
        ) {
            return;
        }

        albumIndex =
            (
                albumIndex -
                1 +
                albumCards.length
            ) %
            albumCards.length;

        renderAlbum(
            true
        );

        restartAlbumAuto();

    }


    /* ============================================================
       ALBUM AUTO ROTATION
    ============================================================ */

    function stopAlbumAuto() {

        if (
            albumAutoTimer
        ) {

            clearInterval(
                albumAutoTimer
            );

            albumAutoTimer =
                null;

        }

    }


    function startAlbumAuto() {

        stopAlbumAuto();

        if (
            reducedMotion
        ) {
            return;
        }

        albumAutoTimer =
            setInterval(
                () => {

                    if (
                        !albumDragging &&
                        !viewerIsOpen
                    ) {

                        nextAlbum();

                    }

                },
                7000
            );

    }


    function restartAlbumAuto() {

        startAlbumAuto();

    }


    /* ============================================================
       CREATE VIEWER
    ============================================================ */

    function createViewer() {

        if (viewer) {
            return;
        }

        viewer =
            document.createElement(
                "div"
            );

        viewer.id =
            "birthdayPhotoViewer";

        viewer.innerHTML = `

            <div
                class="birthday-viewer-bg"
            ></div>

            <div
                class="birthday-viewer-top"
            >

                <div
                    class="birthday-viewer-count"
                >
                    01 / 51
                </div>

                <button
                    class="birthday-viewer-close"
                    type="button"
                    aria-label="Close"
                >
                    ×
                </button>

            </div>

            <button
                id="birthdayViewerPrev"
                class="birthday-viewer-arrow"
                type="button"
                aria-label="Previous"
            >
                ‹
            </button>

            <img
                class="birthday-viewer-image"
                src=""
                alt=""
                draggable="false"
            >

            <button
                id="birthdayViewerNext"
                class="birthday-viewer-arrow"
                type="button"
                aria-label="Next"
            >
                ›
            </button>

            <div
                class="birthday-viewer-help"
            >
                ← → &nbsp; Navigate
                &nbsp;&nbsp; • &nbsp;&nbsp;
                Click image
                &nbsp;&nbsp; • &nbsp;&nbsp;
                ESC &nbsp; Close
            </div>

        `;

        document.body.appendChild(
            viewer
        );

        viewerImage =
            viewer.querySelector(
                ".birthday-viewer-image"
            );

        viewerCounter =
            viewer.querySelector(
                ".birthday-viewer-count"
            );

        const close =
            viewer.querySelector(
                ".birthday-viewer-close"
            );

        const previous =
            viewer.querySelector(
                "#birthdayViewerPrev"
            );

        const next =
            viewer.querySelector(
                "#birthdayViewerNext"
            );

        const background =
            viewer.querySelector(
                ".birthday-viewer-bg"
            );


        close.addEventListener(
            "click",
            event => {

                event.preventDefault();
                event.stopPropagation();

                closeViewer();

            }
        );


        previous.addEventListener(
            "click",
            event => {

                event.preventDefault();
                event.stopPropagation();

                previousViewer();

            }
        );


        next.addEventListener(
            "click",
            event => {

                event.preventDefault();
                event.stopPropagation();

                nextViewer();

            }
        );


        background.addEventListener(
            "click",
            event => {

                event.preventDefault();

                closeViewer();

            }
        );


        viewerImage.addEventListener(
            "click",
            event => {

                event.preventDefault();
                event.stopPropagation();

                const rect =
                    viewerImage.getBoundingClientRect();

                const x =
                    event.clientX -
                    rect.left;

                if (
                    x >
                    rect.width / 2
                ) {

                    nextViewer();

                } else {

                    previousViewer();

                }

            }
        );


        viewer.addEventListener(
            "touchstart",
            event => {

                if (
                    event.touches.length !==
                    1
                ) {
                    return;
                }

                viewerTouchX =
                    event.touches[0].clientX;

            },
            {
                passive: true
            }
        );


        viewer.addEventListener(
            "touchend",
            event => {

                if (
                    event.changedTouches.length !==
                    1
                ) {
                    return;
                }

                const endX =
                    event.changedTouches[0].clientX;

                const difference =
                    endX -
                    viewerTouchX;

                if (
                    Math.abs(
                        difference
                    ) < 45
                ) {
                    return;
                }

                if (
                    difference < 0
                ) {

                    nextViewer();

                } else {

                    previousViewer();

                }

            },
            {
                passive: true
            }
        );

    }


    /* ============================================================
       OPEN VIEWER
    ============================================================ */

    function openViewer(
        index
    ) {

        if (
            !albumCards.length
        ) {
            return;
        }

        createViewer();

        viewerIndex =
            (
                index +
                albumCards.length
            ) %
            albumCards.length;

        viewerIsOpen =
            true;

        viewer.classList.add(
            "open"
        );

        /*
         * Use a class instead of permanently modifying
         * overflow with an unrecoverable state.
         */

        document.documentElement.classList.add(
            "viewer-lock"
        );

        document.body.classList.add(
            "viewer-lock"
        );

        renderViewerImage(
            false
        );

        preloadViewerImages();

        if (
            hasGSAP &&
            !reducedMotion
        ) {

            gsap.killTweensOf(
                viewerImage
            );

            gsap.fromTo(
                viewerImage,
                {
                    opacity: 0,
                    scale: .88,
                    y: 25
                },
                {
                    opacity: 1,
                    scale: 1,
                    y: 0,
                    duration: .55,
                    ease:
                        "power3.out"
                }
            );

        }

    }


    /* ============================================================
       VIEWER IMAGE
    ============================================================ */

    function renderViewerImage(
        animate
    ) {

        if (
            !viewerImage ||
            !albumCards.length
        ) {
            return;
        }

        const card =
            albumCards[
                viewerIndex
            ];

        const image =
            card.querySelector(
                "img"
            );

        if (!image) {
            return;
        }

        const source =
            image.getAttribute(
                "src"
            );

        const alt =
            image.getAttribute(
                "alt"
            ) ||
            "Birthday memory";


        const update =
            () => {

                viewerImage.src =
                    source;

                viewerImage.alt =
                    alt;

                viewerCounter.textContent =
                    String(
                        viewerIndex + 1
                    ).padStart(
                        2,
                        "0"
                    ) +
                    " / " +
                    String(
                        albumCards.length
                    ).padStart(
                        2,
                        "0"
                    );

            };


        if (
            !animate ||
            reducedMotion
        ) {

            update();

            return;

        }


        if (
            hasGSAP
        ) {

            gsap.to(
                viewerImage,
                {
                    opacity: 0,
                    scale: .96,
                    duration: .16,
                    ease: "power2.in",
                    onComplete: () => {

                        if (
                            !viewerIsOpen
                        ) {
                            return;
                        }

                        update();

                        gsap.fromTo(
                            viewerImage,
                            {
                                opacity: 0,
                                scale: .96
                            },
                            {
                                opacity: 1,
                                scale: 1,
                                duration: .4,
                                ease:
                                    "power3.out"
                            }
                        );

                    }
                }
            );

        } else {

            viewerImage.style.opacity =
                "0";

            setTimeout(
                () => {

                    if (
                        !viewerIsOpen
                    ) {
                        return;
                    }

                    update();

                    viewerImage.style.opacity =
                        "1";

                },
                160
            );

        }

    }


    /* ============================================================
       VIEWER NEXT
    ============================================================ */

    function nextViewer() {

        if (
            !albumCards.length ||
            !viewerIsOpen
        ) {
            return;
        }

        viewerIndex =
            (
                viewerIndex + 1
            ) %
            albumCards.length;

        renderViewerImage(
            true
        );

        preloadViewerImages();

    }


    /* ============================================================
       VIEWER PREVIOUS
    ============================================================ */

    function previousViewer() {

        if (
            !albumCards.length ||
            !viewerIsOpen
        ) {
            return;
        }

        viewerIndex =
            (
                viewerIndex -
                1 +
                albumCards.length
            ) %
            albumCards.length;

        renderViewerImage(
            true
        );

        preloadViewerImages();

    }


    /* ============================================================
       CLOSE VIEWER — FIXED
    ============================================================ */

    function closeViewer() {

        if (!viewer) {
            return;
        }

        viewerIsOpen =
            false;

        /*
         * Kill any animation before hiding.
         */

        if (hasGSAP) {

            gsap.killTweensOf(
                viewerImage
            );

        }

        /*
         * Remove viewer immediately.
         */

        viewer.classList.remove(
            "open"
        );

        /*
         * ALWAYS restore page scrolling.
         */

        document.documentElement.classList.remove(
            "viewer-lock"
        );

        document.body.classList.remove(
            "viewer-lock"
        );

        document.documentElement.style.overflow =
            "";

        document.body.style.overflow =
            "";

        /*
         * Reset image state.
         */

        if (viewerImage) {

            viewerImage.style.opacity =
                "";

            viewerImage.style.transform =
                "";

        }

        restartAlbumAuto();

    }


    /* ============================================================
       PRELOAD VIEWER IMAGES
    ============================================================ */

    function preloadViewerImages() {

        if (
            !albumCards.length
        ) {
            return;
        }

        [
            -1,
            1
        ].forEach(
            offset => {

                const index =
                    (
                        viewerIndex +
                        offset +
                        albumCards.length
                    ) %
                    albumCards.length;

                const image =
                    albumCards[
                        index
                    ].querySelector(
                        "img"
                    );

                if (!image) {
                    return;
                }

                const preload =
                    new Image();

                preload.src =
                    image.getAttribute(
                        "src"
                    );

            }
        );

    }


    /* ============================================================
       KEYBOARD VIEWER CONTROLS
    ============================================================ */

    document.addEventListener(
        "keydown",
        event => {

            if (
                !viewerIsOpen
            ) {
                return;
            }

            if (
                event.key ===
                "Escape"
            ) {

                event.preventDefault();

                closeViewer();

                return;

            }

            if (
                event.key ===
                "ArrowRight"
            ) {

                event.preventDefault();

                nextViewer();

            }

            if (
                event.key ===
                "ArrowLeft"
            ) {

                event.preventDefault();

                previousViewer();

            }

        }
    );


    /* ============================================================
       FINAL MOON
    ============================================================ */

    function ensureFinalMoon() {

    if (!finalScene) {
        return;
    }

    let moonContainer =
        finalScene.querySelector(
            ".final-moon"
        );

    if (!moonContainer) {

        moonContainer =
            document.createElement(
                "div"
            );

        moonContainer.className =
            "final-moon";

        moonContainer.setAttribute(
            "aria-hidden",
            "true"
        );

        moonContainer.innerHTML = `

            <div
                class="moon-glow"
            ></div>

            <div
                class="moon"
            ></div>

        `;

        finalScene.prepend(
            moonContainer
        );

    }

    /* ========================================================
       ALWAYS FORCE MOON POSITION
       ======================================================== */

    moonContainer.style.setProperty(
        "left",
        "50%",
        "important"
    );

    moonContainer.style.setProperty(
        "right",
        "auto",
        "important"
    );

    moonContainer.style.setProperty(
        "top",
        "4vh",
        "important"
    );

    moonContainer.style.setProperty(
        "transform",
        "translateX(-50%)",
        "important"
    );

}


    /* ============================================================
       FINAL CLOUDS
    ============================================================ */

    function ensureFinalClouds() {

        if (!finalScene) {
            return;
        }

        let clouds =
            finalScene.querySelector(
                ".final-clouds"
            );

        if (!clouds) {

            clouds =
                document.createElement(
                    "div"
                );

            clouds.className =
                "final-clouds";

            clouds.setAttribute(
                "aria-hidden",
                "true"
            );

            for (
                let i = 1;
                i <= 4;
                i++
            ) {

                const cloud =
                    document.createElement(
                        "div"
                    );

                cloud.className =
                    `final-cloud final-cloud-${i}`;

                clouds.appendChild(
                    cloud
                );

            }

            finalScene.appendChild(
                clouds
            );

        }

    }

    ensureFinalMoon();

    ensureFinalClouds();


    /* ============================================================
       FINAL ANIMATION
    ============================================================ */

    let finalAnimationStarted =
        false;


    function startFinalAnimation() {

        if (
            !finalScene ||
            finalAnimationStarted
        ) {
            return;
        }

        finalAnimationStarted =
            true;

        finalScene.classList.add(
            "final-animation-started"
        );


        const moon =
            finalScene.querySelector(
                ".moon"
            );

        const moonGlow =
            finalScene.querySelector(
                ".moon-glow"
            );

        const clouds =
            finalScene.querySelectorAll(
                ".final-cloud"
            );


        /* ========================================================
           MOON
        ======================================================== */

        if (moon) {

            if (
                hasGSAP &&
                !reducedMotion
            ) {

                gsap.fromTo(
                    moon,
                    {
                        opacity: 0,
                        scale: .65,
                        y: 35
                    },
                    {
                        opacity: .9,
                        scale: 1,
                        y: 0,
                        duration: 1.8,
                        ease: "power3.out",
                        onComplete: () => {

                            gsap.to(
                                moon,
                                {
                                    y: -12,
                                    rotation: 1,
                                    duration: 7,
                                    repeat: -1,
                                    yoyo: true,
                                    ease:
                                        "sine.inOut"
                                }
                            );
                            gsap.to(
                                moon,
                               {
                                    scale: 1.045,
                                    opacity: 1,
                                    duration: 4.5,
                                    repeat: -1,
                                    yoyo: true,
                                    ease:
                                       "sine.inOut"
                                }
                          );

                        }
                    }
                );

            } else {

                moon.style.opacity =
                    ".9";

            }

        }


        /* ========================================================
           MOON GLOW
        ======================================================== */

        if (moonGlow) {

            if (
                hasGSAP &&
                !reducedMotion
            ) {

                gsap.fromTo(
                    moonGlow,
                    {
                        opacity: 0,
                        scale: .65
                    },
                    {
                        opacity: .85,
                        scale: 1,
                        duration: 2,
                        ease: "power2.out",
                        onComplete: () => {

                            gsap.to(
                                moonGlow,
                                {
                                    opacity: .45,
                                    scale: 1.08,
                                    duration: 5,
                                    repeat: -1,
                                    yoyo: true,
                                    ease:
                                        "sine.inOut"
                                }
                            );

                        }
                    }
                );

            } else {

                moonGlow.style.opacity =
                    ".8";

            }

        }


        /* ========================================================
           CLOUDS
        ======================================================== */

        clouds.forEach(
            (
                cloud,
                index
            ) => {

                if (
                    reducedMotion
                ) {

                    cloud.style.opacity =
                        ".35";

                    return;

                }

                if (
                    hasGSAP
                ) {

                    gsap.fromTo(
                        cloud,
                        {
                            opacity: 0,
                            x:
                                index % 2
                                    ? 20
                                    : -20
                        },
                        {
                            opacity: .4,
                            x: 0,
                            duration: 1.5,
                            delay:
                                .5 +
                                index * .25,
                            ease:
                                "power3.out"
                        }
                    );

                    gsap.to(
                        cloud,
                        {
                            x:
                                index % 2
                                    ? -35
                                    : 35,
                            y:
                                index % 2
                                    ? 10
                                    : -10,
                            duration:
                                14 +
                                index * 2,
                            delay:
                                2 +
                                index * .3,
                            repeat: -1,
                            yoyo: true,
                            ease:
                                "sine.inOut"
                        }
                    );

                } else {

                    cloud.style.opacity =
                        ".4";

                }

            }
        );


        /* ========================================================
           FINAL LINES
        ======================================================== */

        const lines =
            finalScene.querySelectorAll(
                ".final-line"
            );

        if (
            hasGSAP &&
            !reducedMotion
        ) {

            gsap.fromTo(
                lines,
                {
                    opacity: 0,
                    y: 18
                },
                {
                    opacity: 1,
                    y: 0,
                    duration: .75,
                    stagger: .18,
                    delay: .7,
                    ease: "power3.out"
                }
            );

        } else {

            lines.forEach(
                line => {

                    line.style.opacity =
                        "1";

                    line.style.transform =
                        "none";

                }
            );

        }


        /* ========================================================
           BIRTHDAY
        ======================================================== */

        const birthdayText =
            finalScene.querySelector(
                ".final-birthday"
            );

        if (birthdayText) {

            if (
                hasGSAP &&
                !reducedMotion
            ) {

                gsap.fromTo(
                    birthdayText,
                    {
                        opacity: 0,
                        y: 25
                    },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 1,
                        delay: 3.2,
                        ease: "power3.out"
                    }
                );

            } else {

                birthdayText.style.opacity =
                    "1";

                birthdayText.style.transform =
                    "none";

            }

        }


        /* ========================================================
           TITLE
        ======================================================== */

        const title =
            finalScene.querySelector(
                ".final-title"
            );

        if (title) {

            if (
                hasGSAP &&
                !reducedMotion
            ) {

                gsap.fromTo(
                    title,
                    {
                        opacity: 0,
                        y: 40,
                        scale: .9
                    },
                    {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        duration: 1.4,
                        delay: 3.5,
                        ease: "power3.out"
                    }
                );

                gsap.to(
                    title,
                    {
                        y: -5,
                        duration: 4,
                        delay: 5,
                        repeat: -1,
                        yoyo: true,
                        ease:
                            "sine.inOut"
                    }
                );

            } else {

                title.style.opacity =
                    "1";

                title.style.transform =
                    "none";

            }

        }


        /* ========================================================
           FLOWER
        ======================================================== */

        const flower =
            finalScene.querySelector(
                ".final-flower"
            );

        if (flower) {

            if (
                hasGSAP &&
                !reducedMotion
            ) {

                gsap.fromTo(
                    flower,
                    {
                        opacity: 0,
                        scale: .4,
                        rotation: -15
                    },
                    {
                        opacity: 1,
                        scale: 1,
                        rotation: 0,
                        duration: 1,
                        delay: 4.7,
                        ease:
                            "back.out(1.5)"
                    }
                );

            } else {

                flower.style.opacity =
                    "1";

                flower.style.transform =
                    "none";

            }

        }


        /* ========================================================
           SIGNATURE
        ======================================================== */

        const signature =
            finalScene.querySelector(
                ".final-signature-new"
            );

        if (signature) {

            if (
                hasGSAP &&
                !reducedMotion
            ) {

                gsap.fromTo(
                    signature,
                    {
                        opacity: 0,
                        y: 20
                    },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 1,
                        delay: 5.1,
                        ease:
                            "power3.out"
                    }
                );

            } else {

                signature.style.opacity =
                    "1";

                signature.style.transform =
                    "none";

            }

        }


        /* ========================================================
           CLOSING
        ======================================================== */

        const closing =
            finalScene.querySelector(
                ".final-closing"
            );

        if (closing) {

            if (
                hasGSAP &&
                !reducedMotion
            ) {

                gsap.fromTo(
                    closing,
                    {
                        opacity: 0,
                        y: 15
                    },
                    {
                        opacity: 1,
                        y: 0,
                        duration: .9,
                        delay: 5.6,
                        ease:
                            "power3.out"
                    }
                );

            } else {

                closing.style.opacity =
                    "1";

                closing.style.transform =
                    "none";

            }

        }


        /* ========================================================
           REPLAY
        ======================================================== */

        const replay =
            finalScene.querySelector(
                "#restartButton"
            );

        if (replay) {

            if (
                hasGSAP &&
                !reducedMotion
            ) {

                gsap.fromTo(
                    replay,
                    {
                        opacity: 0,
                        y: 20,
                        scale: .9
                    },
                    {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        duration: .9,
                        delay: 6,
                        ease:
                            "back.out(1.5)"
                    }
                );

            } else {

                replay.style.opacity =
                    "1";

                replay.style.transform =
                    "none";

            }

        }

    }


    /* ============================================================
       FINAL SCENE OBSERVER
    ============================================================ */

    if (finalScene) {

        const observer =
            new IntersectionObserver(
                entries => {

                    entries.forEach(
                        entry => {

                            if (
                                entry.isIntersecting &&
                                !document
                                     .querySelector("#finalButton")
                                     ?.classList
                                     .contains("hidden")
                            ) {

                                startFinalAnimation();

                                observer.unobserve(
                                    finalScene
                                );

                            }

                        }
                    );

                },
                {
                    threshold: .12
                }
            );

        observer.observe(
            finalScene
        );


        const checkFinal =
            () => {

                if (
                    finalAnimationStarted
                ) {
                    return;
                }

                const rect =
                    finalScene.getBoundingClientRect();

                if (
                    rect.top <
                    window.innerHeight * .9 &&
                    rect.bottom >
                    window.innerHeight * .1 &&
                    !document
                        .querySelector("#finalButton")
                        ?.classList
                        .contains("hidden")
                ) {

                    startFinalAnimation();

                }

            };

        window.addEventListener(
            "scroll",
            checkFinal,
            {
                passive: true
            }
        );

        setTimeout(
            checkFinal,
            500
        );

    }


    /* ============================================================
       INITIALIZE ALBUM
    ============================================================ */

    updateAlbumSize();

    buildAlbum();


    /* ============================================================
       RESIZE
    ============================================================ */

    let resizeTimer = null;

    window.addEventListener(
        "resize",
        () => {

            clearTimeout(
                resizeTimer
            );

            resizeTimer =
                setTimeout(
                    () => {

                        updateAlbumSize();

                        renderAlbum(
                            false
                        );

                    },
                    200
                );

        }
    );


    /* ============================================================
       BUTTON HOVER
    ============================================================ */

    document
        .querySelectorAll(
            "button"
        )
        .forEach(
            button => {

                button.addEventListener(
                    "mouseenter",
                    () => {

                        if (
                            reducedMotion ||
                            !hasGSAP
                        ) {
                            return;
                        }

                        gsap.to(
                            button,
                            {
                                y: -2,
                                duration: .2,
                                ease:
                                    "power2.out"
                            }
                        );

                    }
                );

                button.addEventListener(
                    "mouseleave",
                    () => {

                        if (
                            !hasGSAP
                        ) {
                            return;
                        }

                        gsap.to(
                            button,
                            {
                                y: 0,
                                duration: .2,
                                ease:
                                    "power2.out"
                            }
                        );

                    }
                );

            }
        );


    /* ============================================================
       PRELOAD PHOTOS
    ============================================================ */

    photoFiles.forEach(
        filename => {

            const image =
                new Image();

            image.src =
                "./images/" +
                filename;

        }
    );


    /* ============================================================
       GLOBAL SAFETY
       ------------------------------------------------------------
       If another script leaves the document locked,
       automatically unlock it whenever the user clicks
       a normal navigation button.
    ============================================================ */

    document
        .querySelectorAll(
            "#openButton, " +
            "#continueButton, " +
            "#memoriesButton, " +
            "#galleryButton, " +
            "#wishesButton, " +
            "#finalButton, " +
            "#restartButton"
        )
        .forEach(
            button => {

                button.addEventListener(
                    "click",
                    () => {

                        if (
                            viewerIsOpen
                        ) {
                            return;
                        }

                        document.documentElement.classList.remove(
                            "viewer-lock"
                        );

                        document.body.classList.remove(
                            "viewer-lock"
                        );

                        document.documentElement.style.overflow =
                            "";

                        document.body.style.overflow =
                            "";

                    },
                    true
                );

            }
        );




    /* ============================================================
       FINAL CONSOLE
    ============================================================ */

    console.log(
        "%c✨ Oindrila Birthday Experience",
        "font-size:18px;font-weight:bold;"
    );

    console.log(
        "%c📸 Album:",
        "font-weight:bold;",
        photoFiles.length,
        "photos"
    );

    console.log(
        "%c✓ effects.js fixed version loaded",
        "color:#e99bc2;font-weight:bold;"
    );

});