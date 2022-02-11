export const createResponseCallback = (msg: string, cb?: Function) => () => {
  alert(msg)
  if (cb) cb()
}
