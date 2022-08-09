import { modalBtn, modal, modalInputs } from "./elems.js";
import { modalController } from "./modalController.js";
import { previewController } from "./previewController.js";

modalController({
  modal,
  btn: modalBtn,
  classOpen: "d-block",
  classClose: "btn-close",
  inputs: modalInputs,
});

previewController();
