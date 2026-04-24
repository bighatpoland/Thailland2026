function escapeText(value) {
  return String(value)
    .replaceAll('\\', '\\\\')
    .replaceAll(';', '\\;')
    .replaceAll(',', '\\,')
    .replaceAll('\n', '\\n')
}

export function buildIcs(events) {
  const now = new Date().toISOString().replace(/[-:]/g, '').replace(/\.\d{3}Z$/, 'Z')

  const body = events
    .map((event, index) =>
      [
        'BEGIN:VEVENT',
        `UID:thailand-2026-${index}@travel-companion`,
        `DTSTAMP:${now}`,
        `DTSTART;VALUE=DATE:${event.startDate}`,
        `DTEND;VALUE=DATE:${event.endDate}`,
        `SUMMARY:${escapeText(event.title)}`,
        `LOCATION:${escapeText(event.location)}`,
        `DESCRIPTION:${escapeText(event.description)}`,
        'END:VEVENT',
      ].join('\r\n'),
    )
    .join('\r\n')

  return ['BEGIN:VCALENDAR', 'VERSION:2.0', 'PRODID:-//Thailand 2026//Travel Companion//EN', body, 'END:VCALENDAR'].join(
    '\r\n',
  )
}

export function downloadIcs(events) {
  const calendar = buildIcs(events)
  const blob = new Blob([calendar], { type: 'text/calendar;charset=utf-8' })
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')

  link.href = url
  link.download = 'thailand-2026-key-dates.ics'
  document.body.append(link)
  link.click()
  link.remove()
  URL.revokeObjectURL(url)
}
