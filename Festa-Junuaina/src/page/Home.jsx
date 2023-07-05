import {Alert, FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import { useState } from "react";


// import do componente Dropdown
import DropdownComponent from "../dropdown/Dropdown";
import { Dropdown } from "react-native-element-dropdown";

export function Home() {

  const [listParticipant, setListParticipant] = useState([])
  const [nameParticipant, setNameParticipant] = useState('')



  function handleParticipantAdd(participant) {
    console.log('funcionando', Dropdown )
    if (listParticipant.includes(participant.trim())) {
      Alert.alert('Ohhhh.... Mané esse nené, já está na lista!!!')
    } else {
      // const str2 = str.charAt(0).toUpperCase() + str.slice(1);
      setListParticipant((prevState) => [...prevState, participant.charAt(0).toUpperCase() + participant.slice(1)]);
    }
  }

  function handleParticipantRemove(participant) {
    Alert.alert("Remover", `Remover o participante ${participant}`, [
      {
        text: 'sim',
        onPress: () => {
          setListParticipant(prevState => prevState.filter(participantName => participantName !== participant))
        }
      }, {
        text: 'não',
        onPress: () => Alert.alert('Mudei de Ideia')
      }])
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titleEvent}>Festa Junina</Text>
      <Text style={styles.dateEvent}>Sexta, 23 de junho de 2023</Text>

      <DropdownComponent/>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#131016",
    padding: 24,
  },
  titleEvent: {
    color: "#850ef5",
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 48,
    justifyContent:"center",
    textAlign:"center"
  },
  dateEvent: {
    color: "#850ef5",
    fontSize: 16,
    justifyContent:"center",
    textAlign:"center",
    fontWeight: "bold",
  },
  form: {
    width: "100%",
    flexDirection: "row",
    marginTop: 36,
    marginBottom: 42,
    gap: 7,
  },
  input: {
    flex: 1,
    height: 56,
    backgroundColor: "#1f1e25",
    borderRadius: 5,
    color: "#fff",
    padding: 16,
    fontSize: 16,
  },
    buttonText: {
    color: "#fff",
    fontSize: 24,
  },
  listEmptyText: {
    color: '#fff',
    fontSize: 14,
    textAlign: 'center'
  }
});
