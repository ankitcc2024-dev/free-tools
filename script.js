/* =====================================================
   FreeTools - Main JavaScript
===================================================== */


/* =====================================================
   ELEMENTS
===================================================== */

const searchInput = document.getElementById("search");
const toolCards = document.querySelectorAll(".tool-card");
const noResults = document.getElementById("noResults");

const toolModal = document.getElementById("toolModal");
const toolContent = document.getElementById("toolContent");


/* =====================================================
   TOOL SEARCH
===================================================== */

if (searchInput) {

    searchInput.addEventListener("input", function () {

        const searchText =
            this.value.toLowerCase().trim();

        let foundTools = 0;


        toolCards.forEach(function (card) {

            const toolName =
                card.getAttribute("data-name")
                .toLowerCase();

            const cardText =
                card.innerText.toLowerCase();


            if (
                toolName.includes(searchText) ||
                cardText.includes(searchText)
            ) {

                card.style.display = "";

                foundTools++;

            } else {

                card.style.display = "none";

            }

        });


        if (noResults) {

            if (foundTools === 0) {

                noResults.style.display = "block";

            } else {

                noResults.style.display = "none";

            }

        }

    });

}


/* =====================================================
   OPEN TOOL
===================================================== */

function openTool(tool) {

    if (!toolModal || !toolContent) {
        return;
    }


    toolModal.style.display = "block";


    /* -----------------------------------------------
       Percentage Calculator
    ------------------------------------------------ */

    if (tool === "percentage") {

        toolContent.innerHTML = `

            <h2>🧮 Percentage Calculator</h2>

            <p>
                Calculate a percentage of a number.
            </p>

            <label>
                Percentage (%)
            </label>

            <input
                type="number"
                id="percentageValue"
                placeholder="Example: 20"
            >

            <label>
                Number
            </label>

            <input
                type="number"
                id="percentageNumber"
                placeholder="Example: 500"
            >

            <button onclick="calculatePercentage()">
                Calculate
            </button>

            <div id="percentageResult"
                 style="margin-top:20px;font-weight:bold;">
            </div>

        `;

    }


    /* -----------------------------------------------
       Password Generator
    ------------------------------------------------ */

    else if (tool === "password") {

        toolContent.innerHTML = `

            <h2>🔐 Password Generator</h2>

            <p>
                Generate a strong random password.
            </p>

            <label>
                Password Length
            </label>

            <input
                type="number"
                id="passwordLength"
                value="16"
                min="4"
                max="100"
            >

            <button onclick="generatePassword()">
                Generate Password
            </button>

            <input
                type="text"
                id="passwordResult"
                readonly
                placeholder="Your password will appear here"
                style="margin-top:15px;"
            >

            <button
                onclick="copyPassword()"
                style="margin-top:5px;"
            >
                📋 Copy Password
            </button>

            <div id="passwordMessage"
                 style="margin-top:12px;">
            </div>

        `;

    }


    /* -----------------------------------------------
       Word Counter
    ------------------------------------------------ */

    else if (tool === "word") {

        toolContent.innerHTML = `

            <h2>📝 Word Counter</h2>

            <p>
                Count words, characters and sentences.
            </p>

            <textarea
                id="wordText"
                rows="8"
                placeholder="Type or paste your text here..."
                oninput="countWords()"
            ></textarea>

            <div id="wordResult"
                 style="margin-top:15px;">

                <p>
                    Words: <strong>0</strong>
                </p>

                <p>
                    Characters: <strong>0</strong>
                </p>

                <p>
                    Sentences: <strong>0</strong>
                </p>

            </div>

        `;

    }


    /* -----------------------------------------------
       QR Code Generator
    ------------------------------------------------ */

    else if (tool === "qr") {

        toolContent.innerHTML = `

            <h2>📱 QR Code Generator</h2>

            <p>
                Enter text or a website URL to create a QR code.
            </p>

            <input
                type="text"
                id="qrText"
                placeholder="Enter text or URL"
            >

            <button onclick="generateQR()">
                Generate QR Code
            </button>

            <div
                id="qrResult"
                style="
                    margin-top:20px;
                    text-align:center;
                "
            >
            </div>

        `;

    }


    /* -----------------------------------------------
       Age Calculator
    ------------------------------------------------ */

    else if (tool === "age") {

        toolContent.innerHTML = `

            <h2>🎂 Age Calculator</h2>

            <p>
                Calculate your age from your date of birth.
            </p>

            <label>
                Date of Birth
            </label>

            <input
                type="date"
                id="birthDate"
            >

            <button onclick="calculateAge()">
                Calculate Age
            </button>

            <div
                id="ageResult"
                style="margin-top:20px;font-weight:bold;"
            >
            </div>

        `;

    }


    /* -----------------------------------------------
       Unit Converter
    ------------------------------------------------ */

    else if (tool === "unit") {

        toolContent.innerHTML = `

            <h2>📏 Unit Converter</h2>

            <p>
                Convert kilometers to miles and miles to kilometers.
            </p>

            <input
                type="number"
                id="unitValue"
                placeholder="Enter value"
            >

            <select id="unitType">

                <option value="kmToMiles">
                    Kilometers → Miles
                </option>

                <option value="milesToKm">
                    Miles → Kilometers
                </option>

            </select>

            <button onclick="convertUnit()">
                Convert
            </button>

            <div
                id="unitResult"
                style="margin-top:20px;font-weight:bold;"
            >
            </div>

        `;

    }


    /* -----------------------------------------------
       Image Resizer
    ------------------------------------------------ */

    else if (tool === "image") {

        toolContent.innerHTML = `

            <h2>🖼️ Image Resizer</h2>

            <p>
                Select an image and choose a new width.
            </p>

            <input
                type="file"
                id="imageInput"
                accept="image/*"
            >

            <input
                type="number"
                id="imageWidth"
                placeholder="New width in pixels"
                min="1"
            >

            <button onclick="resizeImage()">
                Resize Image
            </button>

            <div
                id="imageResult"
                style="margin-top:20px;"
            >
            </div>

        `;

    }


    /* -----------------------------------------------
       JSON Formatter
    ------------------------------------------------ */

    else if (tool === "json") {

        toolContent.innerHTML = `

            <h2>💻 JSON Formatter</h2>

            <p>
                Paste JSON below and format it.
            </p>

            <textarea
                id="jsonInput"
                rows="10"
                placeholder='{"name":"John","age":20}'
            ></textarea>

            <button onclick="formatJSON()">
                Format JSON
            </button>

            <div
                id="jsonResult"
                style="margin-top:20px;"
            >
            </div>

        `;

    }

}


