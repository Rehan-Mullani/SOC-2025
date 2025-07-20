const pattern = () => {
    let num = parseInt(document.querySelector("input").value);
    let stars = "";
    for (let i = num; i >= 1; --i) {
        if (i % 2 === 0) {
            continue;
        }
        else {
            for (let space = (num - i) / 2; space > 0; space--) {
                stars += " "
            }
            for (let j = i; j >= 1; --j) {
                stars += "*";
            }
            stars += "\n";
        }
    }
    for (let i = 3; i <= num; ++i) {
        if (i % 2 === 0) {
            continue;
        }
        else {
            for (let space = (num - i) / 2; space > 0; space--) {
                stars += " "
            }
            for (let j = 1; j <= i; ++j) {
                stars += "*";
            }
            stars += "\n";
        }
    }
    document.querySelector(".result").innerText =  stars;
}
document.querySelector(".submit-box").addEventListener("click",pattern);