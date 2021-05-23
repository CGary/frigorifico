import eventEmitter from "./eventEmitter";
import {
  getDateUTCToLocalShort,
  get2Digitos,
  getDateLocalToUTC,
  getesESfromDate,
} from "./formatDate";
import { errorPeticion, msgEliminar } from "./msg";

//constants
const loadEvent = "loadEvent";
const changeNavEvent = "changeNavEvent";

export {
  eventEmitter,
  loadEvent,
  changeNavEvent,
  getDateUTCToLocalShort,
  get2Digitos,
  getDateLocalToUTC,
  getesESfromDate,
  errorPeticion,
  msgEliminar,
};
