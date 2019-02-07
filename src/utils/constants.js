import { Platform } from "react-native";

export const BaseUrl = {
  departments:
    Platform.OS === "android"
      ? "http://10.0.2.2:5000/departments"
      : "http://localhost:5000/departments"
};
