const xlsx = require("xlsx");
const path = require("path");

async function readExcel() {

    const filePath = path.join(__dirname, "../reports/Assignment1.xlsx");

    console.log(filePath);

    const workbook = xlsx.readFile(filePath);

    const sheetName = workbook.SheetNames[0];

    const sheet = workbook.Sheets[sheetName];

    const data = xlsx.utils.sheet_to_json(sheet);

    return data;
}

module.exports = {
    readExcel
};