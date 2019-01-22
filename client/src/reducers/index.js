import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import profileReducer from "./profileReducer";
import mapReducer from "./mapReducer";
import playerReducer from "../components/player/reducer";

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  profile: profileReducer,
  map: mapReducer,
  player: playerReducer
});