/* =====================================================
   CLOSE TOOL
===================================================== */

function closeTool() {

    if (toolModal) {

        toolModal.style.display = "none";

    }

}


/* Close modal by clicking outside */

if (toolModal) {

    toolModal.addEventListener("click", function (event) {

        if (event.target === toolModal) {

            closeTool();

        }

    });

}


/* =====================================================
   ESC KEY
===================================================== */

document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {

        closeTool();

    }

});


/* =====================================================
   PERCENTAGE CALCULATOR
===================================================== */

function calculatePercentage() {

    const percentage =
        parseFloat(
            document.getElementById("percentageValue").value
        );

    const number =
        parseFloat(
            document.getElementById("percentageNumber").value
        );

    const result =
        document.getElementById("percentageResult");


    if (
        isNaN(percentage) ||
        isNaN(number)
    ) {

        result.innerHTML =
            "⚠️ Please enter both values.";

        return;

    }


    const answer =
        (percentage / 100) * number;


    result.innerHTML =
        `${percentage}% of ${number} = <strong>${answer}</strong>`;

}


/* =====================================================
   PASSWORD GENERATOR
===================================================== */

function generatePassword() {

    const lengthInput =
        document.getElementById("passwordLength");

    const result =
        document.getElementById("passwordResult");

    const message =
        document.getElementById("passwordMessage");


    let length =
        parseInt(lengthInput.value);


    if (isNaN(length)) {

        length = 16;

    }


    length =
        Math.max(4, Math.min(100, length));


    const characters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZ" +
        "abcdefghijklmnopqrstuvwxyz" +
        "0123456789" +
        "!@#$%^&*()_+-=[]{}";


    let password = "";


    for (let i = 0; i < length; i++) {

        const randomIndex =
            Math.floor(
                Math.random() * characters.length
            );

        password +=
            characters[randomIndex];

    }


    result.value = password;

    message.innerHTML =
        "✅ Strong password generated.";

}


