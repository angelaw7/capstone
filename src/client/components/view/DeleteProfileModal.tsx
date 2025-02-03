import { StyleSheet, Text, View } from "react-native";
import { Modal } from "react-native";
import { Button } from "tamagui";
import { DEFAULT_COLOURS } from "../../styles/commonStyles";
import { NavigationProps } from "../../types";
import { useState } from "react";
import { getAuth } from "firebase/auth";
import ManageUserService from "../../services/managerUserService";
import { useUser } from "../../contexts/UserContext";

interface DeleteProfileModalProps {
  navigation: NavigationProps;
  visible: boolean;
  closeModalHandler: any;
}

const DeleteProfileModal = ({
  navigation,
  visible,
  closeModalHandler,
}: DeleteProfileModalProps) => {
  const [deleted, setDeleted] = useState(false);
  const { user } = useUser();

  const handleDelete = async () => {
    setDeleted(true);

    await getAuth().currentUser?.delete();
    await ManageUserService.deleteUser(user!.email);

    setTimeout(() => {
      navigation.reset({
        index: 0,
        routes: [{ name: "Login" }],
      });
    }, 3000);
  };

  return (
    <Modal
      visible={visible}
      onRequestClose={closeModalHandler}
      transparent={true}
      onDismiss={() => closeModalHandler(false)}
    >
      <View style={styles.modalView}>
        {deleted ? (
          <View style={styles.modalContainer}>
            <View style={styles.textContainer}>
              <Text style={styles.confirmationText}>
                Your Account has been deleted.
              </Text>
              <Text style={styles.confirmationText}>Redirecting...</Text>
            </View>
          </View>
        ) : (
          <View style={styles.modalContainer}>
            <View style={styles.textContainer}>
              <Text style={styles.confirmationText}>
                Are you sure you want to delete your account?
              </Text>
              <Text style={styles.confirmationText}>
                This action cannot be undone.
              </Text>
            </View>

            <View style={styles.buttonContainer}>
              <Button onPress={handleDelete} backgroundColor="red">
                <Text style={styles.buttonText}>Yes</Text>
              </Button>
              <Button
                onPress={() => closeModalHandler(false)}
                backgroundColor={DEFAULT_COLOURS.primary}
              >
                <Text style={styles.buttonText}>No</Text>
              </Button>
            </View>
          </View>
        )}
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalView: {
    height: "100%",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContainer: {
    height: "40%",
    width: "75%",
    backgroundColor: "#fff",
    borderRadius: 16,
    justifyContent: "space-between",
    padding: 32,
  },
  confirmationText: {
    fontSize: 18,
    textAlign: "center",
    color: "red",
    // backgroundColor: "blue",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "space-evenly",
    height: "50%",
  },
  buttonText: {
    fontSize: 18,
    color: "white",
  },
  textContainer: {
    display: "flex",
    flex: 1,
    justifyContent: "space-evenly",
  },
});
export default DeleteProfileModal;
