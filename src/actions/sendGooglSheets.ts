"use server";

const googleScriptURL =
  "https://script.google.com/macros/s/AKfycbwsFrR2lVWttdJhiwu8MaGCemh9E1AWsF4XLsiL-slpL0OrT5K6OXoOUJWTFkUnTyz4Eg/exec";

export const sendGoogleSheets = async (formData: {
  name?: string;
  phone: string;
  comment?: string;
}) => {
  try {
    const res = await fetch(googleScriptURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: formData.name,
        phone: formData.phone,
        comment: formData.comment,
      }),
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Google Sheets ga yuborishda xatolik");
    }

    return { ok: true };
  } catch (err) {
    console.error("❌ Google Sheets error:", err);
    return { ok: false, error: err };
  }
};
