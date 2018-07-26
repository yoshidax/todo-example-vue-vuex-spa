// PDEA == props down / events up
export const toPdeaAccesser = propName => {
  return {
    get () {
      return this[propName]
    },
    set (val) {
      const pascalName = propName.replace(/^(.)/, (match, p) => p.toUpperCase())
      this[`set${pascalName}`](val)
    }
  }
}
