if (document.location.href.indexOf("&dest") === -1 && document.location.href.indexOf("source=") > -1) {
  document.location.href += "&dest=medmen/mymedmen-python::development";
} else {
  alert("Don't forget to run your tests!");
}

