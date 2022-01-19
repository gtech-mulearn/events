const swap_header = () => {
  inactive_element = document.getElementsByClassName("hide")[0];
  active_element = document.getElementsByClassName("show")[0];

  inactive_element.classList.remove("hide");
  inactive_element.classList.add("show");

  active_element.classList.add("hide");
  active_element.classList.remove("show");
};
