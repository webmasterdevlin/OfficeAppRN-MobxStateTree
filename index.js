import { AppRegistry } from "react-native";
import { name as appName } from "./app.json";
import RouterWrapper from "./RouterWrapper";

AppRegistry.registerComponent(appName, () => RouterWrapper);
