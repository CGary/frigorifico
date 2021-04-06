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

export {
  eventEmitter,
  loadEvent,
  getDateUTCToLocalShort,
  get2Digitos,
  getDateLocalToUTC,
  getesESfromDate,
  errorPeticion,
  msgEliminar,
};
