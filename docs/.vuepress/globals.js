const globals = {
  vm: null
}

export function setGlobalVueInstance (vue) {
  Object.defineProperty(globals, 'vm', { value: vue, writable: false })
}

export default globals