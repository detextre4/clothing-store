export const APP_NAMES = {
  camelcase: 'rabbit',
  kedabcase: 'rabbit',
  snakecase: 'rabbit',
  capitalize: 'Rabbit',
  values: () => Object.values(APP_NAMES),
}
export type APP_NAMES_TYPE = keyof typeof APP_NAMES

export const ALERT_TYPE = {
  success: "success",
  error: "error",
  values: () => Object.values(ALERT_TYPE),
}
export type ALERT_TYPE_TYPE = keyof typeof ALERT_TYPE

export const SCROLL_TO = {
  top: 'top',
  bottom: 'bottom',
  values: () => Object.values(SCROLL_TO),
}
export type SCROLL_TO_TYPE = keyof typeof SCROLL_TO
