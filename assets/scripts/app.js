const Portfolio = (function () {
  function makeWords() {
    var words = [
      {
        text: "CGPA 8.2",
        weight: 8.3,
      },
      {
        text: "Kurukshetra",
        weight: 8.3,
      },
      {
        text: "Driven",
        weight: 9,
      },
      {
        text: "ReactJS",
        weight: 8,
      },
      {
        text: "AWS",
        weight: 8,
      },
      {
        text: "12th-90.2%",
        weight: 8,
      },
      {
        text: "programming",
        weight: 7,
      },
      {
        text: "python",
        weight: 8,
      },
      {
        text: "Meticulous",
        weight: 9,
      },
      {
        text: "Divyanshu",
        weight: 10,
      },
      {
        text: "Reliable",
        weight: 9,
      },
    ];
    return words;
  }

  function makeWordCloud(words) {
    $(".teaching-domains").jQCloud(words, { delay: 500 });
  }

  function displayWordCloud() {
    var count = 1;
    $(window).on("scroll", function () {
      var y_scroll_pos = window.pageYOffset;
      var scroll_pos_test = 3700; // set to whatever you want it to be
      var words = makeWords();
      if (y_scroll_pos > scroll_pos_test && count <= 1) {
        makeWordCloud(words);
        count++;
      }
    });
  }

  function designForm() {
    $("#my-modal form").addClass("my-form");
  }

  function typeAnimation() {
    Typed.new("#writing-text", {
      strings: [
        "am a Web Developer.",
        "love everything about code.",
        // "need industry knowledge and experience.",
        "am driven, meticulous and reliable.",
        "solve problems.",
      ],
      // Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
      stringsElement: null,
      // typing speed
      typeSpeed: 2,
      contentType: "text",
      callback: function () {
        $("#writing-text").css({
          color: "#fff",
          "background-color": "#C8412B",
        });
      },
      preStringTyped: function () {},
      onStringTyped: function () {},
    });
  }

  return {
    displayWordCloud: displayWordCloud,
    typeAnimation: typeAnimation,
  };
})();

Portfolio.displayWordCloud();
Portfolio.typeAnimation();
