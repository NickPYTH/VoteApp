qrImage = document.getElementById('imageInput');
qrColor = document.getElementById('colorInput');
qrType = document.getElementById('typeInput');
qrLink = document.getElementById('link');

const qrCode = new QRCodeStyling({
  width: 300,
  height: 300,
  data: qrLink.textContent,
  image: "",
  dotsOptions: { 
    color: "#000",
    type: "square"
  },
});

const updateQrImg = () => {
  newQrImage = URL.createObjectURL(qrImage.files[0]);
  console.log(newQrImage);
  qrCode.update({
    image: newQrImage
  });
};

const updateQrColor = () => {
  newQrColor = qrColor.value;
  qrCode.update({
    dotsOptions: {
      color: newQrColor
    }
  });
};

const updateQrType = () => {
  newQrType = qrType.value;
  qrCode.update({
    dotsOptions: {
      type: newQrType
    }
  });
};

const download = () => qrCode.download("jpeg");

qrCode.append(document.getElementById('canvas'));