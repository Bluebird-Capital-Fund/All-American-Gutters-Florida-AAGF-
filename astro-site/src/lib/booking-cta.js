/** Schedule destination after form submit (calendar lives on thank-you). */
export const FORM_THANK_YOU_PATH = '/thank-you/'
export const BOOKING_THANK_YOU_PATH = '/booking-confirmation/'

/** LeadConnector calendar widget (embedded on /thank-you/). */
export const BOOKING_WIDGET_SRC =
  'https://api.leadconnectorhq.com/widget/booking/Hmt65ZPr8tHAYT6APqpD'
export const BOOKING_WIDGET_ID = 'Hmt65ZPr8tHAYT6APqpD'

/** Prefer thank-you schedule page; do not link to a standalone /book/ route. */
export const BOOKING_URL = FORM_THANK_YOU_PATH

export const BOOKING_CTA_LABEL = 'Book a Free Estimate'
