import { useState } from "react";
import { useTokenPrice } from "react-moralis";

const styles = {
  token: {
    padding: "0 7px",
    height: "42px",
    gap: "8px",
    width: "fit-content",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    whiteSpace: "nowrap",
  },
};

function TokenPrice(props) {
  const { data: formattedData } = useTokenPrice(props);

  const [isUSDMode, setIsUSDMode] = useState(true);

  const toggleDisplayStyle = () => setIsUSDMode(!isUSDMode);

  const noLogoToken = "https://etherscan.io/images/main/empty-token.png";

  return (
    <div style={styles.token}>
      <img src={props.image || noLogoToken} alt="logo" style={{ height: props?.size || "35px" }} />
      <span style={{ cursor: "pointer", textAlign: "center", whiteSpace: "nowrap", color: "#FFF", fontWeight: "500", fontSize: "12px" }} onClick={toggleDisplayStyle} title={`Show in ${isUSDMode ? "FTM" : "USD"}`}>
        {formattedData && (isUSDMode ? formattedData.formattedUsd : formattedData.formattedNative)}
      </span>
    </div>
  );
}
export default TokenPrice;
