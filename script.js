const versesText = document.querySelector(".versesText")
let versesSplitArry = versesText.innerText.split(" ")
const versesLength = versesText.innerText.split(" ").length


function prepareText() {
    versesText.innerText = ' ';
    versesSplitArry.forEach((word, id) => {
        const text = document.createTextNode(`${word} `);
        const span = document.createElement("span");
        if (word.includes('BR')) {
            const br = document.createElement("br");
            versesText.appendChild(br);
        } else {
            span.setAttribute('class', 'anotationColor');
            versesText.appendChild(span)
            span.appendChild(text)
        }
    });
}


function colorText() {
    prepareText();
    const anotationColor = document.querySelectorAll('.anotationColor');
    const colors = {
        bBlue: [11, 20, 21, 24, 26, 36, 41, 44, 52, 74, 87, 97, 105, 107, 108, 109, 110, 112, 121, 133, 136, 138, 143, 151],
        blue: [142, 149, 159, 162, 173, 175],
        red: [5, 19, 22, 170],
        green: [47, 56, 78],
        dGreen: [106, 115, 128, 137, 144, 146, 147, 160],
        purple: [15, 23, 38, 127, 129, 145, 161],
        dPurple: [150, 152, 155, 156, 164, 167, 168, 172, 174],
        orange: [46, 55, 62, 66, 76, 77, 81, 82, 88, 89, 98, 99, 119, 120, 126, 135, 139, 141, 154, 158, 170, 176],
        grey: [58, 104, 114],
        dPink: [86, 92],
        yello: [101, 90],
        customValue: [6, 13, 32, 34, 63, 67, 131, 140, 179]
    };

    anotationColor.forEach((word, index) => {
        setTimeout(() => {
            Object.entries(colors).forEach(([color, indexes]) => {
                if (indexes.includes(index)) {
                    if (color === 'customValue') {
                        switch (index) {
                            case 6:
                                word.style.background = "linear-gradient(90deg, rgba(208,1,207,1) 51%, rgba(45,244,253,1) 52%)";
                                break;
                            case 13:
                                word.style.background = "linear-gradient(90deg, rgba(228,9,11,1) 46%, rgba(248,1,255,1) 46%, rgba(248,1,255,1) 70%, rgba(6,251,251,1) 70%)";
                                break;
                            case 32:
                                word.style.background = "linear-gradient(90deg, rgba(6,251,251,1) 22%, rgba(253,0,3,1) 22%)";
                                break;
                            case 34:
                                word.style.background = "linear-gradient(90deg, rgba(195,12,204,1) 60%, rgba(6,251,251,1) 60%)";
                                break;
                            case 63:
                                word.style.background = "linear-gradient(90deg, rgba(155,153,155,1) 58%, rgba(6,251,251,1) 58%)";
                                break;
                            case 67:
                                word.style.background = "linear-gradient(90deg, rgba(252,150,2,1) 41%, rgba(1,255,1,1) 41%)";
                                break;
                            case 131:
                                word.style.background = "linear-gradient(90deg, rgba(252,150,2,1) 58%, rgba(0,235,234,1) 58%)";
                                break;
                            case 140:
                                word.style.background = "linear-gradient(90deg, rgba(55,107,25,1) 48%, rgba(229,2,233,1) 48%)";
                                break;
                            case 179:
                                word.style.background = "linear-gradient(90deg, rgba(255,0,3,1) 50%, rgba(246,146,0,1) 50%, rgba(246,146,0,1) 50%, rgba(246,146,0,1) 76%, rgba(255,255,255,0) 76%)";
                                break;
                        }
                    } else {
                        word.style.background = getColorStyle(color);
                    }
                }
            });
        }, index * 220);


    });

    setTimeout(() => {
        colorText();
    }, 50000);

};

function getColorStyle(color) {
    switch (color) {
        case 'bBlue':
            return "rgb(0,253,255)";
        case 'blue':
            return "rgb(0,1,207)";
        case 'red':
            return "rgb(253,1,1)";
        case 'green':
            return "rgb(2,253,2)";
        case 'purple':
            return "rgb(208,1,207)";
        case 'orange':
            return "rgb(254,151,1)";
        case 'dPurple':
            return "rgb(129,0,210)";
        case 'grey':
            return "rgb(152,151,152)";
        case 'dPink':
            return "rgb(171,78,121)";
        case 'yello':
            return "rgb(255,254,3)";
        case 'dGreen':
            return "rgb(51,110,33)";
        default:
            return "";
    };

};


colorText();



function animateText() {
    return new Promise((resolve) => {
        let animationsCompleted = 0;
        versesSplitArry.forEach((word) => {
            if (word.id == '1') {
                word.style.background = "blue";
            } else {
                spwordan.style.background = "red";
            }
            animationsCompleted++;
            if (animationsCompleted === word.length) {
                resolve();
            }
        })
    })
}






