console.log("js loaded");
$(document).ready(function() {
  console.log("document ready");
  $("button.open").on("click", function(e) {
    e.preventDefault();
    console.log("sending open message");
    payload = {
      action: "open",
      project_id: "bc6f81b3-25ad-4d58-ae4a-65649fae4fa5",
      path: "openme.md"
    };
    $("#cocalc")
      .get(0)
      .contentWindow.postMessage(payload, "https://cocalc.com");
    return false;
  });
});
