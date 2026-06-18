let warning = prompt("This website is old and not updated. Are you sure you want to access this page?")
if (warning == "y" || warning == "yes") {
  alert("You have been warned.");
} else {
  location.replace("//miskshatesnumberblocks.github.io");
}