document.addEventListener('DOMContentLoaded', function () {
    // Get the scroll-element
    var scrollElement = document.querySelector('.title');
    var imageGap = document.querySelector('.imgGap');
    var albums = document.querySelector('.albumGrid');
    var disk = document.querySelector('.disk');
    var proiectInfoHeight = document.querySelector('.proiectInfo').offsetHeight; // Height of the proiectInfo section

    // Listen for the scroll event
    window.addEventListener('scroll', function () {
        // Calculate the scale based on the scroll position

        var scale = -100 + (window.scrollY - proiectInfoHeight) / 10; // Adjusted the scroll position for the new section
        var size = ((window.scrollY - proiectInfoHeight) / 1000) * 2; // Adjusted the scroll position for the new section

        // Apply the scale transformation
        if (window.scrollY > 930) {
            if (window.scrollY < proiectInfoHeight + 1000) { // Adjusted the scroll position for the new section
                scrollElement.style.transform = `translateX(${scale}vw)`;
                if (window.innerWidth > 801) {
                    imageGap.style.margin = `0 ${-scale}vw`;
                    disk.style.transform = `translate(-50%, ${-60 + (window.scrollY - proiectInfoHeight) / 10}%)`;
                    if (scale < -25) {
                        albums.style.transform = `translateY(-25vh) scale(${3 - size})`;
                    } else {
                        albums.style.transform = `translateY(${scale}vh) scale(${3 - size})`;
                    }
                }
            } else {
                scrollElement.style.transform = `translateX(-2vw)`;
            }
        }
    });
});








const cursorCont = document.querySelector(".imgGap");
const cursorP = document.querySelector(".cursorP");
const cursorS = document.querySelector(".cursorS");
const dot = document.querySelector(".cursor-dot");
const dotOut = document.querySelector(".cursor-dot-outline");
cursorCont.addEventListener("click", () => {
    cursorP.classList.toggle("hidden");
    cursorS.classList.toggle("hidden");
    dot.classList.toggle("hidden");
    dotOut.classList.toggle("hidden");
});







const cursor = {
    delay: 8,
    _x: 0,
    _y: 0,
    endX: (window.innerWidth / 2),
    endY: (window.innerHeight / 2),
    cursorVisible: true,
    cursorEnlarged: false,
    $dot: document.querySelector('.cursor-dot'),
    $outline: document.querySelector('.cursor-dot-outline'),
    $disk: document.querySelector('.cursorS'),

    init: function () {
        // Set up element sizes
        this.dotSize = this.$dot.offsetWidth;
        this.outlineSize = this.$outline.offsetWidth;

        this.setupEventListeners();
        this.animateDotOutline();
    },

    setupEventListeners: function () {
        var self = this;

        // Anchor hovering
        document.querySelectorAll('img').forEach(function (el) {
            el.addEventListener('mouseover', function () {
                self.cursorEnlarged = true;
                self.toggleCursorSize();
            });
            el.addEventListener('mouseout', function () {
                self.cursorEnlarged = false;
                self.toggleCursorSize();
            });
        });


        document.querySelector('.titleGradient').addEventListener('mouseover', function () {
            self.cursorEnlarged = true;
            self.toggleCursorSize();
        });
        document.querySelector('.titleGradient').addEventListener('mouseout', function () {
            self.cursorEnlarged = false;
            self.toggleCursorSize();
        });


        // Click events
        document.addEventListener('mousedown', function () {
            self.cursorEnlarged = true;
            self.toggleCursorSize();
        });
        document.addEventListener('mouseup', function () {
            self.cursorEnlarged = false;
            self.toggleCursorSize();
        });


        document.addEventListener('mousemove', function (e) {
            // Show the cursor
            self.cursorVisible = true;
            self.toggleCursorVisibility();

            // Position the dot
            self.endX = e.pageX;
            self.endY = e.pageY;
            self.$dot.style.top = self.endY + 'px';
            self.$dot.style.left = self.endX + 'px';

            cursor.$disk.style.top = (cursor.endY - cursor.$disk.offsetHeight / 2) + 'px';
            cursor.$disk.style.left = (cursor.endX - cursor.$disk.offsetWidth / 2) + 'px';
        });

        // Hide/show cursor
        document.addEventListener('mouseenter', function (e) {
            self.cursorVisible = true;
            self.toggleCursorVisibility();
            self.$dot.style.opacity = 1;
            self.$outline.style.opacity = 1;
        });

        document.addEventListener('mouseleave', function (e) {
            self.cursorVisible = true;
            self.toggleCursorVisibility();
            self.$dot.style.opacity = 0;
            self.$outline.style.opacity = 0;
        });
    },

    animateDotOutline: function () {
        var self = this;

        self._x += (self.endX - self._x) / self.delay;
        self._y += (self.endY - self._y) / self.delay;
        self.$outline.style.top = self._y + 'px';
        self.$outline.style.left = self._x + 'px';

        requestAnimationFrame(this.animateDotOutline.bind(self));
    },

    toggleCursorSize: function () {
        var self = this;

        if (self.cursorEnlarged) {
            self.$dot.style.transform = 'translate(-50%, -50%) scale(0.75)';
            self.$outline.style.transform = 'translate(-50%, -50%) scale(1.5)';
        } else {
            self.$dot.style.transform = 'translate(-50%, -50%) scale(1)';
            self.$outline.style.transform = 'translate(-50%, -50%) scale(1)';
        }
    },

    toggleCursorVisibility: function () {
        var self = this;

        if (self.cursorVisible) {
            self.$dot.style.opacity = 1;
            self.$outline.style.opacity = 1;
        } else {
            self.$dot.style.opacity = 0;
            self.$outline.style.opacity = 0;
        }
    }
}

cursor.init();


