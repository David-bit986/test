define(['https://unpkg.com/rough-notation?module'], function (annotate) {
    const a1 = annotate(document.querySelector('#e1'), { type: 'underline' });
    const a2 = annotate(document.querySelector('#e3'), { type: 'box' });
    const a3 = annotate(document.querySelector('#e2'), { type: 'circle' });

    const ag = annotationGroup([a3, a1, a2]);
    ag.show();
});





document.addEventListener('DOMContentLoaded', function () {
    // Get the scroll-element
    var scrollElement = document.querySelector('.title');
    var imageGap = document.querySelector('.imgGap');
    var albums = document.querySelector('.albumGrid');
    var disk = document.querySelector('.disk');
    var divElement = document.querySelector(".gallery");
    var photos = document.querySelectorAll(".border");
    // Listen for the scroll event
    window.addEventListener('scroll', function () {
        // Calculate the scale based on the scroll position

        var scale = -100 + window.scrollY / 10; // Adjust the divisor to control the sensitivity
        var size = (window.scrollY / 1000) * 2

        // Apply the scale transformation

        if (window.scrollY < 1000) {
            scrollElement.style.transform = `translateX(${scale}vw)`;
            if (window.innerWidth > 801) {
                imageGap.style.margin = `0 ${-scale}vw`;
                disk.style.transform = `translate(-50%, ${-60 + window.scrollY / 10}%)`;
                if (scale < -25) {
                    albums.style.transform = `translateY(-25vh) scale(${3 - size})`;
                } else {
                    albums.style.transform = `translateY(${scale}vh) scale(${3 - size})`;
                }
            }
        } else {
            scrollElement.style.transform = `translateX(-2vw)`;
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
        document.querySelectorAll('a').forEach(function (el) {
            el.addEventListener('mouseover', function () {
                self.cursorEnlarged = true;
                self.toggleCursorSize();
            });
            el.addEventListener('mouseout', function () {
                self.cursorEnlarged = false;
                self.toggleCursorSize();
            });
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


