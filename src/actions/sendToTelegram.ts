"use server";

export async function sendToTelegram(formData: {
    name?: string;
    phone: string;
    comment?: string;
}) {
    try {
        const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN!;
        const CHAT_ID = process.env.TELEGRAM_CHAT_ID!;

        const text = `
📩 Новая заявка с сайта:
👤 Имя: ${formData.name || "-"}
📞 Телефон: +998${formData.phone}
💬 Комментарий: ${formData.comment || "-"}
`;

        await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                chat_id: CHAT_ID,
                text,
                parse_mode: "HTML",
            }),
        });

        return { ok: true };
    } catch (err) {
        console.error("Telegram action error:", err);
        return { ok: false };
    }
}
