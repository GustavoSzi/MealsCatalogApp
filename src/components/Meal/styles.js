import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  generalContainer: {
    width: "85%",
    alignSelf: "center",
    backgroundColor: "#ddd",
    marginBottom: 24,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    overflow: "hidden",
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
  container: {
    width: "100%",
    height: 300,
  },
  image: {
    flex: 1,
    height: "100%",
    justifyContent: "flex-end",
  },
  details: {
    padding: 12,
  },
  title: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    backgroundColor: "rgba(0,0,0,0.5)",
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  detailsText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "rgba(0,0,0,0.7)",
  },
});

export default styles;
