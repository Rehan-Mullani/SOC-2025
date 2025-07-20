const QRgenerator = () => {
    let textG = document.querySelector("input").value;
    document.querySelector(".result").innerText = "";
    new QRCode(document.querySelector(".result"), {
        text: textG,
        width: 128,
        height: 128
    });
};
document.querySelector("button").addEventListener("click", QRgenerator);