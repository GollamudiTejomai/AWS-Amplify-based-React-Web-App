import { Amplify } from 'aws-amplify';
import { Authenticator, Image } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import awsExports from './Config';
import Content from './components/Content';
import logo from './logo.png';
import { MdLogout } from "react-icons/md";

Amplify.configure(awsExports);

export default function App() {
  return (
    <div style={styles.authenticatorStyle}>
      <Image src={logo} width="200px" height="100px" />
      <Authenticator>
        {({ signOut, user }) => {
          return(
          <div style={styles.container}>
            <div style={styles.subContainer}>
              <div style={styles.headingContainer}>
                <h2 style={styles.subheading}>ITP-3233-01-Cloud Infrastructure</h2>    
              </div>
              <div style={styles.buttonContainer}>
                <button onClick={signOut} style={styles.button}>
                    <b>Sign out</b>
                    <MdLogout style={styles.logoutIcon}/>
                </button>
              </div>
            </div>
            <Content />
          </div>
        )}}
      </Authenticator>
    </div>
  );
}

const styles = {
  authenticatorStyle: {
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    backgroundColor: "ActiveBorder",
    padding: "15px"
  },
  subContainer: {
      display: "flex",
      width: "100%",
  },
  headingContainer:{
      width: "100%",
      margin: "15px",
      textAlign: "center",
      backgroundColor: "black",
  },
  mainheading: {
      color: "#9FE2BF",
  },
  subheading: {
      color: "#9FE2BF",
  },
  buttonContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      marginLeft: "-200px",
      padding: "15px",
  },
  button: {
      backgroundColor: "#FF5733",
      borderRadius: "5px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
  },
  logoutIcon: {
      marginLeft: "8px",
  },
};
