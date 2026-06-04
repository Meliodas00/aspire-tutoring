const enquiryConfirmationEmail = ({ fullname, email, message }) => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>We've Received Your Enquiry</title>
</head>
<body style="margin:0;padding:0;background-color:#f4f4f5;font-family:'Georgia',serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f4f4f5;padding:40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">

          <!-- Header -->
          <tr>
            <td style="background-color:#18181b;padding:36px 40px;border-radius:12px 12px 0 0;">
              <p style="margin:0;font-size:11px;letter-spacing:3px;text-transform:uppercase;color:#a1a1aa;font-family:'Helvetica Neue',sans-serif;">
                Thank You
              </p>

              <h1 style="margin:8px 0 0;font-size:26px;font-weight:400;color:#ffffff;font-family:'Georgia',serif;line-height:1.3;">
                We've Received<br>
                <em style="color:#e4e4e7;">Your Enquiry</em>
              </h1>
            </td>
          </tr>

          <!-- Intro -->
          <tr>
            <td style="background-color:#ffffff;padding:36px 40px 24px;">
              <p style="margin:0 0 18px;font-size:18px;color:#18181b;line-height:1.7;">
                Dear ${fullname},
              </p>

              <p style="margin:0 0 16px;font-size:16px;color:#3f3f46;line-height:1.8;font-family:'Georgia',serif;">
                Thank you for getting in touch. We've successfully received your message and a member of our team will review it shortly.
              </p>

              <p style="margin:0;font-size:16px;color:#3f3f46;line-height:1.8;font-family:'Georgia',serif;">
                We aim to respond within <strong>1–2 business days</strong>. If your enquiry is urgent, please feel free to reply directly to this email.
              </p>
            </td>
          </tr>

          <!-- Enquiry Details -->
          <tr>
            <td style="background-color:#ffffff;padding:0 40px;">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="padding:24px 0;border-top:1px solid #e4e4e7;border-bottom:1px solid #e4e4e7;">
                    <p style="margin:0 0 4px;font-size:10px;letter-spacing:2px;text-transform:uppercase;color:#a1a1aa;font-family:'Helvetica Neue',sans-serif;">
                      Submitted Email
                    </p>

                    <p style="margin:0;font-size:16px;color:#18181b;font-family:'Helvetica Neue',sans-serif;">
                      ${email}
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Message Copy -->
          <tr>
            <td style="background-color:#ffffff;padding:32px 40px;">
              <p style="margin:0 0 12px;font-size:10px;letter-spacing:2px;text-transform:uppercase;color:#a1a1aa;font-family:'Helvetica Neue',sans-serif;">
                Your Message
              </p>

              <div style="background-color:#f9f9f9;border-left:3px solid #18181b;border-radius:0 6px 6px 0;padding:20px 24px;">
                <p style="margin:0;font-size:16px;line-height:1.7;color:#3f3f46;font-family:'Georgia',serif;">
                  ${message}
                </p>
              </div>
            </td>
          </tr>

          <!-- CTA -->
          <tr>
            <td style="background-color:#ffffff;padding:0 40px 36px;border-radius:0 0 12px 12px;">
              <table cellpadding="0" cellspacing="0">
                <tr>
                  <td style="background-color:#18181b;border-radius:6px;">
                    <a
                      href="https://www.zenithtuition.com/contact"
                      style="display:inline-block;padding:12px 28px;font-size:13px;letter-spacing:1px;text-transform:uppercase;color:#ffffff;text-decoration:none;font-family:'Helvetica Neue',sans-serif;"
                    >
                      Contact Us
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding:24px 40px;text-align:center;">
              <p style="margin:0;font-size:12px;color:#a1a1aa;font-family:'Helvetica Neue',sans-serif;">
                This is an automated confirmation that we have received your enquiry.
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`;

module.exports = enquiryConfirmationEmail;