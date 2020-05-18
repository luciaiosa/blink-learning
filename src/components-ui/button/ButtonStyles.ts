import { createStyles, makeStyles } from "@material-ui/core/styles";

export const styles = makeStyles(() =>
    createStyles({
        container: {
            display: "flex",
            backgroundColor: "lightGray",
            height: "auto",
            borderRadius: 20,
            flexDirection: "row",
            margin: 20,
            borderColor: '#696969',
            borderWidth: 2,
            borderStyle: 'solid'
        },
        buttonContainer: {
            borderColor: 'white',
            borderWidth: 2,
            borderStyle: 'solid',
            borderRadius: 20,
            padding: 7,

        },
        button: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 15,
            borderColor: 'grey',
            background: "linear-gradient(top, lightGrey, grey)",
        },
        starIcon: {
            fontSize: 35,
            alignSelf: "center",
            color: "grey"
        },
        content: {
            fontWeight: 600,
            fontSize: 28,
            margin: 12,
            color: "#000",
        }
    })
);