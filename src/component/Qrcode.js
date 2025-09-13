import React from "react";
import { QRCodeCanvas } from "qrcode.react";

const QRCode = ({ value, size }) => {
  return (
      <QRCodeCanvas
        value={value} // text or URL
        size={size} // QR size
        bgColor="#ffffff" // background color
        fgColor="#000000" // foreground color
        level="H" // error correction level (L, M, Q, H)
        includeMargin={true} // adds margin
      />
  );
};

export default QRCode;
