
const ErrorComponent = ({ message }: { message: string }) => (
    <div style={styles.container}>
        <div style={styles.errorStyle}>We are sorry: {message}</div>
    </div>
);

const styles = {
    container: {
        marginTop: "20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "yellow",
        borderRadius: "10px",
        backgroundColor: "yellow",
    },
    errorStyle: {
        color: "black",
        padding: "16px",
    },
};

export default ErrorComponent;