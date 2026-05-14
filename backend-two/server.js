const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
const path = require("path");
const fs = require("fs");

const app = express();
const PORT = 3002;

app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "nsanzimanadidier8@gmail.com",
        pass: "qdlpqzfjhjcptrso"     
    },
    tls: { rejectUnauthorized: false }
});

app.post("/api/send-email", async (req, res) => {
    try {
        const { email } = req.body;
        const regNo = "M05542/2026";
        const fullName = "Nsanzimana Didier";

        const excelPath = path.join(__dirname, "../backend-one/reports/Assignment1.xlsx");

        if (!fs.existsSync(excelPath)) {
            return res.status(400).json({
                success: false,
                error: "Excel file not found",
                expectedPath: excelPath
            });
        }

        const cleanRegNo = regNo.replace('/', '-');   // M05542/2026 → M05542-2026

        const attachments = [
            {
                filename: `Assignment-1-Report--${cleanRegNo}.xlsx`,
                path: excelPath
            },
            {
                filename: `Assignment-2-FRONTEND-README--${cleanRegNo}.md`,
                path: path.join(__dirname, "../frontend/README.md")
            },
            {
                filename: `Assignment-2-BACKEND-ONE-README--${cleanRegNo}.md`,
                path: path.join(__dirname, "../backend-one/README.md")
            },
            {
                filename: `Assignment-2-BACKEND-TWO-README--${cleanRegNo}.md`,
                path: path.join(__dirname, "README.md")
            }
        ];

        await transporter.sendMail({
            from: "nsanzimanadidier8@gmail.com",
            to: email,
            subject: `Assignment 1 & 2 Submitted Using My Own Web Service - ${regNo}`,
            html: `
                <h3>Assignment Submission</h3>
                <p><strong>Name:</strong> ${fullName}</p>
                <p><strong>Registration Number:</strong> ${regNo}</p>
                <p>I am taking a course named "Web Services and Service-Oriented Architecture"</p>
            `,
            attachments: attachments
        });

        res.json({ success: true, message: "Email sent successfully!" });

    } catch (error) {
        console.error("Email Error:", error);
        res.status(500).json({ 
            success: false, 
            error: error.message 
        });
    }
});

app.listen(PORT, () => {
    console.log(`✅ Backend-Two running on http://localhost:${PORT}`);
});