/* =====================================================
   COPY PASSWORD
===================================================== */

async function copyPassword() {

    const result =
        document.getElementById("passwordResult");

    const message =
        document.getElementById("passwordMessage");


    if (!result || !result.value) {

        return;

    }


    try {

        await navigator.clipboard.writeText(
            result.value
        );

        message.innerHTML =
            "✅ Password copied!";

    } catch (error) {

        result.select();

        document.execCommand("copy");

        message.innerHTML =
            "✅ Password copied!";

    }

}


/* =====================================================
   WORD COUNTER
===================================================== */

function countWords() {

    const text =
        document.getElementById("wordText").value;

    const result =
        document.getElementById("wordResult");


    const trimmedText =
        text.trim();


    const words =
        trimmedText === ""
            ? 0
            : trimmedText.split(/\s+/).length;


    const characters =
        text.length;


    const sentences =
        trimmedText === ""
            ? 0
            : trimmedText
                .split(/[.!?]+/)
                .filter(function (sentence) {

                    return sentence.trim().length > 0;

                }).length;


    result.innerHTML = `

        <p>
            Words: <strong>${words}</strong>
        </p>

        <p>
            Characters: <strong>${characters}</strong>
        </p>

        <p>
            Sentences: <strong>${sentences}</strong>
        </p>

    `;

}


/* =====================================================
   QR CODE GENERATOR
===================================================== */

function generateQR() {

    const text =
        document.getElementById("qrText").value.trim();

    const result =
        document.getElementById("qrResult");


    if (!text) {

        result.innerHTML =
            "⚠️ Please enter text or a URL.";

        return;

    }


    const encodedText =
        encodeURIComponent(text);


    result.innerHTML = `

        <img
            src="https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${encodedText}"
            alt="Generated QR Code"
            width="220"
            height="220"
            style="
                max-width:100%;
                border-radius:10px;
            "
        >

        <p style="margin-top:12px;">
            QR Code generated successfully.
        </p>

    `;

}


/* =====================================================
   AGE CALCULATOR
===================================================== */

function calculateAge() {

    const birthDateValue =
        document.getElementById("birthDate").value;

    const result =
        document.getElementById("ageResult");


    if (!birthDateValue) {

        result.innerHTML =
            "⚠️ Please select your date of birth.";

        return;

    }


    const birthDate =
        new Date(birthDateValue + "T00:00:00");


    const today =
        new Date();


    if (birthDate > today) {

        result.innerHTML =
            "⚠️ Date of birth cannot be in the future.";

        return;

    }


    let years =
        today.getFullYear() -
        birthDate.getFullYear();


    let months =
        today.getMonth() -
        birthDate.getMonth();


    let days =
        today.getDate() -
        birthDate.getDate();


    if (days < 0) {

        months--;

        const previousMonth =
            new Date(
                today.getFullYear(),
                today.getMonth(),
                0
            );

        days +=
            previousMonth.getDate();

    }


    if (months < 0) {

        years--;

        months += 12;

    }


    result.innerHTML = `

        Your age is:

        <strong>
            ${years} years,
            ${months} months,
            ${days} days
        </strong>

    `;

}


/* =====================================================
   UNIT CONVERTER
===================================================== */

function convertUnit() {

    const value =
        parseFloat(
            document.getElementById("unitValue").value
        );


    const type =
        document.getElementById("unitType").value;


    const result =
        document.getElementById("unitResult");


    if (isNaN(value)) {

        result.innerHTML =
            "⚠️ Please enter a value.";

        return;

    }


    let answer;


    if (type === "kmToMiles") {

        answer =
            value * 0.621371;

        result.innerHTML =
            `${value} km = <strong>${answer.toFixed(4)} miles</strong>`;

    }


    else {

        answer =
            value * 1.609344;

        result.innerHTML =
            `${value} miles = <strong>${answer.toFixed(4)} km</strong>`;

    }

}


