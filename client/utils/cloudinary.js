export function cropUrl (path) {
  const regex = /upload/
  const url = typeof path === 'string' ? path.replace(regex, '/upload/c_crop,g_custom') : path
  return url
}
