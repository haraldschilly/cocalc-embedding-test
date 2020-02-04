$(document).ready(init);

function init() {
  console.log("initializing");

  const frame = $("#cocalc").get(0).contentWindow;
  const target = "https://cocalc.com";
  const proj1 = "20e4a191-73ea-4921-80e9-0a5d792fc511";
  const proj2 = "4a5f0542-5873-4eed-a85c-a18c706e8bcd";

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
