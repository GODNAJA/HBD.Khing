// ⭐ ฟังก์ชันพลุ
function launchFireworks() {

    var duration = 3000;
    var end = Date.now() + duration;

    (function frame() {

        confetti({
            particleCount: 4,
            angle: 60,
            spread: 55,
            origin: { x: 0 }
        });

        confetti({
            particleCount: 4,
            angle: 120,
            spread: 55,
            origin: { x: 1 }
        });

        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }

    })();
}


$(document).ready(function() {

    var flame = $("#flame");
    var txt = $("h1");
    var clickCount = 0; 

    var music = document.getElementById("bg-music");

    flame.on("click", function() {

        clickCount++; 

        // ⭐ เล่นเพลงครั้งแรก
        if (clickCount === 1) {
            music.volume = 0.01;
            music.play().catch(() => {});
        }

        if (clickCount === 1) {

            flame.removeClass("burn").addClass("puff");
            $("#glow").hide();
            txt.hide().html("สุขสันต์วันเกิดนะคุณแฟน 🎉🎉").fadeIn(300, function() {
                flame.removeClass("puff").addClass("burn").fadeIn(300);
                $("#glow").show();
            });

        } else if (clickCount === 2) {

            flame.removeClass("burn").addClass("puff");
            $("#glow").hide();
            txt.hide().html("โตขึ้นอีกปีแล้วน้าาาคนสวยย").fadeIn(300, function() {
                flame.removeClass("puff").addClass("burn").fadeIn(300);
                $("#glow").show();
            });

        } else if (clickCount === 3) {

            flame.removeClass("burn").addClass("puff");
            $("#glow").hide();
            txt.hide().html("รักเธออ ที่สุดด เยยยยย").fadeIn(300, function() {
                flame.removeClass("puff").addClass("burn").fadeIn(300);
                $("#glow").show();
            });

        } else if (clickCount === 4) {

            flame.removeClass("burn").addClass("puff");
            $("#glow").hide();
            txt.hide().html("วันเกิดปีนี้ขอให้เธอไม่ดื้อกับเค้า").fadeIn(300, function() {
                flame.removeClass("puff").addClass("burn").fadeIn(300);
                $("#glow").show();
            });

        } else if (clickCount === 5) {

            flame.removeClass("burn").addClass("puff");
            $("#glow").hide();
            txt.hide().html("ขอให้เค้าได้อวยพรวันเกิดในทุกๆปีจนกว่าเธอจะมีฟันปลอม").fadeIn(300, function() {
                flame.removeClass("puff").addClass("burn").fadeIn(300);
                $("#glow").show();
            });

        } else if (clickCount === 6) {

            flame.removeClass("burn").addClass("puff");
            $("#glow").hide();
            txt.hide().html("ขอให้เธออออ้วนๆด้วยนะ เธอจะได้แข็งแรง").fadeIn(300, function() {
                flame.removeClass("puff").addClass("burn").fadeIn(300);
                $("#glow").show();
            });

        } else if (clickCount === 7) {

            flame.removeClass("burn").addClass("puff");
            $("#glow").hide();
            txt.hide().html("วันเกิดขิงปีนี้ ขอให้... 🌕").fadeIn(300, function() {
                flame.removeClass("puff").addClass("burn").fadeIn(300);
                $("#glow").show();
            });

        } else if (clickCount === 8) {

            flame.removeClass("burn").addClass("puff");
            $("#glow").hide();
            txt.hide().html("ขอให้ขิงไม่ปวดท้อง").fadeIn(300, function() {
                flame.removeClass("puff").addClass("burn").fadeIn(300);
                $("#glow").show();
            });

        } else if (clickCount === 9) {

            flame.removeClass("burn").addClass("puff");
            $("#glow").hide();
            txt.hide().html("ขอให้ขิงไม่ปวดหลัง").fadeIn(300, function() {
                flame.removeClass("puff").addClass("burn").fadeIn(300);
                $("#glow").show();
            });

        } else if (clickCount === 10) {

            flame.removeClass("burn").addClass("puff");
            $("#glow").hide();
            txt.hide().html("ขอให้ขิงสวยขึ้น ตอนนี้ก็สวยที่สุดในโลกแล้วและในใจ❤️❤️").fadeIn(300, function() {
                flame.removeClass("puff").addClass("burn").fadeIn(300);
                $("#glow").show();
            });

        } else if (clickCount === 11) {

            flame.removeClass("burn").addClass("puff");
            $("#glow").hide();
            txt.hide().html("ขอให้ขิงไม่ไปรักคนอื่นนะ").fadeIn(300, function() {
                flame.removeClass("puff").addClass("burn").fadeIn(300);
                $("#glow").show();
            });

        } else {

            flame.removeClass("burn").addClass("puff");

            $(".smoke").each(function() {
                $(this).addClass("puff-bubble");
            });

            $("#glow").remove();

            txt.hide()
                .html("ขอให้ขิงมีความสุขมากๆนะ และอยู่กับเค้านานๆนะคุณแฟน")
                .delay(750)
                .fadeIn(300);

            $("#candle").animate({
                opacity: 0.5
            }, 100);

            // ⭐ พลุตอนจบ
            launchFireworks();
            setTimeout(function() {

                txt.fadeOut(300, function() {
                    txt.html("ขอบคุณที่เกิดมาใช้ความน่ารักนะ เธอน่ารักที่สุดเลย 💖")
                    .fadeIn(500);
            });

            }, 3200);
        }

    });

});
