import React from "react";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";

const styles = {
    buttonStyle: {
        fontSize: 20,
        textTransform: "none",
        marginRight: 50,
    },
    textStyle: {
        fontFamily: "Bahnschrift",
        color: "#506287",
    },
    logoStyle: {
        margin: '0 auto',
        // marginRight: "30%",
        fontSize: 25
    },
    headerStyle: {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        flexWrap: "wrap",
        marginTop: "1%"
    }
};

export default function LoginHeader() {
    return (
        <Box style={styles.headerStyle}>
            <span style={{...styles.textStyle, ...styles.logoStyle}}> Meet & Go </span>

            <Box style={{}}>
                <Button style={{...styles.textStyle,...styles.buttonStyle}}> Помощь </Button>
                <Button style={{...styles.textStyle,...styles.buttonStyle}}> О нас </Button>
                <Button style={{...styles.textStyle,...styles.buttonStyle}}> Войти </Button>
            </Box>
        </Box>
    )
}