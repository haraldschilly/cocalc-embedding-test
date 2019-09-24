$(document).ready(function() {
  init();
});

function init() {
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
    const payload = {
      action: "open",
      project_id: "bc6f81b3-25ad-4d58-ae4a-65649fae4fa5",
      path: "calc.ipynb"
    };
    frame.postMessage(payload, "https://cocalc.com");
    return false;
  });

  $("button#other").on("click", function(e) {
    e.preventDefault();
    const payload = {
      action: "open",
      project_id: "e24ba30d-edcd-479f-8a26-bbe81f38296c",
      path: "other.md"
    };
    frame.postMessage(payload, "https://cocalc.com");
    return false;
  });

  $("button#latex").on("click", function(e) {
    e.preventDefault();
    const payload = {
      action: "open",
      project_id: "e24ba30d-edcd-479f-8a26-bbe81f38296c",
      path: "latex/document.tex"
    };
    frame.postMessage(payload, "https://cocalc.com");
    return false;
  });

  $("button#closeall").on("click", function(e) {
    e.preventDefault();
    frame.postMessage({ action: "closeall" }, "https://cocalc.com");
    return false;
  });

  $("button#unknown").on("click", function(e) {
    e.preventDefault();
    frame.postMessage({ action: "foo-bar" }, "https://cocalc.com");
    return false;
  });

  $("button#missing").on("click", function(e) {
    e.preventDefault();
    frame.postMessage({}, "https://cocalc.com");
    return false;
  });

  $("button#none").on("click", function(e) {
    e.preventDefault();
    frame.postMessage(null, "https://cocalc.com");
    return false;
  });

  $("button#string").on("click", function(e) {
    e.preventDefault();
    frame.postMessage("{'action': 'foo'}", "https://cocalc.com");
    return false;
  });

  $("button#path").on("click", function(e) {
    e.preventDefault();
    const payload = {
      action: "open",
      project_id: "bc6f81b3-25ad-4d58-ae4a-65649fae4fa5",
      path: { wrong: "path" }
    };
    frame.postMessage(payload, "https://cocalc.com");
    return false;
  });

  $("button#projectid").on("click", function(e) {
    e.preventDefault();
    const payload = {
      action: "open",
      project_id: "foo-bar",
      path: "bar"
    };
    frame.postMessage(payload, "https://cocalc.com");
    return false;
  });

  $("button#status").on("click", function(e) {
    e.preventDefault();
    frame.postMessage({ action: "status" }, "https://cocalc.com");
    return false;
  });
}
