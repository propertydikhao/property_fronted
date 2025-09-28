export const Avatar = ({ name }) => {
  const initials = name
    .split(" ")
    .map((word) => word[0].toUpperCase())
    .join("");
  return (
    <div
      style={{
        width: "50px",
        height: "50px",
        borderRadius: "50%",
        backgroundColor: "#4CAF50",
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "24px",
        fontWeight: "bold",
      }}
    >
      {initials}
    </div>
  );
};
