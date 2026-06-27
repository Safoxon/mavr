const BOT_TOKEN = '8772423441:AAFxFi9lhwW-SiR3dFKZxuRQvML0uTipy94'
const CHAT_ID = '-1003582885536'

export async function sendTelegramNotification(ariza) {
  const message = `
📩 Yangi ariza!

👤 Ism: ${ariza.ism}
📞 Telefon: ${ariza.telefon}
🌍 Til: ${ariza.til}
📊 Daraja: ${ariza.daraja}
🕐 Qulay vaqt: ${ariza.vaqt}
  `.trim()

  const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`

  await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      chat_id: CHAT_ID,
      text: message,
      parse_mode: 'HTML'
    })
  })
}
