import { StyleSheet } from "react-native";

export const styles=StyleSheet.create({
flexOne:{
    flex:1,
    backgroundColor:"#000120ff"
},

container:{
    flex:1,
    padding:20,
},
 card: {
    flexDirection: "row",
    backgroundColor: "#1A1A2E",
    borderRadius: 10,
    overflow: "hidden",
    marginBottom: 12,
    elevation: 2,
  },
  posterWrapper: {
    width: 100,
    height: 150,
    backgroundColor: "#333",
  },
  poster: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
placeholder: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#444",
  },
  content: {
    flex: 1,
    padding: 12,
    justifyContent: "center",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 6,
  },
  meta: {
    fontSize: 14,
    color: "#ccc",
  },


})