const express = require("express");
const cors = require("cors");
const xlsx = require("xlsx");
const path = require("path");

const app = express();

app.use(cors());
app.use(express.json());

const FILE_PATH = path.join(__dirname, "reports", "Assignment1.xlsx");
console.log(FILE_PATH);

// READ EXCEL
app.get("/api/assignment1", (req, res) => {

    try {

        const workbook = xlsx.readFile(FILE_PATH);

        const sheetName = workbook.SheetNames[0];

        const sheet = workbook.Sheets[sheetName];

        const data = xlsx.utils.sheet_to_json(sheet, { header: 1 });

        res.json(data);

    } catch (error) {

        console.log(error);

        res.status(500).json({
            error: "Cannot load Excel file"
        });
    }
});

// UPDATE EXCEL
app.post("/api/assignment1/update", (req, res) => {

    try {

        const { row, col, value } = req.body;

        const workbook = xlsx.readFile(FILE_PATH);

        const sheetName = workbook.SheetNames[0];

        const sheet = workbook.Sheets[sheetName];

        const data = xlsx.utils.sheet_to_json(sheet, { header: 1 });

        data[row][col] = value;

        const newSheet = xlsx.utils.aoa_to_sheet(data);

        workbook.Sheets[sheetName] = newSheet;

        xlsx.writeFile(workbook, FILE_PATH);

        res.json({
            success: true
        });

    } catch (error) {

        console.log(error);

        res.status(500).json({
            error: "Cannot update Excel"
        });
    }
});

app.listen(3001, () => {
    console.log("✅ Backend-One running on http://localhost:3001");
});