$(document).ready(function() {
  init();
});

function init() {
  console.log("initializing");

  const frame = $("#cocalc").get(0).contentWindow;
  const target = "https://test.cocalc.com";
  const proj1 = "c37fbd83-c4c3-4f92-b66c-37b8d2c8cdf1";
  const proj2 = "b7f8f31d-16f4-486a-989b-4e64b90f304b";

  function replies(mesg) {
    const allowed =
      mesg.origin.endsWith(".cocalc.com") || mesg.origin == target;
    if (!allowed) return;
    $("#reply").html(JSON.stringify(event.data));
  }

  window.addEventListener("message", replies, false);

  $("button#openme").on("click", function(e) {
    e.preventDefault();
    const payload = {
      action: "open",
      project_id: proj1,
      path: "openme.md"
    };
    frame.postMessage(payload, target);
    return false;
  });

  $("button#calc").on("click", function(e) {
    e.preventDefault();
    const payload = {
      action: "open",
      project_id: proj1,
      path: "calc.ipynb"
    };
    frame.postMessage(payload, target);
    return false;
  });

  $("button#other").on("click", function(e) {
    e.preventDefault();
    const payload = {
      action: "open",
      project_id: proj2,
      path: "other.md"
    };
    frame.postMessage(payload, target);
    return false;
  });

  $("button#latex").on("click", function(e) {
    e.preventDefault();
    const payload = {
      action: "open",
      project_id: proj2,
      path: "latex/document.tex"
    };
    frame.postMessage(payload, target);
    return false;
  });

  $("button#closeall").on("click", function(e) {
    e.preventDefault();
    frame.postMessage({ action: "closeall" }, target);
    return false;
  });

  $("button#unknown").on("click", function(e) {
    e.preventDefault();
    frame.postMessage({ action: "foo-bar" }, target);
    return false;
  });

  $("button#missing").on("click", function(e) {
    e.preventDefault();
    frame.postMessage({}, target);
    return false;
  });

  $("button#none").on("click", function(e) {
    e.preventDefault();
    frame.postMessage(null, target);
    return false;
  });

  $("button#string").on("click", function(e) {
    e.preventDefault();
    frame.postMessage("{'action': 'foo'}", target);
    return false;
  });

  $("button#path").on("click", function(e) {
    e.preventDefault();
    const payload = {
      action: "open",
      project_id: proj1,
      path: { wrong: "path" }
    };
    frame.postMessage(payload, target);
    return false;
  });

  $("button#projectid").on("click", function(e) {
    e.preventDefault();
    const payload = {
      action: "open",
      project_id: "foo-bar",
      path: "bar"
    };
    frame.postMessage(payload, target);
    return false;
  });

  $("button#status").on("click", function(e) {
    e.preventDefault();
    frame.postMessage({ action: "status" }, target);
    return false;
  });
}
