$(document).ready(init);

function init() {
  console.log("initializing");

  const frame = $("#cocalc").get(0).contentWindow;
  const target = "https://cocalc-test.schil.ly";
  const proj1 = "c37fbd83-c4c3-4f92-b66c-37b8d2c8cdf1";
  const proj2 = "b7f8f31d-16f4-486a-989b-4e64b90f304b";

  function replies(mesg) {
    const allowed =
      mesg.origin.endsWith("cocalc-test.schil.ly") || mesg.origin == target;
    if (!allowed) return;
    $("#reply").html(JSON.stringify(event.data));
  }

  window.addEventListener("message", replies, false);

  $("button#openme").on("click", function(e) {
    e.preventDefault();
    const payload = {
      action: "open",
      project_id: proj1,
      path: "iframe-comm-test.md"
    };
    frame.postMessage(payload, target);
    return false;
  });

  $("button#calc").on("click", function(e) {
    e.preventDefault();
    const payload = {
      action: "open",
      project_id: proj1,
      path: "iframe-comm-nb.ipynb"
    };
    frame.postMessage(payload, target);
    return false;
  });

  $("button#other").on("click", function(e) {
    e.preventDefault();
    const payload = {
      action: "open",
      project_id: proj2,
      path: "iframe-comm-test.md"
    };
    frame.postMessage(payload, target);
    return false;
  });

  $("button#latex").on("click", function(e) {
    e.preventDefault();
    const payload = {
      action: "open",
      project_id: proj2,
      path: "latex/iframe-comm.tex"
    };
    frame.postMessage(payload, target);
    return false;
  });

  $("button#closeall").on("click", function(e) {
    e.preventDefault();
    frame.postMessage({ action: "closeall" }, target);
    return false;
  });


  $("button#status").on("click", function(e) {
    e.preventDefault();
    frame.postMessage({ action: "status" }, target);
    return false;
  });
}
