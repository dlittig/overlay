const background = '#444'
const radius = 5
const border = '1px solid #999'

export const style = {
  select: {
    color: '#eee',
    backgroundColor: background,
    height: 35,
    borderTopLeftRadius: radius,
    borderBottomLeftRadius: radius,
    borderRight: 'none',
    flexGrow: 2,
    border,
    paddingLeft: 5,
    paddingRight: 5,
    '&:focus': {
      outline: 'none'
    }
  },
  option: {
    color: '#eee'
  }
}