/* =====================================================
   IMAGE RESIZER
===================================================== */

function resizeImage() {

    const input =
        document.getElementById("imageInput");

    const widthInput =
        document.getElementById("imageWidth");

    const result =
        document.getElementById("imageResult");


    if (!input.files || !input.files[0]) {

        result.innerHTML =
            "⚠️ Please select an image.";

        return;

    }


    const newWidth =
        parseInt(widthInput.value);


    if (
        isNaN(newWidth) ||
        newWidth <= 0
    ) {

        result.innerHTML =
            "⚠️ Please enter a valid width.";

        return;

    }


    const file =
        input.files[0];


    const reader =
        new FileReader();


    reader.onload = function (event) {

        const image =
            new Image();


        image.onload = function () {

            const scale =
                newWidth / image.width;


            const newHeight =
                Math.round(
                    image.height * scale
                );


            const canvas =
                document.createElement("canvas");


            canvas.width =
                newWidth;

            canvas.height =
                newHeight;


            const ctx =
                canvas.getContext("2d");


            ctx.drawImage(
                image,
                0,
                0,
                newWidth,
                newHeight
            );


            canvas.toBlob(function (blob) {

                const url =
                    URL.createObjectURL(blob);


                result.innerHTML = `

                    <p>
                        Image resized successfully.
                    </p>

                    <p>
                        New size:
                        <strong>
                            ${newWidth} × ${newHeight}px
                        </strong>
                    </p>

                    <a
                        href="${url}"
                        download="resized-image.png"
                        class="hero-button"
                        style="margin-top:15px;"
                    >
                        ⬇️ Download Image
                    </a>

                `;

            }, "image/png");

        };


        image.src =
            event.target.result;

    };


    reader.readAsDataURL(file);

}


/* =====================================================
   JSON FORMATTER
===================================================== */

function formatJSON() {

    const input =
        document.getElementById("jsonInput").value.trim();

    const result =
        document.getElementById("jsonResult");


    if (!input) {

        result.innerHTML =
            "⚠️ Please enter JSON data.";

        return;

    }


    try {

        const parsed =
            JSON.parse(input);


        const formatted =
            JSON.stringify(
                parsed,
                null,
                4
            );


        result.innerHTML = `

            <textarea
                rows="15"
                readonly
                style="
                    width:100%;
                    margin-top:10px;
                    font-family:monospace;
                "
            >${escapeHTML(formatted)}</textarea>

            <button
                onclick="copyJSON()"
                style="margin-top:10px;"
            >
                📋 Copy JSON
            </button>

            <p style="margin-top:10px;">
                ✅ Valid JSON
            </p>

        `;


    } catch (error) {

        result.innerHTML = `

            <p style="margin-top:10px;">
                ❌ Invalid JSON
            </p>

            <p>
                Please check your JSON syntax.
            </p>

        `;

    }

}


/* =====================================================
   ESCAPE HTML
===================================================== */

function escapeHTML(text) {

    return text
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");

}


/* =====================================================
   COPY JSON
===================================================== */

async function copyJSON() {

    const textareas =
        document.querySelectorAll(
            "#jsonResult textarea"
        );


    if (!textareas.length) {

        return;

    }


    const textarea =
        textareas[0];


    try {

        await navigator.clipboard.writeText(
            textarea.value
        );

        alert("JSON copied!");

    } catch (error) {

        textarea.select();

        document.execCommand("copy");

        alert("JSON copied!");

    }

}


/* =====================================================
   COPYRIGHT YEAR
===================================================== */

const copyright =
    document.querySelector(".copyright");


if (copyright) {

    copyright.innerText =
        "© " +
        new Date().getFullYear() +
        " FreeTools. All Rights Reserved.";

}