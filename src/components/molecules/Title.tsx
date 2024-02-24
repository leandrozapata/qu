const titleStyle = {
  color: "white",
  fontSize: "24px",
  marginBottom: "30px",
  fontWeight: "bold",
  textAlign: "center" as "center",
};

const Title = ({ text }: { text: string }) => (
  <div style={titleStyle}>{text}</div>
);

export default Title;
