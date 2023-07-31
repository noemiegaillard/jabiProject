import Entypo from "react-native-vector-icons/Entypo";
import FontAwesome from "react-native-vector-icons/FontAwesome";
const Icons = {
    // Définissez des noms pour chaque icône que vous souhaitez utiliser
    threeDots:  (color,size) => <Entypo name="dots-three-horizontal" size={size} color={color} />,
    pencil: (color,size) => <FontAwesome name="pencil" size={size} color={color} />,
    // Ajoutez d'autres icônes ici si nécessaire
  };
  
  export default Icons;