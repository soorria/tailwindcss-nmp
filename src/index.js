const plugin = require('tailwindcss/plugin')

const marginValue = value => `calc(${value} * (-1))`

const nmpPlugin = plugin(({ matchUtilities, theme }) => {
  const top = value => ({
    marginTop: marginValue(value),
    paddingTop: value,
  })
  const right = value => ({
    marginRight: marginValue(value),
    paddingRight: value,
  })
  const bottom = value => ({
    marginBottom: marginValue(value),
    paddingBottom: value,
  })
  const left = value => ({
    marginLeft: marginValue(value),
    paddingLeft: value,
  })

  const x = value => ({
    ...left(value),
    ...right(value),
  })
  const y = value => ({
    ...top(value),
    ...bottom(value),
  })

  const all = value => ({
    ...x(value),
    ...y(value),
  })

  matchUtilities(
    {
      nmp: all,

      nmpx: x,
      nmpy: y,

      nmpt: top,
      nmpr: right,
      nmpb: bottom,
      nmpl: left,
    },
    { values: theme('spacing') }
  )
})

module.exports = nmpPlugin
