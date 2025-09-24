import { StyleSheet } from "react-native";

export const styles=StyleSheet.create({
flexOne:{
    flex:1,
    backgroundColor:"#000120ff"
},

container:{
    flex:1,
    
},
  card: {
     
    overflow: "hidden",
    marginBottom: 16,
  },
  poster: {
    width: "100%",
    height: 200,
  },
  placeholder: {
    width: "100%",
    height: 200,
    backgroundColor: "#333",
  },
  content: {
    padding: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: "700",
    color: "#fff",
  },
  meta: {
    fontSize: 14,
    color: "#aaa",
    marginVertical: 4,
  },
  plot: {
    fontSize: 14,
    color: "#ddd",
    marginBottom:10,
  },
ratingText:{
   fontSize: 14,
 color: "#ccc",
},
rating:{
    marginTop:4,
    gap:5,
    flexDirection:"row"
},
genre:{
     fontSize: 14,
 color: "#aaa",
 marginVertical: 4,
 padding:6,
 borderColor:"white",
 borderWidth:2,
 borderRadius:50
},
ratingBlock:{
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-between",
    marginVertical:20
}

})