const swap_header = () => {
  inactive_element = document.getElementsByClassName("hide")[0];
  active_element = document.getElementsByClassName("show")[0];

  inactive_element.classList.remove("hide");
  inactive_element.classList.add("show");

  active_element.classList.add("hide");
  active_element.classList.remove("show");

  swap_container();
};

const swap_container = () => {
  inactive_container = document.getElementsByClassName("hide")[1];
  active_container = document.getElementsByClassName("show")[1];

  inactive_container.classList.remove("hide");
  inactive_container.classList.add("show");

  active_container.classList.add("hide");
  active_container.classList.remove("show");
};

const reveal = () => {
  let down_container;
  if (document.getElementsByClassName("down")[0]) {
    down_container = document.getElementsByClassName("down")[0];
    down_container.classList.remove("down");
  }

  if (!document.getElementsByClassName("down")[0]) {
    document.getElementsByClassName("view-more")[0].classList.add("hide");
  }
};
