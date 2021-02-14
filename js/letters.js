// Wait for page to load to get accurate width reading
window.scrollBy(0,1);
addEventListener("load", function () {

    // Turn back on visibility of #namePlateWrapper <span>
    document.getElementById('namePlateWrapper').style.visibility = "visible";

    // Wrap every character code between x00 and x80, any letter, and periods in a span
    $('.heading .letters').each(function(){
      $(this).html($(this).text().replace(/([^\x00-\x80]|\w|\.)/g, "<span class='letter'>$&</span>"));
    });

    anime.timeline({loop: false}) // single loop
      .add({
        targets: '.heading .line',
        scaleY: [0,1],
        opacity: [0.5,1],
        easing: "easeOutExpo",
        duration: 1000
      })
      .add({
        targets: '.heading .line',
        translateX: [0, document.getElementById('namePlateWrapper').offsetWidth + 10],
        easing: "easeOutExpo",
        duration: 700,
        delay: 200
      }).add({
        targets: '.heading .letter',
        opacity: [0,1],
        easing: "easeOutExpo",
        duration: 600,
        offset: '-=775',
        delay: function(el, i) {
          return 50 * (i+1)
        }
      })
      .add({
        targets: '.heading .line',
        opacity: 0,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 1000
      })
      ;
})
;
