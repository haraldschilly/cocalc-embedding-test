$(document).ready(function() {
  console.log("initializing");

  const frame = $("#cocalc").get(0).contentWindow;

  function replies(mesg) {
    const allowed =
      mesg.origin.endsWith(".cocalc.com") ||
      mesg.origin == "https://cocalc.com";
    if (!allowed) return;
    $("#reply").html(JSON.stringify(event.data));
  }

  window.addEventListener("message", replies, false);

  $("button#openme").on("click", function(e) {
    e.preventDefault();
    console.log("sending open message");
    const payload = {
      action: "open",
      project_id: "bc6f81b3-25ad-4d58-ae4a-65649fae4fa5",
      path: "openme.md"
    };
    frame.postMessage(payload, "https://cocalc.com");
    return false;
  });

  $("button#calc").on("click", function(e) {
    e.preventDefault();
    console.log("sending open message");
    const payload = {
      action: "open",
      project_id: "bc6f81b3-25ad-4d58-ae4a-65649fae4fa5",
      path: "calc.ipynb"
    };
    frame.postMessage(payload, "https://cocalc.com");
    return false;
  });

  $("button#closeall").on("click", function(e) {
    e.preventDefault();
    console.log("sending close all message");
    const payload = { action: "closeall" };
    frame.postMessage(payload, "https://cocalc.com");
    return false;
  });

  $("button#error").on("click", function(e) {
    e.preventDefault();
    const payload = { action: "foo-bar" };
    frame.postMessage(payload, "https://cocalc.com");
    return false;
  });

  $("button#status").on("click", function(e) {
    e.preventDefault();
    console.log("sending open message");
    const payload = { action: "status" };
    frame.postMessage(payload, "https://cocalc.com");
    return false;
  });
});
