$(document).ready(function() {
  console.log("initializing");

  function replies(mesg) {
    const allowed =
      mesg.origin.endsWith(".cocalc.com") ||
      mesg.origin == "https://cocalc.com";
    if (!allowed) return;
    $("#reply").html(JSON.stringify(event.data));
  }

  window.addEventListener("message", replies, false);

  $("button#open").on("click", function(e) {
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

  $("button#status").on("click", function(e) {
    e.preventDefault();
    console.log("sending open message");
    payload = {
      action: "status"
    };
    $("#cocalc")
      .get(0)
      .contentWindow.postMessage(payload, "https://cocalc.com");
    return false;
  });
});
