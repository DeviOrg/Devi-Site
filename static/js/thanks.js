(function () {
    "use strict";

    var fx = document.getElementById("thanks-fx");
    var badge = document.getElementById("thanks-badge");
    if (!fx) { return; }

    var reduced = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) { return; }

    var COLORS = ["", "gold", "cyan", "violet", "white"];

    function rand(min, max) {
        return min + Math.random() * (max - min);
    }

    function pick(list) {
        return list[Math.floor(Math.random() * list.length)];
    }

    function burst(x, y, count) {
        var width = fx.clientWidth || window.innerWidth;
        var reach = Math.min(width, 900) * 0.55;
        var fragment = document.createDocumentFragment();

        for (var i = 0; i < count; i += 1) {
            var piece = document.createElement("span");
            var color = pick(COLORS);
            var angle = rand(0, Math.PI * 2);
            var distance = rand(reach * 0.35, reach);

            piece.className = "thanks__piece" + (color ? " thanks__piece--" + color : "");
            piece.style.setProperty("--ox", x + "%");
            piece.style.setProperty("--oy", y + "%");
            piece.style.setProperty("--dx", Math.round(Math.cos(angle) * distance) + "px");
            piece.style.setProperty("--dy", Math.round(Math.sin(angle) * distance + rand(40, 160)) + "px");
            piece.style.setProperty("--rot", Math.round(rand(-720, 720)) + "deg");
            piece.style.setProperty("--w", Math.round(rand(6, 11)) + "px");
            piece.style.setProperty("--h", Math.round(rand(8, 16)) + "px");
            piece.style.setProperty("--r", Math.random() < 0.35 ? "50%" : "2px");
            piece.style.setProperty("--dur", rand(1.4, 2.4).toFixed(2) + "s");
            piece.style.setProperty("--delay", rand(0, 0.25).toFixed(2) + "s");
            piece.addEventListener("animationend", function (event) {
                event.target.remove();
            });
            fragment.appendChild(piece);
        }
        fx.appendChild(fragment);
    }

    function sparkles(count) {
        var kinds = ["", "accent", "cyan"];
        var fragment = document.createDocumentFragment();

        for (var i = 0; i < count; i += 1) {
            var spark = document.createElement("span");
            var kind = pick(kinds);

            spark.className = "thanks__spark" + (kind ? " thanks__spark--" + kind : "");
            spark.style.setProperty("--x", rand(2, 96).toFixed(1) + "%");
            spark.style.setProperty("--y", rand(4, 94).toFixed(1) + "%");
            spark.style.setProperty("--s", Math.round(rand(9, 22)) + "px");
            spark.style.setProperty("--dur", rand(2.6, 5).toFixed(2) + "s");
            spark.style.setProperty("--delay", rand(0, 4).toFixed(2) + "s");
            fragment.appendChild(spark);
        }
        fx.appendChild(fragment);
    }

    sparkles(18);
    g.
    window.setTimeout(function () { burst(50, 36, 70); }, 650);
    window.setTimeout(function () { burst(22, 30, 26); burst(78, 30, 26); }, 1000);

    if (badge) {
        badge.addEventListener("click", function () { burst(50, 36, 50); });
    }
})();