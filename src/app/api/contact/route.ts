import { NextResponse } from "next/server";
import { transporter } from "@/src/lib/mailer";

export async function POST(req: Request) {
    try {
        const { name, email, phone, message } = await req.json();

        if (!name || !email) {
            return NextResponse.json(
                { error: "Missing required fields" },
                { status: 400 }
            );
        }

        await transporter.sendMail({
            from: `"Website Contact" <${process.env.EMAIL_USER}>`,
            to: process.env.EMAIL_USER, // receive mail on same Gmail
            replyTo: email,
            subject: `New Inquiry from ${name}`,
            html: `
        <!DOCTYPE html>
        <html>
        <head>
            <style>
                .container {
                    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                    max-width: 600px;
                    margin: 0 auto;
                    background-color: #f9fafb;
                    border-radius: 16px;
                    overflow: hidden;
                    border: 1px solid #e5e7eb;
                }
                .header {
                    background-color: #12aa91;
                    padding: 32px;
                    text-align: center;
                }
                .header h1 {
                    color: white;
                    margin: 0;
                    font-size: 24px;
                    font-weight: 700;
                    letter-spacing: -0.5px;
                }
                .content {
                    padding: 32px;
                    background-color: white;
                }
                .info-grid {
                    width: 100%;
                    border-collapse: collapse;
                    margin-bottom: 24px;
                }
                .info-row td {
                    padding: 12px 0;
                    border-bottom: 1px solid #f3f4f6;
                }
                .label {
                    color: #6b7280;
                    font-size: 14px;
                    font-weight: 600;
                    width: 120px;
                    text-transform: uppercase;
                    letter-spacing: 0.5px;
                }
                .value {
                    color: #111827;
                    font-size: 16px;
                    font-weight: 500;
                }
                .message-box {
                    background-color: #f0f9f8;
                    border-left: 4px solid #12aa91;
                    padding: 20px;
                    border-radius: 8px;
                    margin-top: 16px;
                }
                .message-label {
                    color: #12aa91;
                    font-weight: 700;
                    font-size: 14px;
                    margin-bottom: 8px;
                    display: block;
                }
                .message-text {
                    color: #374151;
                    line-height: 1.6;
                    margin: 0;
                    white-space: pre-wrap;
                }
                .footer {
                    padding: 24px;
                    text-align: center;
                    color: #9ca3af;
                    font-size: 12px;
                }
            </style>
        </head>
        <body>
            <div class="container">
                <div class="header">
                    <div style="color: white; font-size: 28px; font-weight: 800; margin-bottom: 4px; letter-spacing: -1px;">
                        JAPANESE INTERPRETER
                    </div>
                    <div style="color: rgba(255, 255, 255, 0.9); font-size: 14px; font-weight: 500; text-transform: uppercase; letter-spacing: 1px;">
                        Website Inquiry
                    </div>
                </div>
                <div class="content">
                    <table class="info-grid">
                        <tr class="info-row">
                            <td class="label">Name</td>
                            <td class="value">${name}</td>
                        </tr>
                        <tr class="info-row">
                            <td class="label">Email</td>
                            <td class="value">
                                <a href="mailto:${email}" style="color: #12aa91; text-decoration: none;">${email}</a>
                            </td>
                        </tr>
                        <tr class="info-row">
                            <td class="label">Phone</td>
                            <td class="value">${phone || "N/A"}</td>
                        </tr>
                    </table>
                    
                    <div class="message-box">
                        <span class="message-label">MESSAGE FROM CUSTOMER:</span>
                        <p class="message-text">${message || "No message provided."}</p>
                    </div>
                </div>
                <div class="footer">
                    <p>This email was sent from the Japanese Interpreter Contact Form.</p>
                    <p>© ${new Date().getFullYear()} Japanese Interpreter</p>
                </div>
            </div>
        </body>
        </html>
      `
        });

        // Google Sheet logging
        const sheetUrl = process.env.GOOGLE_SHEET_WEBAPP_URL?.trim();
        console.log("Attempting Google Sheet logging to:", sheetUrl ? `${sheetUrl.substring(0, 30)}...` : "UNDEFINED");

        if (sheetUrl) {
            try {
                const sheetRes = await fetch(sheetUrl, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        name,
                        email,
                        phone,
                        message
                    }),
                    redirect: "follow",
                    cache: "no-store"
                });

                const sheetText = await sheetRes.text();
                let sheetJson = null;
                try {
                    sheetJson = JSON.parse(sheetText);
                } catch (e) {
                    console.error("Failed to parse Google Sheet response as JSON:", sheetText);
                }

                if (!sheetRes.ok || (sheetJson && !sheetJson.ok)) {
                    console.error("Google Sheet append failed:", {
                        status: sheetRes.status,
                        statusText: sheetRes.statusText,
                        data: sheetJson || sheetText
                    });
                } else {
                    console.log("Google Sheet updated successfully");
                }
            } catch (fetchErr) {
                console.error("Google Sheet fetch error:", fetchErr);
            }
        }


        return NextResponse.json({ success: true });
    } catch (err) {
        console.error("Mail error:", err);
        return NextResponse.json(
            { error: "Failed to send email" },
            { status: 500 }
        );
    }
}
