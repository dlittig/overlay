const radius = 5
const height = 35
const border = '1px solid #999'
const background = '#444'
const color = '#eee'

export const style = {
  inputWrapper: {
    display: 'flex',
    flexFlow: 'row wrap',
    alignSelf: 'end',
  },
  input: {
    fontFamily: 'monospace',
    borderTopLeftRadius: radius,
    borderBottomLeftRadius: radius,
    flexGrow: 10,
    paddingLeft: 10,
    height,
    border,
    borderRight: 'none !important',
    background,
    color,
    '&:focus': {
      outline: 'none'
    },
    '&::placeholder': {
      color: '#aaa'
    }
  },
  button: {
    fontSize: '1.00em',
    borderTopRightRadius: radius,
    borderBottomRightRadius: radius,
    flexGrow: 1,
    height: height+4,
    border,
    borderLeft: 'none !important',
    background,
    color,
    '&:hover': {
      background: '#555',
      cursor: 'pointer',
    }
  }
}
