import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 12,
  },
  stepNum: {
    width: "10%",
    borderRightWidth: 1,
    borderRightColor: "#333",
    borderBottomColor: "#333",
    height: "100%",
    justifyContent: "center",
  },
  stepDesc: {
    width: "85%",
  },
  stepNumText: {
    textAlign: "center",
  },
});

export default styles;
