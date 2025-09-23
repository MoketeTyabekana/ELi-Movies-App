import { StyleSheet } from "react-native";

export const style=StyleSheet.create({
flexOne:{
    flex:1,
    backgroundColor:"#000120ff"
},

container:{
    flex:1,
    paddingHorizontal:20,
},
movieGrid:{
      flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "space-between",
},
headerText:{
    color:"#fff",
    fontSize:12,
    fontWeight:600,
    margin:20

}

})