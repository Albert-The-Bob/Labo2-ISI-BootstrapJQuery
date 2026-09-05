$(function () {

    var jauge;
    let jaugeVal = 5;

    $("#jaugeDecr").click(async function (event) {
        if (jaugeVal > 0) {
            jaugeVal = jaugeVal - 1;
            jauge.refresh(jaugeVal);
            $('.progressbar').css('width', jaugeVal + '0%');
        } else {
            $(".overflow-msg-text").html("Minimum is 0. Cannot go below!");
            $(".overflow-msg").removeClass("hide");
            await delay(2000);
            $(".overflow-msg").addClass("hide");
        }
    });

    $("#jaugeIncr").click(async function (event) {
        if (jaugeVal < 10) {
            jaugeVal = jaugeVal + 1;
            jauge.refresh(jaugeVal);
            $('.progressbar').css('width', jaugeVal + '0%');
        } else {
            $(".overflow-msg-text").html("Maximum is 10. Cannot go above!");
            $(".overflow-msg").removeClass("hide");
            await delay(2000);
            $(".overflow-msg").addClass("hide");
        }
    });

    /*
     * Code from https://jsfiddle.net/2tavp61e/
     * Purpose: Delay that can be use with asyncronous functions
     *          We use promise to get the futur value of the callback functio
     */
    function delay(miliseconds) {
        return new Promise((resolve) => {
            window.setTimeout(() => {
                resolve();
            }, miliseconds);
        });
    }

    $('.menurepas').dropdown();

    jauge = new JustGage({
        id: "jauge",
        value: jaugeVal,
        min: 0,
        max: 10,
        startAnimationTime: 0
    });

    $('.btn').popover({
        placement: 'right',
        trigger: 'hover'
    });

    $('.sponsorPopup').popover({
        placement: 'right',
        trigger: 'hover'
    });

});